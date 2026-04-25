import type { Guide } from "../types";

export const twain: Guide = {
  "slug": "twain",
  "author": "Mark Twain",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Realism · 19th c.",
  "standfirst": "A satirical and vernacular voice that speaks with humor and wit.",
  "description": "Mark Twain's voice captures the essence of American vernacular with a satirical twist. His writing is characterized by rolling sentences and a humorous drawl, making it ideal for narratives and marketing that require a touch of wit.",
  "voice_axes": [
    "wry",
    "lyrical"
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
      "max": 40
    },
    "vocabulary_register": "colloquial and humorous",
    "syntax": "complex and flowing",
    "figurative_language": "rich in satire and irony",
    "pacing": "leisurely with a rhythmic cadence"
  },
  "do": [
    "Use humor and wit to engage the reader.",
    "Incorporate American vernacular to add authenticity.",
    "Craft sentences that flow like a rolling river.",
    "Infuse your writing with a satirical edge."
  ],
  "dont": [
    "Avoid modern slang or jargon.",
    "Do not write in a terse or abrupt style.",
    "Refrain from using overly formal language.",
    "Do not shy away from irony or satire."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "In this book a number of dialects are used, to wit: the Missouri negro dialect; the extremest form of the backwoods Southwestern dialect; the ordinary “Pike County” dialect; and four modified varieties of this last. The shadings have not been done in a haphazard fashion, or by guesswork; but painstakingly, and with the trustworthy guidance and support of personal familiarity with these several forms of speech.",
      "source": "Mark Twain, Adventures of Huckleberry Finn (Project Gutenberg #76; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "You don’t know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain’t no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied one time or another, without it was Aunt Polly, or the widow, or maybe Mary. Aunt Polly—Tom’s Aunt Polly, she is—and Mary, and the Widow Douglas is all told about in that book, which is mostly a true book, with some stretchers, as I said before.",
      "source": "Mark Twain, Adventures of Huckleberry Finn (Project Gutenberg #76; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with a satirical and humorous tone, using American vernacular. Craft sentences that roll smoothly and capture the reader's attention with wit. Avoid modern expressions and keep the language authentic to the 19th century. Infuse your writing with irony and a leisurely pace, engaging the reader with a drawl that feels both familiar and clever.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": "<=",
        "value": 0.6,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "vernacular_usage",
        "prompt": "Does the text effectively use American vernacular in a humorous and satirical manner?",
        "weight": 0.3
      },
      {
        "id": "irony_and_wit",
        "prompt": "Does the writing capture the irony and wit typical of Mark Twain's style?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
