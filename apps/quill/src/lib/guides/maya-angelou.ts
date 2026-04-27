import type { Guide } from "../types";

export const mayaAngelou: Guide = {
  slug: "maya-angelou",
  author: "Maya Angelou",
  era: "Late-20th",
  eras: ["Late-20th", "Contemporary"],
  kicker: "Late 20th c. · American memoirist & poet",
  standfirst:
    "Plain words made stately. The pulpit cadence of the Black church inside the autobiographer's quiet.",
  description:
    "Angelou writes plainspoken sentences and lifts them by repetition until they read like testimony. Her vocabulary is small, her dignity enormous; she earns lyric height with Anglo-Saxon nouns and the rhythms of scripture and song. Useful when you want prose that bears witness without raising its voice — memoir, manifesto, or any line that needs to outlast the moment.",
  voice_axes: ["lyrical", "plain"],
  use_cases: ["fiction", "newsletter"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 14, max: 32 },
    vocabulary_register:
      "concrete, Anglo-Saxon, low latinate; biblical and gospel cadence carried inside ordinary words",
    syntax:
      "short declarative sentences laddered into anaphora; parallel constructions stacked until they ring",
    figurative_language:
      "image as testimony — a caged bird, a stretch of dirt road — set down once and not over-explained",
    pacing:
      "stately and unhurried; the line earns its weight by repetition, not by ornament",
  },
  do: [
    "Use plain Anglo-Saxon nouns and verbs; let the sentence's dignity come from rhythm.",
    "Repeat a phrase, a noun, a clause — anaphora is the spine of the voice.",
    "Treat memory as testimony: state it, do not argue for it.",
    "Let one image carry the moral weight; do not gloss it.",
    "Write as if a congregation were listening.",
  ],
  dont: [
    "Do not raise your voice — the cadence does the work.",
    "Do not reach for a latinate word when a small one will hold.",
    "Do not over-explain the metaphor; trust the reader to feel it.",
    "Do not let irony erode the dignity of the line.",
  ],
  exemplars: [
    {
      label: "Opening — I Know Why the Caged Bird Sings",
      content:
        "\"What you looking at me for? I didn't come to stay…\" I hadn't so much forgot as I couldn't bring myself to remember. Other things were more important.",
      source: "I Know Why the Caged Bird Sings (1969)",
      is_generated: false,
    },
    {
      label: "Stanza — Still I Rise",
      content:
        "You may write me down in history / With your bitter, twisted lies, / You may trod me in the very dirt / But still, like dust, I'll rise.",
      source: "And Still I Rise (1978)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Maya Angelou. Use plain Anglo-Saxon nouns and verbs and let dignity come from rhythm rather than vocabulary. Build sentences in short declarative units, then ladder them into anaphora — repeat a phrase, a noun, a clause until it rings. Carry the cadence of the Black church and gospel song inside ordinary diction. Treat memory as testimony: state it once, plainly, and trust the reader to feel its weight. Let a single image — a caged bird, a stretch of dirt road, a pair of hands — hold the moral charge of the passage; do not gloss it. Do not raise your voice, do not reach for latinate vocabulary, and do not let irony erode the line.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 16,
        weight: 0.15,
      },
      {
        metric: "mono_syllable_ratio",
        op: ">=",
        value: 0.55,
        weight: 0.15,
      },
      {
        metric: "abstract_per_para",
        op: "<=",
        value: 2,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "anaphora",
        prompt:
          "Does the prose use repetition or parallel construction as a structural backbone, not as accident?",
        weight: 0.2,
      },
      {
        id: "plainness",
        prompt:
          "Is the vocabulary primarily Anglo-Saxon and small, with dignity earned by cadence rather than ornament?",
        weight: 0.2,
      },
      {
        id: "testimony",
        prompt:
          "Does the passage bear witness — stating an image or memory plainly without arguing for it?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.88,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
