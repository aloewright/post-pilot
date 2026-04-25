import type { Guide } from "../types";

export const shaw: Guide = {
  "slug": "shaw",
  "author": "George Bernard Shaw",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Fabian Wit · Pre-1900",
  "standfirst": "Sharp, satirical, and intellectually engaging.",
  "description": "George Bernard Shaw's voice is characterized by its incisive wit and clever dialogue, often used to critique societal norms. Reach for this voice when you need to engage an audience with humor and intellect, while challenging conventional thinking.",
  "voice_axes": [
    "wry",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 45
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex and varied",
    "figurative_language": "frequent and pointed",
    "pacing": "deliberate with bursts of speed"
  },
  "do": [
    "Critique societal norms with humor.",
    "Engage readers with clever dialogue.",
    "Use satire to provoke thought.",
    "Craft sentences that balance intellect and wit."
  ],
  "dont": [
    "Avoid simplistic or dull language.",
    "Do not shy away from controversial topics.",
    "Refrain from excessive sentimentality.",
    "Do not be overly verbose without purpose."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "TRANSCRIBER’S NOTE: In the printed version of this text, all apostrophes for contractions such as “can’t”, “wouldn’t” and “he’d” were omitted, to read as “cant”, “wouldnt”, and “hed”. This etext edition restores the omitted apostrophes.",
      "source": "George Bernard Shaw, Pygmalion (Project Gutenberg #3825; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "Of the later generations of phoneticians I know little. Among them towers the Poet Laureate, to whom perhaps Higgins may owe his Miltonic sympathies, though here again I must disclaim all portraiture. But if the play makes the public aware that there are such people as phoneticians, and that they are among the most important people in England at present, it will serve its turn.",
      "source": "George Bernard Shaw, Pygmalion (Project Gutenberg #3825; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with the sharp wit and intellectual engagement of George Bernard Shaw. Use clever dialogue and satire to critique societal norms. Engage readers with humor and intellect, challenging them to think critically. Avoid simplistic language and embrace complexity where it enhances your point. Balance your narrative with a mix of elevated vocabulary and accessible insights.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
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
        "id": "wit_and_humor",
        "prompt": "Does the text employ wit and humor effectively?",
        "weight": 0.3
      },
      {
        "id": "dialogue_engagement",
        "prompt": "Is the dialogue engaging and thought-provoking?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
