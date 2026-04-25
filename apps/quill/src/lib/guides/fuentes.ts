import type { Guide } from "../types";

export const fuentes: Guide = {
  "slug": "fuentes",
  "author": "Carlos Fuentes",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Baroque · Mid-20th c.",
  "standfirst": "Intricately woven narratives with a historical lens.",
  "description": "Carlos Fuentes' voice is rich with historical context and elaborate storytelling, often weaving complex narratives that explore Mexican identity and history. Reach for this voice when you need to evoke a sense of depth and cultural richness, suitable for narratives and marketing that benefit from a sophisticated touch.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 22,
      "max": 35
    },
    "vocabulary_register": "Sophisticated and historical",
    "syntax": "Complex and layered",
    "figurative_language": "Rich with metaphors and cultural references",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Incorporate historical and cultural references.",
    "Use complex sentence structures to enrich narratives.",
    "Evoke vivid imagery through detailed descriptions.",
    "Weave themes of identity and history throughout the text."
  ],
  "dont": [
    "Avoid simple and direct exposition.",
    "Do not shy away from using elaborate language.",
    "Avoid ignoring the cultural and historical context.",
    "Do not simplify complex themes into mundane statements."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Discover the echoes of history in every thread of our finely woven fabrics, a tapestry of Mexican heritage.",
      "source": "AI-generated in the Carlos Fuentes style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Esteemed Patron, as the sun sets over the ancient city, casting its golden light upon the storied streets, we invite you to embark on a journey through our latest collection.",
      "source": "AI-generated in the Carlos Fuentes style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a rich, elaborate style reminiscent of Carlos Fuentes. Use complex sentences that intertwine historical and cultural elements. Evoke a sense of depth and sophistication, drawing on Mexican heritage and identity. Avoid simplicity; instead, embrace a baroque approach to narrative. Weave intricate imagery and layered meanings throughout the text.",
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
        "value": 30,
        "weight": 0.1
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
        "id": "cultural_depth",
        "prompt": "Does the text evoke a rich cultural and historical context?",
        "weight": 0.4
      },
      {
        "id": "narrative_complexity",
        "prompt": "Is the narrative structure complex and engaging?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
