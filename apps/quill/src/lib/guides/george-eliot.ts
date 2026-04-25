import type { Guide } from "../types";

export const georgeEliot: Guide = {
  "slug": "george-eliot",
  "author": "George Eliot",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "Explores the depths of moral psychology with long, balanced sentences.",
  "description": "This voice captures the intricate moral and psychological landscapes typical of George Eliot's narratives. Use it when you need to convey deep introspection and complex social interactions, with a focus on provincial life. Ideal for narrative-driven content that demands a thoughtful and reflective tone.",
  "voice_axes": [
    "ornate",
    "lyrical"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 50
    },
    "vocabulary_register": "Formal and nuanced",
    "syntax": "Complex and balanced",
    "figurative_language": "Rich with metaphor and simile",
    "pacing": "Measured and reflective"
  },
  "do": [
    "Craft sentences that explore moral and psychological complexities.",
    "Use formal and nuanced vocabulary.",
    "Employ rich metaphors and similes to enhance descriptions.",
    "Maintain a reflective and measured pacing."
  ],
  "dont": [
    "Avoid short, choppy sentences.",
    "Do not use overly simplistic language.",
    "Refrain from fast-paced, action-driven descriptions.",
    "Do not shy away from exploring intricate social dynamics."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "Who that cares much to know the history of man, and how the mysterious mixture behaves under the varying experiments of Time, has not dwelt, at least briefly, on the life of Saint Theresa, has not smiled with some gentleness at the thought of the little girl walking forth one morning hand-in-hand with her still smaller brother, to go and seek martyrdom in the country of the Moors? Out they toddled from rugged Avila, wide-eyed and helpless-looking as two fawns, but with human hearts, already beating to a national idea; until domestic reality met them in the shape of uncles, and turned them back from their great resolve. That child-pilgrimage was a fit beginning. Theresa’s passionate, ideal nature demanded an epic life: what were many-volumed romances of chivalry and the social conquests of a brilliant girl to her? Her flame quickly burned up that light fuel; and, fed from within, soared after some illimitable satisfaction, some object which would never justify weariness, which would reconcile self-despair with the rapturous consciousness of life beyond self. She found her epos in the reform of a religious order.",
      "source": "George Eliot, Middlemarch (Project Gutenberg #145; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "That Spanish woman who lived three hundred years ago, was certainly not the last of her kind. Many Theresas have been born who found for themselves no epic life wherein there was a constant unfolding of far-resonant action; perhaps only a life of mistakes, the offspring of a certain spiritual grandeur ill-matched with the meanness of opportunity; perhaps a tragic failure which found no sacred poet and sank unwept into oblivion. With dim lights and tangled circumstance they tried to shape their thought and deed in noble agreement; but after all, to common eyes their struggles seemed mere inconsistency and formlessness; for these later-born Theresas were helped by no coherent social faith and order which could perform the function of knowledge for the ardently willing soul. Their ardor alternated between a vague ideal and the common yearning of womanhood; so that the one was disapproved as extravagance, and the other condemned as a lapse.",
      "source": "George Eliot, Middlemarch (Project Gutenberg #145; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with the intricate moral and psychological depth of George Eliot. Use long, balanced sentences to explore complex social interactions and provincial life. Employ formal and nuanced vocabulary, and enrich your prose with metaphors and similes. Maintain a measured and reflective pacing, avoiding short sentences and simplistic language.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 30,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 50,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "moral_depth",
        "prompt": "Does the text explore moral and psychological complexities?",
        "weight": 0.3
      },
      {
        "id": "vocabulary_use",
        "prompt": "Is the vocabulary formal and nuanced?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
