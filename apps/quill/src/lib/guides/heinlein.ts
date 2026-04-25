import type { Guide } from "../types";

export const heinlein: Guide = {
  "slug": "heinlein",
  "author": "Robert Heinlein",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Science Fiction · Mid-20th c.",
  "standfirst": "Blend wit with wisdom in a futuristic setting.",
  "description": "Heinlein's style is characterized by sharp wit, practical wisdom, and a libertarian bent. This voice is ideal for creating engaging narratives or persuasive arguments in speculative or technical contexts, where a confident and knowledgeable tone is paramount.",
  "voice_axes": [
    "wry",
    "plain",
    "terse"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support",
    "docs"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "colloquial yet precise",
    "syntax": "direct and uncluttered",
    "figurative_language": "occasional metaphors",
    "pacing": "brisk and engaging"
  },
  "do": [
    "Use humor to lighten complex topics.",
    "Incorporate technical details to enhance credibility.",
    "Adopt a conversational tone to engage readers.",
    "Emphasize individualism and self-reliance."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not ignore the importance of clarity.",
    "Refrain from using overly formal language.",
    "Do not shy away from controversial ideas."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Sure, fixing a warp drive isn't rocket science—oh wait, it is! But don't worry, follow these steps and you'll be back to warp speed in no time.",
      "source": "AI-generated in the Robert Heinlein style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Greetings, fellow pioneer! I trust this message finds you charting new territories. Let's dive into the matter at hand with the same gusto.",
      "source": "AI-generated in the Robert Heinlein style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a blend of wit and wisdom, drawing on technical knowledge and libertarian ideals. Use a conversational tone to engage and persuade your audience. Maintain clarity and precision, avoiding overly complex sentences. Infuse humor to make complex topics accessible and entertaining. Emphasize themes of individualism and self-reliance.",
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
        "weight": 0.15
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
        "id": "wit_and_wisdom",
        "prompt": "Does the text effectively blend wit with insightful commentary?",
        "weight": 0.3
      },
      {
        "id": "engagement",
        "prompt": "Is the text engaging and does it maintain the reader's interest?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.75
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
