import type { Guide } from "../types";

export const balzac: Guide = {
  slug: "balzac",
  author: "Honoré de Balzac",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · French Realism",
  standfirst:
    "An inventory taker's eye on Paris. The shop sign, the breeches, the ledger — every object is evidence of the social type behind it.",
  description:
    "Balzac builds his world by accumulation. He catalogues a face the way he catalogues a shop window: button by button, anxiety by anxiety, until type and biography emerge from the surface. The narrator is a confident appraiser who steps in to gloss a period detail, name a custom, or round off a paragraph with a maxim about commerce or human nature. Useful when you want copy that earns its authority by specificity — case studies, reported features, profile pieces, anywhere accumulated detail does the persuading.",
  voice_axes: ["ornate", "wry"],
  use_cases: ["narrative", "marketing", "rfc"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 28, max: 70 },
    vocabulary_register:
      "bourgeois-precise; trade vocabulary, period costume, legal and commercial terms held alongside literary ones",
    syntax:
      "long periodic sentences with stacked subordinate clauses; semicolons and dashes; lists of attributes piled into a single description",
    figurative_language:
      "simile by social analogy — characters compared to ships, captains, ants, naturalists; the metaphor names the type",
    pacing:
      "slow accumulating description, then a sudden epigrammatic close that turns the catalogue into judgment",
  },
  do: [
    "Catalogue a person or place by visible particulars — clothes, furniture, posture, speech tics — until the type emerges.",
    "Use long periodic sentences with semicolons; let qualifying clauses pile up before the verdict.",
    "Drop in a sociological aside or maxim that names the class, custom, or trade you are describing.",
    "Compare a character by analogy to a profession or animal — captain, naturalist, ant — to fix their function.",
  ],
  dont: [
    "Do not summarize where you can list. Specifics are the argument.",
    "Do not stay inside one register; let trade-jargon, costume detail, and literary allusion sit in the same paragraph.",
    "Do not skip the narrator's gloss; the aside that explains a custom or coins a maxim is part of the voice.",
    "Do not let dialogue float free of social position — every speech is also evidence of class.",
  ],
  exemplars: [
    {
      label: "Catalogue portrait — the merchant Guillaume",
      content:
        "Monsieur Guillaume wore loose black velvet breeches, pepper-and-salt stockings, and square toed shoes with silver buckles. His coat, with square-cut fronts, square-cut tails, and square-cut collar clothed his slightly bent figure in greenish cloth, finished with white metal buttons, tawny from wear. His gray hair was so accurately combed and flattened over his yellow pate that it made it look like a furrowed field. His little green eyes, that might have been pierced with a gimlet, flashed beneath arches faintly tinged with red in the place of eyebrows. Anxieties had wrinkled his forehead with as many horizontal lines as there were creases in his coat. This colorless face expressed patience, commercial shrewdness, and the sort of wily cupidity which is needful in business.",
      source:
        "Honoré de Balzac, At the Sign of the Cat and Racket (Project Gutenberg #1680; public domain)",
      is_generated: false,
    },
    {
      label: "Trade jargon as social music",
      content:
        "Monsieur Guillaume, always on his feet, his pen behind his ear, was like a captain commanding the working of the ship. His sharp tones, spoken through a trap-door, to inquire into the depths of the hold in the cellar-store, gave utterance to the barbarous formulas of trade-jargon, which find expression only in cipher. “How much H. N. Z.?”—“All sold.”—“What is left of Q. X.?”—“Two ells.”—“At what price?”—“Fifty-five three.” A hundred other injunctions equally intelligible were spouted over the counters like verses of modern poetry, quoted by romantic spirits, to excite each other’s enthusiasm for one of their poets.",
      source:
        "Honoré de Balzac, At the Sign of the Cat and Racket (Project Gutenberg #1680; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Balzac as he opens At the Sign of the Cat and Racket. Build long periodic sentences and let qualifying clauses pile up; use semicolons and dashes as joints. Describe people and rooms by inventory — clothes, posture, furniture, the wear on a coat — and let the type emerge from the catalogue. Step in as narrator to gloss a custom, name a trade, or round off a paragraph with a small maxim about commerce or human nature. Reach for analogy by profession (captain, naturalist, ant) rather than for nature metaphor. Mix registers freely: trade-jargon, period costume, legal and literary diction belong in the same paragraph. End the long description on a quiet, judging clause.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 22, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 45, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.15 },
    ],
    judge_criteria: [
      {
        id: "inventory",
        prompt:
          "Does the description proceed by accumulation of concrete particulars — clothing, furniture, posture, trade — rather than by summary?",
        weight: 0.2,
      },
      {
        id: "narrator-gloss",
        prompt:
          "Does the narrator step in with a sociological aside or maxim that names a custom, class, or commercial habit?",
        weight: 0.2,
      },
      {
        id: "analogy-by-type",
        prompt:
          "Are figures compared by analogy to professions or social functions (captain, naturalist, ant) rather than to natural objects?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
