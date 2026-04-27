import { eq, sql } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";
import { apiKeys } from "../db/schema";

// API key format: `pp_live_<32 url-safe chars>`. Prefix lets ops/users
// recognise it visually and routes future env-split (e.g. pp_test_).
export const KEY_PREFIX = "pp_live_";

type Db = DrizzleD1Database<Record<string, unknown>>;

export type GeneratedKey = {
  id: string;
  plaintext: string;
  prefix: string;
  hash: string;
};

// Generates a 192-bit random secret, base64url-encoded, prefixed.
export function generateApiKey(): GeneratedKey {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  const body = base64url(bytes);
  const plaintext = `${KEY_PREFIX}${body}`;
  // Display prefix: env tag + first 4 chars of secret. Enough to spot which
  // key is which without leaking entropy.
  const prefix = `${KEY_PREFIX}${body.slice(0, 4)}`;
  // hash gets filled in by hashApiKey at insert time.
  return { id: crypto.randomUUID(), plaintext, prefix, hash: "" };
}

export async function hashApiKey(plaintext: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(plaintext)
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// Looks up the user attached to an API key. Side-effect: bumps lastUsedAt
// on every successful match (best-effort — non-fatal if it fails).
export async function resolveApiKey(
  db: Db,
  plaintext: string
): Promise<{ userId: string; keyId: string } | null> {
  if (!plaintext.startsWith(KEY_PREFIX)) {
    return null;
  }
  const hash = await hashApiKey(plaintext);
  const rows = await db
    .select({ id: apiKeys.id, userId: apiKeys.userId })
    .from(apiKeys)
    .where(eq(apiKeys.keyHash, hash))
    .limit(1);
  const row = rows[0];
  if (!row) {
    return null;
  }
  // Fire-and-forget last-used bump.
  db.update(apiKeys)
    .set({ lastUsedAt: sql`(unixepoch())` })
    .where(eq(apiKeys.id, row.id))
    .catch(() => {
      /* swallow */
    });
  return { userId: row.userId, keyId: row.id };
}

function base64url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) {
    bin += String.fromCharCode(b);
  }
  return btoa(bin)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}
