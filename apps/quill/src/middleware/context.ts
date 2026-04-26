import type { MiddlewareHandler } from "hono";
import type { AppEnv } from "../index";

// Per-request context middleware. Per Cloudflare guidance: never construct
// clients (DB, AI, auth) at module scope. Instantiate them here, on the
// request, and stash on `c.var`.
//
// Today we don't have D1/AI bound yet, so this middleware just normalises
// `c.var` and stamps a request id for log correlation. Once you provision
// bindings, attach Drizzle and the AI Gateway client here in one place.
export const contextMiddleware: MiddlewareHandler<AppEnv> = async (c, next) => {
  const requestId = crypto.randomUUID();
  c.set("requestId", requestId);
  c.header("x-request-id", requestId);

  // Example wiring once D1 is bound:
  //   import { drizzle } from "drizzle-orm/d1";
  //   if (c.env.DB) c.set("db", drizzle(c.env.DB));

  await next();
};
