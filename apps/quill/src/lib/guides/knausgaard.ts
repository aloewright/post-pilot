import type { Guide } from "../types";

export const knausgaard: Guide = {
  slug: "knausgaard",
  author: "Karl Ove Knausgård",
  era: "Contemporary",
  eras: ["Contemporary"],
  kicker: "Contemporary · Norwegian autofiction",
  standfirst:
    "Long, accumulating sentences of literal description that refuse to skip the boring — until the boring breaks open into the sublime.",
  description:
    "Knausgård's voice is a flat, patient catalogue of the actual: the dishes in the sink, the colour of the clouds, the walk to school, the price of coffee. Nothing is summarised; nothing is elevated in advance. The 'I' stays at surface level and lets meaning accumulate by sheer weight of detail, until a paragraph about cleaning the kitchen turns, without warning, into a meditation on death, fatherhood, or time. The English register is Don Bartlett's — Scandinavian directness translated plainly, without ornament. Useful when you want long-form personal essay or autofiction that earns its rapture by first earning its boredom.",
  voice_axes: ["plain", "lyrical"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 28, max: 70 },
    vocabulary_register:
      "plain, domestic, concrete; translated-from-Norwegian directness; abstractions arrive late and earn their place",
    syntax:
      "long compound sentences chained with commas and 'and'; subordinate clauses stack horizontally rather than nest; lists of literal actions and objects",
    figurative_language:
      "almost none for pages at a time, then a single sustained image (sky, sea, light) that opens the passage existentially",
    pacing:
      "patient, real-time; refuses ellipsis; the boring is included on purpose, so the rapture, when it comes, has somewhere to break from",
  },
  do: [
    "Describe the literal action in real time — the kettle, the stairs, the child's coat, the exact colour of the sky.",
    "Let sentences run long, joined by commas and 'and', accumulating detail rather than ranking it.",
    "Keep the 'I' at surface level: report what is seen, done, and felt, without psychologising.",
    "Earn any abstract or existential turn by first writing through the mundane that precedes it.",
  ],
  dont: [
    "Do not summarise or skip — if the character walks across the room, walk across the room.",
    "Do not reach for metaphor early; let the literal carry the passage until an image arrives on its own.",
    "Do not name the theme. Death, time, fatherhood, shame surface from the catalogue, not from a thesis sentence.",
    "Do not tighten into aphorism. The voice is patient, not quotable.",
  ],
  exemplars: [
    {
      label: "Opening of My Struggle: Book 1 (death as physical fact)",
      content:
        "For the heart, life is simple: it beats for as long as it can. Then it stops.",
      source:
        "My Struggle: Book 1 — A Death in the Family (2009; English 2012, trans. Don Bartlett)",
      is_generated: false,
    },
    {
      label: "Spring (the literal opens onto the existential)",
      content:
        "You don't know what air is, and yet you breathe. You don't know what sleep is, though you sleep. You don't know what night is, though you lie in it.",
      source: "Spring (2016; English 2018, trans. Ingvild Burkey)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Karl Ove Knausgård in Don Bartlett's English translation. Describe the literal scene in real time — the kitchen, the child, the coat, the weather, the exact colour of the light. Use long sentences chained with commas and 'and' that accumulate detail rather than rank it. Keep the first person at surface level: report what is seen, done, and felt, without psychologising and without naming the theme. Refuse to skip the boring; the mundane is the ground from which any existential turn must rise. Avoid metaphor for long stretches, then allow one sustained image (sky, sea, light, a body) to open the passage. Do not tighten into aphorism. Do not summarise. The register is plain, domestic, translated-Norwegian direct — abstractions arrive late and only after the literal has earned them.\n\nDo:\n- Describe the literal action in real time — the kettle, the stairs, the child's coat, the exact colour of the sky.\n- Let sentences run long, joined by commas and 'and', accumulating detail rather than ranking it.\n- Keep the 'I' at surface level: report what is seen, done, and felt, without psychologising.\n- Earn any abstract or existential turn by first writing through the mundane that precedes it.\n\nDon't:\n- Do not summarise or skip — if the character walks across the room, walk across the room.\n- Do not reach for metaphor early; let the literal carry the passage until an image arrives on its own.\n- Do not name the theme. Death, time, fatherhood, shame surface from the catalogue, not from a thesis sentence.\n- Do not tighten into aphorism. The voice is patient, not quotable.\n\nExample — Opening of My Struggle: Book 1 (death as physical fact):\nFor the heart, life is simple: it beats for as long as it can. Then it stops.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 22, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 55, weight: 0.1 },
      { metric: "abstract_per_para", op: "<=", value: 2, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "literal-accumulation",
        prompt:
          "Does the text patiently catalogue concrete, domestic detail in real time rather than summarise or skip?",
        weight: 0.25,
      },
      {
        id: "surface-first-person",
        prompt:
          "Does the 'I' stay at surface level — reporting action and perception without psychologising or stating the theme?",
        weight: 0.2,
      },
      {
        id: "earned-rapture",
        prompt:
          "When an existential or lyrical turn arrives, does it emerge from the accumulated mundane rather than being declared up front?",
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
