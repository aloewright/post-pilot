import type { Guide } from "../types";

export const hugo: Guide = {
  slug: "hugo",
  author: "Victor Hugo",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · 19th c.",
  standfirst:
    "Moral declaration in long, accumulating cadences. The sentence keeps adding clauses until the indictment, or the blessing, is complete.",
  description:
    "In the sample, Hugo writes a Bishop who speaks in epigrams and a narrator who builds long, hammering periods around objects of public conscience — the guillotine, the poor, the law. Sentences gather by repetition: the same noun returned to, then turned over, then turned over again. Useful when you want copy that argues a moral case in public, or that lifts a plain object into the light without flinching.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["narrative", "marketing", "rfc"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 22, max: 60 },
    vocabulary_register:
      "elevated and public; abstractions named directly (law, justice, soul); plain nouns lifted by repetition",
    syntax:
      "long periodic sentences, often built by anaphora and accumulation; semicolons stacking parallel observations; aphoristic short sentences punctuating the cadence",
    figurative_language:
      "personification of social objects (the scaffold as a being); sustained metaphor that argues rather than ornaments",
    pacing:
      "rhetorical and rising; the paragraph builds, then lands on a short sentence that reads as verdict or blessing",
  },
  do: [
    "Build paragraphs by repetition — return to the same noun and turn it over until the case is made.",
    "Let abstractions stand named (justice, law, the poor); the moral weight is in saying the word.",
    "Pair a long accumulating sentence with a short aphoristic one that closes the figure.",
    "Personify the institution or object you are indicting; address it as if it were present.",
  ],
  dont: [
    "Do not hedge the moral claim — Hugo's narrator does not soften an indictment with qualifiers.",
    "Do not reach for a clever metaphor when repetition will do the work.",
    "Do not end a paragraph on the loud word; end on the quiet, declarative one.",
    "Do not write the Bishop as ironic; the wit is sincere and the kindness is unembarrassed.",
  ],
  exemplars: [
    {
      label: "Narrator — the scaffold as living thing",
      content:
        "The guillotine is the concretion of the law; it is called _vindicate_; it is not neutral, and it does not permit you to remain neutral. He who sees it shivers with the most mysterious of shivers. All social problems erect their interrogation point around this chopping-knife. The scaffold is a vision. The scaffold is not a piece of carpentry; the scaffold is not a machine; the scaffold is not an inert bit of mechanism constructed of wood, iron and cords.",
      source:
        "Victor Hugo, Les Misérables (Project Gutenberg #135; public domain)",
      is_generated: false,
    },
    {
      label: "Bishop — aphorism by accumulation",
      content:
        "“The faults of women, of children, of the feeble, the indigent, and the ignorant, are the fault of the husbands, the fathers, the masters, the strong, the rich, and the wise.”",
      source:
        "Victor Hugo, Les Misérables (Project Gutenberg #135; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Victor Hugo's narrator and his Bishop in Les Misérables. Build sentences by accumulation — name the object, then return to it, then return to it again, until the moral claim is unmistakable. Use parallel clauses and semicolons; let anaphora carry the cadence. Name abstractions plainly: law, justice, the poor, the soul. When the figure is complete, close with a short, declarative sentence that reads as verdict or blessing. Personify the institutions you indict — speak to the scaffold, the law, the night — as though they could hear. Do not hedge the moral claim, and do not end on the loud word.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 18, weight: 0.1 },
      { metric: "max_sentence_length", op: ">=", value: 35, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "accumulation",
        prompt:
          "Does the paragraph build by repetition and parallel clauses, returning to the same noun until the case is complete?",
        weight: 0.25,
      },
      {
        id: "moral-directness",
        prompt:
          "Are abstractions (law, justice, the poor) named directly, without ironic distance or hedging?",
        weight: 0.25,
      },
      {
        id: "cadence-close",
        prompt:
          "Does a long accumulating passage close on a short, declarative sentence that lands as verdict or blessing?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
