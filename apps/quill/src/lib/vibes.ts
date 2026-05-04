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
    description:
      "Voices that smile. Irony in the seams; understatement is the joke.",
  },
  "hard-boiled": {
    label: "Hard-boiled",
    description:
      "Stripped, masculine, tough. Walks down a mean street and reports on it.",
    matches: [
      "ambrose-bierce",
      "hammett",
      "hemingway",
      "jack-london",
      "john-buchan",
      "maupassant",
      "stephen-crane",
    ],
  },
  "cool-detached": {
    label: "Cool & detached",
    description:
      "Voices that hold the reader at a deliberate distance. Reportorial in posture, lyrical underneath.",
    matches: [
      "austen",
      "bunin",
      "chekhov",
      "flaubert",
      "gautier",
      "gibbon",
      "leopoldo-alas",
      "lermontov",
      "m-r-james",
      "maupassant",
      "saki",
      "snorri-sturluson",
      "stephen-crane",
      "wharton",
      "william-dean-howells",
      "zola",
    ],
  },
  confessional: {
    label: "Confessional",
    description:
      "First person, unguarded, the writer in the prose. Risk of vulnerability is the price of admission.",
    matches: [
      "augustine",
      "charlotte-bronte",
      "charlotte-perkins-gilman",
      "de-quincey",
      "dickinson",
      "dostoevsky",
      "kierkegaard",
      "montaigne",
      "nerval",
      "proust",
      "sei-shonagon",
      "unamuno",
      "whitman",
      "william-wordsworth",
    ],
  },
  epistolary: {
    label: "Epistolary",
    description:
      "Written in the form of letters or addressed prose. Direct, intimate, second-person register.",
    matches: [
      "alexander-pope",
      "aphra-behn",
      "augustine",
      "elizabeth-barrett-browning",
      "frances-burney",
      "goethe",
      "horace",
      "ovid",
      "shelley",
      "william-cowper",
    ],
  },
  romantic: {
    label: "Romantic",
    description:
      "Sentiment without irony. Heightened feeling earned, not posed.",
    matches: [
      "alfred-tennyson",
      "ann-radcliffe",
      "de-quincey",
      "emerson",
      "gerard-manley-hopkins",
      "goethe",
      "hazlitt",
      "hugo",
      "john-keats",
      "leopardi",
      "lermontov",
      "matthew-lewis",
      "mickiewicz",
      "nerval",
      "novalis",
      "percy-shelley",
      "poe",
      "pushkin",
      "ruskin",
      "samuel-taylor-coleridge",
      "shelley",
      "walter-scott",
      "washington-irving",
      "whitman",
      "william-blake",
      "william-wordsworth",
    ],
  },
  plainspoken: {
    label: "Plainspoken",
    description:
      "Anglo-Saxon vocabulary, conversational rhythm. Trust the reader to follow along.",
    matches: [
      "adam-smith",
      "aleksis-kivi",
      "ambrose-bierce",
      "anderson",
      "anthony-trollope",
      "asimov",
      "bacon",
      "bagehot",
      "booker-t-washington",
      "booth-tarkington",
      "caesar",
      "carroll",
      "cather",
      "catullus",
      "cervantes",
      "charlotte-bronte",
      "chekhov",
      "darwin",
      "defoe",
      "douglass",
      "doyle",
      "droste-hulshoff",
      "du-bois",
      "e-nesbit",
      "elizabeth-gaskell",
      "engels",
      "epictetus",
      "flaubert",
      "fontane",
      "freud",
      "george-herbert",
      "goethe",
      "hammett",
      "hamsun",
      "hazlitt",
      "hemingway",
      "henry-adams",
      "hesiod",
      "hesse",
      "horace",
      "huxley",
      "ibsen",
      "jack-london",
      "jerome-k-jerome",
      "john-buchan",
      "jules-verne",
      "kafka",
      "kate-chopin",
      "keller",
      "kropotkin",
      "leopardi",
      "lermontov",
      "leskov",
      "locke",
      "louisa-may-alcott",
      "lucian",
      "lucretius",
      "machiavelli",
      "malory",
      "marcus-aurelius",
      "maria-edgeworth",
      "marx",
      "mary-e-wilkins-freeman",
      "maupassant",
      "mill",
      "oliver-goldsmith",
      "paine",
      "pascal",
      "petronius",
      "plutarch",
      "pound",
      "robert-burns",
      "russell",
      "sappho",
      "sarah-orne-jewett",
      "schopenhauer",
      "snorri-sturluson",
      "spinoza",
      "stendhal",
      "stephen-crane",
      "stevenson",
      "suetonius",
      "swift",
      "theodore-dreiser",
      "thomas-henry-huxley",
      "thomas-middleton",
      "thoreau",
      "thucydides",
      "tolstoy",
      "twain",
      "veblen",
      "vonnegut",
      "wallace",
      "whitman",
      "william-cowper",
      "william-dean-howells",
      "william-james",
      "william-wordsworth",
      "zola",
    ],
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
