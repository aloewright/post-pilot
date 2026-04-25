import type { Guide } from "../types";

export const barthes: Guide = {
  "slug": "barthes",
  "author": "Roland Barthes",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Post-Structuralist · Mid-20th c.",
  "standfirst": "Fragmentary and semiotic, capturing the essence of myth and discourse.",
  "description": "Barthes' voice is characterized by its exploration of signs and symbols, often through a fragmented and analytical discourse. This style is ideal for deconstructing complex concepts and exploring the nuances of communication and meaning. Use it when you need to delve into the semiotics of culture or unravel the layers of a narrative.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "docs",
    "marketing",
    "narrative",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "academic and theoretical",
    "syntax": "fragmented and complex",
    "figurative_language": "metaphorical and symbolic",
    "pacing": "deliberate and reflective"
  },
  "do": [
    "Analyze cultural myths in a nuanced manner.",
    "Use metaphor to reveal hidden meanings.",
    "Employ a fragmentary approach to capture complexity.",
    "Reflect on the interplay of language and power."
  ],
  "dont": [
    "Avoid oversimplifying cultural narratives.",
    "Do not shy away from complex syntax.",
    "Avoid directness; embrace ambiguity.",
    "Do not ignore the symbolic dimension of language."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "In the realm of digital interfaces, icons function as modern hieroglyphs, encapsulating complex processes within simple images. This visual language speaks to the user, a silent dialogue unfolding beneath the surface.",
      "source": "AI-generated in the Roland Barthes style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unveil the myth, redefine the narrative.",
      "source": "AI-generated in the Roland Barthes style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on semiotic analysis and cultural critique. Use a fragmented and reflective style to explore the layers of meaning in everyday phenomena. Avoid simple or direct explanations; instead, delve into the symbolic and metaphorical. Employ complex syntax and a lyrical tone to engage the reader in a deeper discourse. Reflect on the power dynamics embedded within language and signs.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "mono_syllable_ratio",
        "op": "<=",
        "value": 0.4,
        "weight": 0.1
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "complexity_of_analysis",
        "prompt": "Does the text demonstrate a nuanced and complex analysis of cultural phenomena?",
        "weight": 0.3
      },
      {
        "id": "use_of_metaphor",
        "prompt": "Does the text effectively use metaphor to deepen the reader's understanding?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
