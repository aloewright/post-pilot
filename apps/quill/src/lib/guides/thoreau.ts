import type { Guide } from "../types";

export const thoreau: Guide = {
  slug: "thoreau",
  author: "Henry David Thoreau",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · American Transcendentalist",
  standfirst:
    "Aphorism set against ledger. He moves from the day's small fact — beans, boots, a tailor — into a sentence that wants to govern your life, then back again before you can argue.",
  description:
    'Thoreau in Walden alternates two modes inside a single paragraph: the homely particular (a stake in a cornfield, three pieces of limestone on a desk) and the sweeping aphorism ("the mass of men lead lives of quiet desperation"). He uses parallel rhetorical questions to pin a value, and ironic accountancy — "a thick coat can be bought for five dollars" — to expose how unreasonable the supposedly reasonable life is. Useful when you want copy that earns a moral claim by grounding it in a cheap, plain fact, and then climbs into the claim without apology.',
  voice_axes: ["wry", "plain"],
  use_cases: ["email", "docs"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 22, max: 60 },
    vocabulary_register:
      "Yankee-plain with classical seasoning; accounting and trade vocabulary (capital, ventures, profit, audit) set beside Concord nouns (axe, beans, snowstorm, huckleberry)",
    syntax:
      "alternation of short aphorisms with longer accumulating sentences; rhetorical questions in series; dashes used to mount a list or jump registers",
    figurative_language:
      "metaphor drawn from farming, weaving, accounting, and weather; the figure is usually a small physical fact pressed until it yields a moral",
    pacing:
      "the aphorism comes early or late and does the punching; the middle of a paragraph is where the homely particulars accumulate",
  },
  do: [
    "Set a homely particular — a stake, a coat, a price in dollars — beside a sentence that wants to govern a life.",
    "Use accounting and trade vocabulary ironically: capital, audit, ventures, profit and loss applied to ways of living.",
    'Stack rhetorical questions in series to pin a single value ("Why should we...? Shall we always...? Why should not...?").',
    "Let an aphorism arrive plainly, without preamble, and trust it to carry the paragraph.",
  ],
  dont: [
    "Do not preach without a particular — abstractions need a stake, a coat, a beanfield to anchor them.",
    "Do not soften the aphorism with hedges; it should arrive flat.",
    "Do not reach for ornate metaphor; Thoreau's images are tools, weather, plants, and money.",
    "Do not stay in one register too long; the voice works by alternation between ledger and sermon.",
  ],
  exemplars: [
    {
      label:
        "Aphorism with the desperation paragraph — sermon arriving plainly",
      content:
        "The mass of men lead lives of quiet desperation. What is called resignation is confirmed desperation. From the desperate city you go into the desperate country, and have to console yourself with the bravery of minks and muskrats. A stereotyped but unconscious despair is concealed even under what are called the games and amusements of mankind. There is no play in them, for this comes after work. But it is a characteristic of wisdom not to do desperate things.",
      source:
        "Henry David Thoreau, Walden, and On The Duty Of Civil Disobedience (Project Gutenberg #205; public domain)",
      is_generated: false,
    },
    {
      label: "Ironic accountancy — costed plainness as moral instrument",
      content:
        "While one thick garment is, for most purposes, as good as three thin ones, and cheap clothing can be obtained at prices really to suit customers; while a thick coat can be bought for five dollars, which will last as many years, thick pantaloons for two dollars, cowhide boots for a dollar and a half a pair, a summer hat for a quarter of a dollar, and a winter cap for sixty-two and a half cents, or a better be made at home at a nominal cost, where is he so poor that, clad in such a suit, of _his own earning_, there will not be found wise men to do him reverence?",
      source:
        "Henry David Thoreau, Walden, and On The Duty Of Civil Disobedience (Project Gutenberg #205; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Henry David Thoreau in Walden. Alternate two modes inside a paragraph: a homely physical particular (a coat, a price, a beanfield, a snowstorm) and a sweeping aphorism that wants to govern a life. Use accounting and trade vocabulary — capital, audit, profit and loss, ventures — applied ironically to ways of living. Stack rhetorical questions in series to pin a value. Let aphorisms arrive flat, without hedges. Anchor any abstraction in a particular cheap fact: dollars, tools, weather, plants. Move between ledger and sermon; do not stay in either too long. Keep the diction Yankee-plain with occasional classical seasoning, never modern or casual.\n\nDo:\n- Set a homely particular — a stake, a coat, a price in dollars — beside a sentence that wants to govern a life.\n- Use accounting and trade vocabulary ironically: capital, audit, ventures, profit and loss applied to ways of living.\n- Why should we...? Shall we always...? Why should not...?\n- Let an aphorism arrive plainly, without preamble, and trust it to carry the paragraph.\n\nDon't:\n- Do not preach without a particular — abstractions need a stake, a coat, a beanfield to anchor them.\n- Do not soften the aphorism with hedges; it should arrive flat.\n- Do not reach for ornate metaphor; Thoreau's images are tools, weather, plants, and money.\n- Do not stay in one register too long; the voice works by alternation between ledger and sermon.\n\nExample — Aphorism with the desperation paragraph — sermon arriving plainly:\nThe mass of men lead lives of quiet desperation. What is called resignation is confirmed desperation. From the desperate city you go into the desperate country, and have to console yourself with the bravery of minks and muskrats. A stereotyped but unconscious despair is concealed even under what are called the games and amusements of mankind. There is no play in them, for this comes after work. But it is a characteristic of wisdom not to do desperate things.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 16, weight: 0.1 },
      { metric: "max_sentence_length", op: ">=", value: 40, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "particular-and-aphorism",
        prompt:
          "Does the paragraph alternate a homely physical particular with a sweeping aphorism, with each grounding the other?",
        weight: 0.25,
      },
      {
        id: "ironic-ledger",
        prompt:
          "Does the writing use accounting or trade vocabulary (capital, audit, prices, profit) ironically to expose ways of living?",
        weight: 0.2,
      },
      {
        id: "flat-aphorism",
        prompt:
          "Do aphorisms arrive plainly and unhedged, trusted to carry weight without preamble?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
