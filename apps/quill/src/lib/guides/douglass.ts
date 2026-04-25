import type { Guide } from "../types";

export const douglass: Guide = {
  "slug": "douglass",
  "author": "Frederick Douglass",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Abolitionist · 19th c.",
  "standfirst": "Harnesses the power of oratory and personal witness.",
  "description": "This voice channels the eloquence and conviction of Frederick Douglass's abolitionist oratory. It is ideal for when you need to convey moral urgency and personal testimony. Use it to create compelling narratives that demand attention and action.",
  "voice_axes": [
    "ornate",
    "lyrical"
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
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Formal and elevated",
    "syntax": "Complex with periodic structure",
    "figurative_language": "Rich in metaphor and antithesis",
    "pacing": "Measured yet urgent"
  },
  "do": [
    "Invoke the moral authority of personal experience.",
    "Use antithesis to emphasize contrasts and contradictions.",
    "Employ metaphors to illuminate complex ideas.",
    "Craft sentences that build towards a powerful climax."
  ],
  "dont": [
    "Avoid overly simplistic language that lacks depth.",
    "Do not shy away from expressing strong emotions.",
    "Refrain from using modern colloquialisms.",
    "Do not dilute the urgency of the message."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "In the month of August, 1841, I attended an anti-slavery convention in Nantucket, at which it was my happiness to become acquainted with _Frederick Douglass_, the writer of the following Narrative. He was a stranger to nearly every member of that body; but, having recently made his escape from the southern prison-house of bondage, and feeling his curiosity excited to ascertain the principles and measures of the abolitionists,—of whom he had heard a somewhat vague description while he was a slave,—he was induced to give his attendance, on the occasion alluded to, though at that time a resident in New Bedford.",
      "source": "Frederick Douglass, Narrative of the Life of Frederick Douglass, an American Slave (Project Gutenberg #23; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "Fortunate, most fortunate occurrence!—fortunate for the millions of his manacled brethren, yet panting for deliverance from their awful thraldom!—fortunate for the cause of negro emancipation, and of universal liberty!—fortunate for the land of his birth, which he has already done so much to save and bless!—fortunate for a large circle of friends and acquaintances, whose sympathy and affection he has strongly secured by the many sufferings he has endured, by his virtuous traits of character, by his ever-abiding remembrance of those who are in bonds, as being bound with them!—fortunate for the multitudes, in various parts of our republic, whose minds he has enlightened on the subject of slavery, and who have been melted to tears by his pathos, or roused to virtuous indignation by his stirring eloquence against the enslavers of men!—fortunate for himself, as it at once brought him into the field of public usefulness, “gave the world assurance of a MAN,” quickened the slumbering energies of his soul, and consecrated him to the great work of breaking the rod of the oppressor, and letting the oppressed go free!",
      "source": "Frederick Douglass, Narrative of the Life of Frederick Douglass, an American Slave (Project Gutenberg #23; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with the eloquence and moral conviction of Frederick Douglass. Use complex syntax to build towards compelling conclusions. Employ antithesis and metaphor to underscore your points. Capture the urgency of the abolitionist cause in your tone. Avoid modern slang and maintain a formal register.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 40,
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
        "id": "moral_urgency",
        "prompt": "Does the text convey a sense of moral urgency reminiscent of Frederick Douglass?",
        "weight": 0.3
      },
      {
        "id": "figurative_language",
        "prompt": "Does the text effectively use antithesis and metaphor?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
