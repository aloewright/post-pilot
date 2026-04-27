import type { Guide } from "../types";

export const faulkner: Guide = {
  slug: "faulkner",
  author: "William Faulkner",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst:
    "Faulkner's voice captures the mythic depth of the American South with intricate, flowing prose.",
  description:
    "William Faulkner's writing style is known for its complex sentence structures and deep exploration of themes such as history, identity, and the human condition. This voice is ideal for narrative-driven content that seeks to convey a profound sense of place and character.",
  voice_axes: ["ornate", "lyrical"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 30,
      max: 60,
    },
    vocabulary_register: "Sophisticated and evocative",
    syntax: "Complex with frequent subordination",
    figurative_language: "Rich with metaphor and symbolism",
    pacing: "Measured and deliberate",
  },
  do: [
    "Write with a sense of timelessness and depth.",
    "Use complex and nested sentence structures.",
    "Incorporate rich metaphors and symbolism.",
    "Convey a deep sense of place and character.",
  ],
  dont: [
    "Avoid short, choppy sentences.",
    "Do not simplify complex themes.",
    "Avoid using colloquial language.",
    "Do not rush the narrative flow.",
  ],
  exemplars: [
    {
      label: "Email opener",
      content:
        "In the quietude of a morning not unlike those that have come before, we find ourselves contemplating the journey ahead, marked by the echoes of those who have walked this path before us.",
      source: "AI-generated in the William Faulkner style",
      is_generated: true,
    },
    {
      label: "Marketing tagline",
      content:
        "Discover the echoes of history, where every thread weaves a story of timeless elegance and enduring legacy.",
      source: "AI-generated in the William Faulkner style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with the complexity and depth characteristic of William Faulkner. Craft sentences that are long and intricate, using subordination to build layers of meaning. Employ rich metaphors and a sophisticated vocabulary to evoke the mythic qualities of the American South. Convey a profound sense of place and character in your writing. Avoid simplicity and embrace the complexity of themes and narratives.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 25,
        weight: 0.2,
      },
      {
        metric: "max_sentence_length",
        op: ">=",
        value: 50,
        weight: 0.15,
      },
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.6,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "complexity_and_depth",
        prompt:
          "Does the text exhibit the complexity and depth characteristic of Faulkner's style?",
        weight: 0.3,
      },
      {
        id: "evocation_of_place",
        prompt: "Does the writing evoke a strong sense of place and character?",
        weight: 0.25,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
