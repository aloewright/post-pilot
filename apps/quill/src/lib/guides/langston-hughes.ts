import type { Guide } from "../types";

export const langstonHughes: Guide = {
  slug: "langston-hughes",
  author: "Langston Hughes",
  era: "Modernist",
  eras: ["Modernist", "Mid-20th"],
  kicker: "Modernist · Harlem Renaissance poet & essayist",
  standfirst:
    "Blues bar lines, jazz off-beats, plainspoken dignity — the city's vernacular set to music.",
  description:
    "Hughes scores the page like a blues — three-line stanzas, repeated phrases, an unhurried clarity that anyone on a Harlem street could overhear. His vocabulary is small, his images urban and warm: rivers, dreams, dawn, neon, a dollar in a pocket. The wisdom is offered, not preached, and the wit lands soft. Useful when you want short, accessible prose with rhythm — social posts, newsletters, openings — that reads like it knows where it lives.",
  voice_axes: ["lyrical", "plain", "wry"],
  use_cases: ["fiction", "newsletter", "social"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 10, max: 22 },
    vocabulary_register:
      "Anglo-Saxon, urban-vernacular, accessible; blues idiom and jazz slang admitted plainly",
    syntax:
      "short declarative lines with repeated phrasing; three-step blues structure (statement, restatement, turn); occasional refrain",
    figurative_language:
      "domestic and city images — rivers, dawn, neon, a coin — handled plainly; metaphor that hums rather than declaims",
    pacing:
      "unhurried and musical; pauses where a blues bar would breathe; wit lands soft",
  },
  do: [
    "Use short Anglo-Saxon lines and let a phrase repeat when the rhythm asks for it.",
    "Build in three-step blues motion: state it, say it again with a turn, land it.",
    "Pull images from the city and the day — rivers, dawn, neon, a dollar, a doorway.",
    "Let wisdom be offered conversationally; do not preach.",
    "Allow wit and warmth to share a line.",
  ],
  dont: [
    "Do not over-elaborate; this voice trusts plain words.",
    "Do not lift the diction into latinate vocabulary or ornate metaphor.",
    "Do not let irony go cold — the warmth is the point.",
    "Do not abandon the rhythm for argument; the music carries the meaning.",
  ],
  exemplars: [
    {
      label: "Poem — Harlem (Dream Deferred)",
      content:
        "What happens to a dream deferred? / Does it dry up / like a raisin in the sun? / Or fester like a sore — / And then run? / Does it stink like rotten meat? / Or crust and sugar over — / like a syrupy sweet?",
      source: "Montage of a Dream Deferred (1951)",
      is_generated: false,
    },
    {
      label: "Poem — I, Too",
      content:
        "I, too, sing America. / I am the darker brother. / They send me to eat in the kitchen / When company comes, / But I laugh, / And eat well, / And grow strong.",
      source: "The Weary Blues (1926)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Langston Hughes. Score the line like a blues: short Anglo-Saxon phrases, plenty of breath, a phrase repeated when the rhythm asks for it. Build in three-step motion — state it, say it again with a turn, land it. Pull images from the city and the day: rivers, dawn, neon, a dollar in a pocket, a doorway, a dance. Let wisdom be offered conversationally, not preached, and let wit and warmth share a line. Use small accessible words; let blues idiom and jazz slang sit in the prose without italics. Do not lift into latinate vocabulary, do not let irony go cold, and do not abandon the rhythm for argument — the music carries the meaning.\n\nDo:\n- Use short Anglo-Saxon lines and let a phrase repeat when the rhythm asks for it.\n- Build in three-step blues motion: state it, say it again with a turn, land it.\n- Pull images from the city and the day — rivers, dawn, neon, a dollar, a doorway.\n- Let wisdom be offered conversationally; do not preach.\n- Allow wit and warmth to share a line.\n\nDon't:\n- Do not over-elaborate; this voice trusts plain words.\n- Do not lift the diction into latinate vocabulary or ornate metaphor.\n- Do not let irony go cold — the warmth is the point.\n- Do not abandon the rhythm for argument; the music carries the meaning.\n\nExample — Poem — Harlem (Dream Deferred):\nWhat happens to a dream deferred? / Does it dry up / like a raisin in the sun? / Or fester like a sore — / And then run? / Does it stink like rotten meat? / Or crust and sugar over — / like a syrupy sweet?",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 12,
        weight: 0.15,
      },
      {
        metric: "mono_syllable_ratio",
        op: ">=",
        value: 0.65,
        weight: 0.2,
      },
      {
        metric: "abstract_per_para",
        op: "<=",
        value: 1,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "blues-shape",
        prompt:
          "Does the passage move in blues three-step (statement / restatement-with-turn / landing) and use repetition for rhythm?",
        weight: 0.2,
      },
      {
        id: "city-imagery",
        prompt:
          "Are images drawn from the city and the workday, handled plainly, without latinate ornament?",
        weight: 0.15,
      },
      {
        id: "warm-wit",
        prompt:
          "Is wisdom offered conversationally — wit warm, irony not gone cold?",
        weight: 0.15,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.87,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
