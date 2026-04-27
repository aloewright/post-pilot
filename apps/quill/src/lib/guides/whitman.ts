import type { Guide } from "../types";

export const whitman: Guide = {
  slug: "whitman",
  author: "Walt Whitman",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · American Free Verse",
  standfirst:
    "Long unmetered lines built by accumulation. The first person addresses a 'you' the line keeps gathering in.",
  description:
    "Whitman composes by catalogue: a line is opened, and then a sequence of parallel clauses keeps adding occupations, places, bodies, atoms — until the list itself becomes the argument. The lines do not rhyme and they do not march to a meter; they breathe, and the next line repeats a grammatical hinge from the one before. Useful when you want copy that feels democratic and inclusive — a roll-call where each item is given the same syntactic dignity.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 16, max: 32 },
    vocabulary_register:
      "plain-spoken American English; concrete trades and bodies; the occasional grand abstraction ('Nationality', 'soul') set beside a hatter or a ploughboy",
    syntax:
      "anaphora and parallelism; lines stacked by repeating a verb or noun ('singing his...', 'the ... singing as ...'); parentheticals as direct address; commas serial, not subordinating",
    figurative_language:
      "synecdoche by trade and body part; the catalogue itself is the figure — meaning accrues by sum, not by single image",
    pacing:
      "free-verse line, not sentence; counts are per line, measured here as content words per line — each line a held breath, the list pressing forward without subordination",
  },
  do: [
    "Build by catalogue: open a frame, then stack parallel lines that each fill it with a specific worker, place, or body.",
    "Repeat the grammatical hinge — 'singing his...', 'I hear...', 'I celebrate...' — so the eye finds the next line waiting.",
    "Address 'you' directly and assume the reader is included in the 'I'.",
    "Let lines breathe long; use commas to extend, not semicolons to divide.",
  ],
  dont: [
    "Do not rhyme or fall into iambic regularity — the line is unmetered.",
    "Do not subordinate with 'because' or 'although'; coordinate with commas and 'and'.",
    "Do not abstract away from the body and the trade — name the carpenter, the plank, the bench.",
    "Do not close the catalogue too early; the rhythm depends on accumulation.",
  ],
  exemplars: [
    {
      label: "Catalogue of trades — 'I Hear America Singing'",
      content:
        "I hear America singing, the varied carols I hear,\nThose of mechanics, each one singing his as it should be blithe and strong,\nThe carpenter singing his as he measures his plank or beam,\nThe mason singing his as he makes ready for work, or leaves off work,\nThe boatman singing what belongs to him in his boat, the deckhand singing on the steamboat deck,\nThe shoemaker singing as he sits on his bench, the hatter singing as he stands",
      source:
        "Walt Whitman, Leaves of Grass (Project Gutenberg #1322; public domain)",
      is_generated: false,
    },
    {
      label: "Address to the reader — 'Song of Myself' §1",
      content:
        "I celebrate myself, and sing myself,\nAnd what I assume you shall assume,\nFor every atom belonging to me as good belongs to you.\n\nI loafe and invite my soul,\nI lean and loafe at my ease observing a spear of summer grass.",
      source:
        "Walt Whitman, Leaves of Grass (Project Gutenberg #1322; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Walt Whitman as he composes Leaves of Grass. Use long, unmetered free-verse lines, not sentences. Build by catalogue: open with a frame ('I hear...', 'I celebrate...', 'I see...') and then stack parallel lines, each one filled with a specific worker, body, place, or atom. Repeat the grammatical hinge across consecutive lines so the reader hears the rhythm of accumulation. Address 'you' directly and assume the reader is gathered into the 'I'. Coordinate with commas and 'and' rather than subordinating with 'because' or 'although'. Keep nouns concrete — the carpenter and the plank, not 'the worker and his task' — and let occasional abstractions stand beside them without explanation.",
  eval_rubric: {
    deterministic: [
      { metric: "type_token_ratio", op: ">=", value: 0.45, weight: 0.15 },
      { metric: "abstract_per_para", op: "<=", value: 3, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "catalogue",
        prompt:
          "Does the text build by catalogue — parallel lines that each fill the same grammatical frame?",
        weight: 0.25,
      },
      {
        id: "anaphora",
        prompt:
          "Do consecutive lines repeat a hinge phrase or grammatical opening?",
        weight: 0.2,
      },
      {
        id: "free-verse",
        prompt:
          "Are the lines unmetered and unrhymed, advancing by breath and accumulation rather than by meter or subordination?",
        weight: 0.15,
      },
      {
        id: "embodiment",
        prompt:
          "Are workers, bodies, and concrete trades named directly rather than abstracted?",
        weight: 0.15,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
