# Humanize — Pro tier feature spec

**Status**: in-flight (code committed, not yet live)
**Date**: 2026-04-26

## Goal

A paid Pro feature that runs arbitrary text through Copyleaks's Humanize API and returns a humanized variant. Lives at `/humanize` as a standalone route, decoupled from the stylize / Playground flow.

## Decisions

| | |
|---|---|
| **Scope** | Humanize integration only. Billing infrastructure is out of scope; we gate on the existing `userPreferences.plan === "paid"` column. Someone (manual DB flip / future spec) is expected to set the plan. |
| **UX placement** | Separate `/humanize` route. Not coupled to stylize. Pro-only nav link. |
| **Wait model** | Async. Worker submits to Copyleaks and returns a `jobId`. Frontend polls `GET /v1/humanize/:id` every 2s. Job state lives in D1 (`humanize_jobs`) so it survives reloads. |
| **Quota** | Both: 200,000 chars / calendar UTC month, 30 jobs / rolling hour, 25,000 char per-input cap. Enforced in `lib/humanize-quota.ts`. |
| **Output** | Single humanized variant. (Copyleaks default; multi-variant is a future enhancement.) |
| **History** | Last 20 jobs surfaced under the form on `/humanize`. Click to expand input/output. |
| **No background work** | Forward-poll Copyleaks on each user-driven `GET`. Stale `processing` jobs get a sweep when the user loads the list. No cron, no Durable Object. |

## Architecture

```
browser            worker                          Copyleaks
   │                 │                                  │
   │ POST /v1/humanize ───────────────────────────────▶ │
   │                 │  • createAuth().getSession()      │
   │                 │  • plan === "paid"?               │
   │                 │  • inputChars ≤ 25k?              │
   │                 │  • hourly + monthly quota OK?     │
   │                 │  • insert humanize_jobs (queued)  │
   │                 │  • login → access_token (KV cache)│
   │                 │  • POST .../check ───────────────▶│
   │                 │ ◀── { scanId } ──────────────────│
   │                 │  • update row: scanId, processing │
   │ ◀── { jobId } ──│                                  │
   │                 │                                  │
   │ GET /v1/humanize/:id (every 2s while processing)  │
   │ ────────────▶   │                                  │
   │                 │  if processing:                  │
   │                 │  • GET .../result ──────────────▶│
   │                 │  ◀── { in-progress | done | err }│
   │                 │  on done: write output,          │
   │                 │  bump humanize_usage counters    │
   │ ◀── { status, output? } ──                         │
```

## Files

### Backend

- `src/db/schema.ts` — adds `humanizeJobs` and `humanizeUsage` tables (migration `drizzle/0001_omniscient_gamora.sql`)
- `src/lib/copyleaks.ts` — thin Copyleaks wrapper: `login`, `submit`, `result`, `getCachedToken` (KV-backed, ~23h TTL)
- `src/lib/humanize-quota.ts` — `isPaid`, `checkQuota`, `recordUsage`. Numbers live in a `QUOTA` const.
- `src/routes/humanize.ts` — `POST /`, `GET /:id`, `GET /` (list + sweep)
- `src/index.ts` — adds `COPYLEAKS_EMAIL`, `COPYLEAKS_API_KEY` to `AppBindings`; mounts router at `/v1/humanize`

### Frontend

- `client/lib/api.ts` — `api.humanizeSubmit`, `api.humanizeGet`, `api.humanizeList`; `HumanizeJob` types
- `client/routes/humanize.tsx` — page with input form, output pane, recent-jobs list. Uses TanStack Query's `refetchInterval` for the 2s poll.
- `client/components/nav.tsx` — adds Humanize link

## Quota behavior

- **Hourly**: `count(*) FROM humanize_jobs WHERE userId=? AND createdAt >= now() - 1h` ≥ 30 → 429.
- **Monthly**: `humanize_usage.chars` for `monthKey = YYYY-MM (UTC)` + `inputChars` > 200,000 → 429. Counter only bumps on `status=done`.
- **Failed jobs** still count toward hourly (anti-abuse), do not count toward monthly chars.
- **Not paid**: 402 with "Humanize is a Pro feature."

## Error semantics

- 401 → not signed in
- 402 → signed in, not paid
- 404 → job not found, or other user's job
- 429 → quota / rate limit
- 502 → Copyleaks login or submit failed
- 503 → Copyleaks secrets not provisioned

## Open prereqs (not blockers for code review, blockers for live use)

1. **Provision secrets**: `wrangler secret put COPYLEAKS_EMAIL`, `wrangler secret put COPYLEAKS_API_KEY`.
2. **Apply migration**: `npm run db:migrate:remote` to add `humanize_jobs` + `humanize_usage` tables to prod D1.
3. **Verify Copyleaks endpoint paths**. The `/v3/account/login/api-key` path is well-known. The submit path I'm using (`/v1/writer-detector/{scanId}/check`) and result path (`/v1/writer-detector/{scanId}/result`) reflect what I knew of the Humanize API; if the first live call returns 404 swap them per current Copyleaks docs.
4. **A way to flip a user's plan to "paid"**. Not built in v1. SQL: `INSERT OR REPLACE INTO user_preferences (user_id, plan) VALUES ('<user-id>', 'paid');`. A real billing flow is its own spec.

## Out of scope for v1

- Stripe / Polar / any payments
- Multi-variant outputs
- Webhook-driven realtime push (frontend polling is sufficient at this scale)
- Auto-applied humanize after stylize (kept as a deliberate UX choice — `/humanize` is decoupled)
