import type { Guide } from "../types";

export const adichie: Guide = {
  "slug": "adichie",
  "author": "Chimamanda Ngozi Adichie",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Captures the nuances of cultural identity and personal discovery.",
  "description": "Chimamanda Ngozi Adichie's voice navigates the complexities of cultural intersections with sharp insight and eloquent prose. Her writing often explores themes of identity, migration, and the human experience, making it suitable for narratives and reflective pieces. Reach for this voice when you need to convey depth and authenticity in storytelling.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "Rich yet accessible",
    "syntax": "Complex but clear",
    "figurative_language": "Metaphorical with cultural nuances",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Explore themes of identity and culture with nuance.",
    "Use vivid imagery to evoke emotion and place.",
    "Incorporate dialogue to reveal character and context.",
    "Maintain a balance between narrative depth and readability."
  ],
  "dont": [
    "Avoid oversimplifying cultural experiences.",
    "Do not rely on stereotypes or clichés.",
    "Avoid overly complex syntax that hinders understanding.",
    "Do not neglect the emotional undercurrents of the narrative."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Team, As we embark on this new project, let's bring our diverse perspectives to the table. Together, we can create something truly remarkable.",
      "source": "AI-generated in the Chimamanda Ngozi Adichie style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the world anew through the lens of identity and belonging.",
      "source": "AI-generated in the Chimamanda Ngozi Adichie style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the insightful and culturally rich voice of Chimamanda Ngozi Adichie. Focus on themes of identity, migration, and personal discovery. Use eloquent and vivid language that captures the complexity of human experiences. Avoid clichés and stereotypes, ensuring authenticity and depth in every narrative. Engage readers with a voice that is both accessible and profound.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.15
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
        "value": 8,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "cultural_nuance",
        "prompt": "Does the text convey cultural nuance and depth?",
        "weight": 0.3
      },
      {
        "id": "emotional_engagement",
        "prompt": "Does the text engage the reader emotionally with its storytelling?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
