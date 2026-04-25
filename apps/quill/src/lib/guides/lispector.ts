import type { Guide } from "../types";

export const lispector: Guide = {
  "slug": "lispector",
  "author": "Clarice Lispector",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Mystical · Mid-20th c.",
  "standfirst": "Capture the luminous and introspective style of Clarice Lispector.",
  "description": "This voice embodies the introspective and mystical quality of Clarice Lispector's writing, characterized by a deep exploration of inner thoughts and emotions. Use this voice when seeking to evoke a sense of wonder and introspection, often with a philosophical or existential bent.",
  "voice_axes": [
    "lyrical",
    "ornate",
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
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Sophisticated with mystical undertones",
    "syntax": "Complex and flowing",
    "figurative_language": "Rich with metaphor and introspection",
    "pacing": "Measured and contemplative"
  },
  "do": [
    "Embrace introspective and philosophical themes.",
    "Use rich, metaphorical language to evoke emotion.",
    "Craft sentences that flow like a stream of consciousness.",
    "Explore the mystical and existential aspects of human experience."
  ],
  "dont": [
    "Avoid overly simplistic or direct statements.",
    "Do not shy away from complex emotional landscapes.",
    "Refrain from using overly technical or dry language.",
    "Avoid abrupt or jarring sentence structures."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the quiet folds of morning, I find myself reaching out to you, pondering the essence of our shared journey. May this message find you amidst moments of reflection.",
      "source": "AI-generated in the Clarice Lispector style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the soul of your being, where each moment unfolds like a petal in the sun.",
      "source": "AI-generated in the Clarice Lispector style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a luminous and introspective style, capturing the essence of Clarice Lispector. Use rich, metaphorical language to explore inner thoughts and emotions. Avoid simplistic expressions and instead embrace complexity and depth. Allow your sentences to flow smoothly like a stream of consciousness, revealing the mystical aspects of human experience.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "introspection",
        "prompt": "Does the text evoke deep introspection and a sense of wonder?",
        "weight": 0.3
      },
      {
        "id": "lyrical_quality",
        "prompt": "Is the writing style lyrical and flowing, with rich metaphorical language?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
