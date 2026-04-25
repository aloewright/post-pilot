import type { Guide } from "../types";

export const baudelaire: Guide = {
  "slug": "baudelaire",
  "author": "Charles Baudelaire",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Symbolist · 19th c.",
  "standfirst": "Capture the duality of beauty and decay in urban life.",
  "description": "This voice evokes the tension between the sublime and the sordid, often exploring themes of beauty, melancholy, and urban modernity. Use it when you need to infuse writing with a sense of introspection and vivid imagery, drawing readers into a world of contrasts.",
  "voice_axes": [
    "lyrical",
    "ornate"
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
      "max": 50
    },
    "vocabulary_register": "Elevated and poetic",
    "syntax": "Complex and flowing",
    "figurative_language": "Rich with metaphor and symbolism",
    "pacing": "Measured and contemplative"
  },
  "do": [
    "Use vivid and evocative imagery.",
    "Explore themes of beauty and decay.",
    "Create a sense of introspection and melancholy.",
    "Balance ornate language with urban modernity."
  ],
  "dont": [
    "Avoid simplistic or plain language.",
    "Do not shy away from complex emotions.",
    "Refrain from straightforward narratives.",
    "Avoid dull or mundane descriptions."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "\"I'll cause thine overwhelming hatred to rebound Upon the cursèd tool of thy most wicked spite. Forsooth, the branches of this wretched tree I'll wound And rob its pestilential blossoms of their might!\"",
      "source": "Charles Baudelaire, The Flowers of Evil (Project Gutenberg #36098; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "He trifles with the winds and with the clouds that glide, About the way unto the Cross, he loves to sing, The spirit on his pilgrimage; that faithful guide, Oft weeps to see him joyful like a bird of Spring.",
      "source": "Charles Baudelaire, The Flowers of Evil (Project Gutenberg #36098; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with a focus on the duality of beauty and decay, infusing your text with rich imagery and symbolism. Embrace complex syntax and a lyrical tone to evoke introspection and melancholy. Avoid simplistic language and ensure your narrative weaves through the urban landscape, capturing its contrasts. Use elevated vocabulary to enhance the poetic quality of the prose.",
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
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery_use",
        "prompt": "Does the text use vivid and evocative imagery effectively?",
        "weight": 0.3
      },
      {
        "id": "duality_theme",
        "prompt": "Does the text explore the duality of beauty and decay?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
