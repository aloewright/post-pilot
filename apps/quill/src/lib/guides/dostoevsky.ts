import type { Guide } from "../types";

export const dostoevsky: Guide = {
  slug: "dostoevsky",
  author: "Fyodor Dostoevsky",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Russian novel",
  standfirst:
    "Feverish interior monologue stitched into close third-person narration. Italics, ellipses and broken-off thoughts; squalor in concrete detail.",
  description:
    "Dostoevsky's narrator stays at the elbow of a single overheated consciousness, sliding without warning from outside description into the character's own muttering. Sentences are crowded — multiple commas, accumulating clauses — and break off into ellipsis or italics whenever the thought refuses to finish. The world is named in close, ugly particulars (a worn-out hat from Zimmerman's, a sticky table, fingernails, stairwell smells); the inner life arrives as exclamation, self-interruption and rhetorical question. Useful when you want copy with psychological pressure — a voice arguing with itself in public.",
  voice_axes: ["wry", "ornate"],
  use_cases: ["narrative", "email", "social"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 26, max: 70 },
    vocabulary_register:
      "concrete and slightly squalid (tenements, rags, beer, sticky tables); plain Anglo-Saxon for the world, abstract Russian-novel nouns for the inner life ('confusion', 'wretchedness', 'repulsion')",
    syntax:
      "close third person sliding into first-person muttering; long sentences thick with commas and parentheticals; ellipsis ('....') as a syntactic move; italics for stressed words; rhetorical questions and self-interruption",
    figurative_language:
      "minimal metaphor; impact comes from accumulation of physical detail and repeated abstract nouns ('loathsome, loathsome!')",
    pacing:
      "feverish, lurching; passages of patient external description give way without warning to a torrent of inner speech, then return",
  },
  do: [
    "Slide between close description of the world and the character's first-person muttering, often inside the same paragraph.",
    "Use ellipses and italics to mark the moment a thought breaks off or insists on a word.",
    "Pile concrete physical detail — clothing, smells, furniture — around the inner crisis.",
    "Let a character argue with himself in rhetorical questions and exclamations.",
  ],
  dont: [
    "Do not smooth the syntax; the comma-thick, lurching sentence is the voice.",
    "Do not name the emotion cleanly when the character would name it ten different ways and contradict himself.",
    "Do not strip the squalor — torn hats, sticky tables, black fingernails are the texture of the world.",
    "Do not stay outside the character; the narrator's distance is small and slippery.",
  ],
  exemplars: [
    {
      label: "Interior monologue breaking through close narration",
      content:
        "“I knew it,” he muttered in confusion, “I thought so! That’s the worst of all! Why, a stupid thing like this, the most trivial detail might spoil the whole plan. Yes, my hat is too noticeable.... It looks absurd and that makes it noticeable.... With my rags I ought to wear a cap, any sort of old pancake, but not this grotesque thing. Nobody wears such a hat, it would be noticed a mile off, it would be remembered.... What matters is that people would remember it, and that would give them a clue. For this business one should be as little conspicuous as possible.... Trifles, trifles are what matter! Why, it’s just such trifles that always ruin everything....”",
      source:
        "Fyodor Dostoevsky, Crime and Punishment (Project Gutenberg #2554; public domain)",
      is_generated: false,
    },
    {
      label: "Squalor catalogued with the close-third narrator",
      content:
        "He was wearing an old and hopelessly ragged black dress coat, with all its buttons missing except one, and that one he had buttoned, evidently clinging to this last trace of respectability. A crumpled shirt front, covered with spots and stains, protruded from his canvas waistcoat. Like a clerk, he wore no beard, nor moustache, but had been so long unshaven that his chin looked like a stiff greyish brush.",
      source:
        "Fyodor Dostoevsky, Crime and Punishment (Project Gutenberg #2554; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of the narrator of Crime and Punishment. Stay close to a single overheated consciousness and let close third-person description slide, mid-paragraph, into that character's first-person muttering. Build long sentences out of commas and parentheticals; break thoughts off with ellipses; italicise the word the speaker cannot let pass. Catalogue the world in close, slightly squalid physical detail — clothing, smells, furniture, money — and let the inner crisis press through that detail rather than naming itself. Let the character argue with himself in rhetorical questions and repeat the same abstract noun until it bruises. Do not tidy the syntax.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 20, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 45, weight: 0.15 },
      { metric: "abstract_per_para", op: ">=", value: 2, weight: 0.15 },
    ],
    judge_criteria: [
      {
        id: "interior-bleed",
        prompt:
          "Does the narration slide between close third-person description and the character's first-person muttering, mid-paragraph, without smoothing the seam?",
        weight: 0.2,
      },
      {
        id: "broken-syntax",
        prompt:
          "Are ellipses, italics and rhetorical questions used to mark thoughts breaking off, insisting, and arguing with themselves?",
        weight: 0.15,
      },
      {
        id: "squalid-particulars",
        prompt:
          "Is the world rendered in close, slightly squalid physical detail — clothing, smells, furniture, money — pressing against the inner crisis?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
