import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Sparkle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button, Kicker, Lede, Standfirst } from "../components/editorial";
import { api, type HumanizeJob, queryKeys } from "../lib/api";
import { useSession } from "../lib/auth-client";

const PER_INPUT_CHAR_CAP = 25_000;

export const Route = createFileRoute("/humanize")({
  component: HumanizePage,
  head: () => ({ meta: [{ title: "Humanize — Post Pilot" }] }),
});

function HumanizePage() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const [input, setInput] = useState("");
  const [activeJobId, setActiveJobId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = useMutation({
    mutationFn: (text: string) => api.humanizeSubmit(text),
    onSuccess: (r) => {
      setActiveJobId(r.jobId);
      setError(null);
      queryClient.invalidateQueries({ queryKey: queryKeys.humanizeJobs() });
    },
    onError: (e: Error) => {
      setError(e.message);
      setActiveJobId(null);
    },
  });

  const activeJob = useQuery({
    queryKey: activeJobId
      ? queryKeys.humanizeJob(activeJobId)
      : ["humanize", "noop"],
    queryFn: () =>
      activeJobId
        ? api.humanizeGet(activeJobId)
        : Promise.reject(new Error("no active job")),
    enabled: Boolean(activeJobId),
    refetchInterval: (q) => {
      const status = (q.state.data as HumanizeJob | undefined)?.status;
      return status === "processing" || status === "queued" ? 2000 : false;
    },
  });

  const list = useQuery({
    queryKey: queryKeys.humanizeJobs(),
    queryFn: () => api.humanizeList(),
    enabled: Boolean(session?.user),
  });

  // When the active job finishes, refresh the list so it appears at the top.
  useEffect(() => {
    if (activeJob.data?.status === "done" || activeJob.data?.status === "failed") {
      queryClient.invalidateQueries({ queryKey: queryKeys.humanizeJobs() });
    }
  }, [activeJob.data?.status, queryClient]);

  if (!session?.user) {
    return (
      <Gate>
        <Lede as="h1" size="lg">
          Humanize is a Pro feature.
        </Lede>
        <Standfirst className="max-w-[58ch]">
          Sign in to a paid account to humanize stylized text.
        </Standfirst>
        <div className="flex gap-3">
          <Link
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm"
            style={{
              borderColor: "var(--strand-color-ink-primary)",
              color: "var(--strand-color-ink-primary)",
            }}
            to="/sign-in"
          >
            Sign in
          </Link>
          <Link
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm"
            style={{ borderColor: "var(--strand-color-rule)" }}
            to="/sign-up"
          >
            Create account
          </Link>
        </div>
      </Gate>
    );
  }

  const overCap = input.length > PER_INPUT_CHAR_CAP;
  const job = activeJob.data;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-10 flex items-start justify-between gap-6">
        <div className="flex flex-col gap-3">
          <Kicker>
            <Sparkle size={12} weight="fill" /> Pro · Humanize
          </Kicker>
          <Lede as="h1" size="lg">
            Humanize any text.
          </Lede>
          <Standfirst className="max-w-[58ch]">
            Paste prose — anything: a Quill output, a draft, a generated
            email — and we&rsquo;ll route it through Copyleaks to soften
            telltale machine cadence. Up to{" "}
            {PER_INPUT_CHAR_CAP.toLocaleString()} characters per submission.
          </Standfirst>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Panel label="Input">
          <textarea
            className="min-h-[260px] w-full resize-y bg-transparent text-sm leading-relaxed focus:outline-none"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste the text you want to humanize…"
            style={{ color: "var(--strand-color-ink-primary)" }}
            value={input}
          />
          <div className="mt-3 flex items-center justify-between">
            <span
              className="pp-byline"
              style={{
                color: overCap
                  ? "var(--strand-color-accent-lede)"
                  : "var(--strand-color-ink-muted)",
              }}
            >
              {input.length.toLocaleString()} /{" "}
              {PER_INPUT_CHAR_CAP.toLocaleString()} chars
            </span>
            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setInput("");
                  setActiveJobId(null);
                  setError(null);
                }}
                size="sm"
                type="button"
                variant="ghost"
              >
                Clear
              </Button>
              <Button
                disabled={
                  submit.isPending ||
                  !input.trim() ||
                  overCap ||
                  job?.status === "processing" ||
                  job?.status === "queued"
                }
                onClick={() => submit.mutate(input)}
                size="sm"
                type="button"
              >
                {submit.isPending
                  ? "Submitting…"
                  : job?.status === "processing" || job?.status === "queued"
                    ? "Running…"
                    : "Humanize"}
              </Button>
            </div>
          </div>
        </Panel>

        <Panel label="Output">
          <OutputPane error={error} job={job} />
        </Panel>
      </div>

      <div className="mt-12">
        <div className="mb-4 flex items-baseline justify-between">
          <h2
            className="text-[0.68rem] font-semibold tracking-widest uppercase"
            style={{ color: "var(--strand-color-ink-muted)" }}
          >
            Recent jobs
          </h2>
          {list.data?.items.length ? (
            <span
              className="pp-byline"
              style={{ color: "var(--strand-color-ink-faint)" }}
            >
              last {list.data.items.length}
            </span>
          ) : null}
        </div>
        <HistoryList items={list.data?.items ?? []} loading={list.isLoading} />
      </div>
    </section>
  );
}

