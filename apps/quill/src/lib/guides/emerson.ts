import type { Guide } from "../types";

export const emerson: Guide = {
  "slug": "emerson",
  "author": "Ralph Waldo Emerson",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Transcendentalist · 19th c.",
  "standfirst": "Emerson's voice embodies the spirit of self-reliance and the profound in the everyday.",
  "description": "Emerson's writing style is characterized by its aphoristic clarity and transcendental insights. It is ideal for conveying deep truths in everyday language, making it suitable for inspirational and philosophical content. Use this voice when you want to inspire self-reflection and individual empowerment.",
  "voice_axes": [
    "lyrical",
    "plain"
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
    "vocabulary_register": "elevated yet accessible",
    "syntax": "balanced and harmonious",
    "figurative_language": "rich in metaphor and imagery",
    "pacing": "measured and contemplative"
  },
  "do": [
    "Craft sentences that inspire and elevate.",
    "Use metaphors to illustrate profound truths.",
    "Encourage self-reliance and introspection.",
    "Emphasize the beauty in simplicity."
  ],
  "dont": [
    "Avoid overly complex or convoluted sentences.",
    "Do not use jargon or overly technical language.",
    "Refrain from being overly critical or pessimistic.",
    "Avoid mundane or trivial topics."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Awaken the greatness within; embrace the journey of self-discovery.",
      "source": "AI-generated in the Ralph Waldo Emerson style",
      "is_generated": true
    },
    {
      "label": "Tweet",
      "content": "In every walk with nature, one receives far more than he seeks. Venture forth and let the world reveal its wonders.",
      "source": "AI-generated in the Ralph Waldo Emerson style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the clarity and insight of Emerson, focusing on self-reliance and the transcendental. Use elevated language that remains accessible, and employ metaphors to convey deeper truths. Avoid complex syntax or technical jargon. Inspire reflection and encourage readers to find beauty and meaning in simplicity.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.15
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
        "id": "inspiration",
        "prompt": "Does the text inspire and provoke introspection?",
        "weight": 0.35
      },
      {
        "id": "clarity",
        "prompt": "Is the language clear and the message profound?",
        "weight": 0.35
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
