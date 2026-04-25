import type { Guide } from "../types";

export const stevenson: Guide = {
  "slug": "stevenson",
  "author": "Robert Louis Stevenson",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "A robust and adventurous style, perfect for tales of duality and mystery.",
  "description": "Stevenson's voice is characterized by its energetic and adventurous tone, often exploring themes of duality and mystery. Use it when crafting narratives that require a balance of action and introspection, with a touch of gothic intrigue.",
  "voice_axes": [
    "lyrical",
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
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex yet clear",
    "figurative_language": "richly metaphorical",
    "pacing": "brisk yet reflective"
  },
  "do": [
    "Engage the reader with vivid descriptions.",
    "Explore themes of duality and moral conflict.",
    "Use a robust and adventurous tone.",
    "Incorporate elements of mystery and intrigue."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from complex emotions.",
    "Refrain from using modern slang.",
    "Do not neglect the gothic elements."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "No doubt the feat was easy to Mr. Utterson; for he was undemonstrative at the best, and even his friendship seemed to be founded in a similar catholicity of good-nature. It is the mark of a modest man to accept his friendly circle ready-made from the hands of opportunity; and that was the lawyer’s way. His friends were those of his own blood or those whom he had known the longest; his affections, like ivy, were the growth of time, they implied no aptness in the object. Hence, no doubt the bond that united him to Mr. Richard Enfield, his distant kinsman, the well-known man about town. It was a nut to crack for many, what these two could see in each other, or what subject they could find in common. It was reported by those who encountered them in their Sunday walks, that they said nothing, looked singularly dull and would hail with obvious relief the appearance of a friend. For all that, the two men put the greatest store by these excursions, counted them the chief jewel of each week, and not only set aside occasions of pleasure, but even resisted the calls of business, that they might enjoy them uninterrupted.",
      "source": "Robert Louis Stevenson, The strange case of Dr. Jekyll and Mr. Hyde (Project Gutenberg #43; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "It chanced on one of these rambles that their way led them down a by-street in a busy quarter of London. The street was small and what is called quiet, but it drove a thriving trade on the weekdays. The inhabitants were all doing well, it seemed, and all emulously hoping to do better still, and laying out the surplus of their gains in coquetry; so that the shop fronts stood along that thoroughfare with an air of invitation, like rows of smiling saleswomen. Even on Sunday, when it veiled its more florid charms and lay comparatively empty of passage, the street shone out in contrast to its dingy neighbourhood, like a fire in a forest; and with its freshly painted shutters, well-polished brasses, and general cleanliness and gaiety of note, instantly caught and pleased the eye of the passenger.",
      "source": "Robert Louis Stevenson, The strange case of Dr. Jekyll and Mr. Hyde (Project Gutenberg #43; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with the adventurous and energetic tone of Robert Louis Stevenson, capturing the essence of duality and mystery. Use complex yet clear syntax, and engage readers with vivid and richly metaphorical language. Avoid modern slang and prioritize themes of moral conflict. Ensure the pacing is brisk yet allows for reflective moments.",
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
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "vividness",
        "prompt": "Does the text engage the reader with vivid and adventurous descriptions?",
        "weight": 0.3
      },
      {
        "id": "thematic_depth",
        "prompt": "Does the text explore themes of duality and mystery effectively?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
