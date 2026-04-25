import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import type { AppEnv } from "../index";
import { applyPresetToSystemPrompt } from "../lib/export";
import { getGuide } from "../lib/guides";
import { getPreset } from "../lib/presets";
import { analyzeText, scoreDeterministic } from "../lib/rubric";

const bodySchema = z.object({
  guide: z.string().min(1),
  preset: z.string().optional(),
  // Model is optional; when omitted the server falls back to the
  // DEFAULT_MODEL var binding so it can be swapped from the dashboard.
  model: z.string().min(1).optional(),
  input: z.string().min(1).max(4000),
  temperature: z.number().min(0).max(1).default(0.7),
});

export const applyRouter = new Hono<AppEnv>();

// POST /v1/apply — render a guide + preset against an input via AI Gateway.
// Routes through the gateway's OpenAI-compatible Unified endpoint when both
// AI_GATEWAY_BASE_URL (= .../v1/{account}/{gateway}/compat/chat/completions)
// and AI_GATEWAY_TOKEN (= CF_AIG_TOKEN) are set. Otherwise returns a stub.
// AI_PROVIDER_KEY is optional — needed only when the gateway is not using
// BYOK / managed virtual keys for the upstream provider.
applyRouter.post("/", async (c) => {
  const body = bodySchema.parse(await c.req.json());

  const guide = getGuide(body.guide);
  if (!guide) {
    throw new HTTPException(404, {
      message: `Guide '${body.guide}' not found`,
    });
  }

  const preset = body.preset ? (getPreset(body.preset) ?? null) : null;
  if (body.preset && !preset) {
    throw new HTTPException(404, {
      message: `Preset '${body.preset}' not found`,
    });
  }

  const systemPrompt = applyPresetToSystemPrompt(guide, preset);
  const model = body.model ?? c.env.DEFAULT_MODEL ?? "openai/gpt-5.5";
  const output = await runCompletion({
    env: c.env,
    systemPrompt,
    input: body.input,
    model,
    temperature: body.temperature,
  });

  // Compute deterministic rubric snapshot server-side. Judge scoring is
  // deferred (Post Pilot milestone M5) and runs out of band.
  const snapshot = analyzeText(output);
  const score = scoreDeterministic(snapshot, guide.eval_rubric);

  return c.json({
    guide: guide.slug,
    preset: preset?.slug ?? null,
    model,
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
  // OpenAI-compatible Unified endpoint. base is expected to already include
  // /compat/chat/completions — we POST directly. cf-aig-authorization
  // authenticates to the gateway; Authorization is the upstream provider
  // key and is only sent when AI_PROVIDER_KEY is set (omit for BYOK).
  const headers: Record<string, string> = {
    "cf-aig-authorization": `Bearer ${token}`,
    "content-type": "application/json",
  };
  if (args.env.AI_PROVIDER_KEY) {
    headers.Authorization = `Bearer ${args.env.AI_PROVIDER_KEY}`;
  }
  const r = await fetch(base, {
    method: "POST",
    headers,
    body: JSON.stringify({
      model: args.model,
      max_tokens: 1024,
      temperature: args.temperature,
      messages: [
        { role: "system", content: args.systemPrompt },
        { role: "user", content: args.input },
      ],
    }),
  });
  if (!r.ok) {
    throw new HTTPException(502, { message: "AI Gateway error" });
  }
  const data = (await r.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  return data.choices?.[0]?.message?.content ?? "";
}

function seededStub(input: string): string {
  const trimmed = input.trim();
  return `Thanks for reaching out about: ${trimmed.slice(0, 80)}${
    trimmed.length > 80 ? "…" : ""
  }\n\nA replacement is on its way. You'll have it by Friday.`;
}
