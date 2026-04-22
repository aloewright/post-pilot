import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Byline,
  Chip,
  Column,
  Kicker,
  Lede,
  Pull,
  Rule,
  Standfirst,
} from "@/components/quill/editorial";
import { FidelityPanel } from "@/components/quill/fidelity-panel";
import { GuideActions } from "@/components/quill/guide-actions";
import { allSlugs, getGuide } from "@/lib/quill/guides";
import { USE_CASE_LABELS, VOICE_LABELS } from "@/lib/quill/utils";

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return { title: "Guide not found — Quill" };
  return {
    title: `${g.author} — Quill`,
    description: g.standfirst,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const featured = guide.exemplars[0];

  return (
    <article className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <nav
        className="mb-8 flex items-center gap-2 text-sm"
        style={{ color: "var(--strand-color-ink-muted)" }}
      >
        <Link className="hover:underline" href="/quill/library">
          Library
        </Link>
        <span>/</span>
        <span style={{ color: "var(--strand-color-ink-primary)" }}>
          {guide.author}
        </span>
      </nav>

      <header className="mb-10 flex flex-col gap-4">
        <Kicker>{guide.kicker}</Kicker>
        <Lede as="h1" size="xl">
          {guide.author}
        </Lede>
        <Standfirst className="max-w-[56ch] text-xl">
          {guide.standfirst}
        </Standfirst>
        <Byline className="mt-1">
          Curated by {guide.curator} · Updated {guide.updated_at}
        </Byline>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {guide.voice_axes.map((v) => (
            <Chip key={v}>{VOICE_LABELS[v]}</Chip>
          ))}
          {guide.use_cases.map((u) => (
            <Chip key={u}>{USE_CASE_LABELS[u]}</Chip>
          ))}
        </div>
      </header>

      <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_320px]">
        <Column>
          <p className="quill-standfirst mb-8 text-[1.05rem]">
            {guide.description}
          </p>

          <section className="mb-10">
            <Kicker>Voice spec</Kicker>
            <dl className="mt-3 grid grid-cols-1 gap-y-3 text-sm sm:grid-cols-[140px_1fr]">
              <dt style={{ color: "var(--strand-color-ink-muted)" }}>
                Sentence length
              </dt>
              <dd>
                mean {guide.voice_spec.sentence_length.mean}w / max{" "}
                {guide.voice_spec.sentence_length.max}w
              </dd>
              <dt style={{ color: "var(--strand-color-ink-muted)" }}>
                Register
              </dt>
              <dd>{guide.voice_spec.vocabulary_register}</dd>
              <dt style={{ color: "var(--strand-color-ink-muted)" }}>
                Syntax
              </dt>
              <dd>{guide.voice_spec.syntax}</dd>
              <dt style={{ color: "var(--strand-color-ink-muted)" }}>
                Figurative
              </dt>
              <dd>{guide.voice_spec.figurative_language}</dd>
              <dt style={{ color: "var(--strand-color-ink-muted)" }}>
                Pacing
              </dt>
              <dd>{guide.voice_spec.pacing}</dd>
            </dl>
          </section>

          <Rule />

          <section className="mb-10 grid gap-8 md:grid-cols-2">
            <div>
              <Kicker>Do</Kicker>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
                {guide.do.map((line) => (
                  <li className="flex gap-2" key={line}>
                    <span
                      style={{
                        color: "var(--strand-color-accent-lede)",
                      }}
                    >
                      ·
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Kicker>Don&rsquo;t</Kicker>
              <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed">
                {guide.dont.map((line) => (
                  <li className="flex gap-2" key={line}>
                    <span style={{ color: "var(--strand-color-ink-faint)" }}>
                      ×
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {featured ? (
            <>
              <Rule />
              <section className="mb-10">
                <Kicker>{featured.label}</Kicker>
                <Pull
                  attribution={
                    featured.is_generated
                      ? `${featured.source}`
                      : featured.source
                  }
                >
                  {featured.content}
                </Pull>
              </section>
            </>
          ) : null}

          <Rule />

          <section className="mb-10">
            <Kicker>System prompt</Kicker>
            <pre
              className="quill-mono mt-3 overflow-auto rounded-md border p-4 text-[0.82rem]"
              style={{
                background: "var(--strand-color-surface-raised)",
                borderColor: "var(--strand-color-rule)",
              }}
            >
              <code>{guide.system_prompt}</code>
            </pre>
          </section>

          <Rule />

          <section className="mb-10">
            <Kicker>Eval rubric</Kicker>
            <div className="mt-3 flex flex-col gap-6">
              <div>
                <h3 className="quill-byline mb-2">Deterministic metrics</h3>
                <ul className="flex flex-col gap-2 text-sm">
                  {guide.eval_rubric.deterministic.map((m) => (
                    <li className="flex items-baseline gap-3" key={m.metric}>
                      <span
                        className="quill-mono text-xs"
                        style={{ color: "var(--strand-color-ink-muted)" }}
                      >
                        {m.metric} {m.op} {m.value}
                      </span>
                      <span
                        className="quill-byline ml-auto"
                        style={{ color: "var(--strand-color-ink-faint)" }}
                      >
                        weight {m.weight.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="quill-byline mb-2">Judge criteria</h3>
                <ul className="flex flex-col gap-3 text-sm">
                  {guide.eval_rubric.judge_criteria.map((c) => (
                    <li key={c.id}>
                      <span
                        className="font-medium"
                        style={{ color: "var(--strand-color-ink-primary)" }}
                      >
                        {c.id}
                      </span>
                      <span
                        className="ml-2 quill-byline"
                        style={{ color: "var(--strand-color-ink-muted)" }}
                      >
                        weight {c.weight.toFixed(2)}
                      </span>
                      <p
                        className="mt-1 text-sm"
                        style={{ color: "var(--strand-color-ink-muted)" }}
                      >
                        {c.prompt}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="quill-byline">
                Pass threshold:{" "}
                <span
                  className="tabular-nums"
                  style={{ color: "var(--strand-color-accent-lede)" }}
                >
                  {Math.round(guide.eval_rubric.pass_threshold * 100)}%
                </span>
              </p>
            </div>
          </section>
        </Column>

        <aside className="flex flex-col gap-6 md:sticky md:top-24 md:self-start">
          <GuideActions guide={guide} />
          <FidelityPanel scores={guide.fidelity} />
        </aside>
      </div>
    </article>
  );
}
