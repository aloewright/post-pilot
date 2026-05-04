import { and, desc, eq, gte, sql } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";
import { creditBalance, creditLedger, humanizeJobs } from "../db/schema";

// Pricing — per-character credits. 1 credit ≈ $0.0001 at the $10/100k pack
// price, displayed in the UI as "$0.10/1k chars stylize, $0.50/1k chars
// humanize". Tune here, the rest of the app reads through these helpers.
export const CREDIT_COSTS = {
  STYLIZE_PER_CHAR: 1,
  HUMANIZE_PER_CHAR: 5,
} as const;

// Welcome credits granted lazily on first balance read. Lets a new user try
// stylize+humanize without going through checkout first. ~10k chars stylize
// or 2k chars humanize.
export const WELCOME_CREDITS = 10_000;

// Hourly job cap for humanize stays as cheap abuse prevention. Credit
// balance handles the headline metering — this just stops a runaway script
// from burning the whole pack in seconds.
export const HUMANIZE_HOURLY_JOB_CAP = 30;
export const HUMANIZE_PER_INPUT_CHAR_CAP = 25_000;

type Db = DrizzleD1Database<Record<string, unknown>>;

export type Balance = {
  balance: number;
  lifetimePurchased: number;
  lifetimeUsed: number;
};

export function stylizeCost(inputChars: number): number {
  return inputChars * CREDIT_COSTS.STYLIZE_PER_CHAR;
}

export function humanizeCost(inputChars: number): number {
  return inputChars * CREDIT_COSTS.HUMANIZE_PER_CHAR;
}

// Read-or-create. The first call for a user inserts a row with
// WELCOME_CREDITS and writes a matching ledger entry. INSERT OR IGNORE
// + a follow-up read keeps it idempotent under concurrent requests.
export async function getOrInitBalance(
  db: Db,
  userId: string
): Promise<Balance> {
  const existing = await db
    .select()
    .from(creditBalance)
    .where(eq(creditBalance.userId, userId))
    .limit(1);
  if (existing[0]) {
    return existing[0];
  }
  // Lazy welcome grant. The ledger row uses a deterministic refId so a
  // racing second insert can't double-credit the user.
  await db
    .insert(creditBalance)
    .values({
      userId,
      balance: WELCOME_CREDITS,
      lifetimePurchased: 0,
      lifetimeUsed: 0,
    })
    .onConflictDoNothing();
  await db
    .insert(creditLedger)
    .values({
      id: crypto.randomUUID(),
      userId,
      delta: WELCOME_CREDITS,
      reason: "welcome",
      refId: `welcome:${userId}`,
    })
    .onConflictDoNothing();
  const row = await db
    .select()
    .from(creditBalance)
    .where(eq(creditBalance.userId, userId))
    .limit(1);
  if (!row[0]) {
    throw new Error("credit_balance row missing after init");
  }
  return row[0];
}

export type DebitResult =
  | { ok: true; newBalance: number; ledgerId: string }
  | {
      ok: false;
      reason: "insufficient_credits";
      balance: number;
      cost: number;
    };

// Atomic debit: writes the ledger row first, then conditionally decrements
// the balance only if it still has at least `cost` credits. The
// conditional UPDATE returns rowcount=0 if the user is short, in which
// case we roll the ledger row back. D1 doesn't have transactions across
// statements, so this two-step + compensating delete is the best we can
// do; the ledger write is the audit trail either way.
export async function debit(
  db: Db,
  userId: string,
  cost: number,
  reason: "apply" | "humanize",
  refId: string,
  metadata?: Record<string, unknown>
): Promise<DebitResult> {
  await getOrInitBalance(db, userId);

  const ledgerId = crypto.randomUUID();
  await db.insert(creditLedger).values({
    id: ledgerId,
    userId,
    delta: -cost,
    reason,
    refId,
    metadata,
  });

  const result = await db
    .update(creditBalance)
    .set({
      balance: sql`${creditBalance.balance} - ${cost}`,
      lifetimeUsed: sql`${creditBalance.lifetimeUsed} + ${cost}`,
      updatedAt: sql`(unixepoch())`,
    })
    .where(
      and(eq(creditBalance.userId, userId), gte(creditBalance.balance, cost))
    )
    .returning({ balance: creditBalance.balance });

  if (!result[0]) {
    // Roll back the ledger row — keep the audit trail clean.
    await db.delete(creditLedger).where(eq(creditLedger.id, ledgerId));
    const current = await db
      .select({ balance: creditBalance.balance })
      .from(creditBalance)
      .where(eq(creditBalance.userId, userId))
      .limit(1);
    return {
      ok: false,
      reason: "insufficient_credits",
      balance: current[0]?.balance ?? 0,
      cost,
    };
  }

  return { ok: true, newBalance: result[0].balance, ledgerId };
}

