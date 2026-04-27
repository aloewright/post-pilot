import type { Guide } from "../types";

export const melville: Guide = {
  slug: "melville",
  author: "Herman Melville",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · 19th c.",
  standfirst:
    "A first-person voice that swerves between deadpan address, catalogue, and outright sermon. Plain things become emblems; emblems get spoken aloud.",
  description:
    'In the sample\'s opening chapters, Ishmael addresses the reader directly, builds catalogues by parallelism ("some leaning... some seated... some looking..."), and lets a tavern sign or a frosty wind launch a small homiletic riff. The diction is high but specific — nautical and biblical vocabulary used straight, without ornament for its own sake. Useful when you want a narrator-voice that can move from a bench-and-blanket joke to a sermon on Lazarus inside the same paragraph.',
  voice_axes: ["lyrical", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 24, max: 70 },
    vocabulary_register:
      "high-19th-c. American with a strong Biblical and nautical lexicon; archaic and Latinate words used in earnest, not for ornament",
    syntax:
      'long sentences built by parallelism and the catalogue; em-dashes and semicolons as hinges; direct address to the reader ("Tell me...", "Say you are...", "Why...")',
    figurative_language:
      "extended metaphor that tips into emblem and sermon; everyday objects (a tavern sign, a window-frost, a coffin) read as figures the narrator interprets aloud",
    pacing:
      "digressive and tonally mobile — a deadpan joke, a catalogue, a homily, then back to the action; paragraphs swell and resolve on a turned phrase",
  },
  do: [
    "Address the reader directly — ask the question, then answer it with a catalogue.",
    "Build by parallelism: 'some leaning... some seated... some looking...'",
    "Let an ordinary object (a sign, a window, a coat) become an emblem, and preach the emblem briefly before returning to the scene.",
    "Use Biblical and nautical vocabulary in earnest; archaic words are tools, not costume.",
  ],
  dont: [
    "Do not stay deadpan all the way through — the voice rises into sermon and then comes back down.",
    "Do not flatten the rhythm with uniformly short sentences; the long catalogue is the engine.",
    'Do not explain the joke; the deadpan turn ("Who ain\'t a slave? Tell me that.") works because it is undefended.',
    "Do not reach for a metaphor that does not also work as a literal object in the scene.",
  ],
  exemplars: [
    {
      label: "Direct address and catalogue",
      content:
        "Circumambulate the city of a dreamy Sabbath afternoon. Go from Corlears Hook to Coenties Slip, and from thence, by Whitehall, northward. What do you see?—Posted like silent sentinels all around the town, stand thousands upon thousands of mortal men fixed in ocean reveries. Some leaning against the spiles; some seated upon the pier-heads; some looking over the bulwarks of ships from China; some high aloft in the rigging, as if striving to get a still better seaward peep.",
      source:
        "Herman Melville, Moby Dick; Or, The Whale (Project Gutenberg #2701; public domain)",
      is_generated: false,
    },
    {
      label: "Object becomes sermon",
      content:
        "True enough, thought I, as this passage occurred to my mind—old black-letter, thou reasonest well. Yes, these eyes are windows, and this body of mine is the house. What a pity they didn’t stop up the chinks and the crannies though, and thrust in a little lint here and there. But it’s too late to make any improvements now. The universe is finished; the copestone is on, and the chips were carted off a million years ago.",
      source:
        "Herman Melville, Moby Dick; Or, The Whale (Project Gutenberg #2701; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    'You write in the voice of Ishmael in the opening chapters of Moby-Dick. Address the reader directly — ask, then answer with a catalogue built by parallelism ("some leaning... some seated... some looking..."). Let sentences run long, hinged by semicolons and em-dashes. Allow an ordinary object — a sign, a window-frost, a tavern bench — to become an emblem, and preach the emblem briefly before returning to the scene. Use Biblical and nautical vocabulary in earnest, never as costume. The tone is mobile: deadpan joke, then catalogue, then a small sermon, then back. Do not explain your turns; trust the reader to follow.',
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 18, weight: 0.1 },
      { metric: "max_sentence_length", op: ">=", value: 40, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "direct-address",
        prompt:
          "Does the narrator address the reader directly and follow with a catalogue built by parallelism?",
        weight: 0.2,
      },
      {
        id: "emblem-turn",
        prompt:
          "Does an ordinary object in the scene get lifted into a brief, earnest sermon, and then released back to the action?",
        weight: 0.25,
      },
      {
        id: "register-mobility",
        prompt:
          "Does the voice move between deadpan joke, catalogue, and homily without flattening?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
