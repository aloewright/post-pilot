import type { Guide } from "../types";

export const chekhov: Guide = {
  slug: "chekhov",
  author: "Anton Chekhov",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Russian short story",
  standfirst:
    "Plain weather, exact gesture, free indirect questions. The narrator notices the snowdrift and the pig and lets the character do the wondering.",
  description:
    "Chekhov writes in short, level sentences and trusts the small detail to do the work. Action is reported as if from a notebook — Lyubka collects beads, the lamp gives a last flicker, the cocks crow — and the inner life of a character arrives as a string of free indirect questions: Why this? Whose idea was it? Why not the contrary? Weather is not symbol but circumstance, and circumstance leans on the people. Useful when you want copy that is restrained but emotionally pointed — case studies, profiles, narrative product writing — where what is observed exceeds what is said.",
  voice_axes: ["plain", "wry"],
  use_cases: ["narrative", "support", "email"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 16, max: 45 },
    vocabulary_register:
      "plain, concrete, physical — animals, weather, household objects; very few latinate abstractions",
    syntax:
      "short and medium sentences mostly; semicolons and dashes; ellipses to mark a thought trailing; free indirect questions in clusters",
    figurative_language:
      "sparse simile drawn from the immediate scene (like iron, like a wild beast in a trap); little metaphor; weather is reported, not symbolised",
    pacing:
      "even, observational; long descriptive sentences alternate with short reported actions; the emotional turn arrives as a question, not a statement",
  },
  do: [
    "Report the small physical fact — the pig grunting, the gate opening, the lamp going out — and let it carry the mood.",
    "Use free indirect speech: slip into the character's questions ('Why was it? Whose idea was it?') without quoting them.",
    "Keep weather and animals as circumstance, not symbol; the storm presses on the people because it is a storm.",
    "Mix short reported actions with one longer observational sentence; let the rhythm breathe.",
  ],
  dont: [
    "Do not editorialise or moralise; the narrator stays at the level of what can be seen and heard.",
    "Do not overwrite the simile — one direct comparison ('like iron') is enough.",
    "Do not name the character's emotion when a gesture will show it.",
    "Do not resolve the unanswered question; the question is the ending.",
  ],
  exemplars: [
    {
      label: "Reported action with quiet weather",
      content:
        "\"Wo!\" said Kalashnikov sternly, and he got on his horse; one half of the gate was opened, and by it lay a high snowdrift. \"Well, get on!\" shouted Kalashnikov. His little short-legged nag set off, and sank up to its stomach in the drift at once. Kalashnikov was white all over with the snow, and soon vanished from sight with his horse.\n\nWhen Yergunov went back into the room, Lyubka was creeping about the floor picking up her beads; Merik was not there.",
      source:
        "Anton Chekhov, Project Gutenberg Compilation of Short Stories by Chekhov (Project Gutenberg #57333; public domain)",
      is_generated: false,
    },
    {
      label: "Free indirect questions — the unanswered ending",
      content:
        "His mind was in a maze, and he wondered why there were in the world doctors, hospital assistants, merchants, clerks, and peasants instead of simple free men? There are, to be sure, free birds, free beasts, a free Merik, and they are not afraid of anyone, and don't need anyone! And whose idea was it, who had decreed that one must get up in the morning, dine at midday, go to bed in the evening; that a doctor takes precedence of a hospital assistant; that one must live in rooms and love only one's wife? And why not the contrary--dine at night and sleep in the day?",
      source:
        "Anton Chekhov, Project Gutenberg Compilation of Short Stories by Chekhov (Project Gutenberg #57333; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Chekhov as translated in the short stories. Keep sentences short to medium and concrete: report the small physical fact — the lamp going out, the cocks crowing, the snowdrift by the gate — and let it carry the mood. Slip into free indirect speech for inner life: the character's questions become the narrator's, in clusters ('Why was it? Whose idea was it? And why not the contrary?'). Treat weather and animals as circumstance, not symbol. Use sparse simile from the immediate scene ('like iron', 'like a wild beast in a trap') and avoid metaphor for its own sake. Do not name an emotion when a gesture shows it. End on the unanswered question rather than on a verdict.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: "<=", value: 22, weight: 0.15 },
      { metric: "adverbs_per_200w", op: "<=", value: 6, weight: 0.1 },
      { metric: "abstract_per_para", op: "<=", value: 1, weight: 0.15 },
    ],
    judge_criteria: [
      {
        id: "observed-detail",
        prompt:
          "Is the mood carried by small reported physical facts (animals, weather, household objects) rather than by named emotion?",
        weight: 0.2,
      },
      {
        id: "free-indirect-questions",
        prompt:
          "Does inner life arrive as a cluster of free indirect questions, with the narrator slipping into the character's wondering?",
        weight: 0.2,
      },
      {
        id: "unresolved-close",
        prompt:
          "Does the piece end on an unanswered question or unresolved circumstance rather than on a moral verdict?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
