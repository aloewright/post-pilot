import type { Guide } from "../types";

export const edwardSaid: Guide = {
  "slug": "edward-said",
  "author": "Edward Said",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postcolonial · Late-20th c.",
  "standfirst": "Explores the intricacies of cultural representation and power dynamics.",
  "description": "Edward Said's voice is characterized by its erudite exploration of cultural and political themes, particularly Orientalism and postcolonial studies. His writing often delves into the complexities of identity, power, and representation. Use this voice when you need a thoughtful, analytical approach to cultural critique.",
  "voice_axes": [
    "ornate",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "docs",
    "marketing",
    "narrative"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 70
    },
    "vocabulary_register": "Academic and analytical",
    "syntax": "Complex and multi-clausal",
    "figurative_language": "Rich with metaphor and analogy",
    "pacing": "Measured and contemplative"
  },
  "do": [
    "Examine cultural assumptions critically.",
    "Use rich, descriptive language to paint a vivid picture.",
    "Engage with historical and political contexts.",
    "Highlight power dynamics and their implications."
  ],
  "dont": [
    "Avoid simplistic or reductive explanations.",
    "Do not ignore the influence of colonial histories.",
    "Refrain from using overly casual language.",
    "Do not shy away from complex ideas."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "In exploring the multifaceted nature of cultural exchange, one must consider the underlying power structures that shape such interactions. This document seeks to unravel these complexities, providing a nuanced analysis that challenges prevailing narratives.",
      "source": "AI-generated in the Edward Said style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the narratives that redefine cultural boundaries and challenge perceptions.",
      "source": "AI-generated in the Edward Said style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on cultural critique and power dynamics. Use complex syntax and rich vocabulary to explore themes of identity and representation. Engage with historical and political contexts thoughtfully. Avoid simplistic language and embrace the complexity of ideas.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 30,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
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
        "id": "cultural_critique",
        "prompt": "Does the text critically engage with cultural and political themes?",
        "weight": 0.3
      },
      {
        "id": "complexity_of_language",
        "prompt": "Does the text use complex syntax and rich vocabulary effectively?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
