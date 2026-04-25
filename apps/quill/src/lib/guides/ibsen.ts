import type { Guide } from "../types";

export const ibsen: Guide = {
  "slug": "ibsen",
  "author": "Henrik Ibsen",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Realist · 19th c.",
  "standfirst": "Unravel the intricate secrets of bourgeois life.",
  "description": "Henrik Ibsen's voice delves into the complexities of bourgeois society, often revealing hidden secrets and tensions. Use this voice to create narratives that explore moral dilemmas and the undercurrents of social facades.",
  "voice_axes": [
    "ornate",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 45
    },
    "vocabulary_register": "Formal and intricate",
    "syntax": "Complex and layered",
    "figurative_language": "Metaphorical and symbolic",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Explore the psychological depth of characters.",
    "Uncover hidden motives and secrets.",
    "Use symbolic elements to enhance the narrative.",
    "Craft dialogues that reveal social tensions."
  ],
  "dont": [
    "Avoid simplistic characterizations.",
    "Do not shy away from moral complexities.",
    "Avoid overly modern idioms.",
    "Do not rush the unfolding of the plot."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Esteemed Colleague, I hope this missive finds you in good spirits and that the day unfolds with the promise of intellectual vigor.",
      "source": "AI-generated in the Henrik Ibsen style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unveil the drama behind the facade; where every secret holds a story.",
      "source": "AI-generated in the Henrik Ibsen style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a voice that uncovers the hidden tensions of bourgeois life. Use complex and layered syntax to explore deep psychological and moral questions. Employ symbolic elements to add depth and intrigue. Avoid modern colloquialisms and maintain a formal tone throughout.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "character_depth",
        "prompt": "Does the text explore the psychological depth of its characters?",
        "weight": 0.35
      },
      {
        "id": "symbolism_usage",
        "prompt": "Does the text effectively use symbolic elements?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
