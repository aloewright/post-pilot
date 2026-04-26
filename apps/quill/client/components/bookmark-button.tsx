import { Heart } from "@phosphor-icons/react";
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
      <Heart size={14} weight={on ? "fill" : "regular"} />
      {label ? <span>{on ? "Bookmarked" : "Bookmark"}</span> : null}
    </button>
  );
}
