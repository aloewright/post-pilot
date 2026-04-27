import type { Guide } from "../types";

export const charlotteBronte: Guide = {
  slug: "charlotte-bronte",
  author: "Charlotte Brontë",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Victorian",
  standfirst:
    "First-person testimony with a moral pulse. Outer weather and inner feeling rhyme; the narrator names her own state without flinching.",
  description:
    "Brontë's Jane speaks as witness. Sentences are long but jointed by colons and semicolons rather than diffuse subordination — each clause is a separate observation set in series. Setting is read for feeling: the November day, the red-room, the shut curtain are not décor but evidence of an inner state. The narrator names emotion directly (terror, mutiny, dread) and accepts the moral weight of what she has felt. Useful when you want first-person copy with conviction — testimony, founder letters, op-ed prose — that is plain in vocabulary but unafraid of its own intensity.",
  voice_axes: ["lyrical", "plain"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 22, max: 55 },
    vocabulary_register:
      "plain Anglo-Saxon core with select latinate set-pieces (predominate, ignominy, equilibrium) reserved for moments of force",
    syntax:
      "first-person; long sentences chained by colons and semicolons; lists of three; parallel triads of cause clauses",
    figurative_language:
      "weather and room as moral weather; named emotions held alongside concrete sensation (a drop or two of blood; a pungent suffering)",
    pacing:
      "deliberate, ceremonious; a chapter-opening establishes setting before action, and action is interleaved with reflection",
  },
  do: [
    "Write in the first person and let the narrator name what she feels — terror, dread, mutiny — without softening.",
    "Read setting for feeling: the weather, the room, the closed curtain are evidence of a mood.",
    "Chain clauses with colons and semicolons; build sentences in lists of three with parallel structure.",
    "Hold the concrete sensation against the abstract one in the same line — the cut bled, the pain was sharp, my terror had passed.",
  ],
  dont: [
    "Do not retreat into ironic distance; the voice owns its intensity.",
    "Do not over-decorate with metaphor; the figure is usually the room itself, plainly described.",
    "Do not break the moral register — the narrator believes language can hold what happened.",
    "Do not lean on showy vocabulary throughout; reserve the latinate word for the weighted moment.",
  ],
  exemplars: [
    {
      label: "Setting as moral weather",
      content:
        "Folds of scarlet drapery shut in my view to the right hand; to the left were the clear panes of glass, protecting, but not separating me from the drear November day. At intervals, while turning over the leaves of my book, I studied the aspect of that winter afternoon. Afar, it offered a pale blank of mist and cloud; near a scene of wet lawn and storm-beat shrub, with ceaseless rain sweeping away wildly before a long and lamentable blast.",
      source:
        "Charlotte Brontë, Jane Eyre: An Autobiography (Project Gutenberg #1260; public domain)",
      is_generated: false,
    },
    {
      label: "Named feeling and concrete sensation",
      content:
        "I did so, not at first aware what was his intention; but when I saw him lift and poise the book and stand in act to hurl it, I instinctively started aside with a cry of alarm: not soon enough, however; the volume was flung, it hit me, and I fell, striking my head against the door and cutting it. The cut bled, the pain was sharp: my terror had passed its climax; other feelings succeeded.\n\n“Wicked and cruel boy!” I said. “You are like a murderer—you are like a slave-driver—you are like the Roman emperors!”",
      source:
        "Charlotte Brontë, Jane Eyre: An Autobiography (Project Gutenberg #1260; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Jane Eyre's narrator. Speak in the first person and let the narrator name her own feeling — terror, dread, mutiny, indignation — without softening. Chain clauses with colons and semicolons; build sentences in parallel lists of three. Read the room for the mood: weather, drapery, lit corner are evidence of an inner state, not décor. Hold concrete sensation beside the abstract noun in the same line: 'the cut bled, the pain was sharp; my terror had passed its climax.' Keep the core diction plain and Anglo-Saxon, and reserve the latinate word for the weighted moment. Do not retreat into irony; the voice owns its intensity.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 18, weight: 0.15 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.1 },
      { metric: "max_sentence_length", op: ">=", value: 35, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "first-person-witness",
        prompt:
          "Is the text in the first person, with the narrator naming her own feeling directly and accepting its weight?",
        weight: 0.2,
      },
      {
        id: "setting-as-feeling",
        prompt:
          "Is setting (weather, room, light) used as evidence of inner state rather than as mere description?",
        weight: 0.2,
      },
      {
        id: "clause-chain",
        prompt:
          "Are sentences built by colons and semicolons into chains of separate observations, often in parallel triads?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
