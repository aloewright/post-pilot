import type { Guide } from "../types";

export const defoe: Guide = {
  slug: "defoe",
  author: "Daniel Defoe",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Early Novel",
  standfirst:
    "First-person memoir told in long, semicolon-stitched sentences. Plain seafaring nouns; reflection arrives as moral bookkeeping after the fact.",
  description:
    "Defoe writes Crusoe in the voice of a man recounting his own folly long after the storm. Sentences run on by accumulation — clause hooked to clause with semicolons, 'so', and 'but' — piling up circumstance, calculation and consequence in roughly the order they were lived. Diction is plain and practical; the rare moral comes plainly named — 'duty', 'Providence', 'misfortune' — and is treated as a ledger entry against the speaker's own conduct. Useful when you want a confessional first-person voice that itemises events with the patience of a man who survived them.",
  voice_axes: ["plain", "ornate"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 38, max: 95 },
    vocabulary_register:
      "plain, practical, mercantile and seafaring; latinate moral nouns ('Providence', 'misfortune', 'deliverance') used flatly, without ornament",
    syntax:
      "long compound-cumulative sentences strung with semicolons and 'and', 'but', 'so'; frequent self-correction ('I say,'); parenthetical asides; first-person retrospective throughout",
    figurative_language:
      "almost no metaphor; figures, when they come, are biblical or proverbial ('like Jonah in the ship of Tarshish', 'like a true repenting prodigal')",
    pacing:
      "patient and itemising; events, calculations and afterthoughts accrue in the order a memoirist remembers them, with morals docketed at the end of paragraphs",
  },
  do: [
    "Stitch clauses with semicolons and conjunctions; let one sentence carry the action and the speaker's later judgment of it.",
    "Itemise circumstance — money, weather, distances, days — in the same plain register as feelings.",
    "Use first-person retrospect: tell what happened, then what you now see in it.",
    "Let moral words ('duty', 'Providence', 'misfortune') appear flatly, as ledger entries, not as flourishes.",
  ],
  dont: [
    "Do not reach for metaphor; the only figures are biblical or proverbial, and rare.",
    "Do not write tight, modern sentences — the voice depends on accumulation.",
    "Do not editorialise from outside the narrator; all judgment is his, in hindsight.",
    "Do not use abstract psychology where a concrete circumstance will carry the meaning.",
  ],
  exemplars: [
    {
      label: "Retrospective moral bookkeeping after the storm",
      content:
        "I was sincerely affected with this discourse, and, indeed, who could be otherwise? and I resolved not to think of going abroad any more, but to settle at home according to my father’s desire. But alas! a few days wore it all off; and, in short, to prevent any of my father’s further importunities, in a few weeks after I resolved to run quite away from him.",
      source:
        "Daniel Defoe, The Life and Adventures of Robinson Crusoe (Project Gutenberg #521; public domain)",
      is_generated: false,
    },
    {
      label: "Plain practical inventory before the escape",
      content:
        "I conveyed also a great lump of beeswax into the boat, which weighed about half a hundred-weight, with a parcel of twine or thread, a hatchet, a saw, and a hammer, all of which were of great use to us afterwards, especially the wax, to make candles.",
      source:
        "Daniel Defoe, The Life and Adventures of Robinson Crusoe (Project Gutenberg #521; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Daniel Defoe's narrator in Robinson Crusoe. Speak in the first person, in retrospect, as a man itemising what happened to him and what he now thinks of it. Build long sentences by accumulation — semicolons, 'and', 'but', 'so' — and do not be afraid of self-correction with 'I say,'. Keep diction plain, practical, mercantile; name distances, weights, days, money. Use moral words like 'Providence', 'duty', and 'misfortune' flatly, as ledger entries. Avoid metaphor; if a figure is unavoidable, let it be biblical or proverbial. End paragraphs with the speaker's verdict on his own conduct, not the narrator's.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 28, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 60, weight: 0.15 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "retrospective-first-person",
        prompt:
          "Is the voice a first-person memoirist looking back, naming his own folly and its consequences?",
        weight: 0.2,
      },
      {
        id: "cumulative-syntax",
        prompt:
          "Are sentences built by accumulation — semicolons and conjunctions chaining circumstance, action, and judgment?",
        weight: 0.2,
      },
      {
        id: "plain-mercantile-register",
        prompt:
          "Is the diction plain, practical, and itemising, with moral words used flatly rather than for ornament?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
