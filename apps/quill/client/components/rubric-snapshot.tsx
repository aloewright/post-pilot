import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import type { DeterministicSnapshot } from "../../src/lib/rubric";
import type { EvalRubric } from "../../src/lib/types";

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
  op: string;
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
  const overColor = overallPct >= targetPct
    ? "var(--strand-color-accent-lede)"
    : "var(--strand-color-ink-primary)";

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg border p-4"
      initial={{ opacity: 0, y: 8 }}
      style={{
        background: "var(--strand-color-surface-raised)",
        borderColor: "var(--strand-color-rule)",
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mb-3 flex items-center justify-between">
        <span
          className="text-[0.68rem] font-semibold tracking-widest uppercase"
          style={{ color: "var(--strand-color-accent-kicker)" }}
        >
          Live rubric snapshot
        </span>
        <span
          className="text-xs"
          style={{ color: "var(--strand-color-ink-muted)" }}
        >
          target ≥ {targetPct}%
        </span>
      </div>

      <div className="mb-4">
        <div className="flex items-baseline justify-between">
          <span style={{ color: "var(--strand-color-ink-muted)" }}>
            Deterministic match
          </span>
          <CountUp className="text-2xl font-medium tabular-nums" color={overColor} value={overallPct} suffix="%" />
        </div>
        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full"
          style={{ background: "var(--strand-color-surface-sunken)" }}
        >
          <motion.div
            animate={{ width: `${overallPct}%` }}
            className="h-full rounded-full"
            initial={false}
            style={{ background: "var(--strand-color-accent-lede)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </div>

      <ul className="flex flex-col gap-1.5 text-xs">
        {details.map((d, i) => (
          <motion.li
            animate={{ opacity: 1, x: 0 }}
            className="flex items-baseline justify-between gap-3"
            initial={{ opacity: 0, x: -6 }}
            key={d.metric}
            transition={{
              duration: 0.32,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.05 * i,
            }}
          >
            <span style={{ color: "var(--strand-color-ink-muted)" }}>
              {METRIC_LABELS[d.metric] ?? d.metric}
            </span>
            <span className="flex items-baseline gap-2">
              <CountUp
                className="tabular-nums"
                color="var(--strand-color-ink-primary)"
                decimals={Number.isInteger(d.actual) ? 0 : 1}
                value={d.actual}
              />
              <span style={{ color: "var(--strand-color-ink-faint)" }}>
                {d.op} {d.target}
              </span>
              <AnimatePresence initial={false} mode="wait">
                <motion.span
                  animate={{ scale: 1, opacity: 1 }}
                  aria-label={d.pass ? "pass" : "fail"}
                  exit={{ scale: 0.6, opacity: 0 }}
                  initial={{ scale: 0.4, opacity: 0 }}
                  key={d.pass ? "pass" : "fail"}
                  style={{
                    color: d.pass
                      ? "var(--strand-color-accent-lede)"
                      : "var(--strand-color-ink-faint)",
                    display: "inline-block",
                  }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                >
                  {d.pass ? "✓" : "·"}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.li>
        ))}
      </ul>

      <p
        className="mt-3 border-t pt-3 text-[0.72rem]"
        style={{
          borderColor: "var(--strand-color-rule)",
          color: "var(--strand-color-ink-faint)",
        }}
      >
        {snapshot.word_count} words · judge score deferred (M5)
      </p>
    </motion.div>
  );
}

/** Animates a number from its previous value to `value`. */
function CountUp({
  value,
  className,
  color,
  suffix = "",
  decimals = 0,
  duration = 0.7,
}: {
  value: number;
  className?: string;
  color?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}) {
  const mv = useMotionValue(value);
  const display = useTransform(mv, (n) =>
    `${n.toFixed(decimals)}${suffix}`,
  );

  useEffect(() => {
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [value, mv, duration]);

  return (
    <motion.span className={className} style={{ color }}>
      {display}
    </motion.span>
  );
}
