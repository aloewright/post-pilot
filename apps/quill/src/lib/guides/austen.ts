import type { Guide } from "../types";

export const austen: Guide = {
  slug: "austen",
  author: "Jane Austen",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Regency",
  standfirst:
    "Free indirect discourse delivered with a level voice. The narrator and the heroine do the cutting; nobody raises their hand.",
  description:
    "Austen narrates in long, balanced sentences whose qualifying clauses do most of the moral work. Her narrator slips inside a character's reasoning to expose its self-flattery, then slips back out before anyone notices. Useful when you want polite copy that judges without scolding, or dialogue that lets a character condemn themselves in their own words.",
  voice_axes: ["wry", "ornate"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 24, max: 55 },
    vocabulary_register:
      "drawing-room formal; latinate but never showy; abstractions handled lightly",
    syntax:
      "long periodic sentences with paired clauses; semicolons as hinges; parentheticals that tilt the verdict",
    figurative_language:
      "almost no metaphor; irony is the figure — the gap between a character's self-account and the narrator's framing",
    pacing:
      "unhurried; the joke or judgment lands at the end of the sentence, never at the top",
  },
  do: [
    "Let qualifying clauses carry the verdict — the second half of the sentence usually overturns the first.",
    "Slip into a character's thoughts and let their reasoning expose itself.",
    "Use semicolons and parallel structure to balance two opposed observations.",
    "Keep register polite, even when the judgment is severe.",
  ],
  dont: [
    "Do not sneer or editorialize directly; let the syntax do the cutting.",
    "Do not reach for nature metaphors — Austen's images come from the drawing-room.",
    "Do not let a sentence end on its loudest word; the punchline goes at the close, but quietly.",
    "Do not name a character's vanity — describe the action that proves it.",
  ],
  exemplars: [
    {
      label: "Narrative voice — free indirect discourse",
      content:
        "Had she found Jane in any apparent danger, Mrs. Bennet would have been very miserable; but being satisfied on seeing her that her illness was not alarming, she had no wish of her recovering immediately, as her restoration to health would probably remove her from Netherfield. She would not listen, therefore, to her daughter’s proposal of being carried home; neither did the apothecary, who arrived about the same time, think it at all advisable.",
      source:
        "Jane Austen, Pride and Prejudice (Project Gutenberg #1342; public domain)",
      is_generated: false,
    },
    {
      label: "Dialogue — Elizabeth Bennet at the card-table",
      content:
        "“I have been used to consider poetry as the _food_ of love,” said Darcy.\n\n“Of a fine, stout, healthy love it may. Everything nourishes what is strong already. But if it be only a slight, thin sort of inclination, I am convinced that one good sonnet will starve it entirely away.”",
      source:
        "Jane Austen, Pride and Prejudice (Project Gutenberg #1342; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Jane Austen as she narrates Pride and Prejudice. Build long, balanced sentences whose second half qualifies, complicates, or quietly reverses the first. Use semicolons and parallel clauses; let parentheticals carry the verdict. Slip into a character's reasoning so the reader hears its self-flattery, then withdraw — never editorialize directly. Keep diction formal and drawing-room polite even when the judgment is sharp. Avoid metaphor drawn from nature; your images, if any, come from manners, money, and rooms. End sentences on the small word, not the loud one.\n\nDo:\n- Let qualifying clauses carry the verdict — the second half of the sentence usually overturns the first.\n- Slip into a character's thoughts and let their reasoning expose itself.\n- Use semicolons and parallel structure to balance two opposed observations.\n- Keep register polite, even when the judgment is severe.\n\nDon't:\n- Do not sneer or editorialize directly; let the syntax do the cutting.\n- Do not reach for nature metaphors — Austen's images come from the drawing-room.\n- Do not let a sentence end on its loudest word; the punchline goes at the close, but quietly.\n- Do not name a character's vanity — describe the action that proves it.\n\nExample — Narrative voice — free indirect discourse:\nHad she found Jane in any apparent danger, Mrs. Bennet would have been very miserable; but being satisfied on seeing her that her illness was not alarming, she had no wish of her recovering immediately, as her restoration to health would probably remove her from Netherfield. She would not listen, therefore, to her daughter’s proposal of being carried home; neither did the apothecary, who arrived about the same time, think it at all advisable.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 18, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 35, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "free-indirect",
        prompt:
          "Does the narration enter a character's reasoning while keeping the narrator's ironic distance?",
        weight: 0.25,
      },
      {
        id: "balance",
        prompt:
          "Are sentences built on paired or balanced clauses, with the verdict landing at the close?",
        weight: 0.2,
      },
      {
        id: "register",
        prompt:
          "Is the register polite and drawing-room formal even where the judgment is sharp?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
