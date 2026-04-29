import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { createAuth } from "../auth";
import type { AppEnv } from "../index";
import { requireIdentity } from "../lib/identify";
import {
  ALL_SCOPES,
  DEFAULT_SCOPES,
  fromPluginPermissions,
  isScopeId,
  toPluginPermissions,
  type ScopeId,
} from "../lib/scopes";

export const keysRouter = new Hono<AppEnv>();

const createSchema = z.object({
  name: z.string().min(1).max(80),
  expiresIn: z.number().int().positive().max(10 * 365 * 86400).optional(),
  scopes: z.array(z.string()).optional(),
  rateLimit: z
    .object({
      enabled: z.boolean(),
      // Window in ms. Cap at 1 hour to prevent absurd values.
      windowMs: z.number().int().positive().max(60 * 60 * 1000),
      max: z.number().int().positive().max(10000),
    })
    .optional(),
});

// Best-effort coercion for the plugin's mixed Date | string | null fields.
// Better-auth returns Dates from the SQLite adapter; the JSON wire format
// the existing client expects is ISO-8601 strings (or null).
function toIso(v: unknown): string | null {
  if (v == null) return null;
  if (v instanceof Date) return v.toISOString();
  if (typeof v === "number") return new Date(v).toISOString();
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

  // Validate scopes — if provided, every entry must be a known ScopeId.
  const requestedScopes = body.scopes ?? null;
  if (requestedScopes) {
    for (const s of requestedScopes) {
      if (!isScopeId(s)) {
        throw new HTTPException(400, {
          message: `Unknown scope: ${s}. Allowed: ${ALL_SCOPES.join(", ")}`,
        });
      }
    }
  }
  const finalScopes: readonly ScopeId[] =
    requestedScopes && requestedScopes.length > 0
      ? (requestedScopes as ScopeId[])
      : DEFAULT_SCOPES;
  const permissions = toPluginPermissions(finalScopes);

  const auth = createAuth(c.env, new URL(c.req.url).origin);
  // Server-side call: omit `headers` so the plugin trusts the userId we
  // pass directly (it would otherwise require its own session cookie).
  const result = await auth.api.createApiKey({
    body: {
      name: body.name,
      userId: id.userId,
      permissions,
      ...(body.expiresIn ? { expiresIn: body.expiresIn } : {}),
      ...(body.rateLimit?.enabled
        ? {
            rateLimitEnabled: true,
            rateLimitTimeWindow: body.rateLimit.windowMs,
            rateLimitMax: body.rateLimit.max,
          }
        : {}),
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
    expiresAt: toIso((result as { expiresAt?: unknown }).expiresAt),
    scopes: finalScopes,
    rateLimit: body.rateLimit?.enabled
      ? { windowMs: body.rateLimit.windowMs, max: body.rateLimit.max }
      : null,
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
      expiresAt: toIso((k as { expiresAt?: unknown }).expiresAt),
      scopes: fromPluginPermissions(
        (k as { permissions?: unknown }).permissions
      ),
      rateLimit: (k as { rateLimitEnabled?: boolean }).rateLimitEnabled
        ? {
            windowMs:
              (k as { rateLimitTimeWindow?: number }).rateLimitTimeWindow ??
              null,
            max: (k as { rateLimitMax?: number }).rateLimitMax ?? null,
          }
        : null,
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
