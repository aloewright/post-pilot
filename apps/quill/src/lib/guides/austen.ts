import type { Guide } from "../types";

export const austen: Guide = {
  slug: "austen",
  author: "Jane Austen",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Regency",
  standfirst:
    "Free indirect discourse. Wry social observation. Moral clarity delivered by a narrator who refuses to raise her voice.",
  description:
    "Austen writes as though every sentence has already heard itself. Her narrator observes the small vanities of ordinary people without condescension and without sentiment. Useful for support and marketing voices that want warmth with a hint of wit.",
  voice_axes: ["wry", "lyrical"],
  use_cases: ["support", "email", "marketing"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 22, max: 40 },
    vocabulary_register: "formal but plainspoken; polite register, never stiff",
    syntax: "balanced clauses, parallel structure, occasional parenthetical",
    figurative_language: "sparing; drawn from social life, not nature",
    pacing: "measured; every qualification earns its place",
  },
  do: [
    "Let the narrator notice what the subject cannot see about themselves.",
    "Use parallel structure to set up gentle irony.",
    "Keep register polite even when judgment is sharp.",
    "Treat opinions as if they were facts, and facts as if they were opinions.",
  ],
  dont: [
    "Do not sneer. Austen never sneers.",
    "Avoid modern slang and contractions in narration.",
    "Do not over-explain the joke; the reader should catch it.",
  ],
  exemplars: [
    {
      "label": "From the work",
      "content": "_I suppose, however, that the majority of at least competent votes would, all things considered, be divided between_ Emma _and the present book; and perhaps the vulgar verdict (if indeed a fondness for Miss Austen be not of itself a patent of exemption from any possible charge of vulgarity) would go for_ Emma. _It is the larger, the more varied, the more popular; the author had by the time of its composition seen rather more of the world, and had improved her general, though not her most peculiar and characteristic dialogue; such figures as Miss Bates, as the Eltons, cannot but unite the suffrages of everybody. On the other hand, I, for my part, declare for_ Pride and Prejudice _unhesitatingly. It seems to me the most perfect, the most characteristic, the most eminently quintessential of its author’s works; and for this contention in such narrow space as is permitted to me, I propose here to show cause._",
      "source": "Jane Austen, Pride and Prejudice (Project Gutenberg #1342; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "_I think, however, though the thought will doubtless seem heretical to more than one school of critics, that construction is not the highest merit, the choicest gift, of the novelist. It sets off his other gifts and graces most advantageously to the critical eye; and the want of it will sometimes mar those graces--appreciably, though not quite consciously--to eyes by no means ultra-critical. But a very badly-built novel which excelled in pathetic or humorous character, or which displayed consummate command of dialogue--perhaps the rarest of all faculties--would be an infinitely better thing than a faultless plot acted and told by puppets with pebbles in their mouths. And despite the ability which Miss Austen has shown in working out the story, I for one should put_ Pride and Prejudice _far lower if it did not contain what seem to me the very masterpieces of Miss Austen’s humour and of her faculty of character-creation--masterpieces who may indeed admit John Thorpe, the Eltons, Mrs. Norris, and one or two others to their company, but who, in one instance certainly, and perhaps in others, are still superior to them._",
      "source": "Jane Austen, Pride and Prejudice (Project Gutenberg #1342; public domain)",
      "is_generated": false
    }
  ],
  system_prompt:
    "You write in the voice of Jane Austen. Use free indirect discourse — let the narrator lean lightly into the subject's own way of seeing. Prefer balanced clauses and parallel structure. Keep the register polite even when the judgment is sharp. Use parenthetical qualifications sparingly but well. Avoid modern slang and contractions in narration. Never sneer. The irony should always be available to the reader but never pointed at.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 18,
        weight: 0.1,
      },
      { metric: "type_token_ratio", op: ">=", value: 0.55, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "free-indirect",
        prompt:
          "Does the narrator slip into the subject's own idiom without quoting them?",
        weight: 0.25,
      },
      {
        id: "polite-irony",
        prompt: "Is irony delivered politely rather than at the reader?",
        weight: 0.25,
      },
      {
        id: "balance",
        prompt:
          "Are the sentences balanced and parallel in a way that echoes social decorum?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.88,
      updated_at: "2026-04-20",
    },
    {
      provider: "openai",
      model: "gpt-5",
      match: 0.85,
      updated_at: "2026-04-20",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-16",
};
