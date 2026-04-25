import type { Guide } from "../types";

export const chatwin: Guide = {
  "slug": "chatwin",
  "author": "Bruce Chatwin",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Wandering prose that captures the essence of place through fragmented storytelling.",
  "description": "Bruce Chatwin's style evokes the spirit of travel and exploration, often using fragmented, almost dreamlike prose to convey the essence of a place. Reach for this voice when crafting narratives that require a sense of wonder and discovery, or when documentation needs an evocative touch.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Evocative and descriptive",
    "syntax": "Fragmented and flowing",
    "figurative_language": "Rich with metaphor",
    "pacing": "Meandering yet purposeful"
  },
  "do": [
    "Use vivid imagery to evoke a sense of place.",
    "Incorporate fragments to create a sense of movement.",
    "Embrace a conversational tone that invites the reader in.",
    "Allow the narrative to wander and explore."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not rely on dense technical jargon.",
    "Refrain from strict chronological storytelling.",
    "Do not omit sensory details."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "In the heart of the city, where shadows play on ancient stones, the user finds their way through a labyrinth of features. Each turn reveals a new possibility, a hidden function waiting to be discovered.",
      "source": "AI-generated in the Bruce Chatwin style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the world; uncover your story.",
      "source": "AI-generated in the Bruce Chatwin style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in a style that evokes Bruce Chatwin's travel narratives. Use fragmented storytelling to capture the essence of place. Infuse your writing with lyrical and plain language, employing rich metaphor to draw readers into the journey. Avoid overly complex syntax and maintain a sense of wonder and discovery throughout.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 30,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery",
        "prompt": "Does the text use vivid imagery to evoke a sense of place?",
        "weight": 0.3
      },
      {
        "id": "fragmentation",
        "prompt": "Does the text employ fragmented storytelling effectively?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
