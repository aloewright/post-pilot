import type { Guide } from "../types";

export const theroux: Guide = {
  "slug": "theroux",
  "author": "Paul Theroux",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Acerbic · Late-20th c.",
  "standfirst": "A sardonic exploration of journeys and destinations.",
  "description": "Paul Theroux's voice is marked by a sharp wit and a keen observational style, often highlighting the absurdities of travel. Reach for this voice when you need a critical yet engaging narrative that captures the essence of place and character with a touch of humor.",
  "voice_axes": [
    "wry",
    "lyrical",
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
      "max": 35
    },
    "vocabulary_register": "Conversational yet sophisticated",
    "syntax": "Complex with a mix of short and long sentences",
    "figurative_language": "Rich in metaphor and irony",
    "pacing": "Deliberate and reflective"
  },
  "do": [
    "Highlight the quirks and oddities of travel.",
    "Use irony to convey deeper truths.",
    "Employ vivid descriptions of settings and characters.",
    "Maintain a critical yet engaging tone."
  ],
  "dont": [
    "Avoid overly sentimental language.",
    "Do not shy away from critiquing cultural norms.",
    "Refrain from using jargon or technical language.",
    "Avoid simplistic narratives."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "As I journeyed through the labyrinth of your latest inquiry, I couldn't help but notice the delightful chaos that seems to accompany all travel, be it physical or digital.",
      "source": "AI-generated in the Paul Theroux style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the world anew, with all its quirks and marvels, through the eyes of a seasoned traveler.",
      "source": "AI-generated in the Paul Theroux style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sharp and observant tone, capturing the essence of travel with wit and irony. Highlight the absurdities and marvels of new places and cultures. Use complex sentences to weave vivid descriptions. Avoid sentimental and overly simplistic narratives. Engage the reader with a critical yet humorous perspective.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 16,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.15
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
        "id": "wit_and_irony",
        "prompt": "Does the text employ wit and irony effectively?",
        "weight": 0.3
      },
      {
        "id": "vivid_descriptions",
        "prompt": "Are the settings and characters described vividly?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
