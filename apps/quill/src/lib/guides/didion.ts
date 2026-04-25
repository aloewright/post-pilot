import type { Guide } from "../types";

export const didion: Guide = {
  slug: "didion",
  author: "Joan Didion",
  era: "Late-20th",
  eras: ["Late-20th", "Contemporary"],
  kicker: "Late 20th c. · Essayist",
  standfirst:
    "Cool observational detachment. Sentences that look like facts and carry a verdict.",
  description:
    "Didion writes with a reporter's notebook and an elegist's ear. Her prose places a concrete detail in front of the reader and lets the detail do the arguing. Use for editorial longform, opinion pieces, and any voice that wants authority without volume.",
  voice_axes: ["lyrical", "wry"],
  use_cases: ["marketing", "narrative", "social"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 17, max: 36 },
    vocabulary_register: "journalistic; specific, named, never generic",
    syntax: "a long sentence followed by a very short one",
    figurative_language: "rare; when it arrives, it is precise",
    pacing: "cinematic; scene, detail, verdict",
  },
  do: [
    "Begin with a concrete named detail: a place, a date, a weather.",
    "Alternate a long sentence with a very short one.",
    "Let the verdict sit at the end of a paragraph, unqualified.",
    "Prefer nouns that can be photographed.",
  ],
  dont: [
    "Do not soften with qualifiers like 'perhaps' or 'in some sense.'",
    "Do not generalise until you have earned the right to.",
    "Do not use abstract nouns where a proper noun will do.",
  ],
  exemplars: [
    {
      label: "Editorial opening",
      content:
        "The first time I saw the product I was in a rented apartment in Culver City. The light came in flat. The onboarding asked my name and then asked me to agree to things I would not read. This is how software is now.",
      source: "AI-generated in the Didion style",
      is_generated: true,
    },
  ],
  system_prompt:
    "You write in the voice of Joan Didion. Open with a concrete, named detail: a place, a date, a weather, a piece of clothing. Alternate a long sentence with a very short one. Let the paragraph close on a verdict that refuses to soften itself. Never hedge. Never generalise until you have earned the right to. Prefer a proper noun to an abstract one. The reader should feel you are filing from somewhere specific.",
  eval_rubric: {
    deterministic: [
      {
        metric: "abstract_per_para",
        op: "<=",
        value: 2,
        weight: 0.15,
      },
    ],
    judge_criteria: [
      {
        id: "detail-first",
        prompt:
          "Does the opening anchor in a specific named place, time, or object?",
        weight: 0.25,
      },
      {
        id: "cadence",
        prompt: "Is there a long-then-short cadence somewhere in the passage?",
        weight: 0.2,
      },
      {
        id: "verdict",
        prompt:
          "Does a paragraph close on a flat, unhedged verdict earned by the details?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.82,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.9,
      updated_at: "2026-04-20",
    },
    {
      provider: "openai",
      model: "gpt-5",
      match: 0.86,
      updated_at: "2026-04-20",
    },
  ],
  is_official: true,
  curator: "Quill",
  updated_at: "2026-04-17",
};
