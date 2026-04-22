import { USE_CASE_PRESETS } from "@/lib/quill/presets";
import { Kicker } from "./editorial";

export function UseCaseStrip() {
  return (
    <section
      className="border-y"
      style={{
        borderColor: "var(--strand-color-rule)",
        background: "var(--strand-color-surface-sunken)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <Kicker>Use cases</Kicker>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {USE_CASE_PRESETS.map((p) => (
            <span
              className="text-sm tracking-wide uppercase"
              key={p.slug}
              style={{ color: "var(--strand-color-ink-muted)" }}
            >
              {p.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
