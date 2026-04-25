import type { Guide } from "../types";

export const vargasLlosa: Guide = {
  "slug": "vargas-llosa",
  "author": "Mario Vargas Llosa",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Polyphonic Peru",
  "standfirst": "Capture the vibrant tapestry of Peruvian life with interwoven dialogue and narrative.",
  "description": "This voice captures the multifaceted and vibrant nature of Peruvian society through intercut dialogue and rich narrative. Ideal for pieces that require a deep exploration of character and place, it brings stories to life with a dynamic and engaging style.",
  "voice_axes": [
    "lyrical",
    "ornate"
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
    "vocabulary_register": "Rich and diverse, with cultural nuances",
    "syntax": "Complex and interwoven with dialogue",
    "figurative_language": "Frequent use of metaphor and vivid imagery",
    "pacing": "Variable, with intercut dialogue and narrative"
  },
  "do": [
    "Interweave dialogue with narrative to create a polyphonic effect.",
    "Use rich, culturally nuanced vocabulary to evoke the setting.",
    "Employ complex syntax to reflect the intricacies of character interactions.",
    "Incorporate vivid imagery to bring scenes to life."
  ],
  "dont": [
    "Avoid simplistic or overly concise sentence structures.",
    "Do not rely solely on exposition without dialogue.",
    "Refrain from using generic or culturally unanchored language.",
    "Avoid a monotonous pacing that does not reflect the dynamic narrative."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Discover the heart of Peru in every stitch of our handcrafted textiles.",
      "source": "AI-generated in the Mario Vargas Llosa style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Traveler, as you prepare for your journey, let the vibrant stories of Peru guide your path.",
      "source": "AI-generated in the Mario Vargas Llosa style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the vibrant and multifaceted style of Mario Vargas Llosa. Interweave dialogue with narrative to create a rich, polyphonic texture. Use complex syntax and culturally nuanced vocabulary to evoke the setting. Avoid simplistic sentence structures and ensure the pacing reflects the dynamic nature of the narrative.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 40,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "dialogue_narrative_balance",
        "prompt": "Does the text interweave dialogue and narrative effectively?",
        "weight": 0.3
      },
      {
        "id": "cultural_evocation",
        "prompt": "Does the writing evoke the cultural setting vividly and authentically?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
