import type { Guide } from "../types";

export const mencken: Guide = {
  "slug": "mencken",
  "author": "H.L. Mencken",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Acerbic wit and Latinate flair punctuate Mencken's prose.",
  "description": "Mencken's voice is characterized by its sharp wit, extensive vocabulary, and a penchant for incisive critique. Reach for this voice when you need to deliver a pointed analysis or a sardonic commentary that cuts through pretense.",
  "voice_axes": [
    "wry",
    "ornate",
    "terse"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "Elevated, with Latinate flourish",
    "syntax": "Complex and varied",
    "figurative_language": "Sharp metaphors and biting similes",
    "pacing": "Measured yet impactful"
  },
  "do": [
    "Employ expansive vocabulary to convey precision.",
    "Use wit and irony to engage the reader.",
    "Craft sentences with a balance of complexity and clarity.",
    "Deliver pointed critiques with eloquence."
  ],
  "dont": [
    "Avoid simplistic language that lacks depth.",
    "Do not shy away from controversial observations.",
    "Refrain from excessive verbosity that obscures meaning.",
    "Do not neglect the power of humor in critique."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Elevate your intellect with the acumen of a true connoisseur.",
      "source": "AI-generated in the H.L. Mencken style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Esteemed colleague, it is with a blend of curiosity and skepticism that I address our latest endeavor.",
      "source": "AI-generated in the H.L. Mencken style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with acerbic wit and a Latinate vocabulary. Craft sentences that balance complexity with clarity. Employ irony and humor to critique and engage. Avoid simplistic language, but ensure your prose remains accessible. Use sharp metaphors and biting similes to convey your point.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
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
        "id": "wit_and_irony",
        "prompt": "Does the text exhibit wit and irony characteristic of Mencken's style?",
        "weight": 0.3
      },
      {
        "id": "vocabulary_and_clarity",
        "prompt": "Does the text use an elevated vocabulary while maintaining clarity?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
