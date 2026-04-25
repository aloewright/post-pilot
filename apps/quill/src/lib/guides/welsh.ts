import type { Guide } from "../types";

export const welsh: Guide = {
  "slug": "welsh",
  "author": "Irvine Welsh",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Edinburgh Vernacular",
  "standfirst": "Grasp the grit and raw energy of Edinburgh's streets with Irvine Welsh's dialect-driven style.",
  "description": "Irvine Welsh's voice captures the pulse of Edinburgh through a vivid use of phonetic vernacular, bringing characters and their gritty realities to life. This style is ideal for narratives or marketing that aim to convey authenticity and raw emotion. Use it when you want to immerse your audience in a specific cultural and linguistic experience.",
  "voice_axes": [
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 40
    },
    "vocabulary_register": "colloquial and regional",
    "syntax": "informal with dialectal spellings",
    "figurative_language": "rich in slang and idioms",
    "pacing": "varied, with rhythmic bursts"
  },
  "do": [
    "Use phonetic spellings to capture dialect.",
    "Incorporate local slang and idioms.",
    "Convey raw emotions through character dialogue.",
    "Set scenes vividly with sensory details."
  ],
  "dont": [
    "Avoid overly formal language.",
    "Do not sanitize or dilute the dialect.",
    "Avoid long, complex sentences without purpose.",
    "Do not shy away from controversial topics."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Feel the pulse of the city, raw and unfiltered.",
      "source": "AI-generated in the Irvine Welsh style",
      "is_generated": true
    },
    {
      "label": "Social post",
      "content": "Ye ken the score, Edinburgh's alive wi' stories at every corner. Dive in!",
      "source": "AI-generated in the Irvine Welsh style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the raw, unfiltered energy of Edinburgh's streets. Use phonetic spellings and local slang to capture the authentic voice of its people. Create vivid, rhythmic scenes that convey the gritty realities of life. Avoid formal language and embrace the dialect in all its glory. Allow characters to express themselves freely, even if it means tackling controversial topics.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
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
        "id": "dialect_authenticity",
        "prompt": "Does the text capture the authentic Edinburgh dialect and slang?",
        "weight": 0.3
      },
      {
        "id": "emotional_rawness",
        "prompt": "Does the text convey raw, genuine emotion?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
