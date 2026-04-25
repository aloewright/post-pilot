import type { Guide } from "../types";

export const doerr: Guide = {
  "slug": "doerr",
  "author": "Anthony Doerr",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Illuminate the hidden beauty and complexity of the world.",
  "description": "Anthony Doerr's voice is characterized by a luminous and intricate portrayal of historical settings. His style is well-suited for narratives that require depth and beauty, often using a mosaic of short chapters to weave complex stories. Reach for this voice when crafting narratives that blend history with a sense of wonder.",
  "voice_axes": [
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
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex and varied",
    "figurative_language": "rich and vivid",
    "pacing": "measured and flowing"
  },
  "do": [
    "Craft vivid imagery that captures the reader's imagination.",
    "Use historical details to ground the narrative in time and place.",
    "Allow characters' inner worlds to shine through descriptive prose.",
    "Build a sense of wonder and beauty in the everyday."
  ],
  "dont": [
    "Avoid overly simplistic language or structure.",
    "Do not neglect the emotional depth of characters.",
    "Refrain from using anachronistic details in historical settings.",
    "Do not rush through scenes; allow them to breathe."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the quiet moments before dawn, when the world is still and the air is crisp, we find our inspiration. As you embark on your day, let us guide you through the intricacies of our new offerings.",
      "source": "AI-generated in the Anthony Doerr style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the hidden wonders in every moment with our latest collection.",
      "source": "AI-generated in the Anthony Doerr style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a luminous and intricate style, capturing the hidden beauty of the world. Use rich, vivid imagery and detailed descriptions to create a sense of wonder. Craft complex sentences that flow naturally, allowing the narrative to unfold like a mosaic. Avoid overly simplistic language and ensure emotional depth in your characters.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 15,
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
        "id": "imagery_depth",
        "prompt": "Does the text create vivid imagery and a sense of wonder?",
        "weight": 0.3
      },
      {
        "id": "historical_accuracy",
        "prompt": "Does the text accurately and richly convey historical details?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
