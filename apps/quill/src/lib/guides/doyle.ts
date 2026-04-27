import type { Guide } from "../types";

export const doyle: Guide = {
  slug: "doyle",
  author: "Arthur Conan Doyle",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Late Victorian",
  standfirst:
    "Watson's first-person narration framing Holmes's clipped, declarative deductions. Concrete physical evidence; dialogue that turns on observation, not assertion.",
  description:
    "Doyle gives us a steady Victorian first-person narrator — Watson — whose sentences are orderly, polite, and a little admiring, and inside that frame he sets Holmes's voice: short declarative sentences, single-word ripostes, demonstrative reasoning from a small physical fact to a confident inference. Description prefers concrete particulars (a parallel cut on a sole, a bulge on a top-hat, a watermark in paper) over feeling. Dialogue often runs in volleys of one- and two-word lines. Useful when you want copy that walks the reader from observation to conclusion in the open, with Watson's calm and Holmes's clipped certainty.",
  voice_axes: ["plain", "wry"],
  use_cases: ["fiction"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 18, max: 50 },
    vocabulary_register:
      "polite late-Victorian English; concrete forensic nouns (iodoform, nitrate of silver, astrakhan, gasogene); dry technical asides",
    syntax:
      "Watson narrates in measured, well-formed sentences with semicolons; Holmes speaks in short declaratives, frequent imperatives ('Read it aloud.'), and one- or two-word answers ('Forgery.', 'Stolen.', 'Imitated.'); dialogue volleys in quick exchange",
    figurative_language:
      "almost no metaphor; the rhetorical move is observation-to-inference, framed as 'You see, but you do not observe.'",
    pacing:
      "calm exposition by Watson, then brisk dialogue scenes that accelerate into clipped exchanges of single-word lines",
  },
  do: [
    "Frame the scene through a steady first-person narrator before letting the deduction-voice speak.",
    "Build deductions out of concrete physical particulars — a watermark, a cuff, a stain — and reason from them in the open.",
    "Let the analytic voice answer in single words or short declaratives; use dialogue volleys to accelerate.",
    "Keep the register polite and Victorian, even when the verdict is sharp.",
  ],
  dont: [
    "Do not have the analytic character announce conclusions without showing the small fact they hang on.",
    "Do not soften Holmes's lines into long sentences — his power is brevity inside Watson's longer prose.",
    "Do not lean on metaphor; reach for the forensic noun instead.",
    "Do not break the first-person frame — the reader stands beside Watson, not above him.",
  ],
  exemplars: [
    {
      label: "Watson's frame around Holmes's clipped reasoning",
      content:
        "“It is simplicity itself,” said he; “my eyes tell me that on the inside of your left shoe, just where the firelight strikes it, the leather is scored by six almost parallel cuts. Obviously they have been caused by someone who has very carelessly scraped round the edges of the sole in order to remove crusted mud from it. Hence, you see, my double deduction that you had been out in vile weather, and that you had a particularly malignant boot-slitting specimen of the London slavey.”",
      source:
        "Arthur Conan Doyle, The Adventures of Sherlock Holmes (Project Gutenberg #1661; public domain)",
      is_generated: false,
    },
    {
      label: "Volley of one-word ripostes",
      content:
        "“There is the writing.”\n\n“Pooh, pooh! Forgery.”\n\n“My private note-paper.”\n\n“Stolen.”\n\n“My own seal.”\n\n“Imitated.”\n\n“My photograph.”\n\n“Bought.”\n\n“We were both in the photograph.”\n\n“Oh, dear! That is very bad! Your Majesty has indeed committed an indiscretion.”",
      source:
        "Arthur Conan Doyle, The Adventures of Sherlock Holmes (Project Gutenberg #1661; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Arthur Conan Doyle's Sherlock Holmes stories. Set up scenes through a measured Victorian first-person narrator, then let an analytic second voice speak in short declaratives and one- or two-word answers. Build deductions in the open, naming the small physical fact — a stain, a watermark, a cuff, a parallel cut — before stating the inference. Keep the register polite and a little dry; avoid metaphor in favour of the precise forensic noun. Use dialogue volleys to accelerate when the case is being unpicked. Hold the first-person frame throughout; the reader stands beside the narrator, not above him.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: "<=", value: 22, weight: 0.15 },
      { metric: "adverbs_per_200w", op: "<=", value: 4, weight: 0.1 },
      { metric: "abstract_per_para", op: "<=", value: 2, weight: 0.15 },
    ],
    judge_criteria: [
      {
        id: "watsonian-frame",
        prompt:
          "Is there a steady first-person narrator framing the scene before the analytic voice speaks?",
        weight: 0.2,
      },
      {
        id: "evidence-to-inference",
        prompt:
          "Are deductions built openly from a named physical particular to a confident conclusion?",
        weight: 0.2,
      },
      {
        id: "clipped-dialogue",
        prompt:
          "Does the analytic voice speak in short declaratives and single-word ripostes, with dialogue accelerating into volleys?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
