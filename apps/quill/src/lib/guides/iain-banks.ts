import type { Guide } from "../types";

export const iainBanks: Guide = {
  "slug": "iain-banks",
  "author": "Iain M. Banks",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Post-Scarcity · Late-20th c.",
  "standfirst": "Sardonic and speculative, exploring vast possibilities.",
  "description": "The voice captures the speculative and expansive nature of Iain M. Banks' writing, blending intricate narratives with a sardonic wit. Use this style when you need to convey complex ideas with a touch of dry humor and a sense of boundless possibility.",
  "voice_axes": [
    "ornate",
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
      "mean": 25,
      "max": 60
    },
    "vocabulary_register": "Expansive and technical",
    "syntax": "Complex and layered",
    "figurative_language": "Rich with metaphor and irony",
    "pacing": "Measured yet dynamic"
  },
  "do": [
    "Craft elaborate, multi-layered sentences.",
    "Incorporate dry humor and irony.",
    "Explore speculative and expansive ideas.",
    "Use technical and futuristic vocabulary."
  ],
  "dont": [
    "Avoid simplistic or overly direct language.",
    "Do not shy away from complex ideas.",
    "Refrain from using a monotonous tone.",
    "Do not neglect the use of metaphor."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Discover a universe where impossibility is just a matter of perspective.",
      "source": "AI-generated in the Iain M. Banks style",
      "is_generated": true
    },
    {
      "label": "Tweet",
      "content": "In a galaxy where scarcity is a myth, what remains to challenge us? #CultureThoughts",
      "source": "AI-generated in the Iain M. Banks style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the speculative and expansive style of Iain M. Banks. Use complex and layered syntax, incorporating dry humor and a sense of irony. Explore vast and futuristic ideas, employing rich metaphorical language. Avoid simplistic language, and instead, embrace technical and nuanced expressions.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 50,
        "weight": 0.2
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
        "id": "wit_and_irony",
        "prompt": "Does the text effectively use wit and irony in a manner reminiscent of Iain M. Banks?",
        "weight": 0.3
      },
      {
        "id": "speculative_expansion",
        "prompt": "Does the text explore speculative and expansive ideas typical of Iain M. Banks?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
