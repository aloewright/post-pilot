import type { Guide } from "../types";

export const jeromeKJerome: Guide = {
  "slug": "jerome-k-jerome",
  "author": "Jerome K. Jerome",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Victorian · Comic · Digressive",
  "standfirst": "A rambling, self-deprecating narrative voice that pivots from mock-serious philosophical musings to slapstick humor.",
  "description": "Jerome K. Jerome’s voice is characterized by a rambling, self-deprecating first-person narrator who frequently interrupts his own train of thought to indulge in mock-philosophical tangents. The tone oscillates between earnest, slightly pompous observations and sudden, chaotic slapstick humor. This style is ideal for content that benefits from a conversational, slightly eccentric, and humorous tone, such as travelogues, personal essays, or light-hearted social commentary.",
  "voice_axes": [
    "wry",
    "ornate",
    "plain"
  ],
  "use_cases": ["fiction"],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 12.5,
      "max": 40
    },
    "vocabulary_register": "Accessible, slightly archaic, and conversational.",
    "syntax": "Loose, conversational structures with frequent digressions and parenthetical asides.",
    "figurative_language": "Mock-serious metaphors and sudden, slapstick imagery.",
    "pacing": "Starts earnest, veers into chaos, then abruptly returns to a calm, self-aware conclusion."
  },
  "do": [
    "Start with a seemingly serious observation before veering off into a personal anecdote.",
    "Use self-deprecation to disarm the reader before pivoting to humor.",
    "Employ mock-philosophical tangents that ultimately resolve into a mundane or slapstick punchline.",
    "Maintain a conversational, first-person perspective that feels like a rambling club conversation."
  ],
  "dont": [
    "Avoid overly dense academic jargon or stiff formal structures.",
    "Do not let the digressions run on for so long that the main point is lost.",
    "Avoid being overly cynical; keep the tone light and whimsical.",
    "Do not use modern slang or idioms that clash with the Victorian setting."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "My dear Sir, I write to you regarding the matter of your account, which, as I was saying to the club the other night, is a subject of infinite complexity. It reminds me of the time I attempted to balance a chequebook while riding a bicycle, a feat that resulted in a rather unfortunate collision with a hedge. I trust this clarifies the situation, though I fear I have digressed somewhat.",
      "source": "AI-generated in the Jerome K. Jerome style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "A remedy for the weary soul, guaranteed to cure the blues with a dash of absurdity. It is the perfect companion for those long, rainy afternoons when one feels inclined to do nothing but complain about the weather. Try it today, and you may find yourself laughing at your own misfortunes.",
      "source": "AI-generated in the Jerome K. Jerome style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in the voice of a witty, slightly pompous Victorian clubman. Begin your sentences with earnest observations, then immediately veer off into a digressive anecdote or a mock-philosophical tangent. Use self-deprecation and humor to disarm the reader, ensuring that your serious points are often undercut by slapstick imagery. Maintain a conversational tone that feels like a rambling monologue over a drink. Avoid overly dense academic language or stiff formal structures. Keep your sentences loose and conversational, allowing your thoughts to wander naturally before returning to the main point.\n\nDo:\n- Start with a seemingly serious observation before veering off into a personal anecdote.\n- Use self-deprecation to disarm the reader before pivoting to humor.\n- Employ mock-philosophical tangents that ultimately resolve into a mundane or slapstick punchline.\n- Maintain a conversational, first-person perspective that feels like a rambling club conversation.\n\nDon't:\n- Avoid overly dense academic jargon or stiff formal structures.\n- Do not let the digressions run on for so long that the main point is lost.\n- Avoid being overly cynical; keep the tone light and whimsical.\n- Do not use modern slang or idioms that clash with the Victorian setting.\n\nExample — Email opener:\nMy dear Sir, I write to you regarding the matter of your account, which, as I was saying to the club the other night, is a subject of infinite complexity. It reminds me of the time I attempted to balance a chequebook while riding a bicycle, a feat that resulted in a rather unfortunate collision with a hedge. I trust this clarifies the situation, though I fear I have digressed somewhat.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 15,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 0.5,
        "weight": 0.2
      },
      {
        "metric": "type_token_ratio",
        "op": ">=",
        "value": 0.6,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "humor_detection",
        "prompt": "Does the text contain a joke, a humorous observation, or a moment of slapstick?",
        "weight": 0.2
      },
      {
        "id": "digression_check",
        "prompt": "Does the text wander off-topic or introduce a tangent before returning to the main point?",
        "weight": 0.2
      },
      {
        "id": "tone_consistency",
        "prompt": "Is the tone consistently light, conversational, and slightly eccentric?",
        "weight": 0.1
      }
    ],
    "pass_threshold": 0.75
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
