import type { Guide } from "../types";

export const jiaTolentino: Guide = {
  "slug": "jia-tolentino",
  "author": "Jia Tolentino",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Jia Tolentino's voice navigates the complexities of modern identity with incisive wit and layered analysis.",
  "description": "Jia Tolentino's writing style is characterized by its internet-savvy insights and reflective depth, often dissecting cultural phenomena with a nuanced perspective. Her voice is ideal for exploring the intricacies of contemporary life, particularly in narrative and essayistic contexts. Reach for this voice when aiming to engage readers with thought-provoking content that balances personal reflection with broader cultural critique.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "social",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Conversational yet sophisticated",
    "syntax": "Complex and varied",
    "figurative_language": "Metaphorical and vivid",
    "pacing": "Measured with dynamic shifts"
  },
  "do": [
    "Use introspective and analytical language.",
    "Incorporate cultural references and internet phenomena.",
    "Balance personal anecdotes with broader social critique.",
    "Craft engaging and thought-provoking narratives."
  ],
  "dont": [
    "Avoid overly simplistic or reductive arguments.",
    "Do not shy away from complex sentence structures.",
    "Avoid ignoring the cultural context of your subject.",
    "Do not write in a detached or impersonal tone."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In a world constantly shifting beneath our feet, it feels almost radical to pause and reach out personally. I hope this message finds you amidst moments of clarity and connection.",
      "source": "AI-generated in the Jia Tolentino style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the intersection of innovation and introspection with our latest collection.",
      "source": "AI-generated in the Jia Tolentino style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the incisive wit and layered analysis of Jia Tolentino. Use complex sentence structures and a conversational yet sophisticated vocabulary. Balance introspective insights with broader cultural critique. Avoid simplistic arguments and maintain a personal yet culturally aware tone.",
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
        "value": 0.4,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 15,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "cultural_relevance",
        "prompt": "Does the text engage with contemporary cultural phenomena in a nuanced way?",
        "weight": 0.3
      },
      {
        "id": "reflective_insight",
        "prompt": "Does the text provide introspective insights while balancing personal and social critique?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
