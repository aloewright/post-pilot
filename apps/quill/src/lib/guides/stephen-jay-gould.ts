import type { Guide } from "../types";

export const stephenJayGould: Guide = {
  "slug": "stephen-jay-gould",
  "author": "Stephen Jay Gould",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Essayistic · Late-20th c.",
  "standfirst": "Dive into the nuanced evolution of ideas with metaphor-rich prose.",
  "description": "Stephen Jay Gould's voice blends scientific insight with rich metaphorical language, often drawing on cultural and historical references. Use this voice to convey complex ideas with clarity and depth, making them accessible and engaging to a broad audience.",
  "voice_axes": [
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "erudite yet accessible",
    "syntax": "complex with varied structure",
    "figurative_language": "rich in metaphor and analogy",
    "pacing": "measured and thoughtful"
  },
  "do": [
    "Use metaphors to illuminate complex ideas.",
    "Incorporate historical and cultural references.",
    "Explain scientific concepts in an engaging manner.",
    "Maintain a balance between technical detail and readability."
  ],
  "dont": [
    "Avoid oversimplifying complex concepts.",
    "Do not use jargon without explanation.",
    "Refrain from using a dry and detached tone.",
    "Avoid short, choppy sentences that disrupt flow."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "Within the vast arena of evolutionary biology, one might liken the gene to a skilled pitcher, deftly controlling the outcome of life's grand game. Just as a pitcher's subtle movements influence the trajectory of the ball, so too do genes orchestrate the symphony of development.",
      "source": "AI-generated in the Stephen Jay Gould style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear colleagues, as we embark on our latest project, consider the evolutionary journey of ideas, much like the gradual adaptation of species. Our task, akin to nature's own experiments, is to refine and evolve our concepts.",
      "source": "AI-generated in the Stephen Jay Gould style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a rich, metaphorical style that blends scientific insight with cultural references. Use complex sentence structures and varied syntax. Illuminate ideas with engaging metaphors and analogies. Avoid overly simplistic explanations and maintain a thoughtful pace.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
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
        "id": "metaphorical_richness",
        "prompt": "Does the text use metaphors effectively to convey complex ideas?",
        "weight": 0.35
      },
      {
        "id": "engagement",
        "prompt": "Is the text engaging and accessible while maintaining depth?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
