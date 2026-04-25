import type { Guide } from "../types";

export const hanKang: Guide = {
  "slug": "han-kang",
  "author": "Han Kang",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Korean",
  "standfirst": "Han Kang's prose evokes the haunting presence of bodily memory and quiet violence.",
  "description": "Han Kang's writing style is marked by its ability to convey deep emotions and trauma through sparse yet powerful language. Her prose often explores themes of bodily memory and the quiet, pervasive nature of violence. Use this voice when crafting narratives that require an emotional depth and a haunting, introspective quality.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Evocative and precise",
    "syntax": "Simple yet impactful",
    "figurative_language": "Metaphors of body and nature",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Employ evocative imagery to convey deep emotions.",
    "Use simple, precise language to create impact.",
    "Explore themes of memory and trauma through subtlety.",
    "Craft sentences that linger with haunting beauty."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not rely on excessive exposition.",
    "Refrain from using language that feels detached.",
    "Steer clear of clichéd or melodramatic expressions."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Team, I hope this message finds you in a moment of quiet reflection. As we move forward, let's carry with us the lessons etched in our collective memory.",
      "source": "AI-generated in the Han Kang style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embrace the silence within; discover the strength of your own story.",
      "source": "AI-generated in the Han Kang style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on emotional depth and the subtleties of human experience. Use evocative imagery to convey the haunting presence of memory and trauma. Maintain a balance between simplicity and lyricism in your prose. Avoid complex sentence structures and strive for a quiet yet powerful impact in your writing. Infuse your sentences with introspective beauty that leaves a lingering impression.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 10,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_impact",
        "prompt": "Does the text evoke deep emotions and a haunting presence?",
        "weight": 0.35
      },
      {
        "id": "imagery_use",
        "prompt": "Is evocative imagery used effectively to convey themes?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
