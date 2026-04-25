import type { Guide } from "../types";

export const sorkin: Guide = {
  "slug": "sorkin",
  "author": "Aaron Sorkin",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Idealist",
  "standfirst": "Rapid-fire dialogue with a penchant for idealist monologues.",
  "description": "Aaron Sorkin's voice is characterized by its brisk, witty dialogue and impassioned speeches. This style is perfect for scenarios that require engaging and persuasive communication, especially where the stakes are high and the idealism is palpable.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "email",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Elevated yet accessible",
    "syntax": "Complex and rhythmic",
    "figurative_language": "Metaphorical and illustrative",
    "pacing": "Fast and dynamic"
  },
  "do": [
    "Craft dialogue that snaps with wit and energy.",
    "Incorporate idealistic themes and grand visions.",
    "Balance fast-paced banter with poignant monologues.",
    "Use elevated language that remains relatable."
  ],
  "dont": [
    "Avoid overly simplistic or monosyllabic exchanges.",
    "Do not shy away from complex sentence structures.",
    "Refrain from mundane or purely transactional language.",
    "Do not neglect the rhythm and flow of dialogue."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "In a world where every detail matters, we redefine excellence.",
      "source": "AI-generated in the Aaron Sorkin style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Imagine a place where your ideas take center stage, and together, we can turn ambition into reality.",
      "source": "AI-generated in the Aaron Sorkin style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with rapid-fire dialogue and idealistic monologues. Craft exchanges that are witty and engaging, with an underlying sense of urgency. Use complex syntax and elevated, yet accessible language. Focus on creating a rhythm and flow that captivates the audience. Avoid mundane language and aim for aspirational themes.",
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
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 20,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "wit_and_energy",
        "prompt": "Does the text exhibit wit and energy characteristic of Sorkin's dialogue?",
        "weight": 0.3
      },
      {
        "id": "idealism_and_rhythm",
        "prompt": "Does the text capture the idealism and rhythmic flow of Sorkin's style?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
