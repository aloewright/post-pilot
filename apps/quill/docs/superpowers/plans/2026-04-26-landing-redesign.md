# Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reframe Quill's landing page around vibe-based search, replace the inline API snippet with a dedicated `/docs` page, slim the canonical use-case list to 5, and add Terms / Privacy / Buy-Me-a-Coffee footer links.

**Architecture:** All work is in `apps/quill/`. The hero animation retunes existing framer-motion variants; the new "Browse by voice" chip strip is a new component matching the visual pattern of the (now-removed) use-case strip. Vibe slugs are a hybrid of canonical `VoiceAxis` values (filtered server-side) and curated descriptive tags (filtered client-side via a hand-curated `VIBE_TAGS` map). New TanStack Router file-based routes ship `/docs`, `/terms`, `/privacy`. Use-case taxonomy narrows from 8 → 5 globally; existing guide files keep their legacy tags via a wide `UseCase` union (the user retags later).

**Tech Stack:** React 19, Vite 6, TanStack Router (file-based), TanStack Query, framer-motion, Tailwind v4 + Strand design tokens, Zod (route search-param validation).

**Verification:** No unit tests exist in this project. Verification is `pnpm --filter postpilot typecheck` after each task and visual confirmation in the dev server (`pnpm --filter postpilot dev`, http://localhost:5173). Each task ends with type-check + browser-visual + commit.

**Reference spec:** `docs/superpowers/specs/2026-04-26-landing-redesign-design.md`

---

## File Structure

**New files:**
- `src/lib/vibes.ts` — `VibeSlug` type, `CANONICAL_VIBES` set, `VIBE_TAGS` map
- `client/components/browse-by-voice.tsx` — chip strip section
- `client/components/docs-teaser.tsx` — dark-bg "Read the docs" card
- `client/routes/docs.tsx` — developer docs page
- `client/routes/terms.tsx` — Terms of Service page
- `client/routes/privacy.tsx` — Privacy Policy page

**Modified files:**
- `src/lib/types.ts` — add `ActiveUseCase`, widen `UseCase` to legacy union
- `src/lib/utils.ts` — narrow `USE_CASES` and `USE_CASE_LABELS` to active 5
- `src/lib/presets.ts` — slim to 5 presets, rename `narrative` → `fiction`, add `newsletter`
- `client/components/hero.tsx` — copy ("Prose, not prompts."), animation (period-last + swash), spacing (88px kicker→lede)
- `client/components/author-strip.tsx` — heading "A few of the voices" + "See all 50+ →"
- `client/components/footer.tsx` — Docs / Terms / Privacy / Coffee links
- `client/components/library-view.tsx` — read `?voice=` search param, filter curated vibe tags client-side
- `client/routes/library.tsx` — declare `validateSearch` for `?voice=`
- `client/routes/index.tsx` — drop `<UseCaseStrip/>` + `<ApiSnippet/>`, add `<BrowseByVoice/>` + `<DocsTeaser/>`

**Deleted files (verify zero consumers first):**
- `client/components/use-case-strip.tsx`
- `client/components/api-snippet.tsx`

---

## Task 1: Slim use-case taxonomy

**Files:**
- Modify: `apps/quill/src/lib/types.ts:10-18`
- Modify: `apps/quill/src/lib/utils.ts:84-112`
- Modify: `apps/quill/src/lib/presets.ts` (full rewrite)

- [ ] **Step 1.1 — Widen `UseCase`, add `ActiveUseCase`**

In `src/lib/types.ts`, replace the existing `UseCase` declaration:

```ts
// Active set — what the UI surfaces.
export type ActiveUseCase =
  | "docs"
  | "email"
  | "social"
  | "newsletter"
  | "fiction";

// Legacy values retained until guide retagging is complete.
// Kept in the union so existing src/lib/guides/*.ts files type-check.
// Will be narrowed to ActiveUseCase once retagging is done.
export type UseCase =
  | ActiveUseCase
  | "support"
  | "marketing"
  | "narrative"
  | "rfc"
  | "code";
```

- [ ] **Step 1.2 — Narrow `USE_CASES` + `USE_CASE_LABELS` to active 5**

In `src/lib/utils.ts`, replace lines 84-112 with:

```ts
export const USE_CASES: ActiveUseCase[] = [
  "docs",
  "email",
  "social",
  "newsletter",
  "fiction",
];

export const USE_CASE_LABELS: Record<ActiveUseCase, string> = {
  docs: "Docs",
  email: "Email",
  social: "Social",
  newsletter: "Newsletter",
  fiction: "Fiction",
};
```

Update the import at the top of the file to include `ActiveUseCase`:
```ts
import type { ActiveUseCase, Era, Guide, UseCase, VoiceAxis } from "./types";
```

- [ ] **Step 1.3 — Replace `USE_CASE_PRESETS`**

Rewrite `src/lib/presets.ts` to:

```ts
import type { ActiveUseCase, UseCasePreset } from "./types";

export const USE_CASE_PRESETS: UseCasePreset[] = [
  {
    slug: "docs",
    name: "Technical docs",
    description:
      "Concise reference or how-to prose. Active voice, verb-first headings, concrete examples.",
    modifier:
      "You are writing technical documentation. Use active voice. Lead with the action. Give one concrete example per concept. Avoid marketing language.",
    target_length: "medium",
  },
  {
    slug: "email",
    name: "Email",
    description:
      "Brief, respectful written-to-one-person email. Name the context, ask one thing, leave room for no.",
    modifier:
      "You are writing an email. Open with specific context showing you know who you are writing to. Make one ask. Offer an easy out. Sign off plainly.",
    target_length: "short",
  },
  {
    slug: "social",
    name: "Social post",
    description:
      "One post, one idea. A hook in the first line that survives without the rest.",
    modifier:
      "You are writing a single social post. First line must stand alone as a hook. No hashtags unless asked. Under 280 characters unless told otherwise.",
    target_length: "micro",
  },
  {
    slug: "newsletter",
    name: "Newsletter",
    description:
      "Voice-driven, longer-form post sent to a list. Personality stays on; jargon stays off.",
    modifier:
      "You are writing a newsletter post. Keep the author's voice in motion across the whole piece. Open with a hook that earns the click. Use one strong image per section. Sign off plainly.",
    target_length: "long",
  },
  {
    slug: "fiction",
    name: "Fiction",
    description:
      "Scene or passage-level prose. Keep the author's voice in motion across the whole passage.",
    modifier:
      "You are writing a short narrative passage. Stay in scene. Prefer image to explanation. Let the voice carry the paragraph, not the plot summary.",
    target_length: "long",
  },
];

export function getPreset(slug: string): UseCasePreset | undefined {
  return USE_CASE_PRESETS.find((p) => p.slug === slug);
}
```

Note: `UseCasePreset.slug` is typed as `UseCase`. Since `ActiveUseCase` is a subset of `UseCase`, the new slugs (`docs`, `email`, `social`, `newsletter`, `fiction`) all type-check.

- [ ] **Step 1.4 — Verify type-check**

Run: `pnpm --filter postpilot typecheck`
Expected: PASS. Existing guide files compile because the legacy union still includes `support | marketing | narrative | rfc | code`.

If failures appear, they will be in `library-view.tsx` (uses `USE_CASES` typed as `UseCase[]` but now `ActiveUseCase[]`). The `FilterGroup` component is generic over the `T` it receives, so this should still work — but verify by reading the resulting error and adjusting the `useCases` state type to `ActiveUseCase[]`:

```ts
const [useCases, setUseCases] = useState<ActiveUseCase[]>([]);
```

- [ ] **Step 1.5 — Browser sanity check**

Run: `pnpm --filter postpilot dev`
Visit http://localhost:5173/library — confirm the Use case filter sidebar shows exactly the 5 new labels (Docs, Email, Social, Newsletter, Fiction) and clicking them filters the catalog correctly. Existing guides whose `use_cases` arrays only contain legacy values (e.g. Hemingway with `["support", "marketing", "code"]`) will not match any active filter — that's expected; the user retags later.

Visit http://localhost:5173/playground — confirm the preset dropdown shows the 5 new presets only.

- [ ] **Step 1.6 — Commit**

```bash
git add apps/quill/src/lib/types.ts apps/quill/src/lib/utils.ts apps/quill/src/lib/presets.ts apps/quill/client/components/library-view.tsx
git commit -m "refactor(quill): slim use-case taxonomy to docs/email/social/newsletter/fiction"
```

---

## Task 2: Add vibes module

**Files:**
- Create: `apps/quill/src/lib/vibes.ts`

- [ ] **Step 2.1 — Create vibes module**

Create `apps/quill/src/lib/vibes.ts`:

```ts
// Landing-page chip strip vocabulary. Vibes split into two groups:
//   - Canonical: 4 of the 5 VoiceAxis values (drops "plain" — "plainspoken"
//     is the more evocative search term and lives in the curated set).
//     These filter via guide.voice_axes server-side.
//   - Curated: 6 descriptive search terms hand-mapped to guide slugs.
//     These filter client-side because they don't exist in the schema.

export type VibeSlug =
  | "terse"
  | "lyrical"
  | "ornate"
  | "wry"
  | "hard-boiled"
  | "cool-detached"
  | "confessional"
  | "epistolary"
  | "romantic"
  | "plainspoken";

export const CANONICAL_VIBES = new Set<VibeSlug>([
  "terse",
  "lyrical",
  "ornate",
  "wry",
]);

export type VibeTag = {
  label: string;
  description: string;
  // Present only for curated tags. Canonical vibes filter on voice_axes.
  matches?: string[];
};

export const VIBE_TAGS: Record<VibeSlug, VibeTag> = {
  terse: {
    label: "Terse",
    description:
      "Short declarative sentences. Concrete nouns. The iceberg theory.",
  },
  lyrical: {
    label: "Lyrical",
    description: "Voices that sing — long lines, repetition, imagery.",
  },
  ornate: {
    label: "Ornate",
    description:
      "Periodic sentences. Clauses stacked like marble. Rhetorical full force.",
  },
  wry: {
    label: "Wry",
    description: "Voices that smile. Irony in the seams; understatement is the joke.",
  },
  "hard-boiled": {
    label: "Hard-boiled",
    description:
      "Stripped, masculine, tough. Walks down a mean street and reports on it.",
    matches: [],
  },
  "cool-detached": {
    label: "Cool & detached",
    description:
      "Voices that hold the reader at a deliberate distance. Reportorial in posture, lyrical underneath.",
    matches: [],
  },
  confessional: {
    label: "Confessional",
    description:
      "First person, unguarded, the writer in the prose. Risk of vulnerability is the price of admission.",
    matches: [],
  },
  epistolary: {
    label: "Epistolary",
    description:
      "Written in the form of letters or addressed prose. Direct, intimate, second-person register.",
    matches: [],
  },
  romantic: {
    label: "Romantic",
    description:
      "Sentiment without irony. Heightened feeling earned, not posed.",
    matches: [],
  },
  plainspoken: {
    label: "Plainspoken",
    description:
      "Anglo-Saxon vocabulary, conversational rhythm. Trust the reader to follow along.",
    matches: [],
  },
};

// Order shown on the landing chip strip. Canonical first, curated after.
export const VIBE_DISPLAY_ORDER: VibeSlug[] = [
  "terse",
  "lyrical",
  "ornate",
  "wry",
  "hard-boiled",
  "cool-detached",
  "confessional",
  "epistolary",
  "romantic",
  "plainspoken",
];

export function isVibeSlug(s: string): s is VibeSlug {
  return s in VIBE_TAGS;
}
```

The `matches: []` arrays for curated tags are intentional empty placeholders. The user populates them editorially later (out of scope for this work). Empty `matches` means a `?voice=hard-boiled` URL renders an empty library — that's acceptable for v1; the user will fill matches in post-launch.

- [ ] **Step 2.2 — Verify type-check**

Run: `pnpm --filter postpilot typecheck`
Expected: PASS.

- [ ] **Step 2.3 — Commit**

```bash
git add apps/quill/src/lib/vibes.ts
git commit -m "feat(quill): add VIBE_TAGS module for landing chip strip"
```

---

## Task 3: BrowseByVoice component

**Files:**
- Create: `apps/quill/client/components/browse-by-voice.tsx`

- [ ] **Step 3.1 — Create the component**

Create `apps/quill/client/components/browse-by-voice.tsx`:

```tsx
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { VIBE_DISPLAY_ORDER, VIBE_TAGS } from "../../src/lib/vibes";
import { Kicker } from "./editorial";

export function BrowseByVoice() {
  return (
    <section
      aria-label="Browse by voice"
      className="border-y"
      style={{
        borderColor: "var(--strand-color-rule)",
        background: "var(--strand-color-surface-sunken)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-start md:justify-between">
        <Kicker className="md:pt-1.5">Browse by voice</Kicker>
        <motion.div
          className="flex flex-wrap items-center gap-2"
          initial={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {VIBE_DISPLAY_ORDER.map((slug) => (
            <Link
              className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs transition-colors hover:bg-[var(--strand-color-ink-primary)] hover:text-[var(--strand-color-surface-canvas)]"
              key={slug}
              search={{ voice: slug }}
              style={{
                borderColor: "var(--strand-color-rule)",
                background: "var(--strand-color-surface-canvas)",
                color: "var(--strand-color-ink-primary)",
              }}
              to="/library"
            >
              {VIBE_TAGS[slug].label}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

Notes:
- Reuses the `Kicker` editorial primitive for "Browse by voice"
- Visually echoes the existing use-case strip layout (sunken bg, border-y, max-w-6xl, kicker + chips on a row) so the section reads as familiar
- Uses TanStack Router's typed `search` prop on `<Link>` — this requires Task 7 (library route declares `validateSearch`) to land before this component compiles cleanly. **Implementation order: do Task 7 before Task 3, or accept a temporary type cast here, OR temporarily use `to="/library"` without `search` and add `search` after Task 7.**

Since strict ordering matters: do Task 7 first, then Task 3. If you implement Task 3 first, the file compiles (TanStack Router's search inference will accept `unknown` until validateSearch is declared) but won't be type-safe.

- [ ] **Step 3.2 — Verify type-check**

Run: `pnpm --filter postpilot typecheck`
Expected: PASS (assuming Task 7 has run).

- [ ] **Step 3.3 — Commit**

```bash
git add apps/quill/client/components/browse-by-voice.tsx
git commit -m "feat(quill): add BrowseByVoice chip strip"
```

---

## Task 4: Hero redesign — copy, animation, spacing

**Files:**
- Modify: `apps/quill/client/components/hero.tsx` (full rewrite — file is small)

- [ ] **Step 4.1 — Replace the hero component**

Rewrite `apps/quill/client/components/hero.tsx`:

```tsx
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Kicker, Standfirst } from "./editorial";

