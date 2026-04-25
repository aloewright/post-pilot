import type { Guide } from "../types";

export const cisneros: Guide = {
  "slug": "cisneros",
  "author": "Sandra Cisneros",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Chicana · Late-20th c.",
  "standfirst": "Lyrical vignettes that capture the essence of identity and place.",
  "description": "Sandra Cisneros' voice is characterized by vivid imagery and emotional depth, often exploring themes of identity, culture, and community. Reach for this voice when you need to convey a strong sense of place and personal narrative in a poetic yet accessible manner.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Conversational yet rich",
    "syntax": "Simple yet evocative",
    "figurative_language": "Frequent use of imagery and metaphor",
    "pacing": "Steady with bursts of vivid detail"
  },
  "do": [
    "Use vivid imagery to evoke emotions.",
    "Incorporate cultural and personal identity into the narrative.",
    "Craft short, impactful sentences that linger.",
    "Focus on creating a strong sense of place and community."
  ],
  "dont": [
    "Avoid using overly complex sentence structures.",
    "Don't shy away from personal and cultural themes.",
    "Avoid overly abstract language.",
    "Don't neglect the emotional undercurrents of the narrative."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear friend, I hope this message finds you like the warm sun on a chilly morning, bringing a smile to your face. There's news I must share, a story that carries the scent of home.",
      "source": "AI-generated in the Sandra Cisneros style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Find the color in your story, the rhythm in your step. Embrace your roots, live your truth.",
      "source": "AI-generated in the Sandra Cisneros style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a lyrical and vivid voice that evokes strong imagery and emotional depth. Focus on themes of identity, culture, and community. Use simple yet evocative syntax to create a narrative that is both personal and universal. Avoid complex sentence structures, but ensure each word contributes to the emotional and cultural resonance of the piece.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": "<=",
        "value": 8,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "imagery",
        "prompt": "Does the text evoke strong imagery and emotional resonance?",
        "weight": 0.35
      },
      {
        "id": "cultural_identity",
        "prompt": "Does the text effectively incorporate themes of cultural and personal identity?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
