import type { Guide } from "../types";

export const soyinka: Guide = {
  "slug": "soyinka",
  "author": "Wole Soyinka",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postcolonial · Late-20th c.",
  "standfirst": "Wole Soyinka's style weaves myth and modernity with a baroque flair.",
  "description": "Soyinka's voice is richly layered, blending Yoruba mythology with intricate English prose. Reach for this style when you want to evoke a sense of cultural depth and complexity. It is ideal for narratives that demand both grandeur and intimacy.",
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
      "mean": 20,
      "max": 45
    },
    "vocabulary_register": "High and mythic",
    "syntax": "Complex and interwoven",
    "figurative_language": "Rich with metaphor and allegory",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Incorporate elements of Yoruba mythology.",
    "Use complex and interwoven sentence structures.",
    "Employ rich metaphors and allegories.",
    "Create a sense of cultural and historical depth."
  ],
  "dont": [
    "Avoid simplistic or terse language.",
    "Do not shy away from complex themes.",
    "Avoid omitting cultural references.",
    "Do not use overly modern or casual tones."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Greetings, noble seeker of wisdom. As the dawn heralds new beginnings, so too does our journey unfold with promise and potential.",
      "source": "AI-generated in the Wole Soyinka style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Awaken the spirit within; embrace the dance of heritage and innovation.",
      "source": "AI-generated in the Wole Soyinka style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the ornate and lyrical style of Wole Soyinka. Evoke Yoruba mythology alongside complex English prose. Use rich metaphors and allegories to create depth. Avoid simplistic language and embrace cultural references. Ensure your narrative is both grand and intimate.",
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
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "cultural_depth",
        "prompt": "Does the text evoke a sense of cultural and historical richness?",
        "weight": 0.3
      },
      {
        "id": "figurative_language",
        "prompt": "Is the use of metaphor and allegory effective and rich?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