const CTA =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]";

const LEDE_LINE_1 = ["Prose,"];
const LEDE_LINE_2 = ["not", "prompts"];

const ease = [0.16, 1, 0.3, 1] as const;

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
};

const word = {
  hidden: { y: "110%" },
  visible: {
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

// Period — appears LAST with a slight overshoot pop.
const period = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: 1.55,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const swash = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.2, ease, delay: 1.95 },
      opacity: { duration: 0.3, delay: 1.95 },
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay },
  }),
};

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-32">
      <motion.div animate="visible" initial="hidden">
        {/* Kicker has its own block + custom margin so the kicker→lede gap
            (88px) is independent of the rest of the stack rhythm. */}
        <motion.div className="mb-22" custom={0} variants={fadeUp}>
          <Kicker>Style guides for AI agents</Kicker>
        </motion.div>

        {/* Lede + standfirst + CTA share a tighter rhythm. */}
        <div className="flex flex-col gap-8">
          <motion.h1
            className="pp-lede text-5xl md:text-7xl lg:text-[5.5rem]"
            variants={wordContainer}
          >
            <span className="relative inline-block">
              {/* Line 1: "Prose," */}
              <span className="flex flex-wrap gap-x-[0.25em]">
                {LEDE_LINE_1.map((w) => (
                  <span
                    className="inline-block overflow-hidden leading-[1.05]"
                    key={w}
                  >
                    <motion.span
                      className="inline-block"
                      style={{ willChange: "transform" }}
                      variants={word}
                    >
                      {w}
                    </motion.span>
                  </span>
                ))}
              </span>

              {/* Line 2: "not prompts" + period */}
              <span className="flex flex-wrap items-baseline gap-x-[0.25em]">
                {LEDE_LINE_2.map((w, i) => (
                  <span
                    className="inline-block overflow-hidden leading-[1.05]"
                    key={w}
                  >
                    <motion.span
                      className="inline-block"
                      style={{
                        willChange: "transform",
                        fontStyle: i === 1 ? "italic" : undefined,
                        color:
                          i === 1
                            ? "var(--strand-color-accent-lede)"
                            : undefined,
                      }}
                      variants={word}
                    >
                      {w}
                    </motion.span>
                  </span>
                ))}
                <motion.span
                  className="inline-block leading-[1.05]"
                  style={{ transformOrigin: "bottom center" }}
                  variants={period}
                >
                  .
                </motion.span>
              </span>

              {/* Ink swash — draws AFTER the period lands. */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-3 left-0 w-[min(420px,80%)]"
                fill="none"
                height="22"
                preserveAspectRatio="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.4"
                style={{ color: "var(--strand-color-accent-lede)" }}
                viewBox="0 0 420 22"
              >
                <motion.path
                  d="M4 14 Q 60 4 130 12 T 260 10 T 416 8"
                  variants={swash}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.div custom={1.4} variants={fadeUp}>
            <Standfirst className="max-w-[40ch] text-xl md:text-2xl">
              A curated library of literary voices, packaged as drop-in prompts
              for any LLM. Style guides that read like style.
            </Standfirst>
          </motion.div>

          <motion.div
            className="mt-2 flex flex-wrap items-center gap-3"
            custom={1.7}
            variants={fadeUp}
          >
            <Link
              className={CTA}
              style={{
                background: "var(--strand-color-ink-primary)",
                color: "var(--strand-color-surface-canvas)",
              }}
              to="/library"
            >
              Browse the library →
            </Link>
            <Link
              className={CTA}
              style={{
                border: "1px solid var(--strand-color-ink-primary)",
                color: "var(--strand-color-ink-primary)",
              }}
              to="/playground"
            >
              Try the playground
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
```

Tailwind v4 supports arbitrary spacing utilities like `mb-22` (88px) out of the box. If the project's Tailwind config disables this, replace with explicit style: `style={{ marginBottom: "88px" }}` on the kicker wrapper.

- [ ] **Step 4.2 — Verify type-check**

Run: `pnpm --filter postpilot typecheck`
Expected: PASS.

- [ ] **Step 4.3 — Browser visual check**

Run dev server. Visit http://localhost:5173 and confirm:
- Kicker reads "Style guides for AI agents"
- Lede animates word-by-word: "Prose," → "not" → "prompts" (italic + accent on "prompts")
- Period appears last with a small overshoot
- Ink swash draws beneath the lede ~2s in
- Standfirst reads the new copy
- Primary CTA "Browse the library →" routes to `/library` on click
- Secondary CTA "Try the playground" routes to `/playground` on click
- Refresh with `prefers-reduced-motion` enabled in browser dev tools — animation collapses to instant render (existing global CSS handles this)

- [ ] **Step 4.4 — Commit**

```bash
git add apps/quill/client/components/hero.tsx
git commit -m "feat(quill): hero — 'Prose, not prompts.' lede + retuned animation"
```

---

## Task 5: AuthorStrip reframe

**Files:**
- Modify: `apps/quill/client/components/author-strip.tsx:7-18`

- [ ] **Step 5.1 — Update the heading and see-all label**

In `apps/quill/client/components/author-strip.tsx`, replace lines 7-18 with:

```tsx
export function AuthorStrip({
  guides,
  totalCount,
}: {
  guides: GuideListItem[];
  totalCount?: number;
}) {
  const seeAllLabel =
    totalCount && totalCount > 0 ? `See all ${totalCount}+ →` : "See all →";
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-6 flex items-center justify-between">
        <Kicker>A few of the voices</Kicker>
        <Link
          className="text-sm hover:underline"
          style={{ color: "var(--strand-color-ink-muted)" }}
          to="/library"
        >
          {seeAllLabel}
        </Link>
      </div>
```

(rest of the function body unchanged from line 19 onward.)

The component now optionally accepts `totalCount`. Index route passes it. Floor to nearest 10 for the displayed count if you'd rather show "50+" than "53+":

```ts
const seeAllLabel =
  totalCount && totalCount > 0
    ? `See all ${Math.floor(totalCount / 10) * 10}+ →`
    : "See all →";
```

Use whichever flavour reads better; both ship with the same JSX.

- [ ] **Step 5.2 — Verify type-check**

Run: `pnpm --filter postpilot typecheck`
Expected: PASS.

- [ ] **Step 5.3 — Commit**

```bash
git add apps/quill/client/components/author-strip.tsx
git commit -m "feat(quill): reframe author strip heading to 'A few of the voices'"
```

---

## Task 6: DocsTeaser component

**Files:**
- Create: `apps/quill/client/components/docs-teaser.tsx`

- [ ] **Step 6.1 — Create the component**

Create `apps/quill/client/components/docs-teaser.tsx`:

```tsx
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function DocsTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <motion.div
        className="flex flex-col items-start justify-between gap-6 rounded-xl px-10 py-10 md:flex-row md:items-center md:gap-10 md:px-12 md:py-12"
        initial={{ opacity: 0, y: 12 }}
        style={{
          background: "var(--strand-color-ink-primary)",
          color: "var(--strand-color-surface-canvas)",
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-80px" }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-[38ch]">
          {/* DocsTeaser is the only place in the app where the kicker uses
              Geist Mono instead of Geist — deliberate "developer zone" cue. */}
          <p
            className="mb-3 text-xs"
            style={{
              fontFamily: "var(--strand-type-mono)",
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--strand-color-accent-lede)",
            }}
          >
            For developers
          </p>
          <h2
            className="pp-lede"
            style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}
          >
            Fetch a voice.{" "}
            <span
              style={{
                fontStyle: "italic",
                color: "var(--strand-color-accent-lede)",
              }}
            >
              Ship it.
            </span>
          </h2>
          <p
            className="mt-3 text-sm md:text-base"
            style={{
              color: "var(--strand-color-ink-muted)",
              lineHeight: 1.55,
            }}
          >
            Every guide ships as a system prompt, a JSON spec, and an eval
            rubric. Drop it into any LLM in five lines.
          </p>
        </div>
        <Link
          className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium whitespace-nowrap transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--strand-color-accent-lede)]"
          style={{
            background: "var(--strand-color-surface-canvas)",
            color: "var(--strand-color-ink-primary)",
          }}
          to="/docs"
        >
          Read the docs →
        </Link>
      </motion.div>
    </section>
  );
}
```

The `to="/docs"` requires Task 9 (`/docs` route) to exist for type safety. Implement Task 9 before Task 6 to avoid temporary type errors, or accept a temporary `as any` and clean up in Task 12.

- [ ] **Step 6.2 — Verify type-check**

Run: `pnpm --filter postpilot typecheck`
Expected: PASS.

- [ ] **Step 6.3 — Commit**

```bash
git add apps/quill/client/components/docs-teaser.tsx
git commit -m "feat(quill): add DocsTeaser landing card"
```

---

## Task 7: Library route — accept `?voice=` search param

**Files:**
- Modify: `apps/quill/client/routes/library.tsx`
- Modify: `apps/quill/client/components/library-view.tsx`

- [ ] **Step 7.1 — Add `validateSearch` to the library route**

Replace `apps/quill/client/routes/library.tsx`:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Kicker, Lede, Standfirst } from "../components/editorial";
import { LibraryView } from "../components/library-view";
import { isVibeSlug, VIBE_TAGS } from "../../src/lib/vibes";

const librarySearchSchema = z.object({
  voice: z
    .string()
    .optional()
    .refine((v) => v === undefined || isVibeSlug(v), {
      message: "Unknown voice slug",
    }),
});

export const Route = createFileRoute("/library")({
  component: LibraryPage,
  head: () => ({ meta: [{ title: "Library — Post Pilot" }] }),
  validateSearch: librarySearchSchema,
});

function LibraryPage() {
  const search = Route.useSearch();
  const vibe = search.voice && isVibeSlug(search.voice) ? search.voice : undefined;
  const tag = vibe ? VIBE_TAGS[vibe] : undefined;

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Kicker>{tag ? `Voice · ${tag.label}` : "Library"}</Kicker>
        <Lede as="h1" size="lg">
          {tag ? tag.label : "The Library"}
        </Lede>
        <Standfirst className="max-w-[52ch]">
          {tag
            ? tag.description
            : "Filter by era, use case, or voice. Every official guide ships with a system prompt, a structured spec, and an eval rubric."}
        </Standfirst>
      </div>
      <LibraryView initialVibe={vibe} />
    </section>
  );
}
```

