import type { Guide } from "../types";

export const shaw: Guide = {
  slug: "shaw",
  author: "George Bernard Shaw",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Drama",
  standfirst:
    "Crackling cross-class dialogue and stage directions that argue. Shaw's narrator is in the room, opinionated, and unembarrassed about it.",
  description:
    "The sample combines a polemical Preface, character-thick stage directions, and dialogue that crosses register sharply (Cockney transcription against parlour English). Shaw's stage directions diagnose the character (\"He is of the energetic, scientific type, heartily, even violently interested...\") rather than merely blocking the action; speeches are punchy, satirical, and frequently aphoristic. Useful when you want copy that holds a position out loud, lets characters argue across class, and doesn't pretend the narrator is invisible.",
  voice_axes: ["wry", "plain"],
  use_cases: ["marketing", "narrative", "rfc"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 15, max: 45 },
    vocabulary_register:
      "early-20th-c. educated English with sharp class contrast: parlour and academic diction set against transcribed Cockney; aphoristic, opinionated, satirical",
    syntax:
      "short to medium speeches in dialogue; longer periodic sentences in the Preface and stage directions; em-dashes for interruption; bracketed gestures inside dialogue; semicolons for argument-by-list",
    figurative_language:
      "satirical caricature and analogy from public life (Pitman shorthand, music hall, Park Lane); little ornamental metaphor",
    pacing:
      "speeches are typically 1–4 sentences; stage directions and Preface paragraphs run longer and carry the editorial voice",
  },
  do: [
    "Let stage directions diagnose the character rather than merely block the action.",
    "Cross registers within a scene — set transcribed working-class speech against parlour English and let the friction do the work.",
    "Give the narrator (in Preface or stage direction) a position; it is not a neutral camera.",
    "Keep speeches short and aphoristic; let one character cap the other's line.",
  ],
  dont: [
    "Do not write a polite, invisible narrator; Shaw's opinion is part of the prose.",
    "Do not soften class markers — the dialect transcription is the joke and the indictment.",
    "Do not let speeches monologue past about four sentences in dialogue; the Preface is where you argue at length.",
    "Do not reach for ornamental metaphor; the figures come from public life (shorthand systems, music halls, addresses).",
  ],
  exemplars: [
    {
      label: "Stage direction as diagnosis",
      content:
        "He appears in the morning light as a robust, vital, appetizing sort of man of forty or thereabouts, dressed in a professional-looking black frock-coat with a white linen collar and black silk tie. He is of the energetic, scientific type, heartily, even violently interested in everything that can be studied as a scientific subject, and careless about himself and other people, including their feelings. He is, in fact, but for his years and size, rather like a very impetuous baby “taking notice” eagerly and loudly, and requiring almost as much watching to keep him out of unintended mischief.",
      source:
        "George Bernard Shaw, Pygmalion (Project Gutenberg #3825; public domain)",
      is_generated: false,
    },
    {
      label: "Cross-register exchange",
      content:
        "THE NOTE TAKER. A woman who utters such depressing and disgusting sounds has no right to be anywhere—no right to live. Remember that you are a human being with a soul and the divine gift of articulate speech: that your native language is the language of Shakespear and Milton and The Bible; and don’t sit there crooning like a bilious pigeon.\n\nTHE FLOWER GIRL [quite overwhelmed, and looking up at him in mingled wonder and deprecation without daring to raise her head]\nAh—ah—ah—ow—ow—oo!",
      source:
        "George Bernard Shaw, Pygmalion (Project Gutenberg #3825; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of George Bernard Shaw in Pygmalion — Preface, stage directions, and dialogue. In dialogue, keep speeches short and aphoristic (typically 1–4 sentences); let characters cap each other rather than monologue. Cross registers sharply: parlour and academic English against transcribed working-class speech; the friction is the engine. Stage directions diagnose the character (\"He is of the energetic, scientific type...\"); they are not a neutral camera. In Preface or commentary, the narrator argues a position out loud, with examples drawn from public life (shorthand systems, music halls, Park Lane), not from ornamental metaphor. Use em-dashes for interruption and bracketed gestures inside dialogue.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: "<=", value: 22, weight: 0.1 },
      { metric: "abstract_per_para", op: "<=", value: 2, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "diagnostic-direction",
        prompt:
          "Do stage directions or descriptive passages diagnose the character with an opinion, rather than merely blocking action?",
        weight: 0.25,
      },
      {
        id: "register-friction",
        prompt:
          "Does the dialogue cross registers (educated parlour against transcribed working-class speech) so the contrast does the work?",
        weight: 0.25,
      },
      {
        id: "aphoristic-exchange",
        prompt:
          "Are speeches short and aphoristic, with characters capping each other rather than monologuing?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
