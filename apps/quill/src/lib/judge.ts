import type { AppEnv } from "../index";
import type { Guide } from "./types";

export type JudgeResult =
  | {
      status: "ok";
      fidelity: number;
      perCriterion: Array<{ id: string; score: number; weight: number }>;
      notes: string[];
    }
  | { status: "skipped"; reason: string }
  | { status: "error"; reason: string };

// Race the gateway call against a timer — env.AI.run doesn't accept an
// AbortSignal, so a Promise.race is the cleanest way to bound latency.
// Same shape as src/lib/humanizer/providers.ts withTimeout.
async function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      p,
      new Promise<T>((_, reject) => {
        timer = setTimeout(
          () => reject(new Error(`judge call timed out after ${ms}ms`)),
          ms
        );
      }),
    ]);
  } finally {
    if (timer) {
      clearTimeout(timer);
    }
  }
}

function stripFences(s: string): string {
  let out = s.trim();
  if (out.startsWith("```")) {
    // remove leading fence (```json or ```), and trailing fence
    out = out.replace(/^```[a-zA-Z]*\s*\n?/, "");
    if (out.endsWith("```")) {
      out = out.slice(0, -3);
    }
  }
  return out.trim();
}

function clamp01(n: number): number {
  if (!Number.isFinite(n)) {
    return 0.5;
  }
  if (n < 0) {
    return 0;
  }
  if (n > 1) {
    return 1;
  }
  return n;
}

export async function judgeOutput(
  env: AppEnv["Bindings"],
  guide: Guide,
  input: string,
  output: string
): Promise<JudgeResult> {
  const criteria = guide.eval_rubric.judge_criteria;
  if (!criteria || criteria.length === 0) {
    return { status: "skipped", reason: "no_criteria" };
  }

  const gatewayId = env.AI_GATEWAY_ID;
  if (!(env.AI && gatewayId)) {
    return { status: "skipped", reason: "gateway_unavailable" };
  }

  const criteriaList = criteria.map((c) => `- ${c.id}: ${c.prompt}`).join("\n");

  const systemPrompt = [
    `You are a literary judge evaluating whether a piece of text faithfully imitates the voice of ${guide.author} (${guide.kicker}).`,
    "",
    "Voice summary:",
    `- Syntax: ${guide.voice_spec.syntax}`,
    `- Figurative language: ${guide.voice_spec.figurative_language}`,
    "",
    "Score each criterion below from 0.0 (not at all) to 1.0 (fully embodied). Be strict — reward only genuine fidelity, not surface mimicry.",
    "",
    "Criteria:",
    criteriaList,
    "",
    'Respond with STRICT JSON in this exact shape: {"scores":[{"id":"criterion-id","score":0.0},...],"notes":["short observation","..."]}',
    "Notes should be 1-3 short observations (each under 200 chars) calling out what worked and what missed.",
    "Output ONLY the JSON object. No preamble, no markdown fences, no explanation.",
  ].join("\n");

  const userPrompt = [
    "ORIGINAL INPUT (what the writer was asked to render):",
    input,
    "",
    "OUTPUT TO SCORE (the candidate imitation):",
    output,
  ].join("\n");

  // Why a direct Workers AI model id rather than dynamic/research_gen:
  //   1. env.AI.run("dynamic/foo", ...) treats the slug as a literal model id and 404s.
  //   2. env.AI.gateway(id).run({provider:"compat", ...}) was observed to skip nodes in
  //      the configured fallback chain on this account.
  //   3. fetch() to gateway.ai.cloudflare.com/.../compat/chat/completions from inside a
  //      Worker returns Cloudflare API code 2019 — the request is rejected before the
  //      gateway sees it.
  // The dynamic/research_gen route IS configured (see gateway "x") and works via direct
  // curl; switch this back once the binding/fetch path is fixed upstream.
  let raw: string;
  try {
    const result = (await withTimeout(
      env.AI.run(
        "@cf/openai/gpt-oss-120b" as Parameters<Ai["run"]>[0],
        {
          max_tokens: 800,
          temperature: 0.2,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
        },
        { gateway: { id: gatewayId } }
      ),
      15_000
    )) as { choices?: Array<{ message?: { content?: string } }> };
    raw = result.choices?.[0]?.message?.content ?? "";
  } catch (e) {
    const errorMsg = (e as Error).message;
    console.warn(
      JSON.stringify({
        msg: "judge_failed",
        reason: "gateway_error",
        error: errorMsg?.slice(0, 200),
      })
    );
    return { status: "error", reason: "gateway_error" };
  }

  const trimmed = raw.trim();
  if (!trimmed) {
    console.warn(
      JSON.stringify({ msg: "judge_failed", reason: "empty_response" })
    );
    return { status: "error", reason: "empty_response" };
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(stripFences(trimmed));
  } catch {
    // Fallback: extract the first balanced-looking JSON object from the response.
    // Models occasionally wrap the JSON in prose despite the system prompt.
    const match = trimmed.match(/\{[\s\S]*\}/);
    if (!match) {
      console.warn(
        JSON.stringify({ msg: "judge_failed", reason: "parse_failure" })
      );
      return { status: "error", reason: "parse_failure" };
    }
    try {
      parsed = JSON.parse(match[0]);
    } catch (e) {
      console.warn(
        JSON.stringify({
          msg: "judge_failed",
          reason: "parse_failure",
          error: (e as Error).message?.slice(0, 200),
        })
      );
      return { status: "error", reason: "parse_failure" };
    }
  }

  if (!parsed || typeof parsed !== "object") {
    console.warn(
      JSON.stringify({ msg: "judge_failed", reason: "shape_failure" })
    );
    return { status: "error", reason: "parse_failure" };
  }

  const obj = parsed as { scores?: unknown; notes?: unknown };
  const scoreMap = new Map<string, number>();
  if (Array.isArray(obj.scores)) {
    for (const entry of obj.scores) {
      if (
        entry &&
        typeof entry === "object" &&
        typeof (entry as { id?: unknown }).id === "string" &&
        typeof (entry as { score?: unknown }).score === "number"
      ) {
        const e = entry as { id: string; score: number };
        scoreMap.set(e.id, clamp01(e.score));
      }
    }
  }

  const perCriterion = criteria.map((c) => {
    const w = Math.max(0, Number.isFinite(c.weight) ? c.weight : 0);
    return {
      id: c.id,
      score: scoreMap.has(c.id) ? clamp01(scoreMap.get(c.id) as number) : 0.5,
      weight: w,
    };
  });

  const totalWeight = perCriterion.reduce((s, c) => s + c.weight, 0);
  const fidelity =
    totalWeight > 0
      ? Math.round(
          (perCriterion.reduce((s, c) => s + c.score * c.weight, 0) /
            totalWeight) *
            100
        )
      : 0;

  const notes: string[] = [];
  if (Array.isArray(obj.notes)) {
    for (const n of obj.notes) {
      if (typeof n === "string" && notes.length < 3) {
        notes.push(n.slice(0, 200));
      }
    }
  }

  console.log(
    JSON.stringify({
      msg: "judge_ok",
      fidelity,
      criteria: criteria.length,
    })
  );

  return { status: "ok", fidelity, perCriterion, notes };
}
