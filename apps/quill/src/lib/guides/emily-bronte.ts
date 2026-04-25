import type { Guide } from "../types";

export const emilyBronte: Guide = {
  "slug": "emily-bronte",
  "author": "Emily Brontë",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Gothic · 19th c.",
  "standfirst": "Harness the elemental intensity of the moors with nested narrative depth.",
  "description": "Emily Brontë's voice is characterized by its gothic intensity and the use of elemental imagery, often set against the backdrop of the moors. Her style is ideal for narratives that require a brooding, atmospheric quality and complex, layered storytelling. Use this voice when you want to evoke deep emotion and a sense of mystery.",
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
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "elevated and poetic",
    "syntax": "complex and layered",
    "figurative_language": "rich with metaphor and imagery",
    "pacing": "deliberate and intense"
  },
  "do": [
    "Use vivid imagery to evoke the natural world.",
    "Craft complex sentences that build emotional intensity.",
    "Layer narratives to create depth and intrigue.",
    "Maintain a brooding and atmospheric tone."
  ],
  "dont": [
    "Avoid simple, straightforward sentences.",
    "Do not shy away from intense emotions.",
    "Avoid modern slang or colloquial language.",
    "Do not rely on sparse or minimalist descriptions."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the gathering dusk, as the winds swept across the desolate moors, I pen these words to you, dear reader, hoping they find you in quiet contemplation.",
      "source": "AI-generated in the Emily Brontë style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unleash the storm within; let passion and mystery guide your journey.",
      "source": "AI-generated in the Emily Brontë style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the intensity and depth of Emily Brontë. Use complex, layered sentences and vivid imagery to evoke the natural world. Capture the gothic and brooding atmosphere of the moors. Avoid modern slang and maintain an elevated, poetic vocabulary. Layer narratives to create emotional depth and intrigue.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 30,
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
        "id": "emotional_intensity",
        "prompt": "Does the text evoke deep emotional intensity?",
        "weight": 0.35
      },
      {
        "id": "atmospheric_quality",
        "prompt": "Does the text maintain a brooding and atmospheric quality?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
