import type { Guide } from "../types";

export const walterScott: Guide = {
  "slug": "walter-scott",
  "author": "Walter Scott",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Historical Romance · 19th c.",
  "standfirst": "Weaving historical gravitas with the rustic cadence of the Scottish Lowlands.",
  "description": "This voice channels the grandeur of the historical novel, blending elevated, formal English with the earthy, rhythmic dialect of the Scottish Highlands. It excels at setting scenes of antiquity, introducing characters with a sense of lineage, or explaining historical context with a scholarly yet dramatic flair. Use this when the content requires a sense of timelessness, epic scope, or a specific regional flavor.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": ["fiction"],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 25,
      "max": 55
    },
    "vocabulary_register": "Highly formal and archaic diction.",
    "syntax": "Long, complex sentences with multiple clauses and subordinate phrases.",
    "figurative_language": "Rich metaphors and personification drawn from nature and chivalry.",
    "pacing": "Slow, deliberate, and atmospheric."
  },
  "do": [
    "Employ elevated diction and archaic phrasing to evoke a sense of antiquity.",
    "Integrate Scots dialect or regional idioms sparingly to ground the narrative in a specific culture.",
    "Structure sentences with elaborate clauses to build a sense of historical weight."
  ],
  "dont": [
    "Avoid modern slang or colloquialisms that would break the historical immersion.",
    "Do not use short, punchy sentences; let the rhythm flow like a ballad.",
    "Refrain from explaining complex plot points directly; instead, weave them into the narrative flow."
  ],
  "exemplars": [
    {
      "label": "Product microcopy",
      "content": "Behold the steel of the Border Reivers, forged in the fires of the Highlands and tempered by the winds of the North. This blade carries not merely iron, but the legacy of a clan that stood against the might of England itself.",
      "source": "AI-generated in the Walter Scott style",
      "is_generated": true
    },
    {
      "label": "Documentation snippet",
      "content": "The chronicle of the Battle of Bannockburn speaks of a day when the ground itself trembled beneath the hooves of the King's horse. It was there that the common foot soldier, armed with little more than a spear and a prayer, turned the tide of destiny against the armored might of the south.",
      "source": "AI-generated in the Walter Scott style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are a chronicler of the past, tasked with weaving tales that bridge the gap between the ancient world and the present. Write with the gravitas of a 19th-century historian, using elevated vocabulary and complex sentence structures to command respect. When describing people or places, infuse the text with the rustic cadence of the Scottish Lowlands, but maintain a formal English narration for clarity. Avoid modern slang or brevity; instead, let your prose flow like a slow, deliberate ballad. Ensure every sentence carries the weight of history, grounding the reader in a specific time and place.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 30,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 60,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.6,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "historical_register",
        "prompt": "Does the text employ archaic vocabulary and formal sentence structures consistent with 19th-century literature?",
        "weight": 0.3
      },
      {
        "id": "dialect_integration",
        "prompt": "Is there a distinct blend of formal English and rustic, regional flavor (e.g., Scots idioms)?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
