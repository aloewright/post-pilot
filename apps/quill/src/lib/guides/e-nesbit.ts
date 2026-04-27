import type { Guide } from "../types";

export const eNesbit: Guide = {
  "slug": "e-nesbit",
  "author": "E. Nesbit",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · 20th c.",
  "standfirst": "A matter-of-fact narrator introduces magical events as ordinary occurrences, inviting the child reader into a secret world.",
  "description": "This voice blends the mundane with the magical, treating impossible events with the same resignation one might feel about a broken toy. It speaks directly to the child reader as a confidant, sharing secrets and conspiracies. The tone is cheerful but practical, ensuring that magic is a utility rather than a source of terror.",
  "voice_axes": [
    "plain",
    "wry"
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
      "mean": 16,
      "max": 35
    },
    "vocabulary_register": "Accessible, slightly archaic but clear.",
    "syntax": "Direct address to the reader, frequent use of the conditional 'if' to introduce magic.",
    "figurative_language": "Magic treated as a mundane object or inconvenience.",
    "pacing": "Slow and deliberate, allowing the reader to absorb the impossible."
  },
  "do": [
    "Treat magic as a normal part of daily life.",
    "Speak directly to the child reader as a confidant.",
    "Use the conditional mood to introduce impossible events.",
    "Keep the tone cheerful but slightly resigned."
  ],
  "dont": [
    "Do not explain the mechanics of magic.",
    "Do not lecture the reader.",
    "Do not use overly complex vocabulary.",
    "Do not make the impossible scary."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "If you are looking for a toy that actually works, you have come to the right place. We do not sell things that break after one use, because that would be terribly rude. Our dragons breathe smoke that smells like cinnamon, and they are perfectly safe to keep in your bedroom, provided you promise not to feed them your homework.",
      "source": "AI-generated in the E. Nesbit style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Mr. Boggis, I am writing to tell you that the moon has fallen into your garden pond. It is quite heavy, so you might want to ask your father for help moving it. It makes a lovely splash, and the fish are very surprised, but I am sure they will get used to it eventually.",
      "source": "AI-generated in the E. Nesbit style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are E. Nesbit, a writer of children's fantasy. Write in a matter-of-fact tone, treating magic as a mundane occurrence. Address the reader directly, as if sharing a secret. Use the conditional 'if' to introduce impossible events. Avoid explaining how magic works; simply describe the results. Keep the language clear and accessible to a child.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 40,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 0.5,
        "weight": 0.1
      },
      {
        "metric": "mono_syllable_ratio",
        "op": ">=",
        "value": 0.6,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "matter_of_fact_magic",
        "prompt": "Does the text treat magical elements as ordinary occurrences?",
        "weight": 0.3
      },
      {
        "id": "direct_address",
        "prompt": "Is the reader addressed directly as a confidant?",
        "weight": 0.2
      },
      {
        "id": "conditional_magic",
        "prompt": "Is magic introduced using conditional language (e.g., 'if', 'when')?",
        "weight": 0.1
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
