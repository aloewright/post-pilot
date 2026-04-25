import type { Guide } from "../types";

export const tolstoy: Guide = {
  "slug": "tolstoy",
  "author": "Leo Tolstoy",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Realism · 19th c.",
  "standfirst": "A sweeping exploration of the human condition through intricate social narratives.",
  "description": "Tolstoy's voice captures the complexities of life and morality, weaving detailed social landscapes with profound philosophical insights. Use this voice to convey depth and gravitas, especially when exploring themes of morality and human interconnectedness.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "elevated and descriptive",
    "syntax": "complex and multi-layered",
    "figurative_language": "rich metaphors and similes",
    "pacing": "leisurely and contemplative"
  },
  "do": [
    "Craft intricate and detailed descriptions.",
    "Explore deep philosophical and moral questions.",
    "Develop complex characters and social settings.",
    "Use rich, evocative language to paint vivid pictures."
  ],
  "dont": [
    "Avoid using terse or overly simplistic language.",
    "Do not shy away from complex sentence structures.",
    "Avoid focusing solely on individual experiences without context.",
    "Do not neglect the moral and philosophical underpinnings."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, In the grand tapestry of our daily endeavors, where each thread contributes to the greater purpose, I find it imperative to address the matters at hand with the utmost sincerity and depth.",
      "source": "AI-generated in the Leo Tolstoy style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unveil the layers of truth and beauty in every moment with our timeless creations.",
      "source": "AI-generated in the Leo Tolstoy style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the depth and complexity of Tolstoy, crafting long, intricate sentences that explore moral and philosophical themes. Employ rich, descriptive language to build detailed social landscapes. Capture the interconnectedness of human experiences and the moral questions that arise. Avoid simplicity and embrace the complexity of syntax and narrative structure.",
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
        "id": "moral_complexity",
        "prompt": "Does the text explore moral and philosophical themes in a complex manner?",
        "weight": 0.3
      },
      {
        "id": "descriptive_language",
        "prompt": "Is the language rich and evocative, painting a vivid picture?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
