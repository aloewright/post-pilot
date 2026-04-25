import type { Guide } from "../types";

export const hugo: Guide = {
  "slug": "hugo",
  "author": "Victor Hugo",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Romantic · 19th c.",
  "standfirst": "Capture the grandeur of human struggle and moral depth.",
  "description": "Victor Hugo's voice is known for its sweeping narrative style, blending epic storytelling with deep social commentary. Use this voice when crafting narratives that require a sense of moral grandeur and intricate detail.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "elevated and expressive",
    "syntax": "complex and digressive",
    "figurative_language": "rich with metaphors and similes",
    "pacing": "deliberate and grand"
  },
  "do": [
    "Embrace grandiose themes and elaborate descriptions.",
    "Infuse your narrative with moral and social insights.",
    "Use complex sentences to build an epic tone.",
    "Incorporate vivid imagery and rhetorical flourishes."
  ],
  "dont": [
    "Avoid terse or overly simplistic language.",
    "Do not shy away from emotional intensity.",
    "Refrain from ignoring the larger social context.",
    "Do not simplify moral complexities."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "In the heart of darkness, a beacon of hope arises.",
      "source": "AI-generated in the Victor Hugo style",
      "is_generated": true
    },
    {
      "label": "Social post",
      "content": "Witness the eternal dance of justice and redemption, where every soul plays its part in the grand tapestry of life.",
      "source": "AI-generated in the Victor Hugo style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the grandeur and depth characteristic of Victor Hugo. Embrace complex sentence structures that convey moral and social themes. Use rich, evocative language to capture epic narratives. Avoid simplicity; instead, digress into intricacies that reveal the human condition. Infuse your writing with rhetorical flourishes and profound insights.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 30,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 60,
        "weight": 0.15
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
        "id": "moral_grandeur",
        "prompt": "Does the text convey a sense of moral grandeur and social depth?",
        "weight": 0.3
      },
      {
        "id": "rhetorical_flourish",
        "prompt": "Does the writing employ rhetorical flourishes characteristic of Victor Hugo?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
