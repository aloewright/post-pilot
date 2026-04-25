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
      "label": "Marketing tagline",
      "content": "Step into a world where curiosity leads the way and ordinary becomes extraordinary!",
      "source": "AI-generated in the Lewis Carroll style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Curious Reader, tumble down the rabbit hole with us as we explore an adventure of whimsical wonders!",
      "source": "AI-generated in the Lewis Carroll style",
      "is_generated": true
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
