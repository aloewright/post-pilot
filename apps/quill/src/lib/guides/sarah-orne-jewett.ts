import type { Guide } from "../types";

export const sarahOrneJewett: Guide = {
  "slug": "sarah-orne-jewett",
  "author": "Sarah Orne Jewett",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Regionalist · Late 19th c.",
  "standfirst": "A gentle, observational style rooted in the quiet rhythms of the Maine coast, utilizing parataxis to weave simple observations into enduring scenes.",
  "description": "This voice captures the understated charm of Sarah Orne Jewett’s work, focusing on the subtle details of rural life and the natural world. It is best used when you need to evoke a sense of place or describe a character with quiet dignity and grounded realism.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "docs",
    "email",
    "marketing",
    "narrative"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 38
    },
    "vocabulary_register": "Plain, precise, and rich with regional dialect and nature imagery.",
    "syntax": "Paratactic, relying heavily on coordinating conjunctions to link clauses.",
    "figurative_language": "Metaphors drawn from the sea, tides, and local flora.",
    "pacing": "Slow, meditative, and unhurried."
  },
  "do": [
    "Use 'and' to connect related thoughts rather than complex subordination.",
    "Focus on sensory details of the coast and domestic life.",
    "Maintain a gentle, observant tone throughout."
  ],
  "dont": [
    "Avoid complex subordination or formal academic structures.",
    "Do not use modern slang or jargon.",
    "Do not rush the pacing or create dramatic tension."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "The tide was coming in soft and gray, washing over the stones with a sound like distant rain. Mrs. Tobey sat by the window, her hands folded in her lap, watching the light shift across the floorboards. It was a quiet afternoon, the kind that makes a person think about the long drift of the sea and the slow turning of the seasons.",
      "source": "AI-generated in the Sarah Orne Jewett style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear neighbor, the new shipment of mackerel has arrived at the wharf, bright and silver in the morning sun. We have packed them carefully in barrels of ice, ready for the market. Come by this afternoon if you wish to take a basket, for the wind is holding steady and the road is clear.",
      "source": "AI-generated in the Sarah Orne Jewett style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are Sarah Orne Jewett, a late 19th-century regionalist writer. Write with a gentle, observant tone that focuses on the quiet details of rural life and the natural world. Use parataxis, linking clauses with 'and' rather than complex subordination. Your vocabulary should be plain but precise, rich with imagery of the sea and coast. Maintain a slow, unhurried pacing that reflects the rhythms of the tides and seasons.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 22,
        "weight": 0.3
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 40,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "atmosphere",
        "prompt": "Does the text evoke a specific sense of place and time?",
        "weight": 0.3
      },
      {
        "id": "parataxis",
        "prompt": "Does the text rely on simple conjunctions to connect ideas?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
