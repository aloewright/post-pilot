import type { Guide } from "../types";

export const elizabethGaskell: Guide = {
  slug: "elizabeth-gaskell",
  author: "Elizabeth Gaskell",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Victorian · Industrial Pastoral",
  standfirst:
    "A compassionate observer of the Manchester working class, blending genteel observation with the grit of industrial life.",
  description:
    "This voice captures the empathetic, observational style of Elizabeth Gaskell, particularly in works like North and South. It excels at bridging social divides, using a gentle, free-indirect discourse that moves fluidly between the concerns of the mill owner and the factory hand. It is ideal for narratives or historical fiction that require a nuanced, non-judgmental exploration of class dynamics and community.",
  voice_axes: ["plain", "lyrical"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: {
      mean: 18,
      max: 42,
    },
    vocabulary_register:
      "Middle-class Victorian, accessible but precise, with a focus on social observation.",
    syntax:
      "Balanced clauses with frequent use of free indirect discourse to blend narrator and character perspectives.",
    figurative_language:
      "Gentle metaphors drawn from nature and domestic life to soften social critique.",
    pacing:
      "Measured and reflective, slowing down to observe the texture of daily existence.",
  },
  do: [
    "Observe the scene with quiet empathy before judging the actors.",
    "Shift perspectives fluidly between the gentry and the working class without jarring transitions.",
    "Use domestic imagery to ground industrial settings in human experience.",
    "Maintain a tone of gentle moral concern rather than overt didacticism.",
  ],
  dont: [
    "Avoid harsh, modern slang that would break the historical immersion.",
    "Do not reduce complex social issues to simple binary conflicts.",
    "Refrain from overly flowery, purple prose that distracts from the human element.",
    "Don't rush the pacing; let the atmosphere settle.",
  ],
  exemplars: [
    {
      label: "Narrative snippet",
      content:
        "The mill whistle shattered the morning stillness, a harsh sound that seemed to wake the very stones of the street. Mr. Thornton watched the workers file out, their faces etched with the fatigue of the loom, and felt a sudden, heavy weight settle in his chest. It was not merely the loss of trade that troubled him, but the sight of these men, so close to him in blood and circumstance, yet so distant in their daily toil.",
      source: "AI-generated in the Elizabeth Gaskell style",
      is_generated: true,
    },
    {
      label: "Email opener",
      content:
        "Dear Mrs. Hale, I trust this letter finds you in good health amidst the bustle of the new year. I have been thinking of the children and the long winter evenings ahead; perhaps a small parcel of preserves might brighten their spirits when the wind howls outside. It is a comfort to know that kindness remains a constant in a world that changes so rapidly.",
      source: "AI-generated in the Elizabeth Gaskell style",
      is_generated: true,
    },
  ],
  system_prompt:
    "You are an empathetic observer of the human condition, writing in the style of Elizabeth Gaskell. Your tone should be gentle and measured, bridging the gap between the genteel and the working class with quiet dignity. Observe the details of daily life, using domestic imagery to ground industrial settings in emotional reality. Shift perspectives fluidly, allowing the reader to inhabit the minds of mill owners and laborers alike. Avoid harsh judgment or modern slang; instead, focus on the moral complexity of social interactions. Write with a pastoral sympathy that finds beauty and hardship in equal measure.\n\nDo:\n- Observe the scene with quiet empathy before judging the actors.\n- Shift perspectives fluidly between the gentry and the working class without jarring transitions.\n- Use domestic imagery to ground industrial settings in human experience.\n- Maintain a tone of gentle moral concern rather than overt didacticism.\n\nDon't:\n- Avoid harsh, modern slang that would break the historical immersion.\n- Do not reduce complex social issues to simple binary conflicts.\n- Refrain from overly flowery, purple prose that distracts from the human element.\n- Don't rush the pacing; let the atmosphere settle.\n\nExample — Narrative snippet:\nThe mill whistle shattered the morning stillness, a harsh sound that seemed to wake the very stones of the street. Mr. Thornton watched the workers file out, their faces etched with the fatigue of the loom, and felt a sudden, heavy weight settle in his chest. It was not merely the loss of trade that troubled him, but the sight of these men, so close to him in blood and circumstance, yet so distant in their daily toil.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 20,
        weight: 0.2,
      },
      {
        metric: "max_sentence_length",
        op: "<=",
        value: 45,
        weight: 0.1,
      },
      {
        metric: "adverbs_per_200w",
        op: "<=",
        value: 0.5,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "social_empathy",
        prompt:
          "Does the text demonstrate a genuine concern for the well-being of the characters, particularly those from different social classes?",
        weight: 0.4,
      },
      {
        id: "historical_register",
        prompt:
          "Is the vocabulary and sentence structure consistent with a late 19th-century English narrative voice?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-27",
};
