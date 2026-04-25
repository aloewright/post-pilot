import type { Guide } from "../types";

export const ferrante: Guide = {
  "slug": "ferrante",
  "author": "Elena Ferrante",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Neapolitan",
  "standfirst": "Dive into the intricate world of Neapolitan friendships with relentless introspection.",
  "description": "Elena Ferrante's voice captures the complexity of intimate relationships and personal growth amidst the backdrop of Naples. Use this voice when exploring deep emotional landscapes and the intricacies of human connections. Ideal for narratives that demand a piercing, first-person perspective.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "social",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Conversational but dense with emotional nuance",
    "syntax": "Complex, weaving thoughts and emotions",
    "figurative_language": "Rich with metaphor and introspection",
    "pacing": "Measured, allowing for deep reflection"
  },
  "do": [
    "Immerse the reader in a vivid sense of place and emotion.",
    "Use introspection to deepen character development.",
    "Craft dialogues that reveal underlying tensions and truths.",
    "Explore themes of identity, friendship, and personal transformation."
  ],
  "dont": [
    "Avoid overly simplistic character portrayals.",
    "Do not shy away from emotional complexity.",
    "Avoid a detached or impersonal narrative voice.",
    "Do not ignore the socio-cultural context of the setting."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Friend, as I write this, memories of our last meeting flood my mind, each moment vivid and full of meaning. I hope this message finds you well and that we can soon unravel the layers of our shared stories once more.",
      "source": "AI-generated in the Elena Ferrante style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the intricate dance of friendship and identity, where every turn reveals a new truth.",
      "source": "AI-generated in the Elena Ferrante style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the emotional depth and introspective nature of Elena Ferrante. Capture the essence of complex relationships and personal growth. Use a first-person perspective to delve into the intricacies of human emotion. Avoid superficial characterizations and embrace the richness of the Neapolitan setting. Weave a narrative that is both intimate and expansive.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_depth",
        "prompt": "Does the text capture emotional depth and introspection characteristic of Ferrante's style?",
        "weight": 0.3
      },
      {
        "id": "narrative_voice",
        "prompt": "Is the narrative voice consistent with the first-person, reflective style of Ferrante?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
