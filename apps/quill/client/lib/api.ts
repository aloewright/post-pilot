import type { ScopeId } from "../../src/lib/scopes";
import type { Guide, UseCasePreset } from "../../src/lib/types";

export type { ScopeId } from "../../src/lib/scopes";
export {
  ALL_SCOPES,
  DEFAULT_SCOPES,
  READ_ONLY_SCOPES,
} from "../../src/lib/scopes";

// All API calls hit the Worker on the same origin. The Vite plugin proxies
// /v1/* to the Worker in dev; in prod it's the same Worker serving /v1 +
// the SPA assets.

export type GuideListItem = Pick<
  Guide,
  | "slug"
  | "author"
  | "era"
  | "eras"
  | "kicker"
  | "standfirst"
  | "voice_axes"
  | "use_cases"
  | "copyright_posture"
  | "is_official"
  | "curator"
  | "updated_at"
> & {
  fidelity: NonNullable<Guide["fidelity"]>;
};

export type GuideListResponse = {
  count: number;
  total: number;
  matched: number;
  offset: number;
  limit: number;
  nextOffset: number | null;
  items: GuideListItem[];
};

export type GuideSort = "author" | "era" | "recent" | "fidelity";

export type JudgeResultClient =
  | {
      status: "ok";
      fidelity: number;
      perCriterion: Array<{ id: string; score: number; weight: number }>;
      notes: string[];
    }
  | { status: "skipped"; reason: string }
  | { status: "error"; reason: string };

export type ApplyResponse = {
  guide: string;
  preset: string | null;
  model: string;
  output: string;
  snapshot: Record<string, number>;
  deterministic_score: number;
  deterministic_details: Array<{
    metric: string;
    op: string;
    target: number;
    actual: number;
    pass: boolean;
    weight: number;
  }>;
  judge: JudgeResultClient;
  requestId: string;
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const r = await fetch(path, {
    ...init,
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      ...(init?.headers ?? {}),
    },
  });
  if (!r.ok) {
    let message = `${r.status} ${r.statusText}`;
    try {
      const body = (await r.json()) as { error?: string };
      if (body?.error) {
        message = body.error;
      }
    } catch {
      // ignore JSON parse failure on error body
    }
    throw new Error(message);
  }
  return (await r.json()) as T;
}

export type HumanizeJobStatus = "queued" | "processing" | "done" | "failed";

export type HumanizeJobReport = {
  localScore: number | null;
  copyleaksStatus: "ok" | "skipped" | "error";
  copyleaksScore: number | null;
  flaggedSegments: Array<{ text: string; aiScore: number }>;
};

export type HumanizeJob = {
  id: string;
  status: HumanizeJobStatus;
  inputChars: number;
  input: string;
  output: string | null;
  error: string | null;
  createdAt: string;
  completedAt: string | null;
} & Partial<HumanizeJobReport>;

export type HumanizeSubmitResponse = {
  jobId: string;
  status: HumanizeJobStatus;
  creditsCharged: number;
  balance: number;
} & HumanizeJobReport;

export type CreditCosts = {
  STYLIZE_PER_CHAR: number;
  HUMANIZE_PER_CHAR: number;
};

export type MeResponse = {
  authenticated: boolean;
  via?: "session" | "api_key";
  balance: number | null;
  lifetimeUsed: number | null;
  lifetimePurchased: number | null;
  costs: CreditCosts;
};

export type UsageItem = {
  id: string;
  delta: number;
  reason: "welcome" | "topup" | "apply" | "humanize" | "refund" | "adjust";
  refId: string | null;
  createdAt: string | number;
};

export type ApiKeyRateLimit = { windowMs: number; max: number };

export type ApiKeyItem = {
  id: string;
  name: string;
  prefix: string;
  createdAt: string | number;
  lastUsedAt: string | number | null;
  expiresAt?: string | null;
  scopes?: ScopeId[];
  rateLimit?: ApiKeyRateLimit | null;
};

