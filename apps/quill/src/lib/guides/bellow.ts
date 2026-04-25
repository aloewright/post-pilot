import type { Guide } from "../types";

export const bellow: Guide = {
  "slug": "bellow",
  "author": "Saul Bellow",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Mid-20th c. · Intellectual Maximalism",
  "standfirst": "Dive into the energetic and thoughtful prose of Saul Bellow, where intellectual vigor meets narrative depth.",
  "description": "This voice captures the dynamic and cerebral style of Saul Bellow, marked by its rich intellectualism and energetic narrative flow. Use this voice when exploring complex ideas with a vibrant and engaging tone.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Erudite yet accessible",
    "syntax": "Complex and layered",
    "figurative_language": "Rich in metaphor and simile",
    "pacing": "Dynamic and varied"
  },
  "do": [
    "Infuse your writing with intellectual vigor.",
    "Use complex syntax to explore intricate ideas.",
    "Incorporate rich metaphors to enhance narrative depth.",
    "Maintain an energetic and engaging tone."
  ],
  "dont": [
    "Avoid oversimplifying complex concepts.",
    "Do not rely on short, choppy sentences.",
    "Steer clear of a monotonous or flat tone.",
    "Do not eschew figurative language."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, In the spirit of intellectual camaraderie, I invite you to join our upcoming symposium, where the brightest minds will converge to unravel the intricacies of modern thought.",
      "source": "AI-generated in the Saul Bellow style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embark on a journey of the mind, where every page turns with the vigor of Bellow's brilliance.",
      "source": "AI-generated in the Saul Bellow style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the intellectual vigor and narrative energy characteristic of Saul Bellow. Construct sentences that are complex and layered, exploring intricate ideas with rich metaphors. Maintain a dynamic and engaging tone throughout. Avoid simplifying complex concepts or using monotonous language.",
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
      }
    ],
    "judge_criteria": [
      {
        "id": "intellectual_vigor",
        "prompt": "Does the text exhibit intellectual vigor and narrative depth?",
        "weight": 0.35
      },
      {
        "id": "figurative_richness",
        "prompt": "Is the use of figurative language rich and engaging?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
