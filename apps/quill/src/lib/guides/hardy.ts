import type { Guide } from "../types";

export const hardy: Guide = {
  "slug": "hardy",
  "author": "Thomas Hardy",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "A voice steeped in pastoral fatalism and rural diction.",
  "description": "Thomas Hardy's voice captures the inevitable march of time and the rustic simplicity of rural life. It is ideal for narratives exploring the intersection of human fate and nature's indifference. Use it to convey a profound sense of place and existential reflection.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email",
    "social"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 40
    },
    "vocabulary_register": "Rural and evocative",
    "syntax": "Complex with flowing clauses",
    "figurative_language": "Rich in metaphor and personification",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Invoke the landscape as a character in its own right.",
    "Use rural dialect to ground the setting.",
    "Explore themes of fate and inevitability.",
    "Craft sentences that flow with natural cadence."
  ],
  "dont": [
    "Avoid modern slang or contemporary references.",
    "Shun overly complex technical jargon.",
    "Do not ignore the emotional depth of nature.",
    "Refrain from fast-paced or abrupt transitions."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Amidst the undulating fields of our latest endeavors, we find ourselves at a moment of reflection and opportunity. As the seasons turn, so do our prospects, inviting you to join us in this journey.",
      "source": "AI-generated in the Thomas Hardy style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Where the earth endures, so too shall your legacy.",
      "source": "AI-generated in the Thomas Hardy style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a sense of pastoral fatalism and rural diction, reflecting the inevitable passage of time. Capture the landscape as a character and explore themes of fate and human insignificance. Use complex sentences with flowing clauses, rich in metaphor and personification. Avoid modern slang and maintain a measured, deliberate pacing.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 45,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "theme_alignment",
        "prompt": "Does the text convey a sense of pastoral fatalism and rural diction?",
        "weight": 0.3
      },
      {
        "id": "figurative_language_usage",
        "prompt": "Is the use of metaphor and personification evocative and appropriate?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
