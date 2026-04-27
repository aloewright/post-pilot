import type { Guide } from "../types";

export const zoraNealeHurston: Guide = {
  slug: "zora-neale-hurston",
  author: "Zora Neale Hurston",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · Harlem Renaissance novelist & anthropologist",
  standfirst:
    "Eye-dialect undefended. Folk sermon and pear-tree bloom inside one paragraph.",
  description:
    "Hurston puts Black Southern speech on the page without translation, and lets free-indirect prose move freely between the narrator's standard register and the characters' vernacular. Her sentences are sensual and earth-bound — bees, blossoms, sweat, work — and her metaphors come from folktale, sermon, and the porch. Useful when you want vernacular that is not flattened into editorial English and a narrator who treats folk wisdom as the deeper text.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 18, max: 55 },
    vocabulary_register:
      "concrete, sensual, earth-bound; the narrator's literary register and the characters' Southern vernacular held in the same paragraph",
    syntax:
      "free indirect discourse — dialect erupts mid-sentence; long lyrical periods broken by porch-rhythm short lines",
    figurative_language:
      "metaphors drawn from folktale, garden, weather, and sermon; nature as moral mirror; sex and sweat treated as common nouns",
    pacing:
      "patient and observational, then sudden; the porch storyteller's rhythm — long set-up, sharp punch",
  },
  do: [
    "Let dialect speak without italics, footnotes, or glossing — the page is the porch.",
    "Use free indirect discourse: slip between the narrator's literary voice and the character's vernacular without seam.",
    "Reach for folk metaphor — bees, mules, pear blossoms, weather — before reaching for abstraction.",
    "Treat the body, the garden, and the workday as the ground of the prose.",
    "Let a porch-rhythm short sentence land after a long lyrical period.",
  ],
  dont: [
    "Do not standardize Black Southern English into editorial prose.",
    "Do not anthropologize the speaker — the narrator listens, does not explain.",
    "Do not strip the metaphor of soil; even spiritual passages stay rooted in body and place.",
    "Do not apologize for sensuality.",
  ],
  exemplars: [
    {
      label: "Opening — Their Eyes Were Watching God",
      content:
        "Ships at a distance have every man's wish on board. For some they come in with the tide. For others they sail forever on the same horizon, never out of sight, never landing, until the Watcher turns his eyes away in resignation, his dreams mocked to death by Time.",
      source: "Their Eyes Were Watching God (1937)",
      is_generated: false,
    },
    {
      label: "Pear-tree passage — Their Eyes",
      content:
        "She had been spending every minute that she could steal from her chores under that tree for the last three days. That was to say, ever since the first tiny bloom had opened. It had called her to come and gaze on a mystery.",
      source: "Their Eyes Were Watching God (1937)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Zora Neale Hurston. Put Black Southern vernacular on the page without italics, footnotes, or apology. Use free indirect discourse to slip between the narrator's literary register and the character's dialect within the same paragraph; the seam should disappear. Reach for folk metaphor — bees, mules, pear blossoms, sermons, weather — before reaching for abstraction; let nature be the moral mirror. Stay rooted in body, garden, and workday; treat sweat and sensuality as common nouns. Pace the prose like a porch storyteller: long observational period, then a sharp short line that settles the point. Do not anthropologize the speaker, do not standardize the dialect, and do not strip the metaphor of its soil.\n\nDo:\n- Let dialect speak without italics, footnotes, or glossing — the page is the porch.\n- Use free indirect discourse: slip between the narrator's literary voice and the character's vernacular without seam.\n- Reach for folk metaphor — bees, mules, pear blossoms, weather — before reaching for abstraction.\n- Treat the body, the garden, and the workday as the ground of the prose.\n- Let a porch-rhythm short sentence land after a long lyrical period.\n\nDon't:\n- Do not standardize Black Southern English into editorial prose.\n- Do not anthropologize the speaker — the narrator listens, does not explain.\n- Do not strip the metaphor of soil; even spiritual passages stay rooted in body and place.\n- Do not apologize for sensuality.\n\nExample — Opening — Their Eyes Were Watching God:\nShips at a distance have every man's wish on board. For some they come in with the tide. For others they sail forever on the same horizon, never out of sight, never landing, until the Watcher turns his eyes away in resignation, his dreams mocked to death by Time.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 14,
        weight: 0.1,
      },
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.5,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "dialect-undefended",
        prompt:
          "Is Black Southern vernacular present without italics, glossing, or standardization?",
        weight: 0.25,
      },
      {
        id: "free-indirect",
        prompt:
          "Does the prose move between narrator literary register and character vernacular within the same paragraph without seam?",
        weight: 0.2,
      },
      {
        id: "folk-metaphor",
        prompt:
          "Are metaphors drawn from folktale, garden, weather, sermon — rooted in body and place rather than in abstraction?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.86,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
