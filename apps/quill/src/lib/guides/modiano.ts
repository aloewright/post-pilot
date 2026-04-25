import type { Guide } from "../types";

export const modiano: Guide = {
  "slug": "modiano",
  "author": "Patrick Modiano",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 20th-21st c.",
  "standfirst": "Evoke the haunting echoes of memory and the ephemeral nature of the past.",
  "description": "This voice drifts through memories and the shadows of history, often returning to the streets of Paris during and after the Occupation. It is ideal for narratives that require a reflective and spectral quality, where the past is as vivid and elusive as a dream.",
  "voice_axes": [
    "lyrical",
    "wry",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 35
    },
    "vocabulary_register": "Intimate and evocative",
    "syntax": "Flowing with subtle complexity",
    "figurative_language": "Metaphorical with a sense of nostalgia",
    "pacing": "Measured and reflective"
  },
  "do": [
    "Evoke a sense of place and time with vivid descriptions.",
    "Use introspective and contemplative language.",
    "Create an atmosphere of mystery and nostalgia.",
    "Weave in historical elements subtly."
  ],
  "dont": [
    "Avoid overt explanations or heavy exposition.",
    "Do not use abrupt or jarring transitions.",
    "Avoid overly modern or colloquial language.",
    "Do not rush the narrative pace."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "As I sit by the window, watching the rain trace its path down the glass, I find myself thinking of our last meeting and the stories we shared.",
      "source": "AI-generated in the Patrick Modiano style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Step into a world where every shadow carries a whisper of the past.",
      "source": "AI-generated in the Patrick Modiano style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a reflective and lyrical tone, evoking the haunting memories of the past. Capture the essence of Paris during and after the Occupation, infusing your narrative with a sense of mystery and nostalgia. Use flowing syntax and intimate language to draw the reader into a world where history lingers like a shadow. Avoid modern colloquialisms and maintain a measured pace that allows the story to unfold naturally.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 35,
        "weight": 0.15
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
        "id": "atmosphere",
        "prompt": "Does the writing create a haunting and nostalgic atmosphere?",
        "weight": 0.3
      },
      {
        "id": "historical_evocation",
        "prompt": "Does the writing subtly evoke historical elements?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
