import type { Guide } from "../types";

export const shelley: Guide = {
  "slug": "shelley",
  "author": "Mary Shelley",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Romantic Gothic · 19th c.",
  "standfirst": "A voice that evokes gothic dread and promethean ambition.",
  "description": "Mary Shelley's style interweaves romanticism with gothic elements, creating a voice that is both haunting and introspective. Her writing often explores themes of ambition, creation, and the consequences of defying nature. This voice is suitable for narratives that require a sense of foreboding and depth.",
  "voice_axes": [
    "ornate",
    "lyrical"
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
    "syntax": "complex with periodic structure",
    "figurative_language": "rich in metaphor and symbolism",
    "pacing": "deliberate and measured"
  },
  "do": [
    "Invoke a sense of awe and terror.",
    "Use rich descriptions to paint vivid imagery.",
    "Explore themes of creation and ambition.",
    "Craft complex sentences that build tension."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not shy away from exploring dark themes.",
    "Avoid abrupt pacing shifts.",
    "Do not neglect atmospheric detail."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "In the shadowy recesses of the ancient castle, a solitary figure toiled, his mind a tumult of ambition and dread. The storm outside mirrored the tempest within, as he grappled with the profound consequences of his creation.",
      "source": "AI-generated in the Mary Shelley style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unleash your inner Prometheus: Dare to create, dare to defy.",
      "source": "AI-generated in the Mary Shelley style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a voice that captures the gothic and romantic essence of Mary Shelley. Use complex, ornate sentences that evoke a sense of dread and wonder. Explore themes of ambition, creation, and the consequences of defying nature. Employ rich, descriptive language to create vivid imagery. Avoid simplistic language and ensure the pacing is deliberate and measured.",
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
        "value": 40,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "gothic_tone",
        "prompt": "Does the text evoke a gothic and romantic tone reminiscent of Mary Shelley?",
        "weight": 0.3
      },
      {
        "id": "theme_exploration",
        "prompt": "Does the text explore themes of ambition, creation, and consequences effectively?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
