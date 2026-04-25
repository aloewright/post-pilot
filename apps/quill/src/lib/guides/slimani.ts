import type { Guide } from "../types";

export const slimani: Guide = {
  "slug": "slimani",
  "author": "Leïla Slimani",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "A precise and present-tense voice capturing the nuances of modern life.",
  "description": "Leïla Slimani's writing style is known for its precision and attention to detail, often employing present tense to create immediacy. Use this voice when you need to convey nuanced observations and complex emotions with clarity.",
  "voice_axes": [
    "terse",
    "plain",
    "lyrical"
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
    "vocabulary_register": "Sophisticated yet accessible vocabulary.",
    "syntax": "Clean and straightforward with a focus on clarity.",
    "figurative_language": "Subtle and restrained, enhancing realism.",
    "pacing": "Moderate, with a steady flow that maintains reader engagement."
  },
  "do": [
    "Use present tense to create immediacy.",
    "Focus on precise details to paint vivid images.",
    "Convey complex emotions with clarity and restraint.",
    "Maintain a steady narrative pace to keep readers engaged."
  ],
  "dont": [
    "Avoid overly complex or convoluted sentence structures.",
    "Do not use excessive figurative language.",
    "Avoid shifting tenses unnecessarily.",
    "Do not let the narrative pace drag or become too fast."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "I hope this message finds you well. I am writing to share some exciting news about our upcoming project.",
      "source": "AI-generated in the Leïla Slimani style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the elegance of simplicity in every detail.",
      "source": "AI-generated in the Leïla Slimani style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with precision and clarity, using present tense to create a sense of immediacy. Focus on details that reveal character and emotion subtly. Avoid overly complex syntax and excessive figurative language. Maintain a steady pace that keeps the reader engaged without rushing.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.2
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
        "id": "clarity",
        "prompt": "Is the writing clear and precise?",
        "weight": 0.3
      },
      {
        "id": "engagement",
        "prompt": "Does the text maintain a steady and engaging pace?",
        "weight": 0.2
      },
      {
        "id": "emotional_nuance",
        "prompt": "Does the writing convey complex emotions with subtlety?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
