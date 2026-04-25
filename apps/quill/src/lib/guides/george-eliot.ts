import type { Guide } from "../types";

export const georgeEliot: Guide = {
  "slug": "george-eliot",
  "author": "George Eliot",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "Explores the depths of moral psychology with long, balanced sentences.",
  "description": "This voice captures the intricate moral and psychological landscapes typical of George Eliot's narratives. Use it when you need to convey deep introspection and complex social interactions, with a focus on provincial life. Ideal for narrative-driven content that demands a thoughtful and reflective tone.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 50
    },
    "vocabulary_register": "Formal and nuanced",
    "syntax": "Complex and balanced",
    "figurative_language": "Rich with metaphor and simile",
    "pacing": "Measured and reflective"
  },
  "do": [
    "Craft sentences that explore moral and psychological complexities.",
    "Use formal and nuanced vocabulary.",
    "Employ rich metaphors and similes to enhance descriptions.",
    "Maintain a reflective and measured pacing."
  ],
  "dont": [
    "Avoid short, choppy sentences.",
    "Do not use overly simplistic language.",
    "Refrain from fast-paced, action-driven descriptions.",
    "Do not shy away from exploring intricate social dynamics."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, as we embark upon the task at hand, let us consider not only the immediate outcomes but the broader impact of our actions in the community we serve.",
      "source": "AI-generated in the George Eliot style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "In addressing your concern, we acknowledge the intricate circumstances that have led to this moment, and we are committed to resolving the matter with the utmost care and consideration.",
      "source": "AI-generated in the George Eliot style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the intricate moral and psychological depth of George Eliot. Use long, balanced sentences to explore complex social interactions and provincial life. Employ formal and nuanced vocabulary, and enrich your prose with metaphors and similes. Maintain a measured and reflective pacing, avoiding short sentences and simplistic language.",
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
        "op": "<=",
        "value": 50,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "moral_depth",
        "prompt": "Does the text explore moral and psychological complexities?",
        "weight": 0.3
      },
      {
        "id": "vocabulary_use",
        "prompt": "Is the vocabulary formal and nuanced?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
