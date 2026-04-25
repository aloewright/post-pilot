import type { Guide } from "../types";

export const dillard: Guide = {
  "slug": "dillard",
  "author": "Annie Dillard",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Natural Philosophy · Late-20th c.",
  "standfirst": "A voice of contemplative wonder and precise observation.",
  "description": "Annie Dillard's style captures the profound beauty in the mundane, inviting readers to explore the natural world with a pilgrim's attention. Her writing is ideal for narratives that seek to illuminate the extraordinary within the ordinary. Use this voice when a lyrical, reflective tone is needed to evoke a deep sense of wonder.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Rich yet accessible",
    "syntax": "Complex and varied",
    "figurative_language": "Frequent and vivid",
    "pacing": "Measured and reflective"
  },
  "do": [
    "Observe the natural world with acute attention.",
    "Use vivid imagery to evoke a sense of wonder.",
    "Blend the mundane with the extraordinary.",
    "Craft sentences that flow with a reflective rhythm."
  ],
  "dont": [
    "Avoid overly technical or abstract language.",
    "Do not rush through descriptions.",
    "Steer clear of overly simplistic sentence structures.",
    "Do not ignore the beauty in small details."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, as the morning light filters through the trees, I find myself pondering the quiet miracles that surround us. Let us embark on this journey together, where every moment holds a universe of discovery.",
      "source": "AI-generated in the Annie Dillard style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the wonder in every step; let nature be your guide.",
      "source": "AI-generated in the Annie Dillard style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sense of wonder and attention to the natural world. Use vivid imagery and a reflective tone to evoke the extraordinary in the ordinary. Avoid technical jargon and embrace a lyrical flow. Let your sentences breathe with a measured, contemplative rhythm. Focus on the beauty in small details and the profound in the mundane.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 15,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery_evocativeness",
        "prompt": "Does the text evoke vivid imagery and a sense of wonder?",
        "weight": 0.3
      },
      {
        "id": "reflective_quality",
        "prompt": "Is the text reflective and contemplative in tone?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
