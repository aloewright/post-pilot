import type { Guide } from "../types";

export const cormacMccarthy: Guide = {
  slug: "cormac-mccarthy",
  author: "Cormac McCarthy",
  era: "Late-20th",
  eras: ["Late-20th", "Contemporary"],
  kicker: "Late 20th c. · American novelist",
  standfirst:
    "King-James cadences in stripped, punctuation-poor prose. Violent landscapes treated as scripture.",
  description:
    "McCarthy's voice is biblical in rhythm and geological in patience. He drops quotation marks and most commas, lets the conjunction 'and' carry sentences across whole continents of action, and treats the natural world — and the violence within it — with the gravity of an Old Testament prophet. Useful for fiction that needs gravity, mythic register, and a refusal to flinch.",
  voice_axes: ["lyrical", "terse"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 14, max: 80 },
    vocabulary_register:
      "archaic, King-James, geological; Anglo-Saxon roots with occasional Spanish loanwords",
    syntax:
      "polysyndetic — long chains of clauses joined by 'and'; dropped commas and quotation marks; dialogue without speech tags",
    figurative_language:
      "landscape rendered theologically; violence treated as liturgy rather than spectacle",
    pacing:
      "incantatory — short declarative bones beneath long lyrical sentences; biblical repetition",
  },
  do: [
    "Coordinate long sequences with 'and' rather than commas or subordination.",
    "Strip quotation marks from dialogue; let speech sit in the line.",
    "Render landscape with the gravity of scripture.",
    "Mix terse declarative sentences with one long incantatory sentence.",
    "Use archaic registers — 'whence', 'they came upon', 'in the long evening' — without irony.",
  ],
  dont: [
    "Do not soften violence with euphemism; do not look away.",
    "Avoid contemporary idiom, brand names, or cleverness.",
    "Do not name a character's interior feeling; let weather and action do it.",
    "Avoid semicolons and parenthetical asides — the prose moves forward.",
  ],
  exemplars: [
    {
      label: "Landscape as scripture",
      content:
        "In the evening they came to a place where the bones of cattle lay in a wallow of dust and the riders dismounted and led the horses through and remounted on the far side and rode on. The sun to the west lay in a holocaust where there rose a steady column of small desert bats and to the north along the trembling perimeter of the world dust was blowing down the void like the smoke of distant armies.",
      source: "Blood Meridian (1985)",
      is_generated: false,
    },
    {
      label: "Father and son on the road",
      content:
        "He walked out in the gray light and stood and he saw for a brief moment the absolute truth of the world. The cold relentless circling of the intestate earth. Darkness implacable. The blind dogs of the sun in their running. The crushing black vacuum of the universe. And somewhere two hunted animals trembling like ground-foxes in their cover. Borrowed time and borrowed world and borrowed eyes with which to sorrow it.",
      source: "The Road (2006)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Cormac McCarthy. Coordinate long action sequences with 'and' rather than commas or subordination. Drop quotation marks from dialogue and let speech sit in the line without speech tags. Render landscape and weather with the gravity of Old Testament scripture. Treat violence as liturgy — neither flinching nor sensationalizing. Mix short declarative sentences with one long incantatory sentence built of polysyndeton. Use archaic and King-James registers without irony. Do not name a character's feelings; let the world do that work. Avoid semicolons, parentheticals, contemporary idiom, and cleverness.",
  eval_rubric: {
    deterministic: [
      { metric: "max_sentence_length", op: ">=", value: 60, weight: 0.15 },
      { metric: "adverbs_per_200w", op: "<=", value: 2, weight: 0.1 },
      { metric: "mono_syllable_ratio", op: ">=", value: 0.7, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "biblical_cadence",
        prompt:
          "Does the prose carry an Old Testament / King-James rhythm, with polysyndetic 'and' chains?",
        weight: 0.25,
      },
      {
        id: "punctuation_austerity",
        prompt:
          "Are quotation marks dropped from dialogue and commas used sparingly? Is dialogue free of speech tags?",
        weight: 0.2,
      },
      {
        id: "theological_landscape",
        prompt:
          "Is the natural world — and the violence within it — rendered with gravity rather than spectacle?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.9,
      updated_at: "2026-04-26",
    },
    {
      provider: "openai",
      model: "gpt-5",
      match: 0.85,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
