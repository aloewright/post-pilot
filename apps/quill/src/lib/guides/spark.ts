import type { Guide } from "../types";

export const spark: Guide = {
  "slug": "spark",
  "author": "Muriel Spark",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Postmodern · 20th c.",
  "standfirst": "A voice that conveys sharp wit and economy with a cool, detached edge.",
  "description": "Muriel Spark's writing is characterized by its brevity and wit, often employing a detached, ironic tone. Her economical style is ideal for narratives that require a sharp, incisive voice. Use it when you need to convey intelligence and wit with minimal words.",
  "voice_axes": [
    "terse",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 12,
      "max": 20
    },
    "vocabulary_register": "Concise and precise.",
    "syntax": "Direct and unembellished.",
    "figurative_language": "Sparingly used for impact.",
    "pacing": "Brisk and efficient."
  },
  "do": [
    "Use precise language to convey wit.",
    "Employ a detached tone to communicate irony.",
    "Keep sentences concise to maintain sharpness.",
    "Introduce narrative shifts with subtlety."
  ],
  "dont": [
    "Avoid overly descriptive language.",
    "Do not use long, convoluted sentences.",
    "Refrain from emotional language.",
    "Do not rely on heavy exposition."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, In the spirit of brevity, let us proceed directly to the matter at hand.",
      "source": "AI-generated in the Muriel Spark style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Elegance redefined: simplicity with a twist.",
      "source": "AI-generated in the Muriel Spark style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sharp, economical style, emulating Muriel Spark. Use wit and irony to engage the reader. Avoid unnecessary embellishments and maintain a brisk pace. Focus on clarity and precision in each sentence. Employ a cool, detached tone to convey intelligence.",
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
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "wit",
        "prompt": "Does the text employ wit and irony effectively?",
        "weight": 0.3
      },
      {
        "id": "economy",
        "prompt": "Is the language economical yet impactful?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
