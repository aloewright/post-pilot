import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { USE_CASE_PRESETS } from "../../src/lib/presets";
import { analyzeText, scoreDeterministic } from "../../src/lib/rubric";
import type { Guide, UseCase } from "../../src/lib/types";
import {
  api,
  type HumanizeJob,
  type HumanizeJobReport,
  queryKeys,
} from "../lib/api";
import { useSession } from "../lib/auth-client";
import { Button, Standfirst } from "./editorial";
import { RubricSnapshot } from "./rubric-snapshot";

const PLAYGROUND_MODEL = "@cf/zai-org/glm-4.7-flash";

type RunStage =
  | { kind: "idle" }
  | { kind: "stylizing" }
  | { kind: "submitting-humanize" }
  | { kind: "polling-humanize"; jobId: string }
  | { kind: "done" }
  | { kind: "error"; message: string };

export function PlaygroundView({
  initialGuide,
  initialPreset,
}: {
  initialGuide?: string;
  initialPreset?: UseCase;
}) {
  const { data: session } = useSession();
  const queryClient = useQueryClient();

  // Pull every guide so the dropdown surfaces the full catalogue, not just
  // the server's default page (50). 500 is the server-enforced cap and well
  // above current corpus size.
  const guidesQuery = useQuery({
    queryKey: queryKeys.guides({ all: true }),
    queryFn: () => api.listGuides({ limit: 500 }),
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
  const [humanizeOn, setHumanizeOn] = useState(false);
  const [humanizeExtraPass, setHumanizeExtraPass] = useState(false);
  const [stage, setStage] = useState<RunStage>({ kind: "idle" });
  const [styledOutput, setStyledOutput] = useState("");
  const [humanizedOutput, setHumanizedOutput] = useState<string | null>(null);
  const [humanizeReport, setHumanizeReport] =
    useState<HumanizeJobReport | null>(null);
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

  // Credit balance + costs. Refetched after every billable action so the
  // header pill stays in sync without a full reload.
  const meQuery = useQuery({
    queryKey: queryKeys.me(),
    queryFn: () => api.me(),
  });
  const me = meQuery.data;

  const checkoutMutation = useMutation({
    mutationFn: () => api.billingCheckout(),
    onSuccess: (r) => {
      window.location.href = r.url;
    },
  });

  // Polling humanize job status while we're waiting on Copyleaks.
  const humanizeJob = useQuery({
    queryKey:
      stage.kind === "polling-humanize"
        ? queryKeys.humanizeJob(stage.jobId)
        : ["humanize", "noop"],
    queryFn: () =>
      stage.kind === "polling-humanize"
        ? api.humanizeGet(stage.jobId)
        : Promise.reject(new Error("no active job")),
    enabled: stage.kind === "polling-humanize",
    refetchInterval: (q) => {
      const status = (q.state.data as HumanizeJob | undefined)?.status;
      return status === "processing" || status === "queued" ? 2000 : false;
    },
  });

  // When the humanize job finishes, capture output and reset stage.
  useEffect(() => {
    if (stage.kind !== "polling-humanize") {
      return;
    }
    const j = humanizeJob.data;
    if (j?.status === "done" && j.output) {
      setHumanizedOutput(j.output);
      setHumanizeReport({
        localScore: j.localScore ?? null,
        copyleaksStatus: j.copyleaksStatus ?? "skipped",
        copyleaksScore: j.copyleaksScore ?? null,
        flaggedSegments: j.flaggedSegments ?? [],
      });
      setStage({ kind: "done" });
      queryClient.invalidateQueries({ queryKey: queryKeys.me() });
    } else if (j?.status === "failed") {
      setStage({
        kind: "error",
        message: `Humanize failed: ${j.error ?? "unknown error"}`,
      });
      queryClient.invalidateQueries({ queryKey: queryKeys.me() });
    }
  }, [stage, humanizeJob.data, queryClient]);

  async function run() {
    if (!input.trim() || !guideSlug) {
      return;
    }
    setStage({ kind: "stylizing" });
    setStyledOutput("");
    setHumanizedOutput(null);
    setHumanizeReport(null);

    let stylized: string;
    try {
      const r = await api.apply({
        guide: guideSlug,
        preset: presetSlug || undefined,
        model: PLAYGROUND_MODEL,
        input,
        temperature,
      });
      stylized = r.output;
      setStyledOutput(stylized);
      queryClient.invalidateQueries({ queryKey: queryKeys.me() });
    } catch (e) {
      setStage({ kind: "error", message: (e as Error).message });
      return;
    }

    if (!humanizeOn) {
      setStage({ kind: "done" });
      return;
    }

    setStage({ kind: "submitting-humanize" });
    try {
      const r = await api.humanizeSubmit(stylized, humanizeExtraPass);
      // The POST response already carries the full report — capture it now so
      // the UI can render the Detection Report immediately, even if the GET
      // poll resolves before the data arrives.
      setHumanizeReport({
        localScore: r.localScore ?? null,
        copyleaksStatus: r.copyleaksStatus ?? "skipped",
        copyleaksScore: r.copyleaksScore ?? null,
        flaggedSegments: r.flaggedSegments ?? [],
      });
      setStage({ kind: "polling-humanize", jobId: r.jobId });
      queryClient.invalidateQueries({ queryKey: queryKeys.me() });
    } catch (e) {
      setStage({
        kind: "error",
        message: `Humanize submit failed: ${(e as Error).message}`,
      });
    }
  }

  const output = humanizedOutput ?? styledOutput;
  const isRunning =
    stage.kind === "stylizing" ||
    stage.kind === "submitting-humanize" ||
    stage.kind === "polling-humanize";
  const buttonLabel = (() => {
    if (stage.kind === "stylizing") {
      return "Stylizing…";
    }
    if (stage.kind === "submitting-humanize") {
      return "Submitting…";
    }
    if (stage.kind === "polling-humanize") {
      return "Humanizing…";
    }
    return humanizeOn ? "Stylize + humanize" : "Run";
  })();

  const stylizeCost = input.length * (me?.costs.STYLIZE_PER_CHAR ?? 1);
  const humanizeCost = input.length * (me?.costs.HUMANIZE_PER_CHAR ?? 5);
  const totalCost = stylizeCost + (humanizeOn ? humanizeCost : 0);
  const balance = me?.balance ?? 0;
  const insufficient = me?.authenticated && totalCost > balance;

  // Clear the detection report whenever the user edits the input — a stale
  // report doesn't describe the current text.
  useEffect(() => {
    setHumanizeReport(null);
  }, [input]);

  // 500ms debounce so fast responses don't flash a spinner.
  useEffect(() => {
    if (!isRunning) {
      setShowLoader(false);
      return;
    }
    const t = window.setTimeout(() => setShowLoader(true), 500);
    return () => window.clearTimeout(t);
  }, [isRunning]);

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
      <div className="mb-10 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-6">
          <Standfirst className="max-w-[60ch]">
            Pick author, use case, and enter your prompt to receive an example
            output. Toggle Humanize to soften AI cadence via Copyleaks.
          </Standfirst>
          <BalancePill
            authenticated={Boolean(me?.authenticated)}
            balance={balance}
            onBuy={() => checkoutMutation.mutate()}
            buying={checkoutMutation.isPending}
          />
        </div>
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
          <div className="mt-3 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-col gap-1.5">
                <HumanizeToggle
                  authenticated={Boolean(me?.authenticated)}
                  disabled={isRunning}
                  on={humanizeOn}
                  onToggle={() => setHumanizeOn((v) => !v)}
                />
                {humanizeOn ? (
                  <label
                    className="flex items-center gap-2 pl-5 text-[0.7rem]"
                    style={{ color: "var(--strand-color-ink-muted)" }}
                  >
                    <input
                      checked={humanizeExtraPass}
                      disabled={isRunning}
                      onChange={(e) =>
                        setHumanizeExtraPass(e.target.checked)
                      }
                      style={{
                        accentColor: "var(--strand-color-accent-lede)",
                      }}
                      type="checkbox"
                    />
                    Extra pass (slower, more thorough)
                  </label>
                ) : null}
              </div>
              <span
                className="pp-byline"
                style={{
                  color: insufficient
                    ? "var(--strand-color-accent-lede)"
                    : "var(--strand-color-ink-muted)",
                }}
              >
                {humanizeOn
                  ? `${stylizeCost.toLocaleString()} + ${humanizeCost.toLocaleString()} = ${totalCost.toLocaleString()} credits`
                  : `${totalCost.toLocaleString()} credits`}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="pp-byline">
                {presetSlug
                  ? `${USE_CASE_PRESETS.find((p) => p.slug === presetSlug)?.name} preset`
                  : "No preset"}
                {guide ? ` · ${guide.author}` : ""}
              </span>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setInput("");
                    setStyledOutput("");
                    setHumanizedOutput(null);
                    setHumanizeReport(null);
                    setStage({ kind: "idle" });
                  }}
                  size="sm"
                  type="button"
                  variant="ghost"
                >
                  Clear
                </Button>
                <Button
                  disabled={
                    isRunning ||
                    !input.trim() ||
                    !guideSlug ||
                    Boolean(insufficient)
                  }
                  onClick={run}
                  size="sm"
                  type="button"
                >
                  {buttonLabel}
                </Button>
              </div>
            </div>
            {insufficient ? (
              <div
                className="rounded-md border px-3 py-2 text-xs"
                style={{
                  borderColor: "var(--strand-color-accent-lede)",
                  color: "var(--strand-color-ink-primary)",
                  background: "var(--strand-color-surface-raised)",
                }}
              >
                Need {totalCost.toLocaleString()} credits, have{" "}
                {balance.toLocaleString()}.{" "}
                <button
                  className="underline"
                  disabled={checkoutMutation.isPending}
                  onClick={() => checkoutMutation.mutate()}
                  type="button"
                >
                  {checkoutMutation.isPending ? "Opening…" : "Buy credits"}
                </button>
              </div>
            ) : null}
            {!session?.user ? (
              <div
                className="rounded-md border px-3 py-2 text-xs"
                style={{
                  borderColor: "var(--strand-color-rule)",
                  color: "var(--strand-color-ink-muted)",
                }}
              >
                Sign in to run the playground — new accounts get welcome
                credits to try it out.
              </div>
            ) : null}
          </div>
        </Panel>

        <Panel
          label={
            humanizedOutput ? "Output (humanized)" : "Output"
          }
        >
          <AnimatePresence mode="wait">
            {stage.kind === "error" ? (
              <p
                className="min-h-[220px] text-sm"
                key="err"
                style={{ color: "var(--strand-color-ink-muted)" }}
              >
                {stage.message}
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

      {humanizeReport ? (
        <div
          className="mt-6 rounded-md border p-4"
          style={{
            borderColor: "var(--strand-color-rule)",
            background: "var(--strand-color-surface-raised)",
          }}
        >
          <h3
            className="mb-3 text-[0.68rem] font-semibold tracking-widest uppercase"
            style={{ color: "var(--strand-color-accent-kicker)" }}
          >
            Detection Report
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {humanizeReport.localScore !== null ? (
              <div>
                <div
                  className="text-[0.62rem] tracking-widest uppercase"
                  style={{ color: "var(--strand-color-ink-muted)" }}
                >
                  Local human-likely
                </div>
                <div
                  className="text-2xl tabular-nums"
                  style={{ color: "var(--strand-color-ink-primary)" }}
                >
                  {humanizeReport.localScore}/100
                </div>
              </div>
            ) : null}
            <div>
              <div
                className="text-[0.62rem] tracking-widest uppercase"
                style={{ color: "var(--strand-color-ink-muted)" }}
              >
                Copyleaks AI probability
              </div>
              {humanizeReport.copyleaksStatus === "ok" &&
              humanizeReport.copyleaksScore !== null ? (
                <div
                  className="text-2xl tabular-nums"
                  style={{
                    color:
                      humanizeReport.copyleaksScore < 30
                        ? "var(--strand-color-ink-primary)"
                        : humanizeReport.copyleaksScore < 60
                          ? "var(--strand-color-accent-kicker)"
                          : "var(--strand-color-accent-lede)",
                  }}
                >
                  {humanizeReport.copyleaksScore}%
                </div>
              ) : (
                <div
                  className="text-sm"
                  style={{ color: "var(--strand-color-ink-muted)" }}
                >
                  {humanizeReport.copyleaksStatus === "skipped"
                    ? "Not configured"
                    : "Scan failed"}
                </div>
              )}
            </div>
          </div>
          {humanizeReport.flaggedSegments.length > 0 ? (
            <div className="mt-4">
              <div
                className="mb-2 text-[0.62rem] tracking-widest uppercase"
                style={{ color: "var(--strand-color-ink-muted)" }}
              >
                Flagged sentences ({humanizeReport.flaggedSegments.length})
              </div>
              <ul className="space-y-2 text-sm">
                {humanizeReport.flaggedSegments.map((s, i) => (
                  <li
                    className="rounded p-2"
                    key={`${i}-${s.text.slice(0, 24)}`}
                    style={{
                      background: "var(--strand-color-surface-canvas)",
                      borderLeft:
                        "3px solid var(--strand-color-accent-lede)",
                    }}
                  >
                    <span
                      className="mr-2 text-xs tabular-nums"
                      style={{ color: "var(--strand-color-ink-muted)" }}
                    >
                      {s.aiScore}%
                    </span>
                    <span
                      style={{ color: "var(--strand-color-ink-primary)" }}
                    >
                      {s.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
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

function BalancePill({
  authenticated,
  balance,
  buying,
  onBuy,
}: {
  authenticated: boolean;
  balance: number;
  buying: boolean;
  onBuy: () => void;
}) {
  if (!authenticated) {
    return null;
  }
  return (
    <div className="flex items-center gap-3">
      <div
        className="rounded-full border px-3 py-1.5 text-xs tabular-nums"
        style={{
          borderColor: "var(--strand-color-rule)",
          background: "var(--strand-color-surface-raised)",
          color: "var(--strand-color-ink-primary)",
        }}
        title="Credit balance"
      >
        <span style={{ color: "var(--strand-color-ink-muted)" }}>balance</span>{" "}
        {balance.toLocaleString()}c
      </div>
      <button
        className="rounded-full border px-3 py-1.5 text-xs"
        disabled={buying}
        onClick={onBuy}
        style={{
          borderColor: "var(--strand-color-ink-primary)",
          color: "var(--strand-color-ink-primary)",
        }}
        type="button"
      >
        {buying ? "Opening…" : "Buy credits"}
      </button>
    </div>
  );
}

function HumanizeToggle({
  authenticated,
  disabled,
  on,
  onToggle,
}: {
  authenticated: boolean;
  disabled: boolean;
  on: boolean;
  onToggle: () => void;
}) {
  return (
    <label
      className="flex items-center gap-2 text-xs"
      style={{
        color: authenticated
          ? "var(--strand-color-ink-primary)"
          : "var(--strand-color-ink-muted)",
        cursor: authenticated && !disabled ? "pointer" : "not-allowed",
      }}
    >
      <input
        checked={on}
        disabled={disabled || !authenticated}
        onChange={onToggle}
        style={{ accentColor: "var(--strand-color-accent-lede)" }}
        type="checkbox"
      />
      <span className="font-semibold tracking-wider uppercase">
        Humanize output
      </span>
      {!authenticated ? (
        <span
          className="text-[0.62rem] tracking-widest uppercase"
          style={{ color: "var(--strand-color-ink-faint)" }}
        >
          (sign in)
        </span>
      ) : null}
    </label>
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
