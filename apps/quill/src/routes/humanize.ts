import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { humanizeJobs } from "../db/schema";
import * as schema from "../db/schema";
import {
  getCachedToken,
  invalidateCachedToken,
  result as copyleaksResult,
  submit as copyleaksSubmit,
} from "../lib/copyleaks";
import {
  debit,
  HUMANIZE_PER_INPUT_CHAR_CAP,
  humanizeCost,
  isWithinHourlyHumanizeCap,
  refund,
} from "../lib/credits";
import { requireIdentity } from "../lib/identify";
import { ingestUsageEvent } from "../lib/polar";
import type { AppEnv } from "../index";

export const humanizeRouter = new Hono<AppEnv>();

const submitSchema = z.object({
  input: z.string().min(1).max(HUMANIZE_PER_INPUT_CHAR_CAP + 100),
});

function requireCopyleaks(c: { env: AppEnv["Bindings"] }) {
  const email = c.env.COPYLEAKS_EMAIL;
  const apiKey = c.env.COPYLEAKS_API_KEY;
  if (!(email && apiKey)) {
    throw new HTTPException(503, {
      message:
        "Humanize is not configured: COPYLEAKS_EMAIL + COPYLEAKS_API_KEY secrets missing.",
    });
  }
  return { email, apiKey };
}

// POST /v1/humanize — submit text, debit credits up front (refund on
// failure), forward to Copyleaks, return jobId.
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

  // Insert the job first so a credit-shortfall failure still leaves a
  // record + the user sees it in their history.
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

  const cl = requireCopyleaks(c);
  let token: string;
  try {
    token = await getCachedToken(c.env.KV, cl);
  } catch (e) {
    await db
      .update(humanizeJobs)
      .set({ status: "failed", error: (e as Error).message.slice(0, 500) })
      .where(eq(humanizeJobs.id, jobId));
    await refund(db, userId, cost, jobId);
    throw new HTTPException(502, { message: "Copyleaks login failed." });
  }

  const submitResult = await copyleaksSubmit(token, body.input);
  if (!submitResult.ok) {
    if (submitResult.error.includes("401")) {
      await invalidateCachedToken(c.env.KV);
    }
    await db
      .update(humanizeJobs)
      .set({ status: "failed", error: submitResult.error.slice(0, 500) })
      .where(eq(humanizeJobs.id, jobId));
    await refund(db, userId, cost, jobId);
    throw new HTTPException(502, { message: "Copyleaks submission failed." });
  }

  await db
    .update(humanizeJobs)
    .set({ status: "processing", scanId: submitResult.scanId })
    .where(eq(humanizeJobs.id, jobId));

  // Best-effort: tell Polar's meter we consumed credits. Doesn't bill —
  // the credit pack already paid for it — but powers the analytics view.
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
    status: "processing",
    creditsCharged: cost,
    balance: debited.newBalance,
  });
});

// GET /v1/humanize/:id — return current state. If still processing,
// forward-poll Copyleaks; on failure refund credits.
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

  if (job.status === "done" || job.status === "failed") {
    return c.json(serializeJob(job));
  }
  if (!job.scanId) {
    return c.json(serializeJob(job));
  }

  const cl = requireCopyleaks(c);
  const token = await getCachedToken(c.env.KV, cl);
  const r = await copyleaksResult(token, job.scanId);
  if (r.status === "processing") {
    return c.json(serializeJob(job));
  }
  if (r.status === "failed") {
    await db
      .update(humanizeJobs)
      .set({
        status: "failed",
        error: r.error.slice(0, 500),
        completedAt: new Date(),
      })
      .where(eq(humanizeJobs.id, jobId));
    await refund(db, userId, humanizeCost(job.inputChars), jobId);
    return c.json({ ...serializeJob(job), status: "failed", error: r.error });
  }
  await db
    .update(humanizeJobs)
    .set({ status: "done", output: r.output, completedAt: new Date() })
    .where(eq(humanizeJobs.id, jobId));
  return c.json({
    ...serializeJob(job),
    status: "done",
    output: r.output,
    completedAt: new Date().toISOString(),
  });
});

// GET /v1/humanize — recent jobs (newest 20). Sweeps stale-processing
// rows so the list is always current; refunds on failure.
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

  const stale = rows.filter((r) => r.status === "processing" && r.scanId);
  if (stale.length > 0 && c.env.COPYLEAKS_EMAIL && c.env.COPYLEAKS_API_KEY) {
    const cl = {
      email: c.env.COPYLEAKS_EMAIL,
      apiKey: c.env.COPYLEAKS_API_KEY,
    };
    try {
      const token = await getCachedToken(c.env.KV, cl);
      await Promise.all(
        stale.map(async (r) => {
          const cr = await copyleaksResult(token, r.scanId as string);
          if (cr.status === "done") {
            await db
              .update(humanizeJobs)
              .set({
                status: "done",
                output: cr.output,
                completedAt: new Date(),
              })
              .where(eq(humanizeJobs.id, r.id));
            r.status = "done";
            r.output = cr.output;
          } else if (cr.status === "failed") {
            await db
              .update(humanizeJobs)
              .set({
                status: "failed",
                error: cr.error.slice(0, 500),
                completedAt: new Date(),
              })
              .where(eq(humanizeJobs.id, r.id));
            await refund(db, userId, humanizeCost(r.inputChars), r.id);
            r.status = "failed";
            r.error = cr.error;
          }
        })
      );
    } catch {
      // best-effort
    }
  }

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
  };
}
