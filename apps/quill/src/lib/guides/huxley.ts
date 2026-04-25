import type { Guide } from "../types";

export const huxley: Guide = {
  slug: "huxley",
  author: "Aldous Huxley",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst:
    "Aldous Huxley's voice combines essayistic clarity with dystopian vision.",
  description:
    "Aldous Huxley's style is characterized by cool, intellectual prose that often explores dystopian themes. His writing is ideal for conveying complex ideas with clarity and precision, making it suitable for narrative and analytical contexts. Reach for this voice when you need to discuss abstract concepts or societal critiques with a detached yet insightful tone.",
  voice_axes: ["lyrical", "plain", "wry"],
  use_cases: ["narrative", "docs", "marketing", "email"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 20,
      max: 35,
    },
    vocabulary_register: "Elevated yet accessible",
    syntax: "Complex and varied",
    figurative_language: "Sparingly used to enhance clarity",
    pacing: "Measured and deliberate",
  },
  do: [
    "Use precise language to convey complex ideas.",
    "Incorporate a wry tone to critique societal norms.",
    "Employ a measured pace to guide the reader through abstract concepts.",
    "Focus on clarity and intellectual engagement.",
  ],
  dont: [
    "Avoid overly emotional or sentimental language.",
    "Do not rely heavily on figurative language.",
    "Refrain from using short, choppy sentences.",
    "Avoid simplifying complex ideas to the point of losing nuance.",
  ],
  exemplars: [
    {
      label: "Documentation snippet",
      content:
        "In our quest for efficiency, we must consider the implications of automation on human creativity. The system is designed to optimize productivity while ensuring that the essence of human ingenuity remains untainted.",
      source: "AI-generated in the Aldous Huxley style",
      is_generated: true,
    },
    {
      label: "Marketing tagline",
      content:
        "Experience innovation, where progress meets the wisdom of restraint.",
      source: "AI-generated in the Aldous Huxley style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with the intellectual clarity and dystopian insight of Aldous Huxley. Craft sentences that are complex yet accessible, using a wry tone to critique societal norms. Avoid overly emotional language, focusing instead on abstract and philosophical concepts. Ensure your prose is measured, guiding the reader through intricate ideas with precision.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 18,
        weight: 0.2,
      },
      {
        metric: "max_sentence_length",
        op: "<=",
        value: 35,
        weight: 0.1,
      },
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.5,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "clarity",
        prompt:
          "Does the text convey complex ideas with clarity and precision?",
        weight: 0.3,
      },
      {
        id: "tone",
        prompt: "Does the text maintain a wry and intellectual tone?",
        weight: 0.3,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
