import type { Guide } from "../types";

export const tolstoy: Guide = {
  slug: "tolstoy",
  author: "Leo Tolstoy",
  era: "Pre-1900",
  eras: ["Pre-1900"],
  kicker: "Pre-1900 · Russian Realist",
  standfirst:
    "A roving omniscience that reports a room: who said what, who shrugged, whose smile changed which face. The narrator notices everyone — and quietly notices what each person fails to notice about himself.",
  description:
    'Tolstoy in War and Peace narrates a drawing-room as if from a moving camera: dialogue is brisk and tagged, but each tag carries a small physiognomic verdict ("Pierre looked solemnly at his audience over his spectacles," "Prince Andrew\'s eyes were closed, so weary and sleepy did he seem"). Description is plain and physical — height, hands, the tilt of a hat — and judgment is delivered in a clause attached to a gesture rather than in editorial. Useful for narrative copy that wants a fully populated scene, where small physical actions reveal psychology and the narrator\'s verdict rides quietly on top.',
  voice_axes: ["plain", "wry"],
  use_cases: ["narrative", "marketing", "email"],
  copyright_posture: "public-domain",
  voice_spec: {
    sentence_length: { mean: 18, max: 45 },
    vocabulary_register:
      "plain, concrete, mostly Anglo-Saxon in the Maude translation; social titles and rooms (drawing room, hall, footman, princess) carry social weight without commentary",
    syntax:
      'tagged dialogue alternated with one-sentence physical observations; clauses of manner ("smiling and drawing her work nearer to her") attached to speech; occasional free-indirect glide into a character\'s self-account',
    figurative_language:
      "almost none; the figure is the observed gesture itself — a smile that 'said nothing,' a hand kept around a waist 'for a long time, as though embracing'",
    pacing:
      "scenic and conversational; long passages move through a roomful of people, each given one or two physical beats before the camera moves on",
  },
  do: [
    'Tag dialogue with a small physical action that quietly carries the verdict ("smiling joyfully," "shrugging her shoulders").',
    "Move the narrator's eye through a room, giving each person one or two physical beats before passing on.",
    "Use plain, concrete description — height, hands, hat, gait — rather than abstract characterisation.",
    "Slip briefly into a character's self-account (free indirect) so the reader hears how they would explain themselves, then withdraw.",
  ],
  dont: [
    "Do not editorialise about character; let the gesture deliver the judgment.",
    "Do not reach for metaphor; the camera is the instrument, not the figure.",
    "Do not collapse into one consciousness — Tolstoy's narrator sees everyone in the room, including the footmen.",
    "Do not stylise the dialogue; keep speech brisk and idiomatic, with the writing in the tags.",
  ],
  exemplars: [
    {
      label: "Drawing-room scene — gestures carrying verdicts",
      content:
        "Pierre, not knowing whom to answer, looked at them all and smiled. His smile was unlike the half-smile of other people. When he smiled, his grave, even rather gloomy, look was instantaneously replaced by another—a childlike, kindly, even rather silly look, which seemed to ask forgiveness.\n\nThe vicomte who was meeting him for the first time saw clearly that this young Jacobin was not so terrible as his words suggested. All were silent.",
      source:
        "Leo Tolstoy, War and Peace (Project Gutenberg #2600; public domain)",
      is_generated: false,
    },
    {
      label: "The narrator's eye moves through the hall — small physical beats",
      content:
        'Two footmen, the princess\' and his own, stood holding a shawl and a cloak, waiting for the conversation to finish. They listened to the French sentences which to them were meaningless, with an air of understanding but not wishing to appear to do so. The princess as usual spoke smilingly and listened with a laugh.\n\n"I am very glad I did not go to the ambassador\'s," said Prince Hippolyte "—so dull—. It has been a delightful evening, has it not? Delightful!"',
      source:
        "Leo Tolstoy, War and Peace (Project Gutenberg #2600; public domain)",
      is_generated: false,
    },
  ],
  system_prompt:
    "You write in the voice of Leo Tolstoy as he narrates a scene in War and Peace. Move a roving, omniscient eye through a populated room; give each person one or two small physical beats — a smile, a shrug, the hand kept on a waist a moment too long — and let those gestures carry the narrator's verdict. Tag dialogue briskly, but make the tag do quiet work (\"said the princess, drawing up her downy little lip\"). Slip occasionally into a character's self-account so the reader hears how they would explain themselves, then withdraw without editorialising. Keep description plain and concrete — heights, hands, hats, footmen — and avoid metaphor; the observed gesture is the figure. Do not collapse into one consciousness; the narrator sees everyone, including the people in the corner.",
  eval_rubric: {
    deterministic: [
      { metric: "avg_sentence_length", op: ">=", value: 14, weight: 0.1 },
      { metric: "abstract_per_para", op: "<=", value: 2, weight: 0.1 },
      { metric: "type_token_ratio", op: ">=", value: 0.45, weight: 0.1 },
    ],
    judge_criteria: [
      {
        id: "gesture-as-verdict",
        prompt:
          "Do small physical actions attached to dialogue or description carry the narrator's judgment, rather than editorial commentary?",
        weight: 0.25,
      },
      {
        id: "roving-omniscience",
        prompt:
          "Does the narration move through a populated scene, giving multiple people physical beats rather than staying inside one consciousness?",
        weight: 0.2,
      },
      {
        id: "plain-concrete",
        prompt:
          "Is description plain and physical — bodies, clothes, rooms — rather than metaphorical or abstract?",
        weight: 0.2,
      },
    ],
    pass_threshold: 0.8,
  },
  is_official: true,
  curator: "Post Pilot",
  updated_at: "2026-04-25",
};
