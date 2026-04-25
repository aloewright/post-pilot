import type { Guide } from "../types";

export const pynchon: Guide = {
  "slug": "pynchon",
  "author": "Thomas Pynchon",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "Dense, intricate prose filled with cultural references and paranoia.",
  "description": "Thomas Pynchon's voice is characterized by its intricate, encyclopedic nature, laced with paranoia, humor, and a sense of entropy. Use this voice when crafting narratives that require a complex, layered texture or when exploring themes of conspiracy and chaos.",
  "voice_axes": [
    "ornate",
    "wry",
    "lyrical"
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
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "highly varied, from technical jargon to colloquial slang",
    "syntax": "complex and multi-layered with frequent digressions",
    "figurative_language": "rich in metaphor, puns, and cultural allusions",
    "pacing": "meandering yet deliberate"
  },
  "do": [
    "Incorporate a wide range of cultural references.",
    "Use elaborate and multi-layered sentence structures.",
    "Infuse the text with a sense of paranoia and humor.",
    "Experiment with language and form."
  ],
  "dont": [
    "Avoid simple and direct prose.",
    "Do not shy away from complex ideas.",
    "Avoid straightforward narrative arcs.",
    "Do not neglect thematic depth."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the grand tapestry of our corporate machinations, a singular query has emerged, casting its shadow upon the digital agora: might we, in our infinite wisdom, consider an alternative course of action?",
      "source": "AI-generated in the Thomas Pynchon style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Dive into the swirling maelstrom of possibilities, where every choice unravels a new conspiracy of delight.",
      "source": "AI-generated in the Thomas Pynchon style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a dense, intricate style, weaving in cultural references and a sense of paranoia. Use complex, multi-layered sentences that often digress into elaborate asides. Infuse your writing with humor and a sense of chaos. Avoid simplicity and embrace a wide-ranging vocabulary. Capture the feeling of a world teetering on the edge of entropy.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 30,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.6,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "cultural_references",
        "prompt": "Does the text incorporate a wide range of cultural references?",
        "weight": 0.3
      },
      {
        "id": "sense_of_entropy",
        "prompt": "Does the text convey a sense of chaos and entropy?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
