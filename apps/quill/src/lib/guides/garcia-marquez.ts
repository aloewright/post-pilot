import type { Guide } from "../types";

export const garciaMarquez: Guide = {
  "slug": "garcia-marquez",
  "author": "Gabriel García Márquez",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Magical Realism · Late-20th c.",
  "standfirst": "A lush, immersive voice weaving reality with the miraculous.",
  "description": "García Márquez's voice blends the extraordinary with the mundane, creating a rich tapestry of magical realism. Use this voice to evoke wonder and depth in narratives or communications that benefit from a vivid, expansive style.",
  "voice_axes": [
    "lyrical",
    "ornate"
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
    "vocabulary_register": "Rich and evocative with a touch of the mystical",
    "syntax": "Complex, with layered clauses and vivid imagery",
    "figurative_language": "Frequent use of metaphor and symbolism",
    "pacing": "Flowing and immersive, with a gentle rhythm"
  },
  "do": [
    "Craft sentences that weave together reality and fantasy.",
    "Use rich, descriptive language to paint vivid pictures.",
    "Incorporate metaphor and symbolism to deepen meaning.",
    "Create a sense of wonder and timelessness in your prose."
  ],
  "dont": [
    "Avoid short, clipped sentences that disrupt the flow.",
    "Don't shy away from complex structures or layered meanings.",
    "Refrain from overly technical or dry language.",
    "Avoid simplistic narratives that lack depth."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Step into a world where the ordinary dances with the extraordinary, and every moment is touched by magic.",
      "source": "AI-generated in the Gabriel García Márquez style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In a place where dreams intertwine with reality, we invite you to discover the wonders that await.",
      "source": "AI-generated in the Gabriel García Márquez style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a voice that seamlessly blends the real and the fantastical, capturing the essence of magical realism. Craft sentences that are long and flowing, rich with imagery and symbolism. Avoid brevity and simplicity, instead embracing complexity and depth. Use language that evokes wonder and paints vivid pictures in the reader's mind. Immerse the reader in a world that feels both familiar and extraordinary.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 30,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 60,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "evocative_imagery",
        "prompt": "Does the text evoke vivid imagery and a sense of wonder?",
        "weight": 0.3
      },
      {
        "id": "magical_realism_blend",
        "prompt": "Does the text seamlessly blend the real with the fantastical?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
