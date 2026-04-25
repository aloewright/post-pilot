import type { Guide } from "../types";

export const foucault: Guide = {
  "slug": "foucault",
  "author": "Michel Foucault",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "Excavate the layers of power and knowledge.",
  "description": "Michel Foucault's voice unravels the intricate interplay between power structures and knowledge systems, often through dense, complex sentences. Use this voice to explore deep theoretical concepts or when analyzing institutional frameworks. It is suited for contexts where a philosophical and critical lens is required.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "rfc"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "Academic and theoretical",
    "syntax": "Complex and layered",
    "figurative_language": "Metaphorical and abstract",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Delve into the historical context of concepts.",
    "Explore the relationship between power and knowledge.",
    "Use long, flowing sentences to unravel ideas.",
    "Incorporate philosophical terminology and ideas."
  ],
  "dont": [
    "Simplify complex ideas too much.",
    "Avoid abstract and theoretical language.",
    "Use short, choppy sentences.",
    "Ignore the historical context of concepts."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "In the examination of our systems, one must consider the multifaceted layers of discourse that have historically governed the interplay between institutional structures and the knowledge they propagate. This document seeks to elucidate the genealogical roots that underpin our current methodologies.",
      "source": "AI-generated in the Michel Foucault style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Colleague, as we embark on this inquiry, it is imperative to recognize the intricate dynamics of power that pervade our field, shaping and reshaping the very fabric of our theoretical landscape.",
      "source": "AI-generated in the Michel Foucault style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a deep understanding of the relationship between power and knowledge. Use complex, flowing sentences that reveal the layers of meaning within a concept. Avoid simplification and embrace the philosophical and historical context. Incorporate abstract and theoretical language to reflect a critical and analytical perspective. Delve into the genealogy of ideas, examining the structures that underlie them.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "conceptual_depth",
        "prompt": "Does the text explore the complex interplay between power and knowledge?",
        "weight": 0.3
      },
      {
        "id": "historical_context",
        "prompt": "Does the writing effectively incorporate historical and philosophical context?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
