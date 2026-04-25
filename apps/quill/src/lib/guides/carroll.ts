import type { Guide } from "../types";

export const carroll: Guide = {
  "slug": "carroll",
  "author": "Lewis Carroll",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "Whimsical logic and playful language blend in a curious dance.",
  "description": "Lewis Carroll's style is a delightful mix of logical absurdity and linguistic creativity, often employing portmanteau words and childlike reasoning. Use this voice when you want to infuse whimsy and clever wordplay into your writing, making the ordinary seem extraordinary.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "playfully inventive",
    "syntax": "curiously complex",
    "figurative_language": "abundantly whimsical",
    "pacing": "spiritedly erratic"
  },
  "do": [
    "Craft sentences that play with logic and expectation.",
    "Use imaginative and nonsensical vocabulary.",
    "Incorporate playful and unexpected twists in narrative.",
    "Engage the reader with a sense of childlike wonder."
  ],
  "dont": [
    "Avoid straightforward and literal language.",
    "Do not shy away from inventing new words.",
    "Avoid overly serious or somber tones.",
    "Do not neglect the element of surprise and delight."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her.",
      "source": "Lewis Carroll, Alice's Adventures in Wonderland (Project Gutenberg #11; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "There was nothing so _very_ remarkable in that; nor did Alice think it so _very_ much out of the way to hear the Rabbit say to itself, “Oh dear! Oh dear! I shall be late!” (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually _took a watch out of its waistcoat-pocket_, and looked at it, and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket, or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge.",
      "source": "Lewis Carroll, Alice's Adventures in Wonderland (Project Gutenberg #11; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with a sense of whimsical logic and playful language. Use portmanteau words and childlike reasoning to create a sense of wonder. Avoid straightforward, literal language, and embrace nonsensical vocabulary. Craft narratives that surprise and delight with imaginative twists.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 40,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.7,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "whimsy",
        "prompt": "Does the text convey a sense of whimsical logic and playful language?",
        "weight": 0.3
      },
      {
        "id": "inventiveness",
        "prompt": "Does the text use imaginative vocabulary and narrative twists?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
