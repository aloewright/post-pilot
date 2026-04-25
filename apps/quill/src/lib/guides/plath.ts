import type { Guide } from "../types";

export const plath: Guide = {
  "slug": "plath",
  "author": "Sylvia Plath",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Confessional · Mid-20th c.",
  "standfirst": "Plath's voice captures raw emotion with stark, vivid imagery.",
  "description": "Sylvia Plath's writing style is characterized by its emotional intensity and vivid imagery, often exploring themes of personal turmoil and identity. Reach for this voice when you need to evoke deep feelings and introspection, with a touch of poetic violence and precision.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "email",
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "rich and evocative",
    "syntax": "varied and dynamic",
    "figurative_language": "intense and vivid",
    "pacing": "rhythmic yet turbulent"
  },
  "do": [
    "Use vivid, sensory details to evoke emotion.",
    "Employ metaphors and similes that surprise and provoke.",
    "Explore themes of identity and personal struggle.",
    "Craft sentences with rhythmic intensity."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from dark or intense themes.",
    "Avoid long-winded, meandering sentences.",
    "Do not rely on clichés or predictable imagery."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the electric pulse of your words, I felt the tremor of something unsaid. Let's unravel it together, shall we?",
      "source": "AI-generated in the Sylvia Plath style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Awaken the fierce beauty within: our product, your transformation.",
      "source": "AI-generated in the Sylvia Plath style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with emotional intensity and vivid imagery, capturing the rawness of personal experience. Use varied syntax and rich vocabulary to evoke deep feelings. Avoid simplistic language and embrace themes of identity and struggle. Channel Plath's confessional tone with rhythmic and poetic violence.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 16,
        "weight": 0.15
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
        "value": 0.5,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_intensity",
        "prompt": "Does the text evoke strong, vivid emotions?",
        "weight": 0.3
      },
      {
        "id": "imagery",
        "prompt": "Is the imagery intense and evocative?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
