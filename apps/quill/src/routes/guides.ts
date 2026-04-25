import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { GUIDES, getGuide, listGuides } from "../lib/guides";
import { guideToJSON, guideToYAML } from "../lib/export";
import { ERAS, USE_CASES, VOICE_AXES, sortGuides } from "../lib/utils";
import type { AppEnv } from "../index";

export const guidesRouter = new Hono<AppEnv>();

const listQuerySchema = z.object({
  era: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((v) =>
      v === undefined ? [] : Array.isArray(v) ? v : [v],
    ),
  useCase: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((v) =>
      v === undefined ? [] : Array.isArray(v) ? v : [v],
    ),
  voice: z
    .union([z.string(), z.array(z.string())])
    .optional()
    .transform((v) =>
      v === undefined ? [] : Array.isArray(v) ? v : [v],
    ),
  q: z.string().optional(),
  limit: z.coerce.number().int().min(1).max(100).default(50),
  offset: z.coerce.number().int().min(0).default(0),
  sort: z.enum(["author", "era", "recent", "fidelity"]).default("author"),
});

const exportFormatSchema = z
  .enum(["json", "yaml", "prompt", "export"])
  .default("json");

guidesRouter.get("/", (c) => {
  const parsed = listQuerySchema.safeParse(
    Object.fromEntries(new URL(c.req.url).searchParams),
  );
  if (!parsed.success) throw parsed.error;
  const params = parsed.data;
  const q = params.q?.trim().toLowerCase();

  const filtered = listGuides().filter((g) => {
    if (
      params.era.length &&
      !params.era.some((e) =>
        (ERAS as readonly string[]).includes(e) && g.eras.includes(e as never),
      )
    ) {
      return false;
    }
    if (
      params.useCase.length &&
      !params.useCase.some(
        (u) =>
          (USE_CASES as readonly string[]).includes(u) &&
          g.use_cases.includes(u as never),
      )
    ) {
      return false;
    }
    if (
      params.voice.length &&
      !params.voice.some(
        (v) =>
          (VOICE_AXES as readonly string[]).includes(v) &&
          g.voice_axes.includes(v as never),
      )
    ) {
      return false;
    }
    if (q) {
      const hay =
        `${g.author} ${g.slug} ${g.kicker} ${g.standfirst} ${g.description}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });

  const sorted = sortGuides(filtered, params.sort);
  const items = sorted
    .slice(params.offset, params.offset + params.limit)
    .map((g) => ({
      slug: g.slug,
      author: g.author,
      era: g.era,
      eras: g.eras,
      kicker: g.kicker,
      standfirst: g.standfirst,
      voice_axes: g.voice_axes,
      use_cases: g.use_cases,
      copyright_posture: g.copyright_posture,
      is_official: g.is_official,
      curator: g.curator,
      updated_at: g.updated_at,
      fidelity: g.fidelity ?? [],
    }));

  const nextOffset = params.offset + items.length;
  return c.json({
    count: items.length,
    total: GUIDES.length,
    matched: filtered.length,
    offset: params.offset,
    limit: params.limit,
    nextOffset: nextOffset < filtered.length ? nextOffset : null,
    items,
  });
});

guidesRouter.get("/:slug", (c) => {
  const slug = c.req.param("slug");
  const guide = getGuide(slug);
  if (!guide) {
    throw new HTTPException(404, { message: `Guide '${slug}' not found` });
  }

  const format = exportFormatSchema.parse(c.req.query("format") ?? "json");

  if (format === "yaml") {
    return c.text(guideToYAML(guide), 200, {
      "content-type": "application/yaml; charset=utf-8",
    });
  }
  if (format === "prompt") {
    return c.text(guide.system_prompt, 200, {
      "content-type": "text/plain; charset=utf-8",
    });
  }
  if (format === "export") {
    return c.body(guideToJSON(guide), 200, {
      "content-type": "application/json; charset=utf-8",
    });
  }
  return c.json(guide);
});

guidesRouter.get("/:slug/exemplars", (c) => {
  const slug = c.req.param("slug");
  const guide = getGuide(slug);
  if (!guide) throw new HTTPException(404, { message: "Guide not found" });
  return c.json({ items: guide.exemplars });
});

guidesRouter.get("/:slug/rubric", (c) => {
  const slug = c.req.param("slug");
  const guide = getGuide(slug);
  if (!guide) throw new HTTPException(404, { message: "Guide not found" });
  return c.json(guide.eval_rubric);
});
