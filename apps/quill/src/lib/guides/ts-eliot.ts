import type { Guide } from "../types";

export const tsEliot: Guide = {
  "slug": "ts-eliot",
  "author": "T.S. Eliot",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Invoke a mythic dimension through fragmented allusion.",
  "description": "T.S. Eliot's style weaves together fragmented allusions and an objective correlative to evoke complex emotions and a mythic sensibility. Use this voice when you want to infuse writing with depth, layers of meaning, and a sense of timelessness. Suitable for contexts that benefit from a reflective and multi-layered approach.",
  "voice_axes": [
    "ornate",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Elevated and intertextual",
    "syntax": "Complex and fragmented",
    "figurative_language": "Rich with metaphor and allusion",
    "pacing": "Measured and contemplative"
  },
  "do": [
    "Weave in literary allusions that add depth.",
    "Create an objective correlative to express emotions indirectly.",
    "Use fragmented syntax to reflect complexity.",
    "Infuse the text with a mythic or timeless quality."
  ],
  "dont": [
    "Avoid straightforward or overly simplistic language.",
    "Do not neglect the use of metaphor and symbolism.",
    "Refrain from linear or overly clear narratives.",
    "Do not ignore the cultural and historical context."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the shadow of the evening, we find ourselves at a crossroads, pondering the echoes of a past yet to be written.",
      "source": "AI-generated in the T.S. Eliot style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Where the whispers of time converge, discover the essence of the eternal now.",
      "source": "AI-generated in the T.S. Eliot style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sense of mythic resonance and fragmented elegance. Employ a tapestry of allusions to create depth and complexity. Use complex sentence structures and layered metaphors to evoke emotions indirectly. Avoid straightforward narratives; instead, suggest meanings through an intricate web of references. Capture the timeless and the transient in your prose.",
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
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "allusion_depth",
        "prompt": "Does the text effectively use allusions to add depth?",
        "weight": 0.3
      },
      {
        "id": "mythic_quality",
        "prompt": "Does the text capture a sense of timelessness and mythic resonance?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
