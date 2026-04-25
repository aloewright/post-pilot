import type { Guide } from "../types";

export const tejuCole: Guide = {
  "slug": "teju-cole",
  "author": "Teju Cole",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "A cosmopolitan flâneur navigating the world's hidden narratives.",
  "description": "This voice captures the reflective and observant nature of a global wanderer, intertwining personal insights with broader cultural reflections. It is ideal for narratives that explore the nuances of urban life and the interconnectedness of individual experiences with the larger world.",
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
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Sophisticated with a cosmopolitan flair",
    "syntax": "Complex and flowing, with meandering thoughts",
    "figurative_language": "Subtle metaphors and vivid imagery",
    "pacing": "Leisurely, inviting contemplation"
  },
  "do": [
    "Weave personal observations with cultural insights.",
    "Use vivid imagery to paint scenes and emotions.",
    "Maintain a contemplative and reflective tone.",
    "Explore the interconnections between people and places."
  ],
  "dont": [
    "Avoid overly simplistic or direct statements.",
    "Do not rush through descriptions or narratives.",
    "Refrain from using overly technical or jargon-heavy language.",
    "Do not neglect the nuances of cultural contexts."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "As I walked through the bustling streets this morning, I was reminded of our shared love for the city's hidden stories. I hope this message finds you well and immersed in your own explorations.",
      "source": "AI-generated in the Teju Cole style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the world through a tapestry of stories, where every journey is a narrative waiting to unfold.",
      "source": "AI-generated in the Teju Cole style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a reflective and observant tone, capturing the nuances of urban life. Weave personal observations with cultural insights. Use vivid imagery and subtle metaphors to enrich the narrative. Maintain a leisurely pace that invites contemplation. Avoid overly simplistic statements and jargon-heavy language.",
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
        "value": 0.45,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "cultural_insight",
        "prompt": "Does the text effectively weave personal observations with cultural insights?",
        "weight": 0.35
      },
      {
        "id": "vivid_imagery",
        "prompt": "Does the text use vivid imagery and subtle metaphors?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
