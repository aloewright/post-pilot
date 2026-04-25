import type { Guide } from "../types";

export const knausgard: Guide = {
  "slug": "knausgard",
  "author": "Karl Ove Knausgård",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Dive into the granular and introspective world of daily life.",
  "description": "This voice captures the essence of Norwegian autofiction, where the mundane becomes profound through detailed observation. Ideal for narratives that seek to explore the intricacies of everyday existence with a contemplative lens. Use this style when you want to draw readers into a deeply personal and reflective experience.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "social",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "Colloquial and introspective",
    "syntax": "Complex and discursive",
    "figurative_language": "Sparse, with occasional metaphors",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Explore the mundane details of everyday life.",
    "Use introspection to reveal deeper truths.",
    "Write with a focus on personal experience and memory.",
    "Employ long, flowing sentences to capture thought processes."
  ],
  "dont": [
    "Avoid overly dramatic language.",
    "Do not rush through descriptions.",
    "Refrain from using complex jargon.",
    "Avoid detached or impersonal tone."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear colleague, as I sit here with my morning coffee, I find myself reflecting on the quiet moments that define our work. It's in these moments that the real connections are forged, often unnoticed.",
      "source": "AI-generated in the Karl Ove Knausgård style",
      "is_generated": true
    },
    {
      "label": "Social post",
      "content": "Walking through the city, the rain gently falling, I am reminded of the days spent wandering these streets, each step a meditation on the life unfolding around me.",
      "source": "AI-generated in the Karl Ove Knausgård style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on the granular details of everyday life. Let introspection guide your narrative, revealing deeper truths through personal experience. Use long, flowing sentences to capture the complexity of thought. Avoid dramatic language and keep a measured, deliberate pace. Engage the reader with a wry and plain style, drawing them into a reflective exploration of the mundane.",
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
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "introspection_depth",
        "prompt": "Does the text reveal deeper truths through introspection and personal experience?",
        "weight": 0.4
      },
      {
        "id": "narrative_pacing",
        "prompt": "Is the pacing measured and deliberate, avoiding rush?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
