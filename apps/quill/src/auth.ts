import { apiKey } from "@better-auth/api-key";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { drizzle } from "drizzle-orm/d1";
// biome-ignore lint/performance/noNamespaceImport: drizzleAdapter expects schema as a single object
import * as authSchema from "./db/auth-schema";

// better-auth instance factory. Called per-request because the D1 binding
// and request URL are needed to derive the baseURL. Returns the Auth handler;
// callers route HTTP requests through `auth.handler(request)`.
//
// Why request-scoped: Cloudflare Workers can't read env at module top level
// in a stable way, and better-auth needs a URL bound at config time so the
// session cookie domain is correct.
export type AuthEnv = {
  DB: D1Database;
  KV?: KVNamespace;
  BETTER_AUTH_SECRET?: string;
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
};

export function createAuth(env: AuthEnv, baseURL: string) {
  const db = drizzle(env.DB, { schema: authSchema });

  // Optional providers — only enable when both client id + secret are set.
  // Lets the worker boot without OAuth creds for the email/password path.
  const socialProviders: Record<
    string,
    { clientId: string; clientSecret: string }
  > = {};
  if (env.GITHUB_CLIENT_ID && env.GITHUB_CLIENT_SECRET) {
    socialProviders.github = {
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    };
  }
  if (env.GOOGLE_CLIENT_ID && env.GOOGLE_CLIENT_SECRET) {
    socialProviders.google = {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    };
  }

  return betterAuth({
    baseURL,
    secret: env.BETTER_AUTH_SECRET,
    database: drizzleAdapter(db, {
      provider: "sqlite",
      usePlural: true,
      schema: authSchema,
    }),
    // KV-backed secondary storage for sessions and rate-limit tracking.
    // Survives worker restarts; D1 stays the source of truth for users.
    secondaryStorage: env.KV
      ? {
          get: async (key) => (await env.KV?.get(key)) ?? null,
          set: async (key, value, ttl) => {
            await env.KV?.put(
              key,
              value,
              ttl ? { expirationTtl: ttl } : undefined
            );
          },
          delete: async (key) => {
            await env.KV?.delete(key);
          },
        }
      : undefined,
    emailAndPassword: {
      enabled: true,
    },
    user: {
      deleteUser: {
        // Lets a signed-in user delete their own account from the profile
        // page. Better Auth still requires a fresh session (or password)
        // before the delete actually goes through.
        enabled: true,
      },
    },
    socialProviders,
    plugins: [
      // Official better-auth apiKey plugin. Replaces the hand-rolled
      // src/lib/api-keys.ts. Configured here with all optional features
      // enabled at the schema level so we can opt into them per-call later
      // without further migrations.
      apiKey({
        // User-facing keys all start with `pp_live_`. Matches the format
        // documented in the legacy api-keys.ts.
        defaultPrefix: "pp_live_",
        // Allow the `metadata` column to be set/read so we can stash
        // tier/scope hints without another column.
        enableMetadata: true,
        // Keys never expire by default. The columns still exist so a
        // create-call can pass `expiresIn` opt-in.
        keyExpiration: {
          defaultExpiresIn: null,
        },
        // We don't enforce rate limits in v1 — but make sure the columns
        // are populated with sensible defaults so we can flip this on
        // per-key later. `enabled: false` = no enforcement now.
        rateLimit: {
          enabled: false,
        },
        // Permissions/scopes columns exist; no defaults enforced in v1.
        permissions: {},
      }),
    ],
    advanced: {
      defaultCookieAttributes: {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
      },
    },
  });
}
