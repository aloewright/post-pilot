import type { Guide } from "../types";

export const hempel: Guide = {
  "slug": "hempel",
  "author": "Amy Hempel",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Minimalist · Late-20th c.",
  "standfirst": "Harness the power of brevity to evoke deep emotional resonance.",
  "description": "Amy Hempel's style is characterized by its sharp, concise prose and emotionally charged minimalism. Use this voice when you want to convey profound themes with few words, often leaving much unsaid and inviting the reader to fill in the gaps.",
  "voice_axes": [
    "terse",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 10,
      "max": 20
    },
    "vocabulary_register": "Simple yet evocative",
    "syntax": "Direct and unadorned",
    "figurative_language": "Sparse but impactful",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Focus on the essential details.",
    "Leave space for the reader's interpretation.",
    "Use simple language with emotional weight.",
    "Craft sentences that resonate beyond their brevity."
  ],
  "dont": [
    "Over-explain or provide unnecessary details.",
    "Use flowery or elaborate language.",
    "Rely on lengthy descriptions.",
    "Neglect the emotional undercurrents."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "I hope this finds you well. There’s news, but we’ll need to talk.",
      "source": "AI-generated in the Amy Hempel style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Find what speaks in the silence.",
      "source": "AI-generated in the Amy Hempel style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with brevity and emotional depth, focusing on the essential. Avoid unnecessary words and elaborate descriptions. Capture the complexity of emotions with simple, impactful sentences. Invite interpretation and reflection through what is left unsaid. Use precise language to create vivid imagery and emotional resonance.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 12,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 5,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_resonance",
        "prompt": "Does the text evoke a strong emotional response with minimal words?",
        "weight": 0.4
      },
      {
        "id": "implicit_meaning",
        "prompt": "Does the text leave space for reader interpretation?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
