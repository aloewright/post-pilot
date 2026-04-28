import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { humanizeJobs } from "../db/schema";
import * as schema from "../db/schema";
import { extractSegments, getCachedToken, scanForReport } from "../lib/copyleaks";
import {
  debit,
  HUMANIZE_PER_INPUT_CHAR_CAP,
  humanizeCost,
  isWithinHourlyHumanizeCap,
  refund,
} from "../lib/credits";
import { humanizeText } from "../lib/humanizer";
import { getTopPhrases, persistFlaggedSegments } from "../lib/humanizer/phrase-store";
import { requireIdentity } from "../lib/identify";
import { ingestUsageEvent } from "../lib/polar";
import type { AppEnv } from "../index";

export const humanizeRouter = new Hono<AppEnv>();

const submitSchema = z.object({
  input: z.string().min(1).max(HUMANIZE_PER_INPUT_CHAR_CAP + 100),
  // When true, route to the multi-pass `ninja` engine; otherwise `aggressive`.
  // The 1-2 character extra costs nothing here because credits are charged on
  // input length, but ninja runs an additional re-humanize pass on flagged
  // sentences and tends to score lower on detectors.
  extraPass: z.boolean().optional().default(false),
});

// POST /v1/humanize — debit credits, run the multi-pass humanizer engine,
// scan the result through Copyleaks, persist freshly-flagged phrases, and
// return both scores plus the segment breakdown. The job is processed
// synchronously; the row is created in `queued`, briefly flipped to
// `processing`, and ends in `done` (or `failed` with a refund).
humanizeRouter.post("/", async (c) => {
  const id = await requireIdentity(c);
  const userId = id.userId;

  const body = submitSchema.parse(await c.req.json());
  const inputChars = body.input.length;

  if (inputChars > HUMANIZE_PER_INPUT_CHAR_CAP) {
    throw new HTTPException(400, {
      message: `Input exceeds ${HUMANIZE_PER_INPUT_CHAR_CAP.toLocaleString()} characters.`,
    });
  }

  const db = drizzle(c.env.DB, { schema });

  if (!(await isWithinHourlyHumanizeCap(db, userId))) {
    throw new HTTPException(429, {
      message: "Hourly humanize limit reached. Try again shortly.",
    });
  }

  const cost = humanizeCost(inputChars);
  const jobId = crypto.randomUUID();

  await db.insert(humanizeJobs).values({
    id: jobId,
    userId,
    status: "queued",
    input: body.input,
    inputChars,
  });

  const debited = await debit(db, userId, cost, "humanize", jobId, {
    inputChars,
  });
  if (!debited.ok) {
    await db
      .update(humanizeJobs)
      .set({ status: "failed", error: "Insufficient credits." })
      .where(eq(humanizeJobs.id, jobId));
    throw new HTTPException(402, {
      message: `Need ${cost.toLocaleString()} credits, have ${debited.balance.toLocaleString()}. Buy more to continue.`,
    });
  }

  await db
    .update(humanizeJobs)
    .set({ status: "processing" })
    .where(eq(humanizeJobs.id, jobId));

  // Best-effort: load the top frequency-ranked AI phrases the detector has
  // flagged before. These get injected into the system prompt as an explicit
  // avoid-list. A failure here is non-fatal — we just rewrite without hints.
  let additionalAvoidPhrases: string[] = [];
  try {
    additionalAvoidPhrases = await getTopPhrases(db, 50);
  } catch (e) {
    console.warn(
      JSON.stringify({
        msg: "top_phrases_load_failed",
        error: (e as Error).message?.slice(0, 200),
      })
    );
  }

  let result;
  try {
    result = await humanizeText(c.env, body.input, {
      level: body.extraPass ? "ninja" : "aggressive",
      style: "humanize",
      tone: "conversational",
      language: "en",
      additionalAvoidPhrases,
    });
  } catch (e) {
    await db
      .update(humanizeJobs)
      .set({
        status: "failed",
        error: (e as Error).message.slice(0, 500),
        completedAt: new Date(),
      })
      .where(eq(humanizeJobs.id, jobId));
    await refund(db, userId, cost, jobId);
    throw new HTTPException(502, {
      message: "Humanize failed. Credits refunded.",
    });
  }

  // Best-effort Copyleaks scan for the user-facing report. If creds are
  // missing or the call fails, we still return the engine's output and the
  // local heuristic score — Copyleaks just isn't available for this job.
  let copyleaksReport:
    | {
        aiScore: number;
        segments: Array<{ text: string; aiScore: number }>;
        raw: string;
      }
    | null = null;
  if (c.env.COPYLEAKS_EMAIL && c.env.COPYLEAKS_API_KEY) {
    try {
      const token = await getCachedToken(c.env.KV, {
        email: c.env.COPYLEAKS_EMAIL,
        apiKey: c.env.COPYLEAKS_API_KEY,
      });
      copyleaksReport = await scanForReport(token, result.fullText);
    } catch (e) {
      console.warn(
        JSON.stringify({
          msg: "copyleaks_scan_failed",
          error: (e as Error).message?.slice(0, 200),
        })
      );
    }
  }

  // Persist freshly-flagged phrases so the next request's avoid-list grows.
  // waitUntil keeps the response fast — failures here just mean we don't
  // learn from this run.
  if (copyleaksReport && copyleaksReport.segments.length > 0) {
    c.executionCtx.waitUntil(
      persistFlaggedSegments(db, copyleaksReport.segments).catch((e) =>
        console.warn(
          JSON.stringify({
            msg: "persist_phrases_failed",
            error: (e as Error).message?.slice(0, 200),
          })
        )
      )
    );
  }

  // Three-state discriminator so the client can tell "Copyleaks isn't
  // configured" apart from "Copyleaks ran and returned zeros." Persisted
  // on the row so GET requests can read it back without inferring.
  const copyleaksStatus: "ok" | "skipped" | "error" =
    !c.env.COPYLEAKS_EMAIL || !c.env.COPYLEAKS_API_KEY
      ? "skipped"
      : copyleaksReport
        ? "ok"
        : "error";

  await db
    .update(humanizeJobs)
    .set({
      status: "done",
      output: result.fullText,
      completedAt: new Date(),
      // Local heuristic detector score, 0-100.
      localScore: Math.round(result.finalScore),
      // Copyleaks's 0-1 confidence stored as basis points (× 10000).
      copyleaksScoreBp: copyleaksReport
        ? Math.round(copyleaksReport.aiScore * 10000)
        : null,
      copyleaksReportJson: copyleaksReport ? copyleaksReport.raw : null,
      copyleaksStatus,
    })
    .where(eq(humanizeJobs.id, jobId));

  if (c.env.QUILL_POLAR_ACCESS_TOKEN) {
    c.executionCtx.waitUntil(
      ingestUsageEvent(
        { accessToken: c.env.QUILL_POLAR_ACCESS_TOKEN },
        {
          externalCustomerId: userId,
          credits: cost,
          kind: "humanize",
          refId: jobId,
        }
      )
    );
  }

  return c.json({
    jobId,
    status: "done",
    creditsCharged: cost,
    balance: debited.newBalance,
    localScore: Math.round(result.finalScore),
    copyleaksStatus,
    copyleaksScore: copyleaksReport
      ? Math.round(copyleaksReport.aiScore * 100)
      : null,
    flaggedSegments: copyleaksReport
      ? copyleaksReport.segments
          .filter((s) => s.aiScore >= 0.5)
          .map((s) => ({
            text: s.text,
            aiScore: Math.round(s.aiScore * 100),
          }))
      : [],
  });
});

