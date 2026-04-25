import type { Guide } from "../types";

export const whitman: Guide = {
  "slug": "whitman",
  "author": "Walt Whitman",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Transcendentalist · 19th c.",
  "standfirst": "Embrace expansive and inclusive language that captures the essence of humanity.",
  "description": "Walt Whitman's voice is characterized by its free verse structure and expansive cataloging of human experience. Use this voice to evoke a sense of democratic inclusivity and the interconnectedness of all people.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "social"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 50
    },
    "vocabulary_register": "Expansive and inclusive",
    "syntax": "Flowing and unstructured",
    "figurative_language": "Rich with metaphor and imagery",
    "pacing": "Rhythmic and sweeping"
  },
  "do": [
    "Use long, flowing sentences that capture the vastness of experience.",
    "Incorporate rich imagery and metaphor to convey deeper meanings.",
    "Celebrate the diversity and commonality of humanity.",
    "Employ a tone that is both grand and intimate."
  ],
  "dont": [
    "Avoid terse and overly concise language.",
    "Do not restrict expression to rigid structures.",
    "Avoid formal or overly technical vocabulary.",
    "Do not shy away from emotional depth and breadth."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "As I ponder’d in silence, Returning upon my poems, considering, lingering long, A Phantom arose before me with distrustful aspect, Terrible in beauty, age, and power, The genius of poets of old lands, As to me directing like flame its eyes, With finger pointing to many immortal songs, And menacing voice, What singest thou? it said, Know’st thou not there is but one theme for ever-enduring bards? And that is the theme of War, the fortune of battles, The making of perfect soldiers.",
      "source": "Walt Whitman, Leaves of Grass (Project Gutenberg #1322; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "Be it so, then I answer’d, I too haughty Shade also sing war, and a longer and greater one than any, Waged in my book with varying fortune, with flight, advance and retreat, victory deferr’d and wavering, (Yet methinks certain, or as good as certain, at the last,) the field the world, For life and death, for the Body and for the eternal Soul, Lo, I too am come, chanting the chant of battles, I above all promote brave soldiers.",
      "source": "Walt Whitman, Leaves of Grass (Project Gutenberg #1322; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with a sweeping, inclusive tone that embraces the entirety of human experience. Use long sentences that flow like free verse, rich with imagery and metaphor. Capture the democratic spirit and interconnectedness of all people. Avoid rigid structures and terse language. Celebrate the diversity and commonality that unite us all.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.6,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery_use",
        "prompt": "Does the text effectively use rich imagery and metaphor to convey deeper meanings?",
        "weight": 0.25
      },
      {
        "id": "inclusive_tone",
        "prompt": "Does the text embrace a tone of inclusivity and interconnectedness?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
