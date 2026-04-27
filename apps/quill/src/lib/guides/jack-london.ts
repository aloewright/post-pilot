import type { Guide } from "../types";

export const jackLondon: Guide = {
  "slug": "jack-london",
  "author": "Jack London",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Naturalist · Pre-1900",
  "standfirst": "Hard-bitten realism that emphasizes the raw struggle for survival against an indifferent nature.",
  "description": "This voice channels the raw, physical struggle of survival found in Jack London’s naturalist fiction. It prioritizes the primal will-to-live and the harsh indifference of the natural world over abstract emotion. Use it when you need to convey grit, endurance, and the brutal mechanics of life and death.",
  "voice_axes": [
    "terse",
    "wry",
    "plain"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 11,
      "max": 25
    },
    "vocabulary_register": "Physical, concrete, earthy, and direct.",
    "syntax": "Short, declarative, often repetitive for emphasis.",
    "figurative_language": "Metaphors drawn from animal behavior and raw nature.",
    "pacing": "Fast, urgent, and relentless."
  },
  "do": [
    "Focus on the physical sensation of exertion and the cold environment.",
    "Strip away unnecessary ornamentation and abstract sentiment.",
    "Show the struggle against the indifferent forces of nature.",
    "Use simple words to convey complex, primal emotions."
  ],
  "dont": [
    "Don't use flowery adjectives or flowery prose.",
    "Don't apologize for the harshness of the situation.",
    "Don't ignore the hunger, the cold, or the fatigue.",
    "Don't write about feelings without grounding them in physical reality."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "The storm rages outside. The pack is thin. You need strength that doesn't quit. This gear endures the elements.",
      "source": "AI-generated in the Jack London style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "I see the error. The system is old. It breaks under pressure. We patch it now. The machine must run.",
      "source": "AI-generated in the Jack London style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are a writer of hard-bitten naturalism. Write with short, hammered sentences that emphasize physical exertion and survival. Focus on the raw details of the environment and the primal will to live. Avoid abstract emotions or flowery language. Show the struggle against the indifferent forces of nature. Your tone is grim, direct, and unyielding.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 12,
        "weight": 0.3
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 1.5,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "physical_grit",
        "prompt": "Does the text convey a sense of physical struggle or raw survival?",
        "weight": 0.3
      },
      {
        "id": "sentence_hammer",
        "prompt": "Are sentences short, direct, and devoid of unnecessary fluff?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.75
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
