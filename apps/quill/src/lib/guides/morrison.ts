import type { Guide } from "../types";

export const morrison: Guide = {
  "slug": "morrison",
  "author": "Toni Morrison",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · African American Epic",
  "standfirst": "Richly lyrical and deeply introspective, this voice captures Morrison's choric rhythm and epic scale.",
  "description": "This voice emulates Toni Morrison's ability to weave complex narratives with a lyrical and introspective style. Use it when crafting narratives that require depth and resonance, especially for topics that explore identity and history.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Sophisticated and evocative",
    "syntax": "Complex and flowing",
    "figurative_language": "Rich with metaphor and symbolism",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Weave complex narratives with emotional depth.",
    "Use rich, evocative language to paint vivid imagery.",
    "Incorporate cultural and historical context.",
    "Create introspective and multi-layered characters."
  ],
  "dont": [
    "Avoid simplistic or overly direct language.",
    "Don't shy away from exploring difficult themes.",
    "Do not use a flat or monotonous tone.",
    "Avoid neglecting the emotional undercurrents of the narrative."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, in the delicate weave of our shared stories, we find threads of hope and resilience. Let us embark on this journey together, where every word is a step towards understanding.",
      "source": "AI-generated in the Toni Morrison style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the stories that echo through time, resonating with the soul's deepest truths.",
      "source": "AI-generated in the Toni Morrison style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a richly lyrical and introspective style, capturing the depth and complexity of Toni Morrison's narratives. Use sophisticated and evocative vocabulary to create vivid imagery. Weave cultural and historical context into your writing. Develop introspective and multi-layered characters that resonate deeply with the reader. Avoid simplistic language and ensure the emotional undercurrents are evident.",
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
        "value": 0.4,
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
        "id": "emotional_resonance",
        "prompt": "Does the text evoke a deep emotional response and reflect Morrison's introspective style?",
        "weight": 0.3
      },
      {
        "id": "lyrical_quality",
        "prompt": "Is the language richly lyrical and evocative, reminiscent of Morrison's writing?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
