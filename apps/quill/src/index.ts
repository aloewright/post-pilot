import { routeAgentRequest } from "agents";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { contextMiddleware } from "./middleware/context";
import { errorHandler } from "./middleware/error";
import { adminRouter } from "./routes/admin";
import { applyRouter } from "./routes/apply";
import { authRouter } from "./routes/auth";
import { billingRouter } from "./routes/billing";
import { guidesRouter } from "./routes/guides";
import { healthRouter } from "./routes/health";
import { humanizeRouter } from "./routes/humanize";
import { imagesRouter } from "./routes/images";
import { keysRouter } from "./routes/keys";
import { meRouter } from "./routes/me";
import { presetsRouter } from "./routes/presets";
import { sessionsRouter } from "./routes/sessions";

// Bindings declared in wrangler.jsonc. `pnpm cf-typegen` regenerates
// worker-configuration.d.ts to match. Required bindings are non-optional;
// secrets stay optional so the worker still boots before they are provisioned.
export type AppBindings = {
  ASSETS: Fetcher;
  POSTPILOT_ENV?: string;
  AI_GATEWAY_BASE_URL?: string;
  AI_GATEWAY_TOKEN?: string;
  AI_GATEWAY_ID?: string;
  AI_PROVIDER_KEY?: string;
  DEFAULT_MODEL?: string;
  IMAGE_MODEL?: string;
  COPYLEAKS_EMAIL?: string;
  COPYLEAKS_API_KEY?: string;
  BETTER_AUTH_SECRET?: string;
  GITHUB_CLIENT_ID?: string;
  GITHUB_CLIENT_SECRET?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  // Polar billing (org-scoped access token + product/meter ids set up in
  // the Polar dashboard or via the API). The webhook secret arrives under
  // the legacy POST_PILOT_POLAR_SECRET name to match Doppler.
  QUILL_POLAR_ACCESS_TOKEN?: string;
  QUILL_POLAR_ORG_ID?: string;
  QUILL_POLAR_ORG_SLUG?: string;
  QUILL_POLAR_METER_ID?: string;
  QUILL_POLAR_CREDITS_PRODUCT_ID?: string;
  QUILL_POLAR_CREDITS_PACK_SIZE?: string;
  POST_PILOT_POLAR_SECRET?: string;
  ADMIN_API_KEY?: string;
  DB: D1Database;
  KV: KVNamespace;
  R2: R2Bucket;
  AI: Ai;
  WRITING_SESSION: DurableObjectNamespace;
};

export type AppVariables = {
  requestId: string;
};

export type AppEnv = {
  Bindings: AppBindings;
  Variables: AppVariables;
};

const app = new Hono<AppEnv>();

app.use("*", logger());
app.use("*", contextMiddleware);
app.use(
  "/v1/*",
  cors({
    origin: (origin) => origin ?? "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["content-type", "authorization", "x-api-key"],
    maxAge: 600,
  })
);

app.onError(errorHandler);

app.route("/v1/health", healthRouter);
app.route("/health", healthRouter);
app.route("/v1/guides", guidesRouter);
app.route("/v1/presets", presetsRouter);
app.route("/v1/apply", applyRouter);
app.route("/v1/humanize", humanizeRouter);
app.route("/v1/images", imagesRouter);
app.route("/v1/sessions", sessionsRouter);
app.route("/v1/billing", billingRouter);
app.route("/v1/keys", keysRouter);
app.route("/v1/me", meRouter);
app.route("/v1/admin", adminRouter);
app.route("/auth", authRouter);
app.route("/api/auth", authRouter);

// Stateful agent path: /agents/WritingSessionAgent/:name routes WebSocket +
// HTTP traffic to a per-session Durable Object instance. Per-user history,
// streaming, and tool use live there.
app.all("/agents/*", async (c) => {
  const res = await routeAgentRequest(c.req.raw, c.env);
  return res ?? c.text("Not found", 404);
});

// Anything not under /v1 or /agents falls through to the static SPA assets.
// `not_found_handling: "single-page-application"` in wrangler.jsonc means
// deep links like /guides/hemingway resolve to index.html so TanStack
// Router can take over.
app.get("*", async (c) => {
  if (!c.env.ASSETS) {
    return c.text(
      "Static asset binding missing. Run `pnpm dev` (Vite) for the client.",
      500
    );
  }
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
export { WritingSessionAgent } from "./agents/writing-session";
