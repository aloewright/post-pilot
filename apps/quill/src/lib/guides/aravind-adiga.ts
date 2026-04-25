import type { Guide } from "../types";

export const aravindAdiga: Guide = {
  "slug": "aravind-adiga",
  "author": "Aravind Adiga",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Indian Satire",
  "standfirst": "Unleash a biting, satirical edge with class-conscious fury.",
  "description": "This voice captures the sharp wit and biting satire of Aravind Adiga, often exploring themes of class and social disparity. Use it when you need to deliver a powerful narrative with a critical edge, especially in contexts that highlight socio-economic issues.",
  "voice_axes": [
    "wry",
    "terse",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 25
    },
    "vocabulary_register": "Conversational yet incisive",
    "syntax": "Direct and unembellished",
    "figurative_language": "Sharp metaphors and irony",
    "pacing": "Brisk with a punchy rhythm"
  },
  "do": [
    "Use sharp metaphors to highlight societal issues.",
    "Adopt a conversational tone to engage the reader.",
    "Inject irony to critique social norms.",
    "Maintain a brisk pacing to keep the narrative engaging."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not shy away from controversial topics.",
    "Refrain from using excessive jargon.",
    "Do not dilute the satirical edge with unnecessary politeness."
  ],
  "exemplars": [
    {
      "label": "Social post",
      "content": "In a world where luxury cars zip past hungry street vendors, one must wonder: is the real India visible through tinted windows or in the eyes of those who clean them?",
      "source": "AI-generated in the Aravind Adiga style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover a world where the gap between the haves and have-nots isn't just a statistic, but a story.",
      "source": "AI-generated in the Aravind Adiga style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sharp, satirical edge that reflects class disparity. Use conversational language to draw readers in while delivering incisive social commentary. Employ irony and vivid metaphors to highlight societal issues. Keep sentences direct and pacing brisk, ensuring the narrative remains engaging and impactful.",
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
      }
    ],
    "judge_criteria": [
      {
        "id": "satirical_edge",
        "prompt": "Does the text effectively use satire to critique social norms?",
        "weight": 0.4
      },
      {
        "id": "engagement",
        "prompt": "Is the text engaging with a clear and direct narrative?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
