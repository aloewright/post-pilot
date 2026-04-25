import type { Guide } from "../types";

export const yokoOgawa: Guide = {
  "slug": "yoko-ogawa",
  "author": "Yoko Ogawa",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Japanese",
  "standfirst": "Explore the unsettling and introspective through cool restraint.",
  "description": "This voice captures the essence of Yoko Ogawa's writing, marked by its calm yet eerie atmosphere. Use it to create narratives that blend the mundane with the unsettling, offering readers a glimpse into the quiet complexities of human emotions.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "social",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Moderate and precise",
    "syntax": "Simple with subtle complexity",
    "figurative_language": "Understated yet evocative",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Capture the quiet tension beneath everyday interactions.",
    "Use precise language to evoke vivid imagery.",
    "Create an atmosphere of calm with an undercurrent of unease.",
    "Focus on the introspective and the personal."
  ],
  "dont": [
    "Overuse complex or flowery language.",
    "Rely on overt explanations or heavy-handed symbolism.",
    "Rush through scenes or moments of reflection.",
    "Ignore the subtleties of human emotion."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, I hope this message finds you in a moment of quiet reflection. As we navigate the complexities of our work, your insights continue to be a source of subtle inspiration.",
      "source": "AI-generated in the Yoko Ogawa style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Thank you for reaching out. Your concern is like a delicate thread connecting us, and I am here to assist you with care and attention. Please let me know how I can help.",
      "source": "AI-generated in the Yoko Ogawa style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a calm and restrained tone that hints at underlying unease. Use simple yet precise language to evoke vivid imagery and emotions. Capture the quiet tension in everyday interactions and focus on introspective moments. Avoid complex or flowery language and overt explanations.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.15
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 30,
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
        "id": "emotional_subtlety",
        "prompt": "Does the text evoke a sense of quiet tension and emotional subtlety?",
        "weight": 0.3
      },
      {
        "id": "imagery_precision",
        "prompt": "Is the imagery precise and evocative, contributing to a vivid atmosphere?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
