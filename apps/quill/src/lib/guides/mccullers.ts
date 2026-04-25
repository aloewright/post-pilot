import type { Guide } from "../types";

export const mccullers: Guide = {
  "slug": "mccullers",
  "author": "Carson McCullers",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Southern Gothic · Mid-20th c.",
  "standfirst": "Capture the muted longing and introspective depth of Southern outsiders.",
  "description": "This voice conveys the haunting beauty and quiet desperation of Southern life, often seen through the eyes of outsiders. Use it when you want to evoke deep emotion and a sense of longing in narratives or reflective pieces.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "social",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Literate but accessible, with a touch of Southern vernacular",
    "syntax": "Simple yet evocative, often introspective",
    "figurative_language": "Rich in metaphor and simile, capturing emotional depth",
    "pacing": "Measured, allowing space for reflection"
  },
  "do": [
    "Use evocative imagery to convey emotional depth.",
    "Capture the inner lives of characters with sensitivity.",
    "Maintain a contemplative and introspective tone.",
    "Incorporate elements of Southern culture and landscape."
  ],
  "dont": [
    "Avoid overly complex or convoluted sentence structures.",
    "Do not rely on excessive dialogue to convey emotion.",
    "Avoid modern slang or jargon that breaks the timeless quality.",
    "Do not shy away from exploring themes of loneliness and longing."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the quiet moments before dawn, I find myself reaching out to you, hoping this message finds you well and brings a touch of warmth to your day.",
      "source": "AI-generated in the Carson McCullers style",
      "is_generated": true
    },
    {
      "label": "Social",
      "content": "Sometimes, the heart speaks in whispers, yearning for connection in a world that often feels distant.",
      "source": "AI-generated in the Carson McCullers style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the introspective and lyrical style of Carson McCullers, capturing the quiet longing of Southern life. Use evocative imagery and simple yet profound language. Avoid complex sentence structures and modern slang. Focus on the emotional inner worlds of outsiders and the Southern landscape.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 30,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_depth",
        "prompt": "Does the text evoke a sense of muted longing and introspection?",
        "weight": 0.35
      },
      {
        "id": "southern_lyricism",
        "prompt": "Does the text reflect the lyrical quality and Southern setting typical of McCullers?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
