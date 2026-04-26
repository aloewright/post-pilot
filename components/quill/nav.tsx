import Link from "next/link";

export function QuillNav() {
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
          href="/quill"
          style={{
            color: "var(--strand-color-ink-primary)",
            letterSpacing: "-0.01em",
          }}
        >
          Quill
        </Link>
        <div
          className="flex items-center gap-6 text-sm"
          style={{ color: "var(--strand-color-ink-muted)" }}
        >
          <Link
            className="hover:text-[color:var(--strand-color-ink-primary)]"
            href="/quill/library"
          >
            Library
          </Link>
          <Link
            className="hover:text-[color:var(--strand-color-ink-primary)]"
            href="/quill/playground"
          >
            Playground
          </Link>
          <Link
            className="rounded-md border px-3 py-1.5 text-xs font-medium"
            href="/quill/library"
            style={{
              borderColor: "var(--strand-color-ink-primary)",
              color: "var(--strand-color-ink-primary)",
            }}
          >
            Browse guides
          </Link>
        </div>
      </nav>
    </header>
  );
}
