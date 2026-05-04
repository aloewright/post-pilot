import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Kicker, Lede, Standfirst } from "../components/editorial";
import {
  ALL_SCOPES,
  type ApiKeyCreated,
  api,
  DEFAULT_SCOPES,
  queryKeys,
  READ_ONLY_SCOPES,
  type ScopeId,
} from "../lib/api";
import { authClient, signOut, useSession } from "../lib/auth-client";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const { data, isPending } = useSession();
  const navigate = useNavigate();
  const [signingOut, setSigningOut] = useState(false);
  const [deleteState, setDeleteState] = useState<
    "idle" | "confirming" | "deleting" | "error"
  >("idle");
  const [deletePassword, setDeletePassword] = useState("");
  const [deleteError, setDeleteError] = useState<string | null>(null);

  if (isPending) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <p style={{ color: "var(--strand-color-ink-muted)" }}>Loading…</p>
      </section>
    );
  }

  if (!data?.user) {
    return (
      <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <Kicker>Profile</Kicker>
        <Lede as="h1" size="lg">
          You're signed out.
        </Lede>
        <Standfirst className="mt-4 max-w-[60ch]">
          <button
            className="underline"
            onClick={() => navigate({ to: "/sign-in" })}
            style={{ color: "var(--strand-color-ink-primary)" }}
            type="button"
          >
            Sign in
          </button>{" "}
          to see your profile.
        </Standfirst>
      </section>
    );
  }

  const { user } = data;

  async function handleSignOut() {
    setSigningOut(true);
    await signOut();
    setSigningOut(false);
    navigate({ to: "/" });
  }

  async function handleDelete() {
    setDeleteState("deleting");
    setDeleteError(null);
    const { error } = await authClient.deleteUser({
      password: deletePassword || undefined,
    });
    if (error) {
      setDeleteState("error");
      setDeleteError(error.message ?? "Could not delete account.");
      return;
    }
    navigate({ to: "/" });
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-3">
        <Kicker>Profile</Kicker>
        <Lede as="h1" size="lg">
          {user.name ?? user.email}
        </Lede>
        <Standfirst className="max-w-[60ch]">
          Signed in to Post Pilot.
        </Standfirst>
      </div>

      <CreditsPanel />
      <ApiKeysPanel />

      <h2
        className="mt-12 mb-4 text-[0.68rem] font-semibold tracking-widest uppercase"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        Account
      </h2>
      <dl className="flex flex-col gap-4 text-sm">
        <Row label="Email" value={user.email} />
        <Row label="Name" value={user.name ?? "—"} />
        <Row label="Email verified" value={user.emailVerified ? "Yes" : "No"} />
        <Row
          label="User ID"
          value={<code className="pp-mono">{user.id}</code>}
        />
      </dl>

      <button
        className="mt-10 rounded-md border px-4 py-2 text-sm font-medium disabled:opacity-50"
        disabled={signingOut}
        onClick={handleSignOut}
        style={{
          borderColor: "var(--strand-color-ink-primary)",
          color: "var(--strand-color-ink-primary)",
        }}
        type="button"
      >
        {signingOut ? "Signing out…" : "Sign out"}
      </button>

      <div
        className="mt-16 rounded-md border p-6"
        style={{ borderColor: "#dc2626" }}
      >
        <Kicker>Danger zone</Kicker>
        <Lede as="h2" className="mt-2" size="sm">
          Delete account
        </Lede>
        <p
          className="mt-3 max-w-[60ch] text-sm"
          style={{ color: "var(--strand-color-ink-muted)" }}
        >
          Permanently removes your account, sessions, and bookmarks. This cannot
          be undone.
        </p>

        {deleteState === "idle" || deleteState === "error" ? (
          <button
            className="mt-5 rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-[#dc2626] hover:text-white"
            onClick={() => setDeleteState("confirming")}
            style={{ borderColor: "#dc2626", color: "#dc2626" }}
            type="button"
          >
            Delete my account
          </button>
        ) : null}

        {deleteState === "confirming" || deleteState === "deleting" ? (
          <div className="mt-5 flex flex-col gap-3">
            <label className="flex flex-col gap-1 text-sm">
              <span style={{ color: "var(--strand-color-ink-muted)" }}>
                Confirm with your password
              </span>
              <input
                autoFocus
                className="rounded-md border px-3 py-2"
                onChange={(e) => setDeletePassword(e.target.value)}
                placeholder="Password"
                style={{
                  background: "var(--strand-color-surface-raised)",
                  borderColor: "var(--strand-color-rule)",
                  color: "var(--strand-color-ink-primary)",
                }}
                type="password"
                value={deletePassword}
              />
            </label>
            <div className="flex gap-2">
              <button
                className="rounded-md px-4 py-2 text-sm font-medium text-white disabled:opacity-50"
                disabled={deleteState === "deleting"}
                onClick={handleDelete}
                style={{ background: "#dc2626" }}
                type="button"
              >
                {deleteState === "deleting"
                  ? "Deleting…"
                  : "Permanently delete"}
              </button>
              <button
                className="rounded-md border px-4 py-2 text-sm font-medium"
                disabled={deleteState === "deleting"}
                onClick={() => {
                  setDeleteState("idle");
                  setDeletePassword("");
                  setDeleteError(null);
                }}
                style={{
                  borderColor: "var(--strand-color-rule)",
                  color: "var(--strand-color-ink-primary)",
                }}
                type="button"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : null}

        {deleteError ? (
          <p className="mt-3 text-sm" style={{ color: "#dc2626" }}>
            {deleteError}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function CreditsPanel() {
  const meQuery = useQuery({
    queryKey: queryKeys.me(),
    queryFn: () => api.me(),
  });
  const usageQuery = useQuery({
    queryKey: queryKeys.usage(),
    queryFn: () => api.usage(),
  });
  const checkout = useMutation({
    mutationFn: () => api.billingCheckout(),
    onSuccess: (r) => {
      window.location.href = r.url;
    },
  });
  const portal = useMutation({
    mutationFn: () => api.billingPortal(),
    onSuccess: (r) => {
      window.open(r.url, "_blank", "noopener,noreferrer");
    },
  });

  const me = meQuery.data;
  const items = usageQuery.data?.items ?? [];

  return (
    <div
      className="mb-10 rounded-md border p-6"
      style={{ borderColor: "var(--strand-color-rule)" }}
    >
      <Kicker>Credits</Kicker>
      <div className="mt-3 flex flex-wrap items-baseline gap-x-8 gap-y-3">
        <Stat
          highlight
          label="Balance"
          value={`${(me?.balance ?? 0).toLocaleString()}c`}
        />
        <Stat
          label="Lifetime used"
          value={`${(me?.lifetimeUsed ?? 0).toLocaleString()}c`}
        />
        <Stat
          label="Lifetime purchased"
          value={`${(me?.lifetimePurchased ?? 0).toLocaleString()}c`}
        />
      </div>
      <p
        className="mt-3 text-xs"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        {me?.costs.STYLIZE_PER_CHAR ?? 1}c per char stylize ·{" "}
        {me?.costs.HUMANIZE_PER_CHAR ?? 5}c per char humanize. $10 buys 100,000
        credits (~100k chars stylize or 20k chars humanize).
      </p>
      <div className="mt-5 flex gap-2">
        <button
          className="rounded-md border px-4 py-2 text-sm font-medium disabled:opacity-50"
          disabled={checkout.isPending}
          onClick={() => checkout.mutate()}
          style={{
            borderColor: "var(--strand-color-ink-primary)",
            color: "var(--strand-color-ink-primary)",
          }}
          type="button"
        >
          {checkout.isPending ? "Opening…" : "Buy credits"}
        </button>
        <button
          className="rounded-md border px-4 py-2 text-sm font-medium disabled:opacity-50"
          disabled={portal.isPending}
          onClick={() => portal.mutate()}
          style={{
            borderColor: "var(--strand-color-rule)",
            color: "var(--strand-color-ink-primary)",
          }}
          type="button"
        >
          {portal.isPending ? "Opening…" : "Manage billing"}
        </button>
      </div>
      {portal.error ? (
        <p
          className="mt-2 text-xs"
          style={{ color: "var(--strand-color-ink-muted)" }}
        >
          {(portal.error as Error).message}
        </p>
      ) : null}

      {items.length > 0 ? (
        <div className="mt-6">
          <h3
            className="mb-2 text-[0.68rem] font-semibold tracking-widest uppercase"
            style={{ color: "var(--strand-color-ink-muted)" }}
          >
            Recent activity
          </h3>
          <ul
            className="flex flex-col divide-y"
            style={{ borderColor: "var(--strand-color-rule)" }}
          >
            {items.slice(0, 12).map((it) => (
              <li
                className="grid grid-cols-[7rem_1fr_auto] items-center gap-3 py-2 text-xs"
                key={it.id}
                style={{ borderColor: "var(--strand-color-rule)" }}
              >
                <span
                  className="tabular-nums"
                  style={{
                    color:
                      it.delta > 0
                        ? "var(--strand-color-accent-lede)"
                        : "var(--strand-color-ink-primary)",
                  }}
                >
                  {it.delta > 0 ? "+" : ""}
                  {it.delta.toLocaleString()}c
                </span>
                <span
                  className="uppercase tracking-wider"
                  style={{ color: "var(--strand-color-ink-muted)" }}
                >
                  {it.reason}
                </span>
                <span
                  className="tabular-nums text-[0.62rem]"
                  style={{ color: "var(--strand-color-ink-faint)" }}
                >
                  {formatTime(it.createdAt)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function ApiKeysPanel() {
  const queryClient = useQueryClient();
  const keys = useQuery({
    queryKey: queryKeys.apiKeys(),
    queryFn: () => api.listKeys(),
  });
  const [name, setName] = useState("");
  const [expiresIn, setExpiresIn] = useState<string>("");
  const [scopes, setScopes] = useState<ScopeId[]>([...DEFAULT_SCOPES]);
  const [rateLimitEnabled, setRateLimitEnabled] = useState(false);
  const [rateLimitWindowMs, setRateLimitWindowMs] = useState(60_000);
  const [rateLimitMax, setRateLimitMax] = useState(100);
  const [created, setCreated] = useState<ApiKeyCreated | null>(null);
  const create = useMutation({
    mutationFn: (args: {
      name: string;
      expiresIn?: number;
      scopes: ScopeId[];
      rateLimit?: { windowMs: number; max: number };
    }) =>
      api.createKey(args.name, {
        expiresIn: args.expiresIn,
        scopes: args.scopes,
        rateLimit: args.rateLimit,
      }),
    onSuccess: (r) => {
      setCreated(r);
      setName("");
      setExpiresIn("");
      setScopes([...DEFAULT_SCOPES]);
      setRateLimitEnabled(false);
      setRateLimitWindowMs(60_000);
      setRateLimitMax(100);
      queryClient.invalidateQueries({ queryKey: queryKeys.apiKeys() });
    },
  });
  const toggleScope = (s: ScopeId) => {
    setScopes((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };
  const scopesByResource = ALL_SCOPES.reduce<Record<string, ScopeId[]>>(
    (acc, s) => {
      const [resource] = s.split(":") as [string];
      acc[resource] = acc[resource] ?? [];
      acc[resource].push(s);
      return acc;
    },
    {}
  );
  const remove = useMutation({
    mutationFn: (id: string) => api.deleteKey(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.apiKeys() });
    },
  });

  return (
    <div
      className="mb-10 rounded-md border p-6"
      style={{ borderColor: "var(--strand-color-rule)" }}
    >
      <Kicker>API keys</Kicker>
      <p
        className="mt-3 text-xs"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        Pass as <code className="pp-mono">Authorization: Bearer pp_live_…</code>
        . Calls debit the same credit balance as the playground.
      </p>

      <form
        className="mt-4 flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!name.trim()) {
            return;
          }
          if (rateLimitEnabled) {
            if (
              !Number.isInteger(rateLimitWindowMs) ||
              rateLimitWindowMs <= 0 ||
              rateLimitWindowMs > 60 * 60 * 1000
            ) {
              alert(
                "Rate-limit window must be a positive integer ≤ 3,600,000 ms."
              );
              return;
            }
            if (
              !Number.isInteger(rateLimitMax) ||
              rateLimitMax <= 0 ||
              rateLimitMax > 10_000
            ) {
              alert("Rate-limit max must be a positive integer ≤ 10,000.");
              return;
            }
          }
          const seconds = expiresIn ? Number(expiresIn) : undefined;
          create.mutate({
            name: name.trim(),
            expiresIn: seconds && seconds > 0 ? seconds : undefined,
            scopes,
            rateLimit: rateLimitEnabled
              ? { windowMs: rateLimitWindowMs, max: rateLimitMax }
              : undefined,
          });
        }}
      >
        <div className="flex flex-wrap gap-2">
          <input
            className="min-w-[12rem] flex-1 rounded-md border px-3 py-2 text-sm"
            maxLength={80}
            onChange={(e) => setName(e.target.value)}
            placeholder="Key name (e.g. local-dev, staging-bot)"
            style={{
              background: "var(--strand-color-surface-raised)",
              borderColor: "var(--strand-color-rule)",
              color: "var(--strand-color-ink-primary)",
            }}
            value={name}
          />
          <select
            aria-label="Expires in"
            className="rounded-md border px-3 py-2 text-sm"
            onChange={(e) => setExpiresIn(e.target.value)}
            style={{
              background: "var(--strand-color-surface-raised)",
              borderColor: "var(--strand-color-rule)",
              color: "var(--strand-color-ink-primary)",
            }}
            value={expiresIn}
          >
            <option value="">Never expires</option>
            <option value={String(30 * 86_400)}>Expires in 30 days</option>
            <option value={String(90 * 86_400)}>Expires in 90 days</option>
            <option value={String(365 * 86_400)}>Expires in 1 year</option>
          </select>
        </div>

        <fieldset
          className="rounded-md border px-3 py-3"
          style={{ borderColor: "var(--strand-color-rule)" }}
        >
          <legend
            className="px-1 text-[0.62rem] font-semibold tracking-widest uppercase"
            style={{ color: "var(--strand-color-ink-muted)" }}
          >
            Permissions
          </legend>
          <div className="flex flex-col gap-2">
            {Object.entries(scopesByResource).map(([resource, list]) => (
              <div className="flex flex-wrap items-center gap-3" key={resource}>
                <span
                  className="min-w-[5rem] text-xs font-medium"
                  style={{ color: "var(--strand-color-ink-primary)" }}
                >
                  {resource}
                </span>
                {list.map((s) => {
                  const [, action] = s.split(":");
                  return (
                    <label
                      className="flex items-center gap-1.5 text-xs"
                      key={s}
                      style={{ color: "var(--strand-color-ink-muted)" }}
                    >
                      <input
                        checked={scopes.includes(s)}
                        onChange={() => toggleScope(s)}
                        type="checkbox"
                      />
                      {action}
                    </label>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <button
              className="rounded-md border px-2 py-1 text-[0.7rem]"
              onClick={() => setScopes([...READ_ONLY_SCOPES])}
              style={{
                borderColor: "var(--strand-color-rule)",
                color: "var(--strand-color-ink-muted)",
              }}
              type="button"
            >
              Read-only preset
            </button>
            <button
              className="rounded-md border px-2 py-1 text-[0.7rem]"
              onClick={() => setScopes([...DEFAULT_SCOPES])}
              style={{
                borderColor: "var(--strand-color-rule)",
                color: "var(--strand-color-ink-muted)",
              }}
              type="button"
            >
              Default
            </button>
          </div>
        </fieldset>

        <fieldset
          className="rounded-md border px-3 py-3"
          style={{ borderColor: "var(--strand-color-rule)" }}
        >
          <legend
            className="px-1 text-[0.62rem] font-semibold tracking-widest uppercase"
            style={{ color: "var(--strand-color-ink-muted)" }}
          >
            Rate limit (optional)
          </legend>
          <label
            className="flex items-center gap-2 text-xs"
            style={{ color: "var(--strand-color-ink-primary)" }}
          >
            <input
              checked={rateLimitEnabled}
              onChange={(e) => setRateLimitEnabled(e.target.checked)}
              type="checkbox"
            />
            Enable rate limit
          </label>
          {rateLimitEnabled ? (
            <div className="mt-2 flex flex-wrap gap-3">
              <label
                className="flex flex-col gap-1 text-[0.7rem]"
                style={{ color: "var(--strand-color-ink-muted)" }}
              >
                Window (ms)
                <input
                  className="w-32 rounded-md border px-2 py-1 text-xs"
                  min={1}
                  onChange={(e) =>
                    setRateLimitWindowMs(Number(e.target.value) || 0)
                  }
                  style={{
                    background: "var(--strand-color-surface-raised)",
                    borderColor: "var(--strand-color-rule)",
                    color: "var(--strand-color-ink-primary)",
                  }}
                  type="number"
                  value={rateLimitWindowMs}
                />
              </label>
              <label
                className="flex flex-col gap-1 text-[0.7rem]"
                style={{ color: "var(--strand-color-ink-muted)" }}
              >
                Max requests / window
                <input
                  className="w-32 rounded-md border px-2 py-1 text-xs"
                  min={1}
                  onChange={(e) => setRateLimitMax(Number(e.target.value) || 0)}
                  style={{
                    background: "var(--strand-color-surface-raised)",
                    borderColor: "var(--strand-color-rule)",
                    color: "var(--strand-color-ink-primary)",
                  }}
                  type="number"
                  value={rateLimitMax}
                />
              </label>
            </div>
          ) : null}
        </fieldset>

        <div>
          <button
            className="rounded-md border px-4 py-2 text-sm font-medium disabled:opacity-50"
            disabled={!name.trim() || create.isPending}
            style={{
              borderColor: "var(--strand-color-ink-primary)",
              color: "var(--strand-color-ink-primary)",
            }}
            type="submit"
          >
            {create.isPending ? "Creating…" : "New key"}
          </button>
        </div>
      </form>

      {created ? (
        <div
          className="mt-4 rounded-md border p-3 text-sm"
          style={{
            borderColor: "var(--strand-color-accent-lede)",
            background: "var(--strand-color-surface-raised)",
          }}
        >
          <p
            className="mb-2 text-[0.62rem] font-semibold tracking-widest uppercase"
            style={{ color: "var(--strand-color-accent-lede)" }}
          >
            Copy this now — it won't be shown again
          </p>
          <code className="pp-mono block break-all text-xs">
            {created.plaintext}
          </code>
          <button
            className="mt-3 text-xs underline"
            onClick={() => setCreated(null)}
            style={{ color: "var(--strand-color-ink-muted)" }}
            type="button"
          >
            Dismiss
          </button>
        </div>
      ) : null}

      {keys.data?.items.length ? (
        <ul
          className="mt-5 flex flex-col divide-y"
          style={{ borderColor: "var(--strand-color-rule)" }}
        >
          {keys.data.items.map((k) => {
            const expiry = expiryStatus(k.expiresAt);
            return (
              <li
                className="grid grid-cols-[1fr_auto_auto] items-center gap-3 py-3 text-sm"
                key={k.id}
                style={{ borderColor: "var(--strand-color-rule)" }}
              >
                <div className="flex flex-col">
                  <span style={{ color: "var(--strand-color-ink-primary)" }}>
                    {k.name}
                  </span>
                  <code
                    className="pp-mono text-xs"
                    style={{ color: "var(--strand-color-ink-muted)" }}
                  >
                    {k.prefix}…
                  </code>
                  <span
                    className="text-[0.65rem]"
                    style={{ color: "var(--strand-color-ink-faint)" }}
                  >
                    Scopes:{" "}
                    {k.scopes && k.scopes.length > 0
                      ? k.scopes.join(", ")
                      : "(none)"}
                  </span>
                  {k.rateLimit ? (
                    <span
                      className="text-[0.65rem]"
                      style={{ color: "var(--strand-color-ink-faint)" }}
                    >
                      Rate limit: {k.rateLimit.max} /{" "}
                      {formatWindow(k.rateLimit.windowMs)}
                    </span>
                  ) : null}
                </div>
                <div className="flex flex-col items-end gap-0.5 text-xs tabular-nums">
                  <span style={{ color: "var(--strand-color-ink-faint)" }}>
                    {k.lastUsedAt
                      ? `Last used ${humanRelative(String(k.lastUsedAt))}`
                      : "Never used"}
                  </span>
                  <span
                    style={{
                      color: expiry.expired
                        ? "var(--strand-color-accent-lede)"
                        : "var(--strand-color-ink-faint)",
                    }}
                  >
                    {expiry.label}
                  </span>
                </div>
                <button
                  className="text-xs underline disabled:opacity-50"
                  disabled={remove.isPending}
                  onClick={() => {
                    if (confirm(`Revoke key "${k.name}"?`)) {
                      remove.mutate(k.id);
                    }
                  }}
                  style={{ color: "#dc2626" }}
                  type="button"
                >
                  Revoke
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p
          className="mt-5 text-xs italic"
          style={{ color: "var(--strand-color-ink-faint)" }}
        >
          No API keys yet.
        </p>
      )}
    </div>
  );
}

function Stat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col">
      <span
        className="text-[0.62rem] font-semibold tracking-widest uppercase"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        {label}
      </span>
      <span
        className="text-2xl tabular-nums"
        style={{
          color: highlight
            ? "var(--strand-color-accent-lede)"
            : "var(--strand-color-ink-primary)",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function formatWindow(ms: number): string {
  if (ms < 60_000) {
    return `${Math.round(ms / 1000)}s`;
  }
  if (ms < 3_600_000) {
    return `${Math.round(ms / 60_000)}m`;
  }
  return `${Math.round(ms / 3_600_000)}h`;
}

function humanRelative(iso: string | number): string {
  const ts = typeof iso === "number" ? iso : Date.parse(iso);
  if (!Number.isFinite(ts)) {
    return "—";
  }
  const ms = ts - Date.now();
  const abs = Math.abs(ms);
  const day = 86_400_000;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;
  let val: string;
  if (abs < day) {
    val = `${Math.max(1, Math.round(abs / 3_600_000))}h`;
  } else if (abs < week) {
    val = `${Math.round(abs / day)}d`;
  } else if (abs < month) {
    val = `${Math.round(abs / week)}w`;
  } else if (abs < year) {
    val = `${Math.round(abs / month)}mo`;
  } else {
    val = `${Math.round(abs / year)}y`;
  }
  return ms > 0 ? `in ${val}` : `${val} ago`;
}

function expiryStatus(iso: string | null | undefined): {
  label: string;
  expired: boolean;
} {
  if (!iso) {
    return { label: "No expiry", expired: false };
  }
  const ts = Date.parse(iso);
  if (!Number.isFinite(ts)) {
    return { label: "No expiry", expired: false };
  }
  const ms = ts - Date.now();
  if (ms <= 0) {
    return { label: `Expired ${humanRelative(iso)}`, expired: true };
  }
  return { label: `Expires ${humanRelative(iso)}`, expired: false };
}

function formatTime(t: string | number): string {
  const ts = typeof t === "number" ? (t < 1e12 ? t * 1000 : t) : Date.parse(t);
  if (!Number.isFinite(ts)) {
    return "—";
  }
  return new Date(ts).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div
      className="grid grid-cols-[10rem_1fr] gap-4 border-b py-3"
      style={{ borderColor: "var(--strand-color-rule)" }}
    >
      <dt
        className="uppercase tracking-wider text-xs"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        {label}
      </dt>
      <dd style={{ color: "var(--strand-color-ink-primary)" }}>{value}</dd>
    </div>
  );
}
