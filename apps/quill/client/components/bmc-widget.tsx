// Floating "Buy me a coffee" link styled with Strand palette tokens so it
// reads as part of the site rather than the third-party yellow widget.
export function BmcWidget() {
  return (
    <a
      aria-label="Buy me a coffee"
      className="fixed right-5 bottom-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium shadow-md transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]"
      href="https://buymeacoffee.com/allosaurus"
      rel="noopener noreferrer"
      style={{
        background: "var(--strand-color-accent-lede)",
        color: "var(--strand-color-surface-canvas)",
      }}
      target="_blank"
    >
      <span aria-hidden="true">☕</span>
      Buy me a coffee
    </a>
  );
}
