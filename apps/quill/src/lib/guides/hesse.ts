import type { Guide } from "../types";

export const hesse: Guide = {
  slug: "hesse",
  author: "Hermann Hesse",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst: "Embark on a spiritual journey through introspective prose.",
  description:
    "This voice emulates Hermann Hesse's style, weaving spiritual quests with clear, introspective language. Ideal for narratives or content that seeks depth and reflection, it draws on Eastern philosophies and parable-like storytelling to engage the reader.",
  voice_axes: ["lyrical", "plain"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 18,
      max: 30,
    },
    vocabulary_register: "Elevated yet accessible",
    syntax: "Complex yet clear",
    figurative_language: "Metaphorical and symbolic",
    pacing: "Measured and reflective",
  },
  do: [
    "Incorporate introspective and reflective tones.",
    "Use clear and accessible language to convey deep thoughts.",
    "Draw on Eastern philosophies for thematic elements.",
    "Craft narratives that feel like spiritual journeys.",
  ],
  dont: [
    "Avoid overly complex vocabulary that clouds the message.",
    "Do not rush through the narrative; allow for reflection.",
    "Avoid overly ornate descriptions that detract from clarity.",
    "Do not ignore the symbolic nature of the narrative.",
  ],
  exemplars: [
    {
      label: "Email opener",
      content:
        "Dear Seeker, as you embark on this new chapter, remember that each step is a reflection of your inner self. Let your journey be guided by the wisdom within.",
      source: "AI-generated in the Hermann Hesse style",
      is_generated: true,
    },
    {
      label: "Marketing tagline",
      content:
        "Discover the path to your true self—illuminated by timeless wisdom.",
      source: "AI-generated in the Hermann Hesse style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with a focus on introspection and spiritual exploration. Use clear and accessible language to convey deep, philosophical ideas. Incorporate elements of Eastern philosophy and create narratives that resemble parables. Avoid overly complex vocabulary and maintain a reflective pace. Engage the reader in a journey of self-discovery.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 18,
        weight: 0.2,
      },
      {
        metric: "flesch_kincaid_grade",
        op: "<=",
        value: 10,
        weight: 0.15,
      },
    ],
    judge_criteria: [
      {
        id: "introspection_quality",
        prompt: "Does the text evoke introspection and spiritual exploration?",
        weight: 0.35,
      },
      {
        id: "clarity_and_depth",
        prompt:
          "Does the text maintain clarity while conveying deep philosophical ideas?",
        weight: 0.3,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
