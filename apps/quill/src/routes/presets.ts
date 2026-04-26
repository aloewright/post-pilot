import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import type { AppEnv } from "../index";
import { getPreset, USE_CASE_PRESETS } from "../lib/presets";

export const presetsRouter = new Hono<AppEnv>();

presetsRouter.get("/", (c) => {
  return c.json({ items: USE_CASE_PRESETS });
});

presetsRouter.get("/:slug", (c) => {
  const preset = getPreset(c.req.param("slug"));
  if (!preset) {
    throw new HTTPException(404, { message: "Preset not found" });
  }
  return c.json(preset);
});
