import { Hono } from "hono";
import { createAuth } from "../auth";
import type { AppEnv } from "../index";

// Mount better-auth at /auth/* (and /api/auth/* — better-auth defaults to
// the latter, but we expose both prefixes so the existing PRD path holds).
//
// Each request creates a per-request auth instance bound to the live D1/KV
// bindings. baseURL is derived from the incoming URL so the session cookie
// scope is correct in dev (localhost), preview (.workers.dev), and prod.
export const authRouter = new Hono<AppEnv>();

authRouter.all("/*", async (c) => {
  const auth = createAuth(
    {
      DB: c.env.DB,
      KV: c.env.KV,
      BETTER_AUTH_SECRET: c.env.BETTER_AUTH_SECRET,
      GITHUB_CLIENT_ID: c.env.GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET: c.env.GITHUB_CLIENT_SECRET,
      GOOGLE_CLIENT_ID: c.env.GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: c.env.GOOGLE_CLIENT_SECRET,
    },
    new URL(c.req.url).origin
  );
  return auth.handler(c.req.raw);
});
