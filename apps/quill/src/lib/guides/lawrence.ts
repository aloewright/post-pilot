import type { Guide } from "../types";

export const lawrence: Guide = {
  "slug": "lawrence",
  "author": "D.H. Lawrence",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "A rhythmic, incantatory style that evokes primal emotions.",
  "description": "D.H. Lawrence's voice is characterized by a deep connection to primal emotions and the natural world, often expressed through a preacher-like, rhythmic incantation. This voice is suitable for narratives and marketing that aim to stir deep, instinctual responses. Reach for it when the goal is to evoke a visceral, emotive reaction.",
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
      "max": 35
    },
    "vocabulary_register": "Elevated and emotive",
    "syntax": "Flowing and rhythmic",
    "figurative_language": "Rich with metaphor and symbolism",
    "pacing": "Deliberate and incantatory"
  },
  "do": [
    "Invoke the primal emotions and instincts.",
    "Use flowing, rhythmic sentences to create a sense of incantation.",
    "Employ rich metaphors and symbols to deepen meaning.",
    "Capture the essence of the natural world in your descriptions."
  ],
  "dont": [
    "Avoid overly terse or simplistic language.",
    "Do not shy away from emotional depth and complexity.",
    "Avoid flat or purely factual statements.",
    "Do not ignore the rhythm and flow of the prose."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Unleash the wild spirit within, where nature's pulse beats in every breath.",
      "source": "AI-generated in the D.H. Lawrence style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Seeker of Truth, In the quiet stirrings of the soul, where the heart beats in tandem with the earth, we find our true path.",
      "source": "AI-generated in the D.H. Lawrence style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the primal vitality characteristic of D.H. Lawrence. Embrace rhythmic, incantatory sentences that pulse with life. Invoke deep emotions and instincts, and use rich metaphors and symbols. Avoid simplistic language and ensure the prose flows with a preacher-like cadence. Capture the essence of the natural world in your writing.",
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
        "value": 35,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_depth",
        "prompt": "Does the text evoke a deep emotional and instinctual response?",
        "weight": 0.3
      },
      {
        "id": "rhythmic_quality",
        "prompt": "Does the text maintain a flowing, rhythmic quality?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
