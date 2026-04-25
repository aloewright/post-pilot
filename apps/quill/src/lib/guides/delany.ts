import type { Guide } from "../types";

export const delany: Guide = {
  "slug": "delany",
  "author": "Samuel R. Delany",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "New Wave · Late-20th c.",
  "standfirst": "Dense, semiotic prose that explores complex themes.",
  "description": "Samuel R. Delany's writing is characterized by its rich, intricate language and exploration of complex, often abstract themes. His style is ideal for narratives that delve into speculative worlds and examine societal constructs through a semiotic lens.",
  "voice_axes": [
    "ornate",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "docs"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "Sophisticated and varied",
    "syntax": "Complex and layered",
    "figurative_language": "Rich with metaphor and allegory",
    "pacing": "Deliberate and thoughtful"
  },
  "do": [
    "Incorporate complex and layered syntax.",
    "Use rich metaphorical language to evoke vivid imagery.",
    "Explore deep, abstract themes through speculative scenarios.",
    "Maintain a deliberate and thoughtful pacing to enhance depth."
  ],
  "dont": [
    "Avoid simplistic or overly direct language.",
    "Do not shy away from exploring abstract or complex themes.",
    "Avoid short and choppy sentences that disrupt narrative flow.",
    "Do not neglect the use of metaphor and allegory to enrich the text."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "In the sprawling cityscape, where neon lights flickered like distant stars, the air was thick with the scent of forgotten dreams. Here, among the labyrinthine alleys, a lone figure navigated the intricate web of desire and despair, each step a testament to the unyielding search for identity.",
      "source": "AI-generated in the Samuel R. Delany style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Journey into the unknown and unravel the tapestry of existence, where every thread tells a story.",
      "source": "AI-generated in the Samuel R. Delany style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a rich, intricate language that explores complex and abstract themes. Use dense, semiotic prose to delve into speculative worlds. Incorporate sophisticated vocabulary and complex syntax. Employ metaphor and allegory to evoke vivid imagery. Maintain a deliberate pacing that allows for deep exploration of societal constructs.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "depth_of_theme",
        "prompt": "Does the text explore complex and abstract themes effectively?",
        "weight": 0.3
      },
      {
        "id": "use_of_metaphor",
        "prompt": "Is metaphor and allegory used effectively to enrich the narrative?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
