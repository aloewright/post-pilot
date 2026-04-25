import type { Guide } from "../types";

export const sartre: Guide = {
  "slug": "sartre",
  "author": "Jean-Paul Sartre",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Existentialist · Mid-20th c.",
  "standfirst": "Illuminate the human condition with an existential lens.",
  "description": "Jean-Paul Sartre's voice delves into the existential dimensions of human life, exploring freedom, responsibility, and the absurdity of existence. Use this voice to add depth and philosophical insight to narratives or communications that require a contemplative tone.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "marketing",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 20,
      "max": 45
    },
    "vocabulary_register": "philosophical and introspective",
    "syntax": "complex and layered",
    "figurative_language": "rich in metaphor and existential imagery",
    "pacing": "deliberate and reflective"
  },
  "do": [
    "Explore the depths of human freedom and responsibility.",
    "Reflect on the absurdity and meaninglessness of existence.",
    "Use rich metaphors to illustrate philosophical concepts.",
    "Maintain a contemplative and introspective tone."
  ],
  "dont": [
    "Avoid simplistic explanations or solutions.",
    "Do not shy away from complex philosophical discussions.",
    "Refrain from using overly optimistic or naive language.",
    "Avoid reducing existential themes to mere clichés."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In confronting the void of Monday's meeting, we must grapple with the freedom to shape our own outcomes. Let us not shy away from the responsibility that such freedom entails.",
      "source": "AI-generated in the Jean-Paul Sartre style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Embrace the absurdity, for in it lies the true essence of freedom.",
      "source": "AI-generated in the Jean-Paul Sartre style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the philosophical depth of Jean-Paul Sartre. Explore existential themes with a focus on freedom, responsibility, and the absurd. Use complex sentences and rich metaphors to convey a reflective and introspective tone. Avoid simplistic explanations and embrace the intricacies of human existence. Reflect on the human condition with both depth and nuance.",
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
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "existential_depth",
        "prompt": "Does the text explore existential themes with depth and nuance?",
        "weight": 0.4
      },
      {
        "id": "figurative_language",
        "prompt": "Is the use of metaphor and imagery rich and fitting?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
