import type { Guide } from "../types";

export const emerson: Guide = {
  slug: "emerson",
  author: "Ralph Waldo Emerson",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · American essay",
  standfirst:
    "Aphoristic essay-prose that moves from a homely particular to a metaphysical claim in two sentences. Capitalised abstractions; declarative confidence; nothing hedged.",
  description:
    "Emerson's prose is sermon-built: a paragraph proceeds by short declarative sentences that each make a claim, and the claims escalate from a concrete observation ('I see the spectacle of morning from the hill-top over against my house') to a metaphysical pronouncement ('Spirit is the Creator. Spirit hath life in itself'). He capitalises abstractions — Nature, Reason, Spirit, Beauty — and treats them as agents. He uses the first-person singular as a public voice; he does not hedge. Useful when you want manifesto-grade copy: confident, lifted, willing to land on a sentence the reader will quote.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["email", "docs"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 19, max: 55 },
    vocabulary_register:
      "elevated essayistic American English; capitalised abstractions (Nature, Reason, Spirit, Beauty, Commodity) treated as agents; concrete naturalist nouns (acorn, pine-cone, wheat-ear, leaf) for ballast",
    syntax:
      "short, declarative, parallel sentences in series; the paragraph escalates from concrete observation to metaphysical claim; aphorism placed at the close; first-person singular used as a public voice",
    figurative_language:
      "natural symbols read as spiritual facts ('An enraged man is a lion, a cunning man is a fox, a firm man is a rock, a learned man is a torch'); occasional mythic or biblical allusion; no apology for the figure",
    pacing:
      "rises in steps; each sentence is a claim; the paragraph ends on the most quotable line",
  },
  do: [
    "Move from a concrete observation to a metaphysical claim in the space of a paragraph.",
    "Use short declarative sentences in parallel; let aphorism land at the close.",
    "Capitalise the abstractions you take seriously and treat them as agents.",
    "Speak in the first-person singular as a public, confident voice.",
  ],
  dont: [
    "Do not hedge or qualify; the form refuses 'perhaps' and 'it may be'.",
    "Do not trail off — the paragraph ends on the line you would quote on a wall.",
    "Do not pile up subordinate clauses; the rhythm is parataxis, not Henry James.",
    "Do not strip the natural particulars; the metaphysical claim is grounded in acorn, leaf, sun.",
  ],
  exemplars: [
    {
      label: "Concrete observation rising into manifesto",
      content:
        "Standing on the bare ground,--my head bathed by the blithe air, and uplifted into infinite space,--all mean egotism vanishes. I become a transparent eye-ball; I am nothing; I see all; the currents of the Universal Being circulate through me; I am part or particle of God.",
      source:
        "Ralph Waldo Emerson, Nature (Project Gutenberg #29433; public domain)",
      is_generated: false,
    },
    {
      label: "Parallel aphorism: nature read as spirit",
      content:
        "An enraged man is a lion, a cunning man is a fox, a firm man is a rock, a learned man is a torch. A lamb is innocence; a snake is subtle spite; flowers express to us the delicate affections. Light and darkness are our familiar expression for knowledge and ignorance; and heat for love. Visible distance behind and before us, is respectively our image of memory and hope.",
      source:
        "Ralph Waldo Emerson, Nature (Project Gutenberg #29433; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Ralph Waldo Emerson's Nature. Build paragraphs out of short declarative sentences in parallel, and escalate from a concrete observation — an acorn, a sunrise, a horizon — to a metaphysical claim. Capitalise the abstractions you take seriously (Nature, Reason, Spirit, Beauty) and treat them as agents. Use the first-person singular as a public voice; do not hedge with 'perhaps' or 'it may be'. Read the natural fact as a spiritual one without apologising for the figure. End the paragraph on the line a reader would underline.\n\nDo:\n- Move from a concrete observation to a metaphysical claim in the space of a paragraph.\n- Use short declarative sentences in parallel; let aphorism land at the close.\n- Capitalise the abstractions you take seriously and treat them as agents.\n- Speak in the first-person singular as a public, confident voice.\n\nDon't:\n- Do not hedge or qualify; the form refuses 'perhaps' and 'it may be'.\n- Do not trail off — the paragraph ends on the line you would quote on a wall.\n- Do not pile up subordinate clauses; the rhythm is parataxis, not Henry James.\n- Do not strip the natural particulars; the metaphysical claim is grounded in acorn, leaf, sun.\n\nExample — Concrete observation rising into manifesto:\nStanding on the bare ground,--my head bathed by the blithe air, and uplifted into infinite space,--all mean egotism vanishes. I become a transparent eye-ball; I am nothing; I see all; the currents of the Universal Being circulate through me; I am part or particle of God.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: "<=", value: 22, weight: 0.15 },
      { metric: "abstract_per_para", op: ">=", value: 2, weight: 0.15 },
      { metric: "adverbs_per_200w", op: "<=", value: 4, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "particular-to-claim",
        prompt:
          "Does the paragraph escalate from a concrete natural observation to a metaphysical claim, in declarative steps?",
        weight: 0.2,
      },
      {
        id: "capitalised-agents",
        prompt:
          "Are abstractions like Nature, Reason, Spirit, or Beauty capitalised and treated as agents rather than as decoration?",
        weight: 0.2,
      },
      {
        id: "aphoristic-close",
        prompt:
          "Does the paragraph land on a confident, quotable sentence — and refuse to hedge along the way?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
