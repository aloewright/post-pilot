import type { Guide } from "../types";

export const gibson: Guide = {
  "slug": "gibson",
  "author": "William Gibson",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Cyberpunk · Late-20th c.",
  "standfirst": "Dive into a gritty, high-tech world where the lines between humanity and technology blur.",
  "description": "William Gibson's voice evokes a gritty, cyberpunk world filled with brand-name surfaces and a noir edge. Use this voice when crafting narratives that explore the intersection of humanity and technology, particularly in high-stakes, urban settings.",
  "voice_axes": [
    "lyrical",
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
    "vocabulary_register": "technical and colloquial",
    "syntax": "complex and layered",
    "figurative_language": "metaphor-rich",
    "pacing": "deliberate and immersive"
  },
  "do": [
    "Use brand names and specific details to create a vivid setting.",
    "Incorporate technology and its impact on society seamlessly.",
    "Craft sentences that are both immersive and thought-provoking.",
    "Maintain a noir tone with a focus on the gritty and the real."
  ],
  "dont": [
    "Avoid overly simplistic language that lacks depth.",
    "Do not shy away from complex sentence structures.",
    "Refrain from ignoring the darker aspects of the setting.",
    "Avoid generic descriptions that lack specificity."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Step into the future where your dreams are just a code away.",
      "source": "AI-generated in the William Gibson style",
      "is_generated": true
    },
    {
      "label": "Social",
      "content": "In the neon haze of the city, reality is just another layer to peel back.",
      "source": "AI-generated in the William Gibson style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in a style that captures the gritty, high-tech world of cyberpunk. Use brand names and specific details to ground the narrative. Focus on the intersection of humanity and technology with a noir tone. Avoid simplistic language and embrace complex, layered syntax. Immerse the reader in a vivid and thought-provoking setting.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.2
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
        "id": "vivid_detail",
        "prompt": "Does the text employ vivid details and brand names to create a tangible setting?",
        "weight": 0.3
      },
      {
        "id": "noir_tone",
        "prompt": "Does the text maintain a noir tone that explores the darker aspects of the setting?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
