import type { Guide } from "../types";

export const georgeSaunders: Guide = {
  slug: "george-saunders",
  author: "George Saunders",
  era: "Contemporary",
  eras: ["Contemporary"],
  kicker: "Contemporary · American satirist",
  standfirst:
    "Corporate-American doublespeak weaponized into tenderness. Deadpan satire that smuggles in radical generosity.",
  description:
    "Saunders' voice begins inside the absurd vocabulary of the modern American workplace — the branded products, the mandatory uplift, the HR euphemism — and then, mid-sentence, breaks character and becomes unbearably tender. The trick is the swerve. Useful when you want copy that lampoons a system while still loving the people stuck inside it.",
  voice_axes: ["wry", "plain"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 14, max: 40 },
    vocabulary_register:
      "plainspoken with intrusions of corporate-branded nonsense (TheraTM, FluffMan-style invented product names) and italicized inner thought",
    syntax:
      "second-person direct address; em-dashes for swerves; parenthetical asides; sentences that pivot from absurd to sincere mid-clause",
    figurative_language:
      "branded euphemism stood next to plain feeling; comic-pathetic juxtaposition; almost no metaphor — the contrast does the work",
    pacing:
      "comic register loosens the reader, then a single short sentence lands the tenderness",
  },
  do: [
    "Open in the absurd voice of the institution — manuals, memos, mandatory cheer — then break it.",
    "Use second person to put the reader inside the bind.",
    "Italicize the unguarded inner thought against the polished outer line.",
    "Let one short, plain sentence carry the feeling after the satire has done its work.",
    "Coin branded nonsense (TheraTM, FluffMan) when the system needs a name to mock.",
  ],
  dont: [
    "Do not stay only ironic — irony without tenderness is not the voice.",
    "Do not explain the joke; the swerve is the point.",
    "Do not punch down at the person trapped in the system; punch at the system.",
    "Do not over-poeticize — Saunders is plain on the sentence, strange in the world.",
  ],
  exemplars: [
    {
      label: "Tenth of December — opening register",
      content:
        "The pale boy with unfortunate Prince Valiant bangs and cublike mannerisms hulked to the mudroom closet and requisitioned Dad's white coat. Donning the coat, he was Robin, the Boy Wonder, ever ready to swing into action.",
      source: "Tenth of December (2013)",
      is_generated: false,
    },
    {
      label: "Lincoln in the Bardo — plainspoken grief",
      content:
        "His hands were tender, long, and—I could tell, somehow—had never been used for anything more strenuous than the lifting of a book or the stirring of a pot.",
      source: "Lincoln in the Bardo (2017)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of George Saunders. Open inside the absurd vocabulary of an institution — the corporate cheer, the manual, the branded product name — then swerve, mid-sentence or mid-paragraph, into something startlingly tender. Use second person where you can; address the reader directly. Em-dashes are for the swerves. Italics are for the unguarded inner thought running underneath the polished outer line. Coin branded nonsense (TheraTM, FluffMan-style names) when the system being mocked needs a label. Stay plainspoken at the sentence level — the strangeness lives in the world, not the syntax. Never punch down at the person trapped in the bind; the satire is for the system. After the comedy has loosened the reader, let one short, plain sentence carry the feeling. The voice is generosity smuggled through deadpan.\n\nDo:\n- Open in the absurd voice of the institution — manuals, memos, mandatory cheer — then break it.\n- Use second person to put the reader inside the bind.\n- Italicize the unguarded inner thought against the polished outer line.\n- Let one short, plain sentence carry the feeling after the satire has done its work.\n- Coin branded nonsense (TheraTM, FluffMan) when the system needs a name to mock.\n\nDon't:\n- Do not stay only ironic — irony without tenderness is not the voice.\n- Do not explain the joke; the swerve is the point.\n- Do not punch down at the person trapped in the system; punch at the system.\n- Do not over-poeticize — Saunders is plain on the sentence, strange in the world.\n\nExample — Tenth of December — opening register:\nThe pale boy with unfortunate Prince Valiant bangs and cublike mannerisms hulked to the mudroom closet and requisitioned Dad's white coat. Donning the coat, he was Robin, the Boy Wonder, ever ready to swing into action.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 18,
        weight: 0.1,
      },
      {
        metric: "max_sentence_length",
        op: "<=",
        value: 45,
        weight: 0.1,
      },
      {
        metric: "mono_syllable_ratio",
        op: ">=",
        value: 0.55,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "swerve",
        prompt:
          "Does the text begin in an absurd or institutional register and pivot, mid-passage, into unexpected tenderness?",
        weight: 0.25,
      },
      {
        id: "branded_nonsense",
        prompt:
          "Does the text use invented corporate-American vocabulary (branded products, HR euphemisms, mandatory cheer) as a satirical surface?",
        weight: 0.15,
      },
      {
        id: "second_person_directness",
        prompt:
          "Does the text use second-person address or otherwise place the reader directly inside the bind?",
        weight: 0.15,
      },
      {
        id: "generosity",
        prompt:
          "Does the satire ultimately treat the trapped person with care rather than contempt?",
        weight: 0.2,
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
      match: 0.85,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
