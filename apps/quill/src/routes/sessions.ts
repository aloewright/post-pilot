import { Hono } from "hono";
import type { AppEnv } from "../index";

export const sessionsRouter = new Hono<AppEnv>();

// POST /v1/sessions — mint a fresh session id and return the URLs the client
// should use to talk to a stateful WritingSessionAgent. Actual state lives
// in the Durable Object instance, which is created lazily on first connect.
sessionsRouter.post("/", (c) => {
  const id = crypto.randomUUID();
  return c.json({
    id,
    websocketPath: `/agents/WritingSessionAgent/${id}`,
    httpPath: `/agents/WritingSessionAgent/${id}`,
  });
});
