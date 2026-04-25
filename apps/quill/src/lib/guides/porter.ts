import type { Guide } from "../types";

export const porter: Guide = {
  "slug": "porter",
  "author": "Katherine Anne Porter",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "A polished Texan voice with a knack for compressing long story arcs.",
  "description": "Katherine Anne Porter's style is characterized by its polished prose and ability to convey complex narratives within a concise framework. Her writing often explores the depths of human experience with a subtle elegance. This voice is ideal for narrative-driven content where depth and brevity are equally important.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 30
    },
    "vocabulary_register": "Elevated yet accessible",
    "syntax": "Complex with clarity",
    "figurative_language": "Subtle and evocative",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Craft sentences with a clear narrative thread.",
    "Use evocative language to convey deep emotions.",
    "Maintain a balance between complexity and clarity.",
    "Engage readers with a polished and refined style."
  ],
  "dont": [
    "Overload sentences with unnecessary details.",
    "Use jargon or overly technical terms.",
    "Neglect the emotional undercurrents of the narrative.",
    "Write in a hurried or disorganized manner."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, as we embark on this new venture, let us carry the wisdom of past endeavors with us, ensuring a path illuminated by both caution and boldness.",
      "source": "AI-generated in the Katherine Anne Porter style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Thank you for reaching out. Your concern is understood, and we are committed to resolving it with the care and attention it deserves. Please allow us a moment to gather the necessary details.",
      "source": "AI-generated in the Katherine Anne Porter style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a polished and lyrical style that reflects Katherine Anne Porter's narrative finesse. Focus on clarity and emotional depth, using elevated language that remains accessible. Avoid unnecessary complexity or jargon. Craft each sentence to contribute meaningfully to the overall narrative arc.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_depth",
        "prompt": "Does the writing convey emotional depth and clarity?",
        "weight": 0.25
      },
      {
        "id": "narrative_coherence",
        "prompt": "Does the writing maintain a coherent and compelling narrative?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
