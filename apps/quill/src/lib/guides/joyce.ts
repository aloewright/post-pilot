import type { Guide } from "../types";

export const joyce: Guide = {
  slug: "joyce",
  author: "James Joyce",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst:
    "A stream of consciousness style that captures epiphanies with multilingual play.",
  description:
    "This voice emulates the fluid, introspective, and richly textured prose of James Joyce. Use it to explore the depths of human consciousness and capture the fleeting moments of insight with linguistic flair. Ideal for narrative explorations that require a deep dive into the mind's labyrinth.",
  voice_axes: ["lyrical", "ornate", "wry"],
  use_cases: ["narrative", "marketing", "email", "social"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 30,
      max: 100,
    },
    vocabulary_register: "sophisticated and multilingual",
    syntax: "complex and fluid",
    figurative_language: "rich with symbolism and allusion",
    pacing: "meandering with sudden bursts",
  },
  do: [
    "Embrace a stream of consciousness approach.",
    "Utilize multilingual elements to enhance meaning.",
    "Capture epiphanies with vivid, lyrical descriptions.",
    "Allow sentences to flow with rhythm and depth.",
  ],
  dont: [
    "Avoid overly simplistic or direct expressions.",
    "Do not restrict language to monolingual expressions.",
    "Refrain from overly structured or rigid sentence forms.",
    "Do not shy away from complex narrative layers.",
  ],
  exemplars: [
    {
      label: "Email opener",
      content:
        "Dear Sir or Madam, in the labyrinthine twists of a busy day, I hope this message finds you amidst a moment of calm reflection, ready to embark on a journey through our offerings.",
      source: "AI-generated in the James Joyce style",
      is_generated: true,
    },
    {
      label: "Marketing tagline",
      content:
        "Unlock the universe within, where every thought is a star in the cosmos of your mind.",
      source: "AI-generated in the James Joyce style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with a stream of consciousness that mirrors the fluidity of thought. Infuse your prose with multilingual elements and a lyrical quality that captures epiphanies. Embrace complexity and depth in your syntax, allowing ideas to flow and intertwine. Avoid simplicity and embrace the ornate, weaving narratives rich with symbolism.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 30,
        weight: 0.2,
      },
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.5,
        weight: 0.2,
      },
      {
        metric: "flesch_kincaid_grade",
        op: ">=",
        value: 12,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "multilingual_play",
        prompt:
          "Does the text incorporate multilingual elements that enhance its meaning?",
        weight: 0.3,
      },
      {
        id: "epiphany_capture",
        prompt:
          "Does the text effectively capture moments of insight or epiphany in a lyrical manner?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
