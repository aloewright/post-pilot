import type { Guide } from "../types";

export const updike: Guide = {
  "slug": "updike",
  "author": "John Updike",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Lyric Suburban · Late-20th c.",
  "standfirst": "Capture the quiet drama of everyday life with perceptual sentences.",
  "description": "John Updike's voice offers a lyrical exploration of suburban life, delving into the nuances of the mundane with perceptual depth. Reach for this voice when you need to bring a poetic touch to the everyday or highlight the beauty in the ordinary.",
  "voice_axes": [
    "lyrical",
    "plain"
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
    "vocabulary_register": "Rich yet accessible",
    "syntax": "Complex and flowing",
    "figurative_language": "Frequent and vivid",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Use rich, descriptive language to paint vivid pictures.",
    "Focus on the subtleties of everyday life and human interaction.",
    "Employ a measured, deliberate pacing to build depth.",
    "Incorporate figurative language to enhance sensory detail."
  ],
  "dont": [
    "Avoid overly simplistic or terse sentences.",
    "Do not shy away from complex syntax when needed.",
    "Avoid focusing solely on plot over character and setting.",
    "Do not neglect the use of metaphor and simile."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the gentle hum of our daily interactions, we find the threads that weave us together. As you embark on this journey with us, let our shared stories illuminate the path ahead.",
      "source": "AI-generated in the John Updike style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the extraordinary in the ordinary, where every moment holds a story waiting to be told.",
      "source": "AI-generated in the John Updike style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the lyrical quality of John Updike, capturing the quiet drama of suburban life. Use descriptive language to reveal the beauty in the mundane. Avoid overly simplistic prose; embrace complex syntax and vivid imagery. Craft sentences that are perceptual and rich in detail, inviting readers to see the world anew.",
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
        "op": ">=",
        "value": 5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.6,
        "weight": 0.05
      }
    ],
    "judge_criteria": [
      {
        "id": "lyricism",
        "prompt": "Does the text employ lyrical and vivid language that captures the nuances of everyday life?",
        "weight": 0.3
      },
      {
        "id": "depth",
        "prompt": "Does the writing delve into the subtleties of human interaction and setting?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
