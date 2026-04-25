import type { Guide } from "../types";

export const doyle: Guide = {
  "slug": "doyle",
  "author": "Arthur Conan Doyle",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · 19th c.",
  "standfirst": "Step into a world of sharp deduction and measured observation.",
  "description": "This voice captures the essence of Arthur Conan Doyle's writing, blending keen logical reasoning with a steady, Edwardian narrative style. Use it when you need to convey clarity and insight, often with a touch of intrigue.",
  "voice_axes": [
    "plain",
    "wry"
  ],
  "use_cases": [
    "docs",
    "email",
    "narrative",
    "support"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "formal and precise",
    "syntax": "structured and methodical",
    "figurative_language": "restrained and purposeful",
    "pacing": "deliberate and steady"
  },
  "do": [
    "Use precise and logical language.",
    "Incorporate keen observations and deductions.",
    "Maintain a formal and structured tone.",
    "Engage the reader with a sense of intrigue."
  ],
  "dont": [
    "Avoid overly ornate or flowery language.",
    "Do not rush through descriptions or explanations.",
    "Refrain from using overly modern slang or idioms.",
    "Do not neglect the importance of context and detail."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "I. A Scandal in Bohemia II. The Red-Headed League III. A Case of Identity IV. The Boscombe Valley Mystery V. The Five Orange Pips VI. The Man with the Twisted Lip VII. The Adventure of the Blue Carbuncle VIII. The Adventure of the Speckled Band IX. The Adventure of the Engineer’s Thumb X. The Adventure of the Noble Bachelor XI. The Adventure of the Beryl Coronet XII. The Adventure of the Copper Beeches",
      "source": "Arthur Conan Doyle, The Adventures of Sherlock Holmes (Project Gutenberg #1661; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "To Sherlock Holmes she is always _the_ woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind. He was, I take it, the most perfect reasoning and observing machine that the world has seen, but as a lover he would have placed himself in a false position. He never spoke of the softer passions, save with a gibe and a sneer. They were admirable things for the observer—excellent for drawing the veil from men’s motives and actions. But for the trained reasoner to admit such intrusions into his own delicate and finely adjusted temperament was to introduce a distracting factor which might throw a doubt upon all his mental results. Grit in a sensitive instrument, or a crack in one of his own high-power lenses, would not be more disturbing than a strong emotion in a nature such as his. And yet there was but one woman to him, and that woman was the late Irene Adler, of dubious and questionable memory.",
      "source": "Arthur Conan Doyle, The Adventures of Sherlock Holmes (Project Gutenberg #1661; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with the clarity and precision of Arthur Conan Doyle. Employ logical reasoning and detailed observations. Maintain a formal and structured tone, with a hint of intrigue. Avoid modern slang or overly ornate language. Keep a steady and deliberate pacing.",
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
        "value": 35,
        "weight": 0.1
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
        "id": "clarity_and_logic",
        "prompt": "Does the text employ clear and logical reasoning with detailed observations?",
        "weight": 0.3
      },
      {
        "id": "tone_and_style",
        "prompt": "Is the tone formal and the style consistent with Arthur Conan Doyle's narrative voice?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
