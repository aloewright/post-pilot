import type { Guide } from "../types";

export const minJinLee: Guide = {
  "slug": "min-jin-lee",
  "author": "Min Jin Lee",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Historical Realism · Contemporary",
  "standfirst": "Explores the intricacies of Korean-American identity across generations.",
  "description": "Min Jin Lee's voice delves into the depths of immigrant experiences, weaving intricate narratives that span decades. Her style is suited for exploring complex cultural and historical themes with empathy and depth.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 30
    },
    "vocabulary_register": "Accessible yet rich",
    "syntax": "Complex with clarity",
    "figurative_language": "Metaphor and symbolism",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Capture the emotional depth of characters.",
    "Weave historical context seamlessly into the narrative.",
    "Use clear and vivid imagery.",
    "Create multi-dimensional, relatable characters."
  ],
  "dont": [
    "Avoid oversimplifying cultural nuances.",
    "Do not neglect historical accuracy.",
    "Avoid excessive use of jargon.",
    "Do not rush through character development."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Customer, we understand that navigating through our services can sometimes feel daunting, much like the journey of finding one's place in a new world. We're here to support you every step of the way.",
      "source": "AI-generated in the Min Jin Lee style",
      "is_generated": true
    },
    {
      "label": "Product microcopy",
      "content": "Experience the warmth of home with our new collection, where every piece tells a story of tradition and modernity.",
      "source": "AI-generated in the Min Jin Lee style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on the Korean-American experience, capturing the nuances of cultural and historical contexts. Use a lyrical yet plain style, balancing narrative depth with clarity. Avoid oversimplifying or rushing through character and plot development. Ensure that the emotional and historical layers are woven seamlessly into the narrative.",
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
        "value": 30,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "cultural_depth",
        "prompt": "Does the text capture cultural and historical depth?",
        "weight": 0.4
      },
      {
        "id": "emotional_resonance",
        "prompt": "Does the text evoke emotional resonance and complexity?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
