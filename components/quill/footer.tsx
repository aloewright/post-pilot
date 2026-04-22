import Link from "next/link";

export function QuillFooter() {
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
          <span className="quill-lede text-base">Quill</span>
          <span className="quill-byline">
            Style guides for AI agents, curated.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-xs">
          <Link href="/quill/library">Library</Link>
          <Link href="/quill/playground">Playground</Link>
          <a
            href="https://claude.ai/code"
            rel="noreferrer"
            target="_blank"
          >
            Built with Claude Code
          </a>
        </div>
      </div>
    </footer>
  );
}
