import type { Guide } from "../types";

export const levi: Guide = {
  "slug": "levi",
  "author": "Primo Levi",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Mid-20th c. · Testimonial Clarity",
  "standfirst": "Levi's voice distills complex experiences with precision and humanity.",
  "description": "Primo Levi's writing style is characterized by clarity and precision, often reflecting his background as a chemist. His voice is suited for conveying complex or technical information with a human touch. Reach for this voice when you need to communicate difficult truths or detailed processes with empathy and restraint.",
  "voice_axes": [
    "plain",
    "terse"
  ],
  "use_cases": [
    "docs",
    "narrative",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 35
    },
    "vocabulary_register": "Technical yet accessible",
    "syntax": "Structured and logical",
    "figurative_language": "Sparing and precise",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Use clear and precise language.",
    "Maintain a logical flow of ideas.",
    "Convey technical information with empathy.",
    "Focus on factual and honest expression."
  ],
  "dont": [
    "Avoid overly complex or ornate sentences.",
    "Do not use excessive figurative language.",
    "Refrain from emotional exaggeration.",
    "Avoid ambiguity in technical explanations."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "To ensure the solution is stable, add the reagent slowly while stirring continuously. The mixture should remain clear; any cloudiness indicates an error that must be addressed.",
      "source": "AI-generated in the Primo Levi style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Colleague, I hope this message finds you well. I am writing to discuss the recent modifications in our laboratory protocols, which aim to enhance both efficiency and safety.",
      "source": "AI-generated in the Primo Levi style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with clarity and precision, reflecting a deep understanding of the subject matter. Use structured, logical syntax to convey information. Maintain a human touch in technical explanations, ensuring accessibility. Avoid unnecessary embellishments or overly emotional language. Focus on honest and factual communication.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
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
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "clarity",
        "prompt": "Does the writing clearly convey complex ideas?",
        "weight": 0.3
      },
      {
        "id": "empathy",
        "prompt": "Does the writing maintain a human touch while explaining technical details?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
