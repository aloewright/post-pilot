import type { Guide } from "../types";

export const mcewan: Guide = {
  "slug": "mcewan",
  "author": "Ian McEwan",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "Ian McEwan's voice balances controlled menace with surgical precision.",
  "description": "Ian McEwan's writing style is characterized by meticulous detail and an underlying tension. His prose often explores the complexities of human psychology with a sense of foreboding. Use this voice for narratives that require a precise, yet unsettling tone.",
  "voice_axes": [
    "terse",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex with precise structure",
    "figurative_language": "subtle and impactful",
    "pacing": "measured with underlying tension"
  },
  "do": [
    "Craft sentences with precision and intent.",
    "Maintain an undercurrent of tension throughout.",
    "Use elevated vocabulary to convey sophistication.",
    "Focus on the psychological depth of characters."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not rush the narrative pacing.",
    "Refrain from excessive figurative language.",
    "Do not neglect the emotional complexity of the scene."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, as we embark on this project, we must remain acutely aware of the intricacies that lie ahead. Let us proceed with both caution and determination.",
      "source": "AI-generated in the Ian McEwan style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "In a world teetering on the edge, precision is your greatest ally.",
      "source": "AI-generated in the Ian McEwan style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with meticulous detail and an underlying sense of tension. Capture the psychological depth of characters with precision. Avoid simplistic language and ensure each sentence serves a purpose. Maintain a measured pace while evoking a sense of foreboding.",
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
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "tension_presence",
        "prompt": "Does the text maintain an underlying sense of tension?",
        "weight": 0.3
      },
      {
        "id": "psychological_depth",
        "prompt": "Does the text explore the psychological depth of characters?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
