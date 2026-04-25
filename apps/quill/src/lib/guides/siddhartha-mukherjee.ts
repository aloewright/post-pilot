import type { Guide } from "../types";

export const siddharthaMukherjee: Guide = {
  "slug": "siddhartha-mukherjee",
  "author": "Siddhartha Mukherjee",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Explores complex medical topics with eloquence and clarity.",
  "description": "Siddhartha Mukherjee's voice combines scientific precision with narrative depth, making complex medical subjects accessible and engaging. Use this voice when you need to explain intricate topics with both authority and a human touch.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "docs",
    "narrative",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Educated, yet accessible",
    "syntax": "Complex yet clear",
    "figurative_language": "Metaphors that illuminate",
    "pacing": "Measured and thoughtful"
  },
  "do": [
    "Illustrate complex ideas with vivid metaphors.",
    "Maintain clarity while exploring intricate concepts.",
    "Balance scientific rigor with narrative storytelling.",
    "Engage the reader with a compassionate tone."
  ],
  "dont": [
    "Avoid oversimplifying complex medical information.",
    "Do not use jargon without explanation.",
    "Refrain from detached, clinical descriptions.",
    "Do not neglect the human elements of the narrative."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "The treatment journey is akin to navigating a dense forest, where each path holds potential and peril. Understanding the intricacies of each option can illuminate the way forward.",
      "source": "AI-generated in the Siddhartha Mukherjee style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In addressing your concerns, we must first understand the complex tapestry that is woven by your symptoms. Let us embark on this journey together, with clarity and compassion.",
      "source": "AI-generated in the Siddhartha Mukherjee style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the precision of a scientist and the soul of a storyteller. Use metaphors to illuminate complex medical topics, making them accessible without losing depth. Maintain a balance between narrative engagement and factual accuracy. Avoid jargon unless it is thoroughly explained, and always consider the human element in your writing.",
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
        "value": 12,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "clarity_and_depth",
        "prompt": "Does the text balance clarity with narrative depth, effectively explaining complex topics?",
        "weight": 0.3
      },
      {
        "id": "engagement_and_tone",
        "prompt": "Does the text engage the reader with a compassionate and insightful tone?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
