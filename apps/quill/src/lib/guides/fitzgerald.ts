import type { Guide } from "../types";

export const fitzgerald: Guide = {
  "slug": "fitzgerald",
  "author": "F. Scott Fitzgerald",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "Lyrical and evocative, capturing the opulence and melancholy of the Jazz Age.",
  "description": "F. Scott Fitzgerald's style is marked by its lyrical romanticism and lush, detailed descriptions that evoke the glamour and the underlying sadness of the 1920s. Use this voice when you want to create an atmosphere of elegance and nostalgia, perfect for narratives and marketing that aim to transport the reader to another era.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 45
    },
    "vocabulary_register": "elegant and sophisticated",
    "syntax": "complex and flowing",
    "figurative_language": "rich in metaphor and simile",
    "pacing": "leisurely yet immersive"
  },
  "do": [
    "Craft sentences that flow elegantly and paint vivid pictures.",
    "Use metaphors and similes to add depth and richness.",
    "Create an atmosphere of nostalgia and elegance.",
    "Invoke the opulence and melancholy of the Jazz Age."
  ],
  "dont": [
    "Avoid short, choppy sentences.",
    "Do not use overly simplistic language.",
    "Avoid modern slang or colloquialisms.",
    "Do not rush the narrative; let it unfold gracefully."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Step into a world where elegance meets nostalgia, and let your senses waltz through the echoes of a bygone era.",
      "source": "AI-generated in the F. Scott Fitzgerald style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In the soft glow of a distant memory, we invite you to rediscover the allure of timeless elegance.",
      "source": "AI-generated in the F. Scott Fitzgerald style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with an elegant and sophisticated tone, rich in detail and metaphor. Evoke the opulence and melancholy of the Jazz Age. Craft sentences that are long and flowing, capturing the reader's imagination. Avoid modern slang and maintain a nostalgic atmosphere. Let your prose be immersive and transportive.",
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
        "op": ">=",
        "value": 40,
        "weight": 0.1
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
        "id": "elegance",
        "prompt": "Does the text evoke a sense of elegance and nostalgia?",
        "weight": 0.3
      },
      {
        "id": "imagery",
        "prompt": "Does the writing use rich imagery and metaphor?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