- [ ] **Step 7.2 — `LibraryView` accepts `initialVibe` and filters accordingly**

In `apps/quill/client/components/library-view.tsx`, change the component signature and add vibe-handling logic.

Add imports at the top:
```ts
import { CANONICAL_VIBES, VIBE_TAGS, type VibeSlug } from "../../src/lib/vibes";
import type { ActiveUseCase } from "../../src/lib/types";
```

Change the component signature and initial state:

```tsx
export function LibraryView({ initialVibe }: { initialVibe?: VibeSlug }) {
  const [eras, setEras] = useState<Era[]>([]);
  const [useCases, setUseCases] = useState<ActiveUseCase[]>([]);
  const [voice, setVoice] = useState<VoiceAxis[]>(() =>
    initialVibe && CANONICAL_VIBES.has(initialVibe)
      ? [initialVibe as VoiceAxis]
      : []
  );
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<GuideSort>("author");

  // For curated (non-canonical) vibe tags, filter results client-side
  // by matching guide.slug against VIBE_TAGS[vibe].matches.
  const curatedMatches =
    initialVibe && !CANONICAL_VIBES.has(initialVibe)
      ? VIBE_TAGS[initialVibe].matches
      : undefined;
```

Then, where `items` is computed (`useMemo`, around line 51), filter by `curatedMatches` if set:

