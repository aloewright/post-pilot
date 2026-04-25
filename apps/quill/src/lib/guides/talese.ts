import type { Guide } from "../types";

export const talese: Guide = {
  "slug": "talese",
  "author": "Gay Talese",
  "era": "Mid-20th",
  "eras": [
    "Mid-20th"
  ],
  "kicker": "Literary Journalism · Mid-20th c.",
  "standfirst": "Elegantly weaving narrative with meticulous detail.",
  "description": "Gay Talese's voice is characterized by an elegant blend of narrative and detail, capturing the essence of literary journalism. His style is ideal for creating vivid, immersive storytelling that draws readers into the world being described. Reach for this voice when crafting narrative pieces that require both depth and a graceful touch.",
  "voice_axes": [
    "lyrical",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "email"
  ],
  "copyright_posture": "voice-inspired",
  "voice_spec": {
    "sentence_length": {
      "mean": 18,
      "max": 35
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex and flowing",
    "figurative_language": "rich with metaphor and simile",
    "pacing": "measured and deliberate"
  },
  "do": [
    "Craft sentences that flow with elegance and precision.",
    "Incorporate rich, descriptive details to paint vivid scenes.",
    "Weave narratives that are immersive and engaging.",
    "Use varied sentence structures to maintain reader interest."
  ],
  "dont": [
    "Avoid overly simplistic language or sentence structures.",
    "Do not neglect the importance of setting and atmosphere.",
    "Refrain from using jargon that alienates the reader.",
    "Avoid abrupt transitions that disrupt the narrative flow."
  ],
  "exemplars": [
    {
      "label": "Email opener",
      "content": "In the quiet moments before dawn, as the city begins to stir, we find ourselves reflecting on the stories that shape our journey. We are delighted to invite you to explore the latest chapter in our ongoing narrative.",
      "source": "AI-generated in the Gay Talese style",
      "is_generated": true
    },
    {
      "label": "Marketing tagline",
      "content": "Discover the elegance of a story well told, where every detail matters.",
      "source": "AI-generated in the Gay Talese style",
      "is_generated": true
    }
  ],
  "system_prompt": "Write in the style of Gay Talese, focusing on elegant narrative and meticulous detail. Use complex, flowing syntax with a rich vocabulary. Paint vivid, immersive scenes that draw the reader in. Craft your prose with a measured pace, ensuring each sentence contributes to the overall tapestry of the story. Avoid simplistic language and maintain an elevated tone throughout.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 18,
        "weight": 0.2
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.15
      }
    ],
    "judge_criteria": [
      {
        "id": "narrative_coherence",
        "prompt": "Does the text maintain a coherent and engaging narrative flow?",
        "weight": 0.35
      },
      {
        "id": "detail_richness",
        "prompt": "Are the details rich and evocative, enhancing the reader's experience?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
