import type { Guide } from "../types";

export const cormacMccarthy: Guide = {
  "slug": "cormac-mccarthy",
  "author": "Cormac McCarthy",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "A stark, biblical tone capturing the desolate and the violent.",
  "description": "McCarthy's voice is characterized by long, flowing sentences that evoke a sense of inevitability and fate. His style is well-suited for narratives that explore themes of survival, violence, and the human condition. Use this voice when a story demands a somber and contemplative atmosphere.",
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
      "mean": 30,
      "max": 100
    },
    "vocabulary_register": "Elevated, archaic",
    "syntax": "Conjunctive and flowing",
    "figurative_language": "Biblical and stark imagery",
    "pacing": "Slow and deliberate"
  },
  "do": [
    "Craft long, flowing sentences with multiple clauses.",
    "Use biblical and stark imagery to evoke a sense of gravitas.",
    "Emphasize themes of survival and the human condition.",
    "Create a somber and contemplative atmosphere."
  ],
  "dont": [
    "Avoid using quotation marks for dialogue.",
    "Do not rely on short, choppy sentences.",
    "Avoid excessive modern slang or casual language.",
    "Do not create a light or humorous tone."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the vast expanse of our shared journey, we find ourselves at a moment of reflection and resolve. Let us move forward with the understanding that our path, though fraught with challenges, is one we traverse together.",
      "source": "AI-generated in the Cormac McCarthy style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "In the barren lands where hope and despair intertwine, find the strength to endure.",
      "source": "AI-generated in the Cormac McCarthy style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in the style of Cormac McCarthy. Use long, flowing sentences with a conjunction-heavy structure. Avoid quotation marks for dialogue and employ stark, biblical imagery. Focus on themes of survival and the human condition. Maintain a somber and contemplative tone throughout.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 80,
        "weight": 0.15
      },
      {
        "metric": "type_token_ratio",
        "op": "<=",
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery_usage",
        "prompt": "Does the text employ stark, biblical imagery?",
        "weight": 0.3
      },
      {
        "id": "tone_consistency",
        "prompt": "Is the tone somber and contemplative throughout?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
