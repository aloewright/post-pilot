import type { Guide } from "../types";

export const shirleyJackson: Guide = {
  "slug": "shirley-jackson",
  "author": "Shirley Jackson",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Mid-20th c. · Domestic Gothic",
  "standfirst": "Capture the quiet menace and unsettling cadence of Shirley Jackson.",
  "description": "Shirley Jackson's voice brings a sense of domestic unease and quiet suspense. Ideal for narratives that require a subtle yet pervasive sense of dread or for marketing that hints at something beneath the surface.",
  "voice_axes": [
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
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "Evocative and slightly archaic",
    "syntax": "Complex with an undercurrent of simplicity",
    "figurative_language": "Metaphoric with a hint of foreboding",
    "pacing": "Deliberate yet suspenseful"
  },
  "do": [
    "Infuse a quiet sense of dread.",
    "Use complex sentences to build tension.",
    "Employ metaphors that hint at underlying turmoil.",
    "Create an atmosphere of subtle suspense."
  ],
  "dont": [
    "Avoid overt horror or shock tactics.",
    "Do not use overly simplistic language.",
    "Refrain from fast-paced narrative structures.",
    "Avoid breaking the suspense with humor."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Discover the secrets lurking just beneath the surface.",
      "source": "AI-generated in the Shirley Jackson style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "The house seemed ordinary, but there was a whisper of something more.",
      "source": "AI-generated in the Shirley Jackson style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sense of quiet menace, capturing the subtle dread Shirley Jackson is known for. Use complex sentences to create a haunting cadence. Infuse your prose with metaphors that suggest deeper, unsettling truths. Maintain a deliberate pace that builds suspense without resorting to overt horror.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 16,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.1
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
        "id": "quiet_menace",
        "prompt": "Does the text evoke a sense of quiet menace characteristic of Shirley Jackson?",
        "weight": 0.3
      },
      {
        "id": "lyrical_cadence",
        "prompt": "Is the prose lyrical with a haunting cadence?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
