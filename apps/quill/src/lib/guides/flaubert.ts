import type { Guide } from "../types";

export const flaubert: Guide = {
  slug: "flaubert",
  author: "Gustave Flaubert",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · French Realism",
  standfirst:
    "Cataloguing eyes and a flat, exact verb. Free indirect drift into a character's daydream, then a hard cut back to a hen, a flagstone, a fly.",
  description:
    'Flaubert (in the standard public-domain English of the Eleanor Marx-Aveling translation) writes prose that catalogues physical things with surgical precision and refuses to comment on them. Sentences move from object to object — the wood, the chimney, the cinders — and judgments slip in only as similes ("like a mill-horse", "as dry as a bone"). The narrator drifts into a character\'s reverie via free indirect speech, then breaks the spell with a banal external detail. Useful when you want copy that sees clearly, refuses sentiment, and lets the irony emerge from juxtaposition.',
  voice_axes: ["plain", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 22, max: 60 },
    vocabulary_register:
      "concrete and inventoried; abstract nouns appear only inside a character's reverie (felicity, passion, rapture)",
    syntax:
      "long sentences built from parallel clauses separated by commas and semicolons; participial phrases stacked; the verb stays simple",
    figurative_language:
      "similes pulled from trade and animal life (mill-horse, scabbard, knives); rare metaphor; no flourish",
    pacing:
      "panning camera — moves item by item across a scene, then cuts hard to a small physical fact",
  },
  do: [
    "Catalogue the scene before naming any feeling — name the chimney, the pots, the dust before naming the mood.",
    "Use simile drawn from trade or anatomy, not from nature or sentiment.",
    "Slip into a character's daydream with their abstract vocabulary, then cut back with a concrete object.",
    "Let parallel clauses pile up inside one sentence; resist breaking them up.",
  ],
  dont: [
    "Do not editorialise on what a character feels; show the object, the gesture, the symptom.",
    "Do not reach for romantic abstractions in the narrator's own voice — give them only to the dreaming character.",
    "Do not soften ugly details (the manure liquid, the pimples, the dust); the precision is the ethics.",
    "Do not end on a flourish; end on a small fact.",
  ],
  exemplars: [
    {
      label: "Inventoried scene — narrator panning across a farmyard",
      content:
        "It was a substantial-looking farm. In the stables, over the top of the open doors, one could see great cart-horses quietly feeding from new racks. Right along the outbuildings extended a large dunghill, from which manure liquid oozed, while amidst fowls and turkeys, five or six peacocks, a luxury in Chauchois farmyards, were foraging on the top of it. The sheepfold was long, the barn high, with walls smooth as your hand.",
      source:
        "Gustave Flaubert, Madame Bovary (Project Gutenberg #2413; public domain)",
      is_generated: false,
    },
    {
      label: "Free indirect daydream cut by a concrete sentence",
      content:
        "Before marriage she thought herself in love; but the happiness that should have followed this love not having come, she must, she thought, have been mistaken. And Emma tried to find out what one meant exactly in life by the words felicity, passion, rapture, that had seemed to her so beautiful in books.",
      source:
        "Gustave Flaubert, Madame Bovary (Project Gutenberg #2413; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Flaubert as rendered in the public-domain English translation of Madame Bovary. Catalogue the physical scene before any feeling is named — list the objects, the postures, the small inconvenient facts — and let irony emerge from the juxtaposition rather than from comment. Build long sentences from parallel clauses separated by commas and semicolons; keep the verbs ordinary. When you enter a character's reverie, borrow their abstract vocabulary (felicity, passion, rapture) but cut back, in the next sentence, to a concrete object. Use simile sparingly and pull it from trade and anatomy, never from sentiment. Do not soften ugly details. Do not end on a flourish.\n\nDo:\n- Catalogue the scene before naming any feeling — name the chimney, the pots, the dust before naming the mood.\n- Use simile drawn from trade or anatomy, not from nature or sentiment.\n- Slip into a character's daydream with their abstract vocabulary, then cut back with a concrete object.\n- Let parallel clauses pile up inside one sentence; resist breaking them up.\n\nDon't:\n- Do not editorialise on what a character feels; show the object, the gesture, the symptom.\n- Do not reach for romantic abstractions in the narrator's own voice — give them only to the dreaming character.\n- Do not soften ugly details (the manure liquid, the pimples, the dust); the precision is the ethics.\n- Do not end on a flourish; end on a small fact.\n\nExample — Inventoried scene — narrator panning across a farmyard:\nIt was a substantial-looking farm. In the stables, over the top of the open doors, one could see great cart-horses quietly feeding from new racks. Right along the outbuildings extended a large dunghill, from which manure liquid oozed, while amidst fowls and turkeys, five or six peacocks, a luxury in Chauchois farmyards, were foraging on the top of it. The sheepfold was long, the barn high, with walls smooth as your hand.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 18, weight: 0.15 },
      { metric: "abstract_per_para", op: "<=", value: 2, weight: 0.15 },
      { metric: "adverbs_per_200w", op: "<=", value: 4, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "object-precedence",
        prompt:
          "Are physical objects and gestures named before any emotion is named?",
        weight: 0.2,
      },
      {
        id: "free-indirect-cut",
        prompt:
          "When the prose enters a character's reverie, does it cut back to a concrete external detail?",
        weight: 0.2,
      },
      {
        id: "withheld-comment",
        prompt:
          "Does the narrator refrain from editorialising — letting irony arise from juxtaposition rather than judgment?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
