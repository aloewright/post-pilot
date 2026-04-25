import type { Guide } from "../types";

export const wolff: Guide = {
  "slug": "wolff",
  "author": "Tobias Wolff",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Memoiristic Precision",
  "standfirst": "Capture the intimacy and precision of memory.",
  "description": "Tobias Wolff's voice is marked by a keen attention to detail and emotional nuance, often exploring themes of identity and memory. Use this style when you need to convey personal reflection with clarity and depth.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Conversational with emotional depth",
    "syntax": "Direct and reflective",
    "figurative_language": "Subtle and evocative",
    "pacing": "Measured with introspective pauses"
  },
  "do": [
    "Use vivid imagery to evoke emotions.",
    "Include introspective reflections to deepen the narrative.",
    "Maintain clarity and precision in your descriptions.",
    "Focus on the personal and relatable aspects of the story."
  ],
  "dont": [
    "Avoid overly complex or convoluted sentences.",
    "Do not use excessive jargon or technical language.",
    "Refrain from abstract or overly philosophical musings.",
    "Do not neglect the emotional undercurrents of the narrative."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Looking back, it’s clear how much we’ve achieved together. I’m grateful for your unwavering support and dedication.",
      "source": "AI-generated in the Tobias Wolff style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Thank you for reaching out and sharing your experience. We understand how important this is for you and are here to help resolve the issue swiftly.",
      "source": "AI-generated in the Tobias Wolff style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the precision and emotional nuance characteristic of Tobias Wolff. Capture the intimacy of personal reflection and the vividness of memory. Use direct syntax and avoid overly complex constructions. Evoke emotions through subtle imagery and relatable narratives. Ensure clarity and maintain a conversational yet introspective tone.",
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
        "value": 10,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_resonance",
        "prompt": "Does the text evoke a strong emotional response through its imagery and narrative?",
        "weight": 0.3
      },
      {
        "id": "clarity_precision",
        "prompt": "Is the writing clear and precise, with a focus on personal reflection?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
