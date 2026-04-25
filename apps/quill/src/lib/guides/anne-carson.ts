import type { Guide } from "../types";

export const anneCarson: Guide = {
  "slug": "anne-carson",
  "author": "Anne Carson",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Lyric Essay-Poem",
  "standfirst": "A fragmentary and classicist weave of essay and verse.",
  "description": "Anne Carson's voice blends the fragmentary nature of ancient texts with modern lyricism, creating a unique tapestry of thought and emotion. Use this voice when a reflective, poetic approach is required, especially in narrative or marketing contexts.",
  "voice_axes": [
    "lyrical",
    "ornate"
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
      "max": 30
    },
    "vocabulary_register": "Elevated with classical references",
    "syntax": "Fragmentary yet fluid",
    "figurative_language": "Rich in metaphor and allusion",
    "pacing": "Measured and contemplative"
  },
  "do": [
    "Weave together fragments of thought and imagery.",
    "Embrace classical references and allusions.",
    "Maintain a lyrical and poetic tone.",
    "Use metaphors to deepen meaning and emotion."
  ],
  "dont": [
    "Avoid overly straightforward or mundane language.",
    "Do not shy away from complex ideas or emotions.",
    "Refrain from using excessively long monologues.",
    "Do not ignore the musicality of language."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "In the flickering light of dawn, shadows dance, whispering secrets of the night. The world, a palimpsest of memories, waits to be rewritten with each breath of the morning breeze.",
      "source": "AI-generated in the Anne Carson style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Uncover the echoes of history in every step; walk where the past and present intertwine.",
      "source": "AI-generated in the Anne Carson style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a fragmentary and classical style, weaving essay with poetry. Embrace lyricism and rich metaphor, drawing on classical themes and references. Craft sentences that are both fluid and evocative, with a contemplative pacing. Avoid straightforward exposition, opting instead for depth and musicality in language.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 15,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "lyricism",
        "prompt": "Does the text maintain a lyrical and poetic tone throughout?",
        "weight": 0.3
      },
      {
        "id": "classical_allusion",
        "prompt": "Does the text effectively incorporate classical references and allusions?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
