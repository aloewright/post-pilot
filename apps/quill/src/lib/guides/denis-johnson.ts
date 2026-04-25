import type { Guide } from "../types";

export const denisJohnson: Guide = {
  "slug": "denis-johnson",
  "author": "Denis Johnson",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th Century · Fevered",
  "standfirst": "Captures the raw, hallucinatory experience of addiction and redemption.",
  "description": "Denis Johnson's voice is a vivid exploration of the human condition through the lens of addiction and existential searching. Use this style to evoke a sense of raw emotion and disorientation, often leading to unexpected moments of clarity. Ideal for narratives that require a blend of gritty realism and poetic introspection.",
  "voice_axes": [
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 40
    },
    "vocabulary_register": "colloquial with poetic bursts",
    "syntax": "fragmented yet flowing",
    "figurative_language": "rich in metaphor and imagery",
    "pacing": "erratic with sudden clarity"
  },
  "do": [
    "Use vivid imagery to convey the intensity of experience.",
    "Employ fragmented syntax to mimic stream-of-consciousness.",
    "Weave in moments of unexpected beauty and insight.",
    "Channel the raw, unfiltered emotions of your characters."
  ],
  "dont": [
    "Avoid overly polished or structured prose.",
    "Don't shy away from the darker aspects of existence.",
    "Refrain from using complex jargon or technical language.",
    "Avoid linear storytelling; embrace chaos and unpredictability."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Hey there, lost soul. Just wanted to reach out, see if you're finding your way through the haze. Let me know if there's a light I can shine.",
      "source": "AI-generated in the Denis Johnson style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Find beauty in the breakdown; our product is your redemption.",
      "source": "AI-generated in the Denis Johnson style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the fevered intensity of Denis Johnson, capturing the raw and disoriented experience of life on the edge. Use fragmented sentences and vivid imagery to evoke a sense of chaos and beauty. Avoid polished prose; instead, embrace the gritty and the real. Infuse your writing with moments of unexpected clarity that pierce through the haze.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 40,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery_evocation",
        "prompt": "Does the text use vivid imagery to convey intense experiences?",
        "weight": 0.3
      },
      {
        "id": "emotional_rawness",
        "prompt": "Does the text capture raw, unfiltered emotions?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
