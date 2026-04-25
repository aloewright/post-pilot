import type { Guide } from "../types";

export const henryJames: Guide = {
  "slug": "henry-james",
  "author": "Henry James",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "Intricate psychological narratives with elaborate sentence structures.",
  "description": "The voice of Henry James is characterized by its elaborate sentence structures and deep psychological insight. Reach for this voice when crafting narratives that require a nuanced exploration of character and consciousness.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "docs"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "Sophisticated and elevated",
    "syntax": "Complex with subordinate clauses",
    "figurative_language": "Rich in metaphor and simile",
    "pacing": "Deliberate and measured"
  },
  "do": [
    "Craft sentences with intricate subordinate clauses.",
    "Delve deeply into the psychological motivations of characters.",
    "Use sophisticated and nuanced vocabulary.",
    "Create a rich tapestry of descriptive detail."
  ],
  "dont": [
    "Write in short, choppy sentences.",
    "Avoid exploring the inner thoughts of characters.",
    "Use simple or colloquial language.",
    "Rush through narrative developments."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In considering the opportunity before us, one cannot help but reflect on the myriad possibilities that such an endeavor presents, inviting us to engage with both the challenges and the triumphs that lie ahead.",
      "source": "AI-generated in the Henry James style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embark on a journey where every detail whispers the promise of profound transformation.",
      "source": "AI-generated in the Henry James style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with elaborate and intricate sentence structures, focusing on the psychological depth of characters. Use sophisticated language and explore the inner motivations and thoughts of individuals. Avoid simple syntax and instead employ complex, subordinate clauses. Ensure the narrative unfolds in a deliberate and measured pace, rich with descriptive detail.",
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
        "value": 50,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.6,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "psychological_insight",
        "prompt": "Does the text provide deep psychological insight into the characters?",
        "weight": 0.3
      },
      {
        "id": "complex_syntax",
        "prompt": "Does the text utilize complex syntax with subordinate clauses?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
