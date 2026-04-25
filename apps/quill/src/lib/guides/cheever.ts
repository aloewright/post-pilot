import type { Guide } from "../types";

export const cheever: Guide = {
  "slug": "cheever",
  "author": "John Cheever",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Suburban Myth · Mid-20th c.",
  "standfirst": "A lyrical exploration of suburban life's undercurrents.",
  "description": "John Cheever's voice captures the hidden depths and quiet despair of suburban America, weaving narratives that reveal the melancholy beneath the surface. His style is ideal for creating evocative storytelling that hints at the extraordinary within the ordinary. Reach for this voice when aiming to imbue narratives with a sense of lyrical melancholy and subtle complexity.",
  "voice_axes": [
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 22,
      "max": 45
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex and flowing",
    "figurative_language": "rich with metaphor and symbolism",
    "pacing": "measured, with rhythmic cadence"
  },
  "do": [
    "Craft narratives that evoke emotion and introspection.",
    "Use symbolism to add depth to everyday scenes.",
    "Explore themes of identity and existential reflection.",
    "Employ a wry tone to highlight life's ironies."
  ],
  "dont": [
    "Avoid overly simplistic language and structure.",
    "Do not shy away from exploring darker themes.",
    "Avoid rapid pacing that disrupts the narrative flow.",
    "Do not ignore the emotional undercurrents of the setting."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Neighbor, As the leaves begin to fall, we find ourselves reflecting on the quiet beauty of our shared streets and the stories that whisper through the rustling branches.",
      "source": "AI-generated in the John Cheever style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the elegance of life beneath the surface.",
      "source": "AI-generated in the John Cheever style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a lyrical and introspective tone that captures the complexities of suburban life. Use rich metaphors and wry observations to reveal hidden emotions and ironies. Create narratives that flow with a measured and rhythmic cadence, exploring themes of identity and existential reflection. Avoid simplistic language and rapid pacing, instead focusing on the emotional undercurrents that define the setting.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 15,
        "weight": 0.1
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
        "id": "emotional_depth",
        "prompt": "Does the text evoke a sense of emotional depth and introspection?",
        "weight": 0.3
      },
      {
        "id": "lyrical_quality",
        "prompt": "Does the writing exhibit a lyrical quality with rich metaphor and rhythm?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
