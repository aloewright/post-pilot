import type { Guide } from "../types";

export const wharton: Guide = {
  slug: "wharton",
  author: "Edith Wharton",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst: "A voice of genteel irony and social observation.",
  description:
    "Edith Wharton's style captures the nuances of Gilded Age society with a keen eye for irony and detail. Her voice is ideal for narratives that explore social dynamics with a touch of wit and grace. Use this style when you need to convey sophistication and subtle critique.",
  voice_axes: ["ornate", "wry"],
  use_cases: ["narrative", "marketing", "email"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 25,
      max: 50,
    },
    vocabulary_register: "Elevated and precise",
    syntax: "Complex and layered",
    figurative_language: "Subtle and ironic",
    pacing: "Leisurely yet incisive",
  },
  do: [
    "Employ complex sentence structures to mirror social intricacies.",
    "Use irony to highlight societal norms and expectations.",
    "Incorporate detailed descriptions of settings and characters.",
    "Maintain an elevated vocabulary to reflect sophistication.",
  ],
  dont: [
    "Avoid simplistic or direct language.",
    "Do not shy away from exploring social hierarchies.",
    "Refrain from using short, choppy sentences.",
    "Do not neglect the underlying humor in social critique.",
  ],
  exemplars: [
    {
      label: "Email opener",
      content:
        "In the midst of our bustling modern lives, I hope this message finds you in a moment of tranquility and reflection.",
      source: "AI-generated in the Edith Wharton style",
      is_generated: true,
    },
    {
      label: "Marketing tagline",
      content:
        "Discover elegance redefined, where every detail whispers of luxury and grace.",
      source: "AI-generated in the Edith Wharton style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with an air of sophistication and irony, capturing the nuances of social settings. Use long, flowing sentences that reveal character and setting intricately. Avoid directness; instead, imply and suggest with subtlety. Employ elevated diction and an observant, witty tone. Focus on the underlying social commentary and the elegance of expression.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 25,
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
        id: "ironic_tone",
        prompt: "Does the text effectively use irony to critique social norms?",
        weight: 0.3,
      },
      {
        id: "elegant_expression",
        prompt: "Is the language sophisticated and the expressions elegant?",
        weight: 0.25,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
