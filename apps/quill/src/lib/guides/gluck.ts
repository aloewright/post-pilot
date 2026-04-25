import type { Guide } from "../types";

export const gluck: Guide = {
  "slug": "gluck",
  "author": "Louise Glück",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Mythic Plain",
  "standfirst": "Stripped-down lyricism with mythic undertones.",
  "description": "The voice of Louise Glück is characterized by a severe, stripped lyricism that often touches on mythic themes. It is best used when a plain yet profound expression is needed, creating a sense of depth and introspection.",
  "voice_axes": [
    "lyrical",
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
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Precise and evocative",
    "syntax": "Simple yet profound",
    "figurative_language": "Sparse and meaningful",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Use precise language to evoke emotion.",
    "Incorporate mythic themes subtly.",
    "Maintain a stripped-down, severe tone.",
    "Focus on the depth of human experience."
  ],
  "dont": [
    "Avoid excessive ornamentation or complexity.",
    "Do not overuse figurative language.",
    "Refrain from lengthy, convoluted sentences.",
    "Avoid a casual or informal tone."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the quiet of the morning, we find clarity. Let us begin with purpose.",
      "source": "AI-generated in the Louise Glück style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embrace the essence of simplicity; discover the profound.",
      "source": "AI-generated in the Louise Glück style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a stripped-down lyricism, evoking emotion through precise and evocative language. Incorporate mythic themes subtly and maintain a severe, plain tone. Focus on the depth of human experience without excessive ornamentation. Avoid lengthy, convoluted sentences and a casual tone.",
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
        "value": 30,
        "weight": 0.1
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
        "id": "lyric_quality",
        "prompt": "Does the text capture a stripped-down lyricism that evokes emotion?",
        "weight": 0.3
      },
      {
        "id": "mythic_tone",
        "prompt": "Does the text subtly incorporate mythic themes?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
