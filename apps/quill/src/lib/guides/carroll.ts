import type { Guide } from "../types";

export const carroll: Guide = {
  slug: "carroll",
  author: "Lewis Carroll",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Victorian nonsense",
  standfirst:
    "A child's logic worked through to the end. Italics for emphasis, parentheses for asides, and a narrator who keeps a straight face while everything tilts.",
  description:
    "Carroll narrates a curious child reasoning out loud and trusts the reader to enjoy the seams. Sentences run on by 'and' rather than by subordination; the parenthesis is a working tool, not an ornament. Italics carry a child's stress; capitalised single words (Multiplication Table, Antipathies) borrow grown-up authority and immediately deflate. The voice is polite, conversational, and never breaks the joke by laughing at it. Useful when you want copy that is playful without being arch — onboarding flows, explainers, microcopy that lets the reader feel clever.",
  voice_axes: ["wry", "plain"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 18, max: 60 },
    vocabulary_register:
      "polite Victorian nursery English; everyday words mostly, with occasional showy vocabulary the child has half-overheard",
    syntax:
      "long sentences strung with 'and' and semicolons; frequent parenthetical asides; em-dashes; quoted self-talk",
    figurative_language:
      "literalised idiom and sustained nonsense premise (a child shutting up like a telescope); little metaphor for its own sake",
    pacing:
      "conversational — the sentence follows a thought as it unfolds, with a small comic pivot near the end",
  },
  do: [
    "Run sentences on with 'and' and semicolons rather than subordinating; let one thought lead to the next.",
    "Use parentheses to insert the narrator's quiet aside, and italics for the word the speaker leans on.",
    "Quote the character thinking out loud — let them argue with themselves and pose questions they cannot answer.",
    "Take a literal premise and follow its logic through to a polite absurd conclusion.",
  ],
  dont: [
    "Do not nudge the reader by laughing at the joke; the narrator stays straight-faced.",
    "Do not over-decorate with metaphor; the comedy is in the reasoning, not the image.",
    "Do not collapse a long thought into a summary — the child works through it step by step.",
    "Do not break the polite register; even alarm is voiced courteously.",
  ],
  exemplars: [
    {
      label: "Curious child reasoning out loud",
      content:
        "“Curiouser and curiouser!” cried Alice (she was so much surprised, that for the moment she quite forgot how to speak good English); “now I’m opening out like the largest telescope that ever was! Good-bye, feet!” (for when she looked down at her feet, they seemed to be almost out of sight, they were getting so far off). “Oh, my poor little feet, I wonder who will put on your shoes and stockings for you now, dears? I’m sure _I_ shan’t be able! I shall be a great deal too far off to trouble myself about you: you must manage the best way you can;—but I must be kind to them,” thought Alice, “or perhaps they won’t walk the way I want to go! Let me see: I’ll give them a new pair of boots every Christmas.”",
      source:
        "Lewis Carroll, Alice's Adventures in Wonderland (Project Gutenberg #11; public domain)",
      is_generated: false,
    },
    {
      label: "Narrator's parenthetical and the cautious reader",
      content:
        "It was all very well to say “Drink me,” but the wise little Alice was not going to do _that_ in a hurry. “No, I’ll look first,” she said, “and see whether it’s marked ‘_poison_’ or not”; for she had read several nice little histories about children who had got burnt, and eaten up by wild beasts and other unpleasant things, all because they _would_ not remember the simple rules their friends had taught them: such as, that a red-hot poker will burn you if you hold it too long; and that if you cut your finger _very_ deeply with a knife, it usually bleeds; and she had never forgotten that, if you drink much from a bottle marked “poison,” it is almost certain to disagree with you, sooner or later.",
      source:
        "Lewis Carroll, Alice's Adventures in Wonderland (Project Gutenberg #11; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of the narrator and protagonist of Alice's Adventures in Wonderland. String sentences together with 'and' and semicolons rather than subordination; let a thought walk forward step by step. Use parentheses for the narrator's aside and italics for the word the speaker leans on. Quote a character thinking out loud, posing themselves questions and answering them politely. Take a literal premise and follow its logic to a courteous absurd conclusion. Keep a straight face; never nudge the reader. Borrow grown-up vocabulary the speaker has half-overheard, and let the seams show without comment.\n\nDo:\n- Run sentences on with 'and' and semicolons rather than subordinating; let one thought lead to the next.\n- Use parentheses to insert the narrator's quiet aside, and italics for the word the speaker leans on.\n- Quote the character thinking out loud — let them argue with themselves and pose questions they cannot answer.\n- Take a literal premise and follow its logic through to a polite absurd conclusion.\n\nDon't:\n- Do not nudge the reader by laughing at the joke; the narrator stays straight-faced.\n- Do not over-decorate with metaphor; the comedy is in the reasoning, not the image.\n- Do not collapse a long thought into a summary — the child works through it step by step.\n- Do not break the polite register; even alarm is voiced courteously.\n\nExample — Curious child reasoning out loud:\n“Curiouser and curiouser!” cried Alice (she was so much surprised, that for the moment she quite forgot how to speak good English); “now I’m opening out like the largest telescope that ever was! Good-bye, feet!” (for when she looked down at her feet, they seemed to be almost out of sight, they were getting so far off). “Oh, my poor little feet, I wonder who will put on your shoes and stockings for you now, dears? I’m sure _I_ shan’t be able! I shall be a great deal too far off to trouble myself about you: you must manage the best way you can;—but I must be kind to them,” thought Alice, “or perhaps they won’t walk the way I want to go! Let me see: I’ll give them a new pair of boots every Christmas.”",
  eval_rubric: {
    deterministic: [
      { metric: "adverbs_per_200w", op: "<=", value: 6, weight: 0.1 },
      { metric: "max_sentence_length", op: ">=", value: 30, weight: 0.1 },
      { metric: "mono_syllable_ratio", op: ">=", value: 0.55, weight: 0.15 },
    ],
    judge_criteria: [
      {
        id: "child-logic",
        prompt:
          "Does a literal premise get followed step by step to a polite absurd conclusion, with the narrator keeping a straight face?",
        weight: 0.25,
      },
      {
        id: "parentheticals-italics",
        prompt:
          "Does the text use parenthetical asides and italics for emphasis the way Carroll's narrator does?",
        weight: 0.2,
      },
      {
        id: "self-talk",
        prompt:
          "Does a character think aloud — posing themselves questions, arguing with themselves — within a polite, conversational register?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
