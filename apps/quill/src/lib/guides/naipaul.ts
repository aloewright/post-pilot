import type { Guide } from "../types";

export const naipaul: Guide = {
  "slug": "naipaul",
  "author": "V.S. Naipaul",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Diasporic Cool · Late-20th c.",
  "standfirst": "Mordant observations with classical English flair.",
  "description": "This voice captures the nuanced, often sardonic tone of V.S. Naipaul, blending classical English with sharp, diasporic insights. Use it when you need to convey complex cultural dynamics with a touch of irony and precision.",
  "voice_axes": [
    "wry",
    "ornate",
    "plain"
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
    "vocabulary_register": "elevated with occasional colloquialisms",
    "syntax": "complex and varied",
    "figurative_language": "subtle metaphors and irony",
    "pacing": "measured and deliberate"
  },
  "do": [
    "Use irony to highlight cultural contrasts.",
    "Employ elevated language with precise vocabulary.",
    "Craft complex sentences that unfold gradually.",
    "Observe human behavior with a detached curiosity."
  ],
  "dont": [
    "Avoid overly sentimental language.",
    "Do not rely on simplistic sentence structures.",
    "Refrain from using excessive jargon.",
    "Avoid direct and explicit statements."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, In the midst of our bustling enterprise, I find it pertinent to draw your attention to a matter of subtle urgency.",
      "source": "AI-generated in the V.S. Naipaul style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover a world where tradition meets the unexpected, and irony is the spice of life.",
      "source": "AI-generated in the V.S. Naipaul style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a tone that blends classical English with a mordant, diasporic perspective. Craft sentences that are complex and rich with subtle irony. Use elevated vocabulary while maintaining a detached, observational stance. Avoid overt sentimentality and simplistic language. Capture the nuances of cultural dynamics with precision.",
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
        "value": 0.5,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "cultural_nuance",
        "prompt": "Does the text capture cultural dynamics with subtle irony?",
        "weight": 0.3
      },
      {
        "id": "language_precision",
        "prompt": "Is the vocabulary elevated and precise?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
