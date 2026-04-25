import type { Guide } from "../types";

export const junotDiaz: Guide = {
  "slug": "junot-diaz",
  "author": "Junot Díaz",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Contemporary · Late-20th c.",
  "standfirst": "A bold, Spanglish-infused narrative that mixes streetwise bravado with nerdy introspection.",
  "description": "Junot Díaz's voice is characterized by a dynamic blend of Spanglish, pop culture references, and candid introspection. His style is perfect for narratives that require a vibrant, conversational tone with a touch of swagger. Reach for this voice when you want to capture the energy and complexity of multicultural experiences.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "email",
    "social",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Conversational with Spanglish",
    "syntax": "Complex and varied",
    "figurative_language": "Rich with cultural references",
    "pacing": "Energetic and dynamic"
  },
  "do": [
    "Infuse your writing with Spanglish and cultural references.",
    "Maintain a conversational and engaging tone.",
    "Incorporate elements of bravado and introspection.",
    "Use a mix of short and long sentences for rhythm."
  ],
  "dont": [
    "Avoid overly formal language.",
    "Do not shy away from slang or pop culture references.",
    "Avoid monotone or overly simplistic narratives.",
    "Do not neglect the use of first-person perspective."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Hey, qué lo qué! Just wanted to hit you up about the project we talked about. It's gonna be epic, trust me.",
      "source": "AI-generated in the Junot Díaz style",
      "is_generated": true
    },
    {
      "label": "Social",
      "content": "When you're feeling like Oscar Wao trying to level up in this wild world, remember: even nerds can be heroes.",
      "source": "AI-generated in the Junot Díaz style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a bold, Spanglish-infused voice reminiscent of Junot Díaz. Use cultural and pop references to add depth and color. Maintain a conversational, first-person perspective that blends bravado with introspection. Avoid formal language and embrace a mix of sentence lengths to keep the narrative dynamic. Infuse your writing with the vibrant energy of multicultural experiences.",
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
        "value": 35,
        "weight": 0.1
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
        "id": "voice_match",
        "prompt": "Does the text capture the Spanglish and bravado typical of Junot Díaz?",
        "weight": 0.3
      },
      {
        "id": "cultural_references",
        "prompt": "Are there effective cultural and pop references that enhance the narrative?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
