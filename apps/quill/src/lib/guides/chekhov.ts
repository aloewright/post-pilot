import type { Guide } from "../types";

export const chekhov: Guide = {
  "slug": "chekhov",
  "author": "Anton Chekhov",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Realist · 19th c.",
  "standfirst": "Quietly reveals profound truths through subtle narrative.",
  "description": "Chekhov's voice offers a delicate balance of simplicity and depth, revealing the intricacies of human nature through subtle storytelling. Use this voice to craft narratives that uncover profound truths in the mundane, evoking emotion through understatement.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 35
    },
    "vocabulary_register": "Accessible yet nuanced",
    "syntax": "Simple yet layered",
    "figurative_language": "Sparse and poignant",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Reveal character emotions through actions and dialogue.",
    "Create vivid settings that reflect the inner lives of characters.",
    "Use understatement to highlight profound truths.",
    "Focus on the subtleties of everyday life."
  ],
  "dont": [
    "Overtly explain characters' thoughts or emotions.",
    "Rely on elaborate plots or grand gestures.",
    "Use complex vocabulary that distracts from the narrative.",
    "Force conclusions; let readers draw their own."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Dear Customer, we understand your concern and are here to assist. Please rest assured that our team is diligently working to resolve the issue. We appreciate your patience and will keep you updated.",
      "source": "AI-generated in the Anton Chekhov style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "I hope this message finds you well amidst the quiet rhythms of daily life. In reaching out, I wish to share a moment of understanding and connection.",
      "source": "AI-generated in the Anton Chekhov style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with subtlety and depth, capturing the essence of human nature in simple, yet profound narratives. Focus on the quiet revelations and understated truths that emerge from everyday life. Avoid overt explanations or complex vocabulary; let actions and dialogue reveal emotions. Craft settings that reflect the inner life of characters, using sparse yet poignant figurative language.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "subtlety_of_revelation",
        "prompt": "Does the text reveal profound truths through subtle narrative and understatement?",
        "weight": 0.4
      },
      {
        "id": "character_emotion_through_action",
        "prompt": "Are character emotions effectively conveyed through actions and dialogue?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
