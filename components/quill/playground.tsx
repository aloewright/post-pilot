"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { USE_CASE_PRESETS } from "@/lib/quill/presets";
import { analyzeText, scoreDeterministic } from "@/lib/quill/rubric";
import type { Guide, UseCase } from "@/lib/quill/types";
import { Button } from "@/components/ui/button";
import { Kicker, Lede, Standfirst } from "./editorial";
import { RubricSnapshot } from "./rubric-snapshot";

const MODELS = [
  { id: "claude-sonnet-4-6", label: "Claude Sonnet 4.6" },
  { id: "claude-opus-4-7", label: "Claude Opus 4.7" },
  { id: "gpt-5", label: "GPT-5" },
  { id: "llama-4-70b", label: "Llama 4 70B (Workers AI)" },
] as const;

type Model = (typeof MODELS)[number]["id"];

export function Playground({
  guides,
  initialGuide,
  initialPreset,
}: {
  guides: Guide[];
  initialGuide?: string;
  initialPreset?: UseCase;
}) {
  const [guideSlug, setGuideSlug] = useState<string>(
    initialGuide ?? guides[0]?.slug ?? "",
  );
  const [presetSlug, setPresetSlug] = useState<UseCase | "">(
    initialPreset ?? "",
  );
  const [model, setModel] = useState<Model>("claude-sonnet-4-6");
  const [temperature, setTemperature] = useState(0.7);
  const [input, setInput] = useState(
    "My package hasn't arrived and it's been two weeks.",
  );
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [visibleOutput, setVisibleOutput] = useState("");
  const streamRef = useRef<number | null>(null);

  const guide = useMemo(
    () => guides.find((g) => g.slug === guideSlug) ?? guides[0],
    [guides, guideSlug],
  );
  const preset = useMemo(
    () => USE_CASE_PRESETS.find((p) => p.slug === presetSlug),
    [presetSlug],
  );

  // Stream output into visible one character at a time once set.
  useEffect(() => {
    if (streamRef.current) window.clearInterval(streamRef.current);
    if (!output) {
      setVisibleOutput("");
      return;
    }
    setVisibleOutput("");
    let i = 0;
    streamRef.current = window.setInterval(() => {
      i += Math.max(1, Math.floor(output.length / 80));
      if (i >= output.length) {
        setVisibleOutput(output);
        if (streamRef.current) window.clearInterval(streamRef.current);
      } else {
        setVisibleOutput(output.slice(0, i));
      }
    }, 24);
    return () => {
      if (streamRef.current) window.clearInterval(streamRef.current);
    };
  }, [output]);

  const snapshot = useMemo(() => analyzeText(visibleOutput), [visibleOutput]);
  const { score, details } = useMemo(
    () =>
      guide
        ? scoreDeterministic(snapshot, guide.eval_rubric)
        : { score: 0, details: [] },
    [snapshot, guide],
  );

  const run = async () => {
    if (!guide || running) return;
    setRunning(true);
    setOutput("");
    try {
      // Stubbed sample output that varies by guide so the rubric panel
      // produces different numbers. Wiring to AI Gateway lands in M3.
      const sample = sampleFor(guide.slug, input);
      await new Promise((r) => setTimeout(r, 420));
      setOutput(sample);
    } finally {
      setRunning(false);
    }
  };

  if (!guide) return null;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-3">
        <Kicker>Playground</Kicker>
        <Lede as="h1" size="lg">
          Test any voice against any input.
        </Lede>
        <Standfirst className="max-w-[60ch]">
          Pick a guide, pick a use case, send input. Rubric metrics compute
          locally as output arrives. Model wiring to AI Gateway lands in M3 —
          what you see below is a seeded stub.
        </Standfirst>
      </div>

      <div className="mb-6 grid gap-3 md:grid-cols-4">
        <Control label="Guide">
          <select
            className="quill-select"
            onChange={(e) => setGuideSlug(e.target.value)}
            value={guideSlug}
          >
            {guides.map((g) => (
              <option key={g.slug} value={g.slug}>
                {g.author}
              </option>
            ))}
          </select>
        </Control>

        <Control label="Preset">
          <select
            className="quill-select"
            onChange={(e) => setPresetSlug(e.target.value as UseCase | "")}
            value={presetSlug}
          >
            <option value="">No preset</option>
            {USE_CASE_PRESETS.filter((p) =>
              guide.use_cases.includes(p.slug),
            ).map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </Control>

        <Control label="Model">
          <select
            className="quill-select"
            onChange={(e) => setModel(e.target.value as Model)}
            value={model}
          >
            {MODELS.map((m) => (
              <option key={m.id} value={m.id}>
                {m.label}
              </option>
            ))}
          </select>
        </Control>

        <Control label={`Temperature · ${temperature.toFixed(1)}`}>
          <input
            className="w-full"
            max="1"
            min="0"
            onChange={(e) => setTemperature(Number.parseFloat(e.target.value))}
            step="0.1"
            style={{ accentColor: "var(--strand-color-accent-lede)" }}
            type="range"
            value={temperature}
          />
        </Control>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Panel label="Input">
          <textarea
            className="min-h-[220px] w-full resize-y bg-transparent text-sm focus:outline-none"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste a customer message, a prompt, a paragraph to rewrite…"
            style={{ color: "var(--strand-color-ink-primary)" }}
            value={input}
          />
          <div className="mt-3 flex items-center justify-between">
            <span className="quill-byline">
              {preset ? preset.name + " preset" : "No preset"} ·{" "}
              {guide.author}
            </span>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setInput("");
                  setOutput("");
                }}
                size="sm"
                type="button"
                variant="ghost"
              >
                Clear
              </Button>
              <Button
                disabled={running || !input.trim()}
                onClick={run}
                size="sm"
                type="button"
              >
                {running ? "Running…" : "Run"}
              </Button>
            </div>
          </div>
        </Panel>

        <Panel label="Output">
          <AnimatePresence mode="wait">
            {visibleOutput ? (
              <motion.pre
                animate={{ opacity: 1 }}
                className="min-h-[220px] whitespace-pre-wrap text-sm leading-relaxed"
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                key={`out-${visibleOutput.length}`}
                style={{
                  color: "var(--strand-color-ink-primary)",
                  fontFamily: "var(--strand-type-body-sans)",
                }}
              >
                {visibleOutput}
                {running || visibleOutput.length < output.length ? (
                  <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-[color:var(--strand-color-accent-lede)] align-middle" />
                ) : null}
              </motion.pre>
            ) : (
              <p
                className="min-h-[220px] text-sm italic"
                style={{ color: "var(--strand-color-ink-faint)" }}
              >
                Hit <kbd>Run</kbd> to generate styled output. The deterministic
                rubric metrics will update live as tokens arrive.
              </p>
            )}
          </AnimatePresence>
        </Panel>
      </div>

      {visibleOutput.length > 0 ? (
        <div className="mt-6">
          <RubricSnapshot
            details={details}
            overallPct={Math.round(score * 100)}
            rubric={guide.eval_rubric}
            snapshot={snapshot}
          />
        </div>
      ) : null}

      <style>{`
        .quill-select {
          width: 100%;
          background: var(--strand-color-surface-raised);
          border: 1px solid var(--strand-color-rule);
          color: var(--strand-color-ink-primary);
          border-radius: 0.375rem;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
        }
      `}</style>
    </section>
  );
}

