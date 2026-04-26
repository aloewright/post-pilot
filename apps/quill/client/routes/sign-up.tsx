import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Kicker, Lede, Standfirst } from "../components/editorial";
import { signUp } from "../lib/auth-client";

export const Route = createFileRoute("/sign-up")({
  component: SignUpPage,
});

function SignUpPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const { error: err } = await signUp.email({ email, password, name });
    setSubmitting(false);
    if (err) {
      setError(err.message ?? "Sign-up failed");
      return;
    }
    navigate({ to: "/" });
  }

  return (
    <section className="mx-auto max-w-md px-6 py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-3">
        <Kicker>Create an account</Kicker>
        <Lede as="h1" size="lg">
          Get started.
        </Lede>
        <Standfirst className="max-w-[60ch]">
          One account unlocks the playground, your saved guides, and the API.
        </Standfirst>
      </div>

      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <label className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-wider"
            style={{ color: "var(--strand-color-ink-muted)" }}>
            Name
          </span>
          <input
            autoComplete="name"
            className="pp-input"
            onChange={(e) => setName(e.target.value)}
            required
            type="text"
            value={name}
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-wider"
            style={{ color: "var(--strand-color-ink-muted)" }}>
            Email
          </span>
          <input
            autoComplete="email"
            className="pp-input"
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            value={email}
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs uppercase tracking-wider"
            style={{ color: "var(--strand-color-ink-muted)" }}>
            Password
          </span>
          <input
            autoComplete="new-password"
            className="pp-input"
            minLength={12}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
          <span className="text-xs"
            style={{ color: "var(--strand-color-ink-muted)" }}>
            Minimum 12 characters.
          </span>
        </label>

        {error ? (
          <p className="text-sm" style={{ color: "var(--strand-color-warning)" }}>
            {error}
          </p>
        ) : null}

        <button
          className="rounded-md border px-4 py-2 text-sm font-medium disabled:opacity-50"
          disabled={submitting}
          style={{
            borderColor: "var(--strand-color-ink-primary)",
            background: "var(--strand-color-ink-primary)",
            color: "var(--strand-color-surface-canvas)",
          }}
          type="submit"
        >
          {submitting ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="mt-8 text-sm" style={{ color: "var(--strand-color-ink-muted)" }}>
        Already have an account?{" "}
        <Link className="underline" to="/sign-in">
          Sign in
        </Link>
        .
      </p>
    </section>
  );
}
