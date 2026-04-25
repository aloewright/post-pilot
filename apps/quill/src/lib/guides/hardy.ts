import type { Guide } from "../types";

export const hardy: Guide = {
  slug: "hardy",
  author: "Thomas Hardy",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Wessex",
  standfirst:
    "A geological narrator. The character is small; the landscape and the centuries are large. Dialect carries the speech, fatalism carries the frame.",
  description:
    'Hardy zooms out. A girl\'s small grief is set against "history in time" and "some immense sad soul, conterminous with the universe in space". Place names (Marlott, Stourcastle, Bulbarrow) and topography do as much work as character description. Dialogue is rendered in unsoftened Dorset dialect. The narrator is a pessimist with a vocabulary of fate and dwindling — "blighted", "shiftless", "funeral train" — and is willing to be openly bitter about "Nature\'s holy plan". Useful when you want copy that locates a small event inside a vast frame and does not pretend the frame is kind.',
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["narrative", "marketing"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 26, max: 70 },
    vocabulary_register:
      "topographical and slightly archaic narration (conterminous, sylvan, primaeval) braided with unsoftened Dorset dialect ('Bain't you glad', 'a mampus of volk')",
    syntax:
      "long sentences that locate a person against a landscape; semicolons that bridge the small and the vast; sudden short sentences for a hard fact",
    figurative_language:
      'cosmic similes ("like a weaver\'s shuttle", "the apples on our stubbard-tree"); imagery of fate, blight, and weight',
    pacing:
      "wide-to-close — establishes the hill, the village, the centuries, then the body in the lane",
  },
  do: [
    "Place a person against a landscape and a timescale before letting them speak.",
    "Render dialect speakers in their own spelling, even at the cost of friction for the reader.",
    'Use one short, hard sentence to deliver a fact ("Prince was killed!", "Tess looked alarmed.") after a long descriptive build.',
    "Reach for cosmic or geological scale when a small thing happens — the disproportion is the point.",
  ],
  dont: [
    "Do not console; the narrator's tone toward fate is bitter, not consoling.",
    "Do not translate or normalise dialect.",
    "Do not let the human action stand alone — anchor it to the road, the hill, the hour, the season.",
    "Do not euphemise blight, decrepitude, or death; the words go in plainly.",
  ],
  exemplars: [
    {
      label: "Cosmic frame around a small grief",
      content:
        "With no longer a companion to distract her, Tess fell more deeply into reverie than ever, her back leaning against the hives. The mute procession past her shoulders of trees and hedges became attached to fantastic scenes outside reality, and the occasional heave of the wind became the sigh of some immense sad soul, conterminous with the universe in space, and with history in time.",
      source:
        "Thomas Hardy, Tess of the d'Urbervilles (Project Gutenberg #110; public domain)",
      is_generated: false,
    },
    {
      label: "Unsoftened Dorset dialect carrying a plot point",
      content:
        "“That wer all a part of the larry! We’ve been found to be the greatest gentlefolk in the whole county—reaching all back long before Oliver Grumble’s time—to the days of the Pagan Turks—with monuments, and vaults, and crests, and ’scutcheons, and the Lord knows what all. In Saint Charles’s days we was made Knights o’ the Royal Oak, our real name being d’Urberville!... Don’t that make your bosom plim?”",
      source:
        "Thomas Hardy, Tess of the d'Urbervilles (Project Gutenberg #110; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Thomas Hardy's narrator in Tess of the d'Urbervilles. Locate every human moment against a landscape and a timescale — the hill, the road, the hour, the centuries — before letting the person speak. Use long sentences that bridge the small body and the vast frame, then drop in a short, hard sentence when a fact has to land. Reach for cosmic or geological similes when the local event is small; the disproportion is the meaning. When dialect speakers appear, render them in their own Dorset spelling without translation. Keep words like 'blighted', 'shiftless', 'decrepitude' plain on the page. Do not console the reader; the narrator's view of fate is bitter and exact.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 20, weight: 0.15 },
      { metric: "max_sentence_length", op: ">=", value: 45, weight: 0.1 },
      { metric: "abstract_per_para", op: ">=", value: 1, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "scale-disproportion",
        prompt:
          "Is a small human moment placed against a much larger frame — landscape, history, cosmos — within the same passage?",
        weight: 0.2,
      },
      {
        id: "dialect-fidelity",
        prompt:
          "When informal speakers appear, is their dialect rendered in their own spelling rather than smoothed into standard English?",
        weight: 0.2,
      },
      {
        id: "fatalist-diction",
        prompt:
          "Does the narrator's diction carry the weight of fate and dwindling without slipping into consolation?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
