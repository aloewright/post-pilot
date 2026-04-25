import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import type { AppEnv } from "../index";

const bodySchema = z.object({
  prompt: z.string().min(1).max(4000),
  size: z
    .enum(["1024x1024", "1024x1536", "1536x1024", "auto"])
    .default("auto"),
  quality: z.enum(["low", "medium", "high", "auto"]).default("auto"),
  background: z.enum(["transparent", "opaque", "auto"]).default("auto"),
  output_format: z.enum(["png", "webp", "jpeg"]).default("png"),
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

  const result = (await c.env.AI.run(
    model as Parameters<Ai["run"]>[0],
    {
      prompt: body.prompt,
      size: body.size,
      quality: body.quality,
      background: body.background,
      output_format: body.output_format,
      ...(body.image ? { image: body.image } : {}),
    },
    opts,
  )) as { image?: string };

  if (!result?.image) {
    throw new HTTPException(502, {
      message: "Image model returned no image url",
    });
  }

  return c.json({
    model,
    image: result.image,
    requestId: c.get("requestId"),
  });
});
