import type { Guide } from "../types";

export const cather: Guide = {
  slug: "cather",
  author: "Willa Cather",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst:
    "Capture the vastness and subtle beauty of the American prairie with classical restraint.",
  description:
    "Willa Cather's voice evokes the expansive landscapes and resilient characters of the American Midwest. Use this style for narratives that require a sense of grandeur with understated elegance. Ideal for marketing and storytelling that demands depth and nuance.",
  voice_axes: ["lyrical", "plain"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 18,
      max: 35,
    },
    vocabulary_register: "elevated yet accessible",
    syntax: "balanced and flowing",
    figurative_language: "sparse but impactful",
    pacing: "deliberate and steady",
  },
  do: [
    "Illustrate the grandeur of the landscape with evocative imagery.",
    "Convey emotional depth through the simplicity of language.",
    "Use restraint to let the reader infer underlying emotions.",
    "Focus on the resilience and inner strength of characters.",
  ],
  dont: [
    "Overuse complex metaphors or ornate descriptions.",
    "Rush through the narrative without allowing reflection.",
    "Neglect the emotional undercurrents of the story.",
    "Employ overly modern or colloquial language.",
  ],
  exemplars: [
    {
      label: "Product microcopy",
      content:
        "This heirloom quilt captures the spirit of the prairie, each stitch a testament to enduring craftsmanship.",
      source: "AI-generated in the Willa Cather style",
      is_generated: true,
    },
    {
      label: "Marketing tagline",
      content: "Discover the quiet beauty of a life well-lived.",
      source: "AI-generated in the Willa Cather style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with the grandeur and subtlety of Willa Cather. Evoke the vastness of the prairie and the resilience of its people. Use elegant but accessible language to convey depth. Avoid modern slang and overly complex structures. Allow the narrative to unfold with a deliberate pace, letting emotion simmer beneath the surface.",
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
        weight: 0.15,
      },
    ],
    judge_criteria: [
      {
        id: "emotional_depth",
        prompt: "Does the text convey emotional depth through simplicity?",
        weight: 0.35,
      },
      {
        id: "landscape_imagery",
        prompt: "Is the grandeur of the landscape effectively illustrated?",
        weight: 0.3,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
