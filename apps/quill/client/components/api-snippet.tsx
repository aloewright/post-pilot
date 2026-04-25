import { CopyButton } from "./copy-button";
import { Kicker, Lede, Standfirst } from "./editorial";

const SNIPPET = `// 1. Fetch a guide from your Quill Worker
const guide = await fetch("/v1/guides/hemingway").then((r) => r.json());

// 2. Use its system prompt with any LLM (routed through AI Gateway)
const completion = await anthropic.messages.create({
  model: "claude-sonnet-4-6",
  system: guide.system_prompt,
  messages: [{ role: "user", content: input }],
});`;

export function ApiSnippet() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <Kicker>Ship in five minutes</Kicker>
          <Lede as="h2" size="md">
            Fetch a guide. Drop it in.
          </Lede>
          <Standfirst>
            Every guide exports a system prompt, a structured JSON spec, and
            an eval rubric. Use them with the AI Gateway of your choice, or
            hit your own Quill Worker directly.
          </Standfirst>
        </div>

        <div
          className="rounded-lg border"
          style={{
            background: "var(--strand-color-surface-raised)",
            borderColor: "var(--strand-color-rule)",
          }}
        >
          <div
            className="flex items-center justify-between border-b px-4 py-2.5"
            style={{ borderColor: "var(--strand-color-rule)" }}
          >
            <span className="quill-byline">example.ts</span>
            <CopyButton size="sm" value={SNIPPET} variant="ghost" />
          </div>
          <pre className="quill-mono overflow-auto p-4 text-[0.82rem]">
            <code>{SNIPPET}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
