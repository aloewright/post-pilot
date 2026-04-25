import type { Guide } from "../types";

export const mamet: Guide = {
  "slug": "mamet",
  "author": "David Mamet",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "Capture the raw, staccato rhythm of a salesman's pitch.",
  "description": "David Mamet's voice is characterized by terse, rapid-fire dialogue often laced with profanity and a keen sense of urgency. Use this style when you need to convey intensity and immediacy, particularly in scenarios involving negotiation or high-stakes situations.",
  "voice_axes": [
    "terse",
    "wry"
  ],
  "use_cases": [
    "marketing",
    "email",
    "social",
    "narrative"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 8,
      "max": 15
    },
    "vocabulary_register": "colloquial, direct",
    "syntax": "fragmented, punchy",
    "figurative_language": "minimal, sharp metaphors",
    "pacing": "rapid, unrelenting"
  },
  "do": [
    "Use short, punchy sentences.",
    "Incorporate colloquial and direct language.",
    "Create a sense of urgency and immediacy.",
    "Highlight conflict and tension in dialogue."
  ],
  "dont": [
    "Avoid long, complex sentences.",
    "Do not use elaborate descriptions.",
    "Refrain from softening the message.",
    "Do not ignore the power of subtext."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Get it now. No excuses. No time to waste.",
      "source": "AI-generated in the David Mamet style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Listen, we need to talk. It's urgent. Let's cut to the chase.",
      "source": "AI-generated in the David Mamet style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the urgency and directness of David Mamet. Use short, punchy sentences and a colloquial tone. Capture the tension and conflict inherent in high-stakes scenarios. Avoid complex syntax and elaborate descriptions. Focus on delivering a message with impact and immediacy.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 10,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": "<=",
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "urgency",
        "prompt": "Does the text convey a sense of urgency and immediacy?",
        "weight": 0.3
      },
      {
        "id": "conflict",
        "prompt": "Does the text effectively highlight tension and conflict?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
