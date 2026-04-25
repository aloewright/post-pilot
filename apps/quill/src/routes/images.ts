import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import type { AppEnv } from "../index";

export const DEFAULT_IMAGE_MODEL = "openai/gpt-image-2" as const;

const bodySchema = z.object({
  prompt: z.string().min(1).max(4000),
  size: z
    .enum(["1024x1024", "1024x1536", "1536x1024", "auto"])
    .default("auto"),
  quality: z.enum(["low", "medium", "high", "auto"]).default("auto"),
  background: z.enum(["transparent", "opaque", "auto"]).default("auto"),
  output_format: z.enum(["png", "webp", "jpeg"]).default("png"),
  image: z.string().optional(),
});

export const imagesRouter = new Hono<AppEnv>();

// POST /v1/images/generate — call openai/gpt-image-2 via the Workers AI
// binding. Routes through AI Gateway when AI_GATEWAY_ID is set; otherwise
// the binding's default account-level gateway. Returns the model's
// { image: <url> } payload verbatim plus the model id and request id.
imagesRouter.post("/generate", async (c) => {
  const body = bodySchema.parse(await c.req.json());

  const gatewayId = c.env.AI_GATEWAY_ID;
  const opts = gatewayId ? { gateway: { id: gatewayId } } : undefined;

  const result = (await c.env.AI.run(
    DEFAULT_IMAGE_MODEL,
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
    model: DEFAULT_IMAGE_MODEL,
    image: result.image,
    requestId: c.get("requestId"),
  });
});
