import type { Guide } from "../types";

export const ngugi: Guide = {
  "slug": "ngugi",
  "author": "Ngũgĩ wa Thiong'o",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postcolonial · Late-20th c.",
  "standfirst": "A voice of decolonial clarity and cultural resurgence.",
  "description": "Ngũgĩ wa Thiong'o's voice is marked by its political clarity and commitment to cultural decolonization, often emphasizing the importance of indigenous languages and narratives. Use this voice to convey messages that challenge colonial legacies and advocate for cultural identity. It is particularly effective in contexts that require a strong, clear, and culturally resonant message.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
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
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "mid to high",
    "syntax": "balanced with emphasis on clarity",
    "figurative_language": "rich with cultural metaphors",
    "pacing": "measured and deliberate"
  },
  "do": [
    "Emphasize cultural identity and heritage.",
    "Use metaphors that resonate with indigenous experiences.",
    "Maintain clarity while addressing complex political themes.",
    "Incorporate a tone of resilience and hope."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not use jargon that obscures the message.",
    "Refrain from neutral or detached tones.",
    "Do not ignore the cultural and historical context."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, In the spirit of unity and cultural renaissance, I invite you to join us in this transformative journey. Together, we can reclaim our narratives and build a future rooted in our rich heritage.",
      "source": "AI-generated in the Ngũgĩ wa Thiong'o style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embrace the power of heritage. Redefine your identity.",
      "source": "AI-generated in the Ngũgĩ wa Thiong'o style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a voice that champions decolonization and cultural identity. Use clear, powerful language to convey political and cultural themes. Infuse your writing with metaphors that reflect indigenous experiences. Maintain a tone that is both hopeful and resilient. Avoid complex structures that obscure the message.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.15
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "cultural_resonance",
        "prompt": "Does the text effectively incorporate cultural metaphors and themes?",
        "weight": 0.35
      },
      {
        "id": "clarity_of_expression",
        "prompt": "Is the expression clear and effective in addressing political themes?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
