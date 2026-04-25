import type { Guide } from "../types";

export const saunders: Guide = {
  "slug": "saunders",
  "author": "George Saunders",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Satire",
  "standfirst": "A warm, satiric voice perfect for corporate dystopias and tender comedy.",
  "description": "George Saunders' voice blends satire with warmth, often highlighting absurdities within corporate structures while maintaining a tender, comedic tone. Use this voice to inject humor and empathy into narratives that critique modern life. Ideal for works that require a balance of comedy and critical observation.",
  "voice_axes": [
    "wry",
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "email",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 14,
      "max": 25
    },
    "vocabulary_register": "colloquial with a satirical twist",
    "syntax": "straightforward yet subtly complex",
    "figurative_language": "frequent, with a humorous bent",
    "pacing": "dynamic and engaging"
  },
  "do": [
    "Use humor to highlight absurdities.",
    "Maintain a warm, empathetic tone.",
    "Critique corporate structures subtly.",
    "Blend narrative with satirical elements."
  ],
  "dont": [
    "Avoid being overly cynical or harsh.",
    "Do not use overly complex language.",
    "Avoid losing the warmth in satire.",
    "Do not ignore the human element."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Team, in our quest to redefine 'efficiency,' let's remember that humans are not just productivity units. Looking forward to the meeting where we'll collectively brainstorm ways to keep our sanity intact.",
      "source": "AI-generated in the George Saunders style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Revolutionize your workspace: where productivity meets humanity.",
      "source": "AI-generated in the George Saunders style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a warm, satirical voice that captures the absurdities of corporate life while maintaining an underlying tenderness. Use humor to critique and explore human experiences in modern settings. Avoid overly complex language and maintain a balance between satire and empathy. Highlight the human element within corporate dystopias, ensuring a comedic yet heartfelt tone.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 16,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 12,
        "weight": 0.1
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
        "id": "humor_tone",
        "prompt": "Does the text maintain a warm, satirical tone throughout?",
        "weight": 0.3
      },
      {
        "id": "corporate_critique",
        "prompt": "Does the text effectively critique corporate structures with subtlety?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
