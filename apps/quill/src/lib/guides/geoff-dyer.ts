import type { Guide } from "../types";

export const geoffDyer: Guide = {
  "slug": "geoff-dyer",
  "author": "Geoff Dyer",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Wandering through tangents with a reflective, conversational tone.",
  "description": "This voice captures the essayistic drift and reflective nature of Geoff Dyer's writing. It is ideal for crafting narratives that explore ideas through digression and contemplation. Use it when you want to engage readers with a meandering yet thoughtful exploration of topics.",
  "voice_axes": [
    "lyrical",
    "wry",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Conversational with intellectual flourishes",
    "syntax": "Loose and flowing",
    "figurative_language": "Occasional metaphors and analogies",
    "pacing": "Leisurely with reflective pauses"
  },
  "do": [
    "Embrace digressions to explore tangential thoughts.",
    "Maintain a conversational and approachable tone.",
    "Use humor and wit to engage the reader.",
    "Reflect deeply on seemingly mundane topics."
  ],
  "dont": [
    "Avoid rigid structure or overly formal language.",
    "Do not shy away from personal anecdotes or insights.",
    "Avoid rushing through ideas without exploration.",
    "Do not focus solely on the main topic without deviation."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "I was just thinking about how emails are like modern-day letters, yet lacking the tangible charm. Anyway, I hope this finds you well amidst the digital deluge.",
      "source": "AI-generated in the Geoff Dyer style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the art of not really getting to the point, but enjoying the journey anyway.",
      "source": "AI-generated in the Geoff Dyer style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a reflective and conversational tone, allowing for digressions and tangential thoughts. Use humor and a wry perspective to engage readers. Embrace a leisurely pace that invites contemplation. Avoid rigid structures and overly formal language. Let the narrative meander while maintaining coherence and depth.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 35,
        "weight": 0.1
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
        "id": "reflective_tone",
        "prompt": "Does the text maintain a reflective and conversational tone throughout?",
        "weight": 0.3
      },
      {
        "id": "humor_engagement",
        "prompt": "Does the text use humor and wit to engage the reader?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
