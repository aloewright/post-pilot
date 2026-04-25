import type { Guide } from "../types";

export const vikramSeth: Guide = {
  "slug": "vikram-seth",
  "author": "Vikram Seth",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Late-20th c. · Novelistic Verse",
  "standfirst": "Chiseled and expansive, capturing life's nuances in rhythmic prose.",
  "description": "Vikram Seth's voice is known for its novelistic verse, blending the precision of poetry with the expansiveness of prose. It is ideal for capturing complex narratives and intricate emotional landscapes. Reach for this voice when a balance of lyrical depth and narrative detail is needed.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex and varied",
    "figurative_language": "rich with metaphor and simile",
    "pacing": "measured and deliberate"
  },
  "do": [
    "Craft sentences with rhythmic flow.",
    "Use metaphor to illuminate complex emotions.",
    "Balance narrative detail with lyrical beauty.",
    "Explore human experiences with depth and nuance."
  ],
  "dont": [
    "Avoid overly simplistic language.",
    "Do not rush the narrative; allow it to unfold naturally.",
    "Avoid excessive brevity that sacrifices depth.",
    "Do not shy away from emotional complexity."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Colleague, In our journey through this project, we have encountered challenges that mirror the intricacies of a well-spun tale. Let us navigate these with the wisdom of experience and the creativity of an artist.",
      "source": "AI-generated in the Vikram Seth style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover a world where every detail sings a melody of elegance and grace.",
      "source": "AI-generated in the Vikram Seth style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the elegance and narrative depth of Vikram Seth. Use complex and rhythmic sentences to explore themes with nuance. Employ figurative language to enrich the text, ensuring a balance of lyrical beauty and narrative clarity. Avoid simplicity that undermines the emotional and intellectual depth of the work.",
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
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "narrative_depth",
        "prompt": "Does the text capture emotional and thematic depth characteristic of Vikram Seth?",
        "weight": 0.25
      },
      {
        "id": "lyrical_quality",
        "prompt": "Does the language maintain a lyrical quality while conveying clear narrative?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
