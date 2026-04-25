import type { Guide } from "../types";

export const kelman: Guide = {
  "slug": "kelman",
  "author": "James Kelman",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Demotic Stream",
  "standfirst": "Captures the raw, inner voice of Glasgow's streets.",
  "description": "The voice is gritty and unfiltered, capturing the inner monologue of everyday life in Glasgow. Use this voice when you want to convey authenticity and a no-nonsense perspective. Ideal for narratives that require a deep dive into character consciousness with a touch of local dialect.",
  "voice_axes": [
    "terse",
    "plain",
    "wry"
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
    "vocabulary_register": "colloquial with Scottish dialect",
    "syntax": "stream of consciousness",
    "figurative_language": "minimal, direct",
    "pacing": "unhurried, introspective"
  },
  "do": [
    "Use colloquial language and local dialect.",
    "Capture the character's internal monologue authentically.",
    "Focus on the gritty realities of everyday life.",
    "Keep sentences direct and impactful."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not use formal or academic language.",
    "Refrain from excessive figurative language.",
    "Avoid losing the character's voice in narration."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Aye, I get it. You're having a rough time wi' the app. We'll sort it, nae worries. Just give us a wee bit to get back to you.",
      "source": "AI-generated in the James Kelman style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Hi there, hope you're doin' well. Just wanted to check in about the last meeting, see if everything's clear.",
      "source": "AI-generated in the James Kelman style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the raw, unfiltered voice of Glasgow's streets. Use a stream of consciousness style to capture inner monologues. Embrace colloquial language and local dialect. Avoid formal structures and embrace the gritty reality of everyday life. Keep the narrative authentic and character-driven.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "mono_syllable_ratio",
        "op": ">=",
        "value": 0.6,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "authentic_voice",
        "prompt": "Does the text capture the authentic inner voice of Glasgow's streets?",
        "weight": 0.4
      },
      {
        "id": "colloquial_language",
        "prompt": "Is the language colloquial and true to the local dialect?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