// Refund a previous debit. Used when an upstream call fails after we
// already debited (Copyleaks down, AI Gateway 5xx, etc.). Idempotent on
// `refId` — a retry won't double-refund.
export async function refund(
  db: Db,
  userId: string,
  amount: number,
  refundOf: string
): Promise<void> {
  const existing = await db
    .select({ id: creditLedger.id })
    .from(creditLedger)
    .where(
      and(
        eq(creditLedger.userId, userId),
        eq(creditLedger.reason, "refund"),
        eq(creditLedger.refId, refundOf)
      )
    )
    .limit(1);
  if (existing[0]) {
    return;
  }
  await db.insert(creditLedger).values({
    id: crypto.randomUUID(),
    userId,
    delta: amount,
    reason: "refund",
    refId: refundOf,
  });
  await db
    .update(creditBalance)
    .set({
      balance: sql`${creditBalance.balance} + ${amount}`,
      lifetimeUsed: sql`MAX(0, ${creditBalance.lifetimeUsed} - ${amount})`,
      updatedAt: sql`(unixepoch())`,
    })
    .where(eq(creditBalance.userId, userId));
}

// One-shot credit (Polar webhook → topup). Idempotent on refId so a
// retried webhook delivery can't double-credit.
export async function credit(
  db: Db,
  userId: string,
  amount: number,
  reason: "topup" | "adjust",
  refId: string,
  metadata?: Record<string, unknown>
): Promise<void> {
  const existing = await db
    .select({ id: creditLedger.id })
    .from(creditLedger)
    .where(and(eq(creditLedger.userId, userId), eq(creditLedger.refId, refId)))
    .limit(1);
  if (existing[0]) {
    return;
  }
  await getOrInitBalance(db, userId);
  await db.insert(creditLedger).values({
    id: crypto.randomUUID(),
    userId,
    delta: amount,
    reason,
    refId,
    metadata,
  });
  await db
    .update(creditBalance)
    .set({
      balance: sql`${creditBalance.balance} + ${amount}`,
      lifetimePurchased:
        reason === "topup"
          ? sql`${creditBalance.lifetimePurchased} + ${amount}`
          : creditBalance.lifetimePurchased,
      updatedAt: sql`(unixepoch())`,
    })
    .where(eq(creditBalance.userId, userId));
}

// Hourly rate limit for humanize. Counts every job (queued/processing/
// done/failed) so a spammed-failure script still trips it.
export async function isWithinHourlyHumanizeCap(
  db: Db,
  userId: string
): Promise<boolean> {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const recent = await db
    .select({ n: sql<number>`count(*)` })
    .from(humanizeJobs)
    .where(
      and(
        eq(humanizeJobs.userId, userId),
        gte(humanizeJobs.createdAt, oneHourAgo)
      )
    );
  return (recent[0]?.n ?? 0) < HUMANIZE_HOURLY_JOB_CAP;
}

// Flat ledger read for the /v1/me/usage endpoint. Returns the most recent
// `limit` entries; the UI can group by day client-side.
export async function recentLedger(
  db: Db,
  userId: string,
  limit = 100
): Promise<
  Array<{
    id: string;
    delta: number;
    reason: string;
    refId: string | null;
    createdAt: number | Date;
  }>
> {
  const rows = await db
    .select({
      id: creditLedger.id,
      delta: creditLedger.delta,
      reason: creditLedger.reason,
      refId: creditLedger.refId,
      createdAt: creditLedger.createdAt,
    })
    .from(creditLedger)
    .where(eq(creditLedger.userId, userId))
    .orderBy(desc(creditLedger.createdAt))
    .limit(limit);
  return rows;
}
