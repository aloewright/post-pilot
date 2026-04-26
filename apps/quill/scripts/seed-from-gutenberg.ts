/**
 * For every guide whose `copyright_posture` is "public-domain", fetch real
 * excerpts from the Gutenberg MCP mirror and overwrite the guide's
 * `exemplars` field with attributed passages from the actual works.
 *
 *   doppler run -- npx tsx scripts/seed-from-gutenberg.ts          # all PD authors
 *   doppler run -- npx tsx scripts/seed-from-gutenberg.ts --slug=hemingway
 *   doppler run -- npx tsx scripts/seed-from-gutenberg.ts --dry
 *
 * The MCP at https://gutenberg-mcp-mirror.lazee.workers.dev/mcp is stateless
 * for tools/call (no session id required), so we just POST JSON-RPC.
 */

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const GUIDES_DIR = join(ROOT, "src/lib/guides");
const MCP_URL = "https://gutenberg-mcp-mirror.lazee.workers.dev/mcp";

type Args = { slug?: string; dry: boolean };

function parseArgs(argv: string[]): Args {
  const out: Args = { dry: false };
  for (const a of argv) {
    if (a === "--dry") {
      out.dry = true;
    } else if (a.startsWith("--slug=")) {
      out.slug = a.split("=")[1];
    }
  }
  return out;
}

type Book = {
  id: number;
  title: string;
  authors: string[];
  download_count: number;
  text_url: string;
};

type Guide = {
  slug: string;
  author: string;
  era: string;
  copyright_posture: string;
  exemplars: Array<{
    label: string;
    content: string;
    source: string;
    is_generated: boolean;
  }>;
  [k: string]: unknown;
};

async function mcp(method: string, params: unknown): Promise<unknown> {
  const r = await fetch(MCP_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json, text/event-stream",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: Math.floor(Math.random() * 1e9),
      method,
      params,
    }),
  });
  if (!r.ok) {
    throw new Error(`mcp ${r.status}: ${(await r.text()).slice(0, 300)}`);
  }
  // SSE: parse the single `data:` payload.
  const text = await r.text();
  const dataLine = text
    .split("\n")
    .find((l) => l.startsWith("data:"))
    ?.slice(5)
    .trim();
  if (!dataLine) {
    throw new Error("mcp: no data line in SSE");
  }
  const env = JSON.parse(dataLine) as {
    result?: { content?: Array<{ type: string; text?: string }> };
    error?: { message: string };
  };
  if (env.error) {
    throw new Error(`mcp error: ${env.error.message}`);
  }
  const inner = env.result?.content?.[0]?.text;
  if (!inner) {
    return env.result;
  }
  return JSON.parse(inner);
}

async function searchAuthor(name: string): Promise<Book[]> {
  const parts = name.split(" ");
  const last = parts.at(-1)!;
  const firstName = parts[0]!;
  // Search by last name only — Gutenberg's metadata has authors as
  // "Shaw, Bernard" (no George) and "Dostoyevsky, Fyodor" (transliterated),
  // so full-name queries miss.
  const res = (await mcp("tools/call", {
    name: "search_catalog",
    arguments: { query: last, limit: 20 },
  })) as Book[];
  // Gutenberg authors are formatted "Last, First [middle]". Match the
  // search-name's last name against the part BEFORE the comma so we don't
  // catch authors who happen to share a first name (Henry James vs James
  // Joyce) or a surname with someone else (Charlotte vs Emily Brontë).
  // Use a 4-char prefix on each side to absorb transliteration drift
  // (Dostoevsky / Dostoyevsky / Dostoyevski).
  const lastKey = last.slice(0, Math.min(5, last.length)).toLowerCase();
  const firstKey = firstName
    .slice(0, Math.min(4, firstName.length))
    .toLowerCase();
  return res
    .filter((b) =>
      b.authors.some((a) => {
        const [surname, given = ""] = a
          .split(",", 2)
          .map((s) => s.trim().toLowerCase());
        if (!surname || !surname.includes(lastKey)) {
          return false;
        }
        // If the seed name has more than one part, also require the first
        // name to match the after-comma portion. Single-name authors
        // (e.g. "Voltaire", "Molière") get a free pass on this check.
        if (parts.length === 1) {
          return true;
        }
        return given.includes(firstKey);
      })
    )
    .filter(
      (b) =>
        !/^index of/i.test(b.title) && !/^the project gutenberg/i.test(b.title)
    );
}

async function readBookExcerpt(id: number, chars: number): Promise<string> {
  // The mirror Worker's text fetch is currently 404'ing — see ALO-117. Pull
  // direct from Gutenberg's canonical cache URL until that's fixed; this path
  // is stable and was hitting 200 reliably in spot checks.
  const urls = [
    `https://www.gutenberg.org/cache/epub/${id}/pg${id}.txt`,
    `https://www.gutenberg.org/files/${id}/${id}-0.txt`,
    `https://www.gutenberg.org/files/${id}/${id}.txt`,
  ];
  for (const u of urls) {
    const r = await fetch(u, {
      headers: {
        "user-agent":
          "postpilot-seed/0.1 (https://postpilot.lazee.workers.dev)",
      },
    });
    if (!r.ok) {
      continue;
    }
    const buf = await r.arrayBuffer();
    const text = new TextDecoder("utf-8", { fatal: false }).decode(buf);
    return text.slice(0, chars);
  }
  throw new Error(`gutenberg fetch failed for #${id}`);
}

/**
 * Strip Gutenberg's standard preamble + license boilerplate. Then split into
 * paragraphs and return the first N that look like prose (have at least one
 * sentence-ending punctuation mark, between 200 and 1200 chars).
 */