// GET /v1/humanize/:id — return current state.
humanizeRouter.get("/:id", async (c) => {
  const id = await requireIdentity(c);
  const userId = id.userId;
  const jobId = c.req.param("id");

  const db = drizzle(c.env.DB, { schema });
  const rows = await db
    .select()
    .from(humanizeJobs)
    .where(eq(humanizeJobs.id, jobId))
    .limit(1);
  const job = rows[0];
  if (!job || job.userId !== userId) {
    throw new HTTPException(404, { message: "Job not found." });
  }

  return c.json(serializeJob(job));
});

// GET /v1/humanize — recent 20 jobs.
humanizeRouter.get("/", async (c) => {
  const id = await requireIdentity(c);
  const userId = id.userId;

  const db = drizzle(c.env.DB, { schema });
  const rows = await db
    .select()
    .from(humanizeJobs)
    .where(eq(humanizeJobs.userId, userId))
    .orderBy(desc(humanizeJobs.createdAt))
    .limit(20);

  return c.json({ items: rows.map(serializeJob) });
});

function serializeJob(j: typeof humanizeJobs.$inferSelect) {
  return {
    id: j.id,
    status: j.status,
    inputChars: j.inputChars,
    input: j.input,
    output: j.output,
    error: j.error,
    createdAt:
      j.createdAt instanceof Date ? j.createdAt.toISOString() : j.createdAt,
    completedAt:
      j.completedAt instanceof Date
        ? j.completedAt.toISOString()
        : j.completedAt,
    localScore: j.localScore,
    // Stored as basis points; client wants a 0-100 percentage.
    copyleaksScore:
      j.copyleaksScoreBp != null ? Math.round(j.copyleaksScoreBp / 100) : null,
    // Persisted at write time. Legacy rows (column null) fall back to
    // "skipped" — they predate the column, so we can't know the true state.
    copyleaksStatus: (j.copyleaksStatus ?? "skipped") as
      | "ok"
      | "skipped"
      | "error",
    flaggedSegments: parseFlaggedFromReport(j.copyleaksReportJson),
  };
}

// Re-parse the stored Copyleaks raw response to surface the per-segment
// overlay on GET. Mirrors the >= 0.5 threshold used in the POST handler so
// the client sees the same set on both endpoints.
function parseFlaggedFromReport(
  raw: string | null
): Array<{ text: string; aiScore: number }> {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    const segs = extractSegments(parsed);
    return segs
      .filter((s) => s.aiScore >= 0.5)
      .map((s) => ({ text: s.text, aiScore: Math.round(s.aiScore * 100) }));
  } catch {
    return [];
  }
}
