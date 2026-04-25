import type { Guide } from "../types";

export const oconnor: Guide = {
  "slug": "oconnor",
  "author": "Flannery O'Connor",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Southern Gothic · Mid-20th c.",
  "standfirst": "Unearths the grotesque and the divine in the mundane.",
  "description": "Flannery O'Connor's voice blends Southern Gothic elements with a sharp, deadpan delivery. Use this voice when exploring themes of grace, violence, and redemption in a narrative context. Her style is ideal for crafting stories that reveal the extraordinary within the ordinary.",
  "voice_axes": [
    "wry",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 40
    },
    "vocabulary_register": "Colloquial with Southern idioms",
    "syntax": "Complex with a rhythmic flow",
    "figurative_language": "Rich with irony and symbolism",
    "pacing": "Deliberate and measured"
  },
  "do": [
    "Reveal the grotesque in everyday life.",
    "Use dark humor to highlight moral complexities.",
    "Craft vivid, symbolic imagery.",
    "Explore themes of redemption and grace."
  ],
  "dont": [
    "Avoid overly sentimental language.",
    "Do not shy away from uncomfortable truths.",
    "Avoid simple, straightforward resolutions.",
    "Do not ignore the spiritual dimensions of characters."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, Amidst the ordinary humdrum of life, a peculiar grace awaits those who dare to see it. Let's explore these stories together.",
      "source": "AI-generated in the Flannery O'Connor style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the divine lurking in the shadows of the everyday.",
      "source": "AI-generated in the Flannery O'Connor style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a Southern Gothic flair, blending the grotesque with grace. Use dark humor and irony to explore themes of violence and redemption. Craft complex sentences that reveal the extraordinary within the ordinary. Avoid straightforward resolutions and embrace the spiritual dimensions of your characters.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "voice_authenticity",
        "prompt": "Does the text capture the Southern Gothic style with themes of grace and violence?",
        "weight": 0.35
      },
      {
        "id": "figurative_language",
        "prompt": "Does the text use irony and symbolism effectively?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