```tsx
const items = useMemo(() => {
  const all = data?.pages.flatMap((p) => p.items) ?? [];
  if (curatedMatches && curatedMatches.length > 0) {
    const allowed = new Set(curatedMatches);
    return all.filter((g) => allowed.has(g.slug));
  }
  // If the curated tag has an empty matches array, surface zero results
  // (the user hasn't curated this vibe yet).
  if (curatedMatches && curatedMatches.length === 0) {
    return [];
  }
  return all;
}, [data, curatedMatches]);
```

- [ ] **Step 7.3 — Verify type-check**

Run: `pnpm --filter postpilot typecheck`
Expected: PASS.

- [ ] **Step 7.4 — Browser visual check**

Run dev server. Visit:
- http://localhost:5173/library — unchanged, shows full catalog
- http://localhost:5173/library?voice=terse — page heading is "Terse"; sidebar voice filter has "Terse" pre-checked; results filtered to terse guides
- http://localhost:5173/library?voice=hard-boiled — page heading is "Hard-boiled"; results are empty (matches array is empty for v1); no console errors
- http://localhost:5173/library?voice=invalid — Zod refine should reject; TanStack Router shows the route's onError or strips the param

- [ ] **Step 7.5 — Commit**

```bash
git add apps/quill/client/routes/library.tsx apps/quill/client/components/library-view.tsx
git commit -m "feat(quill): library route accepts ?voice= search param for chip-strip deep links"
```

