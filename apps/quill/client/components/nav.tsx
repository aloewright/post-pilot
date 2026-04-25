import { Link } from "@tanstack/react-router";

export function Nav() {
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
          className="quill-lede text-xl"
          style={{
            color: "var(--strand-color-ink-primary)",
            letterSpacing: "-0.01em",
          }}
          to="/"
        >
          Quill
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
            to="/playground"
          >
            Playground
          </Link>
          <Link
            className="rounded-md border px-3 py-1.5 text-xs font-medium"
            style={{
              borderColor: "var(--strand-color-ink-primary)",
              color: "var(--strand-color-ink-primary)",
            }}
            to="/library"
          >
            Browse guides
          </Link>
        </div>
      </nav>
    </header>
  );
}
