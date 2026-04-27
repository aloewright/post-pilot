import { eq, sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { z } from "zod";
import { userPreferences } from "../db/schema";
import * as schema from "../db/schema";
import type { AppEnv } from "../index";
import { credit } from "../lib/credits";
import { requireIdentity } from "../lib/identify";
import {
  createCheckout,
  createCustomerSession,
  verifyWebhook,
} from "../lib/polar";

export const billingRouter = new Hono<AppEnv>();

function requirePolar(env: AppEnv["Bindings"]) {
  if (!env.QUILL_POLAR_ACCESS_TOKEN) {
    throw new HTTPException(503, {
      message: "Billing is not configured: QUILL_POLAR_ACCESS_TOKEN missing.",
    });
  }
  if (!env.QUILL_POLAR_CREDITS_PRODUCT_ID) {
    throw new HTTPException(503, {
      message:
        "Billing is not configured: QUILL_POLAR_CREDITS_PRODUCT_ID missing.",
    });
  }
  return {
    accessToken: env.QUILL_POLAR_ACCESS_TOKEN,
    productId: env.QUILL_POLAR_CREDITS_PRODUCT_ID,
    packSize: Number.parseInt(env.QUILL_POLAR_CREDITS_PACK_SIZE ?? "100000", 10),
  };
}

// POST /v1/billing/checkout — open a Polar checkout for the credit pack.
// Returns a URL the client redirects to. success_url lands back on
// /playground?upgraded=1 so the UI can show a confirmation toast.
billingRouter.post("/checkout", async (c) => {
  const id = await requireIdentity(c);
  const polar = requirePolar(c.env);

  const origin = new URL(c.req.url).origin;
  const checkout = await createCheckout(
    { accessToken: polar.accessToken },
    {
      productId: polar.productId,
      externalCustomerId: id.userId,
      customerEmail: id.email,
      successUrl: `${origin}/playground?upgraded=1`,
    }
  );

  return c.json({ url: checkout.url, checkoutId: checkout.id });
});

// POST /v1/billing/portal — return a Polar customer portal URL.
billingRouter.post("/portal", async (c) => {
  const id = await requireIdentity(c);
  const polar = requirePolar(c.env);

  try {
    const session = await createCustomerSession(
      { accessToken: polar.accessToken },
      id.userId
    );
    return c.json({ url: session.customer_portal_url });
  } catch (e) {
    // Most likely cause: user has never checked out, so Polar has no
    // customer record for this external id yet. Surface as 404 so the
    // client can prompt them to buy credits first.
    const msg = (e as Error).message;
    if (msg.includes("404")) {
      throw new HTTPException(404, {
        message: "No Polar customer yet — buy credits to open the portal.",
      });
    }
    throw e;
  }
});

// POST /v1/billing/webhook — Polar event delivery. We verify the
// Standard Webhooks signature, then dispatch on event type. Idempotency
// is handled by `credit()` keyed on the order id.
const eventSchema = z.object({
  type: z.string(),
  data: z.record(z.string(), z.unknown()),
});

billingRouter.post("/webhook", async (c) => {
  const secret = c.env.POST_PILOT_POLAR_SECRET;
  if (!secret) {
    throw new HTTPException(503, {
      message: "Webhook not configured: POST_PILOT_POLAR_SECRET missing.",
    });
  }
  const raw = await c.req.text();
  const ok = await verifyWebhook(secret, c.req.raw.headers, raw);
  if (!ok) {
    throw new HTTPException(401, { message: "Invalid webhook signature." });
  }
  const event = eventSchema.parse(JSON.parse(raw));

  if (event.type === "order.paid" || event.type === "order.created") {
    const order = event.data as {
      id: string;
      external_customer_id: string | null;
      customer_id: string | null;
      product_id: string;
      paid: boolean;
      amount: number;
      product?: { metadata?: Record<string, string> };
    };

    // Only credit when paid. order.created can fire before payment clears.
    if (!order.paid) {
      return c.json({ ok: true, skipped: "not_paid" });
    }
    const userId = order.external_customer_id;
    if (!userId) {
      console.warn(
        JSON.stringify({
          msg: "polar_webhook_missing_external_customer_id",
          orderId: order.id,
        })
      );
      return c.json({ ok: true, skipped: "no_external_id" });
    }

    // Pack size from product metadata, falling back to the env default.
    // This lets us add new pack SKUs without redeploying — just tag the
    // product with `quill_credit_pack: "<n>"` in Polar.
    const fromMeta = order.product?.metadata?.quill_credit_pack;
    const fallback = Number.parseInt(
      c.env.QUILL_POLAR_CREDITS_PACK_SIZE ?? "100000",
      10
    );
    const packSize = fromMeta ? Number.parseInt(fromMeta, 10) : fallback;
    if (!Number.isFinite(packSize) || packSize <= 0) {
      throw new HTTPException(400, { message: "Bad pack size on product." });
    }

    const db = drizzle(c.env.DB, { schema });

    // Persist the polar customer id so we can open the portal later
    // without an extra Polar round trip.
    if (order.customer_id) {
      await db
        .insert(userPreferences)
        .values({
          userId,
          polarCustomerId: order.customer_id,
        })
        .onConflictDoUpdate({
          target: userPreferences.userId,
          set: {
            polarCustomerId: order.customer_id,
            updatedAt: sql`(unixepoch())`,
          },
        });
    }

    await credit(db, userId, packSize, "topup", `polar_order:${order.id}`, {
      polarOrderId: order.id,
      productId: order.product_id,
      amountCents: order.amount,
    });

    return c.json({ ok: true, credited: packSize });
  }

  if (event.type === "order.refunded") {
    // Out of v1 scope — log it; manual reversal via /v1/me/usage if needed.
    console.warn(
      JSON.stringify({
        msg: "polar_webhook_refund_unhandled",
        data: event.data,
      })
    );
  }

  return c.json({ ok: true, ignored: event.type });
});
