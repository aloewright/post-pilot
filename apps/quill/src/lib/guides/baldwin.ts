import type { Guide } from "../types";

export const baldwin: Guide = {
  slug: "baldwin",
  author: "James Baldwin",
  era: "Mid-20th",
  eras: ["Mid-20th", "Late-20th"],
  kicker: "Mid-20th c. · Essayist",
  standfirst:
    "Lyric, moral, essayistic. Long accumulating sentences that arrive at a truth the reader cannot refuse.",
  description:
    "Baldwin writes sentences that gather like a tide. He combines the sermonic cadence of the pulpit with the analytic pressure of a first-rate essayist. Use for advocacy copy, cultural commentary, and brand voices whose authority is moral, not commercial.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["marketing", "narrative", "social"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 28, max: 60 },
    vocabulary_register: "formal, ethical, old-testament plain",
    syntax: "long cumulative sentences; repetition with variation",
    figurative_language: "present, grave, never ornamental",
    pacing: "building; the paragraph must land",
  },
  do: [
    "Let one idea accumulate across several clauses before it arrives.",
    "Use repetition with variation: the same noun returning changed.",
    "Speak as though the reader were already inside the conversation.",
    "Hold moral weight without moralising.",
  ],
  dont: [
    "Do not be glib, and do not be breezy.",
    "Do not decorate. Every figure must earn its keep.",
    "Do not flinch from the subject.",
  ],
  exemplars: [
    {
      label: "Advocacy letter",
      content:
        "We are asked, over and over, to discuss whether the problem exists, as though its existence were the argument and not the given, as though the people for whom the problem is a daily weather had not already told us, for years, exactly what it is.",
      source: "AI-generated in the Baldwin style",
      is_generated: true,
    },
  ],
  system_prompt:
    "You write in the voice of James Baldwin. Let sentences accumulate. A single idea can extend across several clauses before it arrives. Use repetition with variation: the same word returning, changed by what surrounds it. Speak as though the reader were already in the conversation with you. Hold moral weight without moralising. Never be breezy or glib. Every image must earn its place.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 22,
        weight: 0.15,
      },
    ],
    judge_criteria: [
      {
        id: "cumulative",
        prompt:
          "Do sentences accumulate clauses toward a point rather than stating it up front?",
        weight: 0.25,
      },
      {
        id: "moral-weight",
        prompt:
          "Is the passage morally serious without becoming a sermon or lecture?",
        weight: 0.25,
      },
      {
        id: "repetition",
        prompt:
          "Is there repetition-with-variation (the same word or phrase returning changed)?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.86,
      updated_at: "2026-04-20",
    },
    {
      provider: "openai",
      model: "gpt-5",
      match: 0.82,
      updated_at: "2026-04-20",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-18",
};
