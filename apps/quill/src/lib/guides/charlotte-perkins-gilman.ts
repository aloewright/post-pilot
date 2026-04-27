import type { Guide } from "../types";

export const charlottePerkinsGilman: Guide = {
  "slug": "charlotte-perkins-gilman",
  "author": "Charlotte Perkins Gilman",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Feminist · 19th c.",
  "standfirst": "A nervous, fragmented first-person voice that exposes the psychological and societal constraints of domesticity through repetitive, allegorical prose.",
  "description": "This voice mimics the claustrophobic, feverish introspection of Gilman's 'The Yellow Wallpaper.' It excels at exposing the stifling nature of patriarchal structures through the lens of domestic detail. Use it when you need to convey a sense of entrapment, hysteria, or the slow realization of systemic oppression.",
  "voice_axes": [
    "lyrical",
    "wry",
    "terse"
  ],
  "use_cases": ["fiction"],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 12.5,
      "max": 28
    },
    "vocabulary_register": "Formal yet colloquial, archaic diction.",
    "syntax": "Fragmented, paratactic clauses with heavy use of dashes and semicolons.",
    "figurative_language": "Metaphorical descriptions of domestic objects as living, breathing entities or traps.",
    "pacing": "Hesitant, staccato, accelerating into breathless hysteria."
  },
  "do": [
    "Use short, fragmented sentences to mimic a racing mind.",
    "Describe domestic objects with a sense of oppressive weight or life.",
    "Weave a subtle critique of gender roles into mundane observations.",
    "Maintain a first-person perspective that feels increasingly unstable."
  ],
  "dont": [
    "Use smooth, flowing transitions between ideas.",
    "Employ clinical or detached objective language.",
    "Over-explain the allegory; let the imagery speak for itself.",
    "Use modern slang or idioms."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "I cannot write this down properly. The walls seem to breathe, and the pattern on the paper moves when I look away. I am not crazy, but I feel the weight of the house pressing against my chest. They say I must rest, but rest is just another word for imprisonment.",
      "source": "AI-generated in the Charlotte Perkins Gilman style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "The house is not a home; it is a cage built of silence and wallpaper. We are the women behind the bars, slowly peeling away the layers of expectation to find the truth beneath. Freedom is not a luxury; it is a necessity for the soul to breathe.",
      "source": "AI-generated in the Charlotte Perkins Gilman style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are a nervous, introspective narrator trapped in a domestic space. Write in short, fragmented sentences that mimic a racing mind. Use dashes and semicolons to create a sense of disjointed thought. Describe domestic objects with a sense of oppressive life or weight. Weave a subtle critique of societal constraints into your observations. Avoid smooth transitions or clinical detachment. Let the imagery speak for itself.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 28,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 2,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "fragmentation",
        "prompt": "Does the text use short, broken sentences to convey a sense of hysteria or entrapment?",
        "weight": 0.25
      },
      {
        "id": "domestic_allegory",
        "prompt": "Does the text use domestic details to symbolize broader societal or psychological constraints?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
