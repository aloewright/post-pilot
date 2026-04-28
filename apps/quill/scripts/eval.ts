/**
 * Eval harness — drift tracking for the M5 judge + deterministic rubric.
 *
 * Runs a fixed corpus of prompts against every (or selected) guide on a
 * deployed Worker, posts the results to /v1/admin/eval/ingest, and prints
 * per-guide progress. Errors on individual requests are logged and skipped
 * so a single bad guide can't tank the run.
 *
 * Usage:
 *   pnpm eval --base https://quill.workers.dev \
 *             --admin-key <ADMIN_API_KEY> \
 *             --api-key pp_live_xxx \
 *             [--guides slug1,slug2] \
 *             [--corpus scripts/eval-corpus.json] \
 *             [--concurrency 3]
 *
 * /v1/apply requires identity. The script passes --api-key via the
 * `Authorization: Bearer pp_live_*` header (matches src/lib/identify.ts).
 *
 * /v1/admin/eval/ingest requires the ADMIN_API_KEY worker secret, sent as
 * `x-admin-key`.
 */

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

type Args = {
  base?: string;
  adminKey?: string;
  apiKey?: string;
  guides?: string[];
  corpus: string;
  concurrency: number;
  help: boolean;
};

function parseArgs(argv: string[]): Args {
  const out: Args = {
    corpus: "scripts/eval-corpus.json",
    concurrency: 3,
    help: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") {
      out.help = true;
      continue;
    }
    if (!a.startsWith("--")) continue;
    const key = a.slice(2);
    const val = argv[i + 1];
    if (val === undefined || val.startsWith("--")) continue;
    i++;
    switch (key) {
      case "base":
        out.base = val.replace(/\/+$/, "");
        break;
      case "admin-key":
        out.adminKey = val;
        break;
      case "api-key":
        out.apiKey = val;
        break;
      case "guides":
        out.guides = val.split(",").map((s) => s.trim()).filter(Boolean);
        break;
      case "corpus":
        out.corpus = val;
        break;
      case "concurrency":
        out.concurrency = Number(val) || 3;
        break;
    }
  }
  return out;
}

function printUsage() {
  console.log(`
Quill eval harness — drift tracking for the M5 judge.

Required:
  --base <url>          Worker base URL (e.g. https://quill.workers.dev)
  --admin-key <secret>  ADMIN_API_KEY worker secret (x-admin-key header)
  --api-key <pp_live_*> User API key for /v1/apply (Authorization: Bearer)

Optional:
  --guides <a,b,c>      Comma-separated guide slugs (default: all)
  --corpus <path>       Corpus JSON file (default: scripts/eval-corpus.json)
  --concurrency <n>     Parallel requests (default: 3)
  --help                Show this message

Examples:
  pnpm eval --base https://quill.workers.dev \\
    --admin-key $ADMIN_API_KEY --api-key $PP_API_KEY
  pnpm eval --base http://localhost:8787 --admin-key dev --api-key pp_live_x \\
    --guides hemingway,thoreau
`);
}

type ApplyResponse = {
  guide: string;
  preset: string | null;
  model: string;
  output: string;
  snapshot: unknown;
  deterministic_score: number;
  deterministic_details: unknown;
  judge:
    | { status: "ok"; fidelity: number; perCriterion: unknown; notes: string[] }
    | { status: "skipped"; reason?: string }
    | { status: "error"; message?: string };
};

type IngestRow = {
  guideSlug: string;
  presetSlug: string | null;
  model: string;
  inputHash: string;
  detScore: number | null;
  judgeFidelity: number | null;
  judgeStatus: "ok" | "skipped" | "error" | null;
  outputSnapshotJson: string | null;
  notesJson: string | null;
};

function sha256(s: string): string {
  return createHash("sha256").update(s).digest("hex");
}

async function fetchGuides(base: string): Promise<string[]> {
  const res = await fetch(`${base}/v1/guides`);
  if (!res.ok) {
    throw new Error(`GET /v1/guides failed: ${res.status}`);
  }
  const body = (await res.json()) as { items?: Array<{ slug: string }> };
  const items = body.items ?? [];
  return items.map((g) => g.slug);
}

