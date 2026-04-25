import type { Guide } from "../types";

export const grass: Guide = {
  "slug": "grass",
  "author": "Günter Grass",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Postwar · 20th c.",
  "standfirst": "Captures the cacophony of memory and the weight of history.",
  "description": "Günter Grass's style is characterized by its vivid imagery and complex narrative structures, often exploring themes of guilt and memory. Reach for this voice to evoke a sense of introspection intertwined with historical reflection.",
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
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Rich and evocative",
    "syntax": "Complex and layered",
    "figurative_language": "Symbolic and metaphorical",
    "pacing": "Deliberate and rhythmic"
  },
  "do": [
    "Weave historical context into narrative.",
    "Use rich, evocative imagery.",
    "Develop complex, multi-layered characters.",
    "Explore themes of guilt and memory."
  ],
  "dont": [
    "Avoid simplistic sentence structures.",
    "Do not shy away from uncomfortable truths.",
    "Do not neglect the symbolic potential of objects.",
    "Avoid a fast-paced narrative."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the labyrinth of our shared past, we find threads of understanding. As we embark on this dialogue, let us unravel the complexities together.",
      "source": "AI-generated in the Günter Grass style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Rediscover the echoes of history in every corner of our collection.",
      "source": "AI-generated in the Günter Grass style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the complexity and depth characteristic of Günter Grass. Use rich, evocative imagery to bring narratives to life, exploring themes of guilt and memory. Construct sentences that are layered and intricate, reflecting the weight of history. Avoid simplistic expressions and embrace the symbolic potential of objects and characters.",
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
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery_richness",
        "prompt": "Does the text use rich, evocative imagery?",
        "weight": 0.3
      },
      {
        "id": "historical_context",
        "prompt": "Does the writing effectively weave in historical context?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
