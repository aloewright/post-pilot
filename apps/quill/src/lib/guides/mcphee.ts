import type { Guide } from "../types";

export const mcphee: Guide = {
  "slug": "mcphee",
  "author": "John McPhee",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "New Journalism · Late-20th c.",
  "standfirst": "Capture complex narratives with clarity and precision.",
  "description": "John McPhee's style is characterized by in-depth exploration of subjects, often weaving intricate details into a coherent narrative. His voice excels in bringing clarity to complex topics, making it ideal for detailed documentation and narrative-driven content.",
  "voice_axes": [
    "lyrical",
    "plain",
    "ornate"
  ],
  "use_cases": [
    "docs",
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Educated and precise",
    "syntax": "Complex and varied",
    "figurative_language": "Sparse and effective",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Integrate detailed observations into the narrative.",
    "Maintain clarity while exploring complex topics.",
    "Use precise language to convey nuanced ideas.",
    "Structure information logically and cohesively."
  ],
  "dont": [
    "Avoid overly simplistic explanations.",
    "Do not rely on excessive figurative language.",
    "Refrain from using colloquial or informal expressions.",
    "Do not ignore the broader context of the subject."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "The system's architecture is layered, each component meticulously designed to ensure seamless integration. At the core, a robust framework supports dynamic scalability, adapting to the demands of real-time data processing.",
      "source": "AI-generated in the John McPhee style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In examining the intricacies of our recent project, it's evident that the team's collaborative efforts have yielded remarkable results. The following outlines key developments and insights gained during the process.",
      "source": "AI-generated in the John McPhee style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with precision and clarity, focusing on the details that reveal the larger narrative. Use complex syntax to explore intricate subjects, while ensuring the overall structure remains coherent. Avoid excessive figurative language, opting instead for precise and effective imagery. Maintain a measured pace, allowing the reader to absorb the depth of information presented.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 40,
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
        "id": "clarity",
        "prompt": "Does the text maintain clarity while handling complex topics?",
        "weight": 0.3
      },
      {
        "id": "structure",
        "prompt": "Is the narrative structure logical and cohesive?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
