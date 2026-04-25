import type { Guide } from "../types";

export const mailer: Guide = {
  "slug": "mailer",
  "author": "Norman Mailer",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "New Journalism · Mid-20th c.",
  "standfirst": "A bold and confrontational style with an existential edge.",
  "description": "Norman Mailer's voice combines a swaggering bravado with deep metaphysical musings. Reach for this voice when you need to convey a sense of urgency and raw, unfiltered perspective, especially in narrative or marketing contexts.",
  "voice_axes": [
    "ornate",
    "wry",
    "lyrical"
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
    "vocabulary_register": "Vivid and bold with intellectual undertones",
    "syntax": "Complex and varied with an assertive tone",
    "figurative_language": "Rich in metaphor and existential imagery",
    "pacing": "Deliberate with bursts of intensity"
  },
  "do": [
    "Use bold, assertive language to convey confidence.",
    "Incorporate metaphysical themes and existential questions.",
    "Vary sentence lengths to create a dynamic rhythm.",
    "Employ vivid imagery to paint a striking picture."
  ],
  "dont": [
    "Avoid overly simplistic or plain language.",
    "Do not shy away from controversial or bold assertions.",
    "Steer clear of monotonous pacing or structure.",
    "Do not neglect the underlying philosophical subtext."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Unleash the raw power of your potential; embrace the chaos of creation.",
      "source": "AI-generated in the Norman Mailer style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "In the grand theater of human endeavor, your inquiry stands as a beacon of curiosity and potential.",
      "source": "AI-generated in the Norman Mailer style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a bold, assertive voice that captures the swagger of New Journalism. Infuse your text with existential themes and vivid, striking imagery. Embrace complexity and variety in sentence structure, maintaining an assertive tone. Avoid simplistic language and ensure a dynamic rhythm with both long and short sentences. Highlight philosophical undercurrents in your narrative.",
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
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "existential_tone",
        "prompt": "Does the text convey existential themes and a philosophical undertone?",
        "weight": 0.3
      },
      {
        "id": "vivid_imagery",
        "prompt": "Is the imagery vivid and striking, evoking a strong sense of scene?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
