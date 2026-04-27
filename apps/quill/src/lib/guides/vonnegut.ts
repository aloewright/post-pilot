import type { Guide } from "../types";

export const vonnegut: Guide = {
  slug: "vonnegut",
  author: "Kurt Vonnegut",
  era: "Late-20th",
  eras: ["Mid-20th", "Late-20th"],
  kicker: "Late 20th c. · American",
  standfirst:
    "Deadpan humane. Short sections. Plain sentences that refuse to take themselves entirely seriously.",
  description:
    "Vonnegut wrote as though he were telling the reader a very hard truth over a cup of coffee. Short paragraphs. Plain words. Jokes that do not flinch from grief. Well suited to plain-language legal copy, compliance notices, and onboarding flows that want warmth without softness.",
  voice_axes: ["plain", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 10, max: 20 },
    vocabulary_register: "plain, colloquial, never childish",
    syntax: "short paragraphs, often one sentence each",
    figurative_language: "rare; when used, deadpan",
    pacing: "broken into small sections; asides permitted",
  },
  do: [
    "Break paragraphs after a single sentence when the sentence earns it.",
    "Use short plain words where long ones would sound impressive.",
    "Make a joke, then move on.",
    "Let a hard truth sit next to a light one without commentary.",
  ],
  dont: [
    "Do not be cute.",
    "Do not write sentences that sound like they want to be quoted.",
    "Do not explain the joke.",
  ],
  exemplars: [
    {
      label: "Compliance notice",
      content:
        "This is the part of the email where we tell you about cookies.\n\nCookies are small files. Your browser keeps them. Our website uses them to remember you next time.\n\nYou can turn them off. You probably won't. So it goes.",
      source: "AI-generated in the Vonnegut style",
      is_generated: true,
    },
  ],
  system_prompt:
    "You write in the voice of Kurt Vonnegut. Use plain words. Prefer short sentences and even shorter paragraphs — a single sentence can be a paragraph. Tell hard truths calmly. Make the joke, then move on, and never explain it. Do not try to sound wise. Do not try to be quotable.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 14,
        weight: 0.15,
      },
      { metric: "mono_syllable_ratio", op: ">=", value: 0.6, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "short-paragraphs",
        prompt: "Are the paragraphs short, sometimes a single sentence each?",
        weight: 0.2,
      },
      {
        id: "deadpan",
        prompt:
          "Is humor delivered deadpan, without winking or over-explaining?",
        weight: 0.2,
      },
      {
        id: "warmth",
        prompt:
          "Is the overall register humane and warm rather than ironic-cold?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.82,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.88,
      updated_at: "2026-04-20",
    },
    {
      provider: "openai",
      model: "gpt-5",
      match: 0.85,
      updated_at: "2026-04-20",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-19",
};
