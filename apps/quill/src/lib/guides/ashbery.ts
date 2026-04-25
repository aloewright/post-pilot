import type { Guide } from "../types";

export const ashbery: Guide = {
  "slug": "ashbery",
  "author": "John Ashbery",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late 20th c.",
  "standfirst": "Surreal and associative, Ashbery's style is a tapestry of unexpected connections.",
  "description": "John Ashbery's voice weaves together disparate elements into a cohesive whole, often creating a dreamlike atmosphere. His writing is characterized by a discursive flow that challenges traditional narrative structures. Use this style when aiming for an evocative and contemplative tone that invites readers to explore multiple layers of meaning.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 50
    },
    "vocabulary_register": "Colloquial with occasional elevated diction",
    "syntax": "Complex and meandering",
    "figurative_language": "Rich with metaphor and unexpected imagery",
    "pacing": "Leisurely, with a focus on mood and tone"
  },
  "do": [
    "Embrace a stream-of-consciousness approach.",
    "Use metaphors to create vivid imagery.",
    "Incorporate elements from everyday life in surprising ways.",
    "Allow ideas to unfold organically without forced conclusions."
  ],
  "dont": [
    "Avoid strict linear narratives.",
    "Do not rely on simple or direct language.",
    "Avoid overly formal or rigid structures.",
    "Do not shy away from complexity and ambiguity."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Where dreams brush past reality, and every moment is a new discovery.",
      "source": "AI-generated in the John Ashbery style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In the midst of our usual routines, a thought occurred, like a breeze catching a forgotten kite.",
      "source": "AI-generated in the John Ashbery style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with an associative and surreal style, weaving together disparate elements into a cohesive whole. Embrace a discursive flow that challenges traditional narrative structures. Use metaphor and unexpected imagery to evoke a dreamlike atmosphere. Avoid strict linearity and embrace complexity and ambiguity. Infuse your writing with a contemplative tone that invites exploration of multiple layers of meaning.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 40,
        "weight": 0.15
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery_vividness",
        "prompt": "Does the text employ rich metaphor and unexpected imagery?",
        "weight": 0.3
      },
      {
        "id": "narrative_cohesion",
        "prompt": "Does the text weave disparate elements into a cohesive whole?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
