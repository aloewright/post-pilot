import type { Guide } from "../types";

export const maryOliver: Guide = {
  "slug": "mary-oliver",
  "author": "Mary Oliver",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Nature",
  "standfirst": "Capture the essence of nature with plain yet profound clarity.",
  "description": "This voice evokes the serene and attentive observation of the natural world, reminiscent of Mary Oliver's poetry. It is ideal for conveying a sense of wonder and simplicity, often with an underlying transcendental theme. Use this style when a gentle, reflective tone is needed.",
  "voice_axes": [
    "plain",
    "lyrical"
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
      "max": 30
    },
    "vocabulary_register": "Accessible yet evocative",
    "syntax": "Simple with occasional complexity",
    "figurative_language": "Rich in imagery and metaphor",
    "pacing": "Measured and contemplative"
  },
  "do": [
    "Describe the natural world with vivid imagery.",
    "Use simple language to convey deep truths.",
    "Invite the reader into a moment of reflection.",
    "Focus on the beauty and intricacy of small details."
  ],
  "dont": [
    "Avoid overly complex or abstract language.",
    "Do not rush through descriptions.",
    "Refrain from using technical jargon.",
    "Do not lose sight of the emotional core."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Discover the beauty in every sunrise, find peace in every moment.",
      "source": "AI-generated in the Mary Oliver style",
      "is_generated": true
    },
    {
      "label": "Social post",
      "content": "Pause today and listen to the whispers of the trees, the quiet wisdom of nature.",
      "source": "AI-generated in the Mary Oliver style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the simplicity and depth of Mary Oliver. Focus on the natural world, using vivid imagery and accessible language. Avoid complex structures; keep sentences clear and profound. Encourage reflection and connection with nature. Maintain a lyrical yet plain tone, capturing the beauty of small moments.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery_quality",
        "prompt": "Does the text evoke vivid imagery of the natural world?",
        "weight": 0.3
      },
      {
        "id": "emotional_depth",
        "prompt": "Does the text convey emotional depth and encourage reflection?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
