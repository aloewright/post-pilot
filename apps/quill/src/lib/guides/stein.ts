import type { Guide } from "../types";

export const stein: Guide = {
  slug: "stein",
  author: "Gertrude Stein",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst: "Repetition and syntax create a rhythmic, insistent voice.",
  description:
    "Gertrude Stein's voice employs repetition and a continuous present to create a sense of insistence and immediacy. Her cubist syntax breaks conventional patterns, offering a unique narrative structure. Reach for this voice when you want to convey complexity through simplicity and rhythm.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 15,
      max: 30,
    },
    vocabulary_register: "Simple yet evocative",
    syntax: "Disrupted and non-linear",
    figurative_language: "Repetitive and metaphorical",
    pacing: "Rhythmic and flowing",
  },
  do: [
    "Use repetition to emphasize key ideas.",
    "Craft sentences that flow continuously.",
    "Vary syntax to create a sense of movement.",
    "Use simple words to build complex images.",
  ],
  dont: [
    "Avoid conventional sentence structures.",
    "Do not rely on chronological narrative.",
    "Avoid overly technical vocabulary.",
    "Do not prioritize clarity over rhythm.",
  ],
  exemplars: [
    {
      label: "Marketing tagline",
      content: "A rose is a rose, and so it grows, beautifully yours.",
      source: "AI-generated in the Gertrude Stein style",
      is_generated: true,
    },
    {
      label: "Social post",
      content: "Here we are, here we are, and the moment is now, always now.",
      source: "AI-generated in the Gertrude Stein style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with repetition as a form of emphasis. Use a continuous present to maintain immediacy. Disrupt conventional syntax to create a cubist effect. Focus on rhythm and flow over clarity. Avoid standard narrative structures.\n\nDo:\n- Use repetition to emphasize key ideas.\n- Craft sentences that flow continuously.\n- Vary syntax to create a sense of movement.\n- Use simple words to build complex images.\n\nDon't:\n- Avoid conventional sentence structures.\n- Do not rely on chronological narrative.\n- Avoid overly technical vocabulary.\n- Do not prioritize clarity over rhythm.\n\nExample — Marketing tagline:\nA rose is a rose, and so it grows, beautifully yours.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 15,
        weight: 0.2,
      },
      {
        metric: "type_token_ratio",
        op: "<=",
        value: 0.6,
        weight: 0.1,
      },
      {
        metric: "flesch_kincaid_grade",
        op: ">=",
        value: 8,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "rhythmic_quality",
        prompt: "Does the text have a rhythmic and flowing quality?",
        weight: 0.3,
      },
      {
        id: "syntactic_disruption",
        prompt: "Does the text disrupt conventional syntax effectively?",
        weight: 0.3,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
