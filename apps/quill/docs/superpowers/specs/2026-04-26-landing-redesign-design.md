# Quill (Post Pilot) — Landing Page Redesign

**Date:** 2026-04-26
**Status:** Approved (awaiting user re-review)
**Goal:** Drive landing-page visitors to `/library` and prime them to search by *vibe* rather than by author name. Tighten copy, retune motion, add legal + support pages, and create a dedicated developer docs page.

## Background

The current landing is composed of `Hero → AuthorStrip → UseCaseStrip → ApiSnippet`. Two problems with the current shape:

1. **CTA hierarchy is inverted.** Primary CTA is "Try the playground"; the Library is secondary. The user's stated goal is the opposite — get visitors into the library and let them browse.
2. **The page is author-first, but the user is vibe-first.** People don't arrive thinking "I want Hemingway"; they arrive thinking "I want it terse" or "I want it confessional." Authors are how the catalog is *organized*; voices are how it's *searched*.

This redesign reframes the page around vibe-search, demotes the inline API content to its own dedicated page, and adds the missing footer pieces (Terms, Privacy, support link).

## Locked decisions

### Hero (`client/components/hero.tsx`)

- **Lede:** `Prose, not prompts.` Replaces "Voice, engineered."
  - "prompts" gets the italic + accent-color treatment (currently the swash + accent are on "engineered.")
  - The period is structural — animated separately, lands last
- **Kicker:** unchanged copy ("Style guides for AI agents") and unchanged typeface (Geist). The kicker itself stays as-is. What changes is the spacing between the kicker and the lede — currently `gap-8` (32px) on the parent flex column, which reads cramped against the new larger lede. Fix: take the kicker wrapper out of the shared `gap-8` rhythm and give it an explicit `mb-22` (88px) so only the kicker→lede gap grows; lede→standfirst→CTA stays at the existing 32px rhythm.
- **Standfirst:** `A curated library of literary voices, packaged as drop-in prompts for any LLM. Style guides that read like style.` Replaces the current author-name-dropping standfirst.
- **Primary CTA:** "Browse the library →" → `/library` (was secondary)
- **Secondary CTA:** "Try the playground" → `/playground` (was primary)
- **Animation:**
  - Word-by-word stamp-up: "Prose," → "not " → "prompts" (each word masks up from below with `transform: translateY(110%)` → `0`, staggered ~200ms apart, 0.85s ease-out per word)
  - Period appears LAST with a slight overshoot pop (cubic-bezier(0.34, 1.56, 0.64, 1), starts ~1.55s after the lede begins)
  - Ink swash draws beneath the lede starting ~1.95s in (1.2s draw)
  - Standfirst + CTAs fade-rise after the lede settles (~1.4s and ~1.7s)
  - `prefers-reduced-motion` already respected globally in `client/index.css` — no changes needed

### New section: Browse by voice

- New file: `client/components/browse-by-voice.tsx`
- Sits between hero and `AuthorStrip` in `client/routes/index.tsx`
- Visual pattern matches the *existing* use-case strip (sunken bg, leading rule, kicker-style label, then chips). One section, one visual treatment.
- Label: "Browse by voice"
- Chips, in order:
  `Terse · Lyrical · Ornate · Wry · Hard-boiled · Cool & detached · Confessional · Epistolary · Romantic · Plainspoken`
- Each chip is a `<Link>` that routes to `/library?voice=<slug>` where slugs are:
  `terse · lyrical · ornate · wry · hard-boiled · cool-detached · confessional · epistolary · romantic · plainspoken`
- Hover state: invert chip (dark bg, light fg) — the same hover currently on use-case chips

### Vibe → guide mapping (`src/lib/vibes.ts`, new)

The 10 vibe slugs split into two groups:

- **Canonical** (4): `terse · lyrical · ornate · wry` — already exist as values in the `VoiceAxis` type. These filter on `guide.voice_axes`.
- **Curated** (6): `hard-boiled · cool-detached · confessional · epistolary · romantic · plainspoken` — new descriptive search terms. These map to a hand-curated list of guide slugs.

