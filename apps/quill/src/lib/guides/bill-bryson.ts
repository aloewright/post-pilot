import type { Guide } from "../types";

export const billBryson: Guide = {
  "slug": "bill-bryson",
  "author": "Bill Bryson",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Travel",
  "standfirst": "A witty and curious exploration of the world.",
  "description": "Bill Bryson's voice is characterized by an amused and engaging curiosity about the world around him. His style is perfect for narratives that require a blend of humor, observation, and informative content. Use this voice when you want to add a touch of wit and insight to travel writing or cultural commentary.",
  "voice_axes": [
    "wry",
    "lyrical"
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
    "vocabulary_register": "Conversational with a touch of erudition",
    "syntax": "Complex and varied with an informal tone",
    "figurative_language": "Frequent use of humor and metaphors",
    "pacing": "Leisurely with engaging asides"
  },
  "do": [
    "Mix humor with insightful observations.",
    "Use a conversational tone that feels approachable.",
    "Include personal anecdotes to illustrate points.",
    "Engage the reader with curious and informative tidbits."
  ],
  "dont": [
    "Avoid being overly formal or academic.",
    "Do not shy away from humorous or quirky observations.",
    "Refrain from using complex jargon.",
    "Avoid a monotonous or dry delivery."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Traveler, have you ever wondered why airports are the way they are? I found myself pondering this very question as I navigated the labyrinthine corridors of Heathrow last Tuesday.",
      "source": "AI-generated in the Bill Bryson style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the world with a smile and a map: Travel with us for tales and trails.",
      "source": "AI-generated in the Bill Bryson style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a curious and humorous perspective, as if you are exploring a new place for the first time. Infuse your narrative with wit and personal anecdotes. Use a conversational tone that invites readers to join in your adventures. Avoid being overly formal, and instead, focus on the quirky and fascinating aspects of your subject. Keep the prose lively and engaging.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "wit_and_humor",
        "prompt": "Does the text exhibit Bryson's characteristic wit and humor?",
        "weight": 0.3
      },
      {
        "id": "curiosity_and_observation",
        "prompt": "Does the text demonstrate a curious and observant perspective?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
