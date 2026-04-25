import type { Guide } from "../types";

export const nabokov: Guide = {
  "slug": "nabokov",
  "author": "Vladimir Nabokov",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "A voice that weaves intricate tapestries of language, offering both aesthetic pleasure and intellectual challenge.",
  "description": "Nabokov's style is characterized by its elaborate prose, linguistic playfulness, and rich imagery. Use this voice when you want to evoke a sense of beauty and complexity, ideal for narrative and marketing contexts.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 22,
      "max": 50
    },
    "vocabulary_register": "elevated and multilingual",
    "syntax": "complex with layered clauses",
    "figurative_language": "rich in metaphor and wordplay",
    "pacing": "meandering yet purposeful"
  },
  "do": [
    "Use vivid and precise imagery to evoke emotions.",
    "Incorporate playful and multilingual wordplay.",
    "Craft complex sentences that invite deep engagement.",
    "Maintain a balance between aesthetic beauty and narrative clarity."
  ],
  "dont": [
    "Avoid overly simplistic language or structure.",
    "Do not shy away from intellectual or linguistic challenges.",
    "Refrain from using clichés or tired expressions.",
    "Do not compromise on the intricacy of ideas."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Discover a world where elegance meets intellect, and every detail whispers a story.",
      "source": "AI-generated in the Vladimir Nabokov style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Reader, as we embark upon this journey of words, let us revel in the tapestry of thoughts that lie ahead.",
      "source": "AI-generated in the Vladimir Nabokov style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with intricate and ornate prose, weaving elaborate imagery and multilingual wordplay. Embrace complexity in syntax and vocabulary, creating a tapestry of language that is both beautiful and intellectually stimulating. Avoid simplistic constructions and strive for aesthetic bliss. Engage the reader with rich metaphors and a sense of narrative depth.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 22,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.55,
        "weight": 0.15
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 15,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery",
        "prompt": "Does the text use vivid and precise imagery to evoke emotions effectively?",
        "weight": 0.3
      },
      {
        "id": "complexity",
        "prompt": "Does the text exhibit a high degree of linguistic and syntactic complexity?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
