import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import * as schema from "../db/schema";
import type { AppEnv } from "../index";
import {
  CREDIT_COSTS,
  getOrInitBalance,
  recentLedger,
} from "../lib/credits";
import { identify } from "../lib/identify";

export const meRouter = new Hono<AppEnv>();

// GET /v1/me — caller's identity + credit posture. Anonymous returns
// `null` for everything plan-related so the client can decide whether
// to render a sign-in prompt or a paywall.
meRouter.get("/", async (c) => {
  const id = await identify(c);
  if (!id) {
    return c.json({
      authenticated: false,
      balance: null,
      lifetimeUsed: null,
      lifetimePurchased: null,
      costs: CREDIT_COSTS,
    });
  }
  const db = drizzle(c.env.DB, { schema });
  const b = await getOrInitBalance(db, id.userId);
  return c.json({
    authenticated: true,
    via: id.via,
    balance: b.balance,
    lifetimeUsed: b.lifetimeUsed,
    lifetimePurchased: b.lifetimePurchased,
    costs: CREDIT_COSTS,
  });
});

// GET /v1/me/usage — recent ledger entries for the activity panel.
meRouter.get("/usage", async (c) => {
  const id = await identify(c);
  if (!id) {
    return c.json({ items: [] });
  }
  const db = drizzle(c.env.DB, { schema });
  const rows = await recentLedger(db, id.userId, 100);
  return c.json({
    items: rows.map((r) => ({
      ...r,
      createdAt:
        r.createdAt instanceof Date ? r.createdAt.toISOString() : r.createdAt,
    })),
  });
});
