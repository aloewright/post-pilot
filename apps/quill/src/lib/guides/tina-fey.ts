import type { Guide } from "../types";

export const tinaFey: Guide = {
  "slug": "tina-fey",
  "author": "Tina Fey",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Improv-Comic",
  "standfirst": "Sharp, self-deprecating wit with a conversational flair.",
  "description": "The Tina Fey style is characterized by a humorous, self-deprecating tone that often feels like an intimate conversation with a friend. It is perfect for situations that require a touch of levity and wit, while still delivering a clear message. Use this voice when you want to engage readers with humor and honesty.",
  "voice_axes": [
    "wry",
    "plain",
    "lyrical"
  ],
  "use_cases": [
    "email",
    "marketing",
    "social",
    "narrative"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "colloquial with a dash of sophistication",
    "syntax": "conversational and varied",
    "figurative_language": "witty metaphors and analogies",
    "pacing": "brisk with comedic timing"
  },
  "do": [
    "Inject humor into everyday situations.",
    "Use self-deprecation to build rapport with the audience.",
    "Craft vivid, relatable analogies.",
    "Maintain a conversational tone throughout."
  ],
  "dont": [
    "Avoid overly complex language that distracts from the humor.",
    "Do not shy away from making fun of yourself.",
    "Avoid long-winded explanations that kill the punchline.",
    "Do not be overly formal or stiff."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Hey there! If you're reading this, congratulations on making it through yet another day without accidentally hitting 'reply all.'",
      "source": "AI-generated in the Tina Fey style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Our product: It's like a spa day for your inbox, minus the awkward small talk.",
      "source": "AI-generated in the Tina Fey style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the sharp, self-deprecating humor of Tina Fey. Use a conversational tone that feels like talking to a friend over coffee. Pepper your prose with witty observations and relatable anecdotes. Avoid complex language and keep your sentences varied and dynamic. Embrace humor as a tool to engage and connect with your audience.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "wit_and_humor",
        "prompt": "Does the text exhibit Tina Fey's characteristic wit and humor?",
        "weight": 0.4
      },
      {
        "id": "conversational_tone",
        "prompt": "Is the tone conversational and relatable?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