function OutputPane({
  error,
  job,
}: {
  error: string | null;
  job: HumanizeJob | undefined;
}) {
  if (error) {
    return (
      <p
        className="min-h-[260px] text-sm"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        {error}
      </p>
    );
  }
  if (!job) {
    return (
      <p
        className="min-h-[260px] text-sm italic"
        style={{ color: "var(--strand-color-ink-faint)" }}
      >
        Submit input on the left and the humanized output appears here.
        Typical wait is 10–60 seconds.
      </p>
    );
  }
  if (job.status === "queued" || job.status === "processing") {
    return (
      <div className="flex min-h-[260px] flex-col items-start gap-3">
        <span
          className="text-[0.68rem] font-semibold tracking-widest uppercase"
          style={{ color: "var(--strand-color-ink-muted)" }}
        >
          {job.status === "queued" ? "Queued" : "Humanizing"}…
        </span>
        <Dots />
        <span
          className="pp-byline"
          style={{ color: "var(--strand-color-ink-faint)" }}
        >
          Polling every 2s. Safe to navigate away — the job continues and
          appears in Recent jobs when done.
        </span>
      </div>
    );
  }
  if (job.status === "failed") {
    return (
      <p
        className="min-h-[260px] text-sm"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        Failed: {job.error ?? "unknown error"}
      </p>
    );
  }
  return (
    <pre
      className="min-h-[260px] whitespace-pre-wrap text-sm leading-relaxed"
      style={{
        color: "var(--strand-color-ink-primary)",
        fontFamily: "var(--strand-type-body-sans)",
      }}
    >
      {job.output}
    </pre>
  );
}

function HistoryList({
  items,
  loading,
}: {
  items: HumanizeJob[];
  loading: boolean;
}) {
  if (loading) {
    return (
      <p
        className="text-sm"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        Loading…
      </p>
    );
  }
  if (items.length === 0) {
    return (
      <p
        className="text-sm italic"
        style={{ color: "var(--strand-color-ink-faint)" }}
      >
        No humanize jobs yet.
      </p>
    );
  }
  return (
    <ul className="flex flex-col gap-2">
      {items.map((j) => (
        <HistoryItem job={j} key={j.id} />
      ))}
    </ul>
  );
}

function HistoryItem({ job }: { job: HumanizeJob }) {
  const [open, setOpen] = useState(false);
  const date = new Date(job.createdAt).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <li
      className="rounded-md border"
      style={{
        borderColor: "var(--strand-color-rule)",
        background: "var(--strand-color-surface-raised)",
      }}
    >
      <button
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm"
        onClick={() => setOpen((v) => !v)}
        style={{ color: "var(--strand-color-ink-primary)" }}
        type="button"
      >
        <span className="truncate">
          {job.input.slice(0, 80)}
          {job.input.length > 80 ? "…" : ""}
        </span>
        <span className="flex shrink-0 items-center gap-3">
          <StatusPill status={job.status} />
          <span
            className="pp-byline tabular-nums"
            style={{ color: "var(--strand-color-ink-muted)" }}
          >
            {date}
          </span>
        </span>
      </button>
      {open ? (
        <div
          className="border-t px-4 py-4 text-sm"
          style={{ borderColor: "var(--strand-color-rule)" }}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Input">{job.input}</Field>
            <Field label="Output">
              {job.output ?? job.error ?? "(no output)"}
            </Field>
          </div>
        </div>
      ) : null}
    </li>
  );
}

function StatusPill({ status }: { status: HumanizeJob["status"] }) {
  const color =
    status === "done"
      ? "var(--strand-color-accent-lede)"
      : status === "failed"
        ? "var(--strand-color-ink-muted)"
        : "var(--strand-color-ink-faint)";
  return (
    <span
      className="rounded-full border px-2 py-0.5 text-[0.62rem] font-semibold tracking-widest uppercase"
      style={{ borderColor: color, color }}
    >
      {status}
    </span>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <span
        className="block pp-byline mb-1"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        {label}
      </span>
      <pre
        className="whitespace-pre-wrap text-sm leading-relaxed"
        style={{
          color: "var(--strand-color-ink-primary)",
          fontFamily: "var(--strand-type-body-sans)",
        }}
      >
        {children}
      </pre>
    </div>
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

function Dots() {
  return (
    <span aria-hidden className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full"
          key={i}
          style={{
            background: "var(--strand-color-accent-lede)",
            animationDelay: `${i * 180}ms`,
          }}
        />
      ))}
    </span>
  );
}

function Gate({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-start gap-5 px-6 py-24">
      <Kicker>
        <Heart size={12} weight="fill" /> Pro
      </Kicker>
      {children}
    </section>
  );
}
