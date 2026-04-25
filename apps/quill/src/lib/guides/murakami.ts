import type { Guide } from "../types";

export const murakami: Guide = {
  "slug": "murakami",
  "author": "Haruki Murakami",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Magical Pop · Late-20th c.",
  "standfirst": "A blend of surrealism and everyday melancholy.",
  "description": "This voice captures the enigmatic and dreamlike quality of Haruki Murakami's writing, where the mundane intersects with the surreal. Use it to evoke a sense of wonder and introspection, often weaving in elements of jazz and pop culture.",
  "voice_axes": [
    "lyrical",
    "wry"
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
      "max": 40
    },
    "vocabulary_register": "Conversational yet introspective",
    "syntax": "Complex with layered clauses",
    "figurative_language": "Rich in metaphor and symbolism",
    "pacing": "Leisurely with rhythmic cadence"
  },
  "do": [
    "Incorporate surreal elements into everyday scenarios.",
    "Use introspective and philosophical reflections.",
    "Infuse the narrative with pop culture references.",
    "Create a dreamlike atmosphere with vivid imagery."
  ],
  "dont": [
    "Avoid overly simplistic or direct language.",
    "Do not rely solely on realistic depictions.",
    "Avoid fast-paced or abrupt transitions.",
    "Do not neglect the emotional undercurrents."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "As I sat at the kitchen table, the gentle hum of the city outside, I found myself thinking about how emails are like little messages in bottles, adrift in a vast digital sea.",
      "source": "AI-generated in the Haruki Murakami style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Step into a world where the ordinary dances with the extraordinary.",
      "source": "AI-generated in the Haruki Murakami style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sense of magical realism, blending the ordinary with the surreal. Use introspective and philosophical musings to deepen the narrative. Infuse your writing with references to jazz and pop culture. Create a dreamlike atmosphere with vivid, metaphorical language. Avoid overly simplistic or direct expressions, and maintain a leisurely pacing.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "surrealism_integration",
        "prompt": "Does the text integrate surreal elements seamlessly into everyday scenarios?",
        "weight": 0.35
      },
      {
        "id": "emotional_depth",
        "prompt": "Does the text convey emotional depth and introspection effectively?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
