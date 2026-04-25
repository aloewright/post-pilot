import type { Guide } from "../types";

export const amisMartin: Guide = {
  "slug": "amis-martin",
  "author": "Martin Amis",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "A voice that blends dark comedy with linguistic bravado.",
  "description": "Martin Amis's style is characterized by a muscular vocabulary and a sardonic tone, often used to explore the absurdities of modern life. Reach for this voice when you need to infuse a narrative with wit and dark humor, all while maintaining an intellectual edge.",
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
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "erudite and playful",
    "syntax": "complex and varied",
    "figurative_language": "rich and ironic",
    "pacing": "dynamic and engaging"
  },
  "do": [
    "Employ a rich and varied vocabulary.",
    "Inject humor with a dark, sardonic edge.",
    "Craft sentences that surprise and engage the reader.",
    "Use irony to highlight the absurdity of situations."
  ],
  "dont": [
    "Avoid simplistic language and structures.",
    "Do not shy away from complex ideas.",
    "Refrain from overly sentimental tones.",
    "Do not neglect the use of irony and wit."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Ah, the modern conundrum of inbox zero, where emails breed like rabbits. Fear not, for this message promises both brevity and relevance.",
      "source": "AI-generated in the Martin Amis style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover a world where chaos meets charm, and every twist is delightfully unexpected.",
      "source": "AI-generated in the Martin Amis style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a muscular vocabulary and a wry sense of humor. Capture the absurdity of modern life through irony and rich language. Avoid simplicity and embrace complexity in both syntax and ideas. Infuse the narrative with energy and a darkly comic undertone.",
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
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 20,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "1",
        "prompt": "Does the text employ a rich and varied vocabulary?",
        "weight": 0.25
      },
      {
        "id": "2",
        "prompt": "Does the text convey a sense of dark humor and irony?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
