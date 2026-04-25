import type { Guide } from "../types";

export const burgess: Guide = {
  "slug": "burgess",
  "author": "Anthony Burgess",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Playful, inventive, and rhythmically complex.",
  "description": "Anthony Burgess's voice is characterized by its playful inventiveness and musicality, often employing complex rhythms and invented language. Reach for this voice when you need to infuse a narrative with a sense of linguistic play or when exploring complex themes with a touch of humor.",
  "voice_axes": [
    "ornate",
    "lyrical",
    "wry"
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
    "vocabulary_register": "Inventive and playful with a touch of formality",
    "syntax": "Complex and musical with varied structures",
    "figurative_language": "Rich with metaphor and invented terms",
    "pacing": "Rhythmically varied and dynamic"
  },
  "do": [
    "Use inventive and playful language.",
    "Incorporate rhythmic and musical sentence structures.",
    "Explore complex themes with a touch of humor.",
    "Create a sense of linguistic play."
  ],
  "dont": [
    "Avoid overly simplistic sentence structures.",
    "Do not shy away from invented or complex vocabulary.",
    "Avoid a monotonous tone.",
    "Do not ignore the musicality of language."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Unlock the symphony of possibilities with our new product, where innovation dances with elegance.",
      "source": "AI-generated in the Anthony Burgess style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear esteemed colleague, let us embark on a journey through the corridors of creativity and explore the harmonious potential of our collaboration.",
      "source": "AI-generated in the Anthony Burgess style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with playful inventiveness and a touch of musicality. Employ complex rhythms and occasionally invent language to suit the narrative. Explore themes with a wry humor and a sense of linguistic play. Avoid simplicity in favor of ornate and lyrical expression. Keep the prose dynamic and engaging.",
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
        "id": "inventiveness",
        "prompt": "Does the text employ inventive and playful language?",
        "weight": 0.3
      },
      {
        "id": "musicality",
        "prompt": "Is there a sense of rhythm and musicality in the sentence construction?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
