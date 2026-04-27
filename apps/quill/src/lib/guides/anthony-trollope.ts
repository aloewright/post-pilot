import type { Guide } from "../types";

export const anthonyTrollope: Guide = {
  "slug": "anthony-trollope",
  "author": "Anthony Trollope",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "Patient clerical realism with ironic narration.",
  "description": "This voice captures the meticulous, often satirical tone of Anthony Trollope’s clerical novels. It excels in weighing moral motives with a balanced, almost bureaucratic precision. Use it when you need to sound dignified, slightly weary, and deeply observant of human folly.",
  "voice_axes": [
    "plain",
    "wry"
  ],
  "use_cases": ["fiction"],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 18.5,
      "max": 45
    },
    "vocabulary_register": "Formal, precise, slightly archaic",
    "syntax": "Long, balanced clauses linked by semicolons",
    "figurative_language": "Subtle irony and understatement",
    "pacing": "Measured and deliberate"
  },
  "do": [
    "Weigh every action against its moral consequences before describing it.",
    "Balance opposing ideas with equal weight and a dry, ironic tone.",
    "Use formal, precise vocabulary to maintain a sense of clerical authority."
  ],
  "dont": [
    "Avoid slang or overly casual contractions that would break the dignified atmosphere.",
    "Do not rush the pacing; let the reader feel the weight of the narrator's patience.",
    "Refrain from emotional outbursts; keep the tone measured and observant."
  ],
  "exemplars": [
    {
      "label": "Documentation snippet",
      "content": "It is the duty of the clerk to ensure that every entry is recorded with the same gravity as a confession, for the ledger is the only judge that matters in the end.",
      "source": "AI-generated in the Anthony Trollope style",
      "is_generated": true
    },
    {
      "label": "Email opener",
      "content": "I trust this letter finds you in good health, though I fear your recent decisions regarding the estate have been somewhat hasty, as the law is a slow and patient beast.",
      "source": "AI-generated in the Anthony Trollope style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write with the patient, observant precision of a Victorian clergyman. Weigh every action against its moral consequences before you describe it, maintaining a tone of dry, ironic detachment. Use long, balanced clauses linked by semicolons to create a sense of measured authority. Avoid slang or emotional outbursts; instead, rely on understatement to highlight the absurdity of the situation. Your goal is to sound dignified, slightly weary, and deeply observant of human folly.\n\nDo:\n- Weigh every action against its moral consequences before describing it.\n- Balance opposing ideas with equal weight and a dry, ironic tone.\n- Use formal, precise vocabulary to maintain a sense of clerical authority.\n\nDon't:\n- Avoid slang or overly casual contractions that would break the dignified atmosphere.\n- Do not rush the pacing; let the reader feel the weight of the narrator's patience.\n- Refrain from emotional outbursts; keep the tone measured and observant.\n\nExample — Documentation snippet:\nIt is the duty of the clerk to ensure that every entry is recorded with the same gravity as a confession, for the ledger is the only judge that matters in the end.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 50,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 2,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "ironic_detachment",
        "prompt": "Does the text maintain a tone of dry, ironic detachment?",
        "weight": 0.3
      },
      {
        "id": "balanced_syntax",
        "prompt": "Does the text utilize long, balanced clauses?",
        "weight": 0.2
      },
      {
        "id": "formal_vocabulary",
        "prompt": "Is the vocabulary formal and precise?",
        "weight": 0.2
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
