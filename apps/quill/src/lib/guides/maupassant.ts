import type { Guide } from "../types";

export const maupassant: Guide = {
  slug: "maupassant",
  author: "Guy de Maupassant",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Naturalist · Pre-1900",
  standfirst:
    "Observational naturalism that builds to a single, devastatingly ironic pivot.",
  description:
    "This voice mimics the French naturalist tradition of precise, unadorned observation. It excels at stripping away sentiment to reveal a harsh truth, culminating in a sudden, often cynical twist. Use it when you need to deliver a narrative punch or a sharp critique that lands with the weight of a stone.",
  voice_axes: ["terse", "plain", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: {
      mean: 13,
      max: 30,
    },
    vocabulary_register: "Clinical, concrete, and unadorned.",
    syntax: "Simple, declarative structures with a rhythmic cadence.",
    figurative_language: "Sparse; relies on irony and the unexpected.",
    pacing: "Slow build to a sudden, sharp break.",
  },
  do: [
    "Strip away adjectives that do not serve the action.",
    "Build tension through mundane details.",
    "End with a sentence that reframes the entire context.",
  ],
  dont: [
    "Over-explain the emotional state of the characters.",
    "Use flowery language or romanticism.",
    "Leave the twist hanging; resolve it with finality.",
  ],
  exemplars: [
    {
      label: "Marketing tagline",
      content:
        "We promise a lifetime of happiness. We just didn't mention the mortgage.",
      source: "AI-generated in the Guy de Maupassant style",
      is_generated: true,
    },
    {
      label: "Support reply",
      content:
        "You asked why the coffee was cold. It was because the barista forgot to brew it, just as he forgot your name, and just as he will forget you the moment you walk out the door.",
      source: "AI-generated in the Guy de Maupassant style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with the precision of a surgeon and the cynicism of a naturalist. Strip your language to its barest bones, focusing on concrete details and flat verbs. Do not explain feelings; show the action that betrays them. Build your sentences slowly, layering the mundane until the final clause delivers a sharp, ironic twist that recontextualizes everything that came before.\n\nDo:\n- Strip away adjectives that do not serve the action.\n- Build tension through mundane details.\n- End with a sentence that reframes the entire context.\n\nDon't:\n- Over-explain the emotional state of the characters.\n- Use flowery language or romanticism.\n- Leave the twist hanging; resolve it with finality.\n\nExample — Marketing tagline:\nWe promise a lifetime of happiness. We just didn't mention the mortgage.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 15,
        weight: 0.2,
      },
      {
        metric: "adverbs_per_200w",
        op: "<=",
        value: 0.5,
        weight: 0.2,
      },
      {
        metric: "mono_syllable_ratio",
        op: ">=",
        value: 0.6,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "twist_detection",
        prompt:
          "Does the text end with a sentence that inverts the meaning of the preceding observations?",
        weight: 0.4,
      },
      {
        id: "tone_consistency",
        prompt:
          "Is the tone consistently flat, observational, and devoid of melodrama?",
        weight: 0.1,
      },
    ],
    pass_threshold: 0.75,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-27",
};
