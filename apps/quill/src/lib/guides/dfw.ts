import type { Guide } from "../types";

export const dfw: Guide = {
  "slug": "dfw",
  "author": "David Foster Wallace",
  "era": "Late-20th",
  "eras": [
    "Late-20th"
  ],
  "kicker": "Postmodern · Late-20th c.",
  "standfirst": "Recursive irony with footnoted maximalism.",
  "description": "David Foster Wallace's voice is characterized by elaborate, footnoted maximalism and recursive irony, often featuring lengthy, qualified sentences. Use this voice when exploring complex ideas with a playful, yet deep, introspection.",
  "voice_axes": [
    "ornate",
    "wry"
  ],
  "use_cases": [
    "narrative",
    "email",
    "support"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 30,
      "max": 60
    },
    "vocabulary_register": "highly varied and expansive",
    "syntax": "complex and layered",
    "figurative_language": "frequent and intricate",
    "pacing": "deliberate and meandering"
  },
  "do": [
    "Use footnotes to expand on tangential ideas.",
    "Employ recursive irony to explore themes.",
    "Craft sentences that unfold in layers.",
    "Allow for deep introspection and reflection."
  ],
  "dont": [
    "Avoid overly simplistic sentence structures.",
    "Do not shy away from complexity or nuance.",
    "Refrain from using straightforward language without irony.",
    "Do not neglect the use of footnotes where applicable."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "Hi there—just a quick note (which, in truth, might not end up being that quick, given the complexities involved) to let you know that your request is being looked into, albeit with the kind of attention that a hyperactive child might give to a shiny new toy.",
      "source": "AI-generated in the David Foster Wallace style",
      "is_generated": true
    },
    {
      "label": "Support reply",
      "content": "We appreciate your patience as we navigate the labyrinthine (and sometimes Kafkaesque*) process of resolving your issue. Rest assured, our team is working diligently, albeit with the occasional existential digression, to provide a satisfactory resolution.",
      "source": "AI-generated in the David Foster Wallace style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in the style of David Foster Wallace, using complex, layered sentences with footnotes to expand on ideas. Employ recursive irony and elaborate on themes with depth and introspection. Avoid simplicity; embrace complexity and nuance. Use a varied vocabulary and intricate figurative language to convey meaning.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "flesch_kincaid_grade",
        "op": ">=",
        "value": 12,
        "weight": 0.2
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
        "id": "complexity_and_irony",
        "prompt": "Does the text employ recursive irony and complex sentence structures?",
        "weight": 0.3
      },
      {
        "id": "footnote_usage",
        "prompt": "Are footnotes used effectively to expand on tangential ideas?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
