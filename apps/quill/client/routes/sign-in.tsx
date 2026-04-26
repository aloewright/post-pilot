import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Kicker, Lede, Standfirst } from "../components/editorial";
import { signIn } from "../lib/auth-client";

export const Route = createFileRoute("/sign-in")({
  component: SignInPage,
});

function SignInPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const { error: err } = await signIn.email({ email, password });
    setSubmitting(false);
    if (err) {
      setError(err.message ?? "Sign-in failed");
      return;
    }
    navigate({ to: "/" });
  }

  async function onGithub() {
    setError(null);
    const { error: err } = await signIn.social({
      provider: "github",
      callbackURL: "/",
    });
    if (err) {
      setError(err.message ?? "GitHub sign-in failed");
    }
  }

  return (
    <section className="mx-auto max-w-md px-6 py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-3">
        <Kicker>Sign in</Kicker>
        <Lede as="h1" size="lg">
          Welcome back.
        </Lede>
        <Standfirst className="max-w-[60ch]">
          Use your email or sign in with GitHub.
        </Standfirst>
      </div>

      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
            autoComplete="current-password"
            className="pp-input"
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            value={password}
          />
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
          {submitting ? "Signing in…" : "Sign in"}
        </button>
      </form>

      <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-wider"
        style={{ color: "var(--strand-color-ink-muted)" }}>
        <span className="h-px flex-1" style={{ background: "var(--strand-color-rule)" }} />
        or
        <span className="h-px flex-1" style={{ background: "var(--strand-color-rule)" }} />
      </div>

      <button
        className="w-full rounded-md border px-4 py-2 text-sm font-medium"
        onClick={onGithub}
        style={{
          borderColor: "var(--strand-color-ink-primary)",
          color: "var(--strand-color-ink-primary)",
        }}
        type="button"
      >
        Continue with GitHub
      </button>

      <p className="mt-8 text-sm" style={{ color: "var(--strand-color-ink-muted)" }}>
        New here?{" "}
        <Link className="underline" to="/sign-up">
          Create an account
        </Link>
        .
      </p>
    </section>
  );
}
