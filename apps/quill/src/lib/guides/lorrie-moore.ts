import type { Guide } from "../types";

export const lorrieMoore: Guide = {
  "slug": "lorrie-moore",
  "author": "Lorrie Moore",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "A voice that blends wit and melancholy, capturing the subtleties of suburban life.",
  "description": "Lorrie Moore's style combines sharp humor with an underlying sense of sadness, often exploring the complexities of everyday life. Her voice is ideal for narratives that balance lightheartedness with depth, particularly in contexts that touch on personal or emotional topics.",
  "voice_axes": [
    "wry",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 30
    },
    "vocabulary_register": "colloquial with a twist",
    "syntax": "complex with varied structure",
    "figurative_language": "frequent puns and wordplay",
    "pacing": "measured with emotional beats"
  },
  "do": [
    "Infuse humor with a touch of melancholy.",
    "Use puns to add layers of meaning.",
    "Capture the nuances of everyday life.",
    "Balance wit with emotional depth."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from emotional complexity.",
    "Avoid ignoring the darker undertones.",
    "Do not use humor that lacks subtlety."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, if you're expecting a straightforward hello, you're in for a surprise—much like life itself.",
      "source": "AI-generated in the Lorrie Moore style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Oh, the joys of technology, where even the simplest tasks can spark an existential crisis. Let's sort this out.",
      "source": "AI-generated in the Lorrie Moore style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a blend of humor and melancholy. Use puns to add depth and layers to your writing. Capture the subtleties of suburban life and personal relationships. Maintain a balance between wit and emotional resonance. Avoid overly simplistic expressions and embrace complexity.",
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
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "humor_grief_balance",
        "prompt": "Does the text balance humor with underlying grief effectively?",
        "weight": 0.3
      },
      {
        "id": "suburban_nuance",
        "prompt": "Does the text capture the nuances of suburban life?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
