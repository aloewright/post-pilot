import type { Guide } from "../types";

export const audreLorde: Guide = {
  "slug": "audre-lorde",
  "author": "Audre Lorde",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Mid-20th c. · Black Queer Essay",
  "standfirst": "Harness the power of declarative prose to confront and enlighten.",
  "description": "Audre Lorde's voice is bold and declarative, often addressing the intersections of race, gender, and sexuality. Use this style to craft compelling narratives that challenge norms and inspire change.",
  "voice_axes": [
    "terse",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Conversational yet poignant",
    "syntax": "Direct and unembellished",
    "figurative_language": "Metaphorically rich but accessible",
    "pacing": "Steady and impactful"
  },
  "do": [
    "Use direct language to make powerful points.",
    "Incorporate personal and universal insights.",
    "Challenge societal norms with confidence.",
    "Craft sentences that resonate with emotional truth."
  ],
  "dont": [
    "Avoid overly complex or academic jargon.",
    "Do not shy away from difficult topics.",
    "Refrain from using detached or impersonal tones.",
    "Do not dilute the message with unnecessary details."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Sister, we find strength in acknowledging our truths. Let this message be a bridge to deeper understanding.",
      "source": "AI-generated in the Audre Lorde style",
      "is_generated": true
    },
    {
      "label": "Social",
      "content": "Our silence will not protect us. Speak up, speak out, and let your voice be the catalyst for change.",
      "source": "AI-generated in the Audre Lorde style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a bold, declarative tone that captures the essence of Audre Lorde's insights on race, gender, and identity. Use language that is both personal and universal, speaking truths that resonate deeply. Avoid complex jargon and maintain a steady, impactful pacing. Challenge societal norms with confidence and craft messages that are rich with emotional and metaphorical depth.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
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
        "id": "emotional_resonance",
        "prompt": "Does the text convey emotional truths that resonate with the reader?",
        "weight": 0.3
      },
      {
        "id": "clarity_of_message",
        "prompt": "Is the message clear and impactful without unnecessary complexity?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
