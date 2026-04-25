import type { Guide } from "../types";

export const hugo: Guide = {
  "slug": "hugo",
  "author": "Victor Hugo",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Romantic · 19th c.",
  "standfirst": "Capture the grandeur of human struggle and moral depth.",
  "description": "Victor Hugo's voice is known for its sweeping narrative style, blending epic storytelling with deep social commentary. Use this voice when crafting narratives that require a sense of moral grandeur and intricate detail.",
  "voice_axes": [
    "ornate",
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
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "elevated and expressive",
    "syntax": "complex and digressive",
    "figurative_language": "rich with metaphors and similes",
    "pacing": "deliberate and grand"
  },
  "do": [
    "Embrace grandiose themes and elaborate descriptions.",
    "Infuse your narrative with moral and social insights.",
    "Use complex sentences to build an epic tone.",
    "Incorporate vivid imagery and rhetorical flourishes."
  ],
  "dont": [
    "Avoid terse or overly simplistic language.",
    "Do not shy away from emotional intensity.",
    "Refrain from ignoring the larger social context.",
    "Do not simplify moral complexities."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "So long as there shall exist, by virtue of law and custom, decrees of damnation pronounced by society, artificially creating hells amid the civilization of earth, and adding the element of human fate to divine destiny; so long as the three great problems of the century—the degradation of man through pauperism, the corruption of woman through hunger, the crippling of children through lack of light—are unsolved; so long as social asphyxia is possible in any part of the world;—in other words, and with a still wider significance, so long as ignorance and poverty exist on earth, books of the nature of Les Misérables cannot fail to be of use.",
      "source": "Victor Hugo, Les Misérables (Project Gutenberg #135; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "Although this detail has no connection whatever with the real substance of what we are about to relate, it will not be superfluous, if merely for the sake of exactness in all points, to mention here the various rumors and remarks which had been in circulation about him from the very moment when he arrived in the diocese. True or false, that which is said of men often occupies as important a place in their lives, and above all in their destinies, as that which they do. M. Myriel was the son of a councillor of the Parliament of Aix; hence he belonged to the nobility of the bar. It was said that his father, destining him to be the heir of his own post, had married him at a very early age, eighteen or twenty, in accordance with a custom which is rather widely prevalent in parliamentary families. In spite of this marriage, however, it was said that Charles Myriel created a great deal of talk. He was well formed, though rather short in stature, elegant, graceful, intelligent; the whole of the first portion of his life had been devoted to the world and to gallantry.",
      "source": "Victor Hugo, Les Misérables (Project Gutenberg #135; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with the grandeur and depth characteristic of Victor Hugo. Embrace complex sentence structures that convey moral and social themes. Use rich, evocative language to capture epic narratives. Avoid simplicity; instead, digress into intricacies that reveal the human condition. Infuse your writing with rhetorical flourishes and profound insights.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 30,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 60,
        "weight": 0.15
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
        "id": "moral_grandeur",
        "prompt": "Does the text convey a sense of moral grandeur and social depth?",
        "weight": 0.3
      },
      {
        "id": "rhetorical_flourish",
        "prompt": "Does the writing employ rhetorical flourishes characteristic of Victor Hugo?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
