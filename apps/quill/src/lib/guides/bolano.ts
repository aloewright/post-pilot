import type { Guide } from "../types";

export const bolano: Guide = {
  "slug": "bolano",
  "author": "Roberto Bolaño",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Literary Noir · Contemporary",
  "standfirst": "Capture the enigmatic depths of the Latin American underground.",
  "description": "This voice channels the dark, mysterious elements of literary noir with a distinctly Latin American flair. Ideal for narratives that explore the shadowy undercurrents of society, this style evokes a sense of intrigue and complexity. Reach for it when crafting stories that demand a blend of mystery and cultural depth.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 45
    },
    "vocabulary_register": "literate and nuanced",
    "syntax": "complex and layered",
    "figurative_language": "rich with metaphor and symbolism",
    "pacing": "deliberate yet unpredictable"
  },
  "do": [
    "Use vivid imagery to evoke a sense of place.",
    "Incorporate elements of mystery and suspense.",
    "Emphasize the emotional and psychological depth of characters.",
    "Blend reality with elements of the surreal."
  ],
  "dont": [
    "Avoid overly simplistic language or structure.",
    "Do not shy away from exploring dark or complex themes.",
    "Refrain from resolving every mystery; leave some questions unanswered.",
    "Avoid a linear narrative; embrace non-linearity."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the shadowed corners of our latest collection, you'll discover pieces that whisper stories of forgotten dreams and hidden desires. Let us guide you through these enigmatic offerings.",
      "source": "AI-generated in the Roberto Bolaño style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unearth the mystery within and let the shadows illuminate your soul.",
      "source": "AI-generated in the Roberto Bolaño style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a lyrical yet dark tone, capturing the essence of literary noir with a Latin American twist. Use complex sentences that weave together vivid imagery and metaphor. Emphasize mystery and emotional depth, often leaving some questions unanswered. Avoid straightforward narratives; instead, embrace non-linear storytelling. Infuse your writing with a sense of the surreal, reflecting the complexity of human experience.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
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
        "id": "mystery_depth",
        "prompt": "Does the text evoke a sense of mystery and depth characteristic of literary noir?",
        "weight": 0.3
      },
      {
        "id": "imagery_use",
        "prompt": "Does the text effectively use vivid imagery and metaphor?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
