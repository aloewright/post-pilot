import { createFileRoute } from "@tanstack/react-router";
import {
  Column,
  Kicker,
  Lede,
  Pull,
  Rule,
  Standfirst,
} from "../components/editorial";

export const Route = createFileRoute("/docs")({
  component: DocsPage,
  head: () => ({
    meta: [{ title: "Docs — Post Pilot" }],
  }),
});

const QUICKSTART = `// 1. Fetch a guide.
const guide = await fetch(
  "https://your-postpilot.workers.dev/v1/guides/hemingway"
).then((r) => r.json());

// 2. Route through Cloudflare AI Gateway (dynamic route).
const r = await fetch(
  \`https://gateway.ai.cloudflare.com/v1/\${ACCOUNT_ID}/\${GATEWAY_ID}/compat/chat/completions\`,
  {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "cf-aig-authorization": \`Bearer \${CF_AIG_TOKEN}\`,
      "cf-aig-zdr": "true",
    },
    body: JSON.stringify({
      model: "dynamic/text_gen",
      messages: [
        { role: "system", content: guide.system_prompt },
        { role: "user", content: input },
      ],
    }),
  }
).then((r) => r.json());

console.log(r.choices[0].message.content);`;

const APPLY = `// POST /v1/apply — render guide+preset against an input.
const res = await fetch("/v1/apply", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({
    guide: "hemingway",
    preset: "email",
    input: "Tell a customer their order is delayed.",
  }),
}).then((r) => r.json());

// Returns { output, snapshot, deterministic_score, deterministic_details, judge }
console.log(res.output);`;

const CURL = `curl -sS https://your-postpilot.workers.dev/v1/guides/hemingway \\
  | jq '.system_prompt'`;

function CodeBlock({ children }: { children: string }) {
  return (
    <pre
      className="pp-mono overflow-auto rounded-lg border p-4"
      style={{
        background: "var(--strand-color-surface-raised)",
        borderColor: "var(--strand-color-rule)",
        fontSize: "0.82rem",
      }}
    >
      <code>{children}</code>
    </pre>
  );
}

function DocsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Kicker>Docs</Kicker>
        <Lede as="h1" size="lg">
          Drop a voice into your LLM.
        </Lede>
        <Standfirst className="max-w-[52ch]">
          Post Pilot ships every guide as a system prompt, a structured JSON
          spec, and a deterministic eval rubric. Below is what you need to
          know to wire one in.
        </Standfirst>
      </div>

      <Column>
        <h2 className="pp-lede mt-0 text-3xl">Quickstart</h2>
        <p>
          Fetch any guide by slug, take its <code>system_prompt</code>, and
          hand it to your LLM call. All model calls in your application
          should route through Cloudflare AI Gateway dynamic routes — never
          direct provider SDKs — so you get caching, observability,
          fallbacks, and BYOK virtual keys for free.
        </p>
        <CodeBlock>{QUICKSTART}</CodeBlock>

        <h2 className="pp-lede mt-12 text-3xl">The guide shape</h2>
        <p>Every guide is a JSON object with these fields:</p>
        <ul>
          <li>
            <code>system_prompt</code> — the prose system prompt. Drop into
            any chat call.
          </li>
          <li>
            <code>voice_spec</code> — structured constraints (sentence
            length, vocabulary register, syntax notes, pacing).
          </li>
          <li>
            <code>do</code> / <code>dont</code> — short imperative lists
            distilled from the voice.
          </li>
          <li>
            <code>exemplars</code> — short labeled passages illustrating the
            guide on real use cases.
          </li>
          <li>
            <code>eval_rubric</code> — deterministic metrics (e.g.{" "}
            <code>avg_sentence_length &lt;= 14</code>) and judge criteria
            for measuring fidelity.
          </li>
        </ul>

        <h2 className="pp-lede mt-12 text-3xl">Endpoints</h2>
        <p>
          The Worker exposes a small REST surface at <code>/v1/*</code>:
        </p>
        <ul>
          <li>
            <code>GET /v1/guides</code> — list. Filters: <code>era</code>,{" "}
            <code>useCase</code>, <code>voice</code>, <code>q</code>.
          </li>
          <li>
            <code>GET /v1/guides/:slug[?format=json|yaml|prompt]</code> —
            single guide in the format you want.
          </li>
          <li>
            <code>GET /v1/guides/:slug/exemplars</code> — examples only.
          </li>
          <li>
            <code>GET /v1/guides/:slug/rubric</code> — eval rubric only.
          </li>
          <li>
            <code>GET /v1/presets</code> — use-case presets.
          </li>
          <li>
            <code>POST /v1/apply</code> — render guide+preset against input
            and return text + a deterministic snapshot of the rubric.
          </li>
        </ul>
        <CodeBlock>{CURL}</CodeBlock>

        <h2 className="pp-lede mt-12 text-3xl">The apply endpoint</h2>
        <p>
          <code>/v1/apply</code> takes a guide, an optional preset, and an
          input string. It calls AI Gateway internally with the composed
          system prompt, then runs the deterministic rubric over the output.
        </p>
        <CodeBlock>{APPLY}</CodeBlock>

        <h2 className="pp-lede mt-12 text-3xl">Eval rubric</h2>
        <p>Each guide ships an <code>eval_rubric</code> with two parts:</p>
        <ul>
          <li>
            <strong>Deterministic metrics</strong> — measurable properties
            (avg sentence length, adverbs per 200 words, abstract count)
            with an op (<code>&lt;=</code>, <code>&gt;=</code>,{" "}
            <code>==</code>), a target value, and a weight.
          </li>
          <li>
            <strong>Judge criteria</strong> — short prompts a model can
            grade against (e.g. "does the passage avoid latinate
            vocabulary?"). Each weighted to add up to 1.0.
          </li>
        </ul>

        <Pull attribution="Post Pilot, the docs">
          A guide is a description of a voice that a model can read and
          measure itself against. The point isn't to imitate one writer;
          the point is to have an opinion about prose.
        </Pull>

        <h2 className="pp-lede mt-12 text-3xl">More languages</h2>
        <p>
          Python and Go samples coming. The shape is the same: fetch the
          guide, hand the <code>system_prompt</code> field to your gateway
          call, parse the response.
        </p>

        <Rule />
      </Column>
    </section>
  );
}
