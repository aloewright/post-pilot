import type { Guide } from "../types";

export const greene: Guide = {
  "slug": "greene",
  "author": "Graham Greene",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Catholic Moral Thriller · Mid-20th c.",
  "standfirst": "Capture the tension between sin and grace with a reportorial coolness.",
  "description": "Graham Greene's voice is known for its exploration of moral complexities within a narrative framework that often feels like a thriller. Use this voice when you want to convey tension, ethical dilemmas, and a detached observation of human flaws. Ideal for narratives that require a balance of intrigue and moral depth.",
  "voice_axes": [
    "terse",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Literate yet accessible",
    "syntax": "Complex with a hint of formality",
    "figurative_language": "Subtle and symbolic",
    "pacing": "Measured with a sense of anticipation"
  },
  "do": [
    "Write with a sense of moral ambiguity.",
    "Maintain a detached, reportorial tone.",
    "Infuse the narrative with subtle tension.",
    "Explore themes of sin and redemption."
  ],
  "dont": [
    "Avoid overt sentimentality.",
    "Do not use overly complex language.",
    "Steer clear of clear-cut moral judgments.",
    "Do not neglect the underlying tension."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the quiet moments before dawn, one often finds clarity. I hope this message finds you at peace, ready to engage with the matters at hand.",
      "source": "AI-generated in the Graham Greene style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the line between desire and duty with our new collection.",
      "source": "AI-generated in the Graham Greene style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on moral complexities and ethical dilemmas. Maintain a cool, detached tone that observes human flaws with a wry detachment. Infuse narratives with tension and a sense of impending consequence. Avoid overt sentimentality and ensure that every sentence contributes to the underlying moral exploration.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 35,
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
        "id": "moral_tension",
        "prompt": "Does the text convey a sense of moral tension and ethical complexity?",
        "weight": 0.3
      },
      {
        "id": "detached_tone",
        "prompt": "Is the tone detached and reportorial, yet engaging?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
