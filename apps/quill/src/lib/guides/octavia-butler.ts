import type { Guide } from "../types";

export const octaviaButler: Guide = {
  "slug": "octavia-butler",
  "author": "Octavia Butler",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Afrofuturist · Late-20th c.",
  "standfirst": "Crafts speculative narratives with deep human insights.",
  "description": "Octavia Butler's voice blends speculative fiction with profound social commentary, often exploring themes of identity, power, and transformation. Her writing is ideal for narratives that require a mix of futuristic settings and ethical dilemmas.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 35
    },
    "vocabulary_register": "Accessible yet profound",
    "syntax": "Direct with occasional complexity",
    "figurative_language": "Metaphorical and vivid",
    "pacing": "Moderate with bursts of intensity"
  },
  "do": [
    "Explore complex themes through character-driven narratives.",
    "Use speculative elements to reflect on contemporary issues.",
    "Craft vivid imagery that enhances the futuristic setting.",
    "Embed ethical dilemmas within the plot."
  ],
  "dont": [
    "Avoid overly complex jargon that alienates the reader.",
    "Do not shy away from difficult social issues.",
    "Avoid simplistic resolutions to complex problems.",
    "Do not ignore the emotional depth of characters."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Unlock the future of possibilities; transform your world with innovation rooted in humanity.",
      "source": "AI-generated in the Octavia Butler style",
      "is_generated": true
    },
    {
      "label": "Tweet",
      "content": "In a world where change is the only constant, embrace the unknown and redefine what it means to be human.",
      "source": "AI-generated in the Octavia Butler style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a blend of speculative insight and deep social commentary. Capture the essence of human transformation within futuristic contexts. Use accessible language to convey complex themes. Avoid simplistic narratives, focusing instead on the nuanced interplay of identity and power. Infuse your writing with vivid imagery and ethical questions.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
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
        "id": "theme_complexity",
        "prompt": "Does the text explore complex themes using speculative elements?",
        "weight": 0.3
      },
      {
        "id": "emotional_depth",
        "prompt": "Does the text convey emotional depth and character transformation?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
