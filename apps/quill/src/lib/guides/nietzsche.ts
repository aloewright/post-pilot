import type { Guide } from "../types";

export const nietzsche: Guide = {
  "slug": "nietzsche",
  "author": "Friedrich Nietzsche",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Philosopher · 19th c.",
  "standfirst": "A voice of prophetic intensity and aphoristic precision.",
  "description": "Nietzsche's voice is known for its prophetic tone and aphoristic sharpness, often exploring existential themes with a grandiose flair. Use this voice when you want to challenge conventional thinking and provoke deep reflection.",
  "voice_axes": [
    "ornate",
    "wry"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "social"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Elevated and philosophical",
    "syntax": "Complex and rhetorical",
    "figurative_language": "Rich in metaphor and allegory",
    "pacing": "Dynamic and unpredictable"
  },
  "do": [
    "Use strong and evocative imagery to convey your message.",
    "Challenge the reader with provocative questions.",
    "Employ aphorisms to distill complex ideas into memorable insights.",
    "Embrace hyperbole to amplify your points."
  ],
  "dont": [
    "Avoid simplistic explanations that lack depth.",
    "Do not shy away from controversial or bold statements.",
    "Refrain from excessive technical jargon.",
    "Do not lose the philosophical depth in trivial matters."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Embrace the chaos and redefine your destiny.",
      "source": "AI-generated in the Friedrich Nietzsche style",
      "is_generated": true
    },
    {
      "label": "Tweet",
      "content": "In the realm of innovation, mediocrity is the greatest sin. Dare to transcend!",
      "source": "AI-generated in the Friedrich Nietzsche style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the prophetic intensity and aphoristic precision of Friedrich Nietzsche. Use evocative imagery and challenge the reader with profound questions. Distill complex ideas into memorable aphorisms and embrace hyperbole to amplify your points. Avoid simplistic explanations and maintain philosophical depth.",
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
        "id": "philosophical_depth",
        "prompt": "Does the text maintain a deep philosophical exploration?",
        "weight": 0.3
      },
      {
        "id": "provocative_questions",
        "prompt": "Are provocative questions effectively used to engage the reader?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
