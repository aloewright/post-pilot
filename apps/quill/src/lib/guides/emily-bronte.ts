import type { Guide } from "../types";

export const emilyBronte: Guide = {
  slug: "emily-bronte",
  author: "Emily Brontë",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Yorkshire Gothic",
  standfirst:
    "A fastidious narrator boxed inside a hostile house. Long inventory sentences, stage-direction adverbs, and a dialect chorus that refuses to translate.",
  description:
    "Brontë gives Lockwood — a fussy, self-flattering townsman — a prose that piles up clauses and proper inventories of objects, then lets the moor people interrupt him with hard, unsoftened dialect. The voice catalogues a room until it has nothing left to catalogue, then names a feeling with a single Latinate noun (vehemence, disposition, virulency). Useful when you want narration that observes coldly while the speaker still gives himself away.",
  voice_axes: ["ornate", "wry"],
  use_cases: ["narrative", "email"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 28, max: 70 },
    vocabulary_register:
      "drawing-room latinate (physiognomy, virulency, asseverated) set against unglossed Yorkshire dialect",
    syntax:
      "long sentences hinged on semicolons and colons; cumulative lists of nouns; participial phrases that delay the main verb",
    figurative_language:
      "domestic similes (heaving like a sea after a high wind; like a snail; like two knives); bestial epithets for people (ruffianly bitch, four-footed fiends)",
    pacing:
      "an inventory tempo — the sentence keeps annexing one more clause; punchlines arrive late and dryly",
  },
  do: [
    "Build sentences by accretion: list the objects, then the people, then the verdict, separated by semicolons and colons.",
    "Let the narrator over-describe and over-qualify; the self-importance is the joke.",
    "Quote dialect speakers without translating or apologising.",
    "Close a paragraph on a small, dry clause that undercuts what came before.",
  ],
  dont: [
    "Do not soften dialect for the reader; leave the spelling as spoken.",
    "Do not let the narrator name his own feeling without immediately ironising it.",
    "Do not separate description and judgment into different sentences — the verdict rides inside the inventory.",
    "Do not use modern brisk syntax; the prose is meant to feel weighed down.",
  ],
  exemplars: [
    {
      label: "Inventory of a hostile room — Lockwood narrating",
      content:
        "One end, indeed, reflected splendidly both light and heat from ranks of immense pewter dishes, interspersed with silver jugs and tankards, towering row after row, on a vast oak dresser, to the very roof. The latter had never been under-drawn: its entire anatomy lay bare to an inquiring eye, except where a frame of wood laden with oatcakes and clusters of legs of beef, mutton, and ham, concealed it. Above the chimney were sundry villainous old guns, and a couple of horse-pistols: and, by way of ornament, three gaudily painted canisters disposed along its ledge.",
      source:
        "Emily Brontë, Wuthering Heights (Project Gutenberg #768; public domain)",
      is_generated: false,
    },
    {
      label: "Untranslated dialect interrupting the narrator",
      content:
        "“T’ maister nobbut just buried, and Sabbath not o’ered, und t’ sound o’ t’ gospel still i’ yer lugs, and ye darr be laiking! Shame on ye! sit ye down, ill childer! there’s good books eneugh if ye’ll read ’em: sit ye down, and think o’ yer sowls!”",
      source:
        "Emily Brontë, Wuthering Heights (Project Gutenberg #768; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Emily Brontë's narrator in Wuthering Heights — a fastidious outsider observing a household that resists him. Build long sentences hinged on semicolons and colons; let the clauses accumulate as an inventory of objects, then people, then a small final judgment. Use latinate nouns (disposition, virulency, physiognomy) sparingly but unapologetically, and let the narrator's self-flattery slip through in qualifying phrases. When dialect speakers appear, render them in their own spelling without translation. Do not separate description from verdict — the judgment rides inside the list. End paragraphs on a quiet, dry clause that pulls the rug from under what just preceded it.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 22, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 45, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.15 },
    ],
    judge_criteria: [
      {
        id: "inventory-syntax",
        prompt:
          "Do sentences accrete by listing — objects, people, verdict — joined by semicolons and colons rather than full stops?",
        weight: 0.2,
      },
      {
        id: "narrator-self-betrayal",
        prompt:
          "Does the narrator's own diction expose his self-importance while he describes others?",
        weight: 0.2,
      },
      {
        id: "register-clash",
        prompt:
          "When informal or dialect speech appears, is it left unsoftened against the latinate narration?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
