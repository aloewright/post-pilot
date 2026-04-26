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
