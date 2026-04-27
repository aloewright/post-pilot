import type { Guide } from "../types";

export const aliceWalker: Guide = {
  slug: "alice-walker",
  author: "Alice Walker",
  era: "Late-20th",
  eras: ["Late-20th", "Contemporary"],
  kicker: "Late 20th c. · American novelist & poet",
  standfirst:
    "Letters to God in undefended Black English. Womanist clarity, intimate as a held hand.",
  description:
    "Walker writes in the first person of someone who has not been given the page before, and she keeps the language they actually use. The Color Purple's Celie writes letters to God in Black Southern English — colloquial, present-tense, unvarnished — and the form is the politics. Walker's lines are short, the diction Anglo-Saxon, the address direct. Useful when you want intimate first-person prose that respects the speaker's tongue and refuses literary correction.",
  voice_axes: ["plain", "lyrical"],
  use_cases: ["fiction", "newsletter"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 11, max: 24 },
    vocabulary_register:
      "Anglo-Saxon, conversational, Black Southern English on the page without translation",
    syntax:
      "short declarative units, often comma-spliced; epistolary present tense; second-person address",
    figurative_language:
      "domestic and bodily images — kitchen, garden, hands, hair — used plainly; metaphor that does not announce itself",
    pacing:
      "intimate and forward-leaning; one thought per line, one line at a time, like a letter being written by hand",
  },
  do: [
    "Write in first person, present tense, addressing someone directly.",
    "Keep the speaker's language as it is — colloquial, vernacular, uncorrected.",
    "Use short Anglo-Saxon lines and let comma splices stand when the rhythm calls for them.",
    "Let domestic detail (a kitchen table, a hairbrush, a garden row) carry feeling without metaphor.",
    "Trust the reader to follow the speaker; do not interpret for them.",
  ],
  dont: [
    "Do not standardize the speaker's grammar into literary English.",
    "Do not narrate from above the speaker — the page is theirs.",
    "Do not soften the body; sex, work, and pain are named plainly.",
    "Do not load the line with abstraction; the abstraction is in what is being lived.",
  ],
  exemplars: [
    {
      label: "Opening letter — The Color Purple",
      content:
        "Dear God, I am fourteen years old. I am I have always been a good girl. Maybe you can give me a sign letting me know what is happening to me.",
      source: "The Color Purple (1982)",
      is_generated: false,
    },
    {
      label: "On Shug — The Color Purple",
      content:
        "She got a flower in her hair. She got a long black gown. She look like she yawn all over. But I'm so glad to see her I could die.",
      source: "The Color Purple (1982)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Alice Walker. Speak in the first person, present tense, often as a letter or direct address. Keep the speaker's language as it is — colloquial, Black Southern English, unsmoothed. Use short Anglo-Saxon lines and let comma splices stand when rhythm calls for them. Carry feeling through domestic and bodily detail — a kitchen table, a hairbrush, a garden row, a pair of hands — without explaining the metaphor. Name body, sex, work, and pain plainly. Do not standardize the speaker's grammar, do not narrate from above them, and do not interpret for the reader; the page belongs to the speaker.\n\nDo:\n- Write in first person, present tense, addressing someone directly.\n- Keep the speaker's language as it is — colloquial, vernacular, uncorrected.\n- Use short Anglo-Saxon lines and let comma splices stand when the rhythm calls for them.\n- Let domestic detail (a kitchen table, a hairbrush, a garden row) carry feeling without metaphor.\n- Trust the reader to follow the speaker; do not interpret for them.\n\nDon't:\n- Do not standardize the speaker's grammar into literary English.\n- Do not narrate from above the speaker — the page is theirs.\n- Do not soften the body; sex, work, and pain are named plainly.\n- Do not load the line with abstraction; the abstraction is in what is being lived.\n\nExample — Opening letter — The Color Purple:\nDear God, I am fourteen years old. I am I have always been a good girl. Maybe you can give me a sign letting me know what is happening to me.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 13,
        weight: 0.15,
      },
      {
        metric: "mono_syllable_ratio",
        op: ">=",
        value: 0.6,
        weight: 0.15,
      },
    ],
    judge_criteria: [
      {
        id: "first-person-present",
        prompt:
          "Is the passage in first person, present tense, often as direct address (epistolary)?",
        weight: 0.25,
      },
      {
        id: "vernacular-uncorrected",
        prompt:
          "Is the speaker's vernacular preserved without literary correction or apology?",
        weight: 0.2,
      },
      {
        id: "domestic-image",
        prompt:
          "Does feeling come through domestic or bodily detail, used plainly, without metaphor announcing itself?",
        weight: 0.15,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.86,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
