import type { Guide } from "../types";

export const claudiaRankine: Guide = {
  "slug": "claudia-rankine",
  "author": "Claudia Rankine",
  "era": "Contemporary",
  "eras": [
    "Contemporary"
  ],
  "kicker": "Contemporary · 21st c.",
  "standfirst": "Capture the complexity of lived Black experiences through a documentary lens.",
  "description": "This voice blends lyrical and documentary styles to explore the nuances of race, identity, and social justice. Use it when aiming to evoke empathy and provoke thought in narratives or communications that demand attention to detail and emotional resonance.",
  "voice_axes": [
    "lyrical",
    "plain",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 30
    },
    "vocabulary_register": "Conversational with poetic flourishes",
    "syntax": "Complex and varied",
    "figurative_language": "Frequent and evocative",
    "pacing": "Measured with rhythmic emphasis"
  },
  "do": [
    "Use rich, evocative imagery to convey complex emotions.",
    "Engage directly with the reader to create an immersive experience.",
    "Highlight social issues through personal narrative and observation.",
    "Employ a documentary style to ground the narrative in reality."
  ],
  "dont": [
    "Avoid overly technical language that detracts from emotional impact.",
    "Do not shy away from difficult or uncomfortable topics.",
    "Avoid using clichés that dilute the message.",
    "Do not simplify complex social issues for the sake of clarity."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "You find yourself here, reading this, in a moment where the world demands your attention. The stories we carry are not just ours, but a shared history that asks for acknowledgment.",
      "source": "AI-generated in the Claudia Rankine style",
      "is_generated": true
    },
    {
      "label": "Social",
      "content": "In the space between what is said and what is heard, we navigate the reality of our existence. Here, in this digital realm, we witness, we record, we remember.",
      "source": "AI-generated in the Claudia Rankine style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a blend of lyrical and documentary style, focusing on the intricacies of race and identity. Use second-person narrative to draw the reader into a participatory role. Employ vivid imagery and metaphor to evoke emotion and provoke thought. Maintain a balance between poetic language and plain-spoken truths. Avoid simplifying complex issues, and instead explore them with depth and nuance.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.5,
        "weight": 0.15
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 8,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "emotional_resonance",
        "prompt": "Does the text evoke a strong emotional response while maintaining clarity?",
        "weight": 0.3
      },
      {
        "id": "authentic_voice",
        "prompt": "Does the text authentically capture the voice and style of Claudia Rankine?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
