import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import type { AppEnv } from "../index";

// Schema is permissive: only `prompt` is required, every other field is
// optional and forwarded only when the caller sets it. Different image
// models (gpt-image-2, recraft/*, flux/*) accept different shapes; rather
// than impose one model's schema we let unset fields fall through.
const bodySchema = z.object({
  prompt: z.string().min(1).max(4000),
  size: z.string().optional(),
  quality: z.string().optional(),
  background: z.string().optional(),
  output_format: z.string().optional(),
  image: z.string().optional(),
  model: z.string().optional(),
});

export const imagesRouter = new Hono<AppEnv>();

// POST /v1/images/generate — image model is read from the IMAGE_MODEL var
// binding so it can be swapped via the Cloudflare dashboard without a
// redeploy. Routes through AI Gateway when AI_GATEWAY_ID is set.
imagesRouter.post("/generate", async (c) => {
  const body = bodySchema.parse(await c.req.json());

  const model = body.model ?? c.env.IMAGE_MODEL;
  if (!model) {
    throw new HTTPException(500, {
      message: "IMAGE_MODEL var is not configured",
    });
  }

  const gatewayId = c.env.AI_GATEWAY_ID;
  const opts = gatewayId ? { gateway: { id: gatewayId } } : undefined;

  const input: Record<string, unknown> = { prompt: body.prompt };
  if (body.size) {
    input.size = body.size;
  }
  if (body.quality) {
    input.quality = body.quality;
  }
  if (body.background) {
    input.background = body.background;
  }
  if (body.output_format) {
    input.output_format = body.output_format;
  }
  if (body.image) {
    input.image = body.image;
  }

  const result = (await c.env.AI.run(
    model as Parameters<Ai["run"]>[0],
    input,
    opts
  )) as Record<string, unknown>;

  // Different models return different shapes: gpt-image-2 → { image: <url> },
  // recraft / flux often → { image: <base64> } or stream a binary body.
  // Pass the full payload through so the caller can handle either.
  return c.json({ model, ...result, requestId: c.get("requestId") });
});
