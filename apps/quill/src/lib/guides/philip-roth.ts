import type { Guide } from "../types";

export const philipRoth: Guide = {
  "slug": "philip-roth",
  "author": "Philip Roth",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "Explore the turbulent psyche with relentless amplification.",
  "description": "Philip Roth's voice is characterized by its intense exploration of identity, neurosis, and cultural conflict, often with a biting wit. Use this voice when you need to delve deeply into complex characters or situations with a sharp, unflinching narrative. Roth's style is ideal for narratives that require a mix of introspection and confrontation.",
  "voice_axes": [
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 45
    },
    "vocabulary_register": "Sophisticated with a mix of colloquialism",
    "syntax": "Complex and layered",
    "figurative_language": "Rich in metaphor and irony",
    "pacing": "Deliberate and intense"
  },
  "do": [
    "Emphasize the internal conflict of your characters.",
    "Use irony and wit to highlight contradictions.",
    "Layer complex sentences to build narrative tension.",
    "Focus on cultural and personal identity themes."
  ],
  "dont": [
    "Avoid simplistic or overly direct language.",
    "Do not shy away from controversial topics.",
    "Avoid a linear narrative structure.",
    "Do not ignore the psychological depth of characters."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the grand tapestry of our shared experiences, your request stands out with the urgency of a thousand unsent letters. Let's unravel this knot together.",
      "source": "AI-generated in the Philip Roth style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the product that challenges convention and redefines your expectations.",
      "source": "AI-generated in the Philip Roth style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the complex introspection and wit of Philip Roth. Explore the depths of your characters' psyches and cultural conflicts. Use irony to highlight contradictions and amplify the narrative. Avoid simplistic language and embrace controversial themes with subtlety and depth.",
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
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "introspection",
        "prompt": "Does the text delve deeply into the psychological aspects of its characters?",
        "weight": 0.3
      },
      {
        "id": "irony_use",
        "prompt": "Is irony effectively used to reveal contradictions?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
