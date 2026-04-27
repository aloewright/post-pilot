import { Link } from "@tanstack/react-router";
import { USE_CASE_LABELS, USE_CASES } from "../../src/lib/utils";
import type { GuideListItem } from "../lib/api";
import { COVERED } from "../lib/covers";
import { AuthorIllustration } from "./author-illustration";
import { Chip, Kicker, Lede, Standfirst } from "./editorial";

export function StackCard({
  guide,
  isTop,
  onTap,
}: {
  guide: GuideListItem;
  isTop: boolean;
  onTap?: () => void;
}) {
  const hasCover = COVERED.has(guide.slug);

  return (
    <button
      aria-label={isTop ? `Send ${guide.author} to the back` : undefined}
      className="flex h-full w-full flex-col overflow-hidden rounded-xl border text-left shadow-lg disabled:cursor-default"
      disabled={!isTop}
      onClick={onTap}
      style={{
        background: "var(--strand-color-surface-raised)",
        borderColor: "var(--strand-color-rule)",
      }}
      type="button"
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "1 / 1.2",
          borderBottom: "1px solid var(--strand-color-rule)",
        }}
      >
        {hasCover ? (
          <img
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            src={`/covers/${guide.slug}.svg`}
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "var(--strand-color-surface-base)" }}
          >
            <AuthorIllustration
              size={140}
              slug={guide.slug}
              style={{ color: "var(--strand-color-ink-primary)" }}
            />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <Kicker>{guide.kicker}</Kicker>
        <Lede as="h2" size="sm">
          {guide.author}
        </Lede>
        <Standfirst className="line-clamp-3 text-[0.9rem]">
          {guide.standfirst}
        </Standfirst>
        <div className="mt-auto flex flex-wrap items-center gap-1.5">
          {guide.use_cases
            .filter((uc) => (USE_CASES as readonly string[]).includes(uc))
            .slice(0, 2)
            .map((uc) => (
              <Chip key={uc}>{USE_CASE_LABELS[uc]}</Chip>
            ))}
          {isTop ? (
            <Link
              className="ml-auto text-xs underline"
              onClick={(e) => e.stopPropagation()}
              params={{ slug: guide.slug }}
              style={{ color: "var(--strand-color-accent-lede)" }}
              to="/guides/$slug"
            >
              Open guide →
            </Link>
          ) : null}
        </div>
      </div>
    </button>
  );
}
