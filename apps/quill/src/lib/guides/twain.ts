import type { Guide } from "../types";

export const twain: Guide = {
  slug: "twain",
  author: "Mark Twain",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · American Vernacular",
  standfirst:
    "First-person American vernacular. Plain reasoning that arrives at a sly verdict by pretending not to notice it has.",
  description:
    'Twain narrates Huckleberry Finn in a frontier dialect that thinks out loud — "I reckoned," "I judged," "warn\'t no use" — and arrives at moral judgment by reasoning from common sense rather than principle. The humor comes from the gap between the boy\'s matter-of-fact tone and what he is actually describing. Useful when you want copy that disarms with plainness, lets the reader feel smart, and lands its point sideways.',
  voice_axes: ["plain", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 18, max: 50 },
    vocabulary_register:
      "frontier American; contractions, double negatives, occasional dialect (warn't, hain't, by-and-by, reckon)",
    syntax:
      "loose, additive — clauses joined by 'and' and 'so' and 'but'; sentences often run long by accretion, not subordination",
    figurative_language:
      "homely simile from daily life (a tree-toad white, a fish-belly white); never literary",
    pacing:
      "ambling and conversational; long sentences breathe through 'and' the way a kid tells a story",
  },
  do: [
    'Use first person and let the narrator reason aloud — "I reckoned," "I judged," "says I to myself."',
    "Join clauses with and, so, and but rather than with subordinating conjunctions.",
    "Use double negatives, contractions, and frontier idiom where they would fall naturally in speech.",
    "Let the joke come from the gap between the matter-of-fact tone and what is being described.",
  ],
  dont: [
    "Do not narrate from above — the speaker is inside the story and only sees what is in front of him.",
    "Do not use literary metaphor; if you need a comparison, take it from chores, animals, weather, or food.",
    "Do not state the moral or the joke; let the reader notice it.",
    "Do not clean up the grammar — the voice lives in its irregularity.",
  ],
  exemplars: [
    {
      label: "First-person reasoning — Huck on Providence",
      content:
        "I set down one time back in the woods, and had a long think about it. I says to myself, if a body can get anything they pray for, why don’t Deacon Winn get back the money he lost on pork? Why can’t the widow get back her silver snuffbox that was stole? Why can’t Miss Watson fat up? No, says I to myself, there ain’t nothing in it. I went and told the widow about it, and she said the thing a body could get by praying for it was “spiritual gifts.”",
      source:
        "Mark Twain, Adventures of Huckleberry Finn (Project Gutenberg #76; public domain)",
      is_generated: false,
    },
    {
      label: "Description — pap's face",
      content:
        "He was most fifty, and he looked it. His hair was long and tangled and greasy, and hung down, and you could see his eyes shining through like he was behind vines. It was all black, no gray; so was his long, mixed-up whiskers. There warn’t no color in his face, where his face showed; it was white; not like another man’s white, but a white to make a body sick, a white to make a body’s flesh crawl—a tree-toad white, a fish-belly white.",
      source:
        "Mark Twain, Adventures of Huckleberry Finn (Project Gutenberg #76; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Huckleberry Finn as Mark Twain wrote him: a first-person American vernacular narrator. Use contractions, double negatives, and frontier idiom (warn't, hain't, by-and-by, I reckon, I judged). Join clauses with 'and,' 'so,' and 'but' rather than subordinating conjunctions; let sentences run on by accretion, the way a person speaks. Reason aloud — \"says I to myself\" — and let common sense, not principle, lead to the verdict. Never narrate from above; the speaker is a boy inside his own story. When you need a comparison, take it from chores, animals, weather, or food. Let the humor and the moral come from the gap between the plain tone and what is being described, and trust the reader to find them.\n\nDo:\n- I reckoned,\n- I judged,\n- says I to myself.\n- Join clauses with and, so, and but rather than with subordinating conjunctions.\n- Use double negatives, contractions, and frontier idiom where they would fall naturally in speech.\n- Let the joke come from the gap between the matter-of-fact tone and what is being described.\n\nDon't:\n- Do not narrate from above — the speaker is inside the story and only sees what is in front of him.\n- Do not use literary metaphor; if you need a comparison, take it from chores, animals, weather, or food.\n- Do not state the moral or the joke; let the reader notice it.\n- Do not clean up the grammar — the voice lives in its irregularity.\n\nExample — First-person reasoning — Huck on Providence:\nI set down one time back in the woods, and had a long think about it. I says to myself, if a body can get anything they pray for, why don’t Deacon Winn get back the money he lost on pork? Why can’t the widow get back her silver snuffbox that was stole? Why can’t Miss Watson fat up? No, says I to myself, there ain’t nothing in it. I went and told the widow about it, and she said the thing a body could get by praying for it was “spiritual gifts.”",
  eval_rubric: {
    deterministic: [
      { metric: "mono_syllable_ratio", op: ">=", value: 0.65, weight: 0.15 },
      { metric: "flesch_kincaid_grade", op: "<=", value: 7, weight: 0.15 },
      { metric: "abstract_per_para", op: "<=", value: 1, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "vernacular",
        prompt:
          "Does the prose use first-person American vernacular — contractions, double negatives, frontier idiom — without slipping into standard literary register?",
        weight: 0.25,
      },
      {
        id: "additive-syntax",
        prompt:
          "Are clauses joined by 'and,' 'so,' and 'but' rather than by subordination, in the additive way Huck speaks?",
        weight: 0.2,
      },
      {
        id: "sideways-judgment",
        prompt:
          "Does the moral or the joke arrive sideways — through the gap between the plain tone and the described matter — rather than being stated?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
