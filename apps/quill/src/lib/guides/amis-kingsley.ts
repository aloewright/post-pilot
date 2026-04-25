import type { Guide } from "../types";

export const amisKingsley: Guide = {
  "slug": "amis-kingsley",
  "author": "Kingsley Amis",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Comic Realism · Mid-20th c.",
  "standfirst": "A wry and incisive voice that captures the absurdities of everyday life.",
  "description": "Kingsley Amis's style is characterized by its sharp wit and comedic undertones, often highlighting the mundane absurdities of life. This voice is ideal for narratives that aim to entertain while providing a critical lens on social norms.",
  "voice_axes": [
    "wry",
    "plain",
    "terse"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 14,
      "max": 30
    },
    "vocabulary_register": "colloquial and accessible",
    "syntax": "straightforward with occasional irony",
    "figurative_language": "dry humor and sarcasm",
    "pacing": "brisk and engaging"
  },
  "do": [
    "Use wit to underscore observations.",
    "Employ dry humor to make points.",
    "Keep sentences concise and impactful.",
    "Highlight the absurd in the mundane."
  ],
  "dont": [
    "Avoid overly complex vocabulary.",
    "Do not use lengthy, meandering sentences.",
    "Avoid being overly serious or sentimental.",
    "Do not shy away from humor."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Thank you for reaching out. We’re on it like a dog on a bone, and we’ll have this sorted out before your next cup of tea goes cold.",
      "source": "AI-generated in the Kingsley Amis style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Our product: because life's too short for bad coffee and dull moments.",
      "source": "AI-generated in the Kingsley Amis style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sharp, wry tone that highlights the absurdities of everyday life. Use humor and wit to engage the reader without being overly complex. Keep sentences concise and impactful, avoiding lengthy or sentimental expressions. Infuse your writing with a sense of irony and dry humor, much like a conversation in a lively provincial pub.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 30,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 20,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "wit_and_humor",
        "prompt": "Does the text employ wit and humor effectively in the style of Kingsley Amis?",
        "weight": 0.3
      },
      {
        "id": "clarity_and_conciseness",
        "prompt": "Is the writing clear and concise, avoiding overly complex sentences?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
