import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer
      className="mt-24 border-t"
      style={{
        borderColor: "var(--strand-color-rule)",
        color: "var(--strand-color-ink-muted)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="pp-lede text-base">Post Pilot</span>
          <span className="pp-byline">
            Style guides for AI agents, curated.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
          <Link to="/library">Library</Link>
          <Link to="/playground">Playground</Link>
          <Link to="/docs">Docs</Link>
          <a href="/v1/health">API status</a>
          <span aria-hidden style={{ opacity: 0.4 }}>
            ·
          </span>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <a
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-opacity hover:opacity-90"
            href="https://buymeacoffee.com/allosaurus"
            rel="noopener noreferrer"
            style={{ background: "#ffdd00", color: "#1a1a1a" }}
            target="_blank"
          >
            <span aria-hidden>☕</span>
            Buy me a coffee
          </a>
        </div>
      </div>
    </footer>
  );
}
