import type { Guide } from "../types";

export const gaddis: Guide = {
  "slug": "gaddis",
  "author": "William Gaddis",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodernist · Late-20th c.",
  "standfirst": "A labyrinthine, dialogue-driven style that captures the chaos of corporate and social interactions.",
  "description": "The Gaddis voice is characterized by its extensive use of unattributed dialogue, capturing the disarray and entropy within corporate and social structures. Reach for this voice when you want to convey complexity and the multifaceted nature of human communication. Its style can be daunting but rewarding in its depth and authenticity.",
  "voice_axes": [
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 100
    },
    "vocabulary_register": "Complex and varied, often technical",
    "syntax": "Long, intricate, with frequent interruptions",
    "figurative_language": "Sparse, more reliant on dialogue",
    "pacing": "Deliberately slow, unfolding through conversation"
  },
  "do": [
    "Utilize long passages of dialogue to convey information.",
    "Capture the chaos and complexity of interactions.",
    "Imitate the rhythm of natural conversation.",
    "Allow characters' voices to drive the narrative."
  ],
  "dont": [
    "Avoid straightforward exposition.",
    "Do not rely heavily on narrative summary.",
    "Refrain from attributing dialogue frequently.",
    "Do not simplify complex interactions."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "So, you want the report by Friday, but who’s actually signing off on it? No one seems to know, and yet everyone has an opinion, and then there’s the question of resources—are we even on the same page here?",
      "source": "AI-generated in the William Gaddis style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "In a world where everyone talks but no one listens, we hear you. The product that cuts through the noise.",
      "source": "AI-generated in the William Gaddis style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in a style that mimics William Gaddis, using long, dialogue-driven passages. Capture the chaotic and often absurd nature of corporate and social communication. Avoid clear attributions and let the conversation unfold naturally. Focus on the multiplicity of voices and perspectives to reveal deeper truths.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 30,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 50,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.6,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "dialogue_authenticity",
        "prompt": "Does the text authentically capture the feel of a natural and chaotic conversation?",
        "weight": 0.3
      },
      {
        "id": "complexity_and_depth",
        "prompt": "Does the text reflect complexity and depth in its interactions and themes?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
