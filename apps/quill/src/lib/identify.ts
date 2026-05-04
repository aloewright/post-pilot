import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { createAuth } from "../auth";
import type { AppEnv } from "../index";

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
export async function identify(c: Context<AppEnv>): Promise<Identity | null> {
  const auth = createAuth(c.env, new URL(c.req.url).origin);
  const authz = c.req.header("authorization");
  if (authz?.toLowerCase().startsWith("bearer ")) {
    const token = authz.slice(7).trim();
    if (token) {
      try {
        const result = await auth.api.verifyApiKey({
          body: { key: token },
        });
        if (result?.valid && result.key?.referenceId) {
          return {
            userId: result.key.referenceId,
            via: "api_key",
            keyId: result.key.id,
          };
        }
      } catch (e) {
        console.warn(
          JSON.stringify({
            msg: "verify_api_key_failed",
            error: (e as Error).message?.slice(0, 200),
          })
        );
      }
      return null;
    }
  }
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
