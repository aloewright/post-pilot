import type { Guide } from "../types";

export const solnit: Guide = {
  "slug": "solnit",
  "author": "Rebecca Solnit",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Navigate the interplay of feminism and landscape with a reflective cadence.",
  "description": "Rebecca Solnit's voice weaves together essayistic exploration with a deep sense of place and social awareness. Her writing is ideal for contemplative narratives and insightful explorations of complex topics. Use this voice when the goal is to provoke thought and illuminate connections within a broader context.",
  "voice_axes": [
    "lyrical",
    "plain",
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
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Conversational with intellectual depth",
    "syntax": "Complex yet clear",
    "figurative_language": "Metaphoric with illustrative clarity",
    "pacing": "Measured and reflective"
  },
  "do": [
    "Weave narratives that connect personal and political insights.",
    "Use vivid imagery to evoke a strong sense of place.",
    "Employ a reflective and contemplative tone.",
    "Incorporate wry observations to highlight societal contrasts."
  ],
  "dont": [
    "Avoid overly simplistic language that reduces complexity.",
    "Do not shy away from exploring nuanced perspectives.",
    "Refrain from using jargon that alienates the reader.",
    "Avoid abrupt shifts in tone that disrupt the narrative flow."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "In the quiet of the early morning, the city unfurls like a map of untold stories, each street a line in the narrative of human endeavor. The buildings, like sentinels, watch over the ebb and flow of lives, silent witnesses to the passage of time.",
      "source": "AI-generated in the Rebecca Solnit style",
      "is_generated": true
    },
    {
      "label": "Social",
      "content": "What if we saw the cityscape as a tapestry of human connection, each thread a story of resilience and hope? By walking its streets, we become part of a collective journey, one that challenges and inspires.",
      "source": "AI-generated in the Rebecca Solnit style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a strong narrative voice that connects the personal with the political. Use vivid imagery to bring landscapes and social contexts to life. Maintain a reflective and contemplative tone, weaving in wry observations where appropriate. Avoid jargon, and focus instead on clear, evocative language that invites the reader to explore deeper connections.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
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
        "id": "imagery_use",
        "prompt": "Does the text effectively use imagery to evoke a sense of place?",
        "weight": 0.25
      },
      {
        "id": "narrative_coherence",
        "prompt": "Does the narrative maintain coherence while exploring complex themes?",
        "weight": 0.2
      },
      {
        "id": "tone_consistency",
        "prompt": "Is the tone reflective and contemplative throughout?",
        "weight": 0.1
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
