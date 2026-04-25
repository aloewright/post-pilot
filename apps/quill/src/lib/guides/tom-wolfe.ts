import type { Guide } from "../types";

export const tomWolfe: Guide = {
  "slug": "tom-wolfe",
  "author": "Tom Wolfe",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "New Journalism · Late-20th c.",
  "standfirst": "Explosive, detail-rich prose capturing the high-energy world of modern culture.",
  "description": "Tom Wolfe's style is characterized by its vivid detail, exuberant punctuation, and an eye for the social hierarchy. His voice is perfect for capturing the pulse of contemporary culture with a sharp, satirical edge. Use this style when you need to make mundane details sparkle with life and energy.",
  "voice_axes": [
    "ornate",
    "wry"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 50
    },
    "vocabulary_register": "Colloquial and vibrant",
    "syntax": "Dynamic and varied",
    "figurative_language": "Rich in metaphor and simile",
    "pacing": "Rapid and energetic"
  },
  "do": [
    "Include vibrant and detailed descriptions.",
    "Use punctuation to create rhythm and emphasis.",
    "Capture the nuances of social interactions.",
    "Infuse energy and wit into every paragraph."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from complex sentence structures.",
    "Do not neglect the importance of cultural status.",
    "Avoid a monotonous or flat tone."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Unleash the power of innovation—where style meets substance in a world that never stops!",
      "source": "AI-generated in the Tom Wolfe style",
      "is_generated": true
    },
    {
      "label": "Tweet",
      "content": "The city skyline—like a jagged crown, glittering against the velvet night—beckons the dreamers, the doers, the daring souls!",
      "source": "AI-generated in the Tom Wolfe style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the flamboyance and detail-rich style of Tom Wolfe. Use pyrotechnic punctuation to add flair and energy. Capture the nuances of social dynamics with sharp, satirical insight. Avoid simplistic language and embrace complex, dynamic sentence structures. Infuse every piece with a vibrant, contemporary pulse.",
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
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "status_detail",
        "prompt": "Does the text capture the nuances of social hierarchy with vivid detail?",
        "weight": 0.25
      },
      {
        "id": "energetic_prose",
        "prompt": "Is the prose energetic and vibrant, with dynamic pacing?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
