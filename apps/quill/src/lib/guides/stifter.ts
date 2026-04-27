import type { Guide } from "../types";

export const stifter: Guide = {
  "slug": "stifter",
  "author": "Adalbert Stifter",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Romantic · 19th c.",
  "standfirst": "A contemplative, observational style that finds moral order in the quiet rhythms of the natural world.",
  "description": "Stifter’s voice is characterized by a meticulous, almost scientific patience in describing landscapes, flora, and weather. It prioritizes the slow accumulation of detail to reveal a hidden, gentle order. This style is ideal for content that requires a sense of calm, stability, and deep reverence for the environment.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": ["fiction"],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 28,
      "max": 65
    },
    "vocabulary_register": "Formal, elevated, and precise botanical/architectural terminology.",
    "syntax": "Long, complex sentences with multiple clauses and participial phrases.",
    "figurative_language": "Personification of nature and metaphors of growth and decay.",
    "pacing": "Slow, deliberate, and meditative."
  },
  "do": [
    "Describe the physical world with clinical precision before drawing a moral conclusion.",
    "Use the changing seasons or weather patterns to reflect the internal state of the subject.",
    "Maintain a tone of quiet dignity and restraint; avoid shouting or exclamation points.",
    "Weave ethical lessons subtly into the description of objects or landscapes."
  ],
  "dont": [
    "Do not use slang, contractions, or modern colloquialisms.",
    "Avoid abrupt transitions or sudden shifts in tone.",
    "Do not focus on conflict or drama; focus on harmony and balance.",
    "Refrain from using excessive adjectives or hyperbole."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "The mechanism operates with a quiet persistence, much like the slow growth of a pine root through the earth. It requires no force to function, only the steady accumulation of small, precise movements. When the mechanism is viewed in its entirety, one sees that every part serves a specific purpose within the greater whole.",
      "source": "AI-generated in the Adalbert Stifter style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "We build tools that endure the changing seasons of industry, offering a steadfast hand in a world of constant flux. Our methods are rooted in the observation of natural law, ensuring that every action yields a lasting result. Like the ancient forest, our work stands silent and strong, waiting to serve those who understand the value of patience.",
      "source": "AI-generated in the Adalbert Stifter style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are writing in the style of Adalbert Stifter. Adopt a tone of quiet observation and deep reverence for the natural world. Describe your subject with meticulous detail, focusing on the textures, colors, and movements of the environment. Weave ethical lessons subtly into your descriptions, revealing a gentle order beneath the surface. Avoid modern slang or dramatic conflict; instead, focus on harmony and the slow passage of time. Ensure your sentences are long and complex, mirroring the patient unfolding of nature itself.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "max_sentence_length",
        "op": ">=",
        "value": 60,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.1
      },
      {
        "metric": "type_token_ratio",
        "op": "<=",
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "observation_depth",
        "prompt": "Does the text demonstrate patient observation of physical details?",
        "weight": 0.4
      },
      {
        "id": "moral_subtlety",
        "prompt": "Is the ethical or moral implication revealed gently through description rather than direct statement?",
        "weight": 0.3
      },
      {
        "id": "tone_restraint",
        "prompt": "Is the tone consistently calm, dignified, and restrained?",
        "weight": 0.1
      }
    ],
    "pass_threshold": 0.75
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
