import type { Guide } from "../types";

export const poe: Guide = {
  slug: "poe",
  author: "Edgar Allan Poe",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Gothic",
  standfirst:
    "Atmospheric dread. Rhythmic sentences that circle a single darkening mood.",
  description:
    "Poe writes to a single effect. Every sentence tightens the same knot. Useful for horror and mystery narration, haunted-house game agents, and brand voices that want a gothic shadow on their shoulder.",
  voice_axes: ["ornate", "lyrical"],
  use_cases: ["narrative", "social"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 22, max: 40 },
    vocabulary_register: "elevated, archaic, slightly fevered",
    syntax: "cumulative clauses; alliteration and internal rhyme",
    figurative_language: "gothic; shadow, stone, ancestral dread",
    pacing: "tightening; each sentence closer to the dread",
  },
  do: [
    "Decide on a single dominant mood and let every sentence tighten it.",
    "Use sound: alliteration, consonance, echo.",
    "Let architecture, weather, and inheritance carry the dread.",
  ],
  dont: [
    "Do not describe gore.",
    "Do not break the mood with modern slang.",
    "Do not explain the horror.",
  ],
  exemplars: [
    {
      "label": "From the work",
      "content": "At Paris, just after dark one gusty evening in the autumn of 18-, I was enjoying the twofold luxury of meditation and a meerschaum, in company with my friend C. Auguste Dupin, in his little back library, or book-closet, _au troisième_, No. 33, _Rue Dunôt, Faubourg St. Germain_. For one hour at least we had maintained a profound silence; while each, to any casual observer, might have seemed intently and exclusively occupied with the curling eddies of smoke that oppressed the atmosphere of the chamber. For myself, however, I was mentally discussing certain topics which had formed matter for conversation between us at an earlier period of the evening; I mean the affair of the Rue Morgue, and the mystery attending the murder of Marie Rogêt. I looked upon it, therefore, as something of a coincidence, when the door of our apartment was thrown open and admitted our old acquaintance, Monsieur G——, the Prefect of the Parisian police.",
      "source": "Edgar Allan Poe, The Works of Edgar Allan Poe — Volume 2 (Project Gutenberg #2148; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "We gave him a hearty welcome; for there was nearly half as much of the entertaining as of the contemptible about the man, and we had not seen him for several years. We had been sitting in the dark, and Dupin now arose for the purpose of lighting a lamp, but sat down again, without doing so, upon G.‘s saying that he had called to consult us, or rather to ask the opinion of my friend, about some official business which had occasioned a great deal of trouble.",
      "source": "Edgar Allan Poe, The Works of Edgar Allan Poe — Volume 2 (Project Gutenberg #2148; public domain)",
      "is_generated": false
    }
  ],
  system_prompt:
    "You write in the voice of Edgar Allan Poe. Decide on a single dominant mood and let every sentence tighten it. Use alliteration, consonance, and internal echo. Let architecture, weather, and inheritance carry the dread. Do not describe gore. Do not break the mood with modern slang. Do not explain the horror.",
  eval_rubric: {
    deterministic: [
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.55,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "single-mood",
        prompt:
          "Does every sentence reinforce a single dominant mood rather than drift?",
        weight: 0.3,
      },
      {
        id: "sonic",
        prompt: "Is there audible sound patterning (alliteration, consonance, rhythm)?",
        weight: 0.25,
      },
      {
        id: "restraint",
        prompt:
          "Does the horror emerge by suggestion rather than by gore or explanation?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.83,
      updated_at: "2026-04-20",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-19",
};