function findExcerpts(text: string, count: number): string[] {
  // Cut off the preamble at the *** START OF THE PROJECT GUTENBERG EBOOK *** marker.
  const startIdx = text.search(
    /\*{3}\s*START[^*]*GUTENBERG[^*]*EBOOK[^*]*\*{3}/i
  );
  if (startIdx >= 0) {
    text = text.slice(startIdx).replace(/^.*?\n/, "");
  }
  // Cut off the postamble.
  const endIdx = text.search(/\*{3}\s*END[^*]*GUTENBERG[^*]*EBOOK[^*]*\*{3}/i);
  if (endIdx >= 0) {
    text = text.slice(0, endIdx);
  }
  // Drop any leading "produced by", front matter, or chapter headings — best-
  // effort. We require a paragraph that starts with a capital letter, contains
  // a complete sentence, and isn't all uppercase.
  const paras = text
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\s+/g, " ").trim())
    .filter(
      (p) =>
        p.length >= 200 &&
        p.length <= 1200 &&
        /[a-z]/.test(p) &&
        /[.!?]"?\s|[.!?]"?$/.test(p) &&
        !/^[A-Z\W\s]+$/.test(p) &&
        !/^chapter/i.test(p) &&
        !/^contents/i.test(p) &&
        !/copyright|gutenberg|trademark|public domain/i.test(p)
    );
  return paras.slice(0, count);
}

const LABELS = ["From the work", "Passage", "Excerpt", "From the text"];

function patchExemplars(
  src: string,
  slug: string,
  exemplars: Array<{
    label: string;
    content: string;
    source: string;
    is_generated: boolean;
  }>
): string {
  const pretty = JSON.stringify(exemplars, null, 2)
    .split("\n")
    .map((l, i) => (i === 0 ? l : `  ${l}`))
    .join("\n");
  // Handle both the JSON-stringified shape (`"exemplars": [...]`, generated
  // guides) and the bare TS-object-literal shape (`exemplars: [...]`,
  // handcrafted originals).
  const quoted = src.match(/"exemplars":\s*\[[\s\S]*?\n\s{2}\],/);
  if (quoted) {
    return src.replace(quoted[0], `"exemplars": ${pretty},`);
  }
  const bare = src.match(/(?<!")\bexemplars:\s*\[[\s\S]*?\n\s{2}\],/);
  if (bare) {
    return src.replace(bare[0], `exemplars: ${pretty},`);
  }
  throw new Error(`could not find exemplars block in ${slug}`);
}

async function processGuide(file: string, dry: boolean): Promise<string> {
  const path = join(GUIDES_DIR, file);
  const src = readFileSync(path, "utf8");

  // Extract the fields we care about with simple regexes — works for both the
  // JSON-shape (generated) and the bare TS-literal shape (handcrafted) files.
  const postureMatch = src.match(
    /(?:"copyright_posture"|copyright_posture):\s*"([^"]+)"/
  );
  if (!postureMatch || postureMatch[1] !== "public-domain") {
    return "skip: not PD";
  }
  const authorMatch = src.match(/(?:"author"|author):\s*"([^"]+)"/);
  if (!authorMatch) {
    return "skip: no author";
  }
  const slugMatch = src.match(/(?:"slug"|slug):\s*"([^"]+)"/);
  if (!slugMatch) {
    return "skip: no slug";
  }
  const g: Guide = {
    slug: slugMatch[1]!,
    author: authorMatch[1]!,
    era: "",
    copyright_posture: "public-domain",
    exemplars: [],
  };

  const books = await searchAuthor(g.author);
  if (books.length === 0) {
    return "skip: no books found";
  }

  // Walk the catalog top-down until we find books whose text is reachable.
  // Some Gutenberg ids 404 on the cache URL pattern; the second/third match
  // by the same author is usually fine.
  const passages: Array<{ book: Book; passage: string }> = [];
  for (const b of books) {
    if (passages.length >= 2) {
      break;
    }
    let text: string;
    try {
      text = await readBookExcerpt(b.id, 24_000);
    } catch {
      continue;
    }
    const found = findExcerpts(text, 4);
    for (const p of found) {
      if (passages.length >= 2) {
        break;
      }
      if (!passages.some((q) => q.passage === p)) {
        passages.push({ book: b, passage: p });
      }
    }
  }
  if (passages.length === 0) {
    return "skip: no excerpts extractable";
  }
  const primary = passages[0]?.book;

  const newExemplars = passages.slice(0, 2).map((p, i) => ({
    label: LABELS[i] ?? "Passage",
    content: p.passage,
    source: `${g.author}, ${p.book.title} (Project Gutenberg #${p.book.id}; public domain)`,
    is_generated: false,
  }));

  if (dry) {
    return `would patch with ${newExemplars.length} excerpts from ${primary.title}`;
  }
  const patched = patchExemplars(src, g.slug, newExemplars);
  writeFileSync(path, patched);
  return `patched ${newExemplars.length} excerpts from ${primary.title} (#${primary.id})`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  let files = readdirSync(GUIDES_DIR).filter(
    (f) => f.endsWith(".ts") && f !== "index.ts"
  );
  if (args.slug) {
    files = files.filter((f) => f === `${args.slug}.ts`);
  }

  console.log(`[gut] scanning ${files.length} guides; dry=${args.dry}`);
  let patched = 0;
  let skipped = 0;
  for (const f of files) {
    try {
      const msg = await processGuide(f, args.dry);
      if (msg.startsWith("skip")) {
        skipped++;
      } else {
        patched++;
        console.log(`  ${f.replace(/\.ts$/, "")}: ${msg}`);
      }
    } catch (e) {
      console.log(`  ${f}: ERR ${(e as Error).message}`);
    }
  }
  console.log(`[gut] patched=${patched} skipped=${skipped}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
