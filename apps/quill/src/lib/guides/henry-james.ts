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
      "label": "From the work",
      "content": "“I quite agree—in regard to Griffin’s ghost, or whatever it was—that its appearing first to the little boy, at so tender an age, adds a particular touch. But it’s not the first occurrence of its charming kind that I know to have involved a child. If the child gives the effect another turn of the screw, what do you say to _two_ children—?”",
      "source": "Henry James, The Turn of the Screw (Project Gutenberg #209; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "I can see Douglas there before the fire, to which he had got up to present his back, looking down at his interlocutor with his hands in his pockets. “Nobody but me, till now, has ever heard. It’s quite too horrible.” This, naturally, was declared by several voices to give the thing the utmost price, and our friend, with quiet art, prepared his triumph by turning his eyes over the rest of us and going on: “It’s beyond everything. Nothing at all that I know touches it.”",
      "source": "Henry James, The Turn of the Screw (Project Gutenberg #209; public domain)",
      "is_generated": false
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
