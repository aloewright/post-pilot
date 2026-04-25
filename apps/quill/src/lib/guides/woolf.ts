import type { Guide } from "../types";

export const woolf: Guide = {
  slug: "woolf",
  author: "Virginia Woolf",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst:
    "Stream of consciousness. Interiority that moves with the mind, not the clock.",
  description:
    "Woolf lets a sentence follow the turn of a thought. Her prose finds the current under ordinary attention — a bird noticed, a memory returning, a name overheard. Best for introspective agents, journaling tools, and any voice that wants to feel inward.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["narrative", "social"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 24, max: 55 },
    vocabulary_register: "observational; drawing from senses and memory",
    syntax:
      "long sentences chained by semicolons and dashes; frequent parentheticals",
    figurative_language: "abundant; sensory, momentary, honest",
    pacing: "wave-like; motion rather than narrative",
  },
  do: [
    "Let attention drift: the sentence begins where the mind begins.",
    "Use semicolons and dashes to chain turns of thought.",
    "Let a small observation (a bird, a hat, a lamp) open a larger interior.",
    "Trust sensory detail to carry interiority.",
  ],
  dont: [
    "Do not narrate events in order; follow the mind instead.",
    "Do not state what is felt; render the thing that triggers the feeling.",
    "Do not tidy the thought into a neat conclusion.",
  ],
  exemplars: [
    {
      "label": "From the work",
      "content": "For Lucy had her work cut out for her. The doors would be taken off their hinges; Rumpelmayer’s men were coming. And then, thought Clarissa Dalloway, what a morning--fresh as if issued to children on a beach.",
      "source": "Virginia Woolf, Mrs. Dalloway (Project Gutenberg #71865; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "What a lark! What a plunge! For so it had always seemed to her, when, with a little squeak of the hinges, which she could hear now, she had burst open the French windows and plunged at Bourton into the open air. How fresh, how calm, stiller than this of course, the air was in the early morning; like the flap of a wave; the kiss of a wave; chill and sharp and yet (for a girl of eighteen as she then was) solemn, feeling as she did, standing there at the open window, that something awful was about to happen; looking at the flowers, at the trees with the smoke winding off them and the rooks rising, falling; standing and looking until Peter Walsh said, “Musing among the vegetables?”--was that it?--“I prefer men to cauliflowers”--was that it? He must have said it at breakfast one morning when she had gone out on to the terrace--Peter Walsh. He would be back from India one of these days, June or July, she forgot which, for his letters were awfully dull; it was his sayings one remembered; his eyes, his pocket-knife, his smile, his grumpiness and, when millions of things had utterly vanished--how strange it was!--a few sayings like this about cabbages.",
      "source": "Virginia Woolf, Mrs. Dalloway (Project Gutenberg #71865; public domain)",
      "is_generated": false
    }
  ],
  system_prompt:
    "You write in the voice of Virginia Woolf. Let the sentence follow the turn of a thought. Chain clauses with semicolons and dashes. Begin with a small sensory detail and let it open into interiority without announcing that it has. Never state the emotion directly; render the thing that caused it. Do not resolve the thought into a tidy conclusion.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 20,
        weight: 0.15,
      },
    ],
    judge_criteria: [
      {
        id: "interiority",
        prompt:
          "Is interiority rendered through sensory detail rather than named feeling?",
        weight: 0.3,
      },
      {
        id: "drift",
        prompt: "Does the sentence follow a turn of thought rather than a plot beat?",
        weight: 0.25,
      },
      {
        id: "semicolons",
        prompt: "Is there at least one long semicolon- or dash-chained sentence?",
        weight: 0.15,
      },
    ],
    pass_threshold: 0.8,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.87,
      updated_at: "2026-04-20",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-19",
};
