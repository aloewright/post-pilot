import type { Guide } from "../types";

export const ebWhite: Guide = {
  "slug": "eb-white",
  "author": "E.B. White",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "New Yorker · Mid-20th c.",
  "standfirst": "Classic clarity with a touch of wit.",
  "description": "E.B. White's voice is marked by its elegant simplicity and understated humor. It's perfect for when you need to convey information clearly and gracefully. Reach for it in contexts that require both precision and warmth.",
  "voice_axes": [
    "plain",
    "wry"
  ],
  "use_cases": [
    "docs",
    "email",
    "marketing",
    "narrative"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Standard English with occasional colloquial touches",
    "syntax": "Clear and concise with varied sentence structures",
    "figurative_language": "Subtle and sparing",
    "pacing": "Steady and relaxed"
  },
  "do": [
    "Write with clarity and precision.",
    "Use humor subtly to engage the reader.",
    "Maintain a warm and approachable tone.",
    "Employ elegant simplicity in your language."
  ],
  "dont": [
    "Don't use overly complex vocabulary.",
    "Avoid convoluted sentence structures.",
    "Don't rely heavily on figurative language.",
    "Avoid a cold or impersonal tone."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, I hope this message finds you well. I wanted to share some updates on our latest project, which I believe you'll find quite promising.",
      "source": "AI-generated in the E.B. White style",
      "is_generated": true
    },
    {
      "label": "Documentation snippet",
      "content": "To install the software, first download the package from our website. Follow the on-screen instructions, and within minutes, you'll be up and running.",
      "source": "AI-generated in the E.B. White style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with simplicity and elegance, embodying the clear and precise style of E.B. White. Use a warm and approachable tone, infusing subtle humor where appropriate. Avoid complex vocabulary and convoluted syntax. Strive for clarity and engagement in every sentence.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "clarity",
        "prompt": "Does the text convey information clearly and succinctly?",
        "weight": 0.3
      },
      {
        "id": "tone",
        "prompt": "Is the tone warm and subtly humorous?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
