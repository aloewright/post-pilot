import type { Guide } from "../types";

export const ralphEllison: Guide = {
  slug: "ralph-ellison",
  author: "Ralph Ellison",
  era: "Mid-20th",
  eras: ["Mid-20th"],
  kicker: "Mid-20th c. · American novelist",
  standfirst:
    "High-modernist sentences shaped by jazz. Allegorical doubling underneath naturalist surfaces.",
  description:
    "Ellison's prose carries the syncopation of jazz inside long modernist periods — phrases that solo, double back, and resolve on a dissonant chord. He writes naturalist scenes that turn allegorical without warning: a paint factory becomes a parable, a yam on a Harlem corner becomes an ars poetica. Useful when you want literary prose that swings, that thinks in symbols without losing the body, and that holds American ironies open at full volume.",
  voice_axes: ["lyrical", "ornate"],
  use_cases: ["fiction"],
  copyright_posture: "voice-inspired",
  voice_spec: {
    sentence_length: { mean: 24, max: 80 },
    vocabulary_register:
      "literary and capacious; jazz idiom, folklore, and high-modernist abstraction all admitted",
    syntax:
      "long subordinated periods with embedded riffs; parenthetical asides that solo before returning to the line; sudden short declaratives for stop-time",
    figurative_language:
      "allegory rising out of naturalist detail; dream-logic doublings; recurring symbolic objects (light, mask, mirror, paint, blood)",
    pacing:
      "improvisatory — the sentence as solo, with set-up, riff, return, and resolution; rhythm carries the meaning",
  },
  do: [
    "Build long sentences that solo: state a phrase, double back, modulate, resolve.",
    "Let naturalist scenes tip into allegory without announcing the turn.",
    "Use recurring symbolic objects (mask, mirror, light, paint) as a leitmotif across the passage.",
    "Hold contradiction open at full volume — irony is structural, not ornamental.",
    "Drop in a stop-time short declarative when the riff has reached its peak.",
  ],
  dont: [
    "Do not flatten the sentence into a single rhythmic unit; the music needs change-ups.",
    "Do not gloss the allegory; let the symbol stay porous.",
    "Do not erase the body for the sake of the idea — the prose stays sensory.",
    "Do not soften American ironies into resolution; let them ring.",
  ],
  exemplars: [
    {
      label: "Prologue — Invisible Man",
      content:
        "I am an invisible man. No, I am not a spook like those who haunted Edgar Allan Poe; nor am I one of your Hollywood-movie ectoplasms. I am a man of substance, of flesh and bone, fiber and liquids — and I might even be said to possess a mind. I am invisible, understand, simply because people refuse to see me.",
      source: "Invisible Man (1952)",
      is_generated: false,
    },
    {
      label: "Yam on a Harlem street — Invisible Man",
      content:
        "I stopped as though struck. Walking with a determined stride, I had been so engrossed in my thoughts that I had failed to see the old man stationed at the curb behind a small cart on which were displayed hot baked yams. I stopped and looked at the cart, drawn by an odor that seemed to issue from within me.",
      source: "Invisible Man (1952)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Ralph Ellison. Build long subordinated sentences that move like a jazz solo: a phrase, a doubling, a riff, a modulation, a resolution. Let naturalist scenes tip into allegory without warning — a paint factory becomes a parable, a yam becomes an ars poetica — and let recurring symbolic objects (mask, mirror, light, paint, blood) accrue as leitmotif across the passage. Admit jazz idiom, folklore, and high-modernist abstraction to the same register; hold their dissonance. Drop a stop-time short declarative when the riff has peaked. Do not gloss the allegory, do not flatten the rhythm, and do not soften American ironies into resolution.",
  eval_rubric: {
    deterministic: [
      {
        metric: "avg_sentence_length",
        op: ">=",
        value: 20,
        weight: 0.15,
      },
      {
        metric: "max_sentence_length",
        op: ">=",
        value: 50,
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
        id: "jazz-rhythm",
        prompt:
          "Do sentences move with set-up / riff / return / resolution rhythm rather than as flat units?",
        weight: 0.2,
      },
      {
        id: "allegory-rising",
        prompt:
          "Do naturalist details tip into symbolic register without announcing the turn?",
        weight: 0.2,
      },
      {
        id: "leitmotif",
        prompt:
          "Do recurring symbolic objects (mask, mirror, light, paint, blood) carry across the passage?",
        weight: 0.15,
      },
      {
        id: "irony-open",
        prompt:
          "Are American contradictions held at full volume rather than softened into resolution?",
        weight: 0.1,
      },
    ],
    pass_threshold: 0.85,
  },
  fidelity: [
    {
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      match: 0.87,
      updated_at: "2026-04-26",
    },
  ],
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-26",
};
