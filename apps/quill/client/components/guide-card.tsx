import { BookmarkSimple } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import type { MouseEvent } from "react";
import { USE_CASE_LABELS, USE_CASES } from "../../src/lib/utils";
import type { GuideListItem } from "../lib/api";
import { useBookmarks } from "../lib/bookmarks";
import { COVERED } from "../lib/covers";
import { AuthorIllustration } from "./author-illustration";
import { Chip, Kicker, Lede, Standfirst } from "./editorial";

function formatFidelity(match: number) {
  return `${Math.round(match * 100)}%`;
}

function BookmarkPin({ slug }: { slug: string }) {
  const { isBookmarked, toggle } = useBookmarks();
  const on = isBookmarked(slug);

  // The card itself is a <Link>; intercept so the click toggles the bookmark
  // instead of navigating.
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(slug);
  };

  return (
    <button
      aria-label={on ? "Remove bookmark" : "Bookmark this author"}
      aria-pressed={on}
      className="absolute top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
      onClick={handleClick}
      style={{
        background: on ? "#dc2626" : "transparent",
        borderColor: "#000",
        color: on ? "#fff" : "#000",
      }}
      type="button"
    >
      <BookmarkSimple size={16} weight={on ? "fill" : "regular"} />
    </button>
  );
}

export function GuideCard({ guide }: { guide: GuideListItem }) {
  const fidelity = guide.fidelity?.length
    ? Math.max(...guide.fidelity.map((f) => f.match))
    : 0;
  const hasCover = COVERED.has(guide.slug);

  return (
    <Link
      className="group flex h-full flex-col overflow-hidden rounded-lg border transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none"
      params={{ slug: guide.slug }}
      style={{
        background: "var(--strand-color-surface-raised)",
        borderColor: "var(--strand-color-rule)",
      }}
      to="/guides/$slug"
    >
      {/* Cover area: golden-ratio portrait. Same shape on every card so the
          library grid lines up regardless of which authors have covers. */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "1 / 1.618",
          borderBottom: "1px solid var(--strand-color-rule)",
        }}
      >
        {hasCover ? (
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            src={`/covers/${guide.slug}.svg`}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "var(--strand-color-surface-base)" }}
          >
            <AuthorIllustration
              className="transition-transform duration-500 ease-out group-hover:rotate-2"
              size={120}
              slug={guide.slug}
              style={{ color: "var(--strand-color-ink-primary)" }}
            />
          </div>
        )}
        <BookmarkPin slug={guide.slug} />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
        <div className="flex flex-col gap-2">
          <Kicker>{guide.kicker}</Kicker>
          <Lede as="h2" size="sm">
            {guide.author}
          </Lede>
          <Standfirst className="line-clamp-3 text-[0.85rem]">
            {guide.standfirst}
          </Standfirst>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          {guide.use_cases
            .filter((uc) => (USE_CASES as readonly string[]).includes(uc))
            .slice(0, 2)
            .map((uc) => (
              <Chip key={uc}>{USE_CASE_LABELS[uc]}</Chip>
            ))}
          {fidelity > 0 ? (
            <span
              className="ml-auto pp-byline text-[0.7rem]"
              style={{ color: "var(--strand-color-accent-lede)" }}
            >
              {formatFidelity(fidelity)}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
