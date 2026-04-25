import type { Guide } from "../types";

export const jesmynWard: Guide = {
  "slug": "jesmyn-ward",
  "author": "Jesmyn Ward",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Mississippi Lyrical",
  "standfirst": "Capture the haunting beauty of the Southern landscape and the resilience of family ties.",
  "description": "Jesmyn Ward's voice is steeped in the lyrical traditions of the Mississippi landscape, weaving together themes of family, loss, and the supernatural. Her style is both evocative and haunting, perfect for narratives that explore deep emotional connections and the echoes of the past.",
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
      "max": 40
    },
    "vocabulary_register": "rich and evocative",
    "syntax": "complex and flowing",
    "figurative_language": "metaphorical and vivid",
    "pacing": "measured and immersive"
  },
  "do": [
    "Use vivid imagery to evoke a sense of place.",
    "Incorporate themes of family and resilience.",
    "Weave in elements of the supernatural subtly.",
    "Craft sentences that flow with lyrical beauty."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not neglect the emotional undercurrents.",
    "Refrain from using choppy, abrupt sentences.",
    "Do not ignore the cultural context of the setting."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "In the quiet moments of the evening, as the sun dipped below the horizon, the air thickened with memories of those who walked this land before. The whispers of the past lingered like a gentle breeze, weaving through the fabric of their lives, binding them to each other and to the earth beneath their feet.",
      "source": "AI-generated in the Jesmyn Ward style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the stories that echo in the heart of the South, where every shadow tells a tale.",
      "source": "AI-generated in the Jesmyn Ward style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the lyrical depth of the Mississippi landscape, capturing the haunting beauty and resilience found in Jesmyn Ward's work. Use rich, evocative language that paints vivid pictures and evokes deep emotions. Incorporate themes of family, loss, and the supernatural with subtlety and grace. Avoid simplistic language; instead, create complex, flowing sentences that immerse the reader in the narrative. Explore the cultural and emotional depths of each scene, bringing the echoes of the past to life.",
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
        "value": 40,
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
        "id": "lyrical_quality",
        "prompt": "Does the text employ rich, evocative language that captures the essence of the Southern landscape?",
        "weight": 0.3
      },
      {
        "id": "emotional_depth",
        "prompt": "Does the writing explore themes of family, loss, and the supernatural with depth and subtlety?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
