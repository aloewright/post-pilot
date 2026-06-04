# Post Pilot — Project Notes for Claude

## AI Gateway routing — never call models directly

All LLM, embedding, image, audio, speech, and video model calls go through Cloudflare AI Gateway *dynamic routes*. Never call OpenAI / Anthropic / Workers AI / replicate / fal etc. providers directly — not from the Worker, not from a Node build script, not from a one-off. Direct provider calls bypass caching, rate limits, observability, cost routing, fallbacks, and BYOK virtual keys, and they hardcode model choice.

Treat existing direct provider calls as bugs to fix: route through the gateway and pick the dynamic route by capability, not the provider model id.

**Endpoint** (OpenAI-compatible):
`https://gateway.ai.cloudflare.com/v1/${CF_ACCOUNT_ID}/${CF_GATEWAY_ID}/compat/chat/completions`
(default `CF_GATEWAY_ID = "x"` in this account)

**Headers**:
- `Content-Type: application/json`
- `cf-aig-authorization: Bearer ${CF_AIG_TOKEN}`
- `cf-aig-zdr: true`

**Body model field**: pass a dynamic route slug — never a raw `openai/gpt-…` or `anthropic/claude-…` id.

**Available dynamic routes** in this account:
- `dynamic/text_gen` — chat / text completion (default LLM)
- `dynamic/research_gen` — deep-reasoning completions
- `dynamic/ai_embed` — embeddings
- `dynamic/image_gen` — image generation
- `dynamic/audio_gen` — TTS / audio
- `dynamic/stt_gen` — speech-to-text
- `dynamic/video_gen` — video generation

### Inside the Worker (`apps/quill`) — three patterns to know, only one currently reliable

- `env.AI.run("dynamic/text_gen", ...)` — **does not work**. The binding treats the first arg as a literal Workers AI model id and 404s with `Model not found: dynamic/text_gen`. Dynamic routes are not resolvable through `env.AI.run()`.
- `env.AI.gateway(id).run({ provider: "compat", endpoint: "chat/completions", query: { model: "dynamic/text_gen", ... } })` — what the Cloudflare docs recommend, but on this account it has been observed to **skip ahead in the route's fallback chain**, jumping straight to a leaf node and bypassing earlier nodes. Avoid for now.
- `fetch()` to the compat endpoint from inside a Worker — **rejected before the gateway sees it** with Cloudflare API error code 2019 ("Compatibility..."). The same fetch from outside the Worker (curl, Node script) works fine.

**Working pattern from a Worker today**: call a specific Workers AI model id directly while still routing through the gateway for caching/observability/cost analytics:

```ts
env.AI.run(
  "@cf/openai/gpt-oss-120b",
  { messages: [...], max_tokens: 800, temperature: 0.2 },
  { gateway: { id: "x" } }
)
```

This violates the strict "never call models directly" rule but it's the only Worker-side invocation that actually works. Keep a code comment pointing here so we can switch back to dynamic routes when the binding/fetch path is fixed upstream. Current usage in code: `apps/quill/src/lib/judge.ts` and `apps/quill/src/routes/apply.ts`.

### Dynamic-route quirks to remember when configuring

- Routes resolve only via the OpenAI-compat REST endpoint (`/compat/chat/completions`), not via `env.AI.run("dynamic/foo")`.
- Cache is keyed on request body. Updating a route's chain does NOT invalidate cached responses (gateway "x" has `cache_invalidate_on_update: false`). Use `cf-aig-cache-ttl: 0` or change the prompt to confirm a chain change.
- Worker-stored secrets (`AI_GATEWAY_TOKEN`, `BETTER_AUTH_SECRET`, etc.) drift from Doppler — when auth fails (401 from gateway), sync explicitly via `wrangler secret put` or `PUT /accounts/{id}/workers/scripts/{name}/secrets` rather than assuming Doppler is the live value.
- BYOK provider keys (Perplexity, OpenRouter, Anthropic, etc.) live in Cloudflare Secrets Store — independent from Doppler. Routes can fall through silently when a node's BYOK key is expired or missing; the symptom is a `500` from `dynamic/foo` even when each provider node looks healthy in the dashboard.
- Add a Workers AI fallback node at the tail of every route so the chain stays alive when BYOK keys lapse. Verify the model id is current — `@cf/meta/llama-3.3-70b-instruct-fp8-fast` and `@cf/meta/llama-3.1-8b-instruct-fast` were both removed; `@cf/openai/gpt-oss-120b` and `@cf/meta/llama-3.1-8b-instruct-fp8` are current as of 2026-05-10.

### Route management API

- `GET /accounts/{id}/ai-gateway/gateways/x/routes` — list routes (path is `routes`, not `dynamic-routes`)
- `GET /accounts/{id}/ai-gateway/gateways/x/routes/{route_id}` — get one route + active version
- `POST /accounts/{id}/ai-gateway/gateways/x/routes/{route_id}/versions` — create a version, body `{"elements": [...]}`
- `POST /accounts/{id}/ai-gateway/gateways/x/routes/{route_id}/deployments` — deploy a version, body `{"version_id": "..."}`

### Workers Builds CI

This repo is wired to Cloudflare Workers Builds (not Pages). Two triggers — production (`main`) and preview (everything else) — both targeting `apps/quill` as the root directory.

- Trigger config endpoint: `PATCH /accounts/{id}/builds/triggers/{trigger_uuid}` with `{ "root_directory": "apps/quill", "build_command": "...", "deploy_command": "..." }`
- A misconfigured `root_directory: "/"` causes wrangler to fail with: *"The Wrangler application detection logic has been run in the root of a workspace instead of targeting a specific project."*
- Workers Builds runs `pnpm install --frozen-lockfile` automatically. pnpm v10 blocks postinstall scripts by default — `workerd`, `esbuild`, etc. need `pnpm.onlyBuiltDependencies` in the root `package.json` to run their downloads.

### From a Node script

Build, seed, migration, eval scripts call the gateway directly:
```
POST https://gateway.ai.cloudflare.com/v1/${CF_ACCOUNT_ID}/${CF_GATEWAY_ID}/compat/chat/completions
```
with `cf-aig-authorization: Bearer ${CF_AIG_TOKEN}` from Doppler. No provider SDK, no provider key. The fetch path works from outside a Worker.

**Canonical reference impl** (where it exists locally): `/Users/aloe/Development/cloudos/shared/gateway/src/{routes,gateway,llm}.ts` — `chatCompletion`, `researchCompletion`, `gatewayEmbedding`. Read and reuse, don't reinvent.

If you find yourself reaching for `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `@anthropic-ai/sdk`, `openai`, or a provider URL, stop — route through the gateway instead.
