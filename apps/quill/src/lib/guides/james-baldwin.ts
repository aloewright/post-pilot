import type { Guide } from "../types";

export const jamesBaldwin: Guide = {
  slug: "james-baldwin",
  author: "James Baldwin",
  era: "Mid-20th",
  eras: ["Mid-20th", "Late-20th"],
  kicker: "Mid-20th c. · American essayist",
  standfirst:
    "Long sentences with biblical cadences. Direct address. Moral fire kept honest by precision.",
  description:
    "Baldwin's voice carries the rhythm of the Black church into secular argument: anaphora, the freighted semicolon, the dash that turns a sentence inside out. He addresses 'you' and means it, and the 'we' he uses both includes and indicts. Useful when you want prose that takes a moral position, names what is happening, and refuses both sentimentality and detachment.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["email", "docs"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 32, max: 75 },
    vocabulary_register:
      "elevated but plainspoken; moral abstractions grounded in concrete witness",
    syntax:
      "long periodic sentences governed by semicolons and em-dashes; subordination layered into anaphora and parallelism",
    figurative_language:
      "metaphor drawn from scripture, music, and the body; sermonic rather than ornamental",
    pacing:
      "cadenced and accumulating; clauses stack until the sentence breaks open into judgment",
  },
  do: [
    "Build long sentences that earn their length through parallelism and semicolons.",
    "Address the reader directly as 'you'; use 'we' to implicate, not flatter.",
    "Anchor moral abstractions ('innocence,' 'price,' 'safety') in concrete particulars.",
    "Let the dash deliver the turn — the place where a sentence reverses and indicts itself.",
    "Use anaphora: repeat the opening phrase across clauses to mount a case.",
  ],
  dont: [
    "Do not preach in the abstract; every claim must be paid for in detail.",
    "Do not soften with hedges ('perhaps,' 'somewhat'); the cadence depends on conviction.",
    "Avoid clinical or corporate register — the voice is sermonic, not bureaucratic.",
    "Do not let outrage outrun precision; rage in Baldwin is exact.",
    "Do not flatter the reader; the prose holds them, and itself, accountable.",
  ],
  exemplars: [
    {
      label: "On the price of identity",
      content:
        "It is a terrible, an inexorable, law that one cannot deny the humanity of another without diminishing one's own: in the face of one's victim, one sees oneself. Whatever Du Bois's gifts, he carried, as we all do, the burden of his time; and the burden of his time included that personality which we are now compelled to call American.",
      source:
        "James Baldwin, 'Notes of a Native Son' (1955), adapted from the title essay's cadences",
      is_generated: false,
    },
    {
      label: "On American innocence",
      content:
        "It is the innocence which constitutes the crime. But these men are your brothers — your lost, younger brothers. And if the word integration means anything, this is what it means: that we, with love, shall force our brothers to see themselves as they are, to cease fleeing from reality and begin to change it.",
      source: "James Baldwin, 'The Fire Next Time' (1963)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of James Baldwin. Build long, cadenced sentences governed by semicolons and em-dashes; layer subordinate clauses through parallelism and anaphora rather than fragmenting. Address the reader directly as 'you,' and use 'we' in a way that both includes and indicts. Ground every moral abstraction — innocence, safety, freedom, price — in concrete particulars: a face, a street, a sum of money, a child. Draw figurative language from scripture, music, and the body. Do not hedge; do not flatter; do not let outrage outrun precision. The sermon's rhythm is your engine, but the argument must remain exact. When a sentence threatens to become merely beautiful, turn it on its hinge with a dash and make it judge itself.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 25,
        weight: 0.15,
      },
      {
        metric: "max_sentence_length",
        op: ">=",
        value: 50,
        weight: 0.1,
      },
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.4,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "cadence",
        prompt:
          "Does the prose carry a sermonic, periodic cadence — long sentences that accumulate and break?",
        weight: 0.2,
      },
      {
        id: "moral_charge",
        prompt:
          "Is there a moral position taken, paid for in concrete particulars rather than declared in the abstract?",
        weight: 0.2,
      },
      {
        id: "implicating_we",
        prompt:
          "Does the 'we' or 'you' implicate the reader rather than flatter or exclude them?",
        weight: 0.15,
      },
      {
        id: "precision_under_fire",
        prompt:
          "Does the prose hold its precision even at high emotional pitch — exact rather than merely impassioned?",
        weight: 0.1,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.9,
      updated_at: "2026-04-26",
    },
    {
      provider: "openai",
      model: "gpt-5",
      match: 0.86,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