---

## Task 8: Footer additions

**Files:**
- Modify: `apps/quill/client/components/footer.tsx` (full rewrite)

- [ ] **Step 8.1 — Rewrite the footer**

Replace `apps/quill/client/components/footer.tsx`:

```tsx
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer
      className="mt-24 border-t"
      style={{
        borderColor: "var(--strand-color-rule)",
        color: "var(--strand-color-ink-muted)",
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="pp-lede text-base">Post Pilot</span>
          <span className="pp-byline">
            Style guides for AI agents, curated.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
          <Link to="/library">Library</Link>
          <Link to="/playground">Playground</Link>
          <Link to="/docs">Docs</Link>
          <a href="/v1/health">API status</a>
          <span aria-hidden style={{ opacity: 0.4 }}>
            ·
          </span>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <a
            className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 font-medium transition-opacity hover:opacity-90"
            href="https://buymeacoffee.com/allosaurus"
            rel="noopener noreferrer"
            style={{ background: "#ffdd00", color: "#1a1a1a" }}
            target="_blank"
          >
            <span aria-hidden>☕</span>
            Buy me a coffee
          </a>
        </div>
      </div>
    </footer>
  );
}
```

`to="/docs"`, `to="/terms"`, `to="/privacy"` require Tasks 9–11 to land first for type safety. Either reorder (do 9–11 before 8) or accept temporary type loosening.

