import type { Guide } from "../types";

export const pinter: Guide = {
  "slug": "pinter",
  "author": "Harold Pinter",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Mid-20th · Dramatic Pause",
  "standfirst": "Capture the tension and subtle menace of Pinter's dramatic style.",
  "description": "Harold Pinter's voice is characterized by its use of pauses and understated dialogue that evokes a sense of unease and tension. His style is particularly effective for creating atmosphere and subtext in narrative and dialogue-driven content. Use this voice when you want to imbue writing with a sense of ambiguity and dramatic tension.",
  "voice_axes": [
    "terse",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 10,
      "max": 20
    },
    "vocabulary_register": "Everyday, unpretentious",
    "syntax": "Simple, with deliberate pauses",
    "figurative_language": "Sparse, with implied meaning",
    "pacing": "Measured, with intentional silences"
  },
  "do": [
    "Use pauses to create tension.",
    "Write dialogue that suggests more than it states.",
    "Imbue ordinary language with underlying menace.",
    "Emphasize subtext and ambiguity."
  ],
  "dont": [
    "Avoid elaborate or flowery language.",
    "Do not state the obvious; let implications linger.",
    "Avoid fast-paced narrative.",
    "Do not over-explain character motivations."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Thank you for reaching out. We'll look into it... and get back to you. Meanwhile, stay tuned.",
      "source": "AI-generated in the Harold Pinter style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "There's something we need to discuss. It's about the... recent developments. Let's find a moment.",
      "source": "AI-generated in the Harold Pinter style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the tension and subtle menace of Harold Pinter. Use pauses to create an atmosphere of unease. Employ simple, everyday language but hint at deeper meanings. Avoid elaborate descriptions; let the subtext speak. Focus on dialogue that reveals character and tension through what is left unsaid.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 10,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.1
      },
      {
        "metric": "mono_syllable_ratio",
        "op": ">=",
        "value": 0.6,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "tension_creation",
        "prompt": "Does the text create a sense of unease and tension?",
        "weight": 0.3
      },
      {
        "id": "subtext_usage",
        "prompt": "Does the text effectively use subtext and implication?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
