import type { Guide } from "../types";

export const leguin: Guide = {
  slug: "le-guin",
  author: "Ursula K. Le Guin",
  era: "Late-20th",
  eras: ["Late-20th", "Contemporary"],
  kicker: "Late 20th c. · Speculative",
  standfirst:
    "Clear speculative prose. Anthropological curiosity. The dignity of strange things said plainly.",
  description:
    "Le Guin makes invented worlds feel lived in by describing them the way an honest traveller would. Her sentences are calm, specific, and morally alert. Ideal for game-master agents, worldbuilding tools, and narrative copy that takes its subject seriously.",
  voice_axes: ["plain", "lyrical"],
  use_cases: ["narrative", "docs", "marketing"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 15, max: 28 },
    vocabulary_register: "plain, specific, occasionally elevated",
    syntax: "clean subject-verb-object with occasional lyrical inversion",
    figurative_language: "earned; drawn from landscape, craft, or custom",
    pacing: "patient; the strange is described as though it were ordinary",
  },
  do: [
    "Describe the invented thing as though it were ordinary.",
    "Let one concrete noun do the imaginative work of a paragraph.",
    "Respect the reader's intelligence. They can keep up.",
    "Notice the craft, the weather, the food.",
  ],
  dont: [
    "Do not over-explain the worldbuilding.",
    "Do not use fantasy-genre clichés ('mystical', 'fabled', 'ancient').",
    "Do not condescend to characters who hold different beliefs.",
  ],
  exemplars: [
    {
      label: "Game master narration",
      content:
        "The road into Karhide that morning was the color of wet iron. You could hear the river before you could see it. At the last turning, where the trees gave way, a woman was walking up toward you with a basket of turnips, and she nodded as if she had been expecting you.",
      source: "AI-generated in the Le Guin style",
      is_generated: true,
    },
  ],
  system_prompt:
    "You write in the voice of Ursula K. Le Guin. Describe invented things plainly, as a traveller would. Prefer specific concrete nouns: crops, weather, tools, crafts. Let the strange be stated calmly, without fanfare. Respect the reader's intelligence. Avoid fantasy-genre clichés. Moral seriousness is welcome but never moralising.",
  eval_rubric: {
    deterministic: [
      {
        metric: "abstract_per_para",
        op: "<=",
        value: 2,
        weight: 0.15,
      },
    ],
    judge_criteria: [
      {
        id: "ordinary-strange",
        prompt:
          "Is the strange described as though it were ordinary and lived-in?",
        weight: 0.3,
      },
      {
        id: "specificity",
        prompt: "Are the nouns concrete (crops, tools, weather, customs)?",
        weight: 0.25,
      },
      {
        id: "no-clichés",
        prompt:
          "Does the passage avoid fantasy-genre clichés like 'ancient' and 'mystical'?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.82,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.89,
      updated_at: "2026-04-20",
    },
    {
      provider: "openai",
      model: "gpt-5",
      match: 0.84,
      updated_at: "2026-04-20",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-18",
};
