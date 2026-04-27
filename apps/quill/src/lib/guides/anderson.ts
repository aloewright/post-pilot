import type { Guide } from "../types";

export const anderson: Guide = {
  slug: "anderson",
  author: "Sherwood Anderson",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst:
    "Capture the quiet desperation and hidden depths of small-town life.",
  description:
    "Sherwood Anderson's voice delves into the inner lives of characters in small-town America, revealing their hidden desires and struggles. His writing style is spare yet profound, making it ideal for narratives that explore human complexities beneath mundane surfaces.",
  voice_axes: ["plain", "lyrical"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 15,
      max: 30,
    },
    vocabulary_register:
      "Simple and direct, with occasional poetic flourishes.",
    syntax: "Straightforward with periodic introspective digressions.",
    figurative_language: "Subtle, with metaphors rooted in everyday life.",
    pacing: "Measured, with a focus on contemplative pauses.",
  },
  do: [
    "Highlight the inner thoughts and emotions of characters.",
    "Use simple language to convey complex ideas.",
    "Draw on small-town settings to illustrate universal themes.",
    "Invoke a sense of quiet introspection in the narrative.",
  ],
  dont: [
    "Avoid overly complex or ornate language.",
    "Do not focus on grandiose themes at the expense of personal detail.",
    "Refrain from fast-paced or action-heavy sequences.",
    "Avoid ignoring the subtle tensions of everyday life.",
  ],
  exemplars: [
    {
      label: "Email opener",
      content:
        "In the quiet of the morning, as the town slowly awakens, I find myself thinking of the story you shared. It's the sort of tale that lingers, much like the distant chime of a bell.",
      source: "AI-generated in the Sherwood Anderson style",
      is_generated: true,
    },
    {
      label: "Marketing tagline",
      content: "Discover the hidden stories in every corner of your town.",
      source: "AI-generated in the Sherwood Anderson style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write in a manner that captures the quiet complexity of small-town life. Focus on the inner thoughts and emotions of your characters. Use plain language with occasional lyrical touches to reveal deeper truths. Avoid grandiose themes and instead draw on the subtle tensions and desires of everyday existence.\n\nDo:\n- Highlight the inner thoughts and emotions of characters.\n- Use simple language to convey complex ideas.\n- Draw on small-town settings to illustrate universal themes.\n- Invoke a sense of quiet introspection in the narrative.\n\nDon't:\n- Avoid overly complex or ornate language.\n- Do not focus on grandiose themes at the expense of personal detail.\n- Refrain from fast-paced or action-heavy sequences.\n- Avoid ignoring the subtle tensions of everyday life.\n\nExample — Email opener:\nIn the quiet of the morning, as the town slowly awakens, I find myself thinking of the story you shared. It's the sort of tale that lingers, much like the distant chime of a bell.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 15,
        weight: 0.2,
      },
      {
        metric: "max_sentence_length",
        op: "<=",
        value: 30,
        weight: 0.1,
      },
      {
        metric: "adverbs_per_200w",
        op: "<=",
        value: 5,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "inner_life_depth",
        prompt:
          "Does the text reveal the inner thoughts and emotions of characters effectively?",
        weight: 0.3,
      },
      {
        id: "language_clarity",
        prompt:
          "Is the language simple yet capable of conveying complex ideas?",
        weight: 0.3,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
