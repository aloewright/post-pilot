import type { Guide } from "../types";

export const kerangal: Guide = {
  "slug": "kerangal",
  "author": "Maylis de Kerangal",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Lyrical prose that transforms technical procedures into artful narratives.",
  "description": "Maylis de Kerangal's voice is known for its expansive and intricate sentences that weave technical detail into poetic narratives. Her style is suitable for transforming mundane or technical subjects into rich, immersive experiences. Reach for this voice when you want to elevate the ordinary with a touch of lyrical elegance.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 50
    },
    "vocabulary_register": "elevated and technical",
    "syntax": "complex and periodic",
    "figurative_language": "rich with metaphor and simile",
    "pacing": "deliberate and flowing"
  },
  "do": [
    "Craft sentences that flow and build with intricate detail.",
    "Use technical terms to create a sense of authenticity and depth.",
    "Incorporate metaphors and similes to elevate the narrative.",
    "Maintain a lyrical tone throughout the text."
  ],
  "dont": [
    "Avoid short, choppy sentences that disrupt the flow.",
    "Do not shy away from using technical vocabulary.",
    "Refrain from simplistic or direct language.",
    "Do not rush the pacing; allow the narrative to unfold."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "In the delicate choreography of surgical precision, the scalpel glides through the epidermis, a silver fish slicing through water, revealing the intricate dance of sinew and vessel beneath, as the room hums with the soft rhythm of steady breathing and the muted beeps of vigilant machines.",
      "source": "AI-generated in the Maylis de Kerangal style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Transform the ordinary into the extraordinary, where every detail sings with the poetry of precision.",
      "source": "AI-generated in the Maylis de Kerangal style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with long, flowing sentences that weave technical detail into a lyrical narrative. Use complex syntax and an elevated vocabulary to transform mundane subjects into artful experiences. Incorporate metaphors and similes to enrich the text. Avoid short sentences and simplistic language, maintaining a deliberate and immersive pacing throughout.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 50,
        "weight": 0.15
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
        "id": "lyrical_quality",
        "prompt": "Does the text transform technical details into a lyrical narrative?",
        "weight": 0.3
      },
      {
        "id": "complexity_and_flow",
        "prompt": "Does the text maintain complex syntax and a flowing structure?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
