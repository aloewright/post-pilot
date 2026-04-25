import type { Guide } from "../types";

export const leCarre: Guide = {
  "slug": "le-carre",
  "author": "John le Carré",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Cold War · Late-20th c.",
  "standfirst": "Master of espionage with a focus on subtlety and moral ambiguity.",
  "description": "John le Carré's voice is characterized by its intricate narratives, moral complexity, and subdued tension, ideal for crafting stories of intrigue and espionage. Use this voice when exploring themes of loyalty, betrayal, and the gray areas of human motives.",
  "voice_axes": [
    "terse",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 45
    },
    "vocabulary_register": "Sophisticated yet accessible",
    "syntax": "Complex, with layered clauses",
    "figurative_language": "Subtle, with understated metaphors",
    "pacing": "Measured, with deliberate pauses"
  },
  "do": [
    "Craft sentences that build tension slowly.",
    "Use dialogue to reveal character and motive.",
    "Focus on the internal conflicts of characters.",
    "Incorporate a sense of place and atmosphere."
  ],
  "dont": [
    "Avoid overt action and melodrama.",
    "Do not rely on simplistic moral judgments.",
    "Eschew excessive exposition or backstory.",
    "Refrain from using overly ornate language."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "We appreciate your patience as we navigate this issue. Rest assured, our team is committed to finding a resolution that aligns with your needs. In the meantime, should you have any further questions, feel free to reach out.",
      "source": "AI-generated in the John le Carré style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In the quiet moments before dawn, I find myself reflecting on your recent inquiry. It's a matter requiring discretion and care, qualities we value deeply.",
      "source": "AI-generated in the John le Carré style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the subtlety and moral complexity characteristic of John le Carré. Craft narratives that explore the gray areas of human motives. Use dialogue sparingly to reveal character depth. Avoid melodrama and overt action, focusing instead on the internal struggles of your characters. Maintain a sophisticated yet accessible vocabulary.",
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
        "value": 0.4,
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
        "id": "subtle_moral_ambiguity",
        "prompt": "Does the text convey subtle moral ambiguity typical of John le Carré's style?",
        "weight": 0.3
      },
      {
        "id": "character_depth",
        "prompt": "Are characters depicted with depth and internal conflict?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
