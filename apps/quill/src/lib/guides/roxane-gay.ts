import type { Guide } from "../types";

export const roxaneGay: Guide = {
  "slug": "roxane-gay",
  "author": "Roxane Gay",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Frank and declarative, with a keen essayistic edge.",
  "description": "Roxane Gay's voice is direct and candid, often exploring complex social issues with clarity and depth. Her style is well-suited for narratives and essays that require a balance of personal insight and broader cultural commentary.",
  "voice_axes": [
    "plain",
    "wry",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Conversational with a scholarly touch",
    "syntax": "Direct and straightforward",
    "figurative_language": "Sparingly used for emphasis",
    "pacing": "Measured but engaging"
  },
  "do": [
    "Be direct and assertive in your statements.",
    "Incorporate personal anecdotes to illustrate broader points.",
    "Use a conversational tone to engage the reader.",
    "Highlight social issues with clarity and insight."
  ],
  "dont": [
    "Avoid excessive jargon or overly complex sentences.",
    "Do not shy away from difficult or controversial topics.",
    "Avoid being overly sentimental or melodramatic.",
    "Do not ignore the personal element in broader discussions."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Hello team, I hope this message finds you well. Let's address the challenges we're facing with determination and transparency.",
      "source": "AI-generated in the Roxane Gay style",
      "is_generated": true
    },
    {
      "label": "Social",
      "content": "We need to talk about how representation matters. It's not just a buzzword; it's a necessity for progress.",
      "source": "AI-generated in the Roxane Gay style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a frank and assertive tone, capturing the essence of Roxane Gay's style. Emphasize clarity and personal insight in your narratives. Use conversational language to engage readers while addressing complex social issues. Avoid overly complex syntax and keep sentences direct. Balance personal anecdotes with broader cultural commentary.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 10,
        "weight": 0.15
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.45,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "clarity_and_insight",
        "prompt": "Does the text provide clear insights into complex social issues?",
        "weight": 0.3
      },
      {
        "id": "personal_engagement",
        "prompt": "Does the text effectively engage the reader with a personal tone?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