function Control({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-[0.68rem] font-semibold tracking-widest uppercase"
        style={{ color: "var(--strand-color-accent-kicker)" }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

function Panel({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg border p-4"
      style={{
        background: "var(--strand-color-surface-raised)",
        borderColor: "var(--strand-color-rule)",
      }}
    >
      <span
        className="mb-3 block text-[0.68rem] font-semibold tracking-widest uppercase"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        {label}
      </span>
      {children}
    </div>
  );
}

// Seeded sample outputs per guide so the rubric panel has something to
// score before AI Gateway is wired in.
function sampleFor(slug: string, _input: string): string {
  switch (slug) {
    case "hemingway":
      return "Your package did not come. That is on us. We shipped a replacement today. It will reach you by Friday. If it does not, write back. We will send another one.";
    case "austen":
      return "We received your message and, though we must own that the delay in shipping is entirely our own doing, we are very glad to send a replacement by express today. It should reach you Friday, barring some further small disaster of our own making.";
    case "orwell":
      return "Your package has not arrived. We sent it on the 8th. It did not ship because of a warehouse error. We are sending a replacement today. It will arrive on Friday. If it does not, write back and we will send another.";
    case "didion":
      return "It is Tuesday, the 22nd of April, and your package has not arrived. The truck came and went. The replacement goes out today. It will be at your door Friday. This is the last time we will say it was our fault.";
    case "baldwin":
      return "We owe you an honest answer, and not the kind that hides itself behind shipping codes and estimated dates, and so we will say plainly: the package did not reach you because we failed to send it, and today, with that failure in front of us, we are sending another.";
    case "le-guin":
      return "The package did not arrive. The warehouse is a long wooden building outside town, and one of the shelves there was mislabeled; that is why yours was missed. A replacement has gone out this morning. You should see it by Friday.";
    case "borges":
      return "It is said, though the shipping manifest denies it, that your package was for some two weeks held in a warehouse indistinguishable from any other. A second package, identical to the first, has today been dispatched along a route we trust more than the first.";
    case "woolf":
      return "And only Tuesday, she thought — only Tuesday, with the package still missing, and the long afternoon ahead of it, the sort of afternoon that takes a small unhappiness and gives it the whole weight of a week; but today, at last, another was sent, and would be there Friday.";
    case "vonnegut":
      return "Your package didn't come. That's on us.\n\nWe shipped another one today. You'll have it by Friday.\n\nIf it doesn't show up, write back and we'll try again. So it goes.";
    case "wilde":
      return "The only thing worse than a missing package is a missing package that arrives twice. Yours has done neither. A replacement leaves today, and should be at your door by Friday — more punctual, one hopes, than the first.";
    case "poe":
      return "During the whole of that dull, dark, and parcel-less fortnight, your package lay unshipped in a warehouse whose aisles we would rather not describe. The matter is resolved. Another parcel departs this day. By Friday it shall be upon your doorstep.";
    case "carver":
      return "I got your email. The order didn't ship. I'm sorry. I'm sending another one today. You'll have it Friday.";
    case "asimov":
      return "Your package did not arrive because it was never shipped. This happens when a warehouse misroutes a label, which is what happened here. A replacement went out today. It will reach you by Friday.";
    default:
      return "Thanks for reaching out. We're sending a replacement today. You'll have it by Friday.";
  }
}