- [ ] **Step 8.2 — Verify type-check**

Run: `pnpm --filter postpilot typecheck`
Expected: PASS (after Tasks 9–11).

- [ ] **Step 8.3 — Browser visual check**

Footer shows: Library · Playground · Docs · API status · separator · Terms · Privacy · ☕ Buy me a coffee.
Coffee button has yellow background, opens https://buymeacoffee.com/allosaurus in a new tab.

- [ ] **Step 8.4 — Commit**

```bash
git add apps/quill/client/components/footer.tsx
git commit -m "feat(quill): footer adds Docs / Terms / Privacy / Buy me a coffee"
```

---

## Task 9: `/docs` page

**Files:**
- Create: `apps/quill/client/routes/docs.tsx`

- [ ] **Step 9.1 — Create the docs page**

Create `apps/quill/client/routes/docs.tsx`:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { Column, Kicker, Lede, Pull, Rule, Standfirst } from "../components/editorial";

export const Route = createFileRoute("/docs")({
  component: DocsPage,
  head: () => ({
    meta: [{ title: "Docs — Post Pilot" }],
  }),
});

const QUICKSTART = `import { fetch } from "node-fetch";

// 1. Fetch a guide.
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

const APPLY = `// POST /v1/apply — render a guide+preset against an input.
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
          direct provider SDKs — so you get caching, observability, fallbacks,
          and BYOK virtual keys for free.
        </p>
        <CodeBlock>{QUICKSTART}</CodeBlock>

        <h2 className="pp-lede mt-12 text-3xl">The guide shape</h2>
        <p>
          Every guide is a JSON object with these fields:
        </p>
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
            <code>avg_sentence_length &lt;= 14</code>) and judge criteria for
            measuring fidelity.
          </li>
        </ul>

        <h2 className="pp-lede mt-12 text-3xl">Endpoints</h2>
        <p>The Worker exposes a small REST surface at <code>/v1/*</code>:</p>
        <ul>
          <li>
            <code>GET /v1/guides</code> — list. Filters:{" "}
            <code>era</code>, <code>useCase</code>, <code>voice</code>,{" "}
            <code>q</code>.
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
        <p>
          Each guide ships an <code>eval_rubric</code> with two parts:
        </p>
        <ul>
          <li>
            <strong>Deterministic metrics</strong> — measurable properties
            (avg sentence length, adverbs per 200 words, abstract count) with
            an op (<code>&lt;=</code>, <code>&gt;=</code>, <code>==</code>),
            a target value, and a weight.
          </li>
          <li>
            <strong>Judge criteria</strong> — short prompts a model can
            grade against (e.g. "does the passage avoid latinate
            vocabulary?"). Each weighted to add up to 1.0.
          </li>
        </ul>

        <Pull attribution="Post Pilot, the docs">
          A guide is a description of a voice that a model can read and
          measure itself against. The point isn't to imitate one writer; the
          point is to have an opinion about prose.
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
```

- [ ] **Step 9.2 — Restart dev server to regenerate `routeTree.gen.ts`**

Stop and restart `pnpm --filter postpilot dev`. The TanStack Router plugin regenerates `client/routeTree.gen.ts` to include the new `/docs` route on file save. Confirm the file shows `docs` in the generated route tree.

- [ ] **Step 9.3 — Verify type-check**

Run: `pnpm --filter postpilot typecheck`
Expected: PASS.

- [ ] **Step 9.4 — Browser visual check**

Visit http://localhost:5173/docs — page renders with editorial layout, code blocks readable, no console errors.

- [ ] **Step 9.5 — Commit**

```bash
git add apps/quill/client/routes/docs.tsx apps/quill/client/routeTree.gen.ts
git commit -m "feat(quill): add /docs developer guide page"
```

---

## Task 10: `/terms` page

**Files:**
- Create: `apps/quill/client/routes/terms.tsx`

- [ ] **Step 10.1 — Create the Terms route**

Create `apps/quill/client/routes/terms.tsx`:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { Column, Kicker, Lede, Rule, Standfirst } from "../components/editorial";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({ meta: [{ title: "Terms — Post Pilot" }] }),
});

function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Kicker>Legal</Kicker>
        <Lede as="h1" size="lg">
          Terms of Service
        </Lede>
        <Standfirst>Last updated: 2026-04-26.</Standfirst>
      </div>

      <Column>
        <h2 className="pp-lede mt-0 text-2xl">1. Acceptance</h2>
        <p>
          By accessing Post Pilot — its website, API, or any associated
          service — you agree to these Terms of Service. If you do not
          agree, do not use the service.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">2. License to use</h2>
        <p>
          Post Pilot grants you a non-exclusive, non-transferable, revocable
          license to use the service for the purpose of generating prose
          with your own LLM applications. Excessive automated use that
          degrades the service for others is grounds for revocation.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">3. Acceptable use</h2>
        <ul>
          <li>
            Don't scrape the catalog wholesale to republish as a competing
            product.
          </li>
          <li>Don't use the service to generate unlawful content.</li>
          <li>
            Don't attempt to bypass rate limits, auth, or other technical
            controls.
          </li>
        </ul>

        <h2 className="pp-lede mt-10 text-2xl">4. Intellectual property</h2>
        <p>
          Each guide is a curator's interpretation of a voice — written
          analysis and structured constraints, not a reproduction of the
          underlying author's text. Guides ship with a{" "}
          <code>copyright_posture</code> field that documents this for each
          entry. The catalog as a compilation is © Post Pilot; individual
          guide content is © the curator named on the entry.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">5. No warranty</h2>
        <p>
          The service is provided "as is" without warranty of any kind.
          Generated output is not guaranteed to match any specific quality
          bar — the eval rubric is a measurement tool, not a guarantee.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">6. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, Post Pilot is not liable
          for indirect, incidental, special, consequential, or punitive
          damages arising out of your use of the service.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">7. Changes to these terms</h2>
        <p>
          We may update these terms. Material changes will be posted here
          with an updated date.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">8. Contact</h2>
        <p>
          Reach out via the contact link in your account. Or email the
          curator listed on a specific guide for content questions.
        </p>

        <Rule />
      </Column>
    </section>
  );
}
```

This is template-grade. The user reviews the actual legal copy before launch.

- [ ] **Step 10.2 — Verify type-check + visual check**

Restart dev server, visit http://localhost:5173/terms, confirm rendering.

Run: `pnpm --filter postpilot typecheck`
Expected: PASS.

- [ ] **Step 10.3 — Commit**

```bash
git add apps/quill/client/routes/terms.tsx apps/quill/client/routeTree.gen.ts
git commit -m "feat(quill): add /terms page (template legal copy — owner reviews before launch)"
```

---

## Task 11: `/privacy` page

**Files:**
- Create: `apps/quill/client/routes/privacy.tsx`

- [ ] **Step 11.1 — Create the Privacy route**

Create `apps/quill/client/routes/privacy.tsx`:

```tsx
import { createFileRoute } from "@tanstack/react-router";
import { Column, Kicker, Lede, Rule, Standfirst } from "../components/editorial";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({ meta: [{ title: "Privacy — Post Pilot" }] }),
});

function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <div className="mb-12 flex flex-col gap-4">
        <Kicker>Legal</Kicker>
        <Lede as="h1" size="lg">
          Privacy Policy
        </Lede>
        <Standfirst>Last updated: 2026-04-26.</Standfirst>
      </div>

      <Column>
        <h2 className="pp-lede mt-0 text-2xl">What we collect</h2>
        <ul>
          <li>
            Account identity, when you sign in (email + provider, via
            better-auth).
          </li>
          <li>
            Request metadata (path, status, latency) so we can keep the
            service running.
          </li>
          <li>
            For <code>/v1/apply</code> calls, the input text you submit. We
            route it through Cloudflare AI Gateway with{" "}
            <code>cf-aig-zdr: true</code> set, which means the upstream
            provider will not retain it for training.
          </li>
        </ul>

        <h2 className="pp-lede mt-10 text-2xl">What we don't collect</h2>
        <ul>
          <li>
            We don't train models on your prompts. We don't ship them
            anywhere except the gateway path required to fulfill the
            request.
          </li>
          <li>
            We don't sell your data. There's no third-party advertising,
            tracking, or analytics SDK on this site beyond what Cloudflare
            provides at the platform level.
          </li>
        </ul>

        <h2 className="pp-lede mt-10 text-2xl">Cookies</h2>
        <p>
          One auth session cookie set by better-auth, signed and HTTP-only.
          That's the whole list.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">Retention</h2>
        <p>
          Account data lives until you delete your account. Request logs
          rotate per Cloudflare's standard retention. <code>/v1/apply</code>{" "}
          inputs are not stored beyond the duration of the request.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">Third parties</h2>
        <ul>
          <li>
            <strong>Cloudflare</strong> — Workers, D1, AI Gateway. The
            service runs entirely on Cloudflare.
          </li>
          <li>
            <strong>LLM providers</strong> — OpenAI, Anthropic, Workers AI.
            Accessed via AI Gateway dynamic routes, never direct.
          </li>
        </ul>

        <h2 className="pp-lede mt-10 text-2xl">Your rights</h2>
        <p>
          You can request access to or deletion of your account data at any
          time via the contact link in your account.
        </p>

        <h2 className="pp-lede mt-10 text-2xl">Changes</h2>
        <p>
          Material changes to this policy are posted here with an updated
          date.
        </p>

        <Rule />
      </Column>
    </section>
  );
}
```

Same template caveat — owner reviews before launch.

- [ ] **Step 11.2 — Verify type-check + visual check**

Restart dev server, visit http://localhost:5173/privacy, confirm rendering.

Run: `pnpm --filter postpilot typecheck`
Expected: PASS.

- [ ] **Step 11.3 — Commit**

```bash
git add apps/quill/client/routes/privacy.tsx apps/quill/client/routeTree.gen.ts
git commit -m "feat(quill): add /privacy page (template — owner reviews before launch)"
```

---

## Task 12: Wire up `index.tsx` + delete unused components + final verification

**Files:**
- Modify: `apps/quill/client/routes/index.tsx`
- Delete (verify zero consumers): `apps/quill/client/components/use-case-strip.tsx`, `apps/quill/client/components/api-snippet.tsx`

- [ ] **Step 12.1 — Update the landing route**

Replace `apps/quill/client/routes/index.tsx`:

```tsx
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { AuthorStrip } from "../components/author-strip";
import { BrowseByVoice } from "../components/browse-by-voice";
import { DocsTeaser } from "../components/docs-teaser";
import { Hero } from "../components/hero";
import { api, queryKeys } from "../lib/api";

export const Route = createFileRoute("/")({
  component: HomePage,
  loader: async ({ context }) => {
    await context.queryClient.prefetchQuery({
      queryKey: queryKeys.guides({}),
      queryFn: () => api.listGuides({}),
    });
  },
});

function HomePage() {
  const { data } = useQuery({
    queryKey: queryKeys.guides({}),
    queryFn: () => api.listGuides({}),
  });

  const featured = (data?.items ?? []).slice(0, 5);
  const totalCount = data?.total;

  return (
    <>
      <Hero />
      <BrowseByVoice />
      <AuthorStrip guides={featured} totalCount={totalCount} />
      <DocsTeaser />
    </>
  );
}
```

- [ ] **Step 12.2 — Verify no other consumers of removed components**

Run:
```bash
grep -rn "use-case-strip\|UseCaseStrip" apps/quill/client apps/quill/src
```
Expected: only the import in `index.tsx` (now removed) and the file `use-case-strip.tsx` itself. If grep shows other consumers, leave the file in place; otherwise proceed.

```bash
grep -rn "api-snippet\|ApiSnippet" apps/quill/client apps/quill/src
```
Same logic.

- [ ] **Step 12.3 — Delete unused components**

If the grep in 12.2 confirmed zero consumers:

```bash
rm apps/quill/client/components/use-case-strip.tsx apps/quill/client/components/api-snippet.tsx
```

- [ ] **Step 12.4 — Final type-check**

Run: `pnpm --filter postpilot typecheck`
Expected: PASS.

- [ ] **Step 12.5 — Full landing page browser pass**

Restart dev server. Visit http://localhost:5173 and walk through:

- [ ] Hero animates: kicker fades in, lede stamps up word-by-word, period pops in last, ink swash draws beneath.
- [ ] Hero CTAs: "Browse the library →" routes to `/library`. "Try the playground" routes to `/playground`.
- [ ] Browse-by-voice strip below hero: 10 chips in order Terse · Lyrical · Ornate · Wry · Hard-boiled · Cool & detached · Confessional · Epistolary · Romantic · Plainspoken. Hover inverts each chip.
- [ ] Each chip click routes to `/library?voice=<slug>`. Canonical chips (Terse / Lyrical / Ornate / Wry) show a filtered catalog. Curated chips show the title and standfirst from `VIBE_TAGS` and an empty results panel (until matches are populated).
- [ ] AuthorStrip below: heading "A few of the voices", "See all 53+ →" link, 5 author tiles.
- [ ] DocsTeaser below: dark card, mono "For developers" kicker, "Fetch a voice. *Ship it.*" lede, "Read the docs →" button routes to `/docs`.
- [ ] Footer: nav row reads Library · Playground · Docs · API status · separator · Terms · Privacy · ☕ Buy me a coffee. Coffee opens https://buymeacoffee.com/allosaurus in new tab.
- [ ] `/docs`, `/terms`, `/privacy` render their pages.
- [ ] Toggle dark mode (if available via the nav theme switch). Confirm DocsTeaser dark card and footer coffee button still read correctly. Tweak inline if needed.
- [ ] Toggle `prefers-reduced-motion` in browser dev tools, refresh `/`. Hero animation collapses to instant render.

- [ ] **Step 12.6 — Commit**

```bash
git add apps/quill/client/routes/index.tsx
git rm apps/quill/client/components/use-case-strip.tsx apps/quill/client/components/api-snippet.tsx 2>/dev/null || true
git commit -m "feat(quill): wire landing redesign — drop UseCaseStrip + ApiSnippet, add BrowseByVoice + DocsTeaser"
```

- [ ] **Step 12.7 — Push**

```bash
git push
```

---

## Self-review notes

**Spec coverage:** Every section in the spec maps to a numbered task — Hero (4), BrowseByVoice (3), AuthorStrip (5), DocsTeaser (6), Library route (7), Footer (8), /docs (9), /terms (10), /privacy (11), index wiring (12), use-case slim (1), vibes module (2). ✓

**Implementation order constraints:**
- Task 7 (library route) must run before Task 3 (BrowseByVoice) for typed `search` prop.
- Tasks 9–11 (new routes) must run before Task 8 (footer) for typed `to=` props.
- Task 12 (wiring) must run last.
- Recommended execution order: **1 → 2 → 7 → 3 → 4 → 5 → 9 → 10 → 11 → 6 → 8 → 12.**

**Out of scope (deferred):** Per-guide retagging into the new use-case taxonomy. Populating `VIBE_TAGS[*].matches` for the 6 curated tags. Real legal copy in `/terms` and `/privacy`. Light/dark mode polish on the new dark DocsTeaser and yellow coffee button — verify visually at Step 12.5 and tweak inline.
