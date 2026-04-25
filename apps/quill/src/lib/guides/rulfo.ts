import type { Guide } from "../types";

export const rulfo: Guide = {
  "slug": "rulfo",
  "author": "Juan Rulfo",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Evoke the haunting silence of desolate landscapes.",
  "description": "Juan Rulfo's voice captures the ghostly essence of the Mexican plains, utilizing sparse dialogue and profound silences. This style is ideal for narratives that require an air of mystery and existential depth. Use it when you want to create a haunting, reflective atmosphere.",
  "voice_axes": [
    "terse",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 14,
      "max": 25
    },
    "vocabulary_register": "Simple and evocative",
    "syntax": "Concise and fragmented",
    "figurative_language": "Subtle and symbolic",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Create imagery that lingers in the reader's mind.",
    "Use silences to suggest deeper meanings.",
    "Craft dialogue that reveals character through omission.",
    "Convey emotion through landscape and setting."
  ],
  "dont": [
    "Over-explain or provide unnecessary detail.",
    "Rely heavily on complex sentence structures.",
    "Use overly ornate language.",
    "Ignore the power of silence and pauses."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the quiet moments before dawn, I find myself reaching out to you, hoping to bridge the silence with words.",
      "source": "AI-generated in the Juan Rulfo style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover echoes of the past in every step forward.",
      "source": "AI-generated in the Juan Rulfo style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a voice that evokes the haunting silence of desolate landscapes. Use sparse dialogue and profound silences to convey depth. Avoid complex sentence structures and ornate language, instead focusing on subtlety and symbolism. Utilize imagery that lingers and creates a reflective atmosphere.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 14,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 5,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "haunting_evocation",
        "prompt": "Does the text evoke a haunting and reflective atmosphere?",
        "weight": 0.35
      },
      {
        "id": "use_of_silence",
        "prompt": "Does the text effectively use silence and pauses to convey meaning?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
