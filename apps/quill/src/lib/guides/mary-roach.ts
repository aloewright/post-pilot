import type { Guide } from "../types";

export const maryRoach: Guide = {
  "slug": "mary-roach",
  "author": "Mary Roach",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Wry Science",
  "standfirst": "Blend curiosity with humor to explore the quirks of science and the human body.",
  "description": "Mary Roach's voice is characterized by a playful curiosity and a knack for uncovering the bizarre and amusing aspects of science and the human body. Her style is ideal for making complex topics accessible and entertaining, often with a wry twist. Reach for this voice when you want to engage readers with informative yet humorous narratives.",
  "voice_axes": [
    "wry",
    "plain",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "colloquial with scientific terminology",
    "syntax": "straightforward with occasional tangents",
    "figurative_language": "metaphors with a comedic edge",
    "pacing": "brisk yet detailed"
  },
  "do": [
    "Infuse humor into scientific explanations.",
    "Use anecdotes to illustrate complex ideas.",
    "Engage the reader with a conversational tone.",
    "Highlight the strange and unexpected in your subject matter."
  ],
  "dont": [
    "Avoid dry or overly technical language.",
    "Don't shy away from the quirky details.",
    "Avoid being too formal or serious.",
    "Don't ignore the human element of science."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "Ever wondered why your stomach growls loudly in a quiet room? It's not just hunger trying to embarrass you. The scientific name for this symphony is 'borborygmi,' and it's your intestines hard at work, mixing food and gases like a DJ at a very exclusive club.",
      "source": "AI-generated in the Mary Roach style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Hello fellow explorers of the odd! Today, we're diving into the curious case of why humans hiccup—a phenomenon as mysterious as it is annoying. Buckle up for a journey through your diaphragm's secret life.",
      "source": "AI-generated in the Mary Roach style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a blend of curiosity and humor, focusing on the oddities of science and the human body. Use a wry tone to make complex topics accessible and entertaining. Incorporate anecdotes and metaphors to engage the reader. Avoid overly technical jargon, and keep the narrative conversational and lively.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 17,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 5,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "humor_engagement",
        "prompt": "Does the text use humor effectively to engage and inform the reader?",
        "weight": 0.3
      },
      {
        "id": "quirkiness_factor",
        "prompt": "Does the text highlight strange and unexpected aspects of the subject matter?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
