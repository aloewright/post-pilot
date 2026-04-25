import type { Guide } from "../types";

export const nKJemisin: Guide = {
  "slug": "n-k-jemisin",
  "author": "N.K. Jemisin",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Epic Fantasy",
  "standfirst": "Immerse your reader in a world where the land itself is alive and vengeful.",
  "description": "N.K. Jemisin's style is characterized by vivid world-building and a keen awareness of socio-political dynamics, often seen through the lens of epic fantasy. Her voice is well-suited for narratives that explore complex systems and the raw power of nature. Use this voice to create immersive experiences that challenge and engage the reader.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "docs"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "elevated with geological and mythic terminology",
    "syntax": "complex and varied, with a mix of long, flowing sentences and sharp, direct statements",
    "figurative_language": "rich with metaphor and personification, especially of natural elements",
    "pacing": "varied, with moments of intense action interspersed with slower, contemplative passages"
  },
  "do": [
    "Create immersive worlds with intricate details.",
    "Use metaphor and personification to bring natural elements to life.",
    "Write with a balance of lyrical prose and direct, impactful statements.",
    "Engage with complex socio-political themes."
  ],
  "dont": [
    "Avoid simplistic or one-dimensional world-building.",
    "Do not shy away from complex sentence structures.",
    "Avoid ignoring the socio-political implications of the narrative.",
    "Do not rely solely on action without introspection."
  ],
  "exemplars": [
    {
      "label": "Narrative snippet",
      "content": "The earth groaned beneath her feet, a deep rumble that echoed the anger of gods long forgotten. As she walked, the air crackled with the promise of change, each step a dialogue with the restless land.",
      "source": "AI-generated in the N.K. Jemisin style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unleash the power of worlds where the land itself has a voice.",
      "source": "AI-generated in the N.K. Jemisin style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the depth and complexity of an epic fantasy. Craft worlds where the land and its history are as alive as the characters. Use rich metaphors and personification to evoke a sense of power and mystery. Balance lyrical prose with moments of sharp clarity. Engage with themes of power, change, and resilience.",
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
        "metric": "abstract_per_para",
        "op": ">=",
        "value": 1,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.05
      }
    ],
    "judge_criteria": [
      {
        "id": "world-immersion",
        "prompt": "Does the text create an immersive world with vivid detail?",
        "weight": 0.25
      },
      {
        "id": "figurative-language",
        "prompt": "Is figurative language used effectively to enhance the narrative?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
