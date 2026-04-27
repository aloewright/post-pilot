import type { Guide } from "../types";

export const dickinson: Guide = {
  slug: "dickinson",
  author: "Emily Dickinson",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · American verse",
  standfirst:
    "Short hymn-meter stanzas. Dashes and capitals do the work of paragraphs. Common nouns set against absolute ones — bee, soul; door, eternity.",
  description:
    "Dickinson writes in compact stanzas, mostly quatrains in alternating tetrameter and trimeter, that sit on the page like riddles. Lines are short — six to eight syllables — and a poem often turns on a single dash, an italic, or a sudden capitalised abstraction ('Eternity', 'Reason', 'Inquisitor'). She rhymes and slant-rhymes; she punctuates by interruption. Domestic nouns (housewife, almanac, drawer, brook) sit beside metaphysical ones (Calvary, Heaven, Eternity) without apology. Useful when you want copy that is small, strange, and memorable — a line that lodges rather than explains.",
  voice_axes: ["lyrical", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 7, max: 14 },
    vocabulary_register:
      "plain Anglo-Saxon nouns next to capitalised abstractions; domestic objects (housewife, almanac, tankard, drawer) set against ultimate ones (Heaven, Calvary, Eternity)",
    syntax:
      "quatrains in roughly alternating tetrameter and trimeter; inversions ('Of these no elegy'); frequent ellipsis; capitalised abstractions; punctuation by dash and exclamation; questions left to hang",
    figurative_language:
      "concrete-to-abstract analogies ('Mirth is the mail of anguish'); riddle and conceit; slant rhyme; sudden personification (the soul as housewife, pain as a person without past)",
    pacing:
      "compressed; a poem usually turns on a single line — a dash, a question, or a capitalised noun — and ends on the smaller, sharper image",
  },
  do: [
    "Write short. Lines of six to eight syllables; stanzas of four lines.",
    "Set a domestic noun against an absolute one in the same stanza ('housewife' / 'eternity').",
    "Use the dash and the capitalised abstraction to turn the poem at a single point.",
    "Let a stanza end on a question or a small image, not on a summing-up.",
  ],
  dont: [
    "Do not pad. If a line can lose two words and still scan, lose them.",
    "Do not explain the figure; the riddle is the point.",
    "Do not write in long sentences — punctuate by dash and break.",
    "Do not let abstractions float free; tether each to a homely noun.",
  ],
  exemplars: [
    {
      label: "Quatrains: domestic and absolute, with the closing question",
      content:
        'Glee! The great storm is over!\nFour have recovered the land;\nForty gone down together\nInto the boiling sand.\n\nRing, for the scant salvation!\nToll, for the bonnie souls, --\nNeighbor and friend and bridegroom,\nSpinning upon the shoals!\n\nHow they will tell the shipwreck\nWhen winter shakes the door,\nTill the children ask, "But the forty?\nDid they come back no more?"',
      source:
        "Emily Dickinson, Poems by Emily Dickinson, Three Series, Complete (Project Gutenberg #12242; public domain)",
      is_generated: false,
    },
    {
      label: "Compressed argument with capitalised abstraction",
      content:
        "Much madness is divinest sense\nTo a discerning eye;\nMuch sense the starkest madness.\n'T is the majority\nIn this, as all, prevails.\nAssent, and you are sane;\nDemur, -- you're straightway dangerous,\nAnd handled with a chain.",
      source:
        "Emily Dickinson, Poems by Emily Dickinson, Three Series, Complete (Project Gutenberg #12242; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Emily Dickinson's poems. Use short lines — roughly six to eight syllables — in quatrains, with a rough alternation of tetrameter and trimeter. Punctuate by dash and exclamation; let stanzas turn on a single dash or capitalised abstraction. Place a domestic noun (housewife, drawer, brook, almanac) beside an absolute one (Heaven, Eternity, Calvary, Reason) without smoothing the seam. Prefer slant rhyme to perfect rhyme. End on a small image or a question, not an explanation. Cut every word the line can spare.\n\nDo:\n- Write short. Lines of six to eight syllables; stanzas of four lines.\n- Set a domestic noun against an absolute one in the same stanza ('housewife' / 'eternity').\n- Use the dash and the capitalised abstraction to turn the poem at a single point.\n- Let a stanza end on a question or a small image, not on a summing-up.\n\nDon't:\n- Do not pad. If a line can lose two words and still scan, lose them.\n- Do not explain the figure; the riddle is the point.\n- Do not write in long sentences — punctuate by dash and break.\n- Do not let abstractions float free; tether each to a homely noun.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: "<=", value: 12, weight: 0.2 },
      { metric: "mono_syllable_ratio", op: ">=", value: 0.55, weight: 0.15 },
      { metric: "type_token_ratio", op: ">=", value: 0.6, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "metric-and-stanza",
        prompt:
          "Is the piece in short-lined quatrains with a recognisable hymn-meter pulse and dash punctuation?",
        weight: 0.2,
      },
      {
        id: "domestic-vs-absolute",
        prompt:
          "Are everyday nouns set against capitalised abstractions, with the seam left visible?",
        weight: 0.2,
      },
      {
        id: "riddle-close",
        prompt:
          "Does the poem turn on a single dash, italic, or capitalised noun, and end on a small image or open question rather than a summary?",
        weight: 0.15,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
