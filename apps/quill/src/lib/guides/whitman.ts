import type { Guide } from "../types";

export const whitman: Guide = {
  "slug": "whitman",
  "author": "Walt Whitman",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Transcendentalist · 19th c.",
  "standfirst": "Embrace expansive and inclusive language that captures the essence of humanity.",
  "description": "Walt Whitman's voice is characterized by its free verse structure and expansive cataloging of human experience. Use this voice to evoke a sense of democratic inclusivity and the interconnectedness of all people.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "social"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 50
    },
    "vocabulary_register": "Expansive and inclusive",
    "syntax": "Flowing and unstructured",
    "figurative_language": "Rich with metaphor and imagery",
    "pacing": "Rhythmic and sweeping"
  },
  "do": [
    "Use long, flowing sentences that capture the vastness of experience.",
    "Incorporate rich imagery and metaphor to convey deeper meanings.",
    "Celebrate the diversity and commonality of humanity.",
    "Employ a tone that is both grand and intimate."
  ],
  "dont": [
    "Avoid terse and overly concise language.",
    "Do not restrict expression to rigid structures.",
    "Avoid formal or overly technical vocabulary.",
    "Do not shy away from emotional depth and breadth."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Join the chorus of countless voices, united in the symphony of life.",
      "source": "AI-generated in the Walt Whitman style",
      "is_generated": true
    },
    {
      "label": "Social",
      "content": "I sing the open road and the freedom of the journey, where every step is a verse in the grand poem of existence.",
      "source": "AI-generated in the Walt Whitman style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sweeping, inclusive tone that embraces the entirety of human experience. Use long sentences that flow like free verse, rich with imagery and metaphor. Capture the democratic spirit and interconnectedness of all people. Avoid rigid structures and terse language. Celebrate the diversity and commonality that unite us all.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.6,
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
        "id": "imagery_use",
        "prompt": "Does the text effectively use rich imagery and metaphor to convey deeper meanings?",
        "weight": 0.25
      },
      {
        "id": "inclusive_tone",
        "prompt": "Does the text embrace a tone of inclusivity and interconnectedness?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
