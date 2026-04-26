import { useBookmarks } from "../lib/bookmarks";

export function BookmarkButton({
  slug,
  label = true,
}: {
  slug: string;
  label?: boolean;
}) {
  const { isBookmarked, toggle } = useBookmarks();
  const on = isBookmarked(slug);
  return (
    <button
      aria-label={on ? "Remove bookmark" : "Bookmark this author"}
      aria-pressed={on}
      className="inline-flex w-full items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm font-medium transition-colors"
      onClick={() => toggle(slug)}
      style={{
        borderColor: on
          ? "var(--strand-color-accent-lede)"
          : "var(--strand-color-rule)",
        color: on
          ? "var(--strand-color-accent-lede)"
          : "var(--strand-color-ink-primary)",
        background: "transparent",
      }}
      type="button"
    >
      <Heart filled={on} />
      {label ? <span>{on ? "Bookmarked" : "Bookmark"}</span> : null}
    </button>
  );
}

function Heart({ filled }: { filled: boolean }) {
  return (
    <svg
      aria-hidden="true"
      fill={filled ? "currentColor" : "none"}
      height="14"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      width="14"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
