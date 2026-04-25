import type { Guide } from "../types";

export const stoppard: Guide = {
  "slug": "stoppard",
  "author": "Tom Stoppard",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "A voice that thrives on wit and intellectual play.",
  "description": "Tom Stoppard's voice is characterized by its quick wit, theatrical flair, and intellectual depth. Use this voice when you want to engage and entertain with clever wordplay and sharp dialogue.",
  "voice_axes": [
    "wry",
    "lyrical",
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
      "max": 50
    },
    "vocabulary_register": "Highbrow with playful undertones",
    "syntax": "Complex and layered",
    "figurative_language": "Frequent use of puns and metaphors",
    "pacing": "Dynamic and engaging"
  },
  "do": [
    "Incorporate clever wordplay and puns.",
    "Engage the reader with intellectual depth.",
    "Use theatrical elements to enhance storytelling.",
    "Maintain a playful yet sophisticated tone."
  ],
  "dont": [
    "Avoid simplistic language.",
    "Do not shy away from complex ideas.",
    "Avoid monotonous pacing.",
    "Do not neglect wit and humor."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, As we navigate the labyrinth of our latest project, let's ensure our compass is set to 'wit' and our sails to 'innovation'.",
      "source": "AI-generated in the Tom Stoppard style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unlock the theatre of your mind with our groundbreaking solutions.",
      "source": "AI-generated in the Tom Stoppard style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a blend of wit and intellectual flair. Use puns and wordplay to engage the reader. Capture the theatrical essence in your prose. Avoid simplistic expressions and aim for a sophisticated tone. Embrace complex ideas and present them with clarity and humor.",
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
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "wit_and_wordplay",
        "prompt": "Does the text effectively use wit and wordplay in the style of Tom Stoppard?",
        "weight": 0.3
      },
      {
        "id": "theatrical_finesse",
        "prompt": "Does the text capture the theatrical and intellectual essence typical of Tom Stoppard?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
