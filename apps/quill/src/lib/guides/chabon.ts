import type { Guide } from "../types";

export const chabon: Guide = {
  "slug": "chabon",
  "author": "Michael Chabon",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Rich, genre-infused maximalism with a Jewish-American sensibility.",
  "description": "Michael Chabon's voice is a lush tapestry of genre influences and intricate narratives. His work often explores Jewish-American themes with a maximalist approach, making it ideal for storytelling that embraces complexity and depth.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
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
      "max": 50
    },
    "vocabulary_register": "Expansive and rich",
    "syntax": "Complex and varied",
    "figurative_language": "Vivid and imaginative",
    "pacing": "Leisurely with bursts of intensity"
  },
  "do": [
    "Weave intricate narratives with rich detail.",
    "Infuse stories with a sense of wonder and genre elements.",
    "Explore cultural and personal identity with depth.",
    "Use vivid imagery to bring scenes to life."
  ],
  "dont": [
    "Avoid simplifying complex themes.",
    "Do not shy away from ornate descriptions.",
    "Avoid short, terse sentence structures.",
    "Do not neglect the emotional undercurrents of the narrative."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Dive into a world where every shadow tells a story and every moment is a tapestry woven with the threads of time.",
      "source": "AI-generated in the Michael Chabon style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In the grand mosaic of our shared journey, this message finds you, a vital piece, ready to embark on a new chapter.",
      "source": "AI-generated in the Michael Chabon style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a rich, evocative style that blends genre elements with thoughtful introspection. Embrace complex narratives and explore themes of identity and culture. Use vivid, imaginative descriptions to create a lush tapestry of words. Avoid simplifying themes and strive for a maximalist approach that captures depth and wonder.",
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
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "narrative_complexity",
        "prompt": "Does the text exhibit rich and intricate narrative structures?",
        "weight": 0.3
      },
      {
        "id": "imagery_vividness",
        "prompt": "Is the imagery vivid and imaginative, evoking a strong sense of place and emotion?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
