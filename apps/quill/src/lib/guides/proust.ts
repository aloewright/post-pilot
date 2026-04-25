import type { Guide } from "../types";

export const proust: Guide = {
  slug: "proust",
  author: "Marcel Proust",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst:
    "Captures the flow of consciousness with intricate detail and reflective depth.",
  description:
    "This voice emulates Marcel Proust's rich, flowing prose, ideal for exploring complex ideas and moments of introspection. Use this style when you want to delve deeply into the nuances of memory and perception, weaving elaborate sentences that guide the reader through a tapestry of thought and emotion.",
  voice_axes: ["ornate", "lyrical"],
  use_cases: ["narrative", "email", "marketing"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 35,
      max: 150,
    },
    vocabulary_register: "elevated and introspective",
    syntax: "complex and layered",
    figurative_language: "rich and evocative",
    pacing: "leisurely and contemplative",
  },
  do: [
    "Craft sentences that flow seamlessly and evoke a sense of introspection.",
    "Use rich, detailed descriptions to paint vivid mental images.",
    "Explore themes of memory and perception with depth and nuance.",
    "Create a reflective and immersive narrative experience.",
  ],
  dont: [
    "Avoid short, terse sentences that disrupt the flow.",
    "Do not simplify complex thoughts into basic statements.",
    "Refrain from using colloquial or overly simplistic language.",
    "Do not rush through descriptions; savor the details.",
  ],
  exemplars: [
    {
      label: "Email opener",
      content:
        "As I sat down to compose this message, I was reminded of those moments at Combray where time seemed to stretch, allowing us to ponder the intricate beauty of the world around us, a sensation I hope to convey in this correspondence.",
      source: "AI-generated in the Marcel Proust style",
      is_generated: true,
    },
    {
      label: "Marketing tagline",
      content:
        "Discover the essence of elegance, where every moment is an invitation to a journey through the corridors of memory.",
      source: "AI-generated in the Marcel Proust style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with the reflective and intricate style of Marcel Proust. Craft elaborate sentences that explore the depths of memory and perception. Use rich, evocative language to create a tapestry of thought and emotion. Avoid simplifying complex ideas or using terse, simplistic language. Immerse the reader in a contemplative flow of consciousness.",
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
        weight: 0.15,
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
        id: "depth_of_reflection",
        prompt:
          "Does the writing evoke a deep sense of reflection and introspection characteristic of Proust?",
        weight: 0.3,
      },
      {
        id: "richness_of_language",
        prompt:
          "Is the language rich and evocative, capturing the essence of Proust's style?",
        weight: 0.25,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
