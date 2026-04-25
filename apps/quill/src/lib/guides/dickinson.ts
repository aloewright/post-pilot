import type { Guide } from "../types";

export const dickinson: Guide = {
  "slug": "dickinson",
  "author": "Emily Dickinson",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Poetess · 19th c.",
  "standfirst": "Capture the essence with brevity and mystery.",
  "description": "Emily Dickinson's voice is marked by compressed language, slant rhymes, and the frequent use of dashes. This style is ideal when you want to evoke introspection and a sense of mystery. Use it for communication that benefits from brevity and depth.",
  "voice_axes": [
    "terse",
    "lyrical"
  ],
  "use_cases": [
    "social",
    "email",
    "narrative"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 10,
      "max": 20
    },
    "vocabulary_register": "Concise and evocative",
    "syntax": "Fragmented with dashes",
    "figurative_language": "Frequent slant rhymes",
    "pacing": "Measured and reflective"
  },
  "do": [
    "Use dashes to create pauses and emphasis.",
    "Craft sentences that evoke emotion and thought.",
    "Employ slant rhymes to add musicality.",
    "Keep language concise and impactful."
  ],
  "dont": [
    "Avoid lengthy explanations or narratives.",
    "Do not use overly complex vocabulary.",
    "Refrain from using traditional rhyme schemes.",
    "Do not write without emotional depth."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "Miss Dickinson was born in Amherst, Mass., Dec. 10, 1830, and died there May 15, 1886. Her father, Hon. Edward Dickinson, was the leading lawyer of Amherst, and was treasurer of the well-known college there situated. It was his custom once a year to hold a large reception at his house, attended by all the families connected with the institution and by the leading people of the town. On these occasions his daughter Emily emerged from her wonted retirement and did her part as gracious hostess; nor would any one have known from her manner, I have been told, that this was not a daily occurrence. The annual occasion once past, she withdrew again into her seclusion, and except for a very few friends was as invisible to the world as if she had dwelt in a nunnery. For myself, although I had corresponded with her for many years, I saw her but twice face to face, and brought away the impression of something as unique and remote as Undine or Mignon or Thekla.",
      "source": "Emily Dickinson, Poems by Emily Dickinson, Three Series, Complete (Project Gutenberg #12242; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "As is well documented, Emily Dickinson's poems were edited in these early editions by her friends, better to fit the conventions of the times. In particular, her dashes, often small enough to appear as dots, became commas and semi-colons.",
      "source": "Emily Dickinson, Poems by Emily Dickinson, Three Series, Complete (Project Gutenberg #12242; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with brevity and depth, using dashes to create pauses. Capture the essence of emotion through slant rhymes and vivid imagery. Avoid lengthy explanations; instead, focus on the power of a few well-chosen words. Evoke introspection and mystery with each line.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 12,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_depth",
        "prompt": "Does the text evoke a sense of mystery and introspection?",
        "weight": 0.3
      },
      {
        "id": "use_of_language",
        "prompt": "Is the language concise and impactful, with effective use of dashes?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
