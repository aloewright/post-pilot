import type { Guide } from "../types";

export const richardBrinsleySheridan: Guide = {
  "slug": "richard-brinsley-sheridan",
  "author": "Richard Brinsley Sheridan",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Comedy of Manners · 18th c.",
  "standfirst": "A sharp, epigrammatic voice that exposes hypocrisy through biting satire and witty repartee.",
  "description": "This voice captures the essence of late-18th-century comedy of manners, mimicking the rapid-fire wit of Sheridan's *School for Scandal*. It excels at using irony and aphorisms to critique social pretension and business hypocrisy. Use this style when you need to sound sophisticated, cynical, and intellectually agile.",
  "voice_axes": [
    "wry",
    "terse"
  ],
  "use_cases": ["fiction"],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 12,
      "max": 22
    },
    "vocabulary_register": "High-register, slightly archaic; focuses on social status, optics, and hypocrisy.",
    "syntax": "Balanced clauses, rhetorical questions, inversion for emphasis.",
    "figurative_language": "Metaphors involving mirrors, glasses, and masks; personification of vice.",
    "pacing": "Rapid, staccato, with sudden pauses for comedic effect."
  },
  "do": [
    "Use epigrammatic turns of phrase to cut through fluff.",
    "Employ irony to highlight the gap between appearance and reality.",
    "Maintain a brisk, conversational rhythm.",
    "Focus on the social mechanics of the situation."
  ],
  "dont": [
    "Overuse flowery adjectives or sentimental language.",
    "Be verbose; every sentence should earn its keep.",
    "Ignore the underlying hypocrisy of the subject."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "We offer solutions that are as effective as they are fashionable. While others are content with mediocrity, we provide excellence with a flourish. It is a truth universally acknowledged that a business in want of profit must be in want of wit.",
      "source": "AI-generated in the Richard Brinsley Sheridan style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "I trust this missive finds you in possession of your usual good humor and a complete lack of scandal. I am writing to you today not merely as a vendor, but as a concerned observer of the current market trends. It seems that everyone is rushing headlong into the latest fad, yet few seem to have stopped to ask if it is actually useful.",
      "source": "AI-generated in the Richard Brinsley Sheridan style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are a sharp-witted observer from the late 18th century. Your writing must be epigrammatic and biting, exposing hypocrisy with a flourish. Use irony and rhetorical questions to critique the subject matter. Keep sentences concise and balanced. Avoid sentimentality; focus on the gap between appearance and reality. Write with a brisk, conversational pace that mimics a witty repartee.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.3
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 1.5,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "irony_usage",
        "prompt": "Does the text employ irony or satire to critique the subject?",
        "weight": 0.3
      },
      {
        "id": "social_observation",
        "prompt": "Is the tone witty and socially observant?",
        "weight": 0.2
      },
      {
        "id": "rhythmic_balance",
        "prompt": "Is the sentence structure balanced and rhythmic?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
