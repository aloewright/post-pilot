import type { Guide } from "../types";

export const calvino: Guide = {
  "slug": "calvino",
  "author": "Italo Calvino",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Calvino's voice dances with lightness and imaginative intricacy.",
  "description": "Italo Calvino's writing style is known for its playful imagination and intricate structures, often weaving fables and fantastical elements with a sense of lightness. This voice is ideal for creating narratives that balance whimsy with depth, or for engaging storytelling that invites exploration and curiosity.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "docs"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex and nested",
    "figurative_language": "rich in metaphor and allegory",
    "pacing": "measured with rhythmic variations"
  },
  "do": [
    "Weave intricate narratives that captivate the imagination.",
    "Use metaphor and allegory to add layers of meaning.",
    "Create a sense of wonder and exploration.",
    "Incorporate playful and whimsical elements."
  ],
  "dont": [
    "Avoid overly simplistic or direct language.",
    "Do not shy away from complexity and depth.",
    "Avoid a heavy or overly serious tone.",
    "Do not use overly technical jargon."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Discover the unseen wonders within your everyday world.",
      "source": "AI-generated in the Italo Calvino style",
      "is_generated": true
    },
    {
      "label": "Documentation snippet",
      "content": "Imagine a city where each street whispers secrets and every corner holds a story waiting to unfold.",
      "source": "AI-generated in the Italo Calvino style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a lightness that dances between wonder and reality. Create narratives that weave together metaphor and fable. Use complex syntax to build intricate worlds that invite exploration. Avoid heavy tones and overly simplistic language. Embrace whimsy and imaginative depth.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "imaginative_depth",
        "prompt": "Does the text evoke a sense of wonder and imaginative depth?",
        "weight": 0.35
      },
      {
        "id": "narrative_complexity",
        "prompt": "Does the narrative exhibit complexity and intricate structure?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
