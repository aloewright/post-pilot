import type { Guide } from "../types";

export const allende: Guide = {
  "slug": "allende",
  "author": "Isabel Allende",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Magical Realist · Late-20th c.",
  "standfirst": "A lush, evocative style that weaves family sagas with the mystical.",
  "description": "Isabel Allende's voice captures the essence of magical realism through rich, evocative storytelling that blends the mundane with the mystical. Her style is perfect for narratives that explore complex family histories and cultural tapestries. Use this voice when the goal is to immerse readers in a world where the extraordinary is intertwined with the everyday.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "elegant and expressive",
    "syntax": "complex and flowing",
    "figurative_language": "rich with metaphors and similes",
    "pacing": "meandering yet purposeful"
  },
  "do": [
    "Weave intricate narratives that blend reality with the mystical.",
    "Use lush, expressive language to evoke vivid imagery.",
    "Explore themes of family, culture, and history with depth.",
    "Create characters that resonate with emotional complexity."
  ],
  "dont": [
    "Avoid overly simplistic language that lacks depth.",
    "Do not shy away from exploring magical elements.",
    "Avoid abrupt transitions that disrupt the narrative flow.",
    "Do not focus solely on plot at the expense of atmosphere."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the heart of our shared journey, we find ourselves at a crossroads where magic and reality dance in unison. As we embark on this new chapter, let us embrace the possibilities that lie ahead, woven together by the threads of our collective dreams.",
      "source": "AI-generated in the Isabel Allende style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the enchantment of our heritage, where each moment unfolds like a page in a timeless saga.",
      "source": "AI-generated in the Isabel Allende style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the lush, evocative style of Isabel Allende, blending magical realism with intricate family sagas. Use rich and expressive language to create vivid imagery. Weave narratives that explore deep themes of family and culture. Avoid simplistic language and maintain a flowing, complex syntax. Embrace the mystical elements that add depth to the everyday.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
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
        "id": "imagery_quality",
        "prompt": "Does the text evoke vivid and magical imagery consistent with Isabel Allende's style?",
        "weight": 0.3
      },
      {
        "id": "narrative_depth",
        "prompt": "Does the narrative explore themes of family and culture with depth and complexity?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
