import { Link } from "@tanstack/react-router";
import { useSession } from "../lib/auth-client";

export function Nav() {
  const { data } = useSession();
  const user = data?.user;

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      style={{
        borderColor: "var(--strand-color-rule)",
        background:
          "color-mix(in oklch, var(--strand-color-surface-canvas) 88%, transparent)",
      }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          className="pp-lede text-xl"
          style={{
            color: "var(--strand-color-ink-primary)",
            letterSpacing: "-0.01em",
          }}
          to="/"
        >
          Post Pilot
        </Link>
        <div
          className="flex items-center gap-6 text-sm"
          style={{ color: "var(--strand-color-ink-muted)" }}
        >
          <Link
            activeProps={{
              style: { color: "var(--strand-color-ink-primary)" },
            }}
            className="hover:text-[color:var(--strand-color-ink-primary)]"
            to="/library"
          >
            Library
          </Link>
          <Link
            activeProps={{
              style: { color: "var(--strand-color-ink-primary)" },
            }}
            className="hover:text-[color:var(--strand-color-ink-primary)]"
            to="/bookmarks"
          >
            Bookmarks
          </Link>
          <Link
            activeProps={{
              style: { color: "var(--strand-color-ink-primary)" },
            }}
            className="hover:text-[color:var(--strand-color-ink-primary)]"
            to="/playground"
          >
            Playground
          </Link>
          {user ? (
            <Link
              activeProps={{
                style: { color: "var(--strand-color-ink-primary)" },
              }}
              className="hover:text-[color:var(--strand-color-ink-primary)]"
              to="/profile"
            >
              {user.name ?? user.email}
            </Link>
          ) : (
            <Link
              className="hover:text-[color:var(--strand-color-ink-primary)]"
              to="/sign-in"
            >
              Log in
            </Link>
          )}
          <Link
            className="rounded-md border px-3 py-1.5 text-xs font-medium"
            style={{
              borderColor: "var(--strand-color-ink-primary)",
              color: "var(--strand-color-ink-primary)",
            }}
            to={user ? "/browse" : "/sign-up"}
          >
            {user ? "Browse guides" : "Get started"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
