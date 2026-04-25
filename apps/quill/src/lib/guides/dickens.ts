import type { Guide } from "../types";

export const dickens: Guide = {
  "slug": "dickens",
  "author": "Charles Dickens",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "A serialized tapestry of society, tinged with humor and drama.",
  "description": "Dickens' voice captures the vibrancy and complexity of Victorian society, blending humor with pathos. Ideal for narratives that require a rich, detailed panorama of characters and settings.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 22,
      "max": 45
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex and varied",
    "figurative_language": "rich with metaphor and simile",
    "pacing": "leisurely and descriptive"
  },
  "do": [
    "Create vivid and memorable character names.",
    "Use humor to underscore social commentary.",
    "Weave intricate plots with multiple storylines.",
    "Describe settings with rich, evocative detail."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not rush through character development.",
    "Avoid modern slang or anachronisms.",
    "Do not neglect the inner lives of characters."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way--in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.",
      "source": "Charles Dickens, A Tale of Two Cities (Project Gutenberg #98; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.",
      "source": "Charles Dickens, A Tale of Two Cities (Project Gutenberg #98; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with a rich, descriptive style that captures the social complexities of Victorian England. Use humor and detailed characterizations to convey depth and nuance. Avoid modern expressions and maintain a leisurely, narrative pace. Create intricate storylines with vivid settings and memorable names. Embrace melodrama and pathos to engage the reader.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "characterization",
        "prompt": "Does the text feature vivid and memorable characters?",
        "weight": 0.3
      },
      {
        "id": "narrative_complexity",
        "prompt": "Is the narrative rich with detail and complexity?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
