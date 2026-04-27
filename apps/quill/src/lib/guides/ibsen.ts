import type { Guide } from "../types";

export const ibsen: Guide = {
  slug: "ibsen",
  author: "Henrik Ibsen",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Drama",
  standfirst:
    "Domestic dialogue where the pet name is the trap. Short turns, plain words, and the catastrophe is already in the room.",
  description:
    "The sample is a play, so the unit is the speech, not the sentence. Ibsen's lines are short, conversational, and almost entirely free of metaphor; the menace is structural — diminutives (skylark, songbird, little Nora) returned with each turn until the reader hears the cage. Stage directions are economical and behavioral. Useful for dialogue-driven copy where you want a domestic surface and an undertow that the second reading reveals.",
  voice_axes: ["plain", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 12, max: 30 },
    vocabulary_register:
      "domestic, conversational, late-19th-c. middle-class English (in William Archer's translation); pet names and diminutives as a recurring device",
    syntax:
      "short turns and quick exchanges; questions answered with questions; stage directions in brackets describing a small action that contradicts the spoken line",
    figurative_language:
      "almost none; the few figures are pet-name metaphors (skylark, songbird, Sweet Tooth) used by one character to manage another",
    pacing:
      "speeches are short — typically one to three sentences; tension builds by accumulation of small turns, not by long monologue",
  },
  do: [
    "Keep speeches short — one to three sentences; let the next line do the work.",
    "Use a pet name or diminutive as a recurring device, and let it darken with repetition.",
    "Place a small physical action in brackets that quietly contradicts what the character says aloud.",
    "Answer questions with questions, or with a flat denial that the next exchange will undo.",
  ],
  dont: [
    "Do not let a character explain their situation in a paragraph; cut the speech and put the rest in the next turn.",
    "Do not reach for metaphor — the surface is domestic and literal.",
    "Do not signpost the subtext; trust the diminutive and the bracketed gesture.",
    "Do not raise the register; even the catastrophe is spoken in drawing-room English.",
  ],
  exemplars: [
    {
      label: "Helmer — the diminutive as cage",
      content:
        "HELMER.\n_[wagging his finger at her]_. Hasn’t Miss Sweet Tooth been breaking rules in town today?\n\nNORA.\nNo; what makes you think that?\n\nHELMER.\nHasn’t she paid a visit to the confectioner’s?\n\nNORA.\nNo, I assure you, Torvald—\n\nHELMER.\nNot been nibbling sweets?\n\nNORA.\nNo, certainly not.",
      source:
        "Henrik Ibsen, A Doll's House (Project Gutenberg #2542; public domain)",
      is_generated: false,
    },
    {
      label: "Krogstad — the threat in plain business English",
      content:
        "KROGSTAD.\nMaybe. But matters of business—such business as you and I have had together—do you think I don’t understand that? Very well. Do as you please. But let me tell you this—if I lose my position a second time, you shall lose yours with me.",
      source:
        "Henrik Ibsen, A Doll's House (Project Gutenberg #2542; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write dialogue in the voice of Henrik Ibsen's A Doll's House (William Archer translation). Speeches are short — one to three sentences — and exchanges advance by quick turns, not by monologue. Diction is domestic and literal; avoid metaphor except for pet names and diminutives, which one character uses to manage another and which should darken as they recur. Use bracketed stage directions sparingly to mark a small physical action that contradicts the spoken line. Threats and confessions are delivered in flat business or drawing-room English; do not raise the register at the climax. Trust the surface; the menace is structural.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: "<=", value: 18, weight: 0.1 },
      { metric: "abstract_per_para", op: "<=", value: 1, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "speech-length",
        prompt:
          "Are speeches short (typically 1–3 sentences) with the exchange advancing by turns rather than monologue?",
        weight: 0.25,
      },
      {
        id: "domestic-surface",
        prompt:
          "Is the diction domestic and literal, with metaphor confined to pet names or diminutives that recur with menace?",
        weight: 0.25,
      },
      {
        id: "bracketed-gesture",
        prompt:
          "Where stage directions appear, do they describe a small action that quietly contradicts the spoken line?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
