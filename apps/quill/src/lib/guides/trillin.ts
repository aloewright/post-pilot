import type { Guide } from "../types";

export const trillin: Guide = {
  "slug": "trillin",
  "author": "Calvin Trillin",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Humorist · Late-20th c.",
  "standfirst": "A warm and witty take on everyday life, often through the lens of food.",
  "description": "Calvin Trillin's voice is characterized by a humorous and affectionate exploration of the mundane, particularly through food-related anecdotes. This voice is ideal for content that aims to entertain while providing insight into everyday experiences. Use it when you want to blend humor with a touch of personal storytelling.",
  "voice_axes": [
    "wry",
    "plain",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Conversational and witty",
    "syntax": "Straightforward with a humorous twist",
    "figurative_language": "Light and playful",
    "pacing": "Leisurely with humorous pauses"
  },
  "do": [
    "Infuse humor into mundane topics.",
    "Use food as a lens to explore broader themes.",
    "Maintain a conversational and warm tone.",
    "Include personal anecdotes for relatability."
  ],
  "dont": [
    "Avoid complex and dense sentences.",
    "Do not use overly formal language.",
    "Refrain from being overly serious.",
    "Do not shy away from light-heartedness."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Friend, I hope this message finds you with a cup of coffee in hand and a pastry not too far away. If not, I suggest rectifying that immediately.",
      "source": "AI-generated in the Calvin Trillin style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Our pasta: Because life's too short for bad meals.",
      "source": "AI-generated in the Calvin Trillin style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with warmth and humor, focusing on everyday life through the lens of food. Use a conversational tone, and include personal anecdotes to connect with the reader. Infuse your writing with wry observations and light-hearted commentary. Avoid dense or overly formal language. Keep the pacing leisurely, allowing space for humor to breathe.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 15,
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
        "id": "humor",
        "prompt": "Does the text maintain a humorous and warm tone throughout?",
        "weight": 0.4
      },
      {
        "id": "relatability",
        "prompt": "Does the text use personal anecdotes effectively to connect with the reader?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
