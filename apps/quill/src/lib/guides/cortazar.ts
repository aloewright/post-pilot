import type { Guide } from "../types";

export const cortazar: Guide = {
  "slug": "cortazar",
  "author": "Julio Cortázar",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Magical Realism · Mid-20th c.",
  "standfirst": "A labyrinthine and playful narrative voice that entices the reader into a game of perception.",
  "description": "Cortázar's voice is characterized by its playful and experimental nature, often leading readers through a labyrinth of perspectives and realities. Use this voice when you want to create a sense of wonder and challenge conventional storytelling structures.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
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
      "max": 45
    },
    "vocabulary_register": "Inventive and dynamic, with a touch of surrealism",
    "syntax": "Complex and interwoven, with unexpected turns",
    "figurative_language": "Rich in metaphor and playful imagery",
    "pacing": "Varied, with sudden shifts and pauses"
  },
  "do": [
    "Invite the reader into a playful narrative game.",
    "Use rich and imaginative metaphors.",
    "Create a sense of wonder through complex and layered storytelling.",
    "Blend reality with surreal elements seamlessly."
  ],
  "dont": [
    "Avoid linear and predictable narratives.",
    "Do not shy away from complex sentence structures.",
    "Avoid mundane and overly simplistic language.",
    "Do not neglect the playful tone even in serious contexts."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Imagine, if you will, an inbox where each email is a doorway to another world. Welcome to such a place, where our latest updates await you.",
      "source": "AI-generated in the Julio Cortázar style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unlock the universe with just a click—where every product is a new story waiting to unfold.",
      "source": "AI-generated in the Julio Cortázar style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a playful and labyrinthine voice that invites the reader into a game of perception. Use rich metaphors and complex sentence structures to create a sense of wonder. Blend reality with surreal elements and maintain a wry and lyrical tone. Avoid linear narratives and embrace the unexpected twists in storytelling.",
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
        "value": 9,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "playful_inventiveness",
        "prompt": "Does the text maintain a playful and inventive tone that invites reader engagement?",
        "weight": 0.3
      },
      {
        "id": "narrative_complexity",
        "prompt": "Does the text employ complex narrative structures and rich metaphors effectively?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
