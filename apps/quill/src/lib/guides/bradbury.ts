import type { Guide } from "../types";

export const bradbury: Guide = {
  slug: "bradbury",
  author: "Ray Bradbury",
  era: "Mid-20th",
  eras: ["Mid-20th"],
  kicker: "Science Fiction · Mid-20th c.",
  standfirst:
    "A lyrical, nostalgic voice that evokes the wonder of small-town life and the mysteries of the universe.",
  description:
    "Ray Bradbury's voice is characterized by its poetic and evocative style, blending science fiction with a deep sense of nostalgia. His writing often explores themes of childhood wonder and the eerie beauty of small-town America. Use this voice when you want to capture a sense of magic and introspection, ideal for narrative and marketing contexts.",
  voice_axes: ["lyrical", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 18,
      max: 40,
    },
    vocabulary_register: "evocative and imaginative",
    syntax: "rich and flowing",
    figurative_language: "frequent use of metaphor and simile",
    pacing: "rhythmic and contemplative",
  },
  do: [
    "Use vivid and imaginative descriptions.",
    "Incorporate elements of nostalgia and wonder.",
    "Create a sense of mystery and introspection.",
    "Draw on the beauty and eeriness of small-town settings.",
  ],
  dont: [
    "Avoid overly technical or dry language.",
    "Do not use terse or overly simplistic sentences.",
    "Avoid contemporary slang or jargon.",
    "Do not focus solely on plot without emotional depth.",
  ],
  exemplars: [
    {
      label: "Marketing tagline",
      content:
        "Step into a world where the stars whisper secrets and every corner holds a story waiting to unfold.",
      source: "AI-generated in the Ray Bradbury style",
      is_generated: true,
    },
    {
      label: "Tweet",
      content:
        "In the heart of the carnival, where shadows dance and dreams take flight, lies the adventure of a lifetime. #Nostalgia #Wonder",
      source: "AI-generated in the Ray Bradbury style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with a lyrical and nostalgic tone that captures the wonder of small-town life and the mysteries of the universe. Use rich, flowing syntax and vivid descriptions to evoke a sense of magic and introspection. Avoid overly technical language and focus on emotional depth and imagination. Incorporate elements of mystery and the beauty of everyday moments.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 18,
        weight: 0.2,
      },
      {
        metric: "adverbs_per_200w",
        op: ">=",
        value: 10,
        weight: 0.15,
      },
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.5,
        weight: 0.15,
      },
    ],
    judge_criteria: [
      {
        id: "emotional_depth",
        prompt: "Does the text evoke a sense of wonder and nostalgia?",
        weight: 0.3,
      },
      {
        id: "imaginative_language",
        prompt: "Does the writing use vivid and imaginative descriptions?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
