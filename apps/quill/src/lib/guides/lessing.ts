import type { Guide } from "../types";

export const lessing: Guide = {
  "slug": "lessing",
  "author": "Doris Lessing",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Political Realism · Late-20th c.",
  "standfirst": "A voice that explores complex themes with clarity and depth.",
  "description": "Doris Lessing's voice is marked by its incisive exploration of personal and political themes, often through the lens of speculative fiction. Use this voice to delve into intricate subjects with an eye for both the personal and the societal. It is well-suited for narratives that require a grounded yet expansive perspective.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "Moderately elevated with accessible clarity",
    "syntax": "Complex but coherent",
    "figurative_language": "Subtle allegory and metaphor",
    "pacing": "Measured with reflective pauses"
  },
  "do": [
    "Explore themes of identity and society.",
    "Use allegory to deepen narrative impact.",
    "Maintain clarity even in complex discussions.",
    "Engage readers with direct yet thoughtful prose."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from difficult subjects.",
    "Avoid excessive jargon or technical terms.",
    "Do not neglect the emotional depth of characters."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, In light of recent developments, it is crucial we re-examine our strategies to ensure they align with our core values and objectives. Let's convene to discuss these changes and their implications.",
      "source": "AI-generated in the Doris Lessing style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover a world where the personal is political, and every choice shapes the future.",
      "source": "AI-generated in the Doris Lessing style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a voice that captures the depth and clarity of Doris Lessing. Focus on the intersection of personal and political themes, using allegory to enhance the narrative. Ensure your prose is both accessible and thoughtful, avoiding unnecessary complexity. Maintain a reflective tone that invites deeper consideration from the reader.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "theme_depth",
        "prompt": "Does the text explore themes with depth and clarity?",
        "weight": 0.3
      },
      {
        "id": "allegorical_effectiveness",
        "prompt": "Is allegory used effectively to enhance the narrative?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
