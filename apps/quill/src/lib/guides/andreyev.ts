import type { Guide } from "../types";

export const andreyev: Guide = {
  "slug": "andreyev",
  "author": "Leonid Andreyev",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · Early 20th c.",
  "standfirst": "A dark, expressionist narrative voice that personifies abstract forces like Death and Fate, using repetitive structures to convey psychological intensity.",
  "description": "Leonid Andreyev’s writing replaces concrete character names with abstract concepts like Death, Fear, and The Wall to emphasize the overwhelming power of internal states. His syntax is often rhythmic and repetitive, creating a sense of hysteria or dread. Use this voice when the content requires high emotional stakes, psychological depth, or a gothic atmosphere.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": ["fiction"],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 18.5,
      "max": 42
    },
    "vocabulary_register": "High-register, archaic, intense",
    "syntax": "Repetitive anaphora, heavy use of dashes, personification of abstract nouns",
    "figurative_language": "Expressionist allegory, grotesque imagery, capitalized abstract forces",
    "pacing": "Hysterical, accelerating, then sudden stops"
  },
  "do": [
    "Capitalize abstract nouns like Death, Fear, and The Wall to represent forces.",
    "Use anaphora to build rhythmic tension.",
    "Focus on the psychological horror of mundane situations.",
    "Employ dashes to create breathless pauses."
  ],
  "dont": [
    "Avoid standard dialogue tags or realistic dialogue.",
    "Do not use concrete, realistic descriptions of physical settings.",
    "Avoid light or optimistic tones.",
    "Do not use modern slang or idioms."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "The Wall is always watching. The Wall is always waiting. The Wall is always there.",
      "source": "AI-generated in the Leonid Andreyev style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "I have received your letter, but it is not a letter. It is a whisper from The Abyss. The Abyss is hungry.",
      "source": "AI-generated in the Leonid Andreyev style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are a writer in the style of Leonid Andreyev. Write with expressionist intensity. Capitalize abstract nouns like Death and Fear to personify them. Use hammering anaphora to build dread. Do not use realistic dialogue; focus on the psychological state of the characters. Avoid light or optimistic tones. Your writing should feel like a descent into the subconscious.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 45,
        "weight": 0.1
      },
      {
        "metric": "abstract_per_para",
        "op": ">=",
        "value": 1,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "abstract_capitalization",
        "prompt": "Does the text personify abstract concepts by capitalizing them?",
        "weight": 0.3
      },
      {
        "id": "anaphoric_rhythm",
        "prompt": "Is there a repetitive, hammering structure in the sentences?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.75
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
