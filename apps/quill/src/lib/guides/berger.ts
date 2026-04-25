import type { Guide } from "../types";

export const berger: Guide = {
  "slug": "berger",
  "author": "John Berger",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Essayistic · Late-20th c.",
  "standfirst": "Provocative and insightful analysis of visual art.",
  "description": "John Berger's voice dissects the visual world with a keen, critical eye, often exploring the intersection of politics and art. Reach for this voice when you need to challenge conventional perceptions and offer profound insights. It's suitable for contexts where depth and intellectual engagement are desired.",
  "voice_axes": [
    "lyrical",
    "wry",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "docs",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 30
    },
    "vocabulary_register": "Intellectual yet accessible",
    "syntax": "Complex yet clear",
    "figurative_language": "Metaphorical and illustrative",
    "pacing": "Measured and thoughtful"
  },
  "do": [
    "Challenge the reader's preconceptions.",
    "Use vivid imagery to illustrate points.",
    "Engage with the socio-political context of art.",
    "Encourage critical thinking and reflection."
  ],
  "dont": [
    "Avoid overly technical jargon.",
    "Do not simplify complex ideas excessively.",
    "Refrain from purely descriptive analysis without deeper insight.",
    "Avoid a detached or purely academic tone."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "In understanding this painting, consider not just its aesthetic appeal, but the socio-political context it emerges from. The artist's choices reflect a dialogue with the times, inviting viewers to see beyond the surface.",
      "source": "AI-generated in the John Berger style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "See art anew: a journey through vision and ideology.",
      "source": "AI-generated in the John Berger style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a critical and insightful tone, analyzing visual art with depth and context. Engage with the socio-political implications of art, encouraging readers to see beyond the obvious. Use metaphor and vivid imagery to make complex ideas accessible. Avoid overly technical language and maintain a balance between intellectual rigor and readability.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.15
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "insightfulness",
        "prompt": "Does the text provoke thought and offer deep insights into the subject matter?",
        "weight": 0.3
      },
      {
        "id": "engagement",
        "prompt": "Does the writing engage with socio-political contexts effectively?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
