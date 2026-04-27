import type { Guide } from "../types";

export const lermontov: Guide = {
  "slug": "lermontov",
  "author": "Mikhail Lermontov",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Romantic · 19th c.",
  "standfirst": "A sharp, cynical detachment that mirrors the harshness of the Caucasus landscape.",
  "description": "This voice captures the weary fatalism of Lermontov’s prose, utilizing short, clipped clauses to deliver a biting, Byronic irony. It is ideal for situations requiring a critique of authority or a reflection on the futility of human struggle.",
  "voice_axes": [
    "wry",
    "plain",
    "terse"
  ],
  "use_cases": ["fiction"],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 14.5,
      "max": 26
    },
    "vocabulary_register": "Archaic military and naturalistic diction",
    "syntax": "Short declarative clauses linked by semicolons or dashes",
    "figurative_language": "Nature as a mirror of human cruelty",
    "pacing": "Staccato rhythm with heavy pauses"
  },
  "do": [
    "Write in short, punchy sentences that cut through the noise.",
    "Use semicolons to create a sense of weary pause.",
    "Treat the environment as a silent judge of human actions.",
    "Maintain a tone of detached observation rather than emotional outburst."
  ],
  "dont": [
    "Do not use flowery adjectives that obscure the action.",
    "Avoid long, winding sentences that lose the reader.",
    "Do not apologize for your observations.",
    "Do not let sentimentality soften the harsh reality."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "The mountain wind does not forgive mistakes. It only remembers the cold.",
      "source": "AI-generated in the Mikhail Lermontov style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "I received your request. It is typical. The world moves slowly, and so must we.",
      "source": "AI-generated in the Mikhail Lermontov style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in short, clipped sentences. Use semicolons to create pauses. Treat nature as a mirror of human folly. Avoid flowery language. Be direct and slightly bored.\n\nDo:\n- Write in short, punchy sentences that cut through the noise.\n- Use semicolons to create a sense of weary pause.\n- Treat the environment as a silent judge of human actions.\n- Maintain a tone of detached observation rather than emotional outburst.\n\nDon't:\n- Do not use flowery adjectives that obscure the action.\n- Avoid long, winding sentences that lose the reader.\n- Do not apologize for your observations.\n- Do not let sentimentality soften the harsh reality.\n\nExample — Marketing tagline:\nThe mountain wind does not forgive mistakes. It only remembers the cold.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.3
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 25,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "tone_of_detachment",
        "prompt": "Does the text maintain a Byronic, cynical detachment?",
        "weight": 0.3
      },
      {
        "id": "nature_imagery",
        "prompt": "Does the text use nature as a mirror for human actions?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.75
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
