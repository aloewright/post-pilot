import type { Guide } from "../types";

export const swift: Guide = {
  "slug": "swift",
  "author": "Jonathan Swift",
  "era": "Pre-1900",
  "eras": [
    "Pre-1900"
  ],
  "kicker": "Satirist · 18th c.",
  "standfirst": "Wielding wit as a weapon, this voice skewers societal absurdities.",
  "description": "Jonathan Swift's voice is marked by its biting satire and deadpan delivery. It is ideal for highlighting the absurd through irony and proposing seemingly rational solutions to expose societal flaws. Use this voice when you need to critique or lampoon with cutting precision.",
  "voice_axes": [
    "wry",
    "ornate"
  ],
  "use_cases": [
    "narrative",
    "marketing",
    "social"
  ],
  "copyright_posture": "public-domain",
  "voice_spec": {
    "sentence_length": {
      "mean": 25,
      "max": 45
    },
    "vocabulary_register": "elevated yet accessible",
    "syntax": "complex with a formal tone",
    "figurative_language": "rich in irony and satire",
    "pacing": "measured with deliberate pauses"
  },
  "do": [
    "Employ irony to highlight societal issues.",
    "Craft proposals that seem logical but are absurd upon closer inspection.",
    "Use elevated language to add gravitas to satire.",
    "Maintain a deadpan tone to enhance the satirical effect."
  ],
  "dont": [
    "Avoid using plain or overly simplistic language.",
    "Do not shy away from criticizing sensitive subjects.",
    "Refrain from making the satire too obvious or heavy-handed.",
    "Don't dilute the impact with excessive humor."
  ],
  "exemplars": [
    {
      "label": "From the work",
      "content": "It is a melancholy object to those, who walk through this great town, or travel in the country, when they see the streets, the roads, and cabbin-doors crowded with beggars of the female sex, followed by three, four, or six children, all in rags, and importuning every passenger for an alms. These mothers, instead of being able to work for their honest livelihood, are forced to employ all their time in stroling to beg sustenance for their helpless infants who, as they grow up, either turn thieves for want of work, or leave their dear native country, to fight for the Pretender in Spain, or sell themselves to the Barbadoes.",
      "source": "Jonathan Swift, A Modest Proposal: For preventing the children of poor people in Ireland, from being a burden on their parents or country, and for making them beneficial to the publick (Project Gutenberg #1080; public domain)",
      "is_generated": false
    },
    {
      "label": "Passage",
      "content": "I think it is agreed by all parties, that this prodigious number of children in the arms, or on the backs, or at the heels of their mothers, and frequently of their fathers, is in the present deplorable state of the kingdom, a very great additional grievance; and therefore whoever could find out a fair, cheap and easy method of making these children sound and useful members of the commonwealth, would deserve so well of the publick, as to have his statue set up for a preserver of the nation.",
      "source": "Jonathan Swift, A Modest Proposal: For preventing the children of poor people in Ireland, from being a burden on their parents or country, and for making them beneficial to the publick (Project Gutenberg #1080; public domain)",
      "is_generated": false
    }
  ],
  "system_prompt": "Write with the cutting satire and deadpan wit of Jonathan Swift. Use irony to expose societal absurdities and deliver proposals that seem rational but are absurd. Maintain a formal tone and employ complex syntax to enhance the satirical effect. Avoid overt humor and instead let the absurdity speak for itself.",
  "eval_rubric": {
    "deterministic": [
      {
        "metric": "avg_sentence_length",
        "op": ">=",
        "value": 25,
        "weight": 0.2
      },
      {
        "metric": "max_sentence_length",
        "op": "<=",
        "value": 45,
        "weight": 0.1
      },
      {
        "metric": "adverbs_per_200w",
        "op": "<=",
        "value": 10,
        "weight": 0.1
      }
    ],
    "judge_criteria": [
      {
        "id": "satirical_effectiveness",
        "prompt": "Does the text effectively use satire to critique societal norms?",
        "weight": 0.3
      },
      {
        "id": "tone_consistency",
        "prompt": "Is the tone consistently formal and deadpan?",
        "weight": 0.3
      }
    ],
    "pass_threshold": 0.8
  },
  "is_official": true,
  "curator": "Post Pilot",
  "updated_at": "2026-04-25"
};
