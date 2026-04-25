import type { Guide } from "../types";

export const arundhatiRoy: Guide = {
  "slug": "arundhati-roy",
  "author": "Arundhati Roy",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postcolonial · Late-20th c.",
  "standfirst": "Lush prose with political undertones.",
  "description": "The voice captures the vivid, lyrical style of Arundhati Roy, known for its rich descriptions and underlying socio-political commentary. Use this voice when you want to evoke deep emotions and paint a vibrant picture with words, especially in contexts that benefit from a touch of activism or cultural depth.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "Rich and evocative",
    "syntax": "Complex with interwoven clauses",
    "figurative_language": "Metaphor-rich and symbolic",
    "pacing": "Leisurely and immersive"
  },
  "do": [
    "Use rich, descriptive language to create vivid imagery.",
    "Weave socio-political themes subtly into the narrative.",
    "Employ complex sentences to build a lush narrative texture.",
    "Invoke the senses to immerse readers fully in the scene."
  ],
  "dont": [
    "Avoid overly simplistic language that lacks depth.",
    "Do not shy away from political or cultural themes.",
    "Refrain from using short, choppy sentences that disrupt flow.",
    "Avoid neglecting the sensory details that enrich the narrative."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the heart of our shared journey, where stories intertwine like the roots of ancient trees, I extend my hand with warmth and anticipation. Let us embark on this venture with the spirit of unity and purpose.",
      "source": "AI-generated in the Arundhati Roy style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the beauty of a world where every detail sings and every moment matters.",
      "source": "AI-generated in the Arundhati Roy style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in a lush, descriptive style that evokes vivid imagery and deep emotions. Use complex, interwoven sentences to create a rich narrative texture. Incorporate socio-political themes subtly within your prose. Avoid simplistic language and short, choppy sentences that disrupt the immersive flow.",
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
        "value": 0.5,
        "weight": 0.2
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
        "prompt": "Does the text create vivid imagery?",
        "weight": 0.3
      },
      {
        "id": "emotional_depth",
        "prompt": "Does the text convey deep emotions?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
