import type { Guide } from "../types";

export const zola: Guide = {
  slug: "zola",
  author: "Émile Zola",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · French Naturalism",
  standfirst:
    "Long inventorying sentences. Bodies and rooms are described object by object, symptom by symptom, with the same level voice.",
  description:
    "Zola narrates the third-class carriage as if it were a clinical chart: the same sentence gathers luggage, illness, and posture in a single grammatical sweep, separated by semicolons and commas, never softened. Adjectives are placed in pairs and triples, almost always pinned to a body part or a piece of cloth. Useful when you want copy that surveys a crowded scene without sentimentalising it — the pity is in the accumulation of detail, not in any commentary the narrator offers.",
  voice_axes: ["ornate", "lyrical"],
  use_cases: ["narrative", "marketing", "email"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 32, max: 70 },
    vocabulary_register:
      "French naturalist prose; concrete, often clinical nouns ('phtisique', 'matelas', 'paupières bleuies'); abstractions admitted only as final summing words ('une infinie tristesse')",
    syntax:
      "long sentences hinged on semicolons and 'tandis que'; participial clauses ('emportés par...', 'tenait sur ses genoux...') tacked onto a main clause; adjectives in pairs and triples after the noun",
    figurative_language:
      "almost no metaphor; the figure is the catalogue of physical detail — 'le nez pincé, les paupières bleuies, fermées dans sa face de cire'",
    pacing:
      "unhurried, accumulative; the sentence keeps gathering bodies and objects until the inventory is complete, then closes on a flat noun phrase",
  },
  do: [
    "Build long sentences by tacking participial and relative clauses onto a single main clause; let semicolons and 'tandis que' carry the joins.",
    "Place adjectives after the noun in pairs or triples, each one pinned to a specific body part or piece of cloth.",
    "Inventory the scene object by object, symptom by symptom, with the same level voice for luggage and for illness.",
    "Close the sentence on a flat summing phrase — a final noun, not a flourish.",
  ],
  dont: [
    "Do not editorialise or name the pity; let the accumulation of physical detail produce it.",
    "Do not reach for metaphor — the figure is the catalogue itself.",
    "Do not break the long sentence into short ones; the unbroken sweep is the voice.",
    "Do not abstract a body into a feeling; describe the body, then admit the feeling at the end if at all.",
  ],
  exemplars: [
    {
      label: "Inventory of the carriage — third-class to Lourdes",
      content:
        "Au milieu de cette friperie, les grands malades, sur leurs étroits matelas, occupant plusieurs places, oscillaient, emportés par les secousses grondantes des roues; tandis que ceux qui pouvaient rester assis, s'adossaient aux cloisons, s'appuyaient à des oreillers, la face blême.",
      source:
        "Émile Zola, Lourdes (Project Gutenberg #24850; public domain)",
      is_generated: false,
    },
    {
      label: "Portrait of the sick child",
      content:
        "En face d'elle, l'autre, celle qui était sur la banquette de Pierre, une ouvrière du même âge, en bonnet noir, le visage ravagé de misère et d'inquiétude, tenait sur ses genoux une fillette de sept ans, si pâle, si diminuée, qu'elle en paraissait à peine quatre. Le nez pincé, les paupières bleuies, fermées dans sa face de cire, l'enfant ne pouvait parler; et elle n'avait qu'une petite plainte, un gémissement doux, qui chaque fois déchirait le coeur de la mère, penchée sur elle.",
      source:
        "Émile Zola, Lourdes (Project Gutenberg #24850; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Émile Zola as he narrates Lourdes. Build long sentences by tacking participial and relative clauses onto a single main clause; use semicolons and 'tandis que' (or 'while') as the hinges. Place adjectives after the noun, in pairs or triples, each one pinned to a specific body part or piece of cloth. Inventory the scene object by object, symptom by symptom, with the same level voice for luggage and for illness — let the accumulation of physical detail produce the pity, never name it. Avoid metaphor; the catalogue of detail is the figure. Close the sentence on a flat summing phrase rather than a flourish. The diction is clinical and concrete; abstractions are admitted only at the end of a clause, as the last word.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 25, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 50, weight: 0.1 },
      { metric: "abstract_per_para", op: "<=", value: 2, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "inventory",
        prompt:
          "Does the sentence proceed as an inventory — bodies, clothes, and objects gathered in a single grammatical sweep?",
        weight: 0.25,
      },
      {
        id: "level-voice",
        prompt:
          "Is luggage described in the same register as illness, with no editorialising about pity?",
        weight: 0.2,
      },
      {
        id: "post-noun-adjectives",
        prompt:
          "Are adjectives placed after the noun in pairs or triples, pinned to specific body parts or cloth?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
