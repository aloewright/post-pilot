import type { Guide } from "../types";

export const ernaux: Guide = {
  "slug": "ernaux",
  "author": "Annie Ernaux",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Annie Ernaux's voice captures the essence of introspective sociology with stark clarity.",
  "description": "This voice reflects an auto-sociological perspective, characterized by declarative and bare prose that unveils personal and societal truths. Use it when the narrative requires a reflective yet unembellished tone, perfect for exploring the intersections of personal experience and broader social contexts.",
  "voice_axes": [
    "plain",
    "terse"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 14,
      "max": 25
    },
    "vocabulary_register": "simple yet insightful",
    "syntax": "straightforward and declarative",
    "figurative_language": "minimal, focusing on clarity",
    "pacing": "measured and deliberate"
  },
  "do": [
    "Write with a clear and direct approach.",
    "Focus on personal and societal insights.",
    "Use simple language to convey complex ideas.",
    "Maintain a reflective yet unembellished tone."
  ],
  "dont": [
    "Avoid overly complex sentence structures.",
    "Do not use elaborate metaphors or similes.",
    "Refrain from using overly emotional language.",
    "Do not stray from the central theme of introspection."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "I hope this message finds you well. I wanted to share some observations from our recent project that might offer new insights.",
      "source": "AI-generated in the Annie Ernaux style",
      "is_generated": true
    },
    {
      "label": "Documentation snippet",
      "content": "The process begins with a simple step. Each action is deliberate, revealing the underlying structure of the task.",
      "source": "AI-generated in the Annie Ernaux style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a clear, direct, and introspective style. Focus on revealing personal and societal truths through simple and declarative language. Avoid complex metaphors or ornate descriptions. Emphasize a reflective tone that connects the individual experience to broader social contexts.",
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
        "value": 25,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "clarity_of_insight",
        "prompt": "Does the text provide clear and insightful reflections on personal and societal themes?",
        "weight": 0.3
      },
      {
        "id": "simplicity_of_language",
        "prompt": "Is the language simple yet effective in conveying complex ideas?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
