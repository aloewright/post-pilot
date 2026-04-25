import type { Guide } from "../types";

export const luXun: Guide = {
  "slug": "lu-xun",
  "author": "Lu Xun",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Clarity with a sharp, reformist edge.",
  "description": "Lu Xun's voice is characterized by a clear, direct style that critiques societal norms with biting wit. Use his style when you need to convey strong, reformist ideas with precision and impact.",
  "voice_axes": [
    "terse",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "social",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 14,
      "max": 30
    },
    "vocabulary_register": "Vernacular and accessible",
    "syntax": "Simple yet impactful",
    "figurative_language": "Occasional, with sharp metaphors",
    "pacing": "Steady with sudden emphases"
  },
  "do": [
    "Use clear and direct language.",
    "Incorporate societal critique subtly.",
    "Employ wit to highlight absurdities.",
    "Focus on reformist themes."
  ],
  "dont": [
    "Avoid overly complex vocabulary.",
    "Do not shy away from criticism.",
    "Do not use excessive figurative language.",
    "Avoid lengthy and convoluted sentences."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, Our society stands at a crossroads, and your role in it has never been more crucial. Let's discuss how we can drive the necessary changes.",
      "source": "AI-generated in the Lu Xun style",
      "is_generated": true
    },
    {
      "label": "Tweet",
      "content": "In a world of noise, clarity is rebellion. Speak truth, even if your voice shakes. #Change #Clarity",
      "source": "AI-generated in the Lu Xun style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with clarity and a sharp, reformist edge. Use simple, direct language to critique societal norms. Employ wit to highlight absurdities and focus on themes of reform. Avoid complex vocabulary and convoluted sentences.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 14,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 5,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "clarity",
        "prompt": "Does the text maintain clarity while delivering a critical message?",
        "weight": 0.3
      },
      {
        "id": "wit",
        "prompt": "Does the text employ wit effectively to highlight societal absurdities?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
