import type { Guide } from "../types";

export const dickens: Guide = {
  slug: "dickens",
  author: "Charles Dickens",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Victorian",
  standfirst:
    "Long catalogues, allegorical capitals, weather as moral atmosphere. The world is named, listed, and accused.",
  description:
    "Dickens writes in tides — sentences that gather instances, repeat, accumulate, and finally crest into a verdict. Abstractions are personified (Fate the Woodman, Death the Farmer); weather and rooms carry the conscience of the scene. Useful when you want copy with rhetorical sweep and a moral edge, or narrative that turns description into argument.",
  voice_axes: ["ornate", "wry"],
  use_cases: ["narrative", "marketing", "rfc"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 30, max: 90 },
    vocabulary_register:
      "high Victorian; latinate next to slangy; capitalised abstractions stand in as characters",
    syntax:
      "long enumerative sentences strung with semicolons; anaphora; the same construction repeated until the catalogue itself becomes the point",
    figurative_language:
      "personification and allegory — Fate, Death, the Farmer; weather and objects acting like people",
    pacing:
      "swells and crests; the sentence accumulates instances and breaks on a small specific image at the end",
  },
  do: [
    "Pile instances with semicolons until the catalogue makes the argument.",
    "Capitalise an abstraction and let it walk through the scene as a character.",
    "Let weather, rooms, or objects carry the moral atmosphere.",
    "End a long sentence on a small concrete image — the sixpence, the wig, the goose.",
  ],
  dont: [
    "Do not state the moral directly; the catalogue is the moral.",
    "Do not write short, even paragraphs — Dickens's pulse is the long uneven swell.",
    "Do not use neutral verbs when a personifying one will do (the sea did not crash; it thundered, and brought the coast down, madly).",
    "Do not be afraid of the comic register inside a grave one.",
  ],
  exemplars: [
    {
      label: "Panoramic catalogue — the hangman",
      content:
        "In the midst of them, the hangman, ever busy and ever worse than useless, was in constant requisition; now, stringing up long rows of miscellaneous criminals; now, hanging a housebreaker on Saturday who had been taken on Tuesday; now, burning people in the hand at Newgate by the dozen, and now burning pamphlets at the door of Westminster Hall; to-day, taking the life of an atrocious murderer, and to-morrow of a wretched pilferer who had robbed a farmer’s boy of sixpence.",
      source:
        "Charles Dickens, A Tale of Two Cities (Project Gutenberg #98; public domain)",
      is_generated: false,
    },
    {
      label: "Atmospheric description — the Dover mail",
      content:
        "There was a steaming mist in all the hollows, and it had roamed in its forlornness up the hill, like an evil spirit, seeking rest and finding none. A clammy and intensely cold mist, it made its slow way through the air in ripples that visibly followed and overspread one another, as the waves of an unwholesome sea might do. It was dense enough to shut out everything from the light of the coach-lamps but these its own workings, and a few yards of road; and the reek of the labouring horses steamed into it, as if they had made it all.",
      source:
        "Charles Dickens, A Tale of Two Cities (Project Gutenberg #98; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Charles Dickens. Build long sentences that accumulate instances, joined by semicolons, until the catalogue itself becomes the argument. Personify abstractions — Fate, Death, the City — and capitalise them so they walk through the scene as characters. Let weather, objects, and rooms carry the moral atmosphere; the mist seeks rest, the sea does what it likes, and what it likes is destruction. Mix latinate diction with slangy or comic registers in the same paragraph. End your longest sentences on a small, exact, concrete image. Never state the verdict directly; the list, the weather, and the names are the verdict.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 22, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 60, weight: 0.15 },
      { metric: "abstract_per_para", op: ">=", value: 2, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "catalogue",
        prompt:
          "Does the prose accumulate instances with semicolons or anaphora until the list itself carries the argument?",
        weight: 0.25,
      },
      {
        id: "personification",
        prompt:
          "Are abstractions, weather, or objects animated as if they had will or character?",
        weight: 0.2,
      },
      {
        id: "register-mix",
        prompt:
          "Does the prose move between high latinate diction and comic or slangy registers without flinching?",
        weight: 0.15,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
