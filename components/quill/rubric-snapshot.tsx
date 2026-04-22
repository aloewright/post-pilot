import type { DeterministicSnapshot } from "@/lib/quill/rubric";
import type { EvalRubric } from "@/lib/quill/types";

const METRIC_LABELS: Record<string, string> = {
  avg_sentence_length: "avg sentence",
  max_sentence_length: "max sentence",
  adverbs_per_200w: "adverbs / 200w",
  abstract_per_para: "abstract / ¶",
  mono_syllable_ratio: "mono-syllable",
  type_token_ratio: "lexical variety",
  flesch_kincaid_grade: "FK grade",
};

type Detail = {
  metric: string;
  op: "<=" | ">=" | "==";
  target: number;
  actual: number;
  pass: boolean;
  weight: number;
};

export function RubricSnapshot({
  snapshot,
  rubric,
  details,
  overallPct,
}: {
  snapshot: DeterministicSnapshot;
  rubric: EvalRubric;
  details: Detail[];
  overallPct: number;
}) {
  const targetPct = Math.round(rubric.pass_threshold * 100);

  return (
    <div
      className="rounded-lg border p-4"
      style={{
        background: "var(--strand-color-surface-raised)",
        borderColor: "var(--strand-color-rule)",
      }}
    >
      <div className="mb-3 flex items-center justify-between">
        <span
          className="text-[0.68rem] font-semibold tracking-widest uppercase"
          style={{ color: "var(--strand-color-accent-kicker)" }}
        >
          Live rubric snapshot
        </span>
        <span className="text-xs" style={{ color: "var(--strand-color-ink-muted)" }}>
          target ≥ {targetPct}%
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline justify-between">
          <span style={{ color: "var(--strand-color-ink-muted)" }}>
            Deterministic match
          </span>
          <span
            className="text-2xl font-medium tabular-nums"
            style={{
              color:
                overallPct >= targetPct
                  ? "var(--strand-color-accent-lede)"
                  : "var(--strand-color-ink-primary)",
            }}
          >
            {overallPct}%
          </span>
        </div>
        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full"
          style={{ background: "var(--strand-color-surface-sunken)" }}
        >
          <div
            className="h-full rounded-full transition-[width] duration-300"
            style={{
              width: `${overallPct}%`,
              background: "var(--strand-color-accent-lede)",
            }}
          />
        </div>
      </div>

      <ul className="flex flex-col gap-1.5 text-xs">
        {details.map((d) => (
          <li
            className="flex items-baseline justify-between gap-3"
            key={d.metric}
          >
            <span style={{ color: "var(--strand-color-ink-muted)" }}>
              {METRIC_LABELS[d.metric] ?? d.metric}
            </span>
            <span className="flex items-baseline gap-2">
              <span
                className="tabular-nums"
                style={{ color: "var(--strand-color-ink-primary)" }}
              >
                {d.actual}
              </span>
              <span style={{ color: "var(--strand-color-ink-faint)" }}>
                {d.op} {d.target}
              </span>
              <span
                aria-label={d.pass ? "pass" : "fail"}
                style={{
                  color: d.pass
                    ? "var(--strand-color-accent-lede)"
                    : "var(--strand-color-ink-faint)",
                }}
              >
                {d.pass ? "✓" : "·"}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <p
        className="mt-3 border-t pt-3 text-[0.72rem]"
        style={{
          borderColor: "var(--strand-color-rule)",
          color: "var(--strand-color-ink-faint)",
        }}
      >
        {snapshot.word_count} words · judge score deferred
      </p>
    </div>
  );
}
