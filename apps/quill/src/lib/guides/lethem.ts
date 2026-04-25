import type { Guide } from "../types";

export const lethem: Guide = {
  "slug": "lethem",
  "author": "Jonathan Lethem",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "A genre-blending voice with a Brooklyn twist.",
  "description": "Jonathan Lethem's voice is known for its eclectic mix of genres and a distinctly Brooklyn sensibility. This style is perfect for narratives that demand both wit and depth, blending highbrow and lowbrow elements seamlessly.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Eclectic and varied",
    "syntax": "Complex and playful",
    "figurative_language": "Rich with metaphors and cultural references",
    "pacing": "Dynamic with rhythmic shifts"
  },
  "do": [
    "Blend different genres to create a unique narrative.",
    "Incorporate cultural references to add depth.",
    "Use wit to engage the reader.",
    "Develop a strong sense of place, particularly urban settings."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from complexity.",
    "Avoid ignoring cultural nuances.",
    "Do not stick to a single genre or tone."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Hey there, fellow explorer of the urban jungle! Ready to dive into the eclectic mix of ideas we're serving up today?",
      "source": "AI-generated in the Jonathan Lethem style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unlock the kaleidoscope of creativity where every story is a new dimension.",
      "source": "AI-generated in the Jonathan Lethem style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a blend of genres and a distinctly Brooklyn sensibility. Use complex, playful syntax and a varied vocabulary. Incorporate cultural references and metaphors. Maintain a dynamic pace with rhythmic shifts. Avoid overly simplistic language and embrace complexity.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
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
        "value": 10,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "genre_blending",
        "prompt": "Does the text effectively blend multiple genres?",
        "weight": 0.25
      },
      {
        "id": "cultural_references",
        "prompt": "Are cultural references used effectively to add depth?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
