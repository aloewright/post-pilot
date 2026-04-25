import type { Guide } from "../types";

export const highsmith: Guide = {
  "slug": "highsmith",
  "author": "Patricia Highsmith",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Thriller · Mid-20th c.",
  "standfirst": "A dispassionate exploration of the amoral mind.",
  "description": "Patricia Highsmith's voice is known for its calm, dispassionate exploration of the amoral psyche, often delving deep into the interior thoughts of complex characters. Use this voice when crafting narratives that require a tension-filled, psychological edge with a focus on character introspection.",
  "voice_axes": [
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 30
    },
    "vocabulary_register": "Colloquial yet precise",
    "syntax": "Complex and flowing",
    "figurative_language": "Sparse and subtle",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Immerse the reader in the character's psyche.",
    "Maintain a calm, detached tone.",
    "Use subtle irony to underscore themes.",
    "Build tension through measured pacing."
  ],
  "dont": [
    "Avoid overt moralizing or judgment.",
    "Do not overwhelm with excessive detail.",
    "Refrain from fast-paced action sequences.",
    "Avoid simplistic characterizations."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, I've been considering the implications of our latest project and the potential paths it might take. The choices before us are intriguing, each with its own quiet allure.",
      "source": "AI-generated in the Patricia Highsmith style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the allure of the unknown, where every choice leads deeper into the mind's shadows.",
      "source": "AI-generated in the Patricia Highsmith style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a calm, detached tone that explores the intricacies of the amoral mind. Focus on character introspection and psychological tension, using complex and flowing syntax. Avoid overt moral judgment and simplistic narratives. Employ subtle irony and maintain a measured pacing throughout.",
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
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "moral_complexity",
        "prompt": "Does the text explore moral ambiguity with depth and subtlety?",
        "weight": 0.25
      },
      {
        "id": "psychological_tension",
        "prompt": "Does the text maintain psychological tension and character introspection?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
