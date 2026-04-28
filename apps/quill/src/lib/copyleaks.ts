// Copyleaks AI-detection wrapper.
//
// Two calls in the active flow:
//   1) login(email, key)        → access_token (cache in KV; ~24h validity)
//   2) scanForReport(token, t)  → { aiScore, segments, raw }
//
// The login URL (id.copyleaks.com) is stable; the api.copyleaks.com base is
// shared across AI Detector / Humanize / Plagiarism products. If a call
// returns 404, verify against docs.copyleaks.com — endpoint paths drift.

const ID_BASE = "https://id.copyleaks.com";
const API_BASE = "https://api.copyleaks.com";

export type CopyleaksConfig = {
  email: string;
  apiKey: string;
};

export type ScanReport = {
  // Aggregate AI probability, 0..1 (Copyleaks's overall score for the doc).
  aiScore: number;
  // Per-segment breakdown (sentences or larger spans, Copyleaks decides).
  segments: Array<{ text: string; aiScore: number }>;
  // The raw response body, for storage/debug. Useful while we're still
  // pinning down the response shape across writer-detector revisions.
  raw: string;
};

export async function login(cfg: CopyleaksConfig): Promise<string> {
  const r = await fetch(`${ID_BASE}/v3/account/login/api`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email: cfg.email, key: cfg.apiKey }),
  });
  if (!r.ok) {
    const txt = await r.text();
    throw new Error(`copyleaks login ${r.status}: ${txt.slice(0, 200)}`);
  }
  const data = (await r.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("copyleaks login: no access_token in response");
  }
  return data.access_token;
}

// Single-shot AI-detection scan. Returns the aggregate score plus a flat
// list of segment scores. The writer-detector API has been moving — the
// parser below tries the most likely shapes in order, and we always log
// the raw body (truncated) so we can adjust if a tenant returns a new shape.
export async function scanForReport(
  token: string,
  text: string
): Promise<ScanReport> {
  const scanId = crypto.randomUUID();
  const r = await fetch(`${API_BASE}/v2/writer-detector/${scanId}/check`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({ text, sandbox: false }),
    signal: AbortSignal.timeout(8_000),
  });
  const rawBody = await r.text();

  // Always log — we don't know the canonical response shape yet, and the
  // first prod call is what tells us. Truncated so we don't blow up logs.
  console.log(
    JSON.stringify({
      msg: "copyleaks_scan_response",
      scanId,
      status: r.status,
      body: rawBody.slice(0, 800),
    })
  );

  if (!r.ok) {
    throw new Error(
      `copyleaks scan ${r.status}: ${rawBody.slice(0, 200)}`
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(rawBody);
  } catch {
    parsed = {};
  }

  const aiScore = extractAiScore(parsed);
  const segments = extractSegments(parsed);

  return { aiScore, segments, raw: rawBody };
}

// Try aggregate-score fields in order of likelihood. Each is normalized to
// 0..1 so callers don't have to care which shape produced it. Returns 0 if
// nothing matches — better to under-report than throw.
function extractAiScore(parsed: unknown): number {
  if (!parsed || typeof parsed !== "object") return 0;
  const p = parsed as Record<string, unknown>;

  const results = p.results as Record<string, unknown> | undefined;
  const resultsScore = results?.score as Record<string, unknown> | undefined;
  const aggregated = resultsScore?.aggregatedScore;
  if (typeof aggregated === "number") return clamp01(aggregated);

  const summary = p.summary as Record<string, unknown> | undefined;
  if (typeof summary?.score === "number") return clamp01(summary.score);

  if (typeof p.aiScore === "number") return clamp01(p.aiScore);
  if (typeof p.score === "number") return clamp01(p.score);

  return 0;
}

// Each path tries a different observed Copyleaks shape; first hit wins.
// Empty array means we couldn't recognize any segment list — caller should
// treat that as "no per-segment data" rather than an error.
function extractSegments(
  parsed: unknown
): Array<{ text: string; aiScore: number }> {
  if (!parsed || typeof parsed !== "object") return [];
  const p = parsed as Record<string, unknown>;

  const results = p.results as Record<string, unknown> | undefined;
  const directSegs = results?.segments;
  if (Array.isArray(directSegs)) return mapSegments(directSegs);

  const scannedDoc = results?.scannedDocument as
    | Record<string, unknown>
    | undefined;
  if (Array.isArray(scannedDoc?.segments)) {
    return mapSegments(scannedDoc.segments);
  }

  if (Array.isArray(p.segments)) return mapSegments(p.segments);

  return [];
}

function mapSegments(
  raw: unknown[]
): Array<{ text: string; aiScore: number }> {
  const out: Array<{ text: string; aiScore: number }> = [];
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const seg = item as Record<string, unknown>;
    const text = typeof seg.text === "string" ? seg.text : "";
    if (!text) continue;
    // Accept either `aiScore` or `score`; some tenants emit one or the other.
    const rawScore =
      typeof seg.aiScore === "number"
        ? seg.aiScore
        : typeof seg.score === "number"
          ? seg.score
          : 0;
    out.push({ text, aiScore: clamp01(rawScore) });
  }
  return out;
}

function clamp01(n: number): number {
  if (!Number.isFinite(n)) return 0;
  if (n < 0) return 0;
  if (n > 1) return 1;
  return n;
}

// Token cache. Copyleaks tokens last ~24h; cache in KV so we don't hit the
// login endpoint on every request. Key is per-account (just one for us).
const TOKEN_KEY = "copyleaks:access_token:v1";
const TOKEN_TTL_SECONDS = 60 * 60 * 23; // refresh an hour before expiry

export async function getCachedToken(
  kv: KVNamespace,
  cfg: CopyleaksConfig
): Promise<string> {
  const cached = await kv.get(TOKEN_KEY);
  if (cached) {
    return cached;
  }
  const token = await login(cfg);
  await kv.put(TOKEN_KEY, token, { expirationTtl: TOKEN_TTL_SECONDS });
  return token;
}

export async function invalidateCachedToken(kv: KVNamespace): Promise<void> {
  await kv.delete(TOKEN_KEY);
}
