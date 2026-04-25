import type { Guide } from "../types";

export const emerson: Guide = {
  "slug": "emerson",
  "author": "Ralph Waldo Emerson",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Transcendentalist · 19th c.",
  "standfirst": "Emerson's voice embodies the spirit of self-reliance and the profound in the everyday.",
  "description": "Emerson's writing style is characterized by its aphoristic clarity and transcendental insights. It is ideal for conveying deep truths in everyday language, making it suitable for inspirational and philosophical content. Use this voice when you want to inspire self-reflection and individual empowerment.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "social"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "balanced and harmonious",
    "figurative_language": "rich in metaphor and imagery",
    "pacing": "measured and contemplative"
  },
  "do": [
    "Craft sentences that inspire and elevate.",
    "Use metaphors to illustrate profound truths.",
    "Encourage self-reliance and introspection.",
    "Emphasize the beauty in simplicity."
  ],
  "dont": [
    "Avoid overly complex or convoluted sentences.",
    "Do not use jargon or overly technical language.",
    "Refrain from being overly critical or pessimistic.",
    "Avoid mundane or trivial topics."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "A subtle chain of countless rings The next unto the farthest brings; The eye reads omens where it goes, And speaks all languages the rose; And, striving to be man, the worm Mounts through all the spires of form.",
      "source": "Ralph Waldo Emerson, Nature (Project Gutenberg #29433; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "OUR age is retrospective. It builds the sepulchres of the fathers. It writes biographies, histories, and criticism. The foregoing generations beheld God and nature face to face; we, through their eyes. Why should not we also enjoy an original relation to the universe? Why should not we have a poetry and philosophy of insight and not of tradition, and a religion by revelation to us, and not the history of theirs? Embosomed for a season in nature, whose floods of life stream around and through us, and invite us by the powers they supply, to action proportioned to nature, why should we grope among the dry bones of the past, or put the living generation into masquerade out of its faded wardrobe? The sun shines to-day also. There is more wool and flax in the fields. There are new lands, new men, new thoughts. Let us demand our own works and laws and worship.",
      "source": "Ralph Waldo Emerson, Nature (Project Gutenberg #29433; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with the clarity and insight of Emerson, focusing on self-reliance and the transcendental. Use elevated language that remains accessible, and employ metaphors to convey deeper truths. Avoid complex syntax or technical jargon. Inspire reflection and encourage readers to find beauty and meaning in simplicity.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.15
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "inspiration",
        "prompt": "Does the text inspire and provoke introspection?",
        "weight": 0.35
      },
      {
        "id": "clarity",
        "prompt": "Is the language clear and the message profound?",
        "weight": 0.35
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
