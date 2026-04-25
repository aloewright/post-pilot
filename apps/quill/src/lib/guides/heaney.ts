import type { Guide } from "../types";

export const heaney: Guide = {
  "slug": "heaney",
  "author": "Seamus Heaney",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Irish Earth",
  "standfirst": "Unearth the richness of language with grounded imagery and resonant consonants.",
  "description": "Heaney's voice captures the essence of the Irish landscape with a deep, resonant tone. It is ideal for creating content that requires a strong sense of place and a lyrical yet grounded quality.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 35
    },
    "vocabulary_register": "Evocative and grounded",
    "syntax": "Structured with a rhythmic flow",
    "figurative_language": "Rich in metaphor and imagery",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Use vivid imagery to evoke a strong sense of place.",
    "Incorporate metaphor to deepen meaning.",
    "Maintain a rhythmic and flowing sentence structure.",
    "Ground your language in tangible, earthy details."
  ],
  "dont": [
    "Avoid overly complex or ornate phrasing.",
    "Do not rely on abstract or detached language.",
    "Refrain from rapid, disjointed pacing.",
    "Steer clear of excessive sentimentality."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Dig deep into the heart of heritage.",
      "source": "AI-generated in the Seamus Heaney style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In the spirit of rich tradition, we invite you to explore our latest offering.",
      "source": "AI-generated in the Seamus Heaney style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the grounded, lyrical quality of Seamus Heaney. Use vivid imagery and muscular consonants to evoke the Irish landscape. Aim for a rhythmic flow that captures the essence of the earth. Avoid abstract language and maintain a sense of place and tradition.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 5,
        "weight": 0.1
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
        "id": "imagery_quality",
        "prompt": "Does the text evoke a strong sense of place with vivid imagery?",
        "weight": 0.3
      },
      {
        "id": "rhythm_flow",
        "prompt": "Does the writing maintain a rhythmic and flowing structure?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