Schema:
```ts
// VibeSlug is the union shown on the landing chip strip.
// It includes 4 of the 5 canonical VoiceAxis values (drops "plain")
// plus 6 curated descriptive tags.
export type VibeSlug =
  | "terse" | "lyrical" | "ornate" | "wry"           // canonical (subset of VoiceAxis)
  | "hard-boiled" | "cool-detached" | "confessional"  // curated
  | "epistolary" | "romantic" | "plainspoken";        // curated

export const CANONICAL_VIBES = new Set<VibeSlug>([
  "terse", "lyrical", "ornate", "wry",
]);

export const VIBE_TAGS: Record<VibeSlug, {
  label: string;
  description: string;     // shown as the standfirst on /library?voice=<slug>
  matches?: string[];      // present only for curated tags; canonical axes filter via voice_axes
}> = { ... };
```

Hand-curate `matches` against the 50+ existing guides in `src/lib/guides/`. Leave `matches` undefined for canonical axes — the route branches on `CANONICAL_VIBES.has(slug)` instead of inspecting field presence.

**Why the hybrid approach:** the canonical axes are real filters baked into the schema and API; the curated tags are editorial and may evolve. Mixing the two in one map keeps the landing-page chip list flat without forcing a schema migration.

### Library route — accept `?voice=<slug>` search param

Currently `LibraryView` keeps filter state in `useState`. For the chip strip to deep-link, the route must:

1. Declare `validateSearch` on the route definition in `client/routes/library.tsx` (TanStack Router pattern):
   ```ts
   export const Route = createFileRoute("/library")({
     validateSearch: z.object({ voice: VibeSlugSchema.optional() }),
     ...
   });
   ```
2. `LibraryView` reads the param via `useSearch({ from: "/library" })` and seeds initial filter state from it.
3. If `voice` is a canonical axis, seed the `voice` filter state. If it's a curated tag, set a separate `vibeTag` state that filters items in-memory by `VIBE_TAGS[tag].matches`. The existing API call doesn't need to change for curated tags — we filter the result list client-side.
4. Show the tag's `description` as the page standfirst when the user lands via a chip (replaces the static "Filter by era, use case, or voice…" copy).

This is the smallest change that makes deep-linking work; full URL-driven filter state is a nice future improvement but out of scope.

### Reframed: AuthorStrip (`client/components/author-strip.tsx`)

- Section heading "Featured guides" → "A few of the voices"
- "See all →" link → "See all 50+ →" (read total from query data; fallback to "See all →" when undefined)
- Tile design unchanged

### Removed: UseCaseStrip

- Drop `<UseCaseStrip />` from `client/routes/index.tsx`
- Verify no other consumers of `client/components/use-case-strip.tsx`. If none, delete the file.

### Use-case taxonomy — slimmed to 5 (global change)

Independent of the landing redesign but bundled with it: trim the canonical use-case list from 8 → 5.

- **Active set** (shown in UI everywhere): `docs · email · social · newsletter · fiction`
- **Removed from active set**: `support`, `marketing`, `rfc`, `code`
- **Renamed**: `narrative` → `fiction` (logically the same preset, new slug for clarity)
- **New**: `newsletter` (Substack-style — longer-form, voice-driven, sent to a list)

Affected files:
- `src/lib/types.ts` — keep `UseCase` as a wide union of OLD ∪ NEW so existing guide files compile while the user re-tags. Add an `ActiveUseCase` narrowed type for UI:
  ```ts
  export type ActiveUseCase = "docs" | "email" | "social" | "newsletter" | "fiction";
  // Legacy union retained until guide retagging is done. Will be narrowed to ActiveUseCase later.
  export type UseCase =
    | ActiveUseCase
    | "support" | "marketing" | "narrative" | "rfc" | "code"; // @deprecated — to be cleaned up
  ```
- `src/lib/presets.ts` — `USE_CASE_PRESETS` shrinks to 5 entries with the new vocabulary. Add `newsletter` preset:
  - `slug: "newsletter"`, `name: "Newsletter"`,
  - `description: "Voice-driven, longer-form post sent to a list. Personality stays on; jargon stays off."`
  - `modifier: "You are writing a newsletter post. Keep the author's voice in motion. Open with a hook that earns the click. Use one strong image per section. Sign off plainly."`
  - `target_length: "long"`
  - Rename `narrative` preset to `fiction` (slug + name + description copy update); existing modifier text is fine.
