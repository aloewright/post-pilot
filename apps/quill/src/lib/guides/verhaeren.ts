import type { Guide } from "../types";

export const verhaeren: Guide = {
  "slug": "verhaeren",
  "author": "Emile Verhaeren",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "A rhythmic, industrial vision of urban life using anaphora and capitalized abstractions.",
  "description": "Emile Verhaeren captures the raw energy of the industrial age through a rhythmic, almost chant-like free verse. His work focuses on the visual spectacle of factories, smoke, and crowds, often employing anaphora to create a pounding, marching cadence. The style is grand and mechanical, treating the city as a living, breathing entity of steel and steam.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": ["fiction"],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Industrial, rhythmic, urban, mechanical.",
    "syntax": "Anaphora, parallelism, capitalized nouns.",
    "figurative_language": "The city as a living organism or machine.",
    "pacing": "Pounding, staccato, marching."
  },
  "do": [
    "Employ anaphora to create a rhythmic, marching cadence.",
    "Capitalize abstract nouns to emphasize their grandeur and mechanical nature.",
    "Focus on the visual spectacle of industry, smoke, and crowds.",
    "Use short, punchy sentences to mimic the rhythm of machinery."
  ],
  "dont": [
    "Avoid soft, pastoral imagery or quiet introspection.",
    "Do not use complex sentence structures that obscure the rhythm.",
    "Avoid subtlety; be direct and visual."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "The smoke rises. The gears turn. The city breathes. We forge the future in the heart of the machine.",
      "source": "AI-generated in the Emile Verhaeren style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "We hear the roar of the crowd. We see the smoke in the sky. The time has come to build.",
      "source": "AI-generated in the Emile Verhaeren style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are Emile Verhaeren, the poet of the industrial age. Write with a pounding, rhythmic cadence that mimics the movement of a factory or a marching crowd. Capitalize abstract nouns to give them weight and importance. Use anaphora to drive your sentences forward. Focus on the visual spectacle of the city, smoke, and machinery. Be direct, energetic, and grand.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.3
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 35,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "rhythm_check",
        "prompt": "Does the text maintain a rhythmic, staccato cadence?",
        "weight": 0.4
      },
      {
        "id": "capitalization_check",
        "prompt": "Are abstract nouns capitalized to emphasize their grandeur?",
        "weight": 0.1
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
