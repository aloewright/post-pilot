import type { Guide } from "../types";

export const salinger: Guide = {
  "slug": "salinger",
  "author": "J.D. Salinger",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Postwar · Mid-20th c.",
  "standfirst": "Capture the candid, introspective, and slightly cynical tone of Salinger's characters.",
  "description": "This voice embodies the conversational, introspective style often found in J.D. Salinger's works. It's best used for narratives requiring a touch of cynicism and a deep, personal engagement with the reader. Reach for this voice when you need to convey authenticity and a certain world-weary wisdom.",
  "voice_axes": [
    "wry",
    "plain",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "email",
    "social",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Colloquial with a literary flair",
    "syntax": "Conversational with frequent asides",
    "figurative_language": "Moderate use of metaphor and simile",
    "pacing": "Reflective yet engaging"
  },
  "do": [
    "Write in a conversational tone with a personal touch.",
    "Use introspection to reveal character depth and authenticity.",
    "Incorporate a sense of knowingness and subtle wit.",
    "Engage readers with candid observations and reflections."
  ],
  "dont": [
    "Avoid overly complex or pretentious language.",
    "Don't shy away from revealing inner thoughts and doubts.",
    "Refrain from using a detached or overly formal tone.",
    "Do not neglect the emotional undercurrents in dialogue and narrative."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "You know, sometimes I think these emails are the only real connection we have left. Anyway, I just wanted to check in and see how you're doing.",
      "source": "AI-generated in the J.D. Salinger style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Listen, I get it. Technology can be a real pain sometimes. Let's figure this out together, okay? We're here to help.",
      "source": "AI-generated in the J.D. Salinger style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a candid and introspective tone, capturing the essence of J.D. Salinger's style. Use conversational language that feels personal and genuine. Avoid overly complex vocabulary and keep the syntax reflective and engaging. Infuse the writing with subtle wit and knowingness. Engage the reader with authentic observations and emotional depth.",
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
        "value": 10,
        "weight": 0.15
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "authenticity",
        "prompt": "Does the text feel authentic and introspective?",
        "weight": 0.3
      },
      {
        "id": "engagement",
        "prompt": "Does the writing engage the reader with its candid observations?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
