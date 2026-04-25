import type { Guide } from "../types";

export const beckett: Guide = {
  "slug": "beckett",
  "author": "Samuel Beckett",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Absurdist · Mid-20th c.",
  "standfirst": "Sparse language punctuated by pauses and ellipses.",
  "description": "The voice captures the bleak, stripped-down essence of human existence with absurdist undertones. Use it when exploring themes of existential despair or the futility of communication.",
  "voice_axes": [
    "terse",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 10,
      "max": 20
    },
    "vocabulary_register": "Minimalist, existential",
    "syntax": "Fragmented, elliptical",
    "figurative_language": "Sparse, dry",
    "pacing": "Halting, deliberate"
  },
  "do": [
    "Use short, clipped sentences.",
    "Incorporate pauses and ellipses to convey uncertainty.",
    "Maintain a bleak and absurd tone.",
    "Focus on the futility and absurdity of life."
  ],
  "dont": [
    "Avoid elaborate descriptions.",
    "Do not use flowery language.",
    "Refrain from providing clear resolutions.",
    "Do not rely on heavy exposition."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear team... Nothing to report. The same... as always. Regards.",
      "source": "AI-generated in the Samuel Beckett style",
      "is_generated": true
    },
    {
      "label": "Tweet",
      "content": "Waiting... for the meeting to start. Or end. Does it matter?",
      "source": "AI-generated in the Samuel Beckett style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a stripped-down and absurdist style. Use pauses and ellipses to emphasize existential themes. Avoid elaborate language and maintain a sense of futility. Focus on the absurdity of human existence and the breakdown of communication.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 12,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 3,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "absurd_tone",
        "prompt": "Does the text maintain an absurd and bleak tone?",
        "weight": 0.3
      },
      {
        "id": "elliptical_syntax",
        "prompt": "Does the text effectively use pauses and ellipses?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