- `src/lib/utils.ts` — `USE_CASES` constant becomes the 5-item active set; `USE_CASE_LABELS` updated to match.
- `client/components/library-view.tsx` — already iterates `USE_CASES`, so the sidebar narrows automatically.
- `client/routes/playground.tsx` — verify the preset dropdown reads from `USE_CASE_PRESETS`; if so, narrows automatically.

**Per-guide retagging is out of scope** for this work. Existing guides keep their legacy `use_cases` values (e.g. `["support", "marketing", "code"]`); UI surfaces filter those out silently because they're not in the active set. The user will retag guides editorially later. The wide `UseCase` union prevents compile errors in the meantime.

### Replaced: ApiSnippet → DocsTeaser

- Drop `<ApiSnippet />` from `client/routes/index.tsx`
- New file: `client/components/docs-teaser.tsx`
- Visual: dark-bg card (`var(--strand-color-ink-primary)` background, light text), full-bleed within max-width container, rounded
- Kicker (Geist Mono uppercased — *kicker only on this card uses mono*, since it sits on a dark/developer-targeted block): "For developers"
- Lede (Instrument Serif, ~38–44px, smaller than hero): `Fetch a voice. *Ship it.*` (italic + accent on "Ship it.")
- Standfirst: `Every guide ships as a system prompt, a JSON spec, and an eval rubric. Drop it into any LLM in five lines.`
- CTA button: "Read the docs →" (light bg on dark) → `/docs`
- Verify no other consumers of `client/components/api-snippet.tsx`. If none, delete the file.

### New page: `/docs` (`client/routes/docs.tsx`)

A dedicated developer docs page. Reuses editorial primitives (`Lede`, `Kicker`, `Standfirst`, `Pull`, `Column`).

Sections:
1. **Quickstart** — fetch a guide, drop the system prompt into a chat call. TypeScript sample.
2. **The guide shape** — JSON spec breakdown: `system_prompt`, `voice_spec`, `do` / `dont`, `exemplars`, `eval_rubric`.
3. **Endpoints** — `/v1/guides`, `/v1/guides/:slug`, `/v1/guides/:slug/exemplars`, `/v1/guides/:slug/rubric`, `/v1/presets`, `/v1/apply`. One short paragraph + sample request/response per endpoint.
4. **The apply endpoint** — request shape, response shape, AI Gateway routing details.
5. **Eval rubric** — deterministic metrics + judge criteria, how to use them in your own evals.
6. **Code samples** — TypeScript / Python / curl side-by-side for the quickstart flow.

**Important constraint (from `CLAUDE.md`):** all code samples that show how to call an LLM must route through Cloudflare AI Gateway dynamic routes (`dynamic/text_gen`, etc.) — never direct provider SDKs. Existing copy in `ApiSnippet` violates this and must be rewritten when porting to `/docs`.

Layout: editorial Column primitive, single-column, `max-w-prose`-style. No flashy graphics; this is a docs page, written in the "docs" preset's voice (active, verb-first, concrete).

Defer: full per-language samples beyond TS for v1. Ship TS + curl, mark Python as TODO with a stub.

### New page: `/terms` (`client/routes/terms.tsx`)

