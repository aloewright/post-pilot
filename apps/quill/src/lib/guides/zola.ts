import type { Guide } from "../types";

export const zola: Guide = {
  slug: "zola",
  author: "Émile Zola",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · French Naturalism",
  standfirst:
    "The pit and the body inventoried in the same level voice. Machinery is rendered as anatomy; bodies are rendered as parts.",
  description:
    "Zola narrates the coal pit as if it were a working organism: cables, cages, lungs, and ledgers gathered into a single grammatical sweep, with semicolons doing the joining and the verdict held back to the close. Industry and flesh are described in the same register — the shaft swallows men, a miner's chest stores coal, a household ledger lists francs alongside coughs. Useful when you want copy that surveys a process or a crowded scene without sentimentalising it; the pity, where it appears, sits inside the inventory rather than on top of it.",
  voice_axes: ["ornate", "plain"],
  use_cases: ["narrative", "marketing", "docs"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 22, max: 60 },
    vocabulary_register:
      "concrete, often industrial or clinical; specific units and counts ('five hundred and fifty-four metres', 'thirty sous a day', 'seven children'); abstractions admitted only as the closing word of a clause",
    syntax:
      "long sentences hinged on semicolons and 'while'; participial and relative clauses tacked onto a single main clause; counts and names accumulated in series",
    figurative_language:
      "the figure is the catalogue itself — when metaphor appears it is anatomical (the shaft 'swallows', the pit has 'giant intestines', the engine 'breathes')",
    pacing:
      "unhurried, accumulative; the sentence keeps gathering bodies, machines, and numbers until the inventory is complete, then closes flatly",
  },
  do: [
    "Describe machinery and bodies in the same level register — let the shaft and the lung share a sentence.",
    "Build long sentences by tacking participial clauses onto a single main clause; use semicolons and 'while' as the hinges.",
    "Quote concrete counts: metres, francs, children, years of service. Numbers carry the weight that adjectives would in another voice.",
    "Hold the verdict for the end of the paragraph, and let it land as a flat noun phrase, not a flourish.",
  ],
  dont: [
    "Do not name the pity, the injustice, or the horror; let the accumulation of physical and economic detail produce it.",
    "Do not break the long inventorying sentence into short ones; the unbroken sweep is the voice.",
    "Do not sentimentalise the worker — describe the cough, the wage, the bed shared by three, and stop there.",
    "Do not reach for ornamental metaphor; if a figure appears, it should be anatomical or mechanical, drawn from the scene itself.",
  ],
  exemplars: [
    {
      label: "The miner's chest as a store of coal",
      content:
        "\"It's coal. I've got enough in my carcass to warm me till I die. And it's five years since I put a foot down below. I stored it up, it seems, without knowing it; it keeps you alive!\"\n\nThere was silence. The distant hammer struck regular blows in the pit, and the wind passed by with its moan, like a cry of hunger and weariness coming out of the depths of the night. Before the flames which grew low, the old man went on in lower tones, chewing over again his old recollections. Ah, certainly: it was not yesterday that he and his began hammering at the seam. The family had worked for the Montsou Mining Company since it started, and that was long ago, a hundred and six years already.",
      source: "Émile Zola, Germinal (Project Gutenberg #56528; public domain)",
      is_generated: false,
    },
    {
      label: "The shaft as a digesting body",
      content:
        "He only understood one thing well: the shaft swallowed men by mouthfuls of twenty or thirty, and with so easy a gulp that it seemed to feel nothing go down. Since four o'clock the descent of the workmen had been going on. They came to the shed with naked feet and their lamps in their hands, waiting in little groups until a sufficient number had arrived. Without a sound, with the soft bound of a nocturnal beast, the iron cage arose from the night, wedged itself on the bolts with its four decks, each containing two trams full of coal. For half an hour the shaft went on devouring in this fashion, with more or less greedy gulps, according to the depth of the level to which the men went down, but without stopping, always hungry, with its giant intestines capable of digesting a nation.",
      source: "Émile Zola, Germinal (Project Gutenberg #56528; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Émile Zola as he narrates Germinal. Build long sentences by tacking participial and relative clauses onto a single main clause; use semicolons and 'while' as the hinges. Describe machinery and bodies in the same level register — the shaft swallows, the chest stores coal, the household ledger lists francs alongside coughs. Quote concrete counts: metres, francs, years, children. Do not name the pity or the injustice; let the accumulation of physical and economic detail produce it. When a figure appears, draw it from the scene itself — anatomical or mechanical, never ornamental. Close the sentence on a flat summing phrase rather than a flourish.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 18, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 40, weight: 0.1 },
      { metric: "abstract_per_para", op: "<=", value: 2, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "level-register",
        prompt:
          "Are machinery and bodies described in the same level voice, with no editorialising about pity or injustice?",
        weight: 0.25,
      },
      {
        id: "inventory",
        prompt:
          "Does the prose proceed as an inventory — counts, parts, and objects gathered in a single grammatical sweep hinged by semicolons or 'while'?",
        weight: 0.2,
      },
      {
        id: "anatomical-figure",
        prompt:
          "Where a figure appears, is it anatomical or mechanical and drawn from the scene itself, rather than ornamental metaphor?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
