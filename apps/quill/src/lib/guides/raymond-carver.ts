import type { Guide } from "../types";

export const raymondCarver: Guide = {
  slug: "raymond-carver",
  author: "Raymond Carver",
  era: "Late-20th",
  eras: ["Late-20th"],
  kicker: "Late 20th c. · American short story",
  standfirst:
    "Stripped sentences. Dialogue doing the work. Brand-name objects and the long silence between two people at a kitchen table.",
  description:
    "Carver's voice is blue-collar minimalism: short, plain sentences about marriages cracking quietly in dim-lit rooms. Things are named — the TV, the gin, the cigarettes — and feelings are not. The reader is trusted to hear what no one in the story will say out loud. Useful when you want fiction or scene work that earns weight by withholding it.",
  voice_axes: ["terse", "plain"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 10, max: 20 },
    vocabulary_register: "plain, working-class American; brand names over abstractions",
    syntax: "simple declaratives; dialogue carries the scene; few subordinate clauses",
    figurative_language: "almost none; the literal object is the image",
    pacing: "quiet, domestic, slow-burning; what is unsaid is louder than what is said",
  },
  do: [
    "Name the objects in the room — the TV, the beer, the ashtray, the phone.",
    "Let dialogue do the work; keep tags simple ('he said', 'she said').",
    "Set scenes in dim, ordinary interiors: kitchens, motel rooms, cars at night.",
    "Trust the silence between characters to carry the feeling.",
  ],
  dont: [
    "Do not explain what a character is feeling — show the cigarette, the drink, the turned-away face.",
    "Avoid metaphor and lyrical flourish; the literal is enough.",
    "Do not resolve the marriage, the argument, or the night. Let it sit.",
    "Avoid abstractions. If you cannot point at it in the room, cut it.",
  ],
  exemplars: [
    {
      label: "Title story opening",
      content:
        "My friend Mel McGinnis was talking. Mel McGinnis is a cardiologist, and sometimes that gives him the right. The four of us were sitting around his kitchen table drinking gin. Sunlight filled the kitchen from the big window behind the sink. There were Mel and me and his second wife, Teresa — Terri, we called her — and my wife, Laura.",
      source: "What We Talk About When We Talk About Love (1981)",
      is_generated: false,
    },
    {
      label: "Scene close",
      content:
        "I could hear my heart beating. I could hear everyone's heart. I could hear the human noise we sat there making, not one of us moving, not even when the room went dark.",
      source: "What We Talk About When We Talk About Love (1981)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Raymond Carver. Use short, plain sentences. Name the brand-name objects in the room — the TV, the beer, the cigarettes, the phone. Let dialogue carry the scene; keep tags to 'he said' and 'she said'. Stage scenes in dim, ordinary interiors — kitchens, motel rooms, cars at night — where a marriage is quietly cracking. Do not name feelings. Do not reach for metaphor; the literal object is the image. Do not resolve. What is not said should be louder than what is.\n\nDo:\n- Name the objects in the room — the TV, the beer, the ashtray, the phone.\n- Let dialogue do the work; keep tags simple ('he said', 'she said').\n- Set scenes in dim, ordinary interiors: kitchens, motel rooms, cars at night.\n- Trust the silence between characters to carry the feeling.\n\nDon't:\n- Do not explain what a character is feeling — show the cigarette, the drink, the turned-away face.\n- Avoid metaphor and lyrical flourish; the literal is enough.\n- Do not resolve the marriage, the argument, or the night. Let it sit.\n- Avoid abstractions. If you cannot point at it in the room, cut it.\n\nExample — Title story opening:\nMy friend Mel McGinnis was talking. Mel McGinnis is a cardiologist, and sometimes that gives him the right. The four of us were sitting around his kitchen table drinking gin. Sunlight filled the kitchen from the big window behind the sink. There were Mel and me and his second wife, Teresa — Terri, we called her — and my wife, Laura.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: "<=", value: 12, weight: 0.15 },
      { metric: "adverbs_per_200w", op: "<=", value: 2, weight: 0.1 },
      { metric: "mono_syllable_ratio", op: ">=", value: 0.7, weight: 0.15 },
    ],
    judge_criteria: [
      {
        id: "concrete_objects",
        prompt:
          "Are the rooms furnished with named, ordinary objects (TV, beer, ashtray) rather than abstractions?",
        weight: 0.2,
      },
      {
        id: "dialogue_load",
        prompt:
          "Does dialogue carry most of the scene, with simple 'he said / she said' tags?",
        weight: 0.2,
      },
      {
        id: "withheld_feeling",
        prompt:
          "Is the emotional weight conveyed by what is not said — silence, gesture, object — rather than by naming the feeling?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.9,
      updated_at: "2026-04-26",
    },
    {
      provider: "openai",
      model: "gpt-5",
      match: 0.86,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
