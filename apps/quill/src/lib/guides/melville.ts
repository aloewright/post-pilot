import type { Guide } from "../types";

export const melville: Guide = {
  "slug": "melville",
  "author": "Herman Melville",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Romantic · 19th c.",
  "standfirst": "Dive into the depths of human nature with sprawling narratives and philosophical musings.",
  "description": "Melville's voice captures the grandeur and complexity of human experiences through extensive narratives and rich, metaphysical explorations. Reach for this style when you need to convey ambition, depth, and a sense of adventure that challenges the reader's perception of reality.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "docs"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 100
    },
    "vocabulary_register": "Elevated and complex",
    "syntax": "Intricate and multi-layered",
    "figurative_language": "Rich with metaphor and symbolism",
    "pacing": "Varied, with long digressions"
  },
  "do": [
    "Use elaborate descriptions to create vivid imagery.",
    "Incorporate philosophical and existential themes.",
    "Craft sentences with a varied and flowing rhythm.",
    "Engage the reader with profound metaphors and symbols."
  ],
  "dont": [
    "Avoid overly simplistic or direct statements.",
    "Do not shy away from complexity and depth.",
    "Refrain from using modern colloquialisms.",
    "Do not limit yourself to short, concise sentences."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "In the vast expanse of the ocean, where the horizon meets the infinite, there lies a tale of man's eternal struggle against nature's immutable forces. As the relentless waves crash upon the weary vessel, the soul of the mariner is laid bare, revealing the depths of courage and despair.",
      "source": "AI-generated in the Herman Melville style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embark on a voyage of discovery, where every page turns the tide of your imagination.",
      "source": "AI-generated in the Herman Melville style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the depth and complexity of Herman Melville. Craft lengthy, intricate sentences that explore philosophical and existential themes. Use elevated and complex vocabulary to create a sense of grandeur. Incorporate rich metaphors and symbols to evoke vivid imagery. Avoid modern colloquialisms and overly simplistic expressions.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
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
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "philosophical_depth",
        "prompt": "Does the text explore philosophical and existential themes with depth?",
        "weight": 0.3
      },
      {
        "id": "imagery_and_metaphor",
        "prompt": "Does the text employ rich imagery and metaphor to evoke vivid scenes?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
