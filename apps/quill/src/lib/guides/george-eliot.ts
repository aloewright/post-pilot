import type { Guide } from "../types";

export const georgeEliot: Guide = {
  slug: "george-eliot",
  author: "George Eliot",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Victorian",
  standfirst:
    "An essayistic narrator who steps in to argue with the reader, anatomises a character's self-deception, and lands a moral by metaphor.",
  description:
    'Eliot\'s narrator is a thinker, not a recorder. The voice opens out from the scene into general reflection — "all people, young or old", "who can tell what just criticisms Murr the Cat may be passing" — and uses long, balanced sentences to anatomise why a character believes what they believe. Judgments are merciful but exact, and they arrive in metaphor ("a thick summer haze", "a labyrinth of petty courses", "the bark of a dog"). Useful when you want analytical prose that pauses to think on the page, treats characters\' self-deceptions seriously, and isn\'t embarrassed to generalise.',
  voice_axes: ["ornate", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 30, max: 90 },
    vocabulary_register:
      "essayistic and discursive; comfortable with abstractions (asceticism, indefiniteness, soul-hunger) treated as objects of analysis",
    syntax:
      "long periodic sentences with paired and tripled clauses; em-dashes and parentheticals that step aside to qualify; an essayist's 'but' and 'and' opening sentences",
    figurative_language:
      'extended metaphor used as analysis ("a labyrinth of petty courses", "a thick summer haze"); ironic similes that puncture ("as sincere as the bark of a dog")',
    pacing:
      "discursive — the narrator slows, generalises, then returns to the particular character with a sharpened verdict",
  },
  do: [
    "Step out of the scene into a general reflection, then come back to the particular case with a sharper verdict.",
    "Anatomise a character's reasoning so the reader sees both what they believe and why.",
    "Let metaphors do analytical work — the image is the argument.",
    "Use parentheticals and em-dashes to qualify; the qualification is often the truth.",
  ],
  dont: [
    "Do not pretend the narrator is invisible; this voice has opinions and shows them.",
    "Do not condemn a character without first showing the inner logic that makes them sympathetic.",
    "Do not strip out abstractions — they are the matter under examination, not filler to cut.",
    "Do not deliver the moral as a slogan; deliver it inside a metaphor.",
  ],
  exemplars: [
    {
      label: "Narrator anatomising a character's mind through metaphor",
      content:
        "For a long while she had been oppressed by the indefiniteness which hung in her mind, like a thick summer haze, over all her desire to make her life greatly effective. What could she do, what ought she to do?—she, hardly more than a budding woman, but yet with an active conscience and a great mental need, not to be satisfied by a girlish instruction comparable to the nibblings and judgments of a discursive mouse.",
      source:
        "George Eliot, Middlemarch (Project Gutenberg #145; public domain)",
      is_generated: false,
    },
    {
      label: "Ironic verdict folded into a long balanced sentence",
      content:
        "No speech could have been more thoroughly honest in its intention: the frigid rhetoric at the end was as sincere as the bark of a dog, or the cawing of an amorous rook. Would it not be rash to conclude that there was no passion behind those sonnets to Delia which strike us as the thin music of a mandolin?",
      source:
        "George Eliot, Middlemarch (Project Gutenberg #145; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of George Eliot's narrator in Middlemarch. Build long, balanced sentences with paired or tripled clauses, and use em-dashes and parentheticals to step aside and qualify. Treat the reader as an intelligent companion: open out from the particular case into a general reflection, then return with a sharpened verdict. Anatomise a character's reasoning so the inner logic is visible before any judgment is delivered. Trust abstractions — name them, examine them — and let extended metaphor carry the analysis (a haze, a labyrinth, the bark of a dog). Be merciful and exact at once. Do not deliver morals as slogans; deliver them inside an image.\n\nDo:\n- Step out of the scene into a general reflection, then come back to the particular case with a sharper verdict.\n- Anatomise a character's reasoning so the reader sees both what they believe and why.\n- Let metaphors do analytical work — the image is the argument.\n- Use parentheticals and em-dashes to qualify; the qualification is often the truth.\n\nDon't:\n- Do not pretend the narrator is invisible; this voice has opinions and shows them.\n- Do not condemn a character without first showing the inner logic that makes them sympathetic.\n- Do not strip out abstractions — they are the matter under examination, not filler to cut.\n- Do not deliver the moral as a slogan; deliver it inside a metaphor.\n\nExample — Narrator anatomising a character's mind through metaphor:\nFor a long while she had been oppressed by the indefiniteness which hung in her mind, like a thick summer haze, over all her desire to make her life greatly effective. What could she do, what ought she to do?—she, hardly more than a budding woman, but yet with an active conscience and a great mental need, not to be satisfied by a girlish instruction comparable to the nibblings and judgments of a discursive mouse.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 22, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 50, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 2, weight: 0.15 },
    ],
    judge_criteria: [
      {
        id: "essayistic-step-out",
        prompt:
          "Does the narrator pause the scene to generalise, then return to the particular case with a sharper verdict?",
        weight: 0.2,
      },
      {
        id: "anatomy-of-mind",
        prompt:
          "Is a character's reasoning shown from the inside before being judged?",
        weight: 0.2,
      },
      {
        id: "metaphor-as-argument",
        prompt:
          "Does an extended metaphor carry the analytical weight rather than a flat statement?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
