import type { Guide } from "../types";

export const josephMitchell: Guide = {
  "slug": "joseph-mitchell",
  "author": "Joseph Mitchell",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Mid-20th c. · New Yorker",
  "standfirst": "Evokes the richness of city life through patient, humane detail.",
  "description": "This voice captures the essence of urban life with a focus on the human stories that populate it. Use it when you want to evoke a sense of place and character with depth and empathy, drawing readers into the world being described.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Conversational yet precise",
    "syntax": "Complex with a flowing rhythm",
    "figurative_language": "Subtle and evocative",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Paint vivid pictures of settings and characters.",
    "Use detailed observations to bring scenes to life.",
    "Convey empathy and understanding in descriptions.",
    "Capture the rhythm and nuances of city life."
  ],
  "dont": [
    "Avoid overly simplistic descriptions.",
    "Do not rush through narratives or observations.",
    "Avoid using jargon or technical language.",
    "Do not neglect the human element in stories."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Thank you for reaching out to us. We understand how the bustling pace of city life can lead to unexpected challenges. Rest assured, we're here to help you navigate through this with care and attention.",
      "source": "AI-generated in the Joseph Mitchell style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the hidden stories that make the city pulse with life.",
      "source": "AI-generated in the Joseph Mitchell style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on the human stories within urban life. Capture the essence of characters and settings through detailed, patient observation. Use a conversational yet precise vocabulary, and maintain a flowing, complex syntax. Evoke a sense of empathy and understanding throughout your writing. Avoid jargon and maintain a steady, deliberate pace.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 16,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 35,
        "weight": 0.1
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
        "id": "empathy_in_narrative",
        "prompt": "Does the text convey empathy and understanding in its descriptions?",
        "weight": 0.3
      },
      {
        "id": "vividness_of_detail",
        "prompt": "Are the settings and characters described with vivid, engaging detail?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
