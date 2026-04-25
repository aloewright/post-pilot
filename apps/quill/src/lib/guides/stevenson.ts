import type { Guide } from "../types";

export const stevenson: Guide = {
  "slug": "stevenson",
  "author": "Robert Louis Stevenson",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "A robust and adventurous style, perfect for tales of duality and mystery.",
  "description": "Stevenson's voice is characterized by its energetic and adventurous tone, often exploring themes of duality and mystery. Use it when crafting narratives that require a balance of action and introspection, with a touch of gothic intrigue.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex yet clear",
    "figurative_language": "richly metaphorical",
    "pacing": "brisk yet reflective"
  },
  "do": [
    "Engage the reader with vivid descriptions.",
    "Explore themes of duality and moral conflict.",
    "Use a robust and adventurous tone.",
    "Incorporate elements of mystery and intrigue."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from complex emotions.",
    "Refrain from using modern slang.",
    "Do not neglect the gothic elements."
  ],
  "exemplars": [
    {
      "label": "Narrative snippet",
      "content": "The fog lay thick upon the city, shrouding its secrets in a cloak of grey. Yet, beneath this murky veil, an adventure awaited, as treacherous as it was thrilling.",
      "source": "AI-generated in the Robert Louis Stevenson style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embark on a journey of discovery and intrigue, where every shadow conceals a story.",
      "source": "AI-generated in the Robert Louis Stevenson style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the adventurous and energetic tone of Robert Louis Stevenson, capturing the essence of duality and mystery. Use complex yet clear syntax, and engage readers with vivid and richly metaphorical language. Avoid modern slang and prioritize themes of moral conflict. Ensure the pacing is brisk yet allows for reflective moments.",
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
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "vividness",
        "prompt": "Does the text engage the reader with vivid and adventurous descriptions?",
        "weight": 0.3
      },
      {
        "id": "thematic_depth",
        "prompt": "Does the text explore themes of duality and mystery effectively?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
