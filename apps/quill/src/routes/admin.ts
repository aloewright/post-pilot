import { desc, eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import * as schema from "../db/schema";
import { evalHarnessRuns } from "../db/schema";
import type { AppEnv } from "../index";

export const adminRouter = new Hono<AppEnv>();

// Bearer-style auth on every admin route — header `x-admin-key` must match
// the ADMIN_API_KEY worker secret. Refuses if the secret isn't configured
// (so a missing secret can't be exploited as a permanent open door).
adminRouter.use("*", async (c, next) => {
  const expected = c.env.ADMIN_API_KEY;
  if (!expected) {
    throw new HTTPException(503, { message: "Admin API not configured." });
  }
  const provided = c.req.header("x-admin-key");
  if (!provided || provided !== expected) {
    throw new HTTPException(401, { message: "Invalid admin key." });
  }
  await next();
});

const ingestRowSchema = z.object({
  guideSlug: z.string().min(1),
  presetSlug: z.string().nullable(),
  model: z.string().min(1),
  inputHash: z.string().min(1),
  detScore: z.number().min(0).max(1).nullable(),
  judgeFidelity: z.number().min(0).max(100).nullable(),
  judgeStatus: z.enum(["ok", "skipped", "error"]).nullable(),
  outputSnapshotJson: z.string().nullable(),
  notesJson: z.string().nullable(),
});

const ingestSchema = z.object({
  rows: z.array(ingestRowSchema).min(1).max(500),
});

// POST /v1/admin/eval/ingest — bulk insert harness rows into eval_harness_runs.
adminRouter.post("/eval/ingest", async (c) => {
  const body = ingestSchema.parse(await c.req.json());
  const db = drizzle(c.env.DB, { schema });

  const values = body.rows.map((r) => ({
    id: crypto.randomUUID(),
    ...r,
  }));

  await db.insert(evalHarnessRuns).values(values);

  return c.json({ ok: true, inserted: values.length });
});

// GET /v1/admin/eval/runs — most recent 200 runs across all guides, with
// optional ?guide=slug filter. Newest first.
adminRouter.get("/eval/runs", async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const guide = c.req.query("guide");

  const rows = await db
    .select()
    .from(evalHarnessRuns)
    .where(guide ? eq(evalHarnessRuns.guideSlug, guide) : undefined)
    .orderBy(desc(evalHarnessRuns.runAt))
    .limit(200);

  return c.json({
    items: rows.map((r) => ({
      id: r.id,
      runAt: r.runAt instanceof Date ? r.runAt.toISOString() : r.runAt,
      guideSlug: r.guideSlug,
      presetSlug: r.presetSlug,
      model: r.model,
      detScore: r.detScore,
      judgeFidelity: r.judgeFidelity,
      judgeStatus: r.judgeStatus,
    })),
    count: rows.length,
  });
});

// GET /v1/admin/eval/summary — per-guide latest stats (for trend dashboards
// later). Returns the most recent run per guide.
adminRouter.get("/eval/summary", async (c) => {
  const db = drizzle(c.env.DB, { schema });
  const rows = (await db.all(
    sql`
      SELECT guide_slug, MAX(run_at) AS latest_run_at,
             AVG(det_score) AS avg_det_score,
             AVG(judge_fidelity) AS avg_judge_fidelity,
             COUNT(*) AS run_count
      FROM eval_harness_runs
      GROUP BY guide_slug
      ORDER BY latest_run_at DESC
    `
  )) as unknown as Record<string, unknown>[];

  const items = rows.map((r) => ({
    guideSlug: r.guide_slug as string,
    latestRunAt: r.latest_run_at as number,
    avgDetScore: r.avg_det_score as number | null,
    avgJudgeFidelity: r.avg_judge_fidelity as number | null,
    runCount: r.run_count as number,
  }));

  return c.json({ items, count: items.length });
});
