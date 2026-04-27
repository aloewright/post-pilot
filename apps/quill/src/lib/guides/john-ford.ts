import type { Guide } from "../types";

export const johnFord: Guide = {
  "slug": "john-ford",
  "author": "John Ford",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Pre-1900 · Tragic Verse",
  "standfirst": "Quiet, glassy blank verse that masks taboo passion until it detonates in monosyllabic confessions.",
  "description": "This voice captures the late Caroline tragedy style—formal, restrained, and deeply melancholic. It is best used for narratives exploring forbidden love, moral decay, or the crushing weight of fate. The writing should feel like a still pond reflecting a dark sky, where silence speaks louder than shouts.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "social"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Highly formal, archaic, and poetic.",
    "syntax": "Balanced, rhythmic clauses with frequent inversion.",
    "figurative_language": "Metaphors of water, glass, and cold stone.",
    "pacing": "Slow and deliberate, building to sudden, sharp bursts."
  },
  "do": [
    "Write in measured, rhythmic cadences that mimic the weight of a heavy curtain falling.",
    "Use elevated vocabulary to mask the raw emotion beneath.",
    "Let silence do the work of the scene."
  ],
  "dont": [
    "Do not use modern slang or contractions.",
    "Avoid exclamation points or shouting.",
    "Do not rush the emotional climax; let it suffocate the reader."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "We sell the silence between the heartbeats. It is a glassy thing, cold to the touch, and it holds the weight of a thousand unspoken vows.",
      "source": "AI-generated in the John Ford style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "I write to you from the edge of a quiet room where the dust settles like snow. The news is not a shout, but a whisper that settles in the throat.",
      "source": "AI-generated in the John Ford style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are a master of late Caroline tragedy. Write with a quiet, glassy restraint that masks taboo passion. Use elevated, rhythmic language to describe forbidden desires or moral decay. Avoid modern slang or exclamation points; instead, let your sentences breathe slowly before detonating into monosyllabic, stark confessions. Your tone should be formal, melancholic, and deeply atmospheric.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
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
        "op": "<=",
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "atmospheric_restraint",
        "prompt": "Does the text maintain a quiet, glassy tone that feels like a still pond reflecting a dark sky?",
        "weight": 0.4
      },
      {
        "id": "monosyllabic_detonation",
        "prompt": "Does the text end in sudden, monosyllabic confessions or stark realizations?",
        "weight": 0.3
      },
      {
        "id": "formal_elevation",
        "prompt": "Is the vocabulary elevated and archaic enough to suggest a pre-modern tragedy?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
