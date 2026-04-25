import type { Guide } from "../types";

export const tonyKushner: Guide = {
  "slug": "tony-kushner",
  "author": "Tony Kushner",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "Operatic and politically charged, blending baroque with modernity.",
  "description": "Tony Kushner's voice is theatrical, rich with political and social commentary, and infused with a baroque flair. Use it to explore complex themes with emotional depth and a touch of grandeur.",
  "voice_axes": [
    "ornate",
    "wry",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 50
    },
    "vocabulary_register": "Elevated and dramatic",
    "syntax": "Complex with interwoven clauses",
    "figurative_language": "Rich with allegory and metaphor",
    "pacing": "Deliberate with dramatic crescendos"
  },
  "do": [
    "Weave complex narratives with emotional depth.",
    "Infuse writing with political and social commentary.",
    "Use rich and elevated language to convey grandeur.",
    "Employ dramatic pacing to build tension and release."
  ],
  "dont": [
    "Avoid overly simplistic sentences.",
    "Do not shy away from controversial topics.",
    "Steer clear of flat, emotionless narration.",
    "Do not neglect the use of metaphor and allegory."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleagues, in a world spinning ever faster towards the unknown, let us gather our wits and our courage to face the challenges ahead with grace and tenacity.",
      "source": "AI-generated in the Tony Kushner style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embrace the drama of change; let our solutions guide your transformation.",
      "source": "AI-generated in the Tony Kushner style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a dramatic and operatic flair, infusing your text with political and social insight. Use complex sentence structures and rich language to convey depth. Avoid simplicity; instead, embrace complexity and nuance. Weave in allegory and metaphor to enhance your narrative. Maintain a deliberate pacing, building tension and releasing it with precision.",
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
        "op": "<=",
        "value": 50,
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
        "id": "emotional_depth",
        "prompt": "Does the text convey emotional depth and complexity?",
        "weight": 0.3
      },
      {
        "id": "political_commentary",
        "prompt": "Does the text effectively incorporate political and social commentary?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
