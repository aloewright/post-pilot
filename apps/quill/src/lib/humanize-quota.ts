import { and, eq, gte, sql } from "drizzle-orm";
import type { DrizzleD1Database } from "drizzle-orm/d1";
import { humanizeJobs, humanizeUsage, userPreferences } from "../db/schema";

// Quota policy (locked-in v1):
//   - hourly:  30 jobs / rolling hour / user
//   - monthly: 200,000 chars / calendar month (UTC) / user
//   - input:   25,000 chars / submission
// Numbers live here so they're easy to bump without grepping routes.
export const QUOTA = {
  HOURLY_JOBS: 30,
  MONTHLY_CHARS: 200_000,
  PER_INPUT_CHAR_CAP: 25_000,
} as const;

export type QuotaCheckResult =
  | { ok: true }
  | { ok: false; reason: "not_paid" | "input_too_long" | "hourly_limit" | "monthly_limit"; message: string };

export function monthKey(d = new Date()): string {
  // YYYY-MM in UTC. Calendar-month rollover with no cron — querying for the
  // current month just hits a different row.
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  return `${y}-${m}`;
}

export async function isPaid(
  db: DrizzleD1Database<Record<string, unknown>>,
  userId: string
): Promise<boolean> {
  const rows = await db
    .select({ plan: userPreferences.plan })
    .from(userPreferences)
    .where(eq(userPreferences.userId, userId))
    .limit(1);
  return rows[0]?.plan === "paid";
}

export async function checkQuota(
  db: DrizzleD1Database<Record<string, unknown>>,
  userId: string,
  inputChars: number
): Promise<QuotaCheckResult> {
  if (!(await isPaid(db, userId))) {
    return {
      ok: false,
      reason: "not_paid",
      message: "Humanize is a Pro feature. Upgrade to use it.",
    };
  }
  if (inputChars > QUOTA.PER_INPUT_CHAR_CAP) {
    return {
      ok: false,
      reason: "input_too_long",
      message: `Input exceeds ${QUOTA.PER_INPUT_CHAR_CAP.toLocaleString()} characters.`,
    };
  }

  // Hourly: count jobs in the last 60 minutes (any status — failed jobs
  // still count toward abuse prevention).
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const recent = await db
    .select({ n: sql<number>`count(*)` })
    .from(humanizeJobs)
    .where(
      and(eq(humanizeJobs.userId, userId), gte(humanizeJobs.createdAt, oneHourAgo))
    );
  if ((recent[0]?.n ?? 0) >= QUOTA.HOURLY_JOBS) {
    return {
      ok: false,
      reason: "hourly_limit",
      message: `Rate limit: ${QUOTA.HOURLY_JOBS} jobs/hour. Try again shortly.`,
    };
  }

  // Monthly: incrementing this row happens after submission; check current.
  const mk = monthKey();
  const usage = await db
    .select({ chars: humanizeUsage.chars })
    .from(humanizeUsage)
    .where(and(eq(humanizeUsage.userId, userId), eq(humanizeUsage.monthKey, mk)))
    .limit(1);
  const used = usage[0]?.chars ?? 0;
  if (used + inputChars > QUOTA.MONTHLY_CHARS) {
    return {
      ok: false,
      reason: "monthly_limit",
      message: `Monthly limit: ${QUOTA.MONTHLY_CHARS.toLocaleString()} characters. Resets on the 1st (UTC).`,
    };
  }

  return { ok: true };
}

// Bump usage counters AFTER a job completes successfully. Failed jobs don't
// count toward the monthly char cap (only the hourly job count, via the
// jobs row that exists regardless).
export async function recordUsage(
  db: DrizzleD1Database<Record<string, unknown>>,
  userId: string,
  inputChars: number
): Promise<void> {
  const mk = monthKey();
  // Upsert: if no row, create with these values; if row exists, add.
  await db
    .insert(humanizeUsage)
    .values({ userId, monthKey: mk, chars: inputChars, jobs: 1 })
    .onConflictDoUpdate({
      target: [humanizeUsage.userId, humanizeUsage.monthKey],
      set: {
        chars: sql`${humanizeUsage.chars} + ${inputChars}`,
        jobs: sql`${humanizeUsage.jobs} + 1`,
        updatedAt: sql`(unixepoch())`,
      },
    });
}
