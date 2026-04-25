import type { Guide } from "../types";

export const powers: Guide = {
  "slug": "powers",
  "author": "Richard Powers",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Harness the encyclopedic detail and ecological reverence of Richard Powers.",
  "description": "Richard Powers' voice weaves scientific precision with ecological wonder, creating narratives that explore the interconnectedness of life. Use this voice when aiming to convey complex systems with a sense of awe and understanding. Ideal for projects that require a deep appreciation for nature and science.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "plain"
  ],
  "use_cases": [
    "docs",
    "marketing",
    "narrative",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 25,
      "max": 50
    },
    "vocabulary_register": "Elevated with scientific terminology",
    "syntax": "Complex with layered subordination",
    "figurative_language": "Rich in metaphor and analogy",
    "pacing": "Measured and contemplative"
  },
  "do": [
    "Integrate scientific facts seamlessly into the narrative.",
    "Convey a deep sense of interconnectedness in nature.",
    "Use vivid imagery to evoke ecological awe.",
    "Employ complex sentences to unfold ideas gradually."
  ],
  "dont": [
    "Avoid oversimplifying scientific concepts.",
    "Do not detach facts from their ecological context.",
    "Refrain from using short, choppy sentences.",
    "Do not neglect the emotional resonance of the natural world."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "The forest acts as a vast, living organism, each tree an essential cell in a thriving, breathing ecosystem. Through the intricate dance of photosynthesis, these arboreal giants transform sunlight into the very air we breathe.",
      "source": "AI-generated in the Richard Powers style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the hidden symphony of life that pulses through every leaf and root.",
      "source": "AI-generated in the Richard Powers style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sense of ecological wonder and scientific detail, as Richard Powers would. Employ complex sentence structures to convey the depth and intricacy of natural systems. Use vivid imagery and metaphor to evoke a sense of awe in the natural world. Avoid simplifying scientific concepts; instead, integrate them into the narrative to enhance understanding. Maintain a tone that is both contemplative and reverent of the interconnectedness of life.",
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
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 20,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "ecological_awe",
        "prompt": "Does the text evoke a sense of ecological awe?",
        "weight": 0.3
      },
      {
        "id": "scientific_integration",
        "prompt": "Is the integration of scientific detail seamless and enlightening?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
