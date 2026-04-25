#!/usr/bin/env bash
# Quill provisioning bootstrap.
#
# What this does, in order:
#   1. Verifies wrangler + doppler CLIs are present and authenticated
#   2. Creates a D1 database, KV namespace, and R2 bucket on Cloudflare
#   3. Patches wrangler.jsonc with the resource IDs (in-place)
#   4. Generates a BETTER_AUTH_SECRET and pushes it to Doppler
#   5. Pulls Doppler-managed secrets into Cloudflare via `wrangler secret put`
#   6. Runs the initial Drizzle migration against D1
#
# Run from apps/quill/. Idempotent: safe to re-run.
#
# Auth, in order of preference:
#   1. `wrangler login` (interactive OAuth) — simplest for solo dev
#   2. CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID env vars — for CI / non-interactive
#
# Doppler is optional. If `doppler me` succeeds the secret-mirroring step
# runs; otherwise it is skipped and you can run `wrangler secret put ...`
# yourself later.
#
# Usage:
#   ./scripts/bootstrap.sh                    # uses wrangler login + (optional) doppler
#   doppler run -p quill -c dev -- ./scripts/bootstrap.sh   # if everything in Doppler

set -euo pipefail

cd "$(dirname "$0")/.."

red() { printf '\033[31m%s\033[0m\n' "$*" >&2; }
green() { printf '\033[32m%s\033[0m\n' "$*"; }
dim() { printf '\033[2m%s\033[0m\n' "$*"; }

require() {
  command -v "$1" >/dev/null 2>&1 || {
    red "missing required command: $1"
    exit 1
  }
}

require wrangler
require jq
require node
# doppler is optional — only required for the secret-mirroring step

green "→ Verifying Cloudflare account…"
if ! wrangler whoami >/dev/null 2>&1; then
  red "wrangler is not authenticated."
  red "Either run \`wrangler login\` (interactive OAuth),"
  red "or set CLOUDFLARE_API_TOKEN + CLOUDFLARE_ACCOUNT_ID in your environment."
  exit 1
fi

# Doppler is optional for the bootstrap itself: if absent, secret mirroring is skipped.
DOPPLER_AVAILABLE=0
if command -v doppler >/dev/null 2>&1 && doppler me >/dev/null 2>&1; then
  DOPPLER_AVAILABLE=1
else
  dim "doppler not authenticated/installed — secret-mirroring step will be skipped."
fi

# ---------- D1 ----------
green "→ Provisioning D1 database 'quill'…"
DB_LIST_JSON=$(wrangler d1 list --json)
DB_ID=$(jq -r '.[] | select(.name=="quill") | .uuid' <<<"$DB_LIST_JSON")
if [[ -z "$DB_ID" ]]; then
  CREATE_OUT=$(wrangler d1 create quill --json)
  DB_ID=$(jq -r '.uuid // .database_id // .id' <<<"$CREATE_OUT")
  green "  created: $DB_ID"
else
  dim "  already exists: $DB_ID"
fi

# ---------- KV ----------
green "→ Provisioning KV namespace 'QUILL_KV'…"
KV_LIST_JSON=$(wrangler kv namespace list)
KV_ID=$(jq -r '.[] | select(.title | endswith("QUILL_KV")) | .id' <<<"$KV_LIST_JSON")
if [[ -z "$KV_ID" ]]; then
  CREATE_OUT=$(wrangler kv namespace create QUILL_KV)
  KV_ID=$(grep -oE '"id":[[:space:]]*"[a-f0-9]+"' <<<"$CREATE_OUT" \
    | head -n1 | sed -E 's/.*"([a-f0-9]+)"/\1/')
  green "  created: $KV_ID"
else
  dim "  already exists: $KV_ID"
fi

# ---------- R2 ----------
green "→ Provisioning R2 bucket 'quill'…"
if wrangler r2 bucket list --json 2>/dev/null | jq -e '.[] | select(.name=="quill")' >/dev/null; then
  dim "  already exists: quill"
else
  wrangler r2 bucket create quill >/dev/null
  green "  created: quill"
fi

# ---------- Patch wrangler.jsonc ----------
green "→ Patching wrangler.jsonc with resource ids…"
node scripts/patch-wrangler.mjs "$DB_ID" "$KV_ID"
green "  done"

# ---------- Secrets via Doppler → Cloudflare ----------
if [[ "$DOPPLER_AVAILABLE" == "1" ]]; then
  green "→ Pushing secrets to Doppler…"
  if ! doppler secrets get BETTER_AUTH_SECRET --plain >/dev/null 2>&1; then
    AUTH_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))")
    doppler secrets set BETTER_AUTH_SECRET="$AUTH_SECRET" >/dev/null
    green "  set BETTER_AUTH_SECRET (generated)"
  else
    dim "  BETTER_AUTH_SECRET already in Doppler"
  fi

  green "→ Mirroring Doppler secrets into Cloudflare…"
  for KEY in BETTER_AUTH_SECRET AI_GATEWAY_TOKEN; do
    if VAL=$(doppler secrets get "$KEY" --plain 2>/dev/null); then
      if [[ -n "$VAL" ]]; then
        printf '%s' "$VAL" | wrangler secret put "$KEY" >/dev/null
        green "  pushed $KEY → wrangler"
      fi
    else
      dim "  skipped $KEY (not in Doppler yet)"
    fi
  done
else
  dim "→ Skipping secrets mirroring (doppler not available)."
  dim "  Set BETTER_AUTH_SECRET and AI_GATEWAY_TOKEN later via:"
  dim "    wrangler secret put BETTER_AUTH_SECRET"
  dim "    wrangler secret put AI_GATEWAY_TOKEN"
fi

# ---------- D1 migrations ----------
green "→ Generating Drizzle migrations…"
pnpm db:generate >/dev/null
green "→ Applying D1 migrations (remote)…"
pnpm db:migrate:remote || red "  D1 migrate failed — re-run after wrangler.jsonc bindings are uncommented"

green "✓ Bootstrap complete."
echo
dim "Next steps:"
dim "  1) Edit wrangler.jsonc to uncomment d1_databases / kv_namespaces / r2_buckets sections (the ids are filled in)."
dim "  2) Run: pnpm cf-typegen   # regenerate worker-configuration.d.ts"
dim "  3) Deploy: pnpm cf-deploy"
