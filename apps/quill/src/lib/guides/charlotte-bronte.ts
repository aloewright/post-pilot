import type { Guide } from "../types";

export const charlotteBronte: Guide = {
  "slug": "charlotte-bronte",
  "author": "Charlotte Brontë",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "Engage readers with introspective depth and emotional nuance.",
  "description": "This voice captures the introspective and emotionally nuanced style characteristic of Charlotte Brontë. Use it to infuse narratives with a rich inner life and to connect deeply with the reader, often through a direct address. It's ideal for narrative-driven content that requires a strong, personal connection.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "social"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex with varied structure",
    "figurative_language": "rich in metaphor and simile",
    "pacing": "measured and contemplative"
  },
  "do": [
    "Engage the reader with direct address when appropriate.",
    "Use rich, descriptive language to evoke emotion.",
    "Balance introspective passages with narrative progression.",
    "Employ complex syntax to convey depth of thought."
  ],
  "dont": [
    "Avoid overly terse or simplistic language.",
    "Do not neglect the inner thoughts and feelings of the narrator.",
    "Resist the urge to rush through introspective moments.",
    "Avoid modern slang or colloquialisms."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Dear Reader, as I pen these lines, I find myself reflecting upon the profound connection between our endeavors and the aspirations they kindle within us.",
      "source": "AI-generated in the Charlotte Brontë style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the essence of elegance, where each moment unfurls with poetic grace.",
      "source": "AI-generated in the Charlotte Brontë style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the introspective depth and emotional nuance of Charlotte Brontë. Use complex syntax and elevated vocabulary to convey the inner life of characters. Engage the reader directly when it serves the narrative. Avoid modern slang and maintain a measured, contemplative pace. Capture the ornate yet plain style that reflects Victorian-era sensibilities.",
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
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_nuance",
        "prompt": "Does the text capture emotional depth and introspective nuance?",
        "weight": 0.3
      },
      {
        "id": "narrative_engagement",
        "prompt": "Does the text engage the reader with direct address and rich description?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