async function applyOne(
  base: string,
  apiKey: string,
  guideSlug: string,
  prompt: string,
): Promise<{ row: IngestRow } | { error: string }> {
  try {
    const res = await fetch(`${base}/v1/apply`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ guide: guideSlug, input: prompt }),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { error: `HTTP ${res.status} ${text.slice(0, 160)}` };
    }
    const data = (await res.json()) as ApplyResponse;
    const judge = data.judge;
    return {
      row: {
        guideSlug,
        presetSlug: null,
        model: data.model,
        inputHash: sha256(prompt),
        detScore:
          typeof data.deterministic_score === "number"
            ? data.deterministic_score
            : null,
        judgeFidelity:
          judge.status === "ok" && typeof judge.fidelity === "number"
            ? judge.fidelity
            : null,
        judgeStatus: judge.status ?? null,
        outputSnapshotJson: JSON.stringify(data.snapshot ?? null),
        notesJson: JSON.stringify(
          judge.status === "ok" ? (judge.notes ?? []) : [],
        ),
      },
    };
  } catch (e) {
    return { error: (e as Error).message };
  }
}

async function ingestBatch(
  base: string,
  adminKey: string,
  rows: IngestRow[],
): Promise<void> {
  if (rows.length === 0) return;
  const res = await fetch(`${base}/v1/admin/eval/ingest`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-admin-key": adminKey,
    },
    body: JSON.stringify({ rows }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`ingest failed: ${res.status} ${text.slice(0, 200)}`);
  }
}

async function runWithConcurrency<T, R>(
  items: T[],
  limit: number,
  worker: (t: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.max(1, limit) }, async () => {
    while (true) {
      const i = cursor++;
      if (i >= items.length) return;
      results[i] = await worker(items[i]);
    }
  });
  await Promise.all(runners);
  return results;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help || !args.base || !args.adminKey || !args.apiKey) {
    printUsage();
    if (!args.help) {
      console.error(
        "\nMissing required flag(s): --base, --admin-key, --api-key are all required.",
      );
      process.exit(1);
    }
    return;
  }

  const corpusPath = resolve(process.cwd(), args.corpus);
  const corpusRaw = await readFile(corpusPath, "utf8");
  const corpus = JSON.parse(corpusRaw) as { prompts: string[] };
  if (!Array.isArray(corpus.prompts) || corpus.prompts.length === 0) {
    throw new Error(`Corpus at ${corpusPath} has no prompts.`);
  }

  let guides = args.guides;
  if (!guides || guides.length === 0) {
    console.log(`Fetching guide list from ${args.base}/v1/guides ...`);
    guides = await fetchGuides(args.base);
    console.log(`Found ${guides.length} guides.`);
  }

  const buffer: IngestRow[] = [];
  const BATCH_SIZE = 50;
  let totalOk = 0;
  let totalErr = 0;

  for (const guide of guides) {
    const tasks = corpus.prompts.map((p) => ({ guide, prompt: p }));
    const results = await runWithConcurrency(tasks, args.concurrency, async (t) =>
      applyOne(args.base!, args.apiKey!, t.guide, t.prompt),
    );

    let okCount = 0;
    let errCount = 0;
    let detSum = 0;
    let detN = 0;
    let judgeSum = 0;
    let judgeN = 0;

    for (const r of results) {
      if ("error" in r) {
        errCount++;
        totalErr++;
        console.warn(`  ! ${guide}: ${r.error}`);
        continue;
      }
      okCount++;
      totalOk++;
      buffer.push(r.row);
      if (r.row.detScore !== null) {
        detSum += r.row.detScore;
        detN++;
      }
      if (r.row.judgeFidelity !== null) {
        judgeSum += r.row.judgeFidelity;
        judgeN++;
      }
      if (buffer.length >= BATCH_SIZE) {
        try {
          await ingestBatch(args.base, args.adminKey, buffer.splice(0));
        } catch (e) {
          console.warn(`  ! ingest error: ${(e as Error).message}`);
        }
      }
    }

    const avgDet = detN ? (detSum / detN).toFixed(2) : "n/a";
    const avgJudge = judgeN ? (judgeSum / judgeN).toFixed(0) : "n/a";
    console.log(
      `✓ ${guide}: ${okCount}/${tasks.length} done (avg det ${avgDet}, avg judge ${avgJudge}, errors ${errCount})`,
    );
  }

  // Flush remainder.
  if (buffer.length > 0) {
    try {
      await ingestBatch(args.base, args.adminKey, buffer.splice(0));
    } catch (e) {
      console.warn(`! final ingest error: ${(e as Error).message}`);
    }
  }

  console.log(
    `\nDone. ${totalOk} rows ingested across ${guides.length} guides; ${totalErr} errors.`,
  );
}

main().catch((e) => {
  console.error("Eval run failed:", e);
  process.exit(1);
});
