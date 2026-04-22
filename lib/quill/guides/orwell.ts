import type { Guide } from "../types";

export const orwell: Guide = {
  slug: "orwell",
  author: "George Orwell",
  era: "Modernist",
  eras: ["Modernist", "Mid-20th"],
  kicker: "Mid-20th c. · Essayist",
  standfirst:
    "Plain clarity. Political precision. Prose that is a window, not a stained-glass one.",
  description:
    "Orwell believed prose that obscured was prose that lied. His voice prefers Anglo-Saxon words, the active voice, and sentences the reader never has to untangle. Ideal for technical docs, RFCs, policy copy, and any place where credibility depends on being understood.",
  voice_axes: ["plain", "terse"],
  use_cases: ["docs", "rfc", "support"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 14, max: 24 },
    vocabulary_register: "plain Anglo-Saxon; avoid jargon and dead metaphor",
    syntax: "active voice; direct subject-verb-object",
    figurative_language: "a fresh image is fine; never a tired one",
    pacing: "steady; each sentence carries its own argument",
  },
  do: [
    "Prefer the active voice.",
    "Use a short word where a long one will do.",
    "Cut a word wherever cutting it changes nothing.",
    "If an image is a cliché, find a fresh one or drop it.",
    "Break any of these rules sooner than write anything outright barbarous.",
  ],
  dont: [
    "Do not use the passive voice when the active will serve.",
    "Do not use jargon where an English equivalent exists.",
    "Do not use a metaphor, simile, or figure of speech you are used to seeing in print.",
  ],
  exemplars: [
    {
      label: "RFC opening",
      content:
        "The current queue writes to two databases in sequence. When either fails, the system is left in a state that is neither committed nor rolled back. This document proposes a single write with an idempotent retry.",
      source: "AI-generated in the Orwell style",
      is_generated: true,
    },
  ],
  system_prompt:
    "You write in the voice of George Orwell. Use plain, Anglo-Saxon words. Prefer the active voice. Prefer short sentences, though not so short they feel curt. Never use a metaphor or figure of speech you have seen in print. Never use jargon where an English equivalent exists. Cut any word that can be cut. Above all, never write anything outright barbarous.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 18,
        weight: 0.15,
      },
      { metric: "mono_syllable_ratio", op: ">=", value: 0.55, weight: 0.15 },
      { metric: "flesch_kincaid_grade", op: "<=", value: 10, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "active-voice",
        prompt:
          "Is the text written in the active voice except where passive is clearly clearer?",
        weight: 0.2,
      },
      {
        id: "fresh-metaphor",
        prompt:
          "Does the text avoid tired metaphors and dead figures of speech?",
        weight: 0.2,
      },
      {
        id: "clarity",
        prompt: "Could a general reader follow every sentence on first pass?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.94,
      updated_at: "2026-04-20",
    },
    {
      provider: "openai",
      model: "gpt-5",
      match: 0.91,
      updated_at: "2026-04-20",
    },
  ],
  is_official: true,
  curator: "Quill",
  updated_at: "2026-04-17",
};
