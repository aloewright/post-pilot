import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { contextMiddleware } from "./middleware/context";
import { errorHandler } from "./middleware/error";
import { applyRouter } from "./routes/apply";
import { guidesRouter } from "./routes/guides";
import { healthRouter } from "./routes/health";
import { presetsRouter } from "./routes/presets";

// Bindings declared in wrangler.jsonc. `wrangler types --env-interface
// CloudflareBindings` regenerates worker-configuration.d.ts. Until you
// run that locally, the type below tracks what we expect to find.
//
// Bindings still commented out in wrangler.jsonc are typed as optional so
// the worker compiles before resources are provisioned. Remove the `?`
// once the corresponding binding is uncommented and types are regenerated.
export type AppBindings = {
  ASSETS: Fetcher;
  QUILL_ENV?: string;
  AI_GATEWAY_BASE_URL?: string;
  AI_GATEWAY_TOKEN?: string;
  DB?: D1Database;
  KV?: KVNamespace;
  R2?: R2Bucket;
  AI?: Ai;
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
  }),
);

app.onError(errorHandler);

app.route("/v1/health", healthRouter);
app.route("/v1/guides", guidesRouter);
app.route("/v1/presets", presetsRouter);
app.route("/v1/apply", applyRouter);

// Anything not under /v1 falls through to the static SPA assets.
// `not_found_handling: "single-page-application"` in wrangler.jsonc means
// deep links like /guides/hemingway resolve to index.html so TanStack
// Router can take over.
app.get("*", async (c) => {
  if (!c.env.ASSETS) {
    return c.text(
      "Static asset binding missing. Run `pnpm dev` (Vite) for the client.",
      500,
    );
  }
  return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
