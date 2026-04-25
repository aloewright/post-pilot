import type { Guide } from "../types";

export const hawthorne: Guide = {
  "slug": "hawthorne",
  "author": "Nathaniel Hawthorne",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Romantic · 19th c.",
  "standfirst": "A voice steeped in allegory and moral complexity.",
  "description": "Nathaniel Hawthorne's style weaves rich allegories with a focus on moral ambiguity and symbolism. His narratives often explore themes of sin, guilt, and redemption within a Puritanical context. Use this voice when crafting narratives that require deep introspection and symbolic depth.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "docs"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 25,
      "max": 60
    },
    "vocabulary_register": "elevated and archaic",
    "syntax": "complex and flowing",
    "figurative_language": "rich in symbolism and allegory",
    "pacing": "deliberate and reflective"
  },
  "do": [
    "Craft sentences with layered meaning.",
    "Incorporate symbolism to enhance narrative depth.",
    "Explore themes of morality and ambiguity.",
    "Use a rich, descriptive vocabulary."
  ],
  "dont": [
    "Avoid modern slang or colloquial expressions.",
    "Do not simplify complex ideas to mere platitudes.",
    "Refrain from using overly terse or abrupt sentences.",
    "Avoid straightforward, unambiguous conclusions."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "It will be seen, likewise, that this Custom-House sketch has a certain propriety, of a kind always recognized in literature, as explaining how a large portion of the following pages came into my possession, and as offering proofs of the authenticity of a narrative therein contained. This, in fact,—a desire to put myself in my true position as editor, or very little more, of the most prolix among the tales that make up my volume,—this, and no other, is my true reason for assuming a personal relation with the public. In accomplishing the main purpose, it has appeared allowable, by a few extra touches, to give a faint representation of a mode of life not heretofore described, together with some of the characters that move in it, among whom the author happened to make one.",
      "source": "Nathaniel Hawthorne, The Scarlet Letter (Project Gutenberg #25344; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "Cluster all these individuals together, as they sometimes were, with other miscellaneous ones to diversify the group, and, for the time being, it made the Custom-House a stirring scene. More frequently, however, on ascending the steps, you would discern—in the entry, if it were summer time, or in their appropriate rooms, if wintry or inclement weather—a row of venerable figures, sitting in old-fashioned chairs, which were tipped on their hind legs back against the wall. Oftentimes they were asleep, but occasionally might be heard talking together, in voices between speech and a snore, and with that lack of energy that distinguishes the occupants of almshouses, and all other human beings who depend for subsistence on charity, on monopolized labor, or anything else, but their own independent exertions. These old gentlemen—seated, like Matthew, at the receipt of customs, but not very liable to be summoned thence, like him, for apostolic errands—were Custom-House officers.",
      "source": "Nathaniel Hawthorne, The Scarlet Letter (Project Gutenberg #25344; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with an elevated, archaic vocabulary and complex syntax. Use rich symbolism and allegory to convey moral ambiguity. Craft sentences that are reflective and deliberate, exploring themes of sin and redemption. Avoid modern slang and straightforward conclusions.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 60,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "symbolism_usage",
        "prompt": "Does the text use rich symbolism effectively?",
        "weight": 0.3
      },
      {
        "id": "moral_ambiguity",
        "prompt": "Does the text explore moral ambiguity with depth?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
