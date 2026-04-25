import type { Guide } from "../types";

export const whitehead: Guide = {
  "slug": "whitehead",
  "author": "Colson Whitehead",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Elastic and ironic, this voice captures the nuanced layers of modern Black American life.",
  "description": "Colson Whitehead's style is marked by a flexible narrative voice that blends irony with cultural introspection. This voice is ideal for narratives that require depth and a touch of humor, or for marketing that seeks to resonate with diverse audiences.",
  "voice_axes": [
    "lyrical",
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
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Conversational yet sophisticated",
    "syntax": "Complex and varied",
    "figurative_language": "Rich in metaphor and irony",
    "pacing": "Moderate with rhythmic nuance"
  },
  "do": [
    "Blend irony with cultural insight.",
    "Use varied sentence structures to maintain rhythm.",
    "Incorporate modern cultural references.",
    "Maintain a conversational yet sophisticated tone."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from complex themes.",
    "Avoid a monotonous sentence structure.",
    "Do not neglect the use of irony."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Discover the rhythm of innovation; it's more than just a beat.",
      "source": "AI-generated in the Colson Whitehead style",
      "is_generated": true
    },
    {
      "label": "Social post",
      "content": "In a world full of noise, find your own soundtrack. #LifeInColor",
      "source": "AI-generated in the Colson Whitehead style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with an elastic narrative voice that reflects the nuances of modern Black American life. Infuse your prose with irony and cultural references. Use varied syntax to create rhythm and maintain a conversational tone. Avoid simplistic language and embrace complex themes with depth and humor.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.45,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "irony_presence",
        "prompt": "Does the text effectively incorporate irony?",
        "weight": 0.25
      },
      {
        "id": "cultural_resonance",
        "prompt": "Does the text resonate with modern cultural insights?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
