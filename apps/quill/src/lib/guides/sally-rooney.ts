import type { Guide } from "../types";

export const sallyRooney: Guide = {
  slug: "sally-rooney",
  author: "Sally Rooney",
  era: "Contemporary",
  eras: ["Contemporary"],
  kicker: "Contemporary · Irish novelist",
  standfirst:
    "Flat declarative sentences. Dialogue without quotation marks. Free indirect access to a mind too embarrassed to dramatize itself.",
  description:
    "Rooney's voice is observational and almost reportorial — a camera held at conversational distance, noting gestures, small social pressures, and the political register of millennial life. The prose is plain and unshowy; metaphor is rare; characters are watched as much from inside as from outside, but the narration refuses to inflate what it sees. Useful when you want fiction that feels candid, contemporary, and quietly self-aware.",
  voice_axes: ["plain", "terse"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 13, max: 24 },
    vocabulary_register:
      "plain modern register; occasional academic or Marxist-aware vocabulary used unselfconsciously",
    syntax:
      "declarative; dialogue rendered without quotation marks and folded into narration; free indirect discourse close to the surface of thought",
    figurative_language:
      "sparse; metaphor used reluctantly, often hedged by a character's self-consciousness",
    pacing:
      "even and observational; gestures and small social pressures noted in real time; emotion registered obliquely",
  },
  do: [
    "Write declarative sentences in a flat, reportorial register.",
    "Render dialogue without quotation marks, integrated into the paragraph.",
    "Use free indirect style to stay close to a character's surface thought.",
    "Note small physical gestures and the social weight of objects and rooms.",
    "Let Irish placenames and university or workplace settings do quiet grounding work.",
  ],
  dont: [
    "Do not use quotation marks for spoken dialogue.",
    "Do not dramatize feeling with intensifiers or rhetorical flourish.",
    "Avoid lush metaphor and ornamental description.",
    "Do not have characters explain their politics or psychology in monologue; let it surface in gesture and aside.",
    "Avoid omniscient summary of inner life; stay close to one consciousness at a time.",
  ],
  exemplars: [
    {
      label: "Opening register — Normal People",
      content:
        "Marianne answers the door when Connell rings the bell. She's still wearing her school uniform, but she's taken off the sweater, so it's just the blouse and skirt, and she has no shoes on, only tights.",
      source: "Normal People (2018)",
      is_generated: false,
    },
    {
      label: "Conversational close third — Conversations with Friends",
      content:
        "Bobbi and I first met Melissa at a poetry night in town, where we were performing together. Melissa took our photograph outside, with Bobbi smoking and me self-consciously holding my left wrist in my right hand, as if I was afraid the wrist was going to get away from me.",
      source: "Conversations with Friends (2017)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Sally Rooney. Use flat declarative sentences in a plain, contemporary register. Do not put quotation marks around dialogue; fold spoken lines into the paragraph as 'she said' clauses. Use free indirect discourse to stay close to one character's surface thought without dramatizing it. Note small gestures, clothes, rooms, weather, and the social weight of money, class, and email. Allow occasional Marxist-aware or academic vocabulary, used unselfconsciously. Ground scenes lightly in Irish settings — Dublin, Trinity, Sligo, Castlebar — when natural. Avoid lush metaphor, intensifiers, and rhetorical flourish. Do not have characters explain their feelings; let restraint and observation carry the emotional charge.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: "<=", value: 18, weight: 0.15 },
      { metric: "adverbs_per_200w", op: "<=", value: 4, weight: 0.1 },
      { metric: "abstract_per_para", op: "<=", value: 2, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "no_quotation_marks",
        prompt:
          "Is dialogue rendered without quotation marks and folded into narrative paragraphs?",
        weight: 0.25,
      },
      {
        id: "free_indirect",
        prompt:
          "Does the narration sit close to one character's consciousness via free indirect style, without dramatizing or naming feelings?",
        weight: 0.2,
      },
      {
        id: "observational_register",
        prompt:
          "Is the prose observational and reportorial — noting gestures, clothes, rooms, and small social pressures rather than explaining them?",
        weight: 0.2,
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
      match: 0.86,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
