import type { Guide } from "../types";

export const hammett: Guide = {
  slug: "hammett",
  author: "Dashiell Hammett",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst: "A terse, hard-boiled style ideal for gritty narratives.",
  description:
    "Dashiell Hammett's voice is characterized by its directness and economy, often used to convey gritty, hard-boiled detective stories. This style is well-suited for narratives that require a sense of urgency and stark realism. Reach for this voice when crafting suspenseful, plot-driven content with a focus on action and dialogue.",
  voice_axes: ["terse", "plain"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 10,
      max: 20,
    },
    vocabulary_register: "colloquial and unadorned",
    syntax: "simple and declarative",
    figurative_language: "minimal, with rare similes",
    pacing: "brisk and forward-moving",
  },
  do: [
    "Use short, punchy sentences.",
    "Focus on action and dialogue.",
    "Maintain a sense of urgency.",
    "Keep descriptions minimal and direct.",
  ],
  dont: [
    "Avoid flowery language.",
    "Don't use long, drawn-out explanations.",
    "Steer clear of abstract concepts.",
    "Avoid unnecessary adjectives.",
  ],
  exemplars: [
    {
      label: "Support reply",
      content:
        "We received your issue report. Our team is on it and expects a fix soon. We'll keep you updated.",
      source: "AI-generated in the Dashiell Hammett style",
      is_generated: true,
    },
    {
      label: "Marketing tagline",
      content: "Get in, get out, get results. No fluff.",
      source: "AI-generated in the Dashiell Hammett style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with the terse, direct style of Dashiell Hammett. Keep sentences short and to the point, focusing on action and dialogue. Avoid elaborate descriptions and flowery language. Capture a sense of urgency and maintain a brisk pace. Use simple syntax and a colloquial vocabulary.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 12,
        weight: 0.2,
      },
      {
        metric: "max_sentence_length",
        op: "<=",
        value: 20,
        weight: 0.1,
      },
      {
        metric: "adverbs_per_200w",
        op: "<=",
        value: 5,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "clarity",
        prompt:
          "Does the text maintain clarity with minimal and direct language?",
        weight: 0.3,
      },
      {
        id: "pacing",
        prompt: "Does the text maintain a brisk and forward-moving pace?",
        weight: 0.3,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
