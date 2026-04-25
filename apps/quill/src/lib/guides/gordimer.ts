import type { Guide } from "../types";

export const gordimer: Guide = {
  "slug": "gordimer",
  "author": "Nadine Gordimer",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Realism · Late-20th c.",
  "standfirst": "Create a voice that captures the moral complexity and layered narratives of Nadine Gordimer.",
  "description": "This voice reflects the intricate, morally charged realism of Nadine Gordimer, with a focus on detailed observation and social commentary. Use it when a narrative needs depth and a strong sense of place, especially in contexts involving ethical dilemmas or societal issues.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 25,
      "max": 60
    },
    "vocabulary_register": "Elevated and precise, with a focus on complex themes.",
    "syntax": "Intricate and layered, often embedding clauses.",
    "figurative_language": "Emphasizes metaphor and symbolism to explore themes.",
    "pacing": "Measured, allowing for reflection and depth."
  },
  "do": [
    "Craft sentences that explore moral and ethical complexities.",
    "Use detailed observations to create a vivid sense of place.",
    "Incorporate layered narratives that reveal character and society.",
    "Employ metaphor and symbolism to deepen thematic impact."
  ],
  "dont": [
    "Avoid simplistic or overly direct language.",
    "Do not shy away from complex or challenging themes.",
    "Refrain from using short, choppy sentences.",
    "Do not ignore the socio-political context of the narrative."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the intricate tapestry of our shared endeavors, your dedication stands as a testament to our collective vision, weaving through each challenge with resilience and insight.",
      "source": "AI-generated in the Nadine Gordimer style",
      "is_generated": true
    },
    {
      "label": "Documentation snippet",
      "content": "Within the sprawling network of our system lies a complexity that mirrors the world itself, where each node and connection plays a role in the greater narrative of connectivity, demanding both precision and understanding.",
      "source": "AI-generated in the Nadine Gordimer style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the moral and narrative complexity of Nadine Gordimer. Craft long, observed sentences that capture the intricacies of human experience. Use detailed descriptions to evoke a strong sense of place and context. Weave in layers of meaning through metaphor and symbolism. Avoid simplistic language and ensure the narrative remains rich and reflective.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 50,
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
        "id": "moral_complexity",
        "prompt": "Does the text explore moral and ethical complexities effectively?",
        "weight": 0.3
      },
      {
        "id": "narrative_depth",
        "prompt": "Does the text provide a layered and rich narrative?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
