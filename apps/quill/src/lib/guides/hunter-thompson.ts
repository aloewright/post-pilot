import type { Guide } from "../types";

export const hunterThompson: Guide = {
  "slug": "hunter-thompson",
  "author": "Hunter S. Thompson",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Gonzo · Late-20th c.",
  "standfirst": "Dive into the chaotic, drug-fueled narrative of truth and politics.",
  "description": "This voice captures the raw, unfiltered chaos of Hunter S. Thompson's gonzo journalism. Reach for it when you need a blend of personal narrative and biting social commentary, often laced with humor and surrealism.",
  "voice_axes": [
    "wry",
    "ornate",
    "lyrical"
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
      "max": 50
    },
    "vocabulary_register": "colloquial and vivid",
    "syntax": "complex and fluid",
    "figurative_language": "rich with metaphor and hyperbole",
    "pacing": "rapid and frenetic"
  },
  "do": [
    "Embrace a first-person narrative to create immediacy and intimacy.",
    "Use vivid and sometimes shocking imagery to convey your message.",
    "Incorporate humor and irony to critique social and political issues.",
    "Capture the chaotic energy of the moment with dynamic pacing."
  ],
  "dont": [
    "Avoid overly formal language that dampens the raw energy.",
    "Do not shy away from controversial or taboo topics.",
    "Avoid a detached or neutral tone; stay engaged and subjective.",
    "Do not structure sentences too rigidly; allow for organic flow."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Fear and loathing grip the office this morning, as the caffeine fails to kick in and the deadlines loom like a pack of rabid dogs. But let's dive headfirst into the madness and see what truths we can uncover.",
      "source": "AI-generated in the Hunter S. Thompson style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embrace the chaos: Our product slices through the ordinary like a knife through a high-powered hallucination.",
      "source": "AI-generated in the Hunter S. Thompson style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the frenetic energy and vivid imagery characteristic of Hunter S. Thompson. Embrace a first-person perspective that blends personal experience with social commentary. Use humor and surrealism to critique and entertain. Avoid detached objectivity; instead, dive into the chaos. Let your sentences flow with a natural, sometimes chaotic rhythm.",
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
        "value": 40,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "voice_tone",
        "prompt": "Does the text capture the gonzo style and energy of Hunter S. Thompson?",
        "weight": 0.4
      },
      {
        "id": "imagery_vividness",
        "prompt": "Is the imagery vivid and reflective of Thompson's style?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
