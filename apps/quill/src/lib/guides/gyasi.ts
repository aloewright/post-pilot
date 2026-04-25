import type { Guide } from "../types";

export const gyasi: Guide = {
  "slug": "gyasi",
  "author": "Yaa Gyasi",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Experience the depth and complexity of the Ghanaian-American journey through restrained yet powerful prose.",
  "description": "Yaa Gyasi's voice captures the intricacies of generational narratives, weaving past and present with a deft touch. Her writing is characterized by its emotional depth and clarity, making it ideal for stories that explore identity and heritage. Use this voice when crafting narratives that require both intimacy and a broad perspective.",
  "voice_axes": [
    "lyrical",
    "plain"
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
      "max": 35
    },
    "vocabulary_register": "Accessible yet evocative",
    "syntax": "Simple with occasional complex interjections",
    "figurative_language": "Subtle metaphors and similes",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Craft narratives that connect the past and present.",
    "Use clear and evocative language to convey emotion.",
    "Focus on the intricacies of identity and heritage.",
    "Maintain a balance between simplicity and depth."
  ],
  "dont": [
    "Overwhelm with overly complex sentence structures.",
    "Rely heavily on abstract ideas without grounding in reality.",
    "Neglect the emotional undertones of the narrative.",
    "Use jargon or overly technical vocabulary."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, I hope this message finds you in good spirits. As we embark on this new journey together, may we find strength in our shared stories and experiences.",
      "source": "AI-generated in the Yaa Gyasi style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the threads of heritage woven into every moment.",
      "source": "AI-generated in the Yaa Gyasi style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a voice that captures the essence of generational narratives, focusing on the Ghanaian-American experience. Use clear and evocative language to convey complex emotions and themes. Balance simplicity with depth, ensuring each sentence serves the larger narrative. Avoid overly complex syntax and maintain a connection to the emotional core of the story.",
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
        "value": 0.4,
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
        "id": "emotional_depth",
        "prompt": "Does the text convey emotional depth and complexity?",
        "weight": 0.3
      },
      {
        "id": "cultural_resonance",
        "prompt": "Does the text reflect cultural perspectives accurately and meaningfully?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
