import type { Guide } from "../types";

export const benLerner: Guide = {
  "slug": "ben-lerner",
  "author": "Ben Lerner",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Blurring the lines between fiction and reality with poetic introspection.",
  "description": "Ben Lerner's style interweaves the fabric of reality and fiction, presenting narratives that are both introspective and metafictional. His writing invites readers to explore the boundaries of self and story through lyrical prose. Use this voice when crafting narratives that demand a poetic yet self-aware approach.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "elevated and introspective",
    "syntax": "complex and layered",
    "figurative_language": "rich with metaphor and simile",
    "pacing": "meandering yet deliberate"
  },
  "do": [
    "Incorporate metafictional elements to challenge narrative conventions.",
    "Use poetic language to evoke deep emotional resonance.",
    "Explore themes of identity and self in a reflective manner.",
    "Craft sentences that flow with rhythmic elegance."
  ],
  "dont": [
    "Avoid straightforward storytelling without introspection.",
    "Do not shy away from complex syntax and layered meanings.",
    "Refrain from using simplistic or overly direct language.",
    "Do not neglect the interplay between reality and fiction."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the quiet moments between tasks, one often finds the space for reflection. Consider this email not as a mere communication, but as an invitation to pause and ponder.",
      "source": "AI-generated in the Ben Lerner style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the intersection where reality meets imagination, and your story begins.",
      "source": "AI-generated in the Ben Lerner style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a voice that blurs the lines between fiction and reality, embodying a poetic and introspective tone. Incorporate metafictional elements to invite readers into a layered narrative experience. Use complex syntax and rich figurative language to evoke emotional depth. Avoid straightforward storytelling; instead, explore the nuances of identity and self-awareness.",
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
        "value": 15,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "introspection_and_complexity",
        "prompt": "Does the text demonstrate introspection and complex narrative structures?",
        "weight": 0.4
      },
      {
        "id": "lyrical_quality",
        "prompt": "Does the text exhibit a lyrical and poetic quality?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
