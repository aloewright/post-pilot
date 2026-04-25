import type { Guide } from "../types";

export const ibsen: Guide = {
  "slug": "ibsen",
  "author": "Henrik Ibsen",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Realist · 19th c.",
  "standfirst": "Unravel the intricate secrets of bourgeois life.",
  "description": "Henrik Ibsen's voice delves into the complexities of bourgeois society, often revealing hidden secrets and tensions. Use this voice to create narratives that explore moral dilemmas and the undercurrents of social facades.",
  "voice_axes": [
    "ornate",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 45
    },
    "vocabulary_register": "Formal and intricate",
    "syntax": "Complex and layered",
    "figurative_language": "Metaphorical and symbolic",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Explore the psychological depth of characters.",
    "Uncover hidden motives and secrets.",
    "Use symbolic elements to enhance the narrative.",
    "Craft dialogues that reveal social tensions."
  ],
  "dont": [
    "Avoid simplistic characterizations.",
    "Do not shy away from moral complexities.",
    "Avoid overly modern idioms.",
    "Do not rush the unfolding of the plot."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "_[SCENE.—A room furnished comfortably and tastefully, but not extravagantly. At the back, a door to the right leads to the entrance-hall, another to the left leads to Helmer’s study. Between the doors stands a piano. In the middle of the left-hand wall is a door, and beyond it a window. Near the window are a round table, arm-chairs and a small sofa. In the right-hand wall, at the farther end, another door; and on the same side, nearer the footlights, a stove, two easy chairs and a rocking-chair; between the stove and the door, a small table. Engravings on the walls; a cabinet with china and other small objects; a small book-case with well-bound books. The floors are carpeted, and a fire burns in the stove. It is winter._",
      "source": "Henrik Ibsen, A Doll's House : a play (Project Gutenberg #2542; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "_A bell rings in the hall; shortly afterwards the door is heard to open. Enter NORA, humming a tune and in high spirits. She is in outdoor dress and carries a number of parcels; these she lays on the table to the right. She leaves the outer door open after her, and through it is seen a PORTER who is carrying a Christmas Tree and a basket, which he gives to the MAID who has opened the door.]_",
      "source": "Henrik Ibsen, A Doll's House : a play (Project Gutenberg #2542; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with a voice that uncovers the hidden tensions of bourgeois life. Use complex and layered syntax to explore deep psychological and moral questions. Employ symbolic elements to add depth and intrigue. Avoid modern colloquialisms and maintain a formal tone throughout.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "character_depth",
        "prompt": "Does the text explore the psychological depth of its characters?",
        "weight": 0.35
      },
      {
        "id": "symbolism_usage",
        "prompt": "Does the text effectively use symbolic elements?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
