import { useMutation, useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { USE_CASE_PRESETS } from "../../src/lib/presets";
import { analyzeText, scoreDeterministic } from "../../src/lib/rubric";
import type { Guide, UseCase } from "../../src/lib/types";
import { api, queryKeys } from "../lib/api";
import { Button, Kicker, Lede, Standfirst } from "./editorial";
import { RubricSnapshot } from "./rubric-snapshot";

const PLAYGROUND_MODEL = "@cf/zai-org/glm-4.7-flash";

export function PlaygroundView({
  initialGuide,
  initialPreset,
}: {
  initialGuide?: string;
  initialPreset?: UseCase;
}) {
  const guidesQuery = useQuery({
    queryKey: queryKeys.guides({ all: true }),
    queryFn: () => api.listGuides({}),
  });

  const guides = guidesQuery.data?.items ?? [];
  const fallback = guides[0]?.slug;
  const [guideSlug, setGuideSlug] = useState<string>(
    initialGuide ?? fallback ?? ""
  );
  const [presetSlug, setPresetSlug] = useState<UseCase | "">(
    initialPreset ?? ""
  );
  const [temperature, setTemperature] = useState(0.7);
  const [input, setInput] = useState(
    "My package hasn't arrived and it's been two weeks."
  );
  const [visibleOutput, setVisibleOutput] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const streamRef = useRef<number | null>(null);

  // Once guides arrive, default to the first one if none selected.
  useEffect(() => {
    if (!guideSlug && fallback) {
      setGuideSlug(fallback);
    }
  }, [guideSlug, fallback]);

  const guideDetailQuery = useQuery({
    queryKey: queryKeys.guide(guideSlug),
    queryFn: () => api.getGuide(guideSlug),
    enabled: Boolean(guideSlug),
  });
  const guide: Guide | undefined = guideDetailQuery.data;

  const apply = useMutation({
    mutationFn: () =>
      api.apply({
        guide: guideSlug,
        preset: presetSlug || undefined,
        model: PLAYGROUND_MODEL,
        input,
        temperature,
      }),
  });

  const output = apply.data?.output ?? "";

  // Suppress the loader for runs that come back fast — only show it once a
  // request has been in flight for >500ms, so quick stub responses don't
  // flash a spinner.
  useEffect(() => {
    if (!apply.isPending) {
      setShowLoader(false);
      return;
    }
    const t = window.setTimeout(() => setShowLoader(true), 500);
    return () => window.clearTimeout(t);
  }, [apply.isPending]);

  // Stream output character-by-character into the visible output once it
  // arrives. This is purely cosmetic — real streaming wires through AI
  // Gateway in M3.
  useEffect(() => {
    if (streamRef.current) {
      window.clearInterval(streamRef.current);
    }
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
        if (streamRef.current) {
          window.clearInterval(streamRef.current);
        }
      } else {
        setVisibleOutput(output.slice(0, i));
      }
    }, 24);
    return () => {
      if (streamRef.current) {
        window.clearInterval(streamRef.current);
      }
    };
  }, [output]);

  const snapshot = useMemo(() => analyzeText(visibleOutput), [visibleOutput]);
  const { score, details } = useMemo(
    () =>
      guide
        ? scoreDeterministic(snapshot, guide.eval_rubric)
        : { score: 0, details: [] },
    [snapshot, guide]
  );

  if (guidesQuery.isLoading) {
    return (
      <p
        className="mx-auto max-w-6xl px-6 py-24 text-center"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        Loading playground…
      </p>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-10 flex flex-col gap-3">
        <Kicker>Playground</Kicker>
        <Lede as="h1" size="lg">
          Test any voice against any input.
        </Lede>
        <Standfirst className="max-w-[60ch]">
          Pick a guide, pick a use case, send input. Rubric metrics compute
          locally as output arrives. AI Gateway wiring lands when{" "}
          <code>AI_GATEWAY_BASE_URL</code> is set; until then the Worker returns
          a deterministic stub.
        </Standfirst>
      </div>

      <div className="mb-6 grid gap-3 md:grid-cols-3">
        <Control label="Guide">
          <select
            className="pp-select"
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
            className="pp-select"
            onChange={(e) => setPresetSlug(e.target.value as UseCase | "")}
            value={presetSlug}
          >
            <option value="">No preset</option>
            {USE_CASE_PRESETS.filter((p) =>
              guide ? guide.use_cases.includes(p.slug) : true
            ).map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
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
            <span className="pp-byline">
              {presetSlug
                ? USE_CASE_PRESETS.find((p) => p.slug === presetSlug)?.name +
                  " preset"
                : "No preset"}
              {guide ? ` · ${guide.author}` : ""}
            </span>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setInput("");
                  apply.reset();
                }}
                size="sm"
                type="button"
                variant="ghost"
              >
                Clear
              </Button>
              <Button
                disabled={apply.isPending || !input.trim() || !guideSlug}
                onClick={() => apply.mutate()}
                size="sm"
                type="button"
              >
                {apply.isPending ? "Running…" : "Run"}
              </Button>
            </div>
          </div>
        </Panel>

        <Panel label="Output">
          <AnimatePresence mode="wait">
            {apply.error ? (
              <p
                className="min-h-[220px] text-sm"
                key="err"
                style={{ color: "var(--strand-color-ink-muted)" }}
              >
                Error: {(apply.error as Error).message}
              </p>
            ) : showLoader && !visibleOutput ? (
              <Loader key="loader" />
            ) : visibleOutput ? (
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
                {visibleOutput.length < output.length ? (
                  <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-[color:var(--strand-color-accent-lede)] align-middle" />
                ) : null}
              </motion.pre>
            ) : (
              <p
                className="min-h-[220px] text-sm italic"
                key="placeholder"
                style={{ color: "var(--strand-color-ink-faint)" }}
              >
                Hit <kbd>Run</kbd> to call <code>POST /v1/apply</code>. The
                deterministic rubric metrics will update as the output streams
                in.
              </p>
            )}
          </AnimatePresence>
        </Panel>
      </div>

      {visibleOutput.length > 0 && guide ? (
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
        .pp-select {
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
    // biome-ignore lint/a11y/noLabelWithoutControl: control is passed via children
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

function Loader() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      aria-busy="true"
      aria-live="polite"
      className="flex min-h-[220px] flex-col items-start gap-3"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      role="status"
    >
      <span
        className="text-[0.68rem] font-semibold tracking-widest uppercase"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        Generating…
      </span>
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            animate={{ opacity: [0.25, 1, 0.25] }}
            className="block h-1.5 w-1.5 rounded-full"
            key={i}
            style={{ background: "var(--strand-color-accent-lede)" }}
            transition={{
              duration: 1.1,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.18,
            }}
          />
        ))}
      </div>
    </motion.div>
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
