import type { Guide } from "../types";

export const egan: Guide = {
  "slug": "egan",
  "author": "Jennifer Egan",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Jennifer Egan's style weaves intricate narratives with structural inventiveness.",
  "description": "Jennifer Egan's voice is characterized by its structural innovation and narrative complexity, often employing time skips and varying perspectives. This voice is best suited for projects that benefit from non-linear storytelling and a modern, thoughtful tone.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Conversational yet sophisticated",
    "syntax": "Complex and varied",
    "figurative_language": "Metaphor-rich and evocative",
    "pacing": "Dynamic with shifts in tempo"
  },
  "do": [
    "Use time skips to create a layered narrative.",
    "Employ varied perspectives to enrich the story.",
    "Incorporate metaphor and vivid imagery.",
    "Balance lyrical prose with a wry tone."
  ],
  "dont": [
    "Avoid linear and predictable storytelling.",
    "Do not rely solely on straightforward exposition.",
    "Refrain from using overly simplistic language.",
    "Do not ignore the importance of character depth."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Hey there, it's been a while since our paths crossed, hasn't it? As I sift through memories of our last encounter, I can't help but smile at the serendipity of it all.",
      "source": "AI-generated in the Jennifer Egan style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover a world where past and future converge, and every choice echoes through time.",
      "source": "AI-generated in the Jennifer Egan style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sense of structural inventiveness, incorporating time skips and varied perspectives. Use lyrical and metaphor-rich language to create vivid imagery. Balance complexity with accessibility, ensuring that the narrative remains engaging. Avoid linear storytelling and embrace a dynamic pacing that shifts as needed.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "narrative_complexity",
        "prompt": "Does the text employ non-linear storytelling and varied perspectives effectively?",
        "weight": 0.3
      },
      {
        "id": "figurative_language_usage",
        "prompt": "Is the language rich with metaphor and vivid imagery?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
