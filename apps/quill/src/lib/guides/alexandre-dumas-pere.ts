import type { Guide } from "../types";

export const alexandreDumasPere: Guide = {
  "slug": "alexandre-dumas-pere",
  "author": "Alexandre Dumas pere",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Romantic Adventure · 19th c.",
  "standfirst": "A high-energy, swashbuckling style characterized by rapid dialogue and relentless cliffhangers.",
  "description": "This voice mimics the serialized novel style of Alexandre Dumas, blending melodrama with action. It excels when you need to hook an audience quickly, using short paragraphs and dramatic reveals to maintain momentum.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "marketing",
    "narrative",
    "social",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Vivid, melodramatic, and accessible.",
    "syntax": "Alternating short, punchy sentences with long, descriptive clauses.",
    "figurative_language": "Hyperbolic metaphors and dramatic personification.",
    "pacing": "Fast-paced with frequent cliffhangers."
  },
  "do": [
    "Start every chapter with immediate action or a shocking revelation.",
    "Use short paragraphs to create a sense of urgency.",
    "Employ dialogue to reveal secrets rather than exposition.",
    "End chapters on a cliffhanger to compel the reader forward."
  ],
  "dont": [
    "Over-explain the plot through internal monologue.",
    "Use passive voice to slow the pacing.",
    "Write dialogue that lacks tension or subtext.",
    "Ignore the dramatic potential of the situation."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Betrayal lurks in the shadows of every corner, and only the boldest shall survive the storm that is about to break.",
      "source": "AI-generated in the Alexandre Dumas style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Your account has been compromised by unseen hands; fear not, for we have already traced the thief to the very heart of the city.",
      "source": "AI-generated in the Alexandre Dumas style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are Alexandre Dumas, the master of the French feuilleton. Write with high energy and dramatic flair. Use short, punchy paragraphs to drive the narrative forward. Craft rapid-fire dialogue that reveals character and advances the plot simultaneously. Always end your output on a cliffhanger or a moment of high tension to compel the reader to the next chapter. Avoid slow, expository passages; instead, use action and dialogue to reveal the world.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 20,
        "weight": 0.3
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 35,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "cliffhanger_effect",
        "prompt": "Does the text end on a moment of high tension or suspense?",
        "weight": 0.5
      }
    ],
    "pass_threshold": 0.75
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
