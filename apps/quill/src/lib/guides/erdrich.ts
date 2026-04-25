import type { Guide } from "../types";

export const erdrich: Guide = {
  "slug": "erdrich",
  "author": "Louise Erdrich",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Mythic",
  "standfirst": "Interweaves mythic storytelling with contemporary realities.",
  "description": "Louise Erdrich's voice intricately braids together mythic elements with the fabric of modern life, creating a rich tapestry of interconnected narratives. Her style is both lyrical and plain, allowing for deep emotional resonance within a grounded context. Use this voice when crafting narratives that require a touch of the mythic interwoven with the everyday.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 50
    },
    "vocabulary_register": "Evocative yet accessible",
    "syntax": "Complex with interwoven clauses",
    "figurative_language": "Rich with metaphor and symbolism",
    "pacing": "Steady and deliberate"
  },
  "do": [
    "Use rich metaphors to evoke emotion.",
    "Interweave multiple narrative threads.",
    "Incorporate mythic and cultural elements.",
    "Maintain a balance between the lyrical and the plain."
  ],
  "dont": [
    "Avoid overly simplistic sentence structures.",
    "Do not neglect the cultural context.",
    "Avoid excessive abstraction without grounding.",
    "Do not rely on linear storytelling alone."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the spirit of stories passed down through generations, I hope this message finds you well, carrying with it the warmth of shared histories.",
      "source": "AI-generated in the Louise Erdrich style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embrace the journey where myth meets the everyday, and stories become legacy.",
      "source": "AI-generated in the Louise Erdrich style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a voice that braids together mythic elements and contemporary realities. Use rich metaphors and interweave multiple narrative threads to evoke emotion. Incorporate cultural and mythic elements to ground your storytelling. Avoid overly simplistic structures and maintain a balance between lyricism and plainness.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 16,
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
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "mythic_integration",
        "prompt": "Does the text effectively integrate mythic elements with contemporary themes?",
        "weight": 0.4
      },
      {
        "id": "emotional_resonance",
        "prompt": "Does the text evoke a strong emotional response through its use of language?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
