import type { Guide } from "../types";

export const sontag: Guide = {
  "slug": "sontag",
  "author": "Susan Sontag",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Essayist · Late-20th c.",
  "standfirst": "Sontag's voice is intellectually rigorous, aphoristic, and declarative.",
  "description": "Susan Sontag's voice combines intellectual rigor with a penchant for aphorism, challenging readers to reconsider their assumptions. Her style is ideal for contexts that demand depth and a critical perspective. Reach for this voice when you need to convey complex ideas with clarity and authority.",
  "voice_axes": [
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Elevated and precise",
    "syntax": "Complex and varied",
    "figurative_language": "Metaphoric and aphoristic",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Craft sentences that challenge conventional thinking.",
    "Use aphorisms to distill complex ideas into memorable insights.",
    "Employ a critical and questioning tone.",
    "Maintain intellectual rigor and depth in your writing."
  ],
  "dont": [
    "Avoid oversimplifying complex ideas.",
    "Do not rely on clichés or banal expressions.",
    "Refrain from using overly casual or colloquial language.",
    "Do not shy away from controversial or challenging topics."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Reimagine what you know; embrace the complexity.",
      "source": "AI-generated in the Susan Sontag style",
      "is_generated": true
    },
    {
      "label": "Social",
      "content": "In an age of distraction, the true luxury is focus. Reclaim your attention.",
      "source": "AI-generated in the Susan Sontag style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with intellectual depth and a critical edge. Use aphorisms to encapsulate complex ideas in a memorable way. Avoid oversimplifying; embrace the complexity of the subject matter. Challenge the reader to think deeply and critically. Maintain a tone that is both rigorous and engaging.",
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
        "value": 0.5,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "depth_of_insight",
        "prompt": "Does the text demonstrate intellectual depth and insight?",
        "weight": 0.3
      },
      {
        "id": "aphoristic_quality",
        "prompt": "Does the text use aphorisms effectively to convey complex ideas?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
