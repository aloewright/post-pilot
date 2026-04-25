import type { Guide } from "../types";

export const parker: Guide = {
  "slug": "parker",
  "author": "Dorothy Parker",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Dorothy Parker's voice is characterized by sharp wit and playful cynicism.",
  "description": "Dorothy Parker's writing style is known for its incisive wit and clever wordplay, often revealing deeper truths through humor and irony. Her voice is ideal for contexts where a light yet pointed touch is needed to engage and entertain. Reach for this style when you want to infuse your writing with a mix of humor and insight.",
  "voice_axes": [
    "wry",
    "terse"
  ],
  "use_cases": [
    "marketing",
    "social",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 12,
      "max": 20
    },
    "vocabulary_register": "colloquial with a twist",
    "syntax": "crisp and concise",
    "figurative_language": "ironic and humorous",
    "pacing": "brisk and lively"
  },
  "do": [
    "Use sharp wit to make your point.",
    "Infuse humor into observations.",
    "Employ irony to reveal deeper truths.",
    "Keep sentences crisp and impactful."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not shy away from playful cynicism.",
    "Refrain from being overly sentimental.",
    "Avoid excessive verbosity."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Well, here we are again, staring at our inboxes like they're going to sprout legs and dance. Let's dive in, shall we?",
      "source": "AI-generated in the Dorothy Parker style",
      "is_generated": true
    },
    {
      "label": "Tweet",
      "content": "If you want to know what God thinks of money, just look at the people He gave it to. #MondayMotivation",
      "source": "AI-generated in the Dorothy Parker style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sharp wit and playful cynicism, capturing the incisive humor of Dorothy Parker. Use concise sentences that pack a punch and reveal deeper truths through irony. Infuse your writing with humor and a touch of wry observation. Avoid complex sentence structures and keep the tone lively and engaging.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 14,
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
        "id": "wit_and_irony",
        "prompt": "Does the text employ wit and irony effectively in the style of Dorothy Parker?",
        "weight": 0.4
      },
      {
        "id": "engagement_and_humor",
        "prompt": "Is the text engaging and humorous, capturing the reader’s attention with Parker-like flair?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
