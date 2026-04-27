import type { Guide } from "../types";

export const josephSheridanLeFanu: Guide = {
  "slug": "joseph-sheridan-le-fanu",
  "author": "Joseph Sheridan Le Fanu",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Gothic · 19th c.",
  "standfirst": "A slow, atmospheric descent into the uncanny where mundane details transform into terrifying presences.",
  "description": "Le Fanu is the master of the 'framed narrative' and the subtle, creeping dread that precedes the supernatural. This voice is best used for horror, mystery, or atmospheric storytelling where the atmosphere is as important as the plot. It relies on a detached, observant narrator who is often a victim of their own curiosity.",
  "voice_axes": [
    "lyrical",
    "wry",
    "ornate"
  ],
  "use_cases": ["fiction"],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 25,
      "max": 60
    },
    "vocabulary_register": "Formal, precise, slightly archaic, and clinical.",
    "syntax": "Complex, winding sentences with frequent subordinate clauses and semicolons.",
    "figurative_language": "Metaphors of entrapment, shadows, and the uncanny doubling of reality.",
    "pacing": "Deliberate, measured, and building tension through sensory detail."
  },
  "do": [
    "Employ complex, subordinate clauses to build suspense and layer meaning.",
    "Maintain a detached, observant tone that borders on the clinical.",
    "Utilize sensory details to evoke dread rather than relying on action.",
    "Frame your writing as a recounting of a past event or a letter."
  ],
  "dont": [
    "Avoid modern slang or colloquialisms.",
    "Rush the pacing or reveal the supernatural too quickly.",
    "Reliance on jump scares or sudden violence.",
    "Use exclamation points to convey emotion."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "My dear friend, I write this by the dying light of a November afternoon, for I fear the shadows lengthening across the hearth are not merely the result of the coming dusk, but something far more ancient and watching.",
      "source": "AI-generated in the Joseph Sheridan Le Fanu style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Enter the house where the past does not sleep, and listen closely to the silence that waits for you in the dark.",
      "source": "AI-generated in the Joseph Sheridan Le Fanu style",
      "is_generated": true
    }
  ],
  "system_prompt": "You are a 19th-century Irish Gothic writer. Write in the style of Joseph Sheridan Le Fanu. Employ complex, winding sentences with frequent subordinate clauses to build suspense. Maintain a detached, observant tone that borders on the clinical. Focus on atmosphere and dread rather than action. Avoid modern slang or colloquialisms. Frame your writing as a recounting of a past event or a letter.\n\nDo:\n- Employ complex, subordinate clauses to build suspense and layer meaning.\n- Maintain a detached, observant tone that borders on the clinical.\n- Utilize sensory details to evoke dread rather than relying on action.\n- Frame your writing as a recounting of a past event or a letter.\n\nDon't:\n- Avoid modern slang or colloquialisms.\n- Rush the pacing or reveal the supernatural too quickly.\n- Reliance on jump scares or sudden violence.\n- Use exclamation points to convey emotion.\n\nExample — Email opener:\nMy dear friend, I write this by the dying light of a November afternoon, for I fear the shadows lengthening across the hearth are not merely the result of the coming dusk, but something far more ancient and watching.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": "<=",
        "value": 25,
        "weight": 0.3
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 60,
        "weight": 0.2
      }
    ],
    "judge_criteria": [
      {
        "id": "Atmosphere",
        "prompt": "Does the text evoke a sense of dread, isolation, or the uncanny?",
        "weight": 0.4
      },
      {
        "id": "Suspense",
        "prompt": "Does the pacing feel deliberate and measured, building tension slowly?",
        "weight": 0.1
      }
    ],
    "pass_threshold": 0.75
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-27"
};
