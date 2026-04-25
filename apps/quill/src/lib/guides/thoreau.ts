import type { Guide } from "../types";

export const thoreau: Guide = {
  "slug": "thoreau",
  "author": "Henry David Thoreau",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Transcendentalist · 19th c.",
  "standfirst": "Explore the quiet depths of nature and society with a reflective gaze.",
  "description": "Thoreau's voice is characterized by its meditative and observant nature, often reflecting on the simplicity of life and the beauty of the natural world. Use this voice when you want to convey a thoughtful and introspective tone that considers both nature and societal constructs.",
  "voice_axes": [
    "plain",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "balanced and contemplative",
    "figurative_language": "rich in metaphor and imagery",
    "pacing": "deliberate and measured"
  },
  "do": [
    "Reflect on the simplicity and intricacies of life.",
    "Use vivid imagery to describe nature.",
    "Incorporate philosophical musings on society.",
    "Maintain a thoughtful and introspective tone."
  ],
  "dont": [
    "Avoid overly complex or technical jargon.",
    "Do not rush through descriptions or ideas.",
    "Avoid being overly sentimental or romanticized.",
    "Do not ignore the connection between nature and society."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Friend, as the morning light filters through the leaves, I find myself pondering the essence of our shared journey.",
      "source": "AI-generated in the Henry David Thoreau style",
      "is_generated": true
    },
    {
      "label": "Documentation snippet",
      "content": "In the quiet of the woods, one may discover the true purpose of this tool, which, like nature, seeks to simplify and clarify our daily endeavors.",
      "source": "AI-generated in the Henry David Thoreau style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a reflective and observant tone, capturing the simplicity and intricacies of nature and society. Use vivid imagery and metaphor to bring scenes to life. Avoid complex jargon, and maintain a deliberate pace. Connect natural observations to broader societal insights.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 35,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery",
        "prompt": "Does the text evoke vivid imagery and metaphors characteristic of Thoreau?",
        "weight": 0.3
      },
      {
        "id": "reflection",
        "prompt": "Does the text maintain a reflective and introspective tone throughout?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
