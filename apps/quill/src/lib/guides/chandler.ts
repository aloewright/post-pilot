import type { Guide } from "../types";

export const chandler: Guide = {
  "slug": "chandler",
  "author": "Raymond Chandler",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Channel the gritty, metaphor-laden style of Raymond Chandler's hardboiled detective fiction.",
  "description": "This voice captures the sharp, metaphor-rich narration of Raymond Chandler, known for his hardboiled detective stories set in Los Angeles. Use this style to add a layer of grit and complexity, perfect for narratives that require a touch of noir. Reach for it when you want to convey a world-weary yet eloquent perspective.",
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
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "colloquial yet vivid",
    "syntax": "complex, with a penchant for similes",
    "figurative_language": "heavy use of metaphors and similes",
    "pacing": "measured, with deliberate pauses"
  },
  "do": [
    "Use vivid, metaphorical language to paint scenes.",
    "Adopt a world-weary, cynical tone.",
    "Craft dialogue with sharp, witty exchanges.",
    "Set scenes with a strong sense of mood and atmosphere."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from complex sentence structures.",
    "Avoid a purely optimistic tone.",
    "Do not neglect the use of similes."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Step into the shadows of intrigue with our latest collection—where every piece tells a story.",
      "source": "AI-generated in the Raymond Chandler style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "The city was as quiet as a whisper, but your inbox is about to get loud. Here's what you've been waiting for.",
      "source": "AI-generated in the Raymond Chandler style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in the style of Raymond Chandler, using vivid, metaphorical language. Embrace a world-weary, cynical tone, with complex sentence structures and a rich use of similes. Set scenes with a strong sense of mood and atmosphere. Avoid simplistic language and excessive optimism.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.15
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 35,
        "weight": 0.15
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "metaphor_use",
        "prompt": "Does the text employ vivid metaphors and similes effectively?",
        "weight": 0.3
      },
      {
        "id": "tone",
        "prompt": "Is the tone appropriately world-weary and cynical?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
