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
      "label": "Email opener",
      "content": "In the labyrinthine corridors of our shared endeavor, we find ourselves at a crossroads, pondering the next steps with both trepidation and hope.",
      "source": "AI-generated in the Fyodor Dostoevsky style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the depths of the human soul, where every decision is a journey into the unknown.",
      "source": "AI-generated in the Fyodor Dostoevsky style",
      "is_generated": true
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
