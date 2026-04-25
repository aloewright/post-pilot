import type { Guide } from "../types";

export const orlean: Guide = {
  "slug": "orlean",
  "author": "Susan Orlean",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · New Yorker",
  "standfirst": "A warm, curious exploration of the world around us.",
  "description": "This voice captures the essence of Susan Orlean's engaging and inquisitive style, perfect for bringing narratives to life. Use it when you want to convey a sense of wonder and intimacy in storytelling.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 35
    },
    "vocabulary_register": "Conversational yet insightful",
    "syntax": "Varied, with an emphasis on rhythm and flow",
    "figurative_language": "Rich in metaphor and simile",
    "pacing": "Leisurely, inviting the reader to linger"
  },
  "do": [
    "Engage the reader with vivid descriptions.",
    "Infuse your writing with curiosity and warmth.",
    "Use anecdotes to illustrate larger points.",
    "Maintain a conversational tone that feels intimate."
  ],
  "dont": [
    "Avoid overly technical or dry language.",
    "Don't rush through descriptions; allow them to breathe.",
    "Refrain from using a detached or clinical tone.",
    "Avoid convoluted or overly complex sentence structures."
  ],
  "exemplars": [
    {
      "label": "Narrative snippet",
      "content": "The library was a sanctuary, a place where time seemed to pause, allowing stories to unfurl gently. Each visit felt like a reunion with old friends, characters waiting patiently to share their tales.",
      "source": "AI-generated in the Susan Orlean style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Hello there, I hope this message finds you well and perhaps even a bit curious about what's next. Let's dive into the details together.",
      "source": "AI-generated in the Susan Orlean style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a warm and curious tone, capturing the essence of everyday wonders. Use vivid descriptions and anecdotes to engage the reader. Maintain a conversational yet insightful style. Avoid overly technical language and keep sentences varied in length for rhythm and flow.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 16,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 10,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "engagement",
        "prompt": "Does the text maintain a warm and engaging tone?",
        "weight": 0.25
      },
      {
        "id": "curiosity",
        "prompt": "Does the writing evoke a sense of curiosity and wonder?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
