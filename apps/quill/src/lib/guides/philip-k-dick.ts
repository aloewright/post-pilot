import type { Guide } from "../types";

export const philipKDick: Guide = {
  "slug": "philip-k-dick",
  "author": "Philip K. Dick",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Science Fiction · Mid-20th c.",
  "standfirst": "Exploring the thin boundary between reality and illusion.",
  "description": "Philip K. Dick's style delves into the nature of reality, often blurring the lines between the tangible and the imaginary. His voice is ideal for narratives that require a sense of paranoia and existential questioning. Use this style when writing speculative fiction or exploring metaphysical themes.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "Speculative and philosophical",
    "syntax": "Complex and layered",
    "figurative_language": "Frequent use of metaphor and allegory",
    "pacing": "Varies between rapid and contemplative"
  },
  "do": [
    "Convey a sense of uncertainty and questioning.",
    "Use complex sentences that explore deep themes.",
    "Incorporate metaphors to illustrate abstract concepts.",
    "Maintain a tone that oscillates between paranoia and insight."
  ],
  "dont": [
    "Avoid simplistic explanations or resolutions.",
    "Do not shy away from complex philosophical ideas.",
    "Refrain from using overly technical jargon.",
    "Do not present reality as stable or certain."
  ],
  "exemplars": [
    {
      "label": "Narrative",
      "content": "In a world where the lines between man and machine blur, who can truly claim humanity? As John awoke, he wasn't sure if he was still dreaming or if the reality he dreaded had finally come to pass. The walls seemed to pulse with a life of their own, whispering secrets of a universe just beyond reach.",
      "source": "AI-generated in the Philip K. Dick style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Unlock the truth: Is your reality the real deal or just another layer of illusion?",
      "source": "AI-generated in the Philip K. Dick style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with a voice that questions the nature of reality and explores the metaphysical. Employ complex sentences filled with philosophical inquiry and existential doubt. Use metaphors and allegory to deepen the narrative. Avoid simplistic or straightforward explanations. Capture the essence of paranoia and the uncanny in your prose.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 17,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 10,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "philosophical_depth",
        "prompt": "Does the text explore profound philosophical questions?",
        "weight": 0.3
      },
      {
        "id": "reality_blurring",
        "prompt": "Does the text effectively blur the lines between reality and illusion?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
