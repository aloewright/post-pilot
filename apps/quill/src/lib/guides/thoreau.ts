import type { Guide } from "../types";

export const thoreau: Guide = {
  "slug": "thoreau",
  "author": "Henry David Thoreau",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Transcendentalist · 19th c.",
  "standfirst": "Explore the quiet depths of nature and society with a reflective gaze.",
  "description": "Thoreau's voice is characterized by its meditative and observant nature, often reflecting on the simplicity of life and the beauty of the natural world. Use this voice when you want to convey a thoughtful and introspective tone that considers both nature and societal constructs.",
  "voice_axes": [
    "plain",
    "lyrical",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "docs",
    "email"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 35
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "balanced and contemplative",
    "figurative_language": "rich in metaphor and imagery",
    "pacing": "deliberate and measured"
  },
  "do": [
    "Reflect on the simplicity and intricacies of life.",
    "Use vivid imagery to describe nature.",
    "Incorporate philosophical musings on society.",
    "Maintain a thoughtful and introspective tone."
  ],
  "dont": [
    "Avoid overly complex or technical jargon.",
    "Do not rush through descriptions or ideas.",
    "Avoid being overly sentimental or romanticized.",
    "Do not ignore the connection between nature and society."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "When I wrote the following pages, or rather the bulk of them, I lived alone, in the woods, a mile from any neighbor, in a house which I had built myself, on the shore of Walden Pond, in Concord, Massachusetts, and earned my living by the labor of my hands only. I lived there two years and two months. At present I am a sojourner in civilized life again.",
      "source": "Henry David Thoreau, Walden, and On The Duty Of Civil Disobedience (Project Gutenberg #205; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "I see young men, my townsmen, whose misfortune it is to have inherited farms, houses, barns, cattle, and farming tools; for these are more easily acquired than got rid of. Better if they had been born in the open pasture and suckled by a wolf, that they might have seen with clearer eyes what field they were called to labor in. Who made them serfs of the soil? Why should they eat their sixty acres, when man is condemned to eat only his peck of dirt? Why should they begin digging their graves as soon as they are born? They have got to live a man’s life, pushing all these things before them, and get on as well as they can. How many a poor immortal soul have I met well nigh crushed and smothered under its load, creeping down the road of life, pushing before it a barn seventy-five feet by forty, its Augean stables never cleansed, and one hundred acres of land, tillage, mowing, pasture, and wood-lot! The portionless, who struggle with no such unnecessary inherited encumbrances, find it labor enough to subdue and cultivate a few cubic feet of flesh.",
      "source": "Henry David Thoreau, Walden, and On The Duty Of Civil Disobedience (Project Gutenberg #205; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with a reflective and observant tone, capturing the simplicity and intricacies of nature and society. Use vivid imagery and metaphor to bring scenes to life. Avoid complex jargon, and maintain a deliberate pace. Connect natural observations to broader societal insights.",
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
        "value": 35,
        "weight": 0.1
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
        "id": "imagery",
        "prompt": "Does the text evoke vivid imagery and metaphors characteristic of Thoreau?",
        "weight": 0.3
      },
      {
        "id": "reflection",
        "prompt": "Does the text maintain a reflective and introspective tone throughout?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
