import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { createAuth } from "../auth";
import type { AppEnv } from "../index";
import { requireIdentity } from "../lib/identify";

export const keysRouter = new Hono<AppEnv>();

const createSchema = z.object({
  name: z.string().min(1).max(80),
});

// Best-effort coercion for the plugin's mixed Date | string | null fields.
// Better-auth returns Dates from the SQLite adapter; the JSON wire format
// the existing client expects is ISO-8601 strings (or null).
function toIso(v: unknown): string | null {
  if (v == null) return null;
  if (v instanceof Date) return v.toISOString();
  if (typeof v === "string") return v;
  return null;
}

// POST /v1/keys — mint a new key. The plaintext is returned exactly once
// (better-auth's create response is the one place the key is visible in
// cleartext). Restricted to session callers so a leaked key can't mint
// further keys.
keysRouter.post("/", async (c) => {
  const id = await requireIdentity(c);
  if (id.via !== "session") {
    throw new HTTPException(403, {
      message: "API keys can only be created from a signed-in browser session.",
    });
  }
  const body = createSchema.parse(await c.req.json());

  const auth = createAuth(c.env, new URL(c.req.url).origin);
  // Server-side call: omit `headers` so the plugin trusts the userId we
  // pass directly (it would otherwise require its own session cookie).
  const result = await auth.api.createApiKey({
    body: {
      name: body.name,
      userId: id.userId,
    },
  });

  return c.json({
    id: result.id,
    name: result.name ?? body.name,
    // `start` is the visible-prefix slice the plugin stores for UI hints;
    // `prefix` is the configured "pp_live_" string. Prefer `start` so the
    // listing and the create response surface the same value.
    prefix: result.start ?? result.prefix ?? "",
    plaintext: result.key,
  });
});

// GET /v1/keys — list this user's keys. Plaintext is never returned;
// the plugin only persists the hash + a short visible prefix.
keysRouter.get("/", async (c) => {
  const id = await requireIdentity(c);
  if (id.via !== "session") {
    throw new HTTPException(403, { message: "Session required to list keys." });
  }
  const auth = createAuth(c.env, new URL(c.req.url).origin);
  const result = await auth.api.listApiKeys({
    headers: c.req.raw.headers,
  });

  // The plugin returns `{ apiKeys, total, limit, offset }` and already scopes
  // by session.user.id; defense-in-depth filter on referenceId in case a
  // future config exposes cross-user rows.
  const keys = (result?.apiKeys ?? []).filter(
    (k) => k.referenceId === id.userId
  );

  return c.json({
    items: keys.map((k) => ({
      id: k.id,
      name: k.name ?? "",
      prefix: k.start ?? k.prefix ?? "",
      createdAt: toIso(k.createdAt),
      lastUsedAt: toIso(k.lastRequest),
    })),
  });
});

// DELETE /v1/keys/:id — revoke. The plugin enforces ownership server-side
// (referenceId must match the session user) and 404s otherwise, so we don't
// need a manual ownership lookup.
keysRouter.delete("/:id", async (c) => {
  const id = await requireIdentity(c);
  if (id.via !== "session") {
    throw new HTTPException(403, {
      message: "Revoke API keys from a signed-in browser session.",
    });
  }
  const keyId = c.req.param("id");
  const auth = createAuth(c.env, new URL(c.req.url).origin);
  try {
    await auth.api.deleteApiKey({
      body: { keyId },
      headers: c.req.raw.headers,
    });
  } catch (e) {
    // better-auth APIError surfaces status as a string (e.g. "NOT_FOUND") and
    // statusCode as a number — match either to be resilient to future changes.
    const status = (e as { status?: unknown })?.status;
    const code = (e as { statusCode?: unknown })?.statusCode;
    if (status === "NOT_FOUND" || code === 404) {
      throw new HTTPException(404, { message: "Key not found." });
    }
    throw e;
  }
  return c.json({ ok: true });
});
