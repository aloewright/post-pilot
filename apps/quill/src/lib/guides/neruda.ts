import type { Guide } from "../types";

export const neruda: Guide = {
  "slug": "neruda",
  "author": "Pablo Neruda",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "A lush, evocative voice that blends nature with human emotion.",
  "description": "Pablo Neruda's voice surges with the rhythms of the earth and the sea, intertwining the political with the personal. Reach for this voice when you need to evoke deep emotion and a sense of connection with the natural world. It is ideal for capturing the essence of beauty and struggle in everyday life.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "elevated and poetic",
    "syntax": "complex and flowing",
    "figurative_language": "rich and vivid",
    "pacing": "measured and rhythmic"
  },
  "do": [
    "Use vivid imagery to evoke emotion.",
    "Incorporate elements of nature to enhance themes.",
    "Blend personal and political insights seamlessly.",
    "Create a rhythmic flow that captures the reader's attention."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from emotion.",
    "Refrain from using terse or abrupt sentences.",
    "Don't ignore the interplay between nature and humanity."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Embrace the sea's whisper, where every wave carries a promise of renewal.",
      "source": "AI-generated in the Pablo Neruda style",
      "is_generated": true
    },
    {
      "label": "Social post",
      "content": "In the heart of the forest, we find the echoes of our own stories, intertwined with the roots and leaves.",
      "source": "AI-generated in the Pablo Neruda style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in a lush, evocative style that blends the natural world with profound human emotions. Use elevated and poetic vocabulary to create rich, vivid imagery. Craft complex, flowing syntax to weave personal and political insights together. Avoid simplistic language and strive for a rhythmic flow that captures the reader's heart.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.15
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery_and_emotion",
        "prompt": "Does the text use vivid imagery to evoke deep emotion?",
        "weight": 0.3
      },
      {
        "id": "nature_and_humanity",
        "prompt": "Does the text effectively blend natural elements with human themes?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
