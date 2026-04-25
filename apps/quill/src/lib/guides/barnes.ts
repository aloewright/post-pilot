import type { Guide } from "../types";

export const barnes: Guide = {
  "slug": "barnes",
  "author": "Julian Barnes",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Essayistic Novel",
  "standfirst": "Captures the ironic essence of Englishness with a reflective tone.",
  "description": "Julian Barnes' style is characterized by a reflective, essayistic approach that often incorporates irony and wit. His voice is well-suited for narratives that explore complex themes with a nuanced and sophisticated touch. Use this style when you want to convey depth and subtle humor in a narrative or marketing context.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Elevated with occasional colloquialisms",
    "syntax": "Complex and varied",
    "figurative_language": "Frequent use of metaphor and irony",
    "pacing": "Leisurely with reflective pauses"
  },
  "do": [
    "Infuse the narrative with irony and subtle humor.",
    "Craft sentences that are complex and reflective.",
    "Employ elevated vocabulary with a touch of colloquialism.",
    "Use metaphors to convey deeper meanings."
  ],
  "dont": [
    "Avoid simplistic or overly direct language.",
    "Do not rush through narrative developments.",
    "Refrain from ignoring the nuances of Englishness.",
    "Do not shy away from exploring complex themes."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, In the spirit of our shared pursuit of excellence, I am delighted to extend an invitation to our upcoming symposium. It promises to be both enlightening and, dare I say, a touch amusing.",
      "source": "AI-generated in the Julian Barnes style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the art of living well—where sophistication meets subtlety.",
      "source": "AI-generated in the Julian Barnes style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a reflective, essayistic tone that captures the ironic essence of Englishness. Use complex and varied syntax to craft sentences that are both lyrical and wry. Employ elevated vocabulary interspersed with colloquialisms. Infuse your writing with metaphor and irony to explore complex themes. Avoid simplistic language and ensure your pacing allows for reflective pauses.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 35,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "irony_usage",
        "prompt": "Does the text effectively use irony to convey its message?",
        "weight": 0.4
      },
      {
        "id": "narrative_depth",
        "prompt": "Does the text present complex themes with depth and nuance?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
