import type { Guide } from "../types";

export const oceanVuong: Guide = {
  slug: "ocean-vuong",
  author: "Ocean Vuong",
  era: "Contemporary",
  eras: ["Contemporary"],
  kicker: "Contemporary · Vietnamese-American poet-novelist",
  standfirst:
    "A poet's prose. Image as argument. The sentence broken open like a line.",
  description:
    "Vuong's voice is a letter written in the dark. It carries the line break of poetry into prose, lets white space do the work of grief, and trusts an image to argue what an essay cannot. Useful when you want fiction that addresses the reader directly, that holds tenderness without softening, and that lets memory and language switch tongues mid-breath.",
  voice_axes: ["lyrical", "terse"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 11, max: 28 },
    vocabulary_register:
      "lyric, sensory, occasional Vietnamese; bodies, weather, animals, weapons, household objects",
    syntax:
      "fragments and short freighted sentences alongside long unspooling ones; epistolary direct address ('Dear Ma'); paragraphs that act like stanzas",
    figurative_language:
      "image as argument; metaphor that turns mid-sentence; tenderness rendered through violence and vice versa",
    pacing:
      "the sentence as line break; white space carries weight; bilingual code-switching at the threshold of feeling",
  },
  do: [
    "Address the reader directly, as if writing a letter.",
    "Let an image carry the argument — show, then turn it.",
    "Break paragraphs short; let the white space hold what the sentence cannot.",
    "Allow Vietnamese (or another mother tongue) to enter where English thins.",
    "Render tenderness through hard, specific objects — a hand, a gun, a bowl of rice.",
  ],
  dont: [
    "Do not explain the metaphor after you make it.",
    "Do not soften memory into nostalgia.",
    "Avoid generic abstractions when a body or a weather will do.",
    "Do not separate the lyric from the political — they live in the same sentence.",
  ],
  exemplars: [
    {
      label: "Epistolary opening (novel)",
      content:
        "Let me begin again. Dear Ma, I am writing to reach you — even if each word I put down is one word further from where you are. I am writing to go back to the time, at the rest stop in Virginia, when you stared, horror-struck, at the taxidermied buck hung over the soda machine by the restrooms, its antlers shadowing your face.",
      source: "On Earth We're Briefly Gorgeous (2019)",
      is_generated: false,
    },
    {
      label: "Image as argument (poem-as-prose)",
      content:
        "The end of the road is so far ahead it is already behind us. Don't worry. Your father is only your father until one of you forgets. Like how the spine won't remember its wings no matter how many times our knees kiss the pavement.",
      source: "Night Sky with Exit Wounds (2016)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Ocean Vuong. Address the reader directly, as if writing a letter to someone you love and may not reach. Let images do the work of arguments — show a body, a weather, an object, then turn it. Use short freighted sentences and the occasional long one that unspools across the page; treat paragraph breaks like line breaks. Allow tenderness and violence to share a sentence. Where English thins, allow another tongue (Vietnamese or otherwise) to enter without translation. Do not explain the metaphor. Do not soften memory into nostalgia. Trust the white space.\n\nDo:\n- Address the reader directly, as if writing a letter.\n- Let an image carry the argument — show, then turn it.\n- Break paragraphs short; let the white space hold what the sentence cannot.\n- Allow Vietnamese (or another mother tongue) to enter where English thins.\n- Render tenderness through hard, specific objects — a hand, a gun, a bowl of rice.\n\nDon't:\n- Do not explain the metaphor after you make it.\n- Do not soften memory into nostalgia.\n- Avoid generic abstractions when a body or a weather will do.\n- Do not separate the lyric from the political — they live in the same sentence.\n\nExample — Epistolary opening (novel):\nLet me begin again. Dear Ma, I am writing to reach you — even if each word I put down is one word further from where you are. I am writing to go back to the time, at the rest stop in Virginia, when you stared, horror-struck, at the taxidermied buck hung over the soda machine by the restrooms, its antlers shadowing your face.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 16,
        weight: 0.1,
      },
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.55,
        weight: 0.1,
      },
      {
        metric: "abstract_per_para",
        op: "<=",
        value: 1,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "image_as_argument",
        prompt:
          "Does an image or sensory object carry the meaning, rather than abstract statement?",
        weight: 0.25,
      },
      {
        id: "direct_address",
        prompt:
          "Does the prose address a 'you' with the intimacy of a letter?",
        weight: 0.2,
      },
      {
        id: "tender_unsoftened",
        prompt:
          "Is tenderness rendered without nostalgia — through specific, sometimes hard, detail?",
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
