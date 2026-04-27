import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Kicker, Lede, Standfirst } from "../components/editorial";
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
    <section className="mx-auto max-w-2xl px-6 py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-3">
        <Kicker>Profile</Kicker>
        <Lede as="h1" size="lg">
          {user.name ?? user.email}
        </Lede>
        <Standfirst className="max-w-[60ch]">
          Signed in to Post Pilot.
        </Standfirst>
      </div>

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
