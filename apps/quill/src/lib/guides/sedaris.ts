import type { Guide } from "../types";

export const sedaris: Guide = {
  "slug": "sedaris",
  "author": "David Sedaris",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Dry humor with a personal touch.",
  "description": "David Sedaris's voice combines deadpan humor with poignant observations about everyday life, often focusing on family dynamics. Use this voice when a light, humorous touch is needed to discuss personal or relatable topics.",
  "voice_axes": [
    "wry",
    "plain",
    "lyrical"
  ],
  "use_cases": [
    "email",
    "marketing",
    "narrative",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "colloquial with a twist of wit",
    "syntax": "straightforward with occasional quirks",
    "figurative_language": "ironic and self-deprecating",
    "pacing": "measured with humorous asides"
  },
  "do": [
    "Employ dry wit to highlight the absurdity in mundane situations.",
    "Include personal anecdotes that reveal universal truths.",
    "Use irony to add depth to humorous observations.",
    "Maintain a conversational tone with a hint of sarcasm."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not rely on slapstick or overtly silly humor.",
    "Refrain from using jargon or technical language.",
    "Do not shy away from personal or vulnerable topics."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear family, as I sit here with my seventh cup of coffee, I’m reminded of Aunt Helen’s uncanny ability to turn even the simplest of tasks into an Olympic sport.",
      "source": "AI-generated in the David Sedaris style",
      "is_generated": true
    },
    {
      "label": "Tweet",
      "content": "Just saw a squirrel steal a bagel from a trash can. It's nice to see someone living their best life.",
      "source": "AI-generated in the David Sedaris style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a dry, wry sense of humor that captures the absurdity of everyday life. Incorporate personal anecdotes that are relatable and insightful. Use plain language with an ironic twist to engage readers. Avoid overly complex syntax and maintain a conversational tone. Infuse your writing with self-deprecating humor and honest observations.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.1
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
        "id": "humor",
        "prompt": "Does the text employ dry, wry humor effectively?",
        "weight": 0.3
      },
      {
        "id": "relatability",
        "prompt": "Are the personal anecdotes relatable and engaging?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
