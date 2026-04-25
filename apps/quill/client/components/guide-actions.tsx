import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { guideToJSON, guideToYAML } from "../../src/lib/export";
import { USE_CASE_PRESETS } from "../../src/lib/presets";
import type { Guide } from "../../src/lib/types";
import { CopyButton } from "./copy-button";

type Format = "prompt" | "json" | "yaml";

export function GuideActions({ guide }: { guide: Guide }) {
  const [format, setFormat] = useState<Format>("prompt");

  const value =
    format === "prompt"
      ? guide.system_prompt
      : format === "json"
        ? guideToJSON(guide)
        : guideToYAML(guide);

  return (
    <div
      className="flex flex-col gap-4 rounded-lg border p-5"
      style={{
        background: "var(--strand-color-surface-raised)",
        borderColor: "var(--strand-color-rule)",
      }}
    >
      <div className="flex items-center justify-between">
        <span className="quill-byline">Export</span>
        <div
          className="flex overflow-hidden rounded-md border text-xs"
          style={{ borderColor: "var(--strand-color-rule)" }}
        >
          {(["prompt", "json", "yaml"] as Format[]).map((f) => (
            <button
              className="px-3 py-1.5"
              key={f}
              onClick={() => setFormat(f)}
              style={{
                background:
                  format === f
                    ? "var(--strand-color-ink-primary)"
                    : "transparent",
                color:
                  format === f
                    ? "var(--strand-color-surface-canvas)"
                    : "var(--strand-color-ink-muted)",
              }}
              type="button"
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <CopyButton
        className="w-full"
        label={
          format === "prompt"
            ? "Copy system prompt"
            : format === "json"
              ? "Copy JSON spec"
              : "Copy YAML spec"
        }
        size="md"
        value={value}
        variant="default"
      />

      <Link
        className="inline-flex w-full items-center justify-center rounded-md border px-3 py-2 text-sm transition-colors"
        search={{ guide: guide.slug }}
        style={{
          borderColor: "var(--strand-color-ink-primary)",
          color: "var(--strand-color-ink-primary)",
        }}
        to="/playground"
      >
        Open in playground →
      </Link>

      <div
        className="border-t pt-4"
        style={{ borderColor: "var(--strand-color-rule)" }}
      >
        <span className="quill-byline">Compatible presets</span>
        <ul className="mt-2 flex flex-col gap-1 text-sm">
          {USE_CASE_PRESETS.filter((p) =>
            guide.use_cases.includes(p.slug),
          ).map((p) => (
            <li
              className="flex items-baseline justify-between gap-3"
              key={p.slug}
            >
              <span style={{ color: "var(--strand-color-ink-primary)" }}>
                {p.name}
              </span>
              <Link
                className="quill-byline hover:underline"
                search={{ guide: guide.slug, preset: p.slug }}
                to="/playground"
              >
                Try →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
