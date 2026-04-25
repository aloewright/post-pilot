import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { applyPresetToSystemPrompt } from "../lib/export";
import { getGuide } from "../lib/guides";
import { getPreset } from "../lib/presets";
import { analyzeText, scoreDeterministic } from "../lib/rubric";
import type { AppEnv } from "../index";

const bodySchema = z.object({
  guide: z.string().min(1),
  preset: z.string().optional(),
  model: z
    .enum([
      "claude-sonnet-4-6",
      "claude-opus-4-7",
      "gpt-5",
      "llama-4-70b",
    ])
    .default("claude-sonnet-4-6"),
  input: z.string().min(1).max(4000),
  temperature: z.number().min(0).max(1).default(0.7),
});

export const applyRouter = new Hono<AppEnv>();

// POST /v1/apply — render a guide + preset against an input via AI Gateway.
// M1 ships a deterministic stub so the playground works end-to-end before
// AI Gateway credentials exist. Once you add AI_GATEWAY_BASE_URL + token
// (or the AI binding), swap callAIGateway in for the stub.
applyRouter.post("/", async (c) => {
  const body = bodySchema.parse(await c.req.json());

  const guide = getGuide(body.guide);
  if (!guide) {
    throw new HTTPException(404, { message: `Guide '${body.guide}' not found` });
  }

  const preset = body.preset ? getPreset(body.preset) ?? null : null;
  if (body.preset && !preset) {
    throw new HTTPException(404, {
      message: `Preset '${body.preset}' not found`,
    });
  }

  const systemPrompt = applyPresetToSystemPrompt(guide, preset);
  const output = await runCompletion({
    env: c.env,
    systemPrompt,
    input: body.input,
    model: body.model,
    temperature: body.temperature,
  });

  // Compute deterministic rubric snapshot server-side. Judge scoring is
  // deferred (Quill milestone M5) and runs out of band.
  const snapshot = analyzeText(output);
  const score = scoreDeterministic(snapshot, guide.eval_rubric);

  return c.json({
    guide: guide.slug,
    preset: preset?.slug ?? null,
    model: body.model,
    output,
    snapshot,
    deterministic_score: score.score,
    deterministic_details: score.details,
    judge: { status: "deferred", message: "Judge runs land in M5." },
    requestId: c.get("requestId"),
  });
});

async function runCompletion(args: {
  env: AppEnv["Bindings"];
  systemPrompt: string;
  input: string;
  model: string;
  temperature: number;
}): Promise<string> {
  // If an AI Gateway URL + token are configured, route through it. Otherwise
  // fall back to the seeded stub so /v1/apply stays usable in dev.
  const base = args.env.AI_GATEWAY_BASE_URL;
  const token = args.env.AI_GATEWAY_TOKEN;
  if (!(base && token)) {
    return seededStub(args.input);
  }
  // Anthropic-shaped request via AI Gateway. Real wiring is M3 — left as
  // a clearly-marked TODO; this branch is unreachable until vars are set.
  // Keeping the call guarded keeps M1 deployable today.
  const r = await fetch(`${base}/anthropic/v1/messages`, {
    method: "POST",
    headers: {
      "x-api-key": token,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: args.model,
      max_tokens: 1024,
      temperature: args.temperature,
      system: args.systemPrompt,
      messages: [{ role: "user", content: args.input }],
    }),
  });
  if (!r.ok) {
    throw new HTTPException(502, { message: "AI Gateway error" });
  }
  const data = (await r.json()) as {
    content?: Array<{ type: string; text: string }>;
  };
  return data.content?.[0]?.text ?? "";
}

function seededStub(input: string): string {
  const trimmed = input.trim();
  return `Thanks for reaching out about: ${trimmed.slice(0, 80)}${
    trimmed.length > 80 ? "…" : ""
  }\n\nA replacement is on its way. You'll have it by Friday.`;
}
