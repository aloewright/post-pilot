import { Link } from "@tanstack/react-router";
import type { GuideListItem } from "../lib/api";
import { USE_CASE_LABELS } from "../../src/lib/utils";
import { Chip, Kicker, Lede, Standfirst } from "./editorial";

function formatFidelity(match: number) {
  return `${Math.round(match * 100)}%`;
}

export function GuideCard({ guide }: { guide: GuideListItem }) {
  const fidelity = guide.fidelity?.length
    ? Math.max(...guide.fidelity.map((f) => f.match))
    : 0;

  return (
    <Link
      className="group relative flex h-full flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none"
      params={{ slug: guide.slug }}
      style={{
        background: "var(--strand-color-surface-raised)",
        borderColor: "var(--strand-color-rule)",
      }}
      to="/guides/$slug"
    >
      <div className="flex flex-col gap-3">
        <Kicker>{guide.kicker}</Kicker>
        <Lede as="h2" size="md">
          {guide.author}
        </Lede>
        <Standfirst className="text-[0.95rem]">{guide.standfirst}</Standfirst>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {guide.use_cases.slice(0, 3).map((uc) => (
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
    </Link>
  );
}
