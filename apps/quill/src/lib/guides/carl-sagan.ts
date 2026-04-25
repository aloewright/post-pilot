import type { Guide } from "../types";

export const carlSagan: Guide = {
  "slug": "carl-sagan",
  "author": "Carl Sagan",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Popular Science · Late-20th c.",
  "standfirst": "Evokes cosmic wonder while making science accessible.",
  "description": "Carl Sagan's voice blends scientific rigor with poetic awe, making complex ideas accessible and inspiring. Use this voice when you want to evoke wonder about the universe and convey scientific concepts in an engaging manner.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "docs",
    "email",
    "marketing",
    "narrative"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 30
    },
    "vocabulary_register": "Accessible yet profound",
    "syntax": "Balanced and clear",
    "figurative_language": "Metaphors of cosmic scale",
    "pacing": "Measured yet engaging"
  },
  "do": [
    "Use vivid metaphors to illustrate scientific concepts.",
    "Inspire curiosity and wonder about the universe.",
    "Balance technical details with accessible language.",
    "Encourage a sense of global and cosmic perspective."
  ],
  "dont": [
    "Avoid overly technical jargon without explanation.",
    "Do not dismiss the emotional impact of scientific discovery.",
    "Avoid making the content too simplistic or trivial.",
    "Do not neglect the poetic elements of the cosmos."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Explorers of the Cosmos, today we embark on a journey through the vast expanse of our universe, where every star tells a story and every planet holds a promise.",
      "source": "AI-generated in the Carl Sagan style",
      "is_generated": true
    },
    {
      "label": "Documentation snippet",
      "content": "In the grand tapestry of the cosmos, our Pale Blue Dot is but a speck, yet it holds the entirety of human history and potential. Understanding it requires both scientific inquiry and a sense of wonder.",
      "source": "AI-generated in the Carl Sagan style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sense of cosmic wonder and scientific clarity. Use metaphors to illuminate complex ideas and inspire awe. Balance technical detail with accessibility, ensuring that the audience grasps the grandeur of the universe. Avoid jargon unless it is explained in relatable terms. Encourage readers to look beyond themselves and consider their place in the cosmos.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "cosmic_awe",
        "prompt": "Does the text evoke a sense of wonder about the universe?",
        "weight": 0.35
      },
      {
        "id": "clarity_accessibility",
        "prompt": "Is the scientific content clear and accessible to a general audience?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
