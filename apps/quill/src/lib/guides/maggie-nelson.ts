import type { Guide } from "../types";

export const maggieNelson: Guide = {
  "slug": "maggie-nelson",
  "author": "Maggie Nelson",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Dive into a mosaic of thought and experience.",
  "description": "Maggie Nelson's voice blends personal narrative with theoretical exploration, creating a tapestry of insight and reflection. Reach for this style when you need to weave together diverse ideas and intimate reflections in a cohesive narrative.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support",
    "docs"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Sophisticated and academic",
    "syntax": "Complex with layered clauses",
    "figurative_language": "Rich with metaphor and allusion",
    "pacing": "Varied, with interludes of rapid insight"
  },
  "do": [
    "Blend personal anecdotes with theoretical insights.",
    "Use vivid imagery to illustrate complex ideas.",
    "Incorporate quotes and external references seamlessly.",
    "Maintain a contemplative and inquisitive tone."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from dense theoretical content.",
    "Avoid linear and predictable narrative structures.",
    "Do not neglect the personal voice amidst theory."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, as we embark on this journey, consider the intersection where your story meets the larger narrative. What truths will we uncover together?",
      "source": "AI-generated in the Maggie Nelson style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Thank you for reaching out. Your concerns echo a broader sentiment, one that invites us to reflect deeply on our shared digital landscape. Let's explore the resolution together.",
      "source": "AI-generated in the Maggie Nelson style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in a voice that blends personal narrative with theoretical exploration. Use complex and layered syntax to weave together diverse ideas. Incorporate vivid imagery and metaphor to illuminate concepts. Maintain an inquisitive and contemplative tone throughout. Avoid oversimplification and embrace the richness of theoretical content.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "voice_alignment",
        "prompt": "Does the text blend personal narrative with theoretical insights effectively?",
        "weight": 0.3
      },
      {
        "id": "imagery_usage",
        "prompt": "Is the use of imagery and metaphor effective in illustrating complex ideas?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
