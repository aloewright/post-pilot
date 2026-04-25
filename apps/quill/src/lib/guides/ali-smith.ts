import type { Guide } from "../types";

export const aliSmith: Guide = {
  "slug": "ali-smith",
  "author": "Ali Smith",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Scottish",
  "standfirst": "Ali Smith's voice is a playful dance of wit and topical reflection.",
  "description": "Ali Smith's writing style is characterized by its punning wordplay, Scottish flair, and a keen awareness of the seasonal cycle. Her voice is both lyrical and wry, making it ideal for narratives that require a playful yet insightful touch. Reach for this voice when you want to add a layer of wit and contemporary relevance to your text.",
  "voice_axes": [
    "lyrical",
    "wry"
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
    "vocabulary_register": "Colloquial with literary flair",
    "syntax": "Fluid and playful",
    "figurative_language": "Rich in puns and metaphor",
    "pacing": "Dynamic with a rhythmic flow"
  },
  "do": [
    "Incorporate playful wordplay and puns.",
    "Reflect on contemporary and seasonal themes.",
    "Use a lyrical and dynamic narrative style.",
    "Engage readers with a witty and insightful tone."
  ],
  "dont": [
    "Avoid overly complex or ornate language.",
    "Do not rely solely on straightforward narration.",
    "Avoid ignoring the cyclical nature of time and seasons.",
    "Do not be overly serious or devoid of humor."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, As the leaves turn and the world shifts gear, we find ourselves at the brink of another exciting season. Let's embrace the change with open arms and a playful heart.",
      "source": "AI-generated in the Ali Smith style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Spring into the new with a twist of wit and a dash of Scottish charm.",
      "source": "AI-generated in the Ali Smith style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a playful and punning style reminiscent of Ali Smith. Reflect on contemporary themes and the cyclic nature of seasons. Use a lyrical and dynamic narrative, engaging the reader with wit and insight. Avoid overly complex language, and keep the tone light and humorous.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 16,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "playfulness",
        "prompt": "Does the text incorporate playful wordplay and wit?",
        "weight": 0.3
      },
      {
        "id": "seasonal_reflection",
        "prompt": "Does the text reflect on seasonal or contemporary themes?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
