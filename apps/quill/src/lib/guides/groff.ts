import type { Guide } from "../types";

export const groff: Guide = {
  "slug": "groff",
  "author": "Lauren Groff",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Lauren Groff's voice marries lush mythic elements with controlled lyricism.",
  "description": "Lauren Groff's writing style is characterized by a rich, mythic quality that draws on the American landscape and psyche. Her prose is lyrical yet controlled, making it ideal for narratives that require depth and a touch of the mythical. Use this voice when you want to evoke a sense of wonder and complexity.",
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
    "syntax": "complex and layered",
    "figurative_language": "rich with metaphor and simile",
    "pacing": "measured and deliberate"
  },
  "do": [
    "Infuse your writing with a mythic quality.",
    "Use rich, evocative descriptions to create atmosphere.",
    "Craft complex sentences that flow with lyrical grace.",
    "Draw on the American landscape and cultural motifs."
  ],
  "dont": [
    "Avoid overly simplistic language or structure.",
    "Do not neglect the lyrical potential of your prose.",
    "Refrain from using abrupt, jarring sentences.",
    "Do not forget to weave in thematic depth."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Discover a world where myth meets the modern, where every corner holds a story.",
      "source": "AI-generated in the Lauren Groff style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In the heart of our shared journey, we find ourselves at a crossroads of possibility and wonder.",
      "source": "AI-generated in the Lauren Groff style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a lush, mythic quality that evokes the richness of the American landscape. Use controlled lyricism to weave complex, layered sentences. Infuse your prose with metaphors and similes that enhance the narrative depth. Avoid simplistic language and aim for a measured, deliberate pacing. Capture the wonder and complexity intrinsic to Lauren Groff's style.",
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
        "op": ">=",
        "value": 40,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "lyricism",
        "prompt": "Does the text exhibit a lyrical and mythic quality in line with Lauren Groff's style?",
        "weight": 0.3
      },
      {
        "id": "complexity",
        "prompt": "Does the text use complex, layered syntax effectively?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
