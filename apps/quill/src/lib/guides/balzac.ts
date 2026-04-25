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
      "label": "From the work",
      "content": "Half-way down the Rue Saint-Denis, almost at the corner of the Rue du Petit-Lion, there stood formerly one of those delightful houses which enable historians to reconstruct old Paris by analogy. The threatening walls of this tumbledown abode seemed to have been decorated with hieroglyphics. For what other name could the passer-by give to the Xs and Vs which the horizontal or diagonal timbers traced on the front, outlined by little parallel cracks in the plaster? It was evident that every beam quivered in its mortices at the passing of the lightest vehicle. This venerable structure was crowned by a triangular roof of which no example will, ere long, be seen in Paris. This covering, warped by the extremes of the Paris climate, projected three feet over the roadway, as much to protect the threshold from the rainfall as to shelter the wall of a loft and its sill-less dormer-window. This upper story was built of planks, overlapping each other like slates, in order, no doubt, not to overweight the frail house.",
      "source": "Honoré de Balzac, At the Sign of the Cat and Racket (Project Gutenberg #1680; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "To quench the pride of those who believe that the world is growing cleverer day by day, and that modern humbug surpasses everything, it may be observed that these signs, of which the origin seems so whimsical to many Paris merchants, are the dead pictures of once living pictures by which our roguish ancestors contrived to tempt customers into their houses. Thus the Spinning Sow, the Green Monkey, and others, were animals in cages whose skills astonished the passer-by, and whose accomplishments prove the patience of the fifteenth-century artisan. Such curiosities did more to enrich their fortunate owners than the signs of “Providence,” “Good-faith,” “Grace of God,” and “Decapitation of John the Baptist,” which may still be seen in the Rue Saint-Denis.",
      "source": "Honoré de Balzac, At the Sign of the Cat and Racket (Project Gutenberg #1680; public domain)",
      "is_generated": false
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
