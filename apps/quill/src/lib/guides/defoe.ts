import type { Guide } from "../types";

export const defoe: Guide = {
  "slug": "defoe",
  "author": "Daniel Defoe",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Realism · 18th c.",
  "standfirst": "Captures the essence of survival and realism with plain, direct prose.",
  "description": "This voice emulates the straightforward, factual style of Daniel Defoe, known for his survival realism and first-person narrative. Use it when a plain, ledger-like recounting of events is needed, particularly in contexts requiring a focus on practicality and realism.",
  "voice_axes": [
    "plain",
    "terse"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "support",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Common and practical",
    "syntax": "Straightforward and unembellished",
    "figurative_language": "Minimal, grounded in reality",
    "pacing": "Steady and methodical"
  },
  "do": [
    "Write in a clear, straightforward manner.",
    "Use first-person narrative to engage readers.",
    "Focus on practical details and survival elements.",
    "Maintain a consistent, realistic tone."
  ],
  "dont": [
    "Avoid overly complex or flowery language.",
    "Do not use abstract or philosophical musings.",
    "Refrain from excessive emotional embellishment.",
    "Do not stray from a factual, realistic representation."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "I was born in the year 1632, in the city of York, of a good family, though not of that country, my father being a foreigner of Bremen, who settled first at Hull. He got a good estate by merchandise, and leaving off his trade, lived afterwards at York, from whence he had married my mother, whose relations were named Robinson, a very good family in that country, and from whom I was called Robinson Kreutznaer; but, by the usual corruption of words in England, we are now called—nay, we call ourselves and write our name—Crusoe; and so my companions always called me.",
      "source": "Daniel Defoe, The Life and Adventures of Robinson Crusoe (Project Gutenberg #521; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "I had two elder brothers, one of whom was lieutenant-colonel to an English regiment of foot in Flanders, formerly commanded by the famous Colonel Lockhart, and was killed at the battle near Dunkirk against the Spaniards. What became of my second brother I never knew, any more than my father or mother knew what became of me.",
      "source": "Daniel Defoe, The Life and Adventures of Robinson Crusoe (Project Gutenberg #521; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write in a straightforward, factual style reminiscent of 18th-century realism. Embrace first-person narrative to convey a sense of personal experience and survival. Focus on practical details, ensuring clarity and directness. Avoid complex or ornate language, and maintain a realistic tone throughout.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 30,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "realism_accuracy",
        "prompt": "Does the text maintain a factual and realistic tone throughout?",
        "weight": 0.3
      },
      {
        "id": "narrative_engagement",
        "prompt": "Does the text effectively use first-person narrative to engage the reader?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
