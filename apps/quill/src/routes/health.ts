import { Hono } from "hono";
import type { AppEnv } from "../index";

export const healthRouter = new Hono<AppEnv>();

healthRouter.get("/", (c) => {
  return c.json({
    status: "ok",
    env: c.env.POSTPILOT_ENV ?? "unknown",
    requestId: c.get("requestId"),
    runtime: "cloudflare-workers",
    version: "0.1.0",
  });
});
