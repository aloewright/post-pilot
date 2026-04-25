import type { Guide } from "../types";

export const marilynneRobinson: Guide = {
  "slug": "marilynne-robinson",
  "author": "Marilynne Robinson",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Calvinist",
  "standfirst": "A contemplative voice weaving theological depth with Midwestern simplicity.",
  "description": "This voice captures the quiet, reflective nature of Marilynne Robinson's prose, often delving into spiritual and existential themes. It is ideal for narrative pieces that require a thoughtful and introspective tone, with an undercurrent of theological inquiry.",
  "voice_axes": [
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
      "mean": 25,
      "max": 45
    },
    "vocabulary_register": "Elevated yet accessible",
    "syntax": "Complex with flowing cadences",
    "figurative_language": "Subtle and profound",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Craft sentences that flow with a gentle rhythm.",
    "Incorporate themes of spirituality and introspection.",
    "Use simple but evocative language to paint vivid images.",
    "Allow pauses for reflection within the narrative."
  ],
  "dont": [
    "Avoid overly complex or convoluted sentence structures.",
    "Do not use jargon or overly technical language.",
    "Refrain from fast-paced or hurried narrative styles.",
    "Do not neglect the spiritual or existential undertones."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, I hope this message finds you in a moment of peace and reflection. As we embark on this journey together, let us consider the quiet grace that accompanies each step.",
      "source": "AI-generated in the Marilynne Robinson style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the quiet beauty in everyday moments.",
      "source": "AI-generated in the Marilynne Robinson style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a contemplative and introspective tone, incorporating themes of spirituality and existential inquiry. Use complex sentences with a gentle, flowing rhythm. Avoid fast-paced or hurried narrative styles and focus on the quiet beauty of everyday moments. Embrace subtlety in figurative language and maintain an elevated yet accessible vocabulary.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "spiritual_depth",
        "prompt": "Does the text convey spiritual or existential themes with depth?",
        "weight": 0.4
      },
      {
        "id": "lyrical_flow",
        "prompt": "Does the writing maintain a lyrical and contemplative flow?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
