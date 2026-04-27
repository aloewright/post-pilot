import type { Guide } from "../types";

export const douglass: Guide = {
  slug: "douglass",
  author: "Frederick Douglass",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Abolitionist Memoir",
  standfirst:
    "First-person testimony in plain, deliberate sentences. The facts are placed; the reader is left to feel them.",
  description:
    "Douglass writes as a witness who has been doubted before. He states the date, the place, the name, the act — short declaratives interleaved with longer reasoning sentences that carry moral argument without raising the voice. Useful when you want copy that earns trust through specificity, makes a moral case by stacking facts, and refuses to let the reader look away.",
  voice_axes: ["plain", "lyrical"],
  use_cases: ["email", "docs"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 22, max: 60 },
    vocabulary_register:
      "formal nineteenth-century English; biblical cadence available when the moment asks for it; concrete nouns where possible",
    syntax:
      'alternation between short declarative statements ("My father was a white man.") and long periodic sentences that build a careful argument',
    figurative_language:
      "sparing — the figures, when they come, are biblical or judicial (the gate, the scale, the witness)",
    pacing:
      "deliberate; facts placed one after another; the moral sentence arrives only after the facts have done their work",
  },
  do: [
    "State the date, place, and name. Specificity is the credential.",
    "Alternate short declaratives with longer reasoning sentences — a flat fact, then the argument it forces.",
    "Let the moral sentence arrive last, after the facts have been laid out.",
    "Use anaphora and parallelism for emphasis when the argument crests.",
  ],
  dont: [
    "Do not editorialize ahead of the evidence. The reader should feel the verdict before you name it.",
    'Do not soften with hedges — "I was not allowed," "I do not remember," "I never saw" are stronger than any qualifier.',
    "Do not reach for ornamental metaphor; the literal is heavier than the figurative here.",
    "Do not raise your voice — the rhetorical force comes from the calm of the witness.",
  ],
  exemplars: [
    {
      label: "Opening — facts of birth and parentage",
      content:
        "I was born in Tuckahoe, near Hillsborough, and about twelve miles from Easton, in Talbot county, Maryland. I have no accurate knowledge of my age, never having seen any authentic record containing it. By far the larger part of the slaves know as little of their ages as horses know of theirs, and it is the wish of most masters within my knowledge to keep their slaves thus ignorant. I do not remember to have ever met a slave who could tell of his birthday. They seldom come nearer to it than planting-time, harvest-time, cherry-time, spring-time, or fall-time.",
      source:
        "Frederick Douglass, Narrative of the Life of Frederick Douglass (Project Gutenberg #23; public domain)",
      is_generated: false,
    },
    {
      label: "Moral reasoning — separation of mother and child",
      content:
        "It is a common custom, in the part of Maryland from which I ran away, to part children from their mothers at a very early age. Frequently, before the child has reached its twelfth month, its mother is taken from it, and hired out on some farm a considerable distance off, and the child is placed under the care of an old woman, too old for field labor. For what this separation is done, I do not know, unless it be to hinder the development of the child’s affection toward its mother, and to blunt and destroy the natural affection of the mother for the child. This is the inevitable result.",
      source:
        "Frederick Douglass, Narrative of the Life of Frederick Douglass (Project Gutenberg #23; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    'You write in the voice of Frederick Douglass as he tells his own story. Place facts first — names, places, dates, ages, distances. Alternate short declarative sentences with longer, carefully periodic ones that reason from those facts. Where you must offer a verdict, let it arrive at the close, after the evidence has done its work. Use anaphora when the argument crests ("I never saw… I do not remember… I was not allowed"); otherwise keep the voice deliberate and level. Do not editorialize ahead of the evidence and do not soften with hedges. Trust specificity to carry moral weight, and trust the reader to feel what you have refused to shout.',
  eval_rubric: {
    deterministic: [
      { metric: "abstract_per_para", op: "<=", value: 2, weight: 0.15 },
      { metric: "avg_sentence_length", op: ">=", value: 16, weight: 0.1 },
      { metric: "adverbs_per_200w", op: "<=", value: 4, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "specificity",
        prompt:
          "Does the prose lead with concrete facts — names, places, dates, distances — and earn its argument from them?",
        weight: 0.25,
      },
      {
        id: "alternation",
        prompt:
          "Does it alternate short flat declaratives with longer, periodic reasoning sentences?",
        weight: 0.2,
      },
      {
        id: "restraint",
        prompt:
          "Is the moral verdict held back until the evidence has been placed, and delivered without raising the voice?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.85,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
