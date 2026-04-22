import type { FidelityScore } from "@/lib/quill/types";
import { formatFidelity } from "@/lib/quill/utils";
import { Kicker } from "./editorial";

const PROVIDER_LABELS: Record<FidelityScore["provider"], string> = {
  anthropic: "Anthropic",
  openai: "OpenAI",
  "workers-ai": "Workers AI",
};

export function FidelityPanel({ scores }: { scores?: FidelityScore[] }) {
  if (!scores || scores.length === 0) return null;
  return (
    <div
      className="rounded-lg border p-4"
      style={{
        background: "var(--strand-color-surface-raised)",
        borderColor: "var(--strand-color-rule)",
      }}
    >
      <Kicker>Fidelity</Kicker>
      <ul className="mt-3 flex flex-col gap-2">
        {scores.map((s) => (
          <li
            className="flex items-baseline justify-between gap-3 text-sm"
            key={`${s.provider}-${s.model}`}
          >
            <span style={{ color: "var(--strand-color-ink-primary)" }}>
              {PROVIDER_LABELS[s.provider]}
            </span>
            <span className="flex items-baseline gap-2">
              <span
                className="quill-byline"
                style={{ fontFamily: "var(--strand-type-mono)" }}
              >
                {s.model}
              </span>
              <span
                className="tabular-nums"
                style={{
                  color: "var(--strand-color-accent-lede)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {formatFidelity(s.match)}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