export type ApiKeyCreated = {
  id: string;
  name: string;
  prefix: string;
  plaintext: string;
  expiresAt?: string | null;
  scopes?: ScopeId[];
  rateLimit?: ApiKeyRateLimit | null;
};

export const api = {
  listGuides: (
    params: {
      eras?: string[];
      useCases?: string[];
      voiceAxes?: string[];
      query?: string;
      sort?: GuideSort;
      limit?: number;
      offset?: number;
    } = {}
  ) => {
    const sp = new URLSearchParams();
    for (const e of params.eras ?? []) {
      sp.append("era", e);
    }
    for (const u of params.useCases ?? []) {
      sp.append("useCase", u);
    }
    for (const v of params.voiceAxes ?? []) {
      sp.append("voice", v);
    }
    if (params.query) {
      sp.set("q", params.query);
    }
    if (params.sort) {
      sp.set("sort", params.sort);
    }
    if (params.limit !== undefined) {
      sp.set("limit", String(params.limit));
    }
    if (params.offset !== undefined) {
      sp.set("offset", String(params.offset));
    }
    const qs = sp.toString();
    return request<GuideListResponse>(`/v1/guides${qs ? `?${qs}` : ""}`);
  },

  getGuide: (slug: string) => request<Guide>(`/v1/guides/${slug}`),

  listPresets: () => request<{ items: UseCasePreset[] }>("/v1/presets"),

  apply: (body: {
    guide: string;
    preset?: string;
    model?: string;
    input: string;
    temperature?: number;
  }) =>
    request<ApplyResponse>("/v1/apply", {
      method: "POST",
      body: JSON.stringify(body),
    }),

  humanizeSubmit: (input: string, extraPass = false) =>
    request<HumanizeSubmitResponse>("/v1/humanize", {
      method: "POST",
      body: JSON.stringify({ input, extraPass }),
    }),

  humanizeGet: (jobId: string) => request<HumanizeJob>(`/v1/humanize/${jobId}`),

  humanizeList: () => request<{ items: HumanizeJob[] }>("/v1/humanize"),

  me: () => request<MeResponse>("/v1/me"),

  usage: () => request<{ items: UsageItem[] }>("/v1/me/usage"),

  billingCheckout: () =>
    request<{ url: string; checkoutId: string }>("/v1/billing/checkout", {
      method: "POST",
      body: JSON.stringify({}),
    }),

  billingPortal: () =>
    request<{ url: string }>("/v1/billing/portal", {
      method: "POST",
      body: JSON.stringify({}),
    }),

  listKeys: () => request<{ items: ApiKeyItem[] }>("/v1/keys"),

  createKey: (
    name: string,
    options?: {
      expiresIn?: number;
      scopes?: ScopeId[];
      rateLimit?: ApiKeyRateLimit;
    }
  ) =>
    request<ApiKeyCreated>("/v1/keys", {
      method: "POST",
      body: JSON.stringify({
        name,
        ...(options?.expiresIn ? { expiresIn: options.expiresIn } : {}),
        ...(options?.scopes && options.scopes.length > 0
          ? { scopes: options.scopes }
          : {}),
        ...(options?.rateLimit
          ? { rateLimit: { enabled: true, ...options.rateLimit } }
          : {}),
      }),
    }),

  deleteKey: (id: string) =>
    request<{ ok: true }>(`/v1/keys/${id}`, { method: "DELETE" }),
};

export const queryKeys = {
  guides: (filters?: Record<string, unknown>) =>
    ["guides", filters ?? {}] as const,
  guide: (slug: string) => ["guides", slug] as const,
  presets: () => ["presets"] as const,
  humanizeJobs: () => ["humanize", "list"] as const,
  humanizeJob: (id: string) => ["humanize", "job", id] as const,
  me: () => ["me"] as const,
  usage: () => ["me", "usage"] as const,
  apiKeys: () => ["keys"] as const,
};
