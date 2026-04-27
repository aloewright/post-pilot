import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { createAuth } from "../auth";
import { humanizeJobs } from "../db/schema";
import * as schema from "../db/schema";
import {
  getCachedToken,
  invalidateCachedToken,
  result as copyleaksResult,
  submit as copyleaksSubmit,
} from "../lib/copyleaks";
import { checkQuota, QUOTA, recordUsage } from "../lib/humanize-quota";
import type { AppEnv } from "../index";

export const humanizeRouter = new Hono<AppEnv>();

const submitSchema = z.object({
  input: z.string().min(1).max(QUOTA.PER_INPUT_CHAR_CAP + 100),
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

// POST /v1/humanize — accept input, gate on plan + quota, submit to
// Copyleaks, persist a queued/processing job, return { jobId }.
humanizeRouter.post("/", async (c) => {
  const auth = createAuth(c.env, new URL(c.req.url).origin);
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session?.user) {
    throw new HTTPException(401, { message: "Sign in to humanize text." });
  }
  const userId = session.user.id;

  const body = submitSchema.parse(await c.req.json());
  const inputChars = body.input.length;

  const db = drizzle(c.env.DB, { schema });

  const quota = await checkQuota(db, userId, inputChars);
  if (!quota.ok) {
    const status = quota.reason === "not_paid" ? 402 : 429;
    throw new HTTPException(status, { message: quota.message });
  }

  const cl = requireCopyleaks(c);
  const jobId = crypto.randomUUID();

  // Insert as queued first so even if Copyleaks call fails we have a row
  // to surface the error back to the user (and so the hourly counter
  // catches the attempt).
  await db.insert(humanizeJobs).values({
    id: jobId,
    userId,
    status: "queued",
    input: body.input,
    inputChars,
  });

  let token: string;
  try {
    token = await getCachedToken(c.env.KV, cl);
  } catch (e) {
    await db
      .update(humanizeJobs)
      .set({ status: "failed", error: (e as Error).message.slice(0, 500) })
      .where(eq(humanizeJobs.id, jobId));
    throw new HTTPException(502, { message: "Copyleaks login failed." });
  }

  const submitResult = await copyleaksSubmit(token, body.input);
  if (!submitResult.ok) {
    // 401 here can mean the cached token expired early — drop the cache so
    // the next request re-logins.
    if (submitResult.error.includes("401")) {
      await invalidateCachedToken(c.env.KV);
    }
    await db
      .update(humanizeJobs)
      .set({ status: "failed", error: submitResult.error.slice(0, 500) })
      .where(eq(humanizeJobs.id, jobId));
    throw new HTTPException(502, { message: "Copyleaks submission failed." });
  }

  await db
    .update(humanizeJobs)
    .set({ status: "processing", scanId: submitResult.scanId })
    .where(eq(humanizeJobs.id, jobId));

  return c.json({ jobId, status: "processing" });
});

// GET /v1/humanize/:id — return current state. If still processing, ask
// Copyleaks; if it just finished, finalize the row + bump usage.
humanizeRouter.get("/:id", async (c) => {
  const auth = createAuth(c.env, new URL(c.req.url).origin);
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session?.user) {
    throw new HTTPException(401, { message: "Sign in to view jobs." });
  }
  const userId = session.user.id;
  const id = c.req.param("id");

  const db = drizzle(c.env.DB, { schema });
  const rows = await db
    .select()
    .from(humanizeJobs)
    .where(eq(humanizeJobs.id, id))
    .limit(1);
  const job = rows[0];
  if (!job || job.userId !== userId) {
    throw new HTTPException(404, { message: "Job not found." });
  }

  if (job.status === "done" || job.status === "failed") {
    return c.json(serializeJob(job));
  }

  // Still processing — forward-poll Copyleaks and finalize if ready.
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
      .where(eq(humanizeJobs.id, id));
    return c.json({ ...serializeJob(job), status: "failed", error: r.error });
  }
  // r.status === "done"
  await db
    .update(humanizeJobs)
    .set({ status: "done", output: r.output, completedAt: new Date() })
    .where(eq(humanizeJobs.id, id));
  await recordUsage(db, userId, job.inputChars);
  return c.json({
    ...serializeJob(job),
    status: "done",
    output: r.output,
    completedAt: new Date().toISOString(),
  });
});

// GET /v1/humanize — list the user's recent jobs (newest first, last 20).
// Side effect: any of the user's stale-processing jobs get a forward-poll
// sweep so the list always shows current state. No background cron.
humanizeRouter.get("/", async (c) => {
  const auth = createAuth(c.env, new URL(c.req.url).origin);
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session?.user) {
    throw new HTTPException(401, { message: "Sign in to view jobs." });
  }
  const userId = session.user.id;

  const db = drizzle(c.env.DB, { schema });
  const rows = await db
    .select()
    .from(humanizeJobs)
    .where(eq(humanizeJobs.userId, userId))
    .orderBy(desc(humanizeJobs.createdAt))
    .limit(20);

  // Sweep stale-processing jobs in parallel. Failures here don't break the
  // list response — the row just stays "processing" and next list will retry.
  const stale = rows.filter((r) => r.status === "processing" && r.scanId);
  if (stale.length > 0 && c.env.COPYLEAKS_EMAIL && c.env.COPYLEAKS_API_KEY) {
    const cl = { email: c.env.COPYLEAKS_EMAIL, apiKey: c.env.COPYLEAKS_API_KEY };
    try {
      const token = await getCachedToken(c.env.KV, cl);
      await Promise.all(
        stale.map(async (r) => {
          const cr = await copyleaksResult(token, r.scanId as string);
          if (cr.status === "done") {
            await db
              .update(humanizeJobs)
              .set({ status: "done", output: cr.output, completedAt: new Date() })
              .where(eq(humanizeJobs.id, r.id));
            await recordUsage(db, userId, r.inputChars);
            r.status = "done";
            r.output = cr.output;
          } else if (cr.status === "failed") {
            await db
              .update(humanizeJobs)
              .set({ status: "failed", error: cr.error.slice(0, 500), completedAt: new Date() })
              .where(eq(humanizeJobs.id, r.id));
            r.status = "failed";
            r.error = cr.error;
          }
        })
      );
    } catch {
      // Sweep is best-effort — surface raw rows below.
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
    createdAt: j.createdAt instanceof Date ? j.createdAt.toISOString() : j.createdAt,
    completedAt:
      j.completedAt instanceof Date
        ? j.completedAt.toISOString()
        : j.completedAt,
  };
}
