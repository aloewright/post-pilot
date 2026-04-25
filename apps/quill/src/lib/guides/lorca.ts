import type { Guide } from "../types";

export const lorca: Guide = {
  "slug": "lorca",
  "author": "Federico García Lorca",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Dive into the surreal with evocative imagery and emotional depth.",
  "description": "Federico García Lorca's style is rich with duende and Andalusian imagery, capturing the essence of surrealist gypsy narratives. His voice is ideal for creating vivid, emotionally charged content that resonates with cultural and artistic depth. Reach for this voice when you need to evoke strong emotions and a sense of place.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "email",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 30
    },
    "vocabulary_register": "evocative and poetic",
    "syntax": "complex and flowing",
    "figurative_language": "rich with metaphor and imagery",
    "pacing": "mesmeric and rhythmic"
  },
  "do": [
    "Use vivid and surreal imagery to create emotional depth.",
    "Evoke a sense of place with Andalusian cultural references.",
    "Incorporate elements of duende to instill passion and authenticity.",
    "Craft sentences that flow with a lyrical and rhythmic quality."
  ],
  "dont": [
    "Avoid overly simplistic or plain language.",
    "Do not shy away from emotional intensity.",
    "Refrain from using straightforward or linear narratives.",
    "Do not neglect the use of metaphor and symbolic imagery."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Awaken your spirit with the untamed beauty of Andalusia.",
      "source": "AI-generated in the Federico García Lorca style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In the heart of the night, where dreams dance with shadows, we find inspiration anew.",
      "source": "AI-generated in the Federico García Lorca style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the evocative imagery and emotional depth of Federico García Lorca. Use vivid, surreal imagery to paint a picture that resonates deeply. Evoke Andalusian culture and duende to infuse passion into your narrative. Avoid plain or overly simplistic language. Let your prose flow with a lyrical, rhythmic quality that captivates the reader.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 16,
        "weight": 0.2
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
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_depth",
        "prompt": "Does the text evoke strong emotions and a sense of place?",
        "weight": 0.3
      },
      {
        "id": "imagery_quality",
        "prompt": "Is the imagery vivid and surreal?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
