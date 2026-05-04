import type { Guide } from "../types";

export const leskov: Guide = {
  slug: "leskov",
  author: "Nikolai Leskov",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Russian · 19th c. · Skaz",
  standfirst:
    "A narrative voice that mimics oral storytelling, saturated with the specific dialect, prejudices, and worldview of a character.",
  description:
    "This voice channels the 'skaz' technique, where the prose is filtered through the idiosyncratic speech of a narrator—often a craftsman, rogue, or folk figure. It blends gritty realism with moralizing, using rich, earthy metaphors and digressions. Use this when you need a character-driven story that feels like a folk tale or a gritty anecdote.",
  voice_axes: ["wry", "ornate", "plain"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: {
      mean: 22,
      max: 40,
    },
    vocabulary_register: "Highly idiomatic, folkloric, and archaic.",
    syntax:
      "Run-on sentences with frequent digressions and parenthetical asides.",
    figurative_language:
      "Vivid, often grotesque metaphors drawn from crafts and nature.",
    pacing: "Slow, conversational, with sudden bursts of action.",
  },
  do: [
    "Adopt the persona of a specific character with a distinct worldview and dialect.",
    "Use run-on sentences and digressions to mimic natural, rambling speech.",
    "Employ vivid, earthy, and sometimes grotesque imagery.",
    "Maintain a tone of ironic observation or moralizing.",
  ],
  dont: [
    "Use modern corporate jargon or sterile academic language.",
    "Smooth out the rough edges of the narrator's speech.",
    "Use overly abstract concepts without grounding them in the narrator's concrete reality.",
  ],
  exemplars: [
    {
      label: "Marketing tagline",
      content:
        "You see, folks, this here tool ain't just iron and wood, it's the very hand of the master himself, forged in the fires of necessity and tempered by a thousand hard winters.",
      source: "AI-generated in the Nikolai Leskov style",
      is_generated: true,
    },
    {
      label: "Email opener",
      content:
        "I write to you not because I have nothing better to do, but because I’ve heard tell of your troubles and I reckon I can fix 'em with a bit of elbow grease and a prayer to the saints.",
      source: "AI-generated in the Nikolai Leskov style",
      is_generated: true,
    },
  ],
  system_prompt:
    "You must write as a specific, opinionated narrator with a distinct dialect and worldview. Adopt the persona of a craftsman, rogue, or folk character. Use run-on sentences, digressions, and vivid, often grotesque imagery to convey your message. Avoid modern corporate speak; instead, use archaic idioms and concrete, earthy metaphors. Your tone should be conversational yet authoritative, blending humor with moral seriousness.\n\nDo:\n- Adopt the persona of a specific character with a distinct worldview and dialect.\n- Use run-on sentences and digressions to mimic natural, rambling speech.\n- Employ vivid, earthy, and sometimes grotesque imagery.\n- Maintain a tone of ironic observation or moralizing.\n\nDon't:\n- Use modern corporate jargon or sterile academic language.\n- Smooth out the rough edges of the narrator's speech.\n- Use overly abstract concepts without grounding them in the narrator's concrete reality.\n\nExample — Marketing tagline:\nYou see, folks, this here tool ain't just iron and wood, it's the very hand of the master himself, forged in the fires of necessity and tempered by a thousand hard winters.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 22,
        weight: 0.2,
      },
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.6,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "voice_authenticity",
        prompt:
          "Does the text clearly adopt a specific character persona with a unique voice?",
        weight: 0.4,
      },
      {
        id: "idiom_usage",
        prompt:
          "Is the language rich in idioms, colloquialisms, and earthy metaphors?",
        weight: 0.3,
      },
    ],
    pass_threshold: 0.75,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-27",
};
