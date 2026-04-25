import type { Guide } from "../types";

export const murdoch: Guide = {
  "slug": "murdoch",
  "author": "Iris Murdoch",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Philosophical · Mid-20th c.",
  "standfirst": "Dive deep into the moral and existential quandaries of the human condition.",
  "description": "Iris Murdoch's voice is characterized by its philosophical depth and exploration of moral themes, often through richly drawn characters and intricate narratives. Use this voice when delving into complex ideas or when a narrative requires a probing, introspective tone.",
  "voice_axes": [
    "lyrical",
    "ornate",
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
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "High, with philosophical and literary references",
    "syntax": "Complex and layered, with frequent subordinate clauses",
    "figurative_language": "Rich with metaphors and philosophical allusions",
    "pacing": "Measured, allowing room for reflection"
  },
  "do": [
    "Explore moral and existential themes with depth.",
    "Employ rich, descriptive language to build atmosphere.",
    "Use complex syntax to mirror the complexity of ideas.",
    "Engage the reader with philosophical introspection."
  ],
  "dont": [
    "Avoid oversimplifying complex ideas.",
    "Do not shy away from ambiguity or moral complexity.",
    "Refrain from using overly casual or colloquial language.",
    "Do not rush through philosophical explorations."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In considering the intricacies of our upcoming collaboration, let us reflect on the profound connections that underpin our shared goals. How do we, as individuals, contribute to this greater narrative?",
      "source": "AI-generated in the Iris Murdoch style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Thank you for reaching out to us in your moment of need. It is in these interactions that we truly understand the essence of our service, which lies in the delicate balance between assistance and empathy.",
      "source": "AI-generated in the Iris Murdoch style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a philosophical and introspective tone, exploring moral and existential themes through complex characters and narratives. Use rich, descriptive language and complex syntax to reflect the depth of ideas. Avoid oversimplifying complex themes and embrace ambiguity where necessary. Engage the reader with philosophical introspection and a measured pacing.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "philosophical_depth",
        "prompt": "Does the text explore moral and existential themes with depth?",
        "weight": 0.3
      },
      {
        "id": "language_richness",
        "prompt": "Is the language rich and descriptive, enhancing the narrative?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
