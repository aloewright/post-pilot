import { eq, sql } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";
import type * as schema from "../../db/schema";
import { aiPhrases } from "../../db/schema";

type Db = DrizzleD1Database<typeof schema>;

const PHRASE_HASH_VERSION = "v1";

// Normalize a phrase for hashing: lowercase, collapse whitespace, trim.
// Keeping a version prefix lets us re-key later without breaking old rows.
function normalizePhrase(s: string): string {
  return s.toLowerCase().replace(/\s+/g, " ").trim();
}

async function sha256Hex(s: string): Promise<string> {
  const data = new TextEncoder().encode(s);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Skip phrases that smell like PII or contain prompt-injection tells. We err
// on the side of dropping more — this is a learned blocklist, it's fine if
// a few benign phrases slip past it.
function looksUnsafe(s: string): boolean {
  if (/\b[\w.+-]+@[\w-]+\.[\w.-]+\b/.test(s)) {
    return true; // email
  }
  if (/\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/.test(s)) {
    return true; // US phone
  }
  if (/https?:\/\//.test(s)) {
    return true; // URL
  }
  // Prompt-injection tells
  if (/ignore (previous|prior|all) (instructions?|prompts?)/i.test(s)) {
    return true;
  }
  if (/disregard (previous|prior|all)/i.test(s)) {
    return true;
  }
  if (/system prompt/i.test(s)) {
    return true;
  }
  return false;
}

// Persist segments whose AI score is at or above `threshold`. Each phrase is
// hashed (sha256 of the normalized form, prefixed with the schema version)
// so we don't store collisions twice and can re-key later. Existing rows
// have their seenCount and lastSeen bumped instead of being re-inserted.
export async function persistFlaggedSegments(
  db: Db,
  segments: Array<{ text: string; aiScore: number }>,
  threshold = 0.7
): Promise<{ inserted: number; updated: number }> {
  let inserted = 0;
  let updated = 0;

  for (const seg of segments) {
    if (seg.aiScore < threshold) {
      continue;
    }
    const phrase = seg.text.trim();
    // Tighter bounds than before: 12 chars min drops more noise, 200 max
    // prevents storing entire paragraphs as a single "phrase".
    if (phrase.length < 12 || phrase.length > 200) {
      continue;
    }
    if (looksUnsafe(phrase)) {
      continue;
    }

    const normalized = normalizePhrase(phrase);
    const phraseHash = `${PHRASE_HASH_VERSION}:${await sha256Hex(normalized)}`;

    // Drizzle/D1: check if exists, then INSERT or UPDATE.
    // (D1 supports INSERT ... ON CONFLICT but Drizzle's helper across
    // SQLite dialects is more reliably done as two-step.)
    const existing = await db
      .select({ phraseHash: aiPhrases.phraseHash })
      .from(aiPhrases)
      .where(eq(aiPhrases.phraseHash, phraseHash))
      .limit(1);

    if (existing.length === 0) {
      await db.insert(aiPhrases).values({
        phraseHash,
        phrase,
      });
      inserted++;
    } else {
      await db
        .update(aiPhrases)
        .set({
          seenCount: sql`${aiPhrases.seenCount} + 1`,
          lastSeen: sql`(unixepoch())`,
        })
        .where(eq(aiPhrases.phraseHash, phraseHash));
      updated++;
    }
  }

  return { inserted, updated };
}

// Frequency-ranked top phrases — the next humanize pass uses these to seed
// the "avoid these" injection. DESC sort means most-seen first.
export async function getTopPhrases(db: Db, limit = 50): Promise<string[]> {
  const rows = await db
    .select({ phrase: aiPhrases.phrase })
    .from(aiPhrases)
    .orderBy(sql`${aiPhrases.seenCount} DESC`)
    .limit(limit);
  return rows.map((r) => r.phrase);
}
