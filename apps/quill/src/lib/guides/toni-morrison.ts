import type { Guide } from "../types";

export const toniMorrison: Guide = {
  slug: "toni-morrison",
  author: "Toni Morrison",
  era: "Late-20th",
  eras: ["Late-20th", "Contemporary"],
  kicker: "Late 20th c. · American novelist",
  standfirst:
    "Incantatory sentences. Mythic compression. Black-vernacular cadence woven through high-literary syntax.",
  description:
    "Morrison's voice braids oral storytelling with Faulknerian sweep — long, recursive sentences that loop back on a single concrete image until it splits open into history. Ghosts speak in the present tense; ordinary nouns (a comb, a tree, a name) carry whole inheritances. Useful when you want prose that listens for what has been silenced and refuses to sand its rhythms smooth.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 22, max: 70 },
    vocabulary_register:
      "concrete and sensory but unafraid of the sacred register; Black vernacular and biblical cadence held in the same line",
    syntax:
      "long subordinated periods broken by short oracular fragments; parataxis, anaphora, and unexpected line-final concretion",
    figurative_language:
      "metaphor as memory rather than ornament; the supernatural treated as fact; recurring images that accrue meaning across paragraphs",
    pacing:
      "incantatory and recursive — circle the wound before naming it; repetition as music, repetition as evidence",
  },
  do: [
    "Let sentences breathe across multiple clauses, then snap shut on a single concrete image.",
    "Use repetition — of a word, a name, a phrase — as rhythm and as insistence.",
    "Treat ghosts, dreams, and ancestors as physical presences in the room.",
    "Trust Black-vernacular cadence and biblical syntax to share a sentence.",
    "Make the smallest object (a comb, a tin cup, a scar) carry the weight of history.",
  ],
  dont: [
    "Do not flatten dialect into standard editorial English.",
    "Do not explain the metaphor; let the image do the knowing.",
    "Do not treat the past as past — it is sitting in the next chair.",
    "Do not reach for prettiness when precision will cut deeper.",
  ],
  exemplars: [
    {
      label: "Opening — Beloved",
      content:
        "124 was spiteful. Full of a baby's venom. The women in the house knew it and so did the children. For years each put up with the spite in his own way, but by 1873 Sethe and her daughter Denver were its only victims.",
      source: "Beloved (1987)",
      is_generated: false,
    },
    {
      label: "Nobel Lecture — on language",
      content:
        "We die. That may be the meaning of life. But we do language. That may be the measure of our lives.",
      source: "Nobel Lecture (1993)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Toni Morrison. Braid long, subordinated sentences with short oracular fragments. Let repetition — of a name, a word, a phrase — carry rhythm and insistence. Hold Black-vernacular cadence and biblical syntax in the same line without apology. Treat the supernatural as fact: ghosts, ancestors, and memory are present things, not metaphors at arm's length. Anchor abstraction in one concrete object — a comb, a tree, a scar — and let that object accrue meaning across the passage. Circle the wound before you name it. Do not flatten dialect, do not explain the image, and do not pretty the line when precision will cut deeper.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 18,
        weight: 0.15,
      },
      {
        metric: "max_sentence_length",
        op: ">=",
        value: 45,
        weight: 0.1,
      },
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.45,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "incantation",
        prompt:
          "Does the prose use repetition, anaphora, or recursive cadence as music — not as accident?",
        weight: 0.2,
      },
      {
        id: "concretion",
        prompt:
          "Does abstraction land on a single physical object that carries the weight of history?",
        weight: 0.2,
      },
      {
        id: "haunting",
        prompt:
          "Are memory, ancestors, or the supernatural treated as present and bodily rather than as metaphor at arm's length?",
        weight: 0.15,
      },
      {
        id: "vernacular",
        prompt:
          "Does Black-vernacular cadence sit inside high-literary syntax without being flattened or explained?",
        weight: 0.1,
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
