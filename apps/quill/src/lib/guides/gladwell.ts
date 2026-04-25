import type { Guide } from "../types";

export const gladwell: Guide = {
  "slug": "gladwell",
  "author": "Malcolm Gladwell",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Pop Social Science",
  "standfirst": "Illuminate complex ideas through engaging anecdotes and the rule of three.",
  "description": "This voice unpacks intricate concepts using relatable stories and a structured narrative approach. It's ideal for when you need to make sophisticated ideas accessible to a broad audience. Reach for this voice to captivate readers with storytelling while educating them.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "docs",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 40
    },
    "vocabulary_register": "Conversational yet insightful",
    "syntax": "Complex but clear",
    "figurative_language": "Frequent use of metaphor and analogy",
    "pacing": "Moderate with engaging rhythm"
  },
  "do": [
    "Use anecdotes to illustrate points.",
    "Employ the rule of three for emphasis.",
    "Engage the reader with relatable scenarios.",
    "Simplify complex ideas without losing depth."
  ],
  "dont": [
    "Avoid overly technical jargon.",
    "Do not rely solely on data without context.",
    "Do not overlook the importance of narrative flow.",
    "Avoid a dry or overly academic tone."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Thank you for reaching out about your issue. Let me tell you about a customer who faced a similar challenge and how we resolved it. By understanding their journey, we can better address your needs.",
      "source": "AI-generated in the Malcolm Gladwell style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the story behind the numbers: where data meets narrative.",
      "source": "AI-generated in the Malcolm Gladwell style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write engaging content that uses anecdotes to explain complex ideas. Employ the rule of three to reinforce points and maintain a narrative flow that captivates the reader. Avoid technical jargon and focus on making the content relatable and insightful. Use a conversational tone that balances clarity with depth.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 40,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 15,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "anecdote_usage",
        "prompt": "Does the text effectively use anecdotes to clarify and engage?",
        "weight": 0.3
      },
      {
        "id": "clarity_and_depth",
        "prompt": "Does the text simplify complex ideas while maintaining depth?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
