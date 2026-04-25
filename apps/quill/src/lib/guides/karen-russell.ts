import type { Guide } from "../types";

export const karenRussell: Guide = {
  "slug": "karen-russell",
  "author": "Karen Russell",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Floridian Magical-Realist",
  "standfirst": "Dive into a lush tapestry of imagery and surreal landscapes.",
  "description": "Karen Russell's voice enlivens narratives with vibrant, otherworldly imagery, often blending the magical with the mundane. Her style is ideal for creating immersive experiences and exploring the boundaries of reality. Reach for this voice when crafting narratives that require a touch of enchantment and vivid detail.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "rich and evocative",
    "syntax": "complex and flowing",
    "figurative_language": "abundant in metaphor and simile",
    "pacing": "meandering yet engaging"
  },
  "do": [
    "Paint vivid, surreal landscapes with your words.",
    "Blend the magical with the everyday to create wonder.",
    "Use rich metaphors to deepen reader connection.",
    "Craft sentences that flow like a gentle river."
  ],
  "dont": [
    "Avoid overly simplistic or sparse descriptions.",
    "Do not shy away from complex sentence structures.",
    "Refrain from using a monotonous or dull tone.",
    "Avoid neglecting the emotional undercurrents in scenes."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Step into a world where the mundane dances with the fantastical; your adventure awaits.",
      "source": "AI-generated in the Karen Russell style",
      "is_generated": true
    },
    {
      "label": "Narrative",
      "content": "In the heart of the Everglades, where the air hums with the whispers of ancient creatures, a young girl discovers the shimmering boundary between reality and dreams.",
      "source": "AI-generated in the Karen Russell style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a lush, evocative style that blends the magical with the everyday. Use rich imagery and complex sentences to immerse the reader in a surreal landscape. Employ abundant metaphors and similes to convey emotion and depth. Avoid simplistic language and ensure the narrative flows with a meandering yet engaging pace.",
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
        "value": 0.45,
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
        "id": "imagery_vividness",
        "prompt": "Does the text create vivid, surreal imagery that blends the magical with the everyday?",
        "weight": 0.3
      },
      {
        "id": "emotional_depth",
        "prompt": "Does the text convey emotional depth through its use of metaphor and simile?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
