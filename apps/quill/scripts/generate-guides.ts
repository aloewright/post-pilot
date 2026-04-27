/**
 * Generate Guide TS files for every author in scripts/authors.ts that does
 * not already exist in src/lib/guides/. Routes through the Cloudflare
 * AI Gateway dynamic/text_gen route — never calls a provider directly.
 * Concurrency-bounded batches, strict-JSON validation against the Guide shape.
 *
 *   doppler run -- npx tsx scripts/generate-guides.ts
 *
 * Doppler keys consumed:
 *   CLOUDFLARE_GATEWAY_URL  → full gateway compat URL ending in
 *                             /compat/chat/completions (required)
 *   CF_AIG_TOKEN            → bearer for cf-aig-authorization (required)
 *
 * Flags:
 *   --limit=N            only generate N guides (default: all missing)
 *   --concurrency=N      (default 6)
 *   --model=ROUTE        dynamic route slug (default dynamic/text_gen)
 *   --dry                plan only, no API calls or writes
 *   --force              regenerate guides that already exist
 */

import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { AUTHORS, type AuthorSeed } from "./authors";

const ROOT = new URL("..", import.meta.url).pathname;
const GUIDES_DIR = join(ROOT, "src/lib/guides");

type Args = {
  limit?: number;
  concurrency: number;
  model: string;
  dry: boolean;
  force: boolean;
};

function parseArgs(argv: string[]): Args {
  const out: Args = {
    concurrency: 6,
    model: "workers-ai/@cf/zai-org/glm-4.7-flash",
    dry: false,
    force: false,
  };
  for (const a of argv) {
    if (a === "--dry") {
      out.dry = true;
    } else if (a === "--force") {
      out.force = true;
    } else if (a.startsWith("--limit=")) {
      out.limit = Number(a.split("=")[1]);
    } else if (a.startsWith("--concurrency=")) {
      out.concurrency = Number(a.split("=")[1]);
    } else if (a.startsWith("--model=")) {
      out.model = a.split("=")[1] ?? out.model;
    }
  }
  return out;
}

function existingSlugs(): Set<string> {
  return new Set(
    readdirSync(GUIDES_DIR)
      .filter((f) => f.endsWith(".ts") && f !== "index.ts")
      .map((f) => f.replace(/\.ts$/, ""))
  );
}

function envOrFail(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(`missing env var: ${name}`);
  }
  return v;
}

const SYSTEM = `You are an expert literary editor creating a structured "voice guide" entry for a writing-style API. The output MUST be a single JSON object that exactly matches the schema. No prose. No code fences. No comments. Just JSON.

Schema (TypeScript):
{
  "kicker": string,                   // small-caps eyebrow, e.g. "Modernist · 20th c."
  "standfirst": string,               // 1-sentence subhead capturing the dominant move
  "description": string,              // 2-3 sentence paragraph; what the voice does and when to reach for it
  "voice_axes": Array<"terse"|"lyrical"|"ornate"|"plain"|"wry">, // 1-3 of these
  "use_cases": Array<"support"|"docs"|"email"|"marketing"|"narrative"|"rfc"|"social"|"code">, // 2-4
  "copyright_posture": "voice-inspired" | "public-domain" | "licensed", // pre-1900 → public-domain; everyone else → voice-inspired
  "voice_spec": {
    "sentence_length": { "mean": number, "max": number },
    "vocabulary_register": string,    // 1 line
    "syntax": string,                 // 1 line
    "figurative_language": string,    // 1 line
    "pacing": string                  // 1 line
  },
  "do": string[],                     // 3-4 imperative rules, each 1 sentence
  "dont": string[],                   // 3-4 imperative prohibitions, each 1 sentence
  "exemplars": [                      // exactly 2
    { "label": string, "content": string, "source": "AI-generated in the {AUTHOR} style", "is_generated": true }
  ],
  "system_prompt": string,            // 4-7 sentence imperative system prompt for an LLM, second person, that captures the voice
  "eval_rubric": {
    "deterministic": Array<{
      "metric": "avg_sentence_length"|"max_sentence_length"|"adverbs_per_200w"|"abstract_per_para"|"mono_syllable_ratio"|"type_token_ratio"|"flesch_kincaid_grade",
      "op": "<="|">="|"==",
      "value": number,
      "weight": number   // weights across deterministic must sum to <= 0.5
    }>,                  // 2-4 entries
    "judge_criteria": Array<{ "id": string, "prompt": string, "weight": number }>, // 2-3 entries; weights here + deterministic weights sum to 1.0
    "pass_threshold": number  // 0.7 to 0.9
  }
}

Constraints:
- voice_axes / use_cases / copyright_posture / metric values MUST be drawn from the enums above. Any other string fails validation.
- exemplar.label SHOULD be drawn from {"Support reply", "Product microcopy", "Marketing tagline", "Documentation snippet", "Press release lede", "Email opener", "Tweet", "Apology message"}; pick ones that demonstrate the voice on tasks the use_cases imply.
- Each exemplar.content is 2-5 sentences, must read like the named author would write *that specific kind of business text*. Do not quote the author; produce new text.
- The system_prompt is what an LLM would use to imitate the voice. Use second-person imperatives ("Write…", "Avoid…").
- Numerical voice_spec.sentence_length.mean must be plausible for the author (Hemingway 8-12, Faulkner 25+, etc.).
- exemplar.source is literally "AI-generated in the {AUTHOR} style" with the AUTHOR substituted.
`;

