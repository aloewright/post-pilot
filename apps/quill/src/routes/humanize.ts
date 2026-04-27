import { desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { humanizeJobs } from "../db/schema";
import * as schema from "../db/schema";
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

const HUMANIZE_SYSTEM_PROMPT = `You are a text rewriting specialist. Rewrite the user's text so it reads as naturally human-written while preserving all original meaning, facts, and information.

Rules:
- Vary sentence length: mix short punchy sentences with longer flowing ones
- Use natural connectives ("also", "but", "so") instead of formal transitions ("furthermore", "however", "it is worth noting")
- Use contractions freely (don't, it's, you'll, they're)
- Break repetitive AI patterns — avoid starting consecutive sentences with the same word or structure
- Use concrete, specific language instead of vague generalities
- Write in active voice; cut passive constructions
- Vary paragraph length — some short, some longer
- Remove AI filler phrases: "It's important to note", "In conclusion", "This is crucial", "It's worth mentioning", "Certainly", "Absolutely"
- Match the original text's tone and purpose (technical/accessible, formal/informal)

Output ONLY the rewritten text. No preamble, no explanation, no quotes.`;

// POST /v1/humanize — debit credits, rewrite via AI Gateway, return jobId.
// The rewrite is synchronous within the request; the job goes straight to
// "done" so the poll endpoint returns immediately.
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

  let output: string;
  try {
    output = await runHumanize(c.env, body.input);
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
    throw new HTTPException(502, { message: "Humanize failed. Credits refunded." });
  }

  await db
    .update(humanizeJobs)
    .set({ status: "done", output, completedAt: new Date() })
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

async function runHumanize(
  env: AppEnv["Bindings"],
  text: string
): Promise<string> {
  const gatewayId = env.AI_GATEWAY_ID;
  if (!(env.AI && gatewayId)) {
    // Local dev stub — return the input unchanged.
    return text;
  }
  const model = "dynamic/text_gen";
  try {
    const result = (await env.AI.run(
      model as Parameters<Ai["run"]>[0],
      {
        max_tokens: 8000,
        temperature: 0.85,
        messages: [
          { role: "system", content: HUMANIZE_SYSTEM_PROMPT },
          { role: "user", content: text },
        ],
      },
      { gateway: { id: gatewayId } }
    )) as { choices?: Array<{ message?: { content?: string } }> };
    const output = result.choices?.[0]?.message?.content?.trim() ?? "";
    if (!output) {
      throw new Error("Empty response from AI Gateway");
    }
    return output;
  } catch (e) {
    console.error(
      JSON.stringify({
        msg: "humanize_gateway_error",
        error: (e as Error).message?.slice(0, 400),
      })
    );
    throw new HTTPException(502, { message: "AI Gateway error" });
  }
}

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
