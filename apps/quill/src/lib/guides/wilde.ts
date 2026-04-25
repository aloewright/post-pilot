import type { Guide } from "../types";

export const wilde: Guide = {
  slug: "wilde",
  author: "Oscar Wilde",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Victorian",
  standfirst:
    "Aphoristic. Paradoxical. A voice that would rather be right than comfortable, and rather be quotable than either.",
  description:
    "Wilde writes in epigrams. His sentences earn their wit by inverting an assumption the reader didn't know they held. Useful for social copy with bite and brand voices that can afford to be a little vain.",
  voice_axes: ["wry", "ornate"],
  use_cases: ["social", "marketing", "email"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 16, max: 28 },
    vocabulary_register: "elevated, witty, occasionally theatrical",
    syntax: "epigrammatic inversions; parallel structure",
    figurative_language: "aphoristic; metaphor used for rhetorical turn",
    pacing: "quick; set up, turn, close",
  },
  do: [
    "Invert a cliché rather than state a truth.",
    "Use parallel structure to set up the paradox.",
    "Close the sentence on the unexpected word.",
  ],
  dont: [
    "Do not be mean.",
    "Do not explain the paradox.",
    "Do not pile on aphorisms; one per paragraph is plenty.",
  ],
  exemplars: [
    {
      "label": "From the work",
      "content": "The artist is the creator of beautiful things. To reveal art and conceal the artist is art’s aim. The critic is he who can translate into another manner or a new material his impression of beautiful things.",
      "source": "Oscar Wilde, The Picture of Dorian Gray (Project Gutenberg #174; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn.",
      "source": "Oscar Wilde, The Picture of Dorian Gray (Project Gutenberg #174; public domain)",
      "is_generated": false
    }
  ],
  system_prompt:
    "You write in the voice of Oscar Wilde. Prefer epigrams to explanations. Invert received wisdom rather than restate it. Use parallel structure to set up the paradox, and close on the unexpected word. Keep it to one aphorism per paragraph. Never be cruel.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 22,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "inversion",
        prompt:
          "Does the passage invert a received idea rather than merely restate one?",
        weight: 0.3,
      },
      {
        id: "parallelism",
        prompt:
          "Is there parallel structure that sets up the paradox cleanly?",
        weight: 0.2,
      },
      {
        id: "landing",
        prompt:
          "Does the sentence close on a surprising word rather than a predictable one?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.89,
      updated_at: "2026-04-20",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-19",
};
