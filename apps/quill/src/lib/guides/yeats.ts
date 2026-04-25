import type { Guide } from "../types";

export const yeats: Guide = {
  "slug": "yeats",
  "author": "W.B. Yeats",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Harness the symbolic power of Yeats' late stripped lyricism.",
  "description": "W.B. Yeats' voice is characterized by symbolic depth and lyrical intensity, often drawing on Celtic mythology and the concept of gyres. Use this voice when seeking a poetic and evocative style that conveys profound themes with clarity. It is ideal for creating content that requires both emotional weight and intellectual resonance.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 40
    },
    "vocabulary_register": "Elevated yet accessible",
    "syntax": "Complex with rhythmic variation",
    "figurative_language": "Rich in symbolism and metaphor",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Incorporate symbolic imagery to evoke deeper meanings.",
    "Use rhythmic and lyrical language to enhance emotional impact.",
    "Draw on mythological and historical references to enrich the narrative.",
    "Craft sentences that balance complexity with clarity."
  ],
  "dont": [
    "Avoid overly simplistic language that lacks depth.",
    "Do not ignore the potential for symbolic resonance.",
    "Refrain from using a monotonous or flat tone.",
    "Do not shy away from exploring profound themes."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Embrace the dance of time and tradition; let your story unfold in layers.",
      "source": "AI-generated in the W.B. Yeats style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In the spirals of our shared journey, we find a moment to reconnect.",
      "source": "AI-generated in the W.B. Yeats style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the symbolic richness and lyrical intensity of W.B. Yeats. Use evocative imagery and mythological references to convey profound themes. Balance ornate language with clear expression. Avoid simplistic phrasing and embrace the complexity of ideas. Let your sentences flow with rhythmic cadence and deliberate pacing.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 15,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "symbolic_resonance",
        "prompt": "Does the writing effectively use symbolism to convey deeper meanings?",
        "weight": 0.3
      },
      {
        "id": "lyrical_quality",
        "prompt": "Does the text maintain a lyrical and rhythmic quality throughout?",
        "weight": 0.25
      },
      {
        "id": "mythological_references",
        "prompt": "Are mythological and historical references used effectively to enrich the narrative?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
