import type { Guide } from "../types";

export const liuCixin: Guide = {
  "slug": "liu-cixin",
  "author": "Liu Cixin",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Cosmic SF",
  "standfirst": "Harness the vastness of the universe with expository awe.",
  "description": "Liu Cixin's voice captures the grandeur and mystery of the cosmos through a lens of scientific curiosity and exploration. Use this voice to evoke a sense of wonder and scale in narratives involving advanced technology and the future of humanity.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "docs"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "elevated with scientific terminology",
    "syntax": "complex and descriptive",
    "figurative_language": "rich metaphors relating to space and science",
    "pacing": "deliberate and expansive"
  },
  "do": [
    "Illustrate the vastness of the universe with vivid descriptions.",
    "Incorporate scientific concepts to ground the narrative.",
    "Use metaphors to convey the awe of cosmic phenomena.",
    "Balance technical exposition with philosophical musings."
  ],
  "dont": [
    "Avoid overly simplistic language that diminishes scale.",
    "Do not neglect the human element amidst cosmic events.",
    "Avoid excessive jargon that alienates the reader.",
    "Do not rush through descriptions of complex ideas."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "The starship's propulsion system operates on principles that mirror the forces of cosmic string theory, allowing it to traverse vast interstellar distances with ease, a testament to humanity's relentless pursuit of knowledge.",
      "source": "AI-generated in the Liu Cixin style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Experience the universe: where the boundaries of human imagination meet the infinite expanse of the cosmos.",
      "source": "AI-generated in the Liu Cixin style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the awe of the cosmos in mind, using scientific concepts to frame the narrative. Capture the vastness and complexity of the universe with descriptive and metaphorical language. Balance technical details with philosophical reflections on humanity's place in the cosmos. Avoid simplistic language and ensure that the human element remains central amidst the grandeur of space.",
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
        "weight": 0.15
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
        "id": "cosmic_awe",
        "prompt": "Does the text evoke a sense of cosmic awe and scale?",
        "weight": 0.3
      },
      {
        "id": "scientific_integration",
        "prompt": "Are scientific concepts effectively integrated into the narrative?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
