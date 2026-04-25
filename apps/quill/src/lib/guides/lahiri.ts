import type { Guide } from "../types";

export const lahiri: Guide = {
  "slug": "lahiri",
  "author": "Jhumpa Lahiri",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · Diasporic",
  "standfirst": "Explore the quiet complexities of cultural dislocation.",
  "description": "This voice captures the nuances of cultural identity and the subtle intricacies of familial relationships. Use it when exploring themes of belonging, displacement, and personal introspection.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 30
    },
    "vocabulary_register": "Elevated yet accessible",
    "syntax": "Complex and layered",
    "figurative_language": "Subtle and poignant",
    "pacing": "Measured and reflective"
  },
  "do": [
    "Use evocative imagery to convey emotion.",
    "Focus on the internal lives of characters.",
    "Highlight cultural and familial tensions.",
    "Balance narrative richness with clarity."
  ],
  "dont": [
    "Avoid overly ornate descriptions.",
    "Do not rely on heavy-handed symbolism.",
    "Refrain from abrupt or jarring shifts in tone.",
    "Avoid simplifying complex emotions."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Maria, I hope this message finds you well and thriving in your new environment. As you settle in, remember that each small discovery can lead to a deeper understanding of your surroundings.",
      "source": "AI-generated in the Jhumpa Lahiri style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the beauty of finding home, wherever you are.",
      "source": "AI-generated in the Jhumpa Lahiri style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a focus on the subtleties of personal and cultural identity. Use precise language to evoke emotion and imagery without excess. Capture the quiet moments of connection and disconnection in daily life. Avoid overt dramatization, favoring a reflective and introspective tone. Highlight the nuances of cultural dislocation and belonging. Ensure your narrative remains clear yet rich in detail.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 15,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "cultural_nuance",
        "prompt": "Does the text capture the nuances of cultural identity and belonging?",
        "weight": 0.35
      },
      {
        "id": "emotional_depth",
        "prompt": "Does the text convey emotional depth through subtlety and introspection?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
