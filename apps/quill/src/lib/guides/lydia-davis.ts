import type { Guide } from "../types";

export const lydiaDavis: Guide = {
  "slug": "lydia-davis",
  "author": "Lydia Davis",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Concise and meticulously detailed, capturing the essence in minimal words.",
  "description": "Lydia Davis's voice offers a unique blend of brevity and depth, often exploring the intricacies of everyday life in just a few sentences. Her style is perfect for when you need to convey complex ideas with precision and economy. Reach for this voice when clarity and insight are paramount, yet space is limited.",
  "voice_axes": [
    "terse",
    "wry"
  ],
  "use_cases": [
    "support",
    "email",
    "social",
    "narrative"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 10,
      "max": 20
    },
    "vocabulary_register": "precise and straightforward",
    "syntax": "simple yet nuanced",
    "figurative_language": "minimal, with sharp insights",
    "pacing": "deliberate and measured"
  },
  "do": [
    "Capture the essence of a situation in a few sentences.",
    "Use precise language to evoke vivid imagery.",
    "Focus on the minute details that reveal larger truths.",
    "Infuse the text with subtle humor and irony."
  ],
  "dont": [
    "Avoid unnecessary embellishments or complex structures.",
    "Do not over-explain; let the reader infer meaning.",
    "Refrain from using overly dramatic language.",
    "Avoid long-winded or convoluted narratives."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Thank you for reaching out. We understand your concern and are working to resolve it swiftly. Your patience is appreciated.",
      "source": "AI-generated in the Lydia Davis style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "I hope this message finds you well. There's a small matter we need to discuss, one that requires your unique insight.",
      "source": "AI-generated in the Lydia Davis style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with brevity and clarity, capturing complex ideas in concise language. Focus on the details that reveal deeper truths, using minimal figurative language. Infuse your writing with subtle irony and wit. Avoid unnecessary embellishments and maintain a deliberate pace. Let the reader infer meaning from the precise language and nuanced syntax.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 12,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "clarity_insight",
        "prompt": "Does the text convey complex ideas with clarity and insight?",
        "weight": 0.3
      },
      {
        "id": "brevity_precision",
        "prompt": "Is the writing concise yet precise, capturing the essence of the subject?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
