import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Kicker, Lede, Standfirst } from "../components/editorial";
import { api, type ApiKeyCreated, queryKeys } from "../lib/api";
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

      <h2 className="mt-12 mb-4 text-[0.68rem] font-semibold tracking-widest uppercase"
        style={{ color: "var(--strand-color-ink-muted)" }}>
        Account
      </h2>
      <dl className="flex flex-col gap-4 text-sm">
        <Row label="Email" value={user.email} />
        <Row label="Name" value={user.name ?? "—"} />
        <Row
          label="Email verified"
          value={user.emailVerified ? "Yes" : "No"}
        />
        <Row label="User ID" value={<code className="pp-mono">{user.id}</code>} />
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
          Permanently removes your account, sessions, and bookmarks. This
          cannot be undone.
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
  const meQuery = useQuery({ queryKey: queryKeys.me(), queryFn: () => api.me() });
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
        <Stat label="Balance" value={`${(me?.balance ?? 0).toLocaleString()}c`} highlight />
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
          <h3 className="mb-2 text-[0.68rem] font-semibold tracking-widest uppercase"
            style={{ color: "var(--strand-color-ink-muted)" }}>
            Recent activity
          </h3>
          <ul className="flex flex-col divide-y"
            style={{ borderColor: "var(--strand-color-rule)" }}>
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
  const [created, setCreated] = useState<ApiKeyCreated | null>(null);
  const create = useMutation({
    mutationFn: (n: string) => api.createKey(n),
    onSuccess: (r) => {
      setCreated(r);
      setName("");
      queryClient.invalidateQueries({ queryKey: queryKeys.apiKeys() });
    },
  });
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
        Pass as <code className="pp-mono">Authorization: Bearer pp_live_…</code>.
        Calls debit the same credit balance as the playground.
      </p>

      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (name.trim()) {
            create.mutate(name.trim());
          }
        }}
      >
        <input
          className="flex-1 rounded-md border px-3 py-2 text-sm"
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
        <ul className="mt-5 flex flex-col divide-y"
          style={{ borderColor: "var(--strand-color-rule)" }}>
          {keys.data.items.map((k) => (
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
              </div>
              <span
                className="text-xs tabular-nums"
                style={{ color: "var(--strand-color-ink-faint)" }}
              >
                {k.lastUsedAt
                  ? `last used ${formatTime(k.lastUsedAt)}`
                  : "never used"}
              </span>
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
          ))}
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

function formatTime(t: string | number): string {
  const ts =
    typeof t === "number"
      ? t < 1e12
        ? t * 1000
        : t
      : Date.parse(t);
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
    <div className="grid grid-cols-[10rem_1fr] gap-4 border-b py-3"
      style={{ borderColor: "var(--strand-color-rule)" }}>
      <dt className="uppercase tracking-wider text-xs"
        style={{ color: "var(--strand-color-ink-muted)" }}>
        {label}
      </dt>
      <dd style={{ color: "var(--strand-color-ink-primary)" }}>{value}</dd>
    </div>
  );
}
