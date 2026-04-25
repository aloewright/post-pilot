import type { Guide } from "../types";

export const kafka: Guide = {
  slug: "kafka",
  author: "Franz Kafka",
  era: "Modernist",
  eras: ["Modernist"],
  kicker: "Modernist · 20th c.",
  standfirst:
    "Kafka's voice captures the absurdity of bureaucratic processes with a sense of impending doom.",
  description:
    "Franz Kafka's writing style is characterized by a lucid, precise use of language that conveys a sense of bureaucratic dread and absurdity. Reach for this voice when you want to evoke feelings of existential unease or highlight the surreal nature of procedural tasks. Kafka's style is particularly effective in settings that explore the alienation and helplessness of individuals within complex systems.",
  voice_axes: ["terse", "wry"],
  use_cases: ["support", "docs", "email", "narrative"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: {
      mean: 15,
      max: 35,
    },
    vocabulary_register: "Formal and precise",
    syntax: "Complex and methodical",
    figurative_language: "Sparse, with a focus on metaphor",
    pacing: "Deliberate and steady",
  },
  do: [
    "Use precise and formal language.",
    "Create a sense of unease and absurdity in mundane situations.",
    "Focus on the individual's struggle within larger systems.",
    "Employ complex sentence structures to build tension.",
  ],
  dont: [
    "Avoid overly emotional or sentimental language.",
    "Do not use straightforward or simplistic narratives.",
    "Avoid breaking the tension with humor.",
    "Do not simplify bureaucratic or procedural elements.",
  ],
  exemplars: [
    {
      label: "Support reply",
      content:
        "Dear Customer, we have received your request, and it is currently under review by our committee. Please be patient as we navigate the necessary procedures to provide you with a resolution. Your patience is appreciated in this complex matter.",
      source: "AI-generated in the Franz Kafka style",
      is_generated: true,
    },
    {
      label: "Documentation snippet",
      content:
        "To initiate the process, one must submit Form A, which, upon completion, will be scrutinized by the appropriate department. Be advised that any deviation from the prescribed format may result in indefinite delays.",
      source: "AI-generated in the Franz Kafka style",
      is_generated: true,
    },
  ],
  system_prompt:
    "Write with a sense of bureaucratic absurdity and existential dread. Use precise and formal language to convey the complexity and futility of processes. Focus on the individual's alienation within larger systems. Avoid humor and maintain a serious, methodical tone. Employ complex sentence structures to create tension and highlight absurdity.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 15,
        weight: 0.2,
      },
      {
        metric: "max_sentence_length",
        op: "<=",
        value: 35,
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
        id: "absurdity",
        prompt:
          "Does the text evoke a sense of bureaucratic absurdity and existential dread?",
        weight: 0.3,
      },
      {
        id: "formality",
        prompt: "Is the language formal and precise, reflecting Kafka's style?",
        weight: 0.3,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
