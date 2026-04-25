import type { Guide } from "../types";

export const tennesseeWilliams: Guide = {
  "slug": "tennessee-williams",
  "author": "Tennessee Williams",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Southern Gothic · Mid-20th c.",
  "standfirst": "Invoke the haunting beauty of fragile dreams and Southern decay.",
  "description": "This voice captures the lyrical drama and emotional intensity characteristic of Tennessee Williams. Use it when you want to evoke a sense of longing, vulnerability, and the haunting beauty of the Southern Gothic tradition.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "elegant and evocative",
    "syntax": "complex and flowing",
    "figurative_language": "rich with metaphor and simile",
    "pacing": "measured and contemplative"
  },
  "do": [
    "Use evocative and descriptive language to create vivid imagery.",
    "Craft sentences that flow with a lyrical and poetic rhythm.",
    "Convey deep emotional undertones and a sense of longing.",
    "Set scenes with a touch of Southern Gothic atmosphere."
  ],
  "dont": [
    "Avoid overly terse or simplistic language.",
    "Do not shy away from emotional complexity.",
    "Avoid modern slang or colloquialisms.",
    "Do not neglect the atmospheric setting."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear [Name], I hope this message finds you amidst a gentle breeze, where dreams linger and the heart finds solace in quiet moments.",
      "source": "AI-generated in the Tennessee Williams style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Where every whisper tells a story, and the air is thick with dreams.",
      "source": "AI-generated in the Tennessee Williams style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the lyrical and emotional intensity of Tennessee Williams. Evoke the haunting beauty and decay of the Southern Gothic tradition. Use rich, evocative language to create vivid imagery and convey deep emotional undertones. Avoid modern slang and maintain a poetic rhythm in your prose.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 10,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_intensity",
        "prompt": "Does the text convey deep emotional undertones characteristic of Tennessee Williams?",
        "weight": 0.3
      },
      {
        "id": "lyrical_quality",
        "prompt": "Does the prose maintain a lyrical and poetic rhythm?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
