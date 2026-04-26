/**
 * For each author in scripts/authors.ts, hit Gutendex and check whether any
 * English-language work exists. Gutendex indexes only public-domain titles,
 * so a non-empty result means the author has at least one PD work and is
 * eligible for the catalog under the rule "include only authors who have
 * something in the public domain."
 *
 * Strict matching: Gutendex authors are formatted "Last, First [middle]";
 * we require the seed author's last-name (or 4-char prefix to absorb
 * transliterations) to appear before the comma, and (for multi-word seeds)
 * the first-name's 4-char prefix to appear after the comma. This prevents
 * Henry James from matching James Joyce, etc.
 *
 *   doppler run -- npx tsx scripts/probe-pd-eligibility.ts > /tmp/pd-eligibility.csv
 */

import { AUTHORS } from "./authors";

type Book = {
  id: number;
  title: string;
  authors: Array<{ name: string }>;
  languages: string[];
  download_count: number;
};

async function probe(name: string): Promise<{
  ok: boolean;
  topId?: number;
  topTitle?: string;
}> {
  const parts = name.split(" ");
  const last = parts.at(-1)!;
  const first = parts[0]!;
  const lastKey = last.slice(0, Math.min(5, last.length)).toLowerCase();
  const firstKey = first.slice(0, Math.min(4, first.length)).toLowerCase();
  const url = `https://gutendex.com/books/?search=${encodeURIComponent(last)}&languages=en`;
  const r = await fetch(url);
  if (!r.ok) {
    return { ok: false };
  }
  const data = (await r.json()) as { results: Book[] };
  const matches = data.results.filter((b) =>
    b.authors.some((a) => {
      const al = a.name.toLowerCase();
      const [surname, given = ""] = al.split(",", 2).map((s) => s.trim());
      if (!surname || !surname.includes(lastKey)) {
        return false;
      }
      if (parts.length === 1) {
        return true;
      }
      return given.includes(firstKey);
    })
  );
  // Filter out indexes and meta-pages.
  const real = matches.filter(
    (b) =>
      !/^index of/i.test(b.title) &&
      !/^the project gutenberg/i.test(b.title) &&
      !/dictionary/i.test(b.title)
  );
  if (real.length === 0) {
    return { ok: false };
  }
  const top = real.sort((a, b) => b.download_count - a.download_count)[0]!;
  return { ok: true, topId: top.id, topTitle: top.title };
}

async function main() {
  console.log("slug,name,era,eligible,top_id,top_title");
  const concurrency = 10;
  const results = new Array<string>(AUTHORS.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (true) {
        const idx = i++;
        if (idx >= AUTHORS.length) {
          return;
        }
        const a = AUTHORS[idx]!;
        try {
          const r = await probe(a.name);
          const title = r.topTitle?.replace(/"/g, '""') ?? "";
          results[idx] =
            `${a.slug},"${a.name}",${a.era},${r.ok ? "yes" : "no"},${r.topId ?? ""},"${title}"`;
        } catch {
          results[idx] = `${a.slug},"${a.name}",${a.era},error,,""`;
        }
      }
    })
  );
  for (const line of results) {
    console.log(line);
  }
}

main();
