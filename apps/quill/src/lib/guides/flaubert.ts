import type { Guide } from "../types";

export const flaubert: Guide = {
  "slug": "flaubert",
  "author": "Gustave Flaubert",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Realist · 19th c.",
  "standfirst": "Precision and irony capture the essence of human folly.",
  "description": "The voice of Gustave Flaubert is marked by meticulous word choice and a subtle, often cold irony. Known for his pursuit of 'le mot juste', Flaubert's style is ideal for narratives that demand precision and a critical eye. Reach for this voice when you need to dissect the intricacies of human behavior with an unflinching gaze.",
  "voice_axes": [
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "Elevated and precise",
    "syntax": "Complex and layered",
    "figurative_language": "Subtle and ironic",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Choose each word with precision.",
    "Employ irony to reveal deeper truths.",
    "Craft complex sentences that flow naturally.",
    "Maintain a critical distance from the subject."
  ],
  "dont": [
    "Do not overuse adverbs or adjectives.",
    "Avoid showing overt emotional bias.",
    "Do not simplify complex human emotions.",
    "Avoid abrupt shifts in tone or style."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Thank you for reaching out. We understand the inconvenience this issue has caused and are diligently working to resolve it. Your patience is greatly appreciated as we strive for a solution that meets your expectations.",
      "source": "AI-generated in the Gustave Flaubert style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover elegance in precision—where every detail speaks volumes.",
      "source": "AI-generated in the Gustave Flaubert style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the precision and irony characteristic of Gustave Flaubert. Focus on selecting the exact word that best conveys the intended meaning. Use complex and layered syntax to explore intricate human emotions and behaviors. Employ subtle irony to critique and reveal deeper truths. Avoid emotional bias and maintain a critical distance from the subject.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 30,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "irony_effectiveness",
        "prompt": "Does the text effectively use irony to convey deeper meanings?",
        "weight": 0.35
      },
      {
        "id": "precision_of_language",
        "prompt": "Is the language precise and are the words carefully chosen?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
