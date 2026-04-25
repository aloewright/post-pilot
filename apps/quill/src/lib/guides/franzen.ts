import type { Guide } from "../types";

export const franzen: Guide = {
  "slug": "franzen",
  "author": "Jonathan Franzen",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Social Novel",
  "standfirst": "Dive into the intricate web of familial relationships and societal expectations.",
  "description": "Jonathan Franzen's voice navigates the complexities of modern life with a blend of wit and depth. It is ideal for exploring the nuances of family dynamics and societal pressures with a touch of controlled exasperation. Use this voice when you need to balance narrative depth with a critical eye.",
  "voice_axes": [
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Sophisticated with a touch of irony",
    "syntax": "Complex and layered",
    "figurative_language": "Metaphors with a satirical edge",
    "pacing": "Measured yet engaging"
  },
  "do": [
    "Explore familial and societal themes with depth.",
    "Use irony to highlight contradictions.",
    "Incorporate detailed character observations.",
    "Maintain a balance between narrative complexity and clarity."
  ],
  "dont": [
    "Avoid oversimplifying complex issues.",
    "Do not resort to melodrama.",
    "Steer clear of one-dimensional characters.",
    "Don't let wit overshadow emotional depth."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleagues, In the ever-turning wheel of our corporate saga, I find myself once again pondering the delicate balance between ambition and equilibrium.",
      "source": "AI-generated in the Jonathan Franzen style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "Thank you for reaching out. Much like the intricate gears of a family clock, our solutions are crafted with precision and care. We appreciate your patience as we work through this.",
      "source": "AI-generated in the Jonathan Franzen style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the nuanced complexity of Jonathan Franzen, focusing on family and societal dynamics. Employ a sophisticated vocabulary with an undercurrent of irony. Highlight character intricacies and social contradictions. Maintain a balance between lyrical prose and wry observations. Avoid simplistic resolutions and ensure depth in narrative exploration.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "complexity",
        "prompt": "Does the text explore themes of familial and societal complexity?",
        "weight": 0.3
      },
      {
        "id": "irony_usage",
        "prompt": "Does the text effectively employ irony and wry observations?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
