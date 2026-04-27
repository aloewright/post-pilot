import { drizzle } from "drizzle-orm/d1";
import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { createAuth } from "../auth";
import * as schema from "../db/schema";
import type { AppEnv } from "../index";
import { resolveApiKey } from "./api-keys";

export type Identity = {
  userId: string;
  email?: string;
  via: "session" | "api_key";
  keyId?: string;
};

// Resolves the caller. Tries Authorization: Bearer pp_live_* first
// (so machine-to-machine traffic doesn't depend on cookies), falls back
// to the better-auth session cookie. Returns null if neither is present
// or valid — caller decides whether that's a 401 or anonymous.
export async function identify(
  c: Context<AppEnv>
): Promise<Identity | null> {
  const authz = c.req.header("authorization");
  if (authz?.toLowerCase().startsWith("bearer ")) {
    const token = authz.slice(7).trim();
    if (token.startsWith("pp_live_")) {
      const db = drizzle(c.env.DB, { schema });
      const resolved = await resolveApiKey(db, token);
      if (resolved) {
        return { userId: resolved.userId, via: "api_key", keyId: resolved.keyId };
      }
    }
  }
  const auth = createAuth(c.env, new URL(c.req.url).origin);
  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (session?.user) {
    return {
      userId: session.user.id,
      email: session.user.email ?? undefined,
      via: "session",
    };
  }
  return null;
}

export async function requireIdentity(c: Context<AppEnv>): Promise<Identity> {
  const id = await identify(c);
  if (!id) {
    throw new HTTPException(401, {
      message: "Sign in or pass an API key to use this endpoint.",
    });
  }
  return id;
}
