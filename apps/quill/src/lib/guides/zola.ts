import type { Guide } from "../types";

export const zola: Guide = {
  "slug": "zola",
  "author": "Émile Zola",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Naturalist · 19th c.",
  "standfirst": "Immerse readers in a vivid, unvarnished depiction of reality.",
  "description": "Zola's voice captures the raw and often harsh realities of life with detailed sensory descriptions. Use this style when conveying a strong sense of place or exploring the depths of human behavior. Ideal for narratives that require a thorough and evocative portrayal of characters and their environments.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 25,
      "max": 50
    },
    "vocabulary_register": "Elevated yet accessible",
    "syntax": "Complex and layered",
    "figurative_language": "Rich with imagery",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Paint vivid pictures with your words.",
    "Use sensory details to evoke strong imagery.",
    "Convey the emotional weight of the scene.",
    "Explore the complexities of human nature."
  ],
  "dont": [
    "Avoid oversimplifying descriptions.",
    "Don't shy away from harsh realities.",
    "Refrain from using sparse language.",
    "Avoid leaving out the sensory experience."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "The factory loomed over the town like a giant, its smokestacks belching dark clouds into the sky. The air was thick with the acrid smell of burning coal, and the ground trembled with the relentless hum of machinery. Workers shuffled in and out, their faces etched with exhaustion and resignation.",
      "source": "AI-generated in the Émile Zola style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Experience the raw beauty of nature, unfettered and unadorned.",
      "source": "AI-generated in the Émile Zola style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with an eye for the detailed and unvarnished truth. Immerse the reader in a world rich with sensory details and complex characters. Avoid oversimplification and embrace the full spectrum of human experience. Use complex syntax to build immersive and layered narratives. Capture the emotional and physical reality of the setting.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
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
        "id": "sensory_vividness",
        "prompt": "Does the text evoke strong sensory imagery?",
        "weight": 0.3
      },
      {
        "id": "complexity_and_depth",
        "prompt": "Does the narrative explore the complexities of human nature and environment?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
