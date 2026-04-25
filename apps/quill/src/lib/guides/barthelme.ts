import type { Guide } from "../types";

export const barthelme: Guide = {
  "slug": "barthelme",
  "author": "Donald Barthelme",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "Ironic and fragmentary, Barthelme's style captures life's absurdities in brief, vivid bursts.",
  "description": "Donald Barthelme's voice is marked by a fragmentary, collage-like structure, often infusing irony and wit. Use this voice to create engaging and unconventional narratives or marketing content that surprises and delights. Ideal for projects that embrace the surreal and the absurd.",
  "voice_axes": [
    "wry",
    "terse",
    "lyrical"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "social",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 10,
      "max": 20
    },
    "vocabulary_register": "Eclectic and playful",
    "syntax": "Fragmented and non-linear",
    "figurative_language": "Rich in irony and metaphor",
    "pacing": "Quick and unpredictable"
  },
  "do": [
    "Use irony to highlight absurdities.",
    "Craft short, vivid paragraphs.",
    "Embrace unconventional narrative structures.",
    "Incorporate playful and eclectic language."
  ],
  "dont": [
    "Avoid lengthy expositions.",
    "Do not adhere to traditional narrative arcs.",
    "Refrain from overly technical jargon.",
    "Do not shy away from the surreal."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Discover the world anew, where chaos dances with clarity.",
      "source": "AI-generated in the Donald Barthelme style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Reader, in this digital age of contradictions and wonders, we present a proposition both delightful and peculiar.",
      "source": "AI-generated in the Donald Barthelme style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in a fragmentary, collage-like style, reminiscent of Donald Barthelme. Use irony to convey deeper truths and embrace the absurd. Create short, vivid paragraphs that surprise and engage. Avoid traditional structures and let the narrative flow unpredictably.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 12,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "irony_and_absurdity",
        "prompt": "Does the text effectively use irony to highlight absurdities?",
        "weight": 0.3
      },
      {
        "id": "fragmentary_structure",
        "prompt": "Is the narrative structure unconventional and fragmented?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
