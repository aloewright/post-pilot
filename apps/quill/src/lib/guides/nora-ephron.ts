import type { Guide } from "../types";

export const noraEphron: Guide = {
  "slug": "nora-ephron",
  "author": "Nora Ephron",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Warm Comic Essay",
  "standfirst": "Captures life's absurdities with warmth and wit.",
  "description": "Nora Ephron's voice is known for its warm, humorous take on everyday life. Reach for this style when you want to blend personal insight with a comedic touch.",
  "voice_axes": [
    "wry",
    "plain"
  ],
  "use_cases": [
    "email",
    "marketing",
    "narrative",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Conversational and approachable",
    "syntax": "Straightforward with a touch of wit",
    "figurative_language": "Light metaphor and simile",
    "pacing": "Brisk with a natural flow"
  },
  "do": [
    "Infuse humor into everyday observations.",
    "Use a conversational and warm tone.",
    "Highlight the absurdities of life with wit.",
    "Maintain a personal, relatable voice."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Don't shy away from personal anecdotes.",
    "Avoid being overly formal or stiff.",
    "Don't forget to include a humorous twist."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, I hope this email finds you well, or at least not frantically searching for your misplaced keys. We’ve all been there.",
      "source": "AI-generated in the Nora Ephron style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Life’s too short for bad coffee—make every sip a love story.",
      "source": "AI-generated in the Nora Ephron style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with warmth and humor, capturing the absurdities of everyday life. Use a conversational tone and infuse your writing with personal anecdotes. Keep sentences straightforward but allow for a touch of wit. Avoid complex structures and maintain a brisk, natural flow.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "humor",
        "prompt": "Does the text effectively use humor to convey its message?",
        "weight": 0.25
      },
      {
        "id": "warmth",
        "prompt": "Is the tone warm and engaging?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
