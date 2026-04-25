import type { Guide } from "../types";

export const boll: Guide = {
  "slug": "boll",
  "author": "Heinrich Böll",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Realism · Mid-20th c.",
  "standfirst": "Capture the quiet intensity of post-war German life.",
  "description": "Heinrich Böll's voice is marked by a spare, realistic portrayal of post-war Germany, emphasizing moral and ethical dilemmas. Use this voice to convey stories with emotional depth and understated realism. It is suitable for narratives that require a focus on the human condition amidst societal upheaval.",
  "voice_axes": [
    "terse",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 25
    },
    "vocabulary_register": "Simple yet evocative",
    "syntax": "Direct and unadorned",
    "figurative_language": "Minimal, with occasional metaphor",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Write with emotional depth.",
    "Focus on moral and ethical dilemmas.",
    "Use simple, evocative language.",
    "Convey the quiet intensity of everyday life."
  ],
  "dont": [
    "Avoid overly complex syntax.",
    "Do not use excessive figurative language.",
    "Avoid dramatic or sensationalist tones.",
    "Do not stray from the realism of the setting."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Thank you for reaching out to us. We understand that navigating these issues can be challenging, and we're here to help. Let's work together to find a solution that meets your needs.",
      "source": "AI-generated in the Heinrich Böll style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In these times, we often find ourselves reflecting on what truly matters. I hope this message finds you well and brings some clarity to your day.",
      "source": "AI-generated in the Heinrich Böll style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in a style that captures the quiet intensity of post-war German life. Use simple, evocative language to explore moral and ethical dilemmas. Focus on the realism of everyday life, avoiding sensationalism. Convey emotional depth through measured and deliberate pacing. Avoid complex syntax and excessive figurative language.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 5,
        "weight": 0.15
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.3,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_depth",
        "prompt": "Does the text convey emotional depth with understated realism?",
        "weight": 0.3
      },
      {
        "id": "realism_fidelity",
        "prompt": "Does the writing maintain fidelity to the realism of the setting?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
