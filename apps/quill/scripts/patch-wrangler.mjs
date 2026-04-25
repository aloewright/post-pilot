#!/usr/bin/env node
// Patch wrangler.jsonc with the D1 database id and KV namespace id, in place.
// Called from scripts/bootstrap.sh — keeps shell logic minimal and lets us
// edit JSONC reliably without a YAML/JSON parser dance.
//
// Usage: node scripts/patch-wrangler.mjs <DB_ID> <KV_ID>

import { readFileSync, writeFileSync } from "node:fs";

const [, , dbId, kvId] = process.argv;
if (!dbId || !kvId) {
  console.error("usage: patch-wrangler.mjs <DB_ID> <KV_ID>");
  process.exit(1);
}

const path = "wrangler.jsonc";
let src = readFileSync(path, "utf8");

// Uncomment the d1_databases block + fill in the id.
src = src.replace(
  /\/\/\s*"d1_databases":\s*\[[\s\S]*?\],?/,
  `"d1_databases": [\n    {\n      "binding": "DB",\n      "database_name": "postpilot",\n      "database_id": "${dbId}",\n      "migrations_dir": "drizzle"\n    }\n  ],`
);

// Uncomment the kv_namespaces block + fill in the id.
src = src.replace(
  /\/\/\s*"kv_namespaces":\s*\[[\s\S]*?\],?/,
  `"kv_namespaces": [\n    { "binding": "KV", "id": "${kvId}" }\n  ],`
);

// Uncomment r2_buckets — bucket name is canonical, no id required.
src = src.replace(
  /\/\/\s*"r2_buckets":\s*\[[\s\S]*?\],?/,
  `"r2_buckets": [\n    { "binding": "R2", "bucket_name": "postpilot" }\n  ],`
);

writeFileSync(path, src);
console.log(
  `patched ${path} with DB_ID=${dbId.slice(0, 8)}… KV_ID=${kvId.slice(0, 8)}…`
);
