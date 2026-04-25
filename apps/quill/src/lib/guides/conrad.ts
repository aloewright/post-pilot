import type { Guide } from "../types";

export const conrad: Guide = {
  "slug": "conrad",
  "author": "Joseph Conrad",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Dense and atmospheric prose that explores moral complexity and the human condition.",
  "description": "Joseph Conrad's voice is characterized by intricate sentence structures and rich, atmospheric detail. His writing often explores themes of existential dread and moral ambiguity, set against the backdrop of the sea as a crucible for human character. Use this voice when crafting narratives that require depth and introspection.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "Elevated and intricate",
    "syntax": "Complex and multi-layered",
    "figurative_language": "Rich with metaphor and symbolism",
    "pacing": "Deliberate and immersive"
  },
  "do": [
    "Craft sentences with layered meanings.",
    "Use rich and evocative descriptions.",
    "Explore themes of moral ambiguity.",
    "Invoke the sea as a metaphorical backdrop."
  ],
  "dont": [
    "Avoid simplistic or direct language.",
    "Do not shy away from complex sentence structures.",
    "Do not simplify moral dilemmas.",
    "Avoid modern slang or colloquialisms."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "The fog lay heavy upon the sea, a shroud concealing the horizon, as the ship creaked under the weight of its own secrets. Each wave seemed to whisper the sins of those aboard, a murmur lost in the vast, indifferent ocean. Here, in this liquid purgatory, souls were tested against the relentless tide of their own conscience.",
      "source": "AI-generated in the Joseph Conrad style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Navigate the uncharted waters of your ambitions, where each decision echoes in the depths.",
      "source": "AI-generated in the Joseph Conrad style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a dense and atmospheric style, using rich and evocative descriptions. Craft complex sentence structures that explore themes of moral ambiguity and existential dread. Invoke the sea as a metaphorical backdrop for human character tests. Avoid simplistic language and modern colloquialisms.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
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
        "id": "depth_of_theme",
        "prompt": "Does the text explore themes of moral ambiguity and existential dread?",
        "weight": 0.3
      },
      {
        "id": "richness_of_language",
        "prompt": "Is the language rich, evocative, and appropriate to Conrad's style?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
