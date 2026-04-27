import type { Guide } from "../types";

export const nietzsche: Guide = {
  slug: "nietzsche",
  author: "Friedrich Nietzsche",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · 19th c.",
  standfirst:
    "Mock-scriptural cadence, short numbered sections, and an aphorism that turns at the end. Thomas Common's translation gives every line a Bible-English ring.",
  description:
    'In the sample (the Common translation), Zarathustra speaks in short numbered sections, frequently in the second-person plural and in the imperative. Sentences are short and declarative; verbs take archaic forms ("Lo!", "Verily", "hath"); the unit is the aphorism, often stacked by anaphora ("I love him who...") and turning at the close. Useful when you want copy that sounds like prophecy or manifesto without being merely loud — the form is austere, and the punchline is structural.',
  voice_axes: ["lyrical", "terse"],
  use_cases: ["docs"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 14, max: 35 },
    vocabulary_register:
      "mock-scriptural Bible-English (Thomas Common's 1909 translation); archaisms (thou, hath, doeth, verily, lo); abstractions personified (the spirit, the dragon, the lion)",
    syntax:
      'short numbered sections; anaphoric stacks ("I love him who...", "The hour when ye say..."); inverted verbs and exclamations; aphorisms ending on a turn',
    figurative_language:
      "allegory and emblem (rope-dancer, camel-lion-child, the great dragon); metaphors named and then walked through, not merely glanced at",
    pacing:
      'very short paragraphs, often one or two sentences; sections close on a thunderclap line ("Thus spake Zarathustra", "GOD IS DEAD")',
  },
  do: [
    "Stack sentences by anaphora — repeat the opening clause and let each line vary one element.",
    "Keep paragraphs to one or two short sentences; let the white space carry the weight.",
    'Use archaic inversions and exclamations ("Lo!", "Verily") when the line is meant as proclamation.',
    "Build an allegory by naming a figure (camel, lion, child) and then walking it through its transformations.",
  ],
  dont: [
    "Do not write the aphorism as a long argument; it should turn in one short sentence.",
    "Do not mix in modern academic register — the translation's Bible-English is the instrument.",
    "Do not pile abstractions without an emblem to carry them; the figure is what makes the line stick.",
    'Do not soften the proclamation with hedges ("perhaps", "in some sense"); the voice is unhedged.',
  ],
  exemplars: [
    {
      label: 'Anaphoric stack — "I love him who..."',
      content:
        "I love him who liveth in order to know, and seeketh to know in order that the Superman may hereafter live. Thus seeketh he his own down-going.\n\nI love him who laboureth and inventeth, that he may build the house for the Superman, and prepare for him earth, animal, and plant: for thus seeketh he his own down-going.\n\nI love him who loveth his virtue: for virtue is the will to down-going, and an arrow of longing.",
      source:
        "Friedrich Nietzsche, Thus Spake Zarathustra, trans. Thomas Common (Project Gutenberg #1998; public domain)",
      is_generated: false,
    },
    {
      label: "Allegory walked through — camel, lion, child",
      content:
        "Three metamorphoses of the spirit do I designate to you: how the spirit becometh a camel, the camel a lion, and the lion at last a child.\n\nMany heavy things are there for the spirit, the strong load-bearing spirit in which reverence dwelleth: for the heavy and the heaviest longeth its strength.\n\nWhat is heavy? so asketh the load-bearing spirit; then kneeleth it down like the camel, and wanteth to be well laden.",
      source:
        "Friedrich Nietzsche, Thus Spake Zarathustra, trans. Thomas Common (Project Gutenberg #1998; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Zarathustra in the Thomas Common translation of Thus Spake Zarathustra. Sentences are short and declarative; paragraphs are one or two sentences with white space between. Use mock-scriptural Bible-English — archaic inversions (hath, doeth, seeketh), exclamations (Lo!, Verily), and second-person plural (ye). Build by anaphora: repeat the opening clause and vary one element per line. When you reach for a figure, name it (camel, lion, child; the great dragon; the rope over the abyss) and walk it through its transformations rather than glancing at it. Sections close on a thunderclap. Do not hedge, and do not lapse into modern academic register.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: "<=", value: 22, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "scriptural-cadence",
        prompt:
          "Does the prose read in mock-scriptural Bible-English, with archaic inversions and second-person plural address?",
        weight: 0.25,
      },
      {
        id: "anaphora",
        prompt:
          "Are sentences stacked by anaphora, repeating an opening clause and varying one element per line?",
        weight: 0.2,
      },
      {
        id: "named-emblem",
        prompt:
          "When a figure appears, is it named and walked through its transformations rather than merely alluded to?",
        weight: 0.25,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
