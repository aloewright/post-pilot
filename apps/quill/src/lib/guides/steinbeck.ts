import type { Guide } from "../types";

export const steinbeck: Guide = {
  "slug": "steinbeck",
  "author": "John Steinbeck",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Captures the biblical cadence and realism of Dust Bowl narratives.",
  "description": "John Steinbeck's voice is rooted in the rhythms and struggles of the American Dust Bowl. His style combines a biblical cadence with a stark realism, painting vivid pictures of hardship and resilience. This voice is ideal for narratives and marketing that aim to evoke strong, emotional responses.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "colloquial and evocative",
    "syntax": "simple with rhythmic patterns",
    "figurative_language": "frequent similes and metaphors",
    "pacing": "measured and deliberate"
  },
  "do": [
    "Use vivid imagery to evoke strong emotions.",
    "Incorporate similes and metaphors to enhance storytelling.",
    "Maintain a rhythmic cadence in your sentences.",
    "Focus on themes of struggle and resilience."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Don't shy away from the harsh realities of life.",
    "Refrain from using overly technical language.",
    "Avoid breaking the narrative flow with abrupt shifts."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "We understand the weight of struggle and the yearning for relief. We're here to help you navigate through the challenges and find the support you need. Reach out to us anytime, and we'll walk this path together.",
      "source": "AI-generated in the John Steinbeck style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Find hope in the harvest of your dreams, even when the soil is dry and the sun sets low.",
      "source": "AI-generated in the John Steinbeck style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the cadence of a biblical passage, capturing the grit and resilience of Dust Bowl America. Use simple yet evocative language to paint vivid pictures of hardship and hope. Avoid complex sentence structures and maintain a rhythmic flow. Incorporate similes and metaphors to deepen the narrative impact. Focus on themes of struggle, community, and endurance.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.15
      },
      {
        "metric": "abstract_per_para",
        "op": "<=",
        "value": 2,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_evocation",
        "prompt": "Does the text evoke strong emotions and paint vivid pictures?",
        "weight": 0.25
      },
      {
        "id": "rhythmic_cadence",
        "prompt": "Does the writing maintain a rhythmic and lyrical cadence?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
