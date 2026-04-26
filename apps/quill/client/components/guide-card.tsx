import { Link } from "@tanstack/react-router";
import { USE_CASE_LABELS, USE_CASES } from "../../src/lib/utils";
import type { GuideListItem } from "../lib/api";
import { COVERED } from "../lib/covers";
import { AuthorIllustration } from "./author-illustration";
import { Chip, Kicker, Lede, Standfirst } from "./editorial";

function formatFidelity(match: number) {
  return `${Math.round(match * 100)}%`;
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
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4 p-6">
        <div className="flex flex-col gap-3">
          <Kicker>{guide.kicker}</Kicker>
          <Lede as="h2" size="md">
            {guide.author}
          </Lede>
          <Standfirst className="text-[0.95rem]">{guide.standfirst}</Standfirst>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {guide.use_cases
            .filter((uc) => (USE_CASES as readonly string[]).includes(uc))
            .slice(0, 3)
            .map((uc) => (
              <Chip key={uc}>{USE_CASE_LABELS[uc]}</Chip>
            ))}
          {fidelity > 0 ? (
            <span
              className="ml-auto pp-byline"
              style={{ color: "var(--strand-color-accent-lede)" }}
            >
              {formatFidelity(fidelity)} fidelity
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
