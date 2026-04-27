import type { Guide } from "../types";

export const stevenson: Guide = {
  slug: "stevenson",
  author: "Robert Louis Stevenson",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Late Victorian",
  standfirst:
    "Lawyerly precision wrapped around a moral fog. The narrator names what he sees in clean phrases, then admits exactly which part eludes him.",
  description:
    'Stevenson\'s prose in Jekyll and Hyde works by alternation: a brisk, clubbable sentence reports the surface; the next sentence concedes its own limit. He fits long descriptive periods next to short, almost colloquial reactions, and lets his lawyer-narrator hedge in legal idiom ("I had a delicacy," "I make it a rule of mine"). Useful when you want copy that sounds level-headed and observant while admitting the thing it cannot quite name.',
  voice_axes: ["wry", "plain"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 20, max: 60 },
    vocabulary_register:
      "professional London English — legal, medical, clubbable; concrete and visual but laced with formal abstractions (delicacy, propriety, deformity)",
    syntax:
      "long descriptive periods alternated with short, dry reactions; semicolons stacking parallel observations; reported speech kept tight and idiomatic",
    figurative_language:
      "muted, mostly drawn from streets, weather, and law; the unnamed thing is named by what it is *not* — an absence, a deformity without a malformation",
    pacing:
      'controlled and lawyerly; description accumulates, then snaps to a one-line confession ("There must be something else")',
  },
  do: [
    "Pair a long, accumulating description with a short, dry sentence that admits its limit.",
    'Use legal and clubbable idiom — "I make it a rule of mine," "the more it looks like Queer Street, the less I ask."',
    "Name a quality by listing what it is not, then concede the residue you cannot name.",
    "Keep weather and streets concrete; let the moral fog ride on top of clean physical detail.",
  ],
  dont: [
    "Do not let the narrator melodramatise; the horror lands when the voice stays level.",
    "Do not over-explain the unnamed thing — the gap is the point.",
    "Do not reach for poetic metaphor; Stevenson's images are domestic and urban, not lyrical.",
    "Do not write modern conversational filler; the register is Victorian-professional, even in dialogue.",
  ],
  exemplars: [
    {
      label: "Enfield's rule — clubbable wit doing the moral work",
      content:
        '"No, sir; I had a delicacy," was the reply. "I feel very strongly about putting questions; it partakes too much of the style of the day of judgment. You start a question, and it\'s like starting a stone. You sit quietly on the top of a hill; and away the stone goes, starting others; and presently some bland old bird (the last you would have thought of) is knocked on the head in his own back garden and the family have to change their name. No sir, I make it a rule of mine: the more it looks like Queer Street, the less I ask."',
      source:
        "Robert Louis Stevenson, The Strange Case of Dr. Jekyll and Mr. Hyde (Project Gutenberg #43; public domain)",
      is_generated: false,
    },
    {
      label:
        "The unnamed thing — listing what it is not, then conceding the residue",
      content:
        'Mr. Hyde was pale and dwarfish, he gave an impression of deformity without any nameable malformation, he had a displeasing smile, he had borne himself to the lawyer with a sort of murderous mixture of timidity and boldness, and he spoke with a husky, whispering and somewhat broken voice; all these were points against him, but not all of these together could explain the hitherto unknown disgust, loathing and fear with which Mr. Utterson regarded him. "There must be something else," said the perplexed gentleman. "There _is_ something more, if I could find a name for it."',
      source:
        "Robert Louis Stevenson, The Strange Case of Dr. Jekyll and Mr. Hyde (Project Gutenberg #43; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Robert Louis Stevenson as he narrates Jekyll and Hyde through Utterson and Enfield. Alternate long, lawyerly periods with short dry reactions. Build description by accumulation — pale, dwarfish, displeasing — then concede in one sentence that the listed parts do not add up to what the speaker actually feels. Use professional London idiom: legal, medical, clubbable. Keep streets, weather, and rooms concretely visible; let the moral fog sit on top of the physical detail rather than replace it. Name a quality by listing what it is not, then admit the residue. Do not melodramatise; the horror lands when the voice stays level.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 16, weight: 0.1 },
      { metric: "max_sentence_length", op: ">=", value: 40, weight: 0.1 },
      { metric: "type_token_ratio", op: ">=", value: 0.45, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "alternation",
        prompt:
          "Does the prose alternate long descriptive periods with short, dry, level-voiced sentences that concede a limit?",
        weight: 0.25,
      },
      {
        id: "named-by-negation",
        prompt:
          "Is the unsettling element named by listing what it is not, with the residue acknowledged rather than explained?",
        weight: 0.2,
      },
      {
        id: "lawyerly-register",
        prompt:
          "Does the diction sound clubbable and professional — legal, medical, London — rather than lyrical or modern?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
