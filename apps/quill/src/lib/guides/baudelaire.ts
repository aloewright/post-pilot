import type { Guide } from "../types";

export const baudelaire: Guide = {
  slug: "baudelaire",
  author: "Charles Baudelaire",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · French verse",
  standfirst:
    "Symbolist verse in tight quatrains. Beauty held against horror; perfume and corruption rhymed in the same line.",
  description:
    "The Flowers of Evil works in regular metrical stanzas — usually quatrains, often a sonnet — where elevated diction meets squalid material. Baudelaire apostrophises: he addresses Muse, Sea, free man, mortal. Abstractions are capitalised and treated as agents (Sorrow, Despair, Beauty, Time). Synaesthesia is the signature figure: scents that sing, sounds that have colour. Useful when you want copy with ceremonial cadence — invocations, manifestos, brand poems — that is willing to name a feeling as a proper noun and bow to it.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 10, max: 22 },
    vocabulary_register:
      "elevated, archaic English of the translation — 'thou', 'thee', 'wilt', 'foraye'; latinate abstractions handled as nouns of dignity",
    syntax:
      "metrical lines in quatrains and sonnets; frequent apostrophe ('Oh Muse', 'Free man!'); inversions for rhyme; capitalised abstractions",
    figurative_language:
      "synaesthesia (scents like oboes, perfumes that sing); simile and personification of abstractions; the sea, the tomb, the cathedral as recurring images",
    pacing:
      "verse pacing — sentence-length numbers describe the line, not prose; the stanza turns at the third line and resolves at the fourth",
  },
  do: [
    "Address the reader or the subject directly — apostrophise a Muse, a sea, a city, a feeling.",
    "Capitalise the abstraction you are personifying (Sorrow, Beauty, Time) and let it act as an agent.",
    "Reach for synaesthesia: give a perfume a sound, a colour a temperature, a sound a fabric.",
    "Hold beauty and corruption in the same image — the sweet and the rotten share a line.",
  ],
  dont: [
    "Do not write loose free verse; the voice depends on metrical and stanzaic shape.",
    "Do not flatten the diction to the contemporary; the archaic register and inversion are part of the music.",
    "Do not resolve the contradiction — keep the holy and the profane unreconciled.",
    "Do not explain the symbol after stating it; let the figure stand.",
  ],
  exemplars: [
    {
      label: "Sonnet — synaesthesia in 'Echoes'",
      content:
        "In Nature's temple, living columns rise,\nWhich oftentimes give tongue to words subdued,\nAnd Man traverses this symbolic wood,\nWhich looks at him with half familiar eyes,\n\nLike lingering echoes, which afar confound\nThemselves in deep and sombre unity,\nAs vast as Night, and like transplendency,\nThe scents and colours to each other respond.\n\nAnd scents there are, like infant's flesh as chaste,\nAs sweet as oboes, and as meadows fair,\nAnd others, proud, corrupted, rich and vast,\n\nWhich have the expansion of infinity,\nLike amber, musk and frankincense and myrrh,\nThat sing the soul's and senses' ecstasy.",
      source:
        "Charles Baudelaire, The Flowers of Evil (Project Gutenberg #36098; public domain)",
      is_generated: false,
    },
    {
      label: "Apostrophe — 'Man and the Sea'",
      content:
        "Free man! the sea is to thee ever dear!\nThe sea is thy mirror, thou regardest thy soul\nIn its mighteous waves that unendingly roll,\nAnd thy spirit is yet not a chasm less drear.\n\nThou delight'st to plunge deep in thine image down;\nThou tak'st it with eyes and with arms in embrace,\nAnd at times thine own inward voice would'st efface\nWith the sound of its savage ungovernable moan.\n\nYou are both of you, sombre, secretive and deep:\nOh mortal, thy depths are foraye unexplored,\nOh sea--no one knoweth thy dazzling hoard,\nYou both are so jealous your secrets to keep!",
      source:
        "Charles Baudelaire, The Flowers of Evil (Project Gutenberg #36098; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Baudelaire as translated in The Flowers of Evil. Compose in regular stanzas — quatrains or a sonnet — with rhyme and metrical feet, not free verse. Use apostrophe: address a Muse, a sea, a free man, a mortal, an abstraction. Capitalise personified abstractions (Sorrow, Beauty, Time, Death) and treat them as agents. Reach for synaesthesia — give perfumes a sound, sounds a colour, colours a fabric. Hold sweetness and corruption in the same image; do not resolve them. Keep the diction elevated and archaic where the line calls for it ('thou', 'thee', inversions for rhyme); do not flatten to modern prose.",
  eval_rubric: {
    deterministic: [
      { metric: "abstract_per_para", op: ">=", value: 2, weight: 0.15 },
      { metric: "type_token_ratio", op: ">=", value: 0.55, weight: 0.1 },
      { metric: "max_sentence_length", op: "<=", value: 30, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "metrical-shape",
        prompt:
          "Is the text in regular stanzas (quatrain or sonnet shape) with rhyme, rather than free verse or prose?",
        weight: 0.2,
      },
      {
        id: "apostrophe",
        prompt:
          "Does the speaker address a personified abstraction, element, or interlocutor directly ('Oh Muse', 'Free man', 'Oh mortal')?",
        weight: 0.2,
      },
      {
        id: "synaesthesia",
        prompt:
          "Are senses crossed — scents given sound, sounds given colour — and is sweetness held against corruption without resolution?",
        weight: 0.25,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
