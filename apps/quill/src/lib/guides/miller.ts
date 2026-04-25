import type { Guide } from "../types";

export const miller: Guide = {
  "slug": "miller",
  "author": "Arthur Miller",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Mid-20th c. · American Moral Drama",
  "standfirst": "Capture the weight of social and personal responsibility.",
  "description": "Arthur Miller's voice delves into the complexities of human morality and societal expectations. Use it when exploring themes of integrity, failure, and the human condition in a dramatic context.",
  "voice_axes": [
    "lyrical",
    "wry",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 30
    },
    "vocabulary_register": "Conversational with poignant depth",
    "syntax": "Direct yet reflective",
    "figurative_language": "Metaphor-rich with moral undertones",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Explore themes of personal failure and societal pressure.",
    "Use dialogue to reveal character motivations and conflicts.",
    "Employ metaphors to underscore moral dilemmas.",
    "Maintain a balance between simplicity and depth in language."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not shy away from depicting human flaws.",
    "Avoid abstract language that obscures meaning.",
    "Do not ignore the socio-economic backdrop of the narrative."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleagues, as we navigate the challenges ahead, let's remember the core values that define our purpose and drive us forward.",
      "source": "AI-generated in the Arthur Miller style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the strength in honesty; redefine your story.",
      "source": "AI-generated in the Arthur Miller style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the moral gravity of Arthur Miller, focusing on integrity and personal struggle. Use plain language to convey complex human emotions and societal critique. Create vivid metaphors to highlight moral dilemmas. Avoid convoluted syntax and maintain a reflective tone. Capture the essence of human drama in every sentence.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 16,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.3,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "moral_depth",
        "prompt": "Does the text convey a strong sense of moral depth?",
        "weight": 0.25
      },
      {
        "id": "character_insight",
        "prompt": "Does the text provide insight into character motivations and conflicts?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
