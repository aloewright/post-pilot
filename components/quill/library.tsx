"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Era, Guide, UseCase, VoiceAxis } from "@/lib/quill/types";
import {
  ERAS,
  filterGuides,
  type SortBy,
  sortGuides,
  USE_CASE_LABELS,
  USE_CASES,
  VOICE_AXES,
  VOICE_LABELS,
} from "@/lib/quill/utils";
import { GuideCard } from "./guide-card";

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export function Library({ guides }: { guides: Guide[] }) {
  const [eras, setEras] = useState<Era[]>([]);
  const [useCases, setUseCases] = useState<UseCase[]>([]);
  const [voice, setVoice] = useState<VoiceAxis[]>([]);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortBy>("author");

  const filtered = useMemo(() => {
    const subset = filterGuides(guides, {
      eras,
      useCases,
      voiceAxes: voice,
      query,
    });
    return sortGuides(subset, sort);
  }, [guides, eras, useCases, voice, query, sort]);

  return (
    <div className="grid gap-10 md:grid-cols-[220px_1fr]">
      <aside className="flex flex-col gap-6">
        <FilterGroup
          label="Era"
          onToggle={(v) => setEras((prev) => toggle(prev, v))}
          options={ERAS}
          render={(e) => e}
          selected={eras}
        />
        <FilterGroup
          label="Use case"
          onToggle={(v) => setUseCases((prev) => toggle(prev, v))}
          options={USE_CASES}
          render={(u) => USE_CASE_LABELS[u]}
          selected={useCases}
        />
        <FilterGroup
          label="Voice"
          onToggle={(v) => setVoice((prev) => toggle(prev, v))}
          options={VOICE_AXES}
          render={(v) => VOICE_LABELS[v]}
          selected={voice}
        />

        {eras.length + useCases.length + voice.length > 0 ? (
          <button
            className="self-start text-xs underline"
            onClick={() => {
              setEras([]);
              setUseCases([]);
              setVoice([]);
            }}
            style={{ color: "var(--strand-color-ink-muted)" }}
            type="button"
          >
            Clear filters
          </button>
        ) : null}
      </aside>

      <div className="flex flex-col gap-5">
        <div
          className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
          style={{ color: "var(--strand-color-ink-muted)" }}
        >
          <div className="flex items-center gap-3">
            <input
              className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none md:w-64"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search authors or voices"
              style={{
                background: "var(--strand-color-surface-raised)",
                borderColor: "var(--strand-color-rule)",
                color: "var(--strand-color-ink-primary)",
              }}
              value={query}
            />
            <span className="quill-byline whitespace-nowrap">
              {filtered.length} of {guides.length}
            </span>
          </div>
          <label className="flex items-center gap-2 text-sm">
            <span className="quill-byline">Sort</span>
            <select
              className="rounded-md border bg-transparent px-2 py-1.5 text-sm"
              onChange={(e) => setSort(e.target.value as SortBy)}
              style={{
                borderColor: "var(--strand-color-rule)",
                color: "var(--strand-color-ink-primary)",
              }}
              value={sort}
            >
              <option value="author">Author A–Z</option>
              <option value="era">Era</option>
              <option value="recent">Recently updated</option>
              <option value="fidelity">Fidelity</option>
            </select>
          </label>
        </div>

        {filtered.length === 0 ? (
          <p
            className="rounded-lg border border-dashed p-8 text-center text-sm"
            style={{
              borderColor: "var(--strand-color-rule)",
              color: "var(--strand-color-ink-muted)",
            }}
          >
            No guides match those filters. Try loosening one.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((g, i) => (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                key={g.slug}
                transition={{
                  duration: 0.35,
                  delay: Math.min(i * 0.04, 0.32),
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <GuideCard guide={g} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup<T extends string>({
  label,
  options,
  selected,
  onToggle,
  render,
}: {
  label: string;
  options: T[];
  selected: T[];
  onToggle: (v: T) => void;
  render: (v: T) => string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className="text-[0.68rem] font-semibold tracking-widest uppercase"
        style={{ color: "var(--strand-color-accent-kicker)" }}
      >
        {label}
      </span>
      <ul className="flex flex-col gap-1.5">
        {options.map((opt) => {
          const checked = selected.includes(opt);
          return (
            <li key={opt}>
              <label className="flex cursor-pointer items-center gap-2 text-sm">
                <input
                  checked={checked}
                  className="h-3.5 w-3.5 cursor-pointer rounded border"
                  onChange={() => onToggle(opt)}
                  style={{ accentColor: "var(--strand-color-accent-lede)" }}
                  type="checkbox"
                />
                <span
                  style={{
                    color: checked
                      ? "var(--strand-color-ink-primary)"
                      : "var(--strand-color-ink-muted)",
                  }}
                >
                  {render(opt)}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
