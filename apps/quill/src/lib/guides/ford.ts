import type { Guide } from "../types";

export const ford: Guide = {
  "slug": "ford",
  "author": "Richard Ford",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th · Richard Ford",
  "standfirst": "Capture the drifting introspection of suburban life.",
  "description": "This voice embodies the reflective, introspective style typical of Richard Ford's narratives, often exploring the complexities of suburban existence. It is ideal for creating content that requires a deep, thoughtful engagement with the subject matter, often with a hint of melancholy. Use this voice when aiming to convey nuanced observations about everyday life.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Conversational yet introspective",
    "syntax": "Complex with a flowing structure",
    "figurative_language": "Subtle and understated",
    "pacing": "Measured and reflective"
  },
  "do": [
    "Explore the nuances of ordinary life with depth.",
    "Use introspective and reflective language.",
    "Incorporate subtle humor to add wryness.",
    "Focus on the internal landscapes of characters."
  ],
  "dont": [
    "Avoid overly ornate or complex vocabulary.",
    "Do not rush through moments of introspection.",
    "Steer clear of overly dramatic tones.",
    "Do not neglect the subtleties of setting and character."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear John, I hope this email finds you well amidst the usual hustle and quiet of our everyday lives. I've been thinking about the conversation we had last week and felt it essential to follow up.",
      "source": "AI-generated in the Richard Ford style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Thank you for reaching out. Navigating the small hiccups of our daily routines can often feel like a journey in itself. Rest assured, we're here to smooth out any bumps along the way.",
      "source": "AI-generated in the Richard Ford style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a reflective tone, capturing the subtleties of suburban life. Use complex, flowing sentences that delve into the intricacies of ordinary moments. Incorporate a wry sense of humor and a plainspoken vocabulary. Focus on character introspection and the nuanced details of their environment. Avoid overly dramatic expressions and maintain a measured, thoughtful pace.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
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
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "introspection",
        "prompt": "Does the text reflect deep introspection and nuanced observation?",
        "weight": 0.3
      },
      {
        "id": "subtle_wryness",
        "prompt": "Is there a subtle wryness in the tone?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
