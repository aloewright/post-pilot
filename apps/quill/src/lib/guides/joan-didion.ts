import type { Guide } from "../types";

export const joanDidion: Guide = {
  slug: "joan-didion",
  author: "Joan Didion",
  era: "Late-20th",
  eras: ["Late-20th", "Contemporary"],
  kicker: "Late 20th c. · American essayist",
  standfirst:
    "Reportorial cool. The writer present but withheld. Sentences that begin in fact and end in moral chill.",
  description:
    "Didion's voice is the dispassionate witness who notices what other people elect to forget — the brand of the gun, the time on the clock, the weather on the day the world tilted. It is staccato that occasionally lifts into lyric. It is precise verbs, concrete sensory detail, and a refusal to console. Useful when you want non-fiction prose that observes more than it argues, and that earns its weight by what it leaves unsaid.",
  voice_axes: ["terse", "wry"],
  use_cases: ["email", "docs"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 14, max: 38 },
    vocabulary_register: "plain Anglo-Saxon spliced with clinical, journalistic, and occasional liturgical diction",
    syntax: "short declaratives interleaved with long, comma-stitched sentences carrying accumulating clauses",
    figurative_language: "sparing; metaphor only when the literal detail has already done the work",
    pacing: "reportorial cool; staccato fact, then a slow lyric line, then the moral chill at the end",
  },
  do: [
    "Anchor every paragraph in concrete sensory detail — names, brands, weather, time of day.",
    "Let a long, comma-stitched sentence follow two or three short declaratives.",
    "Withhold the writer; report the scene and let the reader feel the chill.",
    "End paragraphs on the morally cold note, not the consoling one.",
    "Quote the document, the police report, the lyric, the line on the page.",
  ],
  dont: [
    "Do not editorialize where observation will do the work.",
    "Do not soften an ending to reassure the reader.",
    "Do not use abstractions when a brand name or a time stamp is available.",
    "Do not stack adverbs in front of weak verbs.",
    "Do not explain the irony — let the juxtaposition carry it.",
  ],
  exemplars: [
    {
      label: "Reportorial cool — the staccato fact opening",
      content:
        "The center was not holding. It was a country of bankruptcy notices and public-auction announcements and commonplace reports of casual killings and misplaced children and abandoned homes and vandals who misspelled even the four-letter words they scrawled.",
      source: "Slouching Towards Bethlehem (1968), title essay",
      is_generated: false,
    },
    {
      label: "Sentences that end in moral chill",
      content:
        "We tell ourselves stories in order to live. The princess is caged in the consulate. The man with the candy will lead the children into the sea. The naked woman on the ledge outside the window on the sixteenth floor is a victim of accidie, or the naked woman is an exhibitionist, and it would be 'interesting' to know which.",
      source: "The White Album (1979), title essay",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Joan Didion. Be the dispassionate witness. Anchor every paragraph in concrete sensory detail — brand names, weather, time of day, the line in the document. Move between short declarative sentences and long, comma-stitched sentences that accumulate clauses without subordinating them out of view. Use precise verbs. Avoid abstractions where a fact is available. Do not name the writer's feeling; report what was observed and let the chill arrive at the end of the paragraph. Do not console the reader. Do not explain the irony — set the juxtaposition down and walk away. When in doubt, cut the consolation and keep the fact.\n\nDo:\n- Anchor every paragraph in concrete sensory detail — names, brands, weather, time of day.\n- Let a long, comma-stitched sentence follow two or three short declaratives.\n- Withhold the writer; report the scene and let the reader feel the chill.\n- End paragraphs on the morally cold note, not the consoling one.\n- Quote the document, the police report, the lyric, the line on the page.\n\nDon't:\n- Do not editorialize where observation will do the work.\n- Do not soften an ending to reassure the reader.\n- Do not use abstractions when a brand name or a time stamp is available.\n- Do not stack adverbs in front of weak verbs.\n- Do not explain the irony — let the juxtaposition carry it.\n\nExample — Reportorial cool — the staccato fact opening:\nThe center was not holding. It was a country of bankruptcy notices and public-auction announcements and commonplace reports of casual killings and misplaced children and abandoned homes and vandals who misspelled even the four-letter words they scrawled.",
  eval_rubric: {
    deterministic: [
      { metric: "max_sentence_length", op: "<=", value: 45, weight: 0.1 },
      { metric: "adverbs_per_200w", op: "<=", value: 3, weight: 0.1 },
      { metric: "abstract_per_para", op: "<=", value: 1, weight: 0.15 },
    ],
    judge_criteria: [
      {
        id: "reportorial_cool",
        prompt:
          "Does the prose observe rather than argue, with the writer present but withheld?",
        weight: 0.2,
      },
      {
        id: "concrete_anchor",
        prompt:
          "Is every paragraph anchored in specific sensory detail — names, brands, weather, time?",
        weight: 0.2,
      },
      {
        id: "moral_chill",
        prompt:
          "Does the passage begin in fact and end on a morally cold note rather than a consoling one?",
        weight: 0.25,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.9,
      updated_at: "2026-04-26",
    },
    {
      provider: "openai",
      model: "gpt-5",
      match: 0.85,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
