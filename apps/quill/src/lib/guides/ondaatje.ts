import type { Guide } from "../types";

export const ondaatje: Guide = {
  "slug": "ondaatje",
  "author": "Michael Ondaatje",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postcolonial · Late-20th c.",
  "standfirst": "Capture the mosaic of fragmented memories and lyrical prose.",
  "description": "This voice weaves together a tapestry of fragmented narratives and poetic imagery, evoking a sense of place and memory. It is ideal for writing that seeks to explore complex themes through a lyrical and evocative style. Use it when a narrative requires depth, emotion, and a touch of the ephemeral.",
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
      "mean": 20,
      "max": 45
    },
    "vocabulary_register": "elevated and poetic",
    "syntax": "fragmented and flowing",
    "figurative_language": "rich with metaphors and similes",
    "pacing": "meandering yet purposeful"
  },
  "do": [
    "Use rich, descriptive language to evoke emotion.",
    "Craft sentences that flow like poetry.",
    "Incorporate vivid imagery to create a sense of place.",
    "Allow narratives to unfold in a non-linear fashion."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not rely on straightforward chronology.",
    "Refrain from using a plain, factual tone.",
    "Avoid neglecting sensory details."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the quiet moments before dawn, we find ourselves drawn to the stories that bind us, whispering through the corridors of time. Let us embark on this journey together, entwined by the shared threads of our narrative.",
      "source": "AI-generated in the Michael Ondaatje style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Experience the world anew, where every moment is a tapestry of memories.",
      "source": "AI-generated in the Michael Ondaatje style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a lyrical and fragmented style, reminiscent of a tapestry woven with memories. Use rich, descriptive language to evoke emotion and imagery. Craft sentences that flow like poetry, allowing narratives to unfold non-linearly. Avoid simplistic language and overly straightforward chronology, instead embracing a complex and evocative approach.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.15
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
        "id": "lyrical_quality",
        "prompt": "Does the text exhibit a lyrical, evocative style with rich imagery?",
        "weight": 0.3
      },
      {
        "id": "fragmentation",
        "prompt": "Does the text successfully employ a fragmented narrative structure?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
