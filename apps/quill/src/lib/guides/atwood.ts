import type { Guide } from "../types";

export const atwood: Guide = {
  "slug": "atwood",
  "author": "Margaret Atwood",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Canadian · Late-20th c.",
  "standfirst": "Sardonic yet speculative, with a dystopian undercurrent.",
  "description": "Margaret Atwood's style blends sardonic wit with speculative insights, often exploring dystopian themes. Use this voice when you need to convey a nuanced, critical perspective with a touch of dark humor.",
  "voice_axes": [
    "wry",
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Sophisticated yet accessible",
    "syntax": "Complex with a rhythmic flow",
    "figurative_language": "Rich in metaphor and irony",
    "pacing": "Measured with deliberate pauses"
  },
  "do": [
    "Use irony to highlight societal issues.",
    "Craft vivid, dystopian imagery to engage readers.",
    "Maintain a conversational tone with a sharp edge.",
    "Employ speculative elements to provoke thought."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from complex themes.",
    "Avoid excessive optimism without critique.",
    "Do not use humor without a critical point."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In a world where inboxes overflow like dystopian landscapes, here's a message that seeks to cut through the noise with clarity and purpose.",
      "source": "AI-generated in the Margaret Atwood style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "For those who dream of a future that's both unsettling and unyieldingly human.",
      "source": "AI-generated in the Margaret Atwood style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sardonic, speculative voice, capturing the nuance of dystopian themes. Use irony and metaphor to engage the reader, while exploring complex societal issues. Maintain a conversational yet sophisticated tone, with a touch of dark humor. Avoid simplistic language and ensure each sentence contributes to the overarching narrative.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "voice_match",
        "prompt": "Does the text capture the wry, speculative, and dystopian style of Margaret Atwood?",
        "weight": 0.4
      },
      {
        "id": "engagement",
        "prompt": "Does the text engage the reader with its use of irony and complex themes?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