const USER = (a: AuthorSeed) =>
  `Author: ${a.name}\nEra: ${a.era}\nVoice hint: ${a.hint}\n\nProduce the JSON object now.`;

type Guide = unknown; // we parse, validate, and re-serialise; full Guide type lives in src/lib/types.ts

const ALLOWED_AXES = ["terse", "lyrical", "ornate", "plain", "wry"] as const;
const ALLOWED_USE_CASES = [
  "support",
  "docs",
  "email",
  "marketing",
  "narrative",
  "rfc",
  "social",
  "code",
] as const;
const ALLOWED_POSTURES = [
  "voice-inspired",
  "public-domain",
  "licensed",
] as const;
const ALLOWED_METRICS = [
  "avg_sentence_length",
  "max_sentence_length",
  "adverbs_per_200w",
  "abstract_per_para",
  "mono_syllable_ratio",
  "type_token_ratio",
  "flesch_kincaid_grade",
] as const;

function validate(json: unknown, a: AuthorSeed): string | null {
  if (!json || typeof json !== "object") {
    return "not an object";
  }
  const j = json as Record<string, unknown>;

  for (const k of [
    "kicker",
    "standfirst",
    "description",
    "voice_axes",
    "use_cases",
    "copyright_posture",
    "voice_spec",
    "do",
    "dont",
    "exemplars",
    "system_prompt",
    "eval_rubric",
  ]) {
    if (!(k in j)) {
      return `missing field ${k}`;
    }
  }

  if (!Array.isArray(j.voice_axes)) {
    return "voice_axes not array";
  }
  // Clamp to allowed values rather than fail — the model occasionally drifts
  // off-enum (e.g. "elegant"). Drop unknowns; if nothing is left, fail.
  const filteredAxes = j.voice_axes.filter((x) =>
    ALLOWED_AXES.includes(x as never)
  );
  if (filteredAxes.length === 0) {
    return "voice_axes had no valid entries";
  }
  j.voice_axes = filteredAxes;
  if (!Array.isArray(j.use_cases)) {
    return "use_cases not array";
  }
  const filteredUseCases = j.use_cases.filter((x) =>
    ALLOWED_USE_CASES.includes(x as never)
  );
  if (filteredUseCases.length === 0) {
    return "use_cases had no valid entries";
  }
  j.use_cases = filteredUseCases;
  if (!ALLOWED_POSTURES.includes(j.copyright_posture as never)) {
    return "copyright_posture invalid";
  }

  const ex = j.exemplars as unknown;
  if (!Array.isArray(ex) || ex.length !== 2) {
    return "exemplars must be length 2";
  }
  for (const e of ex) {
    if (!e || typeof e !== "object") {
      return "exemplar not an object";
    }
    const eo = e as Record<string, unknown>;
    if (typeof eo.label !== "string" || typeof eo.content !== "string") {
      return "exemplar shape";
    }
    if (eo.is_generated !== true) {
      return "exemplar.is_generated must be true";
    }
    if (typeof eo.source !== "string" || !eo.source.includes(a.name)) {
      return "exemplar.source must include author name";
    }
  }

  const r = j.eval_rubric as Record<string, unknown> | undefined;
  if (!r) {
    return "eval_rubric missing";
  }
  if (
    !Array.isArray(r.deterministic) ||
    !r.deterministic.every((x) => {
      const xo = x as Record<string, unknown>;
      return (
        ALLOWED_METRICS.includes(xo.metric as never) &&
        ["<=", ">=", "=="].includes(xo.op as string) &&
        typeof xo.value === "number" &&
        typeof xo.weight === "number"
      );
    })
  ) {
    return "deterministic invalid";
  }
  if (
    !Array.isArray(r.judge_criteria) ||
    !r.judge_criteria.every((x) => {
      const xo = x as Record<string, unknown>;
      return (
        typeof xo.id === "string" &&
        typeof xo.prompt === "string" &&
        typeof xo.weight === "number"
      );
    })
  ) {
    return "judge_criteria invalid";
  }
  if (
    typeof r.pass_threshold !== "number" ||
    r.pass_threshold < 0.5 ||
    r.pass_threshold > 1
  ) {
    return "pass_threshold invalid";
  }

  const vs = j.voice_spec as Record<string, unknown> | undefined;
  if (!vs) {
    return "voice_spec missing";
  }
  const sl = vs.sentence_length as Record<string, unknown> | undefined;
  if (
    !sl ||
    typeof sl.mean !== "number" ||
    typeof sl.max !== "number" ||
    sl.mean <= 0 ||
    sl.max < sl.mean
  ) {
    return "voice_spec.sentence_length invalid";
  }
  for (const k of [
    "vocabulary_register",
    "syntax",
    "figurative_language",
    "pacing",
  ]) {
    if (typeof vs[k] !== "string") {
      return `voice_spec.${k} invalid`;
    }
  }

  return null;
}

