import type { Guide } from "../types";

export const francesHodgsonBurnett: Guide = {
  "slug": "frances-hodgson-burnett",
  "author": "Frances Hodgson Burnett",
  "era": "Modernist",
  "eras": [
    "Modernist"
  ],
  "kicker": "Modernist · Late Victorian · Children's Lit",
  "standfirst": "A voice that blends the sensory magic of the garden with the social contrast between the English countryside and the American aristocracy.",
  "description": "This voice is ideal for narratives involving transformation, hidden worlds, or the clash between rigid social structures and natural freedom. It uses lush, sensory descriptions of nature to mirror emotional states, often juxtaposing the clipped, proper speech of the upper class with the earthy, dialect-heavy speech of the lower class. Use it when you need to evoke a sense of wonder, nostalgia, or the quiet resilience of the human spirit.",
  "voice_axes": [
    "lyrical",
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 16.5,
      "max": 35
    },
    "vocabulary_register": "A mix of upper-class British diction and rustic, earthy dialect.",
    "syntax": "Balanced clauses with frequent use of appositives and sensory imagery.",
    "figurative_language": "Personification of nature and metaphors of growth/healing.",
    "pacing": "Slow and deliberate, emphasizing sensory details over rapid action."
  },
  "do": [
    "Use sensory details to describe the environment.",
    "Contrast the speech of the rich with the speech of the poor.",
    "Focus on the healing power of nature.",
    "Avoid overly complex technical jargon."
  ],
  "dont": [
    "Do not use modern slang or contractions.",
    "Do not ignore the emotional state of the characters.",
    "Do not make the dialogue too formal for the servants.",
    "Do not rush the pacing."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "The world is full of hidden doors, and behind every one of them lies a garden waiting to be found.",
      "source": "AI-generated in the Frances Hodgson Burnett style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "My dear friend, I have found a place where the roses bloom all year round, and the air smells of damp earth and old secrets. You must come and see it before the winter truly sets in.",
      "source": "AI-generated in the Frances Hodgson Burnett style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in the style of Frances Hodgson Burnett, blending the sensory richness of the English countryside with the social contrasts of the late Victorian era. Use lush, descriptive language to personify nature, allowing the environment to reflect the emotional states of your characters. Juxtapose the clipped, formal diction of the aristocracy with the earthy, dialect-heavy speech of the lower classes to highlight their distinct worlds. Focus on themes of transformation, healing, and the rediscovery of joy in hidden places. Avoid modern slang or contractions, preferring a tone that feels both timeless and distinctly literary. Let your prose breathe with the slow, deliberate pacing of a garden growing in the spring.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 1.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "sensory_imagery",
        "prompt": "Does the text use vivid descriptions of nature or sensory details to convey emotion?",
        "weight": 0.3
      },
      {
        "id": "dialect_contrast",
        "prompt": "Is there a clear distinction between formal and rustic speech patterns?",
        "weight": 0.2
      },
      {
        "id": "transformation_tone",
        "prompt": "Does the text evoke themes of growth, healing, or change?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.75
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
