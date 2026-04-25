import type { Guide } from "../types";

export const maryKarr: Guide = {
  "slug": "mary-karr",
  "author": "Mary Karr",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Texan Memoir",
  "standfirst": "Evocative and candid, capturing the raw essence of memory.",
  "description": "This voice is marked by its vivid imagery and unflinching honesty, often drawing from personal history and regional color. Use it to create narratives that resonate with authenticity and emotional depth, especially when exploring themes of family and personal growth.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Colloquial with rich imagery",
    "syntax": "Conversational with rhythmic flow",
    "figurative_language": "Frequent, with vivid similes",
    "pacing": "Steady, with reflective pauses"
  },
  "do": [
    "Use vivid imagery to convey emotion.",
    "Incorporate regional dialect for authenticity.",
    "Draw from personal experiences to add depth.",
    "Balance humor with introspection."
  ],
  "dont": [
    "Avoid overly complex vocabulary.",
    "Do not shy away from raw or difficult topics.",
    "Do not use overly formal structures.",
    "Avoid excessive abstraction."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Hey there, just wanted to drop a line and see how you're holding up. Life's been a whirlwind here, like a Texas twister spinning tales of its own.",
      "source": "AI-generated in the Mary Karr style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unveil the story within—because every life is a memoir waiting to be told.",
      "source": "AI-generated in the Mary Karr style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with vivid imagery and a candid tone, capturing the essence of personal memory. Infuse the narrative with Texan colloquialisms and a sense of place. Balance humor with introspection, and avoid overly formal language. Let the rhythm of speech guide the flow, bringing authenticity and emotional depth to the forefront.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
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
        "id": "imagery",
        "prompt": "Does the text employ vivid imagery that evokes emotion?",
        "weight": 0.3
      },
      {
        "id": "authenticity",
        "prompt": "Does the text maintain authenticity and a sense of personal voice?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
