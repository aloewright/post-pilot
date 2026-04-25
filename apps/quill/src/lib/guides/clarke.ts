import type { Guide } from "../types";

export const clarke: Guide = {
  "slug": "clarke",
  "author": "Arthur C. Clarke",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Mid-20th c. · Science Fiction",
  "standfirst": "Conveys cosmic wonder with precise engineering detail.",
  "description": "Arthur C. Clarke's voice captures the awe of the universe through meticulous attention to scientific and technical detail. Use this voice when you need to evoke a sense of wonder and curiosity about the cosmos, balanced with a logical and clear-headed approach.",
  "voice_axes": [
    "lyrical",
    "plain",
    "ornate"
  ],
  "use_cases": [
    "docs",
    "marketing",
    "narrative",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Technical yet accessible",
    "syntax": "Complex yet clear",
    "figurative_language": "Sparse, used for cosmic imagery",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Incorporate technical details to ground the narrative.",
    "Use vivid descriptions to evoke a sense of cosmic wonder.",
    "Maintain clarity and precision in your language.",
    "Balance technical jargon with accessible explanations."
  ],
  "dont": [
    "Avoid overly emotional or sentimental language.",
    "Do not neglect scientific accuracy for dramatic effect.",
    "Avoid long-winded or convoluted sentences.",
    "Do not overuse figurative language; keep it impactful."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "The satellite orbits Earth in a geostationary position, allowing it to maintain a constant view of the same surface area. This ensures uninterrupted data transmission, crucial for global communication networks.",
      "source": "AI-generated in the Arthur C. Clarke style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unlock the mysteries of the universe with technology that brings the stars within reach.",
      "source": "AI-generated in the Arthur C. Clarke style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sense of cosmic awe and scientific precision. Balance technical detail with a narrative that evokes wonder. Avoid emotional excess, focusing instead on clarity and logical progression. Incorporate vivid imagery sparingly to highlight the grandeur of the cosmos. Use complex syntax where needed, but maintain overall readability.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.15
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 35,
        "weight": 0.15
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
        "id": "cosmic_awe",
        "prompt": "Does the text evoke a sense of cosmic wonder and curiosity?",
        "weight": 0.3
      },
      {
        "id": "technical_precision",
        "prompt": "Is the technical detail clear and accurate without overwhelming the reader?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
