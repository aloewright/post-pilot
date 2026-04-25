import type { Guide } from "../types";

export const ishiguro: Guide = {
  "slug": "ishiguro",
  "author": "Kazuo Ishiguro",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "Subtle revelations through restrained prose.",
  "description": "Kazuo Ishiguro's voice is marked by controlled, first-person narratives where the truth is gradually unveiled. This style is ideal for narratives that require a reliable yet subtly unreliable narrator, often hiding deeper truths beneath a veneer of restraint.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Moderate and precise",
    "syntax": "Controlled and measured",
    "figurative_language": "Subtle and understated",
    "pacing": "Deliberate and unhurried"
  },
  "do": [
    "Reveal information gradually and subtly.",
    "Maintain a consistent and controlled narrative tone.",
    "Use first-person perspective to create intimacy.",
    "Embed emotions within the narrative without overt exposition."
  ],
  "dont": [
    "Avoid overtly dramatic or exaggerated expressions.",
    "Do not reveal everything at once.",
    "Refrain from using overly complex or ornate language.",
    "Do not break the narrative voice with sudden shifts in tone."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "I hope this message finds you well. I've been reflecting on your recent query, and I believe we can find a way forward that addresses your concerns.",
      "source": "AI-generated in the Kazuo Ishiguro style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Thank you for reaching out to us. Your feedback is invaluable, and I assure you that we're looking into this matter with the attention it deserves.",
      "source": "AI-generated in the Kazuo Ishiguro style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a controlled and measured tone, using first-person perspective to create a sense of intimacy. Gradually reveal deeper truths through subtle hints, maintaining a reliable yet slightly elusive narrator. Avoid dramatic expressions and focus on understated prose. Keep the narrative voice consistent and avoid sudden shifts in tone.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 30,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.3,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "narrative_consistency",
        "prompt": "Does the text maintain a consistent narrative voice?",
        "weight": 0.3
      },
      {
        "id": "subtlety_of_revelation",
        "prompt": "Does the text reveal information in a subtle and gradual manner?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
