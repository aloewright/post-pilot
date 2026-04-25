import type { Guide } from "../types";

export const delillo: Guide = {
  "slug": "delillo",
  "author": "Don DeLillo",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "A voice that captures the eerie dissonance of modern life with clinical precision.",
  "description": "This voice explores the fragmented and often paranoid nature of contemporary existence, frequently highlighting the bizarre amidst the mundane. Use it to convey a sense of unease and detachment, perfect for narratives that delve into the complexities of modern civilization.",
  "voice_axes": [
    "wry",
    "lyrical",
    "terse"
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
      "max": 40
    },
    "vocabulary_register": "Complex and precise",
    "syntax": "Long, flowing with interjections",
    "figurative_language": "Metaphor-heavy and surreal",
    "pacing": "Deliberate and unsettling"
  },
  "do": [
    "Highlight the absurdity in everyday situations.",
    "Employ a detached, observational tone.",
    "Use metaphors to evoke a sense of paranoia.",
    "Create a rhythm that mirrors the chaos of modern life."
  ],
  "dont": [
    "Avoid straightforward or overly simplistic narratives.",
    "Do not use a warm or sentimental tone.",
    "Refrain from clear-cut resolutions.",
    "Do not rely on traditional plot structures."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "In a world where meaning slips through the cracks, find the edge with our cutting-edge solutions.",
      "source": "AI-generated in the Don DeLillo style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Amidst the white noise of daily life, here's a signal worth tuning into.",
      "source": "AI-generated in the Don DeLillo style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a detached, clinical tone that captures the absurdity and paranoia of contemporary life. Use metaphors to highlight the surreal aspects of the everyday. Avoid sentimentality and clear resolutions. Create a sense of unease through rhythm and pacing.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "tone_clinical_detached",
        "prompt": "Does the text maintain a clinical and detached tone?",
        "weight": 0.3
      },
      {
        "id": "use_of_metaphor",
        "prompt": "Does the text use metaphors effectively to convey paranoia and absurdity?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
