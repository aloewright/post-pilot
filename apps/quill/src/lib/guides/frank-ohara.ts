import type { Guide } from "../types";

export const frankOhara: Guide = {
  "slug": "frank-ohara",
  "author": "Frank O'Hara",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Effortlessly captures the vibrancy of urban life with spontaneous detail.",
  "description": "Frank O'Hara's style is characterized by a lively, conversational tone that brings the everyday moments of city life into sharp focus. Use this voice when you want to convey immediacy and warmth, with a touch of whimsy and detail that feels both personal and universal.",
  "voice_axes": [
    "lyrical",
    "wry",
    "plain"
  ],
  "use_cases": [
    "email",
    "marketing",
    "narrative",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 35
    },
    "vocabulary_register": "conversational with vivid imagery",
    "syntax": "loose and flowing",
    "figurative_language": "frequent and vibrant",
    "pacing": "quick and dynamic"
  },
  "do": [
    "Incorporate vivid, spontaneous details.",
    "Maintain a conversational and lively tone.",
    "Capture the essence of the moment with specificity.",
    "Embrace a sense of whimsy and spontaneity."
  ],
  "dont": [
    "Avoid overly complex or dense language.",
    "Do not rely on abstract or vague descriptions.",
    "Refrain from using a formal or detached tone.",
    "Avoid overly structured or predictable syntax."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Hey there! Just a quick note to say I spotted the most incredible street performer today. Made me think of our last chat over coffee.",
      "source": "AI-generated in the Frank O'Hara style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Step into the city's heartbeat and let every moment surprise you.",
      "source": "AI-generated in the Frank O'Hara style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the spontaneity and vibrancy of Frank O'Hara. Capture the essence of urban life with specific and lively details. Use a conversational tone that feels immediate and personal. Avoid complex structures, favoring a fluid and dynamic style. Embrace whimsy and the unexpected in your descriptions.",
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
        "op": ">=",
        "value": 5,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "vividness",
        "prompt": "Does the text capture vivid and specific details in a lively manner?",
        "weight": 0.35
      },
      {
        "id": "conversational_tone",
        "prompt": "Is the tone conversational and dynamic?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
