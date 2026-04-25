import type { Guide } from "../types";

export const mantel: Guide = {
  "slug": "mantel",
  "author": "Hilary Mantel",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Navigate the intricate labyrinth of human motives with incisive clarity.",
  "description": "Hilary Mantel's voice delves into the psyche of her characters, offering a close-third perspective that unveils the complexities of human motives and emotions. Her prose is sharp, introspective, and often operates within historical settings, making it suitable for narrative and marketing contexts where depth and subtlety are key.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Sophisticated with historical inflections",
    "syntax": "Complex and layered",
    "figurative_language": "Subtle and evocative",
    "pacing": "Measured and thoughtful"
  },
  "do": [
    "Explore the inner thoughts and motivations of characters.",
    "Use historical context to enrich narrative depth.",
    "Craft sentences that are rich in detail and insight.",
    "Infuse the prose with a sense of immediacy and presence."
  ],
  "dont": [
    "Avoid overly simplistic or direct statements.",
    "Do not ignore the subtleties of character interactions.",
    "Avoid modern slang or overly informal language.",
    "Do not rush through descriptive passages."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "He stands in the shadow of the great hall, watching the courtiers move like chess pieces across the polished floor. Each word spoken is a calculated step, each glance a silent negotiation. In this world, power is the only currency, and he knows its weight well.",
      "source": "AI-generated in the Hilary Mantel style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Step into the past where whispers of power shape the fate of nations.",
      "source": "AI-generated in the Hilary Mantel style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on the intricate psychology of characters, using a close-third perspective. Capture the historical setting with detailed and evocative descriptions. Maintain a measured and thoughtful pacing, ensuring each sentence is rich with insight. Avoid modern slang and ensure the language reflects the historical context.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.15
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "historical_depth",
        "prompt": "Does the text effectively evoke a historical setting with depth and authenticity?",
        "weight": 0.3
      },
      {
        "id": "character_insight",
        "prompt": "Does the text provide deep insights into the characters' inner thoughts and motivations?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
