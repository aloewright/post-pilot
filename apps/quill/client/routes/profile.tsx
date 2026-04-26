import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Kicker, Lede, Standfirst } from "../components/editorial";
import { signOut, useSession } from "../lib/auth-client";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const { data, isPending } = useSession();
  const navigate = useNavigate();
  const [signingOut, setSigningOut] = useState(false);

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
