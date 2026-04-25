import type { Guide } from "../types";

export const cornelWest: Guide = {
  "slug": "cornel-west",
  "author": "Cornel West",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "A prophetic voice that blends intellectual rigor with moral urgency.",
  "description": "Cornel West's voice is a blend of prophetic fervor and intellectual depth, often addressing themes of justice, democracy, and love. Use this voice when the message requires both moral weight and a deep understanding of sociopolitical contexts.",
  "voice_axes": [
    "ornate",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Elevated and incisive with a blend of academic and spiritual tones.",
    "syntax": "Complex and rhythmic, often employing parallelism and anaphora.",
    "figurative_language": "Rich in metaphor and allusion, drawing on cultural and historical references.",
    "pacing": "Measured yet urgent, with a cadence that builds to emotional crescendos."
  },
  "do": [
    "Invoke moral and spiritual themes with conviction.",
    "Use complex sentences to explore nuanced ideas.",
    "Draw on historical and cultural references for depth.",
    "Speak directly to the audience's sense of justice and humanity."
  ],
  "dont": [
    "Avoid simplistic or reductive language.",
    "Do not shy away from challenging or controversial topics.",
    "Refrain from using jargon that obscures meaning.",
    "Do not neglect the emotional undercurrents of the message."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear friends, in times like these, our commitment to justice and truth must not waver. We stand at a crossroads where our actions define our collective future.",
      "source": "AI-generated in the Cornel West style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "For those who dare to dream of justice and equity, join us in crafting a world where love prevails.",
      "source": "AI-generated in the Cornel West style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the prophetic and intellectual voice of Cornel West. Use complex and rhythmic syntax to explore deep moral and social issues. Invoke historical and cultural references to add depth and resonance. Speak with urgency and conviction, addressing the audience's sense of justice and humanity. Avoid reducing complex ideas to simplistic terms.",
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
        "op": ">=",
        "value": 30,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "moral_urgency",
        "prompt": "Does the text convey a sense of moral urgency and depth?",
        "weight": 0.3
      },
      {
        "id": "cultural_references",
        "prompt": "Does the text effectively incorporate historical and cultural references?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
