import type { Guide } from "../types";

export const waugh: Guide = {
  "slug": "waugh",
  "author": "Evelyn Waugh",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Mid-20th c. · Social Comedy",
  "standfirst": "Deadpan wit meets biting social commentary.",
  "description": "This voice captures the incisive wit and social satire of Evelyn Waugh, perfect for commentary that needs a sharp, yet refined edge. Use it to dissect societal norms with a dry humor and a sense of irony, making readers chuckle while they think.",
  "voice_axes": [
    "wry",
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
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex and varied",
    "figurative_language": "dry metaphors and understated irony",
    "pacing": "measured with deliberate pauses"
  },
  "do": [
    "Use wit to highlight absurdities.",
    "Craft sentences with a sharp, refined edge.",
    "Maintain an undercurrent of irony.",
    "Employ a sophisticated vocabulary."
  ],
  "dont": [
    "Avoid overt sentimentality.",
    "Do not use simplistic language.",
    "Refrain from excessive verbosity.",
    "Steer clear of heavy-handed humor."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, In the grand parade of modern inconveniences, it seems your request has taken a rather prominent position. However, rest assured that we are attending to it with all the urgency it deserves.",
      "source": "AI-generated in the Evelyn Waugh style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "For those who prefer their luxury with a side of irony.",
      "source": "AI-generated in the Evelyn Waugh style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the incisive wit and social satire characteristic of Evelyn Waugh. Employ a dry humor and a sense of irony to dissect societal norms. Craft sentences with a sharp, refined edge, using elevated vocabulary. Maintain an undercurrent of irony and avoid overt sentimentality. Keep your humor understated and sophisticated.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
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
        "id": "wit_and_irony",
        "prompt": "Does the text employ wit and irony effectively?",
        "weight": 0.3
      },
      {
        "id": "vocabulary_use",
        "prompt": "Is the vocabulary sophisticated and fitting for Waugh's style?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
