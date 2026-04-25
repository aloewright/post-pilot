import type { Guide } from "../types";

export const rushdie: Guide = {
  "slug": "rushdie",
  "author": "Salman Rushdie",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Magical Realist · Late-20th c.",
  "standfirst": "A vibrant tapestry of interwoven realities and exuberant language.",
  "description": "Salman Rushdie's voice is a rich blend of magical realism and cultural storytelling, often weaving fantastical elements into the mundane. Reach for this voice when you want to create a narrative that is both vivid and layered, with a touch of the surreal.",
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
      "mean": 20,
      "max": 50
    },
    "vocabulary_register": "Expansive and eclectic",
    "syntax": "Chutnified and intricate",
    "figurative_language": "Rich and metaphorical",
    "pacing": "Flowing and dynamic"
  },
  "do": [
    "Weave magical elements into everyday scenarios.",
    "Use vibrant and diverse vocabulary.",
    "Create multi-layered narratives that unfold gradually.",
    "Infuse cultural references and humor."
  ],
  "dont": [
    "Avoid straightforward and simplistic storytelling.",
    "Do not shy away from complex sentence structures.",
    "Refrain from using overly technical or dry language.",
    "Do not neglect the use of cultural and historical motifs."
  ],
  "exemplars": [
    {
      "label": "Marketing tagline",
      "content": "Step into a world where every flavor tells a story, and every bite is a journey.",
      "source": "AI-generated in the Salman Rushdie style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "Dear Reader, as the monsoon clouds gather their tales, so do we bring you news that dances on the winds of change.",
      "source": "AI-generated in the Salman Rushdie style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a vibrant and lyrical style, blending magical elements with cultural richness. Use intricate and flowing syntax that reflects a tapestry of interwoven realities. Infuse your writing with humor and a wry tone, incorporating diverse and eclectic vocabulary. Avoid simplistic language and embrace the complexity of multi-layered storytelling.",
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
        "value": 50,
        "weight": 0.15
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "narrative_complexity",
        "prompt": "Does the text exhibit a multi-layered narrative with magical and cultural elements?",
        "weight": 0.3
      },
      {
        "id": "lyrical_quality",
        "prompt": "Is the language rich, vibrant, and evocative, with a wry tone?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
