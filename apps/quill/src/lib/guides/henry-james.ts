import type { Guide } from "../types";

export const henryJames: Guide = {
  slug: "henry-james",
  author: "Henry James",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Late James",
  standfirst:
    "A first-person narrator who circles, qualifies, and italicises. Sentences hinge on dashes and inserted clauses. The thing is named, then unnamed, then named again — slightly differently.",
  description:
    'James\'s governess narrates in long, self-correcting sentences full of em-dashes, italicised pronouns, and parenthetical asides that revise what was just said. The voice prefers the abstract and the implied ("a kind of favor, an obligation he should gratefully incur", "a flash of this knowledge — for it was knowledge in the midst of dread") to the named and the explicit. Pronouns matter; emphasis matters; what is withheld matters. Useful when you want copy that thinks aloud, refuses to commit too soon, and lets significance accumulate by qualification rather than by direct statement.',
  voice_axes: ["ornate", "lyrical"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 32, max: 90 },
    vocabulary_register:
      "abstract and self-conscious (apprehension, certitude, infatuation, pretension); rare in concrete nouns; italics used as a precision tool",
    syntax:
      "long sentences hinged on em-dashes and semicolons; embedded parenthetical revisions; clauses that qualify the previous clause without ending the sentence",
    figurative_language:
      'rare and abstract ("a sudden vibration of duty and courage", "the spring of a beast"); the figure is for the inner state, not the outer object',
    pacing:
      "circling — each sentence revises the one before; the meaning advances by qualification, not by event",
  },
  do: [
    "Write sentences that revise themselves mid-flight using em-dashes and parentheticals.",
    "Italicise the pronoun or small word that carries the emphasis (he, this, knew).",
    "Name the inner state with an abstract noun (apprehension, certitude, intercourse) rather than describe its symptoms.",
    "Let what is implied carry more weight than what is stated; the sentence's reluctance is part of the meaning.",
  ],
  dont: [
    "Do not finish a thought in one clause if a qualifying clause can extend it.",
    "Do not flatten the prose into short, plain sentences; the thinking happens in the syntax.",
    "Do not state a feeling outright when you can state the recognition of the feeling.",
    "Do not abandon italics where emphasis matters — they are part of the voice.",
  ],
  exemplars: [
    {
      label: "Self-correcting first-person — qualification by em-dash",
      content:
        "The flash of this knowledge—for it was knowledge in the midst of dread—produced in me the most extraordinary effect, started as I stood there, a sudden vibration of duty and courage. I say courage because I was beyond all doubt already far gone. I bounded straight out of the door again, reached that of the house, got, in an instant, upon the drive, and, passing along the terrace as fast as I could rush, turned a corner and came full in sight.",
      source:
        "Henry James, The Turn of the Screw (Project Gutenberg #209; public domain)",
      is_generated: false,
    },
    {
      label: "Italicised emphasis carrying recognition in dialogue",
      content:
        "“I’ve been dying to tell you. But he’s like nobody.”\n\n“Nobody?” she echoed.\n\n“He has no hat.” Then seeing in her face that she already, in this, with a deeper dismay, found a touch of picture, I quickly added stroke to stroke.",
      source:
        "Henry James, The Turn of the Screw (Project Gutenberg #209; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Henry James's first-person narrator in The Turn of the Screw. Build long sentences that revise themselves mid-flight using em-dashes, parentheticals, and qualifying clauses; let each sentence walk back, narrow, or italicise what the previous clause said. Prefer abstract nouns for inner states (apprehension, certitude, knowledge, intercourse) over symptoms or gestures. Use italics to mark the small word that carries the emphasis. Do not commit to a meaning too soon — circle it, withhold it, name it tentatively, then name it again slightly differently. The reluctance of the syntax is part of the voice; do not flatten it into short plain sentences. What is implied should carry more weight than what is said.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 24, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 55, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 2, weight: 0.15 },
    ],
    judge_criteria: [
      {
        id: "self-revision",
        prompt:
          "Do sentences revise or qualify themselves mid-flight via em-dashes, parentheticals, or trailing clauses?",
        weight: 0.2,
      },
      {
        id: "abstract-inner-state",
        prompt:
          "Are inner states named with abstract nouns rather than rendered as physical symptoms?",
        weight: 0.2,
      },
      {
        id: "withholding",
        prompt:
          "Does the prose circle the meaning rather than commit to it directly — allowing implication to carry weight?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
