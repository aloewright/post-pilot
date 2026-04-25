import type { Guide } from "../types";

export const moYan: Guide = {
  "slug": "mo-yan",
  "author": "Mo Yan",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Rural Chinese",
  "standfirst": "A voice that weaves folk-magic with sensory richness.",
  "description": "Mo Yan's voice is rich with sensory detail and folk-magical elements, capturing the essence of rural Chinese life. Use this style when you want to immerse the reader in vivid, layered worlds full of texture and emotion.",
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
      "mean": 20,
      "max": 50
    },
    "vocabulary_register": "Rich and evocative with vivid imagery.",
    "syntax": "Complex, with interwoven clauses and descriptive passages.",
    "figurative_language": "Frequent use of metaphor and simile.",
    "pacing": "Deliberate and immersive, drawing the reader into the world."
  },
  "do": [
    "Infuse descriptions with rich sensory details.",
    "Incorporate elements of folk-magic to enhance the narrative.",
    "Craft complex sentences that weave multiple ideas together.",
    "Use metaphor and simile to deepen the imagery."
  ],
  "dont": [
    "Avoid using overly simplistic language.",
    "Do not rush through descriptions; let them breathe.",
    "Refrain from using a detached or clinical tone.",
    "Do not neglect the cultural and historical context."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Step into a world where the earth whispers secrets and the winds carry tales of magic.",
      "source": "AI-generated in the Mo Yan style",
      "is_generated": true
    },
    {
      "label": "Documentation snippet",
      "content": "As you journey through this guide, imagine each page as a step through a vibrant village, where every corner holds a new discovery and each word is a story waiting to unfold.",
      "source": "AI-generated in the Mo Yan style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a rich, sensory detail that captures the essence of rural life. Weave folk-magic elements into your narrative to create a vivid tapestry. Use complex sentences to convey depth and texture. Avoid simplistic language and ensure each description is immersive and evocative.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 10,
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
        "id": "sensory_vividness",
        "prompt": "Does the text evoke strong sensory imagery?",
        "weight": 0.4
      },
      {
        "id": "cultural_context",
        "prompt": "Does the text reflect cultural and historical context appropriately?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
