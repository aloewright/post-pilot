import type { Guide } from "../types";

export const dostoevsky: Guide = {
  "slug": "dostoevsky",
  "author": "Fyodor Dostoevsky",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Realist · 19th c.",
  "standfirst": "Dive into the complex psychological landscapes with Dostoevsky's intricate voice.",
  "description": "Dostoevsky's writing style is characterized by intense psychological exploration and polyphonic dialogue. Reach for this voice when you need to portray deep existential crises or multifaceted characters in a narrative setting.",
  "voice_axes": [
    "ornate",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "Complex and philosophical",
    "syntax": "Intricate and layered",
    "figurative_language": "Rich metaphors and analogies",
    "pacing": "Varied and dynamic"
  },
  "do": [
    "Explore the psychological depths of your characters.",
    "Use dialogue to reveal conflicting perspectives.",
    "Employ rich, metaphorical language to convey spiritual crises.",
    "Craft sentences that vary in length and complexity."
  ],
  "dont": [
    "Avoid simplistic or superficial characterizations.",
    "Do not shy away from exploring dark or controversial themes.",
    "Refrain from using overly straightforward or plain language.",
    "Don't neglect the use of dialogue to drive the narrative."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "THE POSSESSED, or THE DEVILS A Novel In Three Parts By Fyodor Dostoevsky Translated From The Russian By Constance Garnett CONTENTS PART I. CHAPTER I. INTRODUCTORY CHAPTER II. PRINCE HARRY. MATCHMAKING CHAPTER III. THE SINS OF OTHERS CHAPTER IV. THE CRIPPLE CHAPTER V. THE SUBTLE SERPENT PART II. CHAPTER I. NIGHT CHAPTER II. NIGHT (continued) CHAPTER III. THE DUEL CHAPTER IV. ALL IN EXPECTATION CHAPTER V. ON THE EVE OF THE FETE CHAPTER VI. PYOTR STEPANOVITCH IS BUSY CHAPTER VII. A MEETING CHAPTER VIII. IVAN THE TSAREVITCH CHAPTER IX. A RAID AT STEPAN TROFIMOVITCH’S CHAPTER X. FILIBUSTERS. A FATAL MORNING PART III. CHAPTER I. THE FETE—FIRST PART CHAPTER II. THE END OF THE FETE CHAPTER III. A ROMANCE ENDED CHAPTER IV. THE LAST RESOLUTION CHAPTER V. A WANDERER CHAPTER VI. A BUSY NIGHT CHAPTER VII. STEPAN TROFIMOVITCH’S LAST WANDERING CHAPTER VIII. CONCLUSION",
      "source": "Fyodor Dostoevsky, Index of the Project Gutenberg Works of Fyodor Dostoevsky (Project Gutenberg #59196; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "WHITE NIGHTS AND OTHER STORIES By Fyodor Dostoevsky CONTENTS page White Nights 1 Notes from Underground— part i. underground 50 part ii. à propos of the wet snow 81 A Faint Heart 156 A Christmas Tree and a Wedding 200 Polzunkov 208 A Little Hero 223 Mr. Prohartchin 258",
      "source": "Fyodor Dostoevsky, Index of the Project Gutenberg Works of Fyodor Dostoevsky (Project Gutenberg #59196; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with a focus on deep psychological and spiritual exploration. Use intricate, polyphonic dialogue to reveal characters' inner conflicts and existential dilemmas. Craft richly metaphorical language to convey the intensity of emotional and moral crises. Avoid simplistic narratives and maintain a dynamic pacing in your prose.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 50,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "psychological_depth",
        "prompt": "Does the text explore deep psychological themes and conflicts?",
        "weight": 0.4
      },
      {
        "id": "dialogue_complexity",
        "prompt": "Is the dialogue rich and polyphonic, revealing multiple perspectives?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
