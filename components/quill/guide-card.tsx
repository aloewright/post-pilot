import Link from "next/link";
import type { Guide } from "@/lib/quill/types";
import {
  formatFidelity,
  topFidelity,
  USE_CASE_LABELS,
} from "@/lib/quill/utils";
import { Chip, Kicker, Lede, Standfirst } from "./editorial";

export function GuideCard({ guide }: { guide: Guide }) {
  const fidelity = topFidelity(guide);
  return (
    <Link
      className="group relative flex h-full flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:outline-none"
      href={`/quill/guides/${guide.slug}`}
      style={{
        background: "var(--strand-color-surface-raised)",
        borderColor: "var(--strand-color-rule)",
      }}
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
            className="ml-auto quill-byline"
            style={{ color: "var(--strand-color-accent-lede)" }}
          >
            {formatFidelity(fidelity)} fidelity
          </span>
        ) : null}
      </div>
    </Link>
  );
}