async function callGateway(
  url: string,
  token: string,
  model: string,
  a: AuthorSeed
): Promise<unknown> {
  // glm-4.7-flash is a reasoning model — it spends ~hundreds of tokens
  // thinking before emitting the JSON, so the cap has to clear both phases
  // or completions return finish_reason: length with content=null.
  const body = {
    model,
    max_tokens: 8000,
    temperature: 0.6,
    response_format: { type: "json_object" },
    messages: [
      { role: "system", content: SYSTEM },
      { role: "user", content: USER(a) },
    ],
  };

  // Up to 5 retries on 429 with backoff honoring retry-after when present.
  for (let attempt = 0; attempt < 5; attempt++) {
    const r = await fetch(url, {
      method: "POST",
      headers: {
        "cf-aig-authorization": `Bearer ${token}`,
        "cf-aig-zdr": "true",
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (r.ok) {
      const data = (await r.json()) as {
        choices?: Array<{ message?: { content?: string } }>;
      };
      const content = data.choices?.[0]?.message?.content;
      if (!content) {
        throw new Error("empty completion");
      }
      return JSON.parse(content);
    }
    if (r.status === 429) {
      const ra = r.headers.get("retry-after");
      const wait = ra ? Math.min(Number(ra), 60) * 1000 : 15_000;
      await new Promise((res) => setTimeout(res, wait + 250 * attempt));
      continue;
    }
    const txt = await r.text();
    throw new Error(`gateway ${r.status}: ${txt.slice(0, 400)}`);
  }
  throw new Error("gateway 429: retries exhausted");
}

function renderGuideTs(a: AuthorSeed, j: Record<string, unknown>): string {
  const g = {
    slug: a.slug,
    author: a.name,
    era: a.era,
    eras: [a.era],
    kicker: j.kicker,
    standfirst: j.standfirst,
    description: j.description,
    voice_axes: j.voice_axes,
    use_cases: j.use_cases,
    copyright_posture: j.copyright_posture,
    voice_spec: j.voice_spec,
    do: j.do,
    dont: j.dont,
    exemplars: j.exemplars,
    system_prompt: j.system_prompt,
    eval_rubric: j.eval_rubric,
    is_official: true,
    curator: "Post Pilot",
    updated_at: new Date().toISOString().slice(0, 10),
  };
  const slugVar = a.slug.replace(/-+([a-z0-9])/g, (_, c: string) =>
    c.toUpperCase()
  );
  return `import type { Guide } from "../types";\n\nexport const ${slugVar}: Guide = ${JSON.stringify(g, null, 2)};\n`;
}

function buildIndex(slugs: string[]): string {
  const sorted = slugs.slice().sort();
  const imports = sorted
    .map((s) => {
      const v = s.replace(/-+([a-z0-9])/g, (_, c: string) => c.toUpperCase());
      return `import { ${v} } from "./${s}";`;
    })
    .join("\n");
  const list = sorted
    .map(
      (s) =>
        "  " +
        s.replace(/-+([a-z0-9])/g, (_, c: string) => c.toUpperCase()) +
        ","
    )
    .join("\n");
  return `import type { Guide } from "../types";
${imports}

export const GUIDES: Guide[] = [
${list}
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function listGuides(): Guide[] {
  return GUIDES.slice().sort((a, b) => a.author.localeCompare(b.author));
}

export function allSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
`;
}

async function pool<T, R>(
  items: T[],
  concurrency: number,
  fn: (t: T) => Promise<R>
): Promise<Array<{ item: T; result?: R; error?: unknown }>> {
  const out: Array<{ item: T; result?: R; error?: unknown }> = [];
  let i = 0;
  const workers = Array.from({ length: concurrency }, async () => {
    while (true) {
      const idx = i++;
      if (idx >= items.length) {
        return;
      }
      const item = items[idx]!;
      try {
        const result = await fn(item);
        out.push({ item, result });
      } catch (error) {
        out.push({ item, error });
      }
    }
  });
  await Promise.all(workers);
  return out;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!existsSync(GUIDES_DIR)) {
    mkdirSync(GUIDES_DIR, { recursive: true });
  }

  const have = existingSlugs();
  const work = AUTHORS.filter((a) => args.force || !have.has(a.slug)).slice(
    0,
    args.limit ?? AUTHORS.length
  );

  console.log(
    `[gen] total=${AUTHORS.length} existing=${have.size} todo=${work.length} concurrency=${args.concurrency} dry=${args.dry}`
  );
  if (args.dry) {
    for (const a of work.slice(0, 20)) {
      console.log("  todo:", a.slug, "—", a.name);
    }
    if (work.length > 20) {
      console.log(`  …and ${work.length - 20} more`);
    }
    return;
  }

  const gatewayUrl = envOrFail("CLOUDFLARE_GATEWAY_URL");
  const gatewayToken = envOrFail("CF_AIG_TOKEN");

  const results = await pool(work, args.concurrency, async (a) => {
    let lastErr: unknown;
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const j = await callGateway(gatewayUrl, gatewayToken, args.model, a);
        const err = validate(j, a);
        if (err) {
          throw new Error(`validation: ${err}`);
        }
        const ts = renderGuideTs(a, j as Record<string, unknown>);
        writeFileSync(join(GUIDES_DIR, `${a.slug}.ts`), ts);
        return "ok" as const;
      } catch (e) {
        lastErr = e;
      }
    }
    throw lastErr;
  });

  const ok = results.filter((r) => r.result).length;
  const failed = results.filter((r) => r.error);
  console.log(`[gen] generated=${ok}/${work.length} failed=${failed.length}`);
  for (const f of failed) {
    console.log(
      "  fail:",
      (f.item as AuthorSeed).slug,
      "—",
      (f.error as Error)?.message?.slice(0, 200)
    );
  }

  // Rebuild index.ts from disk so it stays in sync.
  const slugs = readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => f.replace(/\.ts$/, ""));
  writeFileSync(join(GUIDES_DIR, "index.ts"), buildIndex(slugs));
  console.log(`[gen] wrote index.ts with ${slugs.length} guides`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
