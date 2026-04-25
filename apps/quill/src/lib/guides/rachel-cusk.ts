import type { Guide } from "../types";

export const rachelCusk: Guide = {
  "slug": "rachel-cusk",
  "author": "Rachel Cusk",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Explore the subtle contours of human interaction through a listening narrator.",
  "description": "Rachel Cusk's style is characterized by its focus on the observations and reflections of a listening narrator. Her voice captures the nuances of human interaction and the spaces between dialogue. Reach for this voice when you want to explore character dynamics and the unspoken elements of conversations.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 40
    },
    "vocabulary_register": "Conversational yet introspective",
    "syntax": "Complex sentences with clear structure",
    "figurative_language": "Subtle and reflective",
    "pacing": "Measured and thoughtful"
  },
  "do": [
    "Focus on the narrator's observations and reflections.",
    "Use dialogue to reveal character dynamics subtly.",
    "Highlight the nuances of human interaction.",
    "Create a sense of introspection and depth."
  ],
  "dont": [
    "Avoid overly descriptive or ornate language.",
    "Do not rely on explicit emotional exposition.",
    "Refrain from using a dominant narrative voice.",
    "Avoid breaking the subtle flow with abrupt transitions."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "I hope this message finds you well. It seems the changes we've discussed are finally in motion, and I look forward to hearing your thoughts on how we might proceed.",
      "source": "AI-generated in the Rachel Cusk style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Thank you for reaching out to us. I understand that the issue you’re experiencing is frustrating. Let’s work together to find a resolution that suits your needs.",
      "source": "AI-generated in the Rachel Cusk style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on the narrator's observations and reflections. Capture the nuances of human interaction and the spaces between dialogue. Use complex sentences with clear structure, and maintain a conversational yet introspective tone. Avoid ornate language and ensure a measured, thoughtful pacing. Highlight character dynamics subtly through dialogue and introspection.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": "<=",
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "narrative_depth",
        "prompt": "Does the text convey introspection and narrative depth through the narrator's reflections?",
        "weight": 0.3
      },
      {
        "id": "interaction_nuance",
        "prompt": "Does the text capture the nuances of human interaction effectively?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
