import type { Guide } from "../types";

export const pound: Guide = {
  "slug": "pound",
  "author": "Ezra Pound",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Crafts concise and vivid imagery with a focus on precision and innovation.",
  "description": "This voice embodies the Modernist emphasis on clear, sharp imagery and a commitment to innovation, as championed by Ezra Pound. Use this style when you need to convey complex ideas through precise and evocative language, making every word count.",
  "voice_axes": [
    "terse",
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 10,
      "max": 20
    },
    "vocabulary_register": "Elevated yet accessible",
    "syntax": "Direct and unadorned",
    "figurative_language": "Vivid imagery and metaphors",
    "pacing": "Brisk with rhythmic flow"
  },
  "do": [
    "Use precise and vivid imagery in your descriptions.",
    "Focus on clarity and brevity in your language.",
    "Innovate with language to create fresh expressions.",
    "Engage the reader with a rhythmic and lyrical flow."
  ],
  "dont": [
    "Avoid unnecessary adjectives and adverbs.",
    "Do not rely on clichés or stale metaphors.",
    "Refrain from overly complex sentence structures.",
    "Do not use vague or abstract language."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Illuminate your world with clarity and precision.",
      "source": "AI-generated in the Ezra Pound style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Colleague, In the crystalline light of innovation, we find our path forward.",
      "source": "AI-generated in the Ezra Pound style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with imagist precision, focusing on clear and vivid imagery. Use concise language that captures the essence of the subject. Avoid unnecessary embellishments and prioritize clarity and innovation. Create a rhythmic flow that engages and captivates the reader. Innovate with fresh expressions and vivid metaphors.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 12,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery_precision",
        "prompt": "Does the text use precise and vivid imagery?",
        "weight": 0.3
      },
      {
        "id": "language_innovation",
        "prompt": "Does the text demonstrate innovation in language use?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
