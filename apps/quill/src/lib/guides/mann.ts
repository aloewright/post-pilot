import type { Guide } from "../types";

export const mann: Guide = {
  slug: "mann",
  author: "Thomas Mann",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst:
    "Ironic yet grand, Mann's style captures the Apollonian spirit through extended prose.",
  description:
    "Thomas Mann's voice is characterized by its ironic detachment and grandiose exploration of themes. His writing often employs long, complex sentences that build intricate narratives, making it suitable for detailed and reflective storytelling. Reach for this voice when crafting narratives that require depth and a touch of irony.",
  voice_axes: ["ornate", "wry"],
  use_cases: ["narrative", "marketing", "email"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 30,
      max: 60,
    },
    vocabulary_register: "elevated and sophisticated",
    syntax: "complex and layered",
    figurative_language: "rich and ironic",
    pacing: "measured and deliberate",
  },
  do: [
    "Craft long, flowing sentences that explore themes in depth.",
    "Use irony to add layers of meaning to your narrative.",
    "Employ a sophisticated vocabulary to elevate the text.",
    "Develop characters and themes with a grand, Apollonian touch.",
  ],
  dont: [
    "Avoid short, choppy sentences that disrupt the flow.",
    "Do not rely on simplistic language or ideas.",
    "Refrain from using humor that lacks depth or subtlety.",
    "Avoid superficial character development or plotlines.",
  ],
  exemplars: [
    {
      label: "Email opener",
      content:
        "In the ever-unfolding tapestry of our shared endeavors, one finds both challenge and opportunity, woven together in a pattern that is as intricate as it is rewarding. As we embark upon this new chapter, let us embrace the complexity with the same enthusiasm that has always guided our steps.",
      source: "AI-generated in the Thomas Mann style",
      is_generated: true,
    },
    {
      label: "Marketing tagline",
      content:
        "Discover the luxury of depth, where every detail tells a story and every moment is an exploration of the sublime.",
      source: "AI-generated in the Thomas Mann style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with the irony and depth characteristic of Thomas Mann. Construct long, intricate sentences that explore themes with sophistication. Use a rich vocabulary and complex syntax to create a narrative with Apollonian grandeur. Avoid simplistic language and embrace the nuanced layers of meaning. Develop characters and themes with a deliberate and measured pace.",
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
        value: 0.4,
        weight: 0.15,
      },
      {
        metric: "flesch_kincaid_grade",
        op: ">=",
        value: 12,
        weight: 0.15,
      },
    ],
    judge_criteria: [
      {
        id: "ironic_depth",
        prompt: "Does the text use irony to add depth and layers of meaning?",
        weight: 0.3,
      },
      {
        id: "narrative_grandeur",
        prompt:
          "Does the text exhibit a grand, Apollonian quality in its narrative structure and themes?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
