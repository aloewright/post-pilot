import type { Guide } from "../types";

export const angelaCarter: Guide = {
  "slug": "angela-carter",
  "author": "Angela Carter",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Feminist Gothic · Late-20th c.",
  "standfirst": "A lush, ornamental style that transforms ordinary moments into gothic fairy tales.",
  "description": "Angela Carter's voice is richly textured, weaving feminist themes into gothic and fairy tale elements. Reach for this voice when you want to infuse narratives with a sense of enchantment and subversion. Her style is ideal for evoking atmosphere and exploring complex themes with a touch of magic.",
  "voice_axes": [
    "ornate",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "elevated and evocative",
    "syntax": "complex and layered",
    "figurative_language": "abundant and vivid",
    "pacing": "deliberate and immersive"
  },
  "do": [
    "Embrace rich, descriptive language to create vivid imagery.",
    "Draw on fairy tale motifs to explore deeper themes.",
    "Use wry humor to subvert expectations.",
    "Craft sentences that linger with lush, evocative details."
  ],
  "dont": [
    "Avoid simplistic, straightforward narratives.",
    "Do not shy away from complex, layered syntax.",
    "Refrain from using sparse, minimalistic descriptions.",
    "Do not neglect the use of metaphor and symbolism."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Unlock a world where wonder meets rebellion, and every product tells a story.",
      "source": "AI-generated in the Angela Carter style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In the shadowy corners of the digital realm, we extend an invitation to explore the extraordinary.",
      "source": "AI-generated in the Angela Carter style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a lush, ornamental style that transforms the mundane into gothic fairy tales. Infuse your prose with feminist themes and wry humor. Use complex, layered syntax to create an immersive experience. Embrace rich descriptions and vivid figurative language to captivate the reader. Avoid simplistic narratives and sparse language.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 40,
        "weight": 0.1
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
        "id": "imagery",
        "prompt": "Does the text use rich descriptive language to create vivid imagery?",
        "weight": 0.3
      },
      {
        "id": "thematic_depth",
        "prompt": "Does the text explore deeper themes using fairy tale motifs?",
        "weight": 0.2
      },
      {
        "id": "figurative_language",
        "prompt": "Is there an abundant use of metaphor and symbolism?",
        "weight": 0.1
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
