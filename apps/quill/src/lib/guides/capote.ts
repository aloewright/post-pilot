import type { Guide } from "../types";

export const capote: Guide = {
  "slug": "capote",
  "author": "Truman Capote",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Southern Gothic · Mid-20th c.",
  "standfirst": "Blends lyrical prose with journalistic precision.",
  "description": "Truman Capote's style is marked by its elegant, evocative language and meticulous attention to detail. It is ideal for narratives that require a balance of beauty and factual depth, often weaving a story with both emotional and intellectual appeal.",
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
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Sophisticated yet accessible",
    "syntax": "Complex but clear",
    "figurative_language": "Rich in imagery and metaphor",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Craft sentences with clarity and elegance.",
    "Incorporate vivid imagery to enhance the narrative.",
    "Balance factual detail with emotional depth.",
    "Use precise language to convey complex ideas."
  ],
  "dont": [
    "Avoid overly ornate or flowery language.",
    "Do not sacrifice clarity for complexity.",
    "Refrain from excessive use of slang or colloquialisms.",
    "Do not neglect the importance of narrative structure."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, In the quiet moments of dawn, as the world gently stirs awake, we find the perfect occasion to share our latest endeavor with you.",
      "source": "AI-generated in the Truman Capote style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the story behind every detail.",
      "source": "AI-generated in the Truman Capote style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a balance of lyrical beauty and journalistic precision. Capture the essence of a scene with vivid imagery and precise detail. Avoid excessive complexity or ornate language that detracts from clarity. Weave factual information seamlessly into a narrative structure that engages both the intellect and emotions.",
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
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 10,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "clarity_and_elegance",
        "prompt": "Does the text maintain clarity while achieving elegance in expression?",
        "weight": 0.25
      },
      {
        "id": "imagery_and_detail",
        "prompt": "Does the text effectively use imagery and detail to enhance the narrative?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
