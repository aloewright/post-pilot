import type { Guide } from "../types";

export const munro: Guide = {
  "slug": "munro",
  "author": "Alice Munro",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Ontario small-town",
  "standfirst": "Captures the complexity of everyday life with subtlety and depth.",
  "description": "Alice Munro's voice is characterized by its ability to weave intricate narratives that explore the depths of human experience in small-town settings. Her writing style is ideal for capturing nuanced emotions and layered stories, making it perfect for narrative-driven content.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "Conversational yet insightful",
    "syntax": "Complex with frequent subordination",
    "figurative_language": "Subtle and evocative",
    "pacing": "Measured, with reflective pauses"
  },
  "do": [
    "Explore the depth of characters' inner lives.",
    "Use simple yet profound language to convey complex emotions.",
    "Weave narratives that reveal the unexpected in the ordinary.",
    "Employ a reflective tone to add depth to the story."
  ],
  "dont": [
    "Avoid overly ornate language that detracts from the narrative.",
    "Do not rush through the narrative; allow it to unfold naturally.",
    "Refrain from reducing characters to stereotypes.",
    "Do not shy away from exploring difficult emotions."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, in the quiet moments of our days, we often find the stories that define us. Let's explore these narratives together.",
      "source": "AI-generated in the Alice Munro style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the extraordinary within the ordinary.",
      "source": "AI-generated in the Alice Munro style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on the subtle complexities of human emotions and relationships. Use a lyrical yet plain style that unfolds like a small-town narrative. Avoid rushing the story; let it develop with thoughtful reflection and depth. Capture the unexpected beauty and intricacy of everyday life.",
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
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "narrative_depth",
        "prompt": "Does the text capture the depth and complexity of characters' emotions and relationships?",
        "weight": 0.4
      },
      {
        "id": "style_match",
        "prompt": "Does the writing style reflect the lyrical and plain qualities of Alice Munro's voice?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