Standard Terms of Service for a small dev tool. Sections:
- Acceptance of terms
- License to use the API
- Acceptable use (no scraping, no resale of guide content as a competing catalog)
- Intellectual property — guide content is `copyright_posture: "voice-inspired"` per the schema (curator's interpretation of public-domain or fair-use voice study), not licensed reproductions
- No warranty
- Limitation of liability
- Governing law
- Contact

Curator-of-record name + last-updated date in the page header. Editorial layout (`Column`).

The legal copy itself is template-grade and the user should review it before launch. The spec scope is the page scaffold and routing, not bulletproof legal language.

### New page: `/privacy` (`client/routes/privacy.tsx`)

Sections:
- What we collect — auth identity (better-auth), request logs (Cloudflare AI Gateway side)
- What we don't collect — no scraping or training on user prompts; user prompts pass through AI Gateway with `cf-aig-zdr: true`
- Cookies — auth session cookie only
- Retention
- Third parties — Cloudflare (Workers, D1, AI Gateway), provider models (OpenAI / Anthropic / Workers AI) accessed via gateway
- User rights
- Contact

Same editorial layout. Same review caveat as `/terms`.

### Footer (`client/components/footer.tsx`)

- Existing links kept: Library, Playground, API status
- Add: Docs, Terms, Privacy
- Add: external CTA "☕ Buy me a coffee" → `https://buymeacoffee.com/allosaurus`, opens in new tab with `target="_blank" rel="noopener noreferrer"`, yellow `#ffdd00` background
- Group nav links and legal links separated by a thin visual divider (`·` or vertical rule)

### Page rhythm

The new hero is more generous. Bump the section gaps on landing to match:
- Hero `pb-16 md:pb-24` → `pb-20 md:pb-32`
- AuthorStrip surrounding padding `pb-16` → `pb-24`
- BrowseByVoice and DocsTeaser sections take section padding `py-20` to match
- Footer `mt-24` retained

## Architecture summary

```
client/routes/index.tsx
  ├── <Hero/>                       (modified: copy + animation + spacing)
  ├── <BrowseByVoice/>               (NEW)
  ├── <AuthorStrip/>                 (modified: heading + see-all label)
  └── <DocsTeaser/>                  (NEW; replaces <ApiSnippet/>)
                                     (<UseCaseStrip/> removed)

client/routes/docs.tsx               (NEW)
client/routes/terms.tsx              (NEW)
client/routes/privacy.tsx            (NEW)
client/routes/library.tsx            (modified: validateSearch + vibe seeding)

client/components/browse-by-voice.tsx (NEW)
client/components/docs-teaser.tsx    (NEW)
client/components/footer.tsx         (modified: docs/terms/privacy/coffee links)
client/components/library-view.tsx   (modified: read ?voice search param)

src/lib/vibes.ts                     (NEW: VIBE_TAGS map + slug type)
src/lib/types.ts                     (modified: ActiveUseCase + legacy UseCase union)
src/lib/presets.ts                   (modified: 5 active presets, drop 4, add newsletter, rename narrative→fiction)
src/lib/utils.ts                     (modified: USE_CASES + USE_CASE_LABELS narrowed)
```

Files to delete (after verifying no other consumers):
- `client/components/use-case-strip.tsx`
- `client/components/api-snippet.tsx`

## Data flow

1. User lands on `/`. Hero animates. User sees vibe chips below.
2. User clicks "Confessional" → routes to `/library?voice=confessional`.
3. `LibraryView` mounts, reads `voice=confessional` from search params.
4. `confessional` is a curated tag → `LibraryView` looks up `VIBE_TAGS.confessional.matches`, fetches all guides via the existing API, then filters the rendered list to those slugs.
5. Page heading + standfirst show "Confessional" + the description from `VIBE_TAGS`.
6. User can clear the vibe filter (resets URL to `/library`) and use the existing era/use-case/voice filter sidebar normally.

For canonical axes (e.g. `?voice=terse`): same flow, except step 4 just sets the existing `voice` filter state to `["terse"]`, no client-side filtering needed.

## Out of scope

- A full URL-driven filter state for `/library` (era + use case + multiple voices in URL). Future improvement.
- Server-side filtering by curated vibe tag. We're filtering client-side, which works fine for ~50 guides; would need rethinking at 500+.
- Auto-curating `VIBE_TAGS.matches` from guide content via embeddings. Hand-curation is fine and editorial.
- Light/dark mode tuning for the new DocsTeaser dark card and footer coffee button. Verify both look right under `.dark`; tweak as needed at impl time.
- The actual legal text in `/terms` and `/privacy` — template-grade scaffolding only; user reviews real copy before launch.

## Open questions

1. Is the `/docs` content depth right for v1, or should it be split into multiple pages (Quickstart vs Reference)? Single page is simpler and matches the editorial tone; can split later.
2. The DocsTeaser kicker is the only place in the app where the kicker uses Geist Mono instead of Geist. Acceptable as a deliberate "developer-zone" cue, or should it stay Geist for consistency? **Decision: keep Geist Mono on the dark teaser only — the change in surface justifies the change in voice.**
3. Should "Plain" remain as a canonical `VoiceAxis` even though it's not in the chip strip? Yes — the type still has it, the library sidebar still offers it, but it's not promoted on landing because "Plainspoken" is a more evocative search term.
