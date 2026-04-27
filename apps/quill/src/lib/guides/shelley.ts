import type { Guide } from "../types";

export const shelley: Guide = {
  slug: "shelley",
  author: "Mary Shelley",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Romantic-Gothic",
  standfirst:
    "Long, qualifying sentences that confess and exalt at once. Solitude and ambition framed as twin compulsions of an over-cultivated mind.",
  description:
    "Shelley's narrators speak in framed letters and confessions: an explorer or a scholar who reveals himself by piling clauses, semicolons, and parentheticals. Sentences move from external fact to inward feeling and back again, often ending on an avowal of weakness or longing rather than on a hard image. Useful when you want first-person copy that sounds bookish, ardent, and self-aware — a voice that admits its own ardour while still leaning into it.",
  voice_axes: ["ornate", "lyrical"],
  use_cases: ["fiction", "email"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 27, max: 70 },
    vocabulary_register:
      "elevated, latinate; abstractions (enterprise, fortitude, sensibility) carried plainly; occasional bookish allusion (Homer, the Ancient Mariner)",
    syntax:
      "periodic sentences with semicolons and dashes; paired or tripled clauses; parenthetical self-correction; first-person address to a named correspondent",
    figurative_language:
      "metaphor drawn from voyaging, fire, and weather; abstractions personified (Destiny, the spirit of preservation) more than novel images coined",
    pacing:
      "unhurried; each paragraph builds by accumulation, then resolves on a confession or an exclamation",
  },
  do: [
    "Build long sentences out of paired or tripled clauses joined by semicolons; let the second clause qualify, soften, or intensify the first.",
    "Address a named reader (sister, friend, stranger) and let the voice slide between report and confession.",
    "Name the abstraction — courage, fortitude, ambition, dejection — rather than dramatising it through action alone.",
    "Close paragraphs on an exclamation, a question, or an avowed weakness, not on a tidy image.",
  ],
  dont: [
    "Do not flatten into short declaratives; the periodic shape is the voice.",
    "Do not strain for original metaphor — Shelley's images come from voyaging, fire, weather, and books.",
    "Do not let the speaker stay composed throughout; the ardour should leak through, often in dashes or italics.",
    "Do not use modern, casual register; keep it written, letter-like, slightly formal.",
  ],
  exemplars: [
    {
      label: "Walton's confession to his sister — ambition and its costs",
      content:
        "And now, dear Margaret, do I not deserve to accomplish some great purpose? My life might have been passed in ease and luxury, but I preferred glory to every enticement that wealth placed in my path. Oh, that some encouraging voice would answer in the affirmative! My courage and my resolution is firm; but my hopes fluctuate, and my spirits are often depressed. I am about to proceed on a long and difficult voyage, the emergencies of which will demand all my fortitude: I am required not only to raise the spirits of others, but sometimes to sustain my own, when theirs are failing.",
      source:
        "Mary Shelley, Frankenstein; or, the modern prometheus (Project Gutenberg #84; public domain)",
      is_generated: false,
    },
    {
      label:
        "The want of a friend — a paragraph that turns inward by accumulation",
      content:
        "But I have one want which I have never yet been able to satisfy, and the absence of the object of which I now feel as a most severe evil, I have no friend, Margaret: when I am glowing with the enthusiasm of success, there will be none to participate my joy; if I am assailed by disappointment, no one will endeavour to sustain me in dejection. I shall commit my thoughts to paper, it is true; but that is a poor medium for the communication of feeling. I desire the company of a man who could sympathise with me, whose eyes would reply to mine.",
      source:
        "Mary Shelley, Frankenstein; or, the modern prometheus (Project Gutenberg #84; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Mary Shelley as her narrators speak in Frankenstein — most often Walton, writing to his sister, or Victor in confession. Build long, periodic sentences whose clauses are hinged by semicolons and dashes; let the second or third clause qualify, intensify, or quietly contradict the first. Address a named reader and slide between outward report and inward avowal. Name abstractions plainly — fortitude, ambition, dejection, sensibility — rather than dramatising them through action alone. Reach for images of voyaging, fire, weather, and books, not novel metaphor. End paragraphs on exclamation, question, or admitted weakness rather than on a clean resolution. Keep the register written and slightly formal: this is correspondence, not speech.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 22, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 45, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "epistolary-confession",
        prompt:
          "Does the voice sound like a written confession to a named reader, sliding between outward report and inward avowal?",
        weight: 0.25,
      },
      {
        id: "periodic-syntax",
        prompt:
          "Are sentences long and periodic, hinged by semicolons or dashes, with later clauses qualifying or intensifying earlier ones?",
        weight: 0.2,
      },
      {
        id: "ardent-register",
        prompt:
          "Is the register elevated and slightly formal, with named abstractions and Romantic-era figures (voyaging, fire, weather) rather than modern or casual diction?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
