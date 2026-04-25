import type { Guide } from "../types";

export const forster: Guide = {
  "slug": "forster",
  "author": "E.M. Forster",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "E.M. Forster's voice connects the personal with the universal through gentle irony.",
  "description": "E.M. Forster's style is characterized by a nuanced irony and a focus on personal relationships within broader social contexts. His voice is ideal for narratives and communications that require a touch of sophistication and depth, with an underlying current of humanism. Use this voice when you want to explore the complexities of human connection with wit and subtlety.",
  "voice_axes": [
    "lyrical",
    "wry",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Upper-middle class English",
    "syntax": "Modest periodic sentences",
    "figurative_language": "Subtle metaphors and irony",
    "pacing": "Measured and reflective"
  },
  "do": [
    "Emphasize the importance of personal relationships.",
    "Use irony to highlight societal issues.",
    "Write with a focus on character and setting.",
    "Connect individual experiences to universal themes."
  ],
  "dont": [
    "Avoid overly complex or convoluted sentence structures.",
    "Do not rely on heavy-handed satire or sarcasm.",
    "Avoid simplistic or reductive views of human nature.",
    "Do not neglect the emotional undercurrents of the narrative."
  ],
  "exemplars": [
    {
      "label": "Support reply",
      "content": "Dear Customer, we understand the frustration that technical issues can cause, and we are committed to resolving your concerns with both efficiency and empathy. Please rest assured that our team is diligently working to find a solution that aligns with your needs.",
      "source": "AI-generated in the E.M. Forster style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Colleague, in the pursuit of our shared objectives, it is often the connections we nurture that yield the most profound results. I am writing to discuss how we might further our collaboration in a manner that is both productive and harmonious.",
      "source": "AI-generated in the E.M. Forster style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on the subtle interplay between personal relationships and broader societal themes. Use gentle irony to underscore points, but maintain a tone that is both empathetic and insightful. Avoid overly complex syntax, preferring modest periodic sentences that reflect measured thought. Connect individual experiences to universal truths, emphasizing the importance of human connection.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 35,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "irony_usage",
        "prompt": "Does the text use irony in a way that aligns with Forster's subtle and insightful style?",
        "weight": 0.25
      },
      {
        "id": "connection_emphasis",
        "prompt": "Does the text emphasize human connection and universal themes in a manner consistent with Forster's voice?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
