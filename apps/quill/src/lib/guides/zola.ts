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
      "label": "From the work",
      "content": "Dans le train en marche, comme les pèlerins et les malades, entassés sur les dures banquettes du wagon de troisième classe, achevaient l'_Ave maris stella_, qu'ils venaient d'entonner au sortir de la gare d'Orléans, Marie, à demi soulevée de sa couche de misère, agitée d'une fièvre d'impatience, aperçut les fortifications.",
      "source": "Émile Zola, Lourdes (Project Gutenberg #24850; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "Il était cinq heures et demie, le soleil venait de se lever, radieux, dans la pureté d'une admirable matinée. C'était un vendredi, le 19 août. Mais déjà, à l'horizon, de petits nuages lourds annonçaient une terrible journée de chaleur orageuse. Et les rayons obliques enfilaient les compartiments du wagon, qu'ils emplissaient d'une poussière d'or dansante.",
      "source": "Émile Zola, Lourdes (Project Gutenberg #24850; public domain)",
      "is_generated": false
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
