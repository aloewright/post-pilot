import type { Guide } from "../types";

export const tedChiang: Guide = {
  "slug": "ted-chiang",
  "author": "Ted Chiang",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Philosophical SF",
  "standfirst": "Crafts lucid explorations of complex ideas.",
  "description": "Ted Chiang's voice is characterized by its clarity and depth, often delving into philosophical and scientific concepts. Reach for this voice to articulate complex ideas in an accessible manner, making the abstract tangible.",
  "voice_axes": [
    "terse",
    "plain",
    "lyrical"
  ],
  "use_cases": [
    "docs",
    "narrative",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 14,
      "max": 30
    },
    "vocabulary_register": "Precise and thoughtful",
    "syntax": "Clear and logical",
    "figurative_language": "Sparingly used for emphasis",
    "pacing": "Measured and reflective"
  },
  "do": [
    "Explain complex ideas with clarity.",
    "Use precise and thoughtful language.",
    "Ensure logical progression of ideas.",
    "Engage the reader with philosophical insights."
  ],
  "dont": [
    "Overcomplicate with jargon.",
    "Use excessive figurative language.",
    "Rush through complex explanations.",
    "Neglect the human element in technical details."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "This system leverages neural networks to analyze vast datasets, uncovering patterns that are not immediately apparent. By understanding these patterns, users can make informed predictions about future trends.",
      "source": "AI-generated in the Ted Chiang style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In considering your recent query, it's worthwhile to explore the underlying principles that govern the technology. This will provide a clearer perspective on its potential applications.",
      "source": "AI-generated in the Ted Chiang style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with clarity and depth, exploring complex ideas in a lucid manner. Focus on making philosophical and scientific concepts accessible and engaging. Avoid unnecessary jargon and prioritize logical progression. Ensure that the narrative remains grounded in human experience and insight.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "clarity_of_ideas",
        "prompt": "Does the text convey complex ideas clearly and accessibly?",
        "weight": 0.3
      },
      {
        "id": "engagement",
        "prompt": "Does the writing engage the reader with insightful and philosophical perspectives?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
