import { and, desc, eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { apiKeys } from "../db/schema";
import * as schema from "../db/schema";
import type { AppEnv } from "../index";
import { generateApiKey, hashApiKey } from "../lib/api-keys";
import { requireIdentity } from "../lib/identify";

export const keysRouter = new Hono<AppEnv>();

const createSchema = z.object({
  name: z.string().min(1).max(80),
});

// POST /v1/keys — mint a new key. The plaintext is returned exactly once;
// only the SHA-256 hash + display prefix are persisted, so a leaked key
// can be rotated without exposing the live one.
keysRouter.post("/", async (c) => {
  const id = await requireIdentity(c);
  if (id.via !== "session") {
    throw new HTTPException(403, {
      message: "API keys can only be created from a signed-in browser session.",
    });
  }
  const body = createSchema.parse(await c.req.json());
  const db = drizzle(c.env.DB, { schema });

  const k = generateApiKey();
  const hash = await hashApiKey(k.plaintext);

  await db.insert(apiKeys).values({
    id: k.id,
    userId: id.userId,
    name: body.name,
    prefix: k.prefix,
    keyHash: hash,
  });

  return c.json({
    id: k.id,
    name: body.name,
    prefix: k.prefix,
    plaintext: k.plaintext,
  });
});

// GET /v1/keys — list this user's keys. Plaintext is never returned.
keysRouter.get("/", async (c) => {
  const id = await requireIdentity(c);
  const db = drizzle(c.env.DB, { schema });
  const rows = await db
    .select({
      id: apiKeys.id,
      name: apiKeys.name,
      prefix: apiKeys.prefix,
      createdAt: apiKeys.createdAt,
      lastUsedAt: apiKeys.lastUsedAt,
    })
    .from(apiKeys)
    .where(eq(apiKeys.userId, id.userId))
    .orderBy(desc(apiKeys.createdAt));

  return c.json({
    items: rows.map((r) => ({
      ...r,
      createdAt:
        r.createdAt instanceof Date ? r.createdAt.toISOString() : r.createdAt,
      lastUsedAt:
        r.lastUsedAt instanceof Date
          ? r.lastUsedAt.toISOString()
          : r.lastUsedAt,
    })),
  });
});

// DELETE /v1/keys/:id — revoke. Constrained to the caller's own keys so
// one user can't revoke another's by guessing ids.
keysRouter.delete("/:id", async (c) => {
  const id = await requireIdentity(c);
  if (id.via !== "session") {
    throw new HTTPException(403, {
      message: "Revoke API keys from a signed-in browser session.",
    });
  }
  const keyId = c.req.param("id");
  const db = drizzle(c.env.DB, { schema });
  const result = await db
    .delete(apiKeys)
    .where(and(eq(apiKeys.id, keyId), eq(apiKeys.userId, id.userId)))
    .returning({ id: apiKeys.id });
  if (!result[0]) {
    throw new HTTPException(404, { message: "Key not found." });
  }
  return c.json({ ok: true });
});
