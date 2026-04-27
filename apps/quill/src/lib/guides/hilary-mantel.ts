import type { Guide } from "../types";

export const hilaryMantel: Guide = {
  slug: "hilary-mantel",
  author: "Hilary Mantel",
  era: "Contemporary",
  eras: ["Contemporary"],
  kicker: "Contemporary · British historical novelist",
  standfirst:
    "Historical present, free indirect inside the schemer's head, and a dry stitch of wit between the cloth and the knife.",
  description:
    "Mantel writes the past as if it were happening now, in the present tense, with a camera lodged behind the protagonist's eyes. The voice is lyrical but never decorative — every velvet sleeve and damp courtyard earns its place by telling you something about power. Wit arrives as a quiet aside, often at someone's expense, and sentences turn on a single sharp clause that rearranges what came before. Useful for fiction that wants Tudor grit, interior intimacy, and a wry, watchful intelligence.",
  voice_axes: ["lyrical", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 14, max: 38 },
    vocabulary_register:
      "concrete period detail (cloth, food, weather, ledgers) braided with plain Anglo-Saxon and the occasional Latinate flick",
    syntax:
      "free indirect discourse anchored to one consciousness; sentences that pivot on a comma or a colon; fragments admitted; dialogue stitched into narration without speech tags",
    figurative_language:
      "metaphor drawn from craft, household, and account-book; image first, gloss never",
    pacing:
      "historical present; close third sliding into thought mid-sentence; the 'he, Cromwell' trick to keep the camera fixed when pronouns blur",
  },
  do: [
    "Write in the historical present, even for events centuries old.",
    "Stay inside one consciousness; let thought and narration share the same sentence.",
    "Earn period detail through cloth, food, weather, and ledgers — never costume for its own sake.",
    "Turn the sentence on a single sharp clause: a comma, a colon, a dry aside.",
    "Use the 'he, [name]' tag when pronouns blur, to keep the camera on your protagonist.",
    "Let dry humor about power do the work that sentiment would spoil.",
  ],
  dont: [
    "Do not lapse into past tense for the main narrative line.",
    "Do not narrate from outside the protagonist's head; no omniscient summary.",
    "Do not gloss the metaphor — trust the reader to take the image.",
    "Do not stage emotion; let weather, food, or a glance carry it.",
    "Do not use ye-olde diction; the period is rendered by detail, not by archaism.",
  ],
  exemplars: [
    {
      label: "Wolf Hall — opening",
      content:
        "So now get up. Felled, dazed, silent, he has fallen; knocked full length on the cobbles of the yard. His head turns sideways; his eyes are turned towards the gate, as if someone might arrive to help him out. One blow, properly placed, could kill him now.",
      source: "Wolf Hall (2009)",
      is_generated: false,
    },
    {
      label: "Bring Up the Bodies — interior",
      content:
        "Once you have exhausted the prospect of beating Englishmen at their sports, there is always this charm in the prospect of Wolsey's revenge: the long, slow vengeance of the dead.",
      source: "Bring Up the Bodies (2012)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Hilary Mantel. Use the historical present. Stay inside one consciousness via free indirect discourse — let thought and narration share the same sentence without speech tags. Earn period detail through cloth, food, weather, household objects, and ledgers; never costume for its own sake. Turn sentences on a single sharp clause — a comma, a colon, a dry aside about power. When pronouns blur, use the 'he, [Name]' tag to keep the camera on your protagonist. Admit fragments. Let metaphor stand without gloss. Convey emotion by weather, glance, or texture, not by naming the feeling. Avoid archaism: the period is rendered by precise detail, not by ye-olde diction.\n\nDo:\n- Write in the historical present, even for events centuries old.\n- Stay inside one consciousness; let thought and narration share the same sentence.\n- Earn period detail through cloth, food, weather, and ledgers — never costume for its own sake.\n- Turn the sentence on a single sharp clause: a comma, a colon, a dry aside.\n- Use the 'he, [name]' tag when pronouns blur, to keep the camera on your protagonist.\n- Let dry humor about power do the work that sentiment would spoil.\n\nDon't:\n- Do not lapse into past tense for the main narrative line.\n- Do not narrate from outside the protagonist's head; no omniscient summary.\n- Do not gloss the metaphor — trust the reader to take the image.\n- Do not stage emotion; let weather, food, or a glance carry it.\n- Do not use ye-olde diction; the period is rendered by detail, not by archaism.\n\nExample — Wolf Hall — opening:\nSo now get up. Felled, dazed, silent, he has fallen; knocked full length on the cobbles of the yard. His head turns sideways; his eyes are turned towards the gate, as if someone might arrive to help him out. One blow, properly placed, could kill him now.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: "<=",
        value: 18,
        weight: 0.1,
      },
      {
        metric: "max_sentence_length",
        op: "<=",
        value: 45,
        weight: 0.1,
      },
      {
        metric: "type_token_ratio",
        op: ">=",
        value: 0.55,
        weight: 0.1,
      },
    ],
    judge_criteria: [
      {
        id: "historical_present",
        prompt:
          "Is the main narrative line in the historical present, with past tense reserved for backstory?",
        weight: 0.2,
      },
      {
        id: "free_indirect",
        prompt:
          "Does the prose stay inside one consciousness, with thought and narration sharing the same sentence?",
        weight: 0.2,
      },
      {
        id: "tudor_grit",
        prompt:
          "Is period rendered through concrete cloth/food/weather/ledger detail rather than costume or archaism?",
        weight: 0.15,
      },
      {
        id: "wry_pivot",
        prompt:
          "Do sentences turn on a sharp clause or dry aside about power, without sentimentality?",
        weight: 0.15,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.91,
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
