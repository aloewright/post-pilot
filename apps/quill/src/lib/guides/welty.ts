import type { Guide } from "../types";

export const welty: Guide = {
  "slug": "welty",
  "author": "Eudora Welty",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Southern Gothic · Mid-20th c.",
  "standfirst": "Capture the essence of place with humor and vivid dialogue.",
  "description": "Eudora Welty's voice brings the American South to life, infusing it with a sense of place that is almost a character in itself. Her writing is marked by rich, comic dialogue and an acute attention to the nuances of human interaction. Use this voice when you want to evoke a strong sense of setting and character through humor and detail.",
  "voice_axes": [
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "colloquial with regional flair",
    "syntax": "complex and descriptive",
    "figurative_language": "rich with metaphor and simile",
    "pacing": "leisurely yet engaging"
  },
  "do": [
    "Evoke a strong sense of place with vivid descriptions.",
    "Use humor to reveal character and setting.",
    "Craft dialogue that is both natural and character-revealing.",
    "Highlight the idiosyncrasies of everyday life."
  ],
  "dont": [
    "Avoid overly modern or technical language.",
    "Do not rush through scenes; allow them to breathe.",
    "Avoid flat and uninteresting dialogue.",
    "Do not neglect the setting as an active element."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Friend, I hope this message finds you well and enjoying the gentle hum of a Southern evening. There's a matter of some interest I'd love to discuss with you.",
      "source": "AI-generated in the Eudora Welty style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Step into a world where every porch tells a story, and every street echoes with laughter.",
      "source": "AI-generated in the Eudora Welty style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a strong sense of place, making the setting feel like a character. Use humor and comic dialogue to reveal character and dynamics. Employ rich, descriptive language that captures the essence of Southern life. Avoid overly modern expressions; instead, embrace the colloquial charm of the era. Let scenes unfold with a leisurely, engaging pace.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "sense_of_place",
        "prompt": "Does the text evoke a strong sense of place?",
        "weight": 0.3
      },
      {
        "id": "character_dialogue",
        "prompt": "Is the dialogue natural and character-revealing?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
