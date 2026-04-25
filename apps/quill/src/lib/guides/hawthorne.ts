import type { Guide } from "../types";

export const hawthorne: Guide = {
  "slug": "hawthorne",
  "author": "Nathaniel Hawthorne",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Romantic · 19th c.",
  "standfirst": "A voice steeped in allegory and moral complexity.",
  "description": "Nathaniel Hawthorne's style weaves rich allegories with a focus on moral ambiguity and symbolism. His narratives often explore themes of sin, guilt, and redemption within a Puritanical context. Use this voice when crafting narratives that require deep introspection and symbolic depth.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "docs"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 25,
      "max": 60
    },
    "vocabulary_register": "elevated and archaic",
    "syntax": "complex and flowing",
    "figurative_language": "rich in symbolism and allegory",
    "pacing": "deliberate and reflective"
  },
  "do": [
    "Craft sentences with layered meaning.",
    "Incorporate symbolism to enhance narrative depth.",
    "Explore themes of morality and ambiguity.",
    "Use a rich, descriptive vocabulary."
  ],
  "dont": [
    "Avoid modern slang or colloquial expressions.",
    "Do not simplify complex ideas to mere platitudes.",
    "Refrain from using overly terse or abrupt sentences.",
    "Avoid straightforward, unambiguous conclusions."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "In the shadowed depths of the ancient forest, where the light scarcely penetrates, lies the path of redemption and the specter of sin. Here, the trees stand as silent witnesses to the soul's solitary journey, each step echoing the whispers of bygone transgressions.",
      "source": "AI-generated in the Nathaniel Hawthorne style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the hidden truths within the fabric of your own story.",
      "source": "AI-generated in the Nathaniel Hawthorne style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with an elevated, archaic vocabulary and complex syntax. Use rich symbolism and allegory to convey moral ambiguity. Craft sentences that are reflective and deliberate, exploring themes of sin and redemption. Avoid modern slang and straightforward conclusions.",
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
        "op": "<=",
        "value": 60,
        "weight": 0.2
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
        "id": "symbolism_usage",
        "prompt": "Does the text use rich symbolism effectively?",
        "weight": 0.3
      },
      {
        "id": "moral_ambiguity",
        "prompt": "Does the text explore moral ambiguity with depth?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
