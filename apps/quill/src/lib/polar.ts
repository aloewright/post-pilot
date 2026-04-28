// Minimal Polar API client. We only need a handful of endpoints (checkout
// create, customer-session create, webhook verify) so the official SDK is
// overkill for a Worker; raw fetch keeps the bundle small.

const POLAR_API = "https://api.polar.sh";

type PolarConfig = {
  accessToken: string;
};

async function polarFetch<T>(
  cfg: PolarConfig,
  path: string,
  init?: RequestInit
): Promise<T> {
  const r = await fetch(`${POLAR_API}${path}`, {
    ...init,
    headers: {
      authorization: `Bearer ${cfg.accessToken}`,
      "content-type": "application/json",
      accept: "application/json",
      ...(init?.headers ?? {}),
    },
  });
  if (!r.ok) {
    const body = await r.text();
    throw new Error(`Polar ${r.status}: ${body.slice(0, 400)}`);
  }
  return (await r.json()) as T;
}

export type CheckoutResponse = {
  id: string;
  url: string;
  client_secret: string;
  customer_id: string | null;
  external_customer_id: string | null;
  product_id: string;
};

// Create a hosted checkout. external_customer_id pins this checkout (and
// any future orders) to our internal user id, which the webhook reads
// back on order.paid to credit the right account.
export async function createCheckout(
  cfg: PolarConfig,
  args: {
    productId: string;
    externalCustomerId: string;
    customerEmail?: string;
    customerName?: string;
    successUrl: string;
  }
): Promise<CheckoutResponse> {
  return polarFetch<CheckoutResponse>(cfg, "/v1/checkouts/", {
    method: "POST",
    body: JSON.stringify({
      products: [args.productId],
      external_customer_id: args.externalCustomerId,
      customer_email: args.customerEmail,
      customer_name: args.customerName,
      success_url: args.successUrl,
    }),
  });
}

export type CustomerSessionResponse = {
  id: string;
  token: string;
  customer_portal_url: string;
  customer_id: string;
  expires_at: string;
};

// One-time customer portal token. The portal lets the user view receipts,
// download invoices, and manage their payment method. We pass external id
// so Polar can resolve to the customer record we tagged at checkout.
export async function createCustomerSession(
  cfg: PolarConfig,
  externalCustomerId: string
): Promise<CustomerSessionResponse> {
  return polarFetch<CustomerSessionResponse>(cfg, "/v1/customer-sessions/", {
    method: "POST",
    body: JSON.stringify({ external_customer_id: externalCustomerId }),
  });
}

// Push a usage event into the meter we created (`quill.credits.consumed`).
// Polar aggregates these for analytics; doesn't affect billing because our
// product is a one-time credit pack, not a metered subscription.
// Best-effort — failures are logged, not thrown, since billing is local.
export async function ingestUsageEvent(
  cfg: PolarConfig,
  args: {
    externalCustomerId: string;
    credits: number;
    kind: "apply" | "humanize";
    refId: string;
  }
): Promise<void> {
  try {
    await polarFetch(cfg, "/v1/events/ingest", {
      method: "POST",
      body: JSON.stringify({
        events: [
          {
            name: "quill.credits.consumed",
            external_customer_id: args.externalCustomerId,
            metadata: {
              credits: args.credits,
              kind: args.kind,
              ref_id: args.refId,
            },
          },
        ],
      }),
    });
  } catch (e) {
    console.warn(
      JSON.stringify({
        msg: "polar_event_ingest_failed",
        error: (e as Error).message?.slice(0, 200),
      })
    );
  }
}

// Standard Webhooks signature verification. Polar emits headers:
//   webhook-id, webhook-timestamp, webhook-signature
// where webhook-signature is `v1,<base64-hmac-sha256>`. The signed payload
// is `<id>.<timestamp>.<raw-body>` and the secret is base64-decoded.
//
// Reject if: signature header missing, base64 decode fails, no v1 sig
// matches, or timestamp is older than 5 minutes (replay window).
export async function verifyWebhook(
  secret: string,
  headers: Headers,
  rawBody: string
): Promise<boolean> {
  const id = headers.get("webhook-id");
  const ts = headers.get("webhook-timestamp");
  const sigHeader = headers.get("webhook-signature");
  if (!(id && ts && sigHeader)) {
    return false;
  }

  const tsNum = Number.parseInt(ts, 10);
  if (!Number.isFinite(tsNum)) {
    return false;
  }
  const now = Math.floor(Date.now() / 1000);
  if (Math.abs(now - tsNum) > 60 * 5) {
    return false;
  }

  // The Standard Webhooks spec says the secret is delivered base64-encoded
  // and prefixed with `whsec_`. Tolerate both forms — strip prefix if
  // present and try a base64 decode, falling back to raw bytes.
  const secretRaw = secret.startsWith("whsec_") ? secret.slice(6) : secret;
  let keyBytes: Uint8Array;
  try {
    const bin = atob(secretRaw);
    keyBytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
      keyBytes[i] = bin.charCodeAt(i);
    }
  } catch {
    keyBytes = new TextEncoder().encode(secretRaw);
  }

  const key = await crypto.subtle.importKey(
    "raw",
    keyBytes as BufferSource,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const toSign = new TextEncoder().encode(`${id}.${ts}.${rawBody}`);
  const sigBuf = await crypto.subtle.sign(
    "HMAC",
    key,
    toSign as BufferSource
  );
  const expected = btoa(String.fromCharCode(...new Uint8Array(sigBuf)));

  // Header carries one or more `v1,<sig>` pairs (space-separated). Match
  // any v1 entry — constant-time compare for each.
  const candidates = sigHeader.split(" ");
  for (const c of candidates) {
    const [version, sig] = c.split(",");
    if (version === "v1" && sig && constantTimeEqual(sig, expected)) {
      return true;
    }
  }
  return false;
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}
