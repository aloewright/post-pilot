// Copyleaks Humanize API wrapper.
//
// Three calls in the flow:
//   1) login(email, key)   → access_token (cache in KV; ~24h validity)
//   2) submit(token, text) → { scanId }
//   3) result(token, scanId) → { status, output? }
//
// Endpoint paths reflect Copyleaks's published Humanize API as of writing —
// verify against docs.copyleaks.com if a call returns 404. The auth login URL
// (id.copyleaks.com) is stable; the api.copyleaks.com base is shared across
// AI Detector / Humanize / Plagiarism products.

const ID_BASE = "https://id.copyleaks.com";
const API_BASE = "https://api.copyleaks.com";

export type CopyleaksConfig = {
  email: string;
  apiKey: string;
};

export type SubmitResult =
  | { ok: true; scanId: string }
  | { ok: false; error: string };

export type PollResult =
  | { status: "processing" }
  | { status: "done"; output: string }
  | { status: "failed"; error: string };

export async function login(cfg: CopyleaksConfig): Promise<string> {
  const r = await fetch(`${ID_BASE}/v3/account/login/api-key`, {
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

export async function submit(
  token: string,
  text: string
): Promise<SubmitResult> {
  const scanId = crypto.randomUUID();
  const r = await fetch(`${API_BASE}/v1/writer-detector/${scanId}/check`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      text,
      // Humanize-specific options — leave defaults so Copyleaks picks the
      // current "best" preset. Tighten later if quality drifts.
      sandbox: false,
    }),
  });
  if (!r.ok) {
    return {
      ok: false,
      error: `copyleaks submit ${r.status}: ${(await r.text()).slice(0, 200)}`,
    };
  }
  return { ok: true, scanId };
}

export async function result(
  token: string,
  scanId: string
): Promise<PollResult> {
  const r = await fetch(`${API_BASE}/v1/writer-detector/${scanId}/result`, {
    headers: { authorization: `Bearer ${token}` },
  });
  if (r.status === 404 || r.status === 202) {
    // 404 here = scan exists but result not ready yet (Copyleaks's
    // convention for in-progress async jobs).
    return { status: "processing" };
  }
  if (!r.ok) {
    return {
      status: "failed",
      error: `copyleaks result ${r.status}: ${(await r.text()).slice(0, 200)}`,
    };
  }
  const data = (await r.json()) as {
    output?: { humanized?: string; text?: string };
    error?: string;
  };
  const output = data.output?.humanized ?? data.output?.text;
  if (!output) {
    return {
      status: "failed",
      error: data.error ?? "copyleaks result: empty output",
    };
  }
  return { status: "done", output };
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
