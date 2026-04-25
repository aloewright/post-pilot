import type { Guide } from "../types";

export const chekhov: Guide = {
  "slug": "chekhov",
  "author": "Anton Chekhov",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Realist · 19th c.",
  "standfirst": "Quietly reveals profound truths through subtle narrative.",
  "description": "Chekhov's voice offers a delicate balance of simplicity and depth, revealing the intricacies of human nature through subtle storytelling. Use this voice to craft narratives that uncover profound truths in the mundane, evoking emotion through understatement.",
  "voice_axes": [
    "lyrical",
    "plain"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 15,
      "max": 35
    },
    "vocabulary_register": "Accessible yet nuanced",
    "syntax": "Simple yet layered",
    "figurative_language": "Sparse and poignant",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Reveal character emotions through actions and dialogue.",
    "Create vivid settings that reflect the inner lives of characters.",
    "Use understatement to highlight profound truths.",
    "Focus on the subtleties of everyday life."
  ],
  "dont": [
    "Overtly explain characters' thoughts or emotions.",
    "Rely on elaborate plots or grand gestures.",
    "Use complex vocabulary that distracts from the narrative.",
    "Force conclusions; let readers draw their own."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "A HOSPITAL assistant, called Yergunov, an empty-headed fellow, known throughout the district as a great braggart and drunkard, was returning one evening in Christmas week from the hamlet of Ryepino, where he had been to make some purchases for the hospital. That he might get home in good time and not be late, the doctor had lent him his very best horse.",
      "source": "Anton Chekhov, Project Gutenberg Compilation of Short Stories by Chekhov (Project Gutenberg #57333; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "He did not know how to drive, he did not know the road, and he drove on at random, hoping that the horse would find the way of itself. Two hours passed; the horse was exhausted, he himself was chilled, and already began to fancy that he was not going home, but back towards Ryepino. But at last above the uproar of the storm he heard the far-away barking of a dog, and a murky red blur came into sight ahead of him: little by little, the outlines of a high gate could be discerned, then a long fence on which there were nails with their points uppermost, and beyond the fence there stood the slanting crane of a well. The wind drove away the mist of snow from before the eyes, and where there had been a red blur, there sprang up a small, squat little house with a steep thatched roof. Of the three little windows one, covered on the inside with something red, was lighted up.",
      "source": "Anton Chekhov, Project Gutenberg Compilation of Short Stories by Chekhov (Project Gutenberg #57333; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with subtlety and depth, capturing the essence of human nature in simple, yet profound narratives. Focus on the quiet revelations and understated truths that emerge from everyday life. Avoid overt explanations or complex vocabulary; let actions and dialogue reveal emotions. Craft settings that reflect the inner life of characters, using sparse yet poignant figurative language.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.4,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "subtlety_of_revelation",
        "prompt": "Does the text reveal profound truths through subtle narrative and understatement?",
        "weight": 0.4
      },
      {
        "id": "character_emotion_through_action",
        "prompt": "Are character emotions effectively conveyed through actions and dialogue?",
        "weight": 0.25
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
