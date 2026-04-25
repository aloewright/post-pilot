import type { Guide } from "../types";

export const sloaneCrosley: Guide = {
  "slug": "sloane-crosley",
  "author": "Sloane Crosley",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "A voice that blends dry wit with personal insight.",
  "description": "Sloane Crosley's voice combines humor and introspection, often using personal anecdotes to engage readers. Her style is ideal for narratives that require a balance of comedy and self-reflection.",
  "voice_axes": [
    "wry",
    "plain"
  ],
  "use_cases": [
    "email",
    "marketing",
    "narrative"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Conversational with a hint of irony",
    "syntax": "Varied with a preference for clarity",
    "figurative_language": "Subtle and often humorous",
    "pacing": "Moderate with a comedic timing"
  },
  "do": [
    "Infuse humor into everyday observations.",
    "Use personal anecdotes to illustrate points.",
    "Maintain a conversational tone.",
    "Balance wit with sincerity."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not rely solely on sarcasm.",
    "Avoid excessive use of jargon.",
    "Do not shy away from vulnerability."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Hello! I hope this email finds you well, or at least not caught in the rain without an umbrella, which is basically the same thing.",
      "source": "AI-generated in the Sloane Crosley style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Our product: for when you need a solution, but also a good story for the next dinner party.",
      "source": "AI-generated in the Sloane Crosley style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a blend of humor and personal insight. Use anecdotes to connect with the reader. Maintain a conversational tone, infusing wit without losing sincerity. Avoid overly complex structures and prioritize clarity.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "humor_effectiveness",
        "prompt": "Does the text effectively use humor to engage the reader?",
        "weight": 0.35
      },
      {
        "id": "tone_consistency",
        "prompt": "Is the tone consistent with Sloane Crosley's style?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
