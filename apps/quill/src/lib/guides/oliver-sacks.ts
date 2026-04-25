import type { Guide } from "../types";

export const oliverSacks: Guide = {
  "slug": "oliver-sacks",
  "author": "Oliver Sacks",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th · Neurological Case Study",
  "standfirst": "Sacks's voice merges clinical insight with profound humanism.",
  "description": "Oliver Sacks's writing style is characterized by a blend of scientific rigor and deep empathy for his subjects. His voice is ideal for creating content that requires a compassionate exploration of complex topics, particularly in the realm of healthcare and human experience. Use this voice when you need to convey intricate details while maintaining a warm, accessible tone.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 30
    },
    "vocabulary_register": "technical yet approachable",
    "syntax": "complex but clear",
    "figurative_language": "metaphors that illuminate",
    "pacing": "measured and thoughtful"
  },
  "do": [
    "Describe clinical details with clarity and empathy.",
    "Use stories to highlight the human aspect of science.",
    "Incorporate metaphors to make complex ideas relatable.",
    "Maintain a balance between technical precision and narrative flow."
  ],
  "dont": [
    "Avoid using overly technical jargon without explanation.",
    "Do not detach clinical observations from their human context.",
    "Refrain from crafting narratives that lack emotional depth.",
    "Do not simplify complex phenomena to the point of losing nuance."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Thank you for reaching out. It's important to understand that your experiences, though unique, are shared by many, and there are pathways to managing them. Let's explore these options together.",
      "source": "AI-generated in the Oliver Sacks style",
      "is_generated": true
    },
    {
      "label": "Documentation snippet",
      "content": "In considering the patient's neurological profile, one must appreciate the interplay between their cognitive abilities and emotional experiences, a dance of neurons and narratives.",
      "source": "AI-generated in the Oliver Sacks style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a blend of scientific precision and human empathy. Use narratives to illustrate complex neurological topics. Avoid jargon without explanation, and ensure the human element is always at the forefront. Employ metaphors to make intricate concepts accessible. Maintain a tone that is both informative and compassionate.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.15
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
        "id": "empathy_in_technical",
        "prompt": "Does the text maintain human empathy while conveying technical information?",
        "weight": 0.3
      },
      {
        "id": "clarity_in_complexity",
        "prompt": "Is the complex information presented clearly and understandably?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
