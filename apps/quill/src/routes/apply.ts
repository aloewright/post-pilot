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
  // Use the Workers AI binding with slug-based AI Gateway routing — same
  // pattern as /v1/images. The binding handles cf-aig-authorization
  // automatically when `gateway.id` is set; no AI_GATEWAY_BASE_URL or
  // bearer-token plumbing needed. Falls through to a stub when neither
  // the binding nor a gateway slug is configured (e.g. local dev).
  const gatewayId = args.env.AI_GATEWAY_ID;
  if (!(args.env.AI && gatewayId)) {
    return seededStub(args.input);
  }
  const opts = { gateway: { id: gatewayId } };
  try {
    const result = (await args.env.AI.run(
      args.model as Parameters<Ai["run"]>[0],
      {
        // OpenAI gpt-5+/o1+ are strict: they require max_completion_tokens
        // (not max_tokens) and only accept temperature=1 (the default).
        // Older / non-OpenAI models keep the conventional shape.
        ...(/^openai\/(gpt-5|o[1-9])/.test(args.model)
          ? { max_completion_tokens: 1024 }
          : { max_tokens: 1024, temperature: args.temperature }),
        messages: [
          { role: "system", content: args.systemPrompt },
          { role: "user", content: args.input },
        ],
      },
      opts,
    )) as { choices?: Array<{ message?: { content?: string } }> };
    return result.choices?.[0]?.message?.content ?? "";
  } catch (e) {
    console.error(
      JSON.stringify({
        msg: "ai_gateway_run_error",
        gatewayId,
        model: args.model,
        error: (e as Error).message?.slice(0, 400),
      }),
    );
    throw new HTTPException(502, { message: "AI Gateway error" });
  }
}

function seededStub(input: string): string {
  const trimmed = input.trim();
  return `Thanks for reaching out about: ${trimmed.slice(0, 80)}${
    trimmed.length > 80 ? "…" : ""
  }\n\nA replacement is on its way. You'll have it by Friday.`;
}
