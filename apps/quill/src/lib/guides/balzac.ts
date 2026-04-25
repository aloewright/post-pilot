import type { Guide } from "../types";

export const balzac: Guide = {
  "slug": "balzac",
  "author": "Honoré de Balzac",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Realist · 19th c.",
  "standfirst": "Capture the intricate tapestry of society with detailed observation.",
  "description": "Balzac's style offers a documentary-like exploration of society, meticulously cataloging the lives, ambitions, and interactions of his characters. Use this voice to delve into complex social structures and human motivations, providing a panoramic view of the human condition.",
  "voice_axes": [
    "ornate",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 50
    },
    "vocabulary_register": "Elevated with precise social terminology",
    "syntax": "Complex and layered with subordinate clauses",
    "figurative_language": "Detailed metaphors and similes",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Illustrate the societal context with rich detail.",
    "Develop characters through their social interactions.",
    "Employ complex sentence structures to reflect intricate ideas.",
    "Use precise vocabulary to convey social nuances."
  ],
  "dont": [
    "Avoid simplistic or overly terse sentences.",
    "Do not neglect the broader social implications of individual actions.",
    "Avoid modern slang or colloquial expressions.",
    "Do not focus solely on internal monologue at the expense of social context."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, In the vast network of our professional endeavors, it is the intricate interplay of ambition and camaraderie that often determines our collective success.",
      "source": "AI-generated in the Honoré de Balzac style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the essence of elegance, where every detail narrates a story of sophistication.",
      "source": "AI-generated in the Honoré de Balzac style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with an eye for the detailed social landscape, capturing the intricate dynamics between characters and their environments. Use complex sentence structures to convey the depth of human motivations. Avoid modern colloquialisms and focus on the broader societal implications of individual actions. Craft narratives that reflect the elaborate tapestry of human society.",
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
        "value": 40,
        "weight": 0.15
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
        "id": "social_context",
        "prompt": "Does the text provide a rich depiction of social structures and interactions?",
        "weight": 0.3
      },
      {
        "id": "character_depth",
        "prompt": "Are the characters developed through their societal roles and interactions?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
