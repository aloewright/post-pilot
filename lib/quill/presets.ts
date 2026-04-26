import type { UseCasePreset } from "./types";

export const USE_CASE_PRESETS: UseCasePreset[] = [
  {
    slug: "support",
    name: "Customer support",
    description:
      "Warm, clear replies to customer questions. Acknowledge the problem, state the next step, close simply.",
    modifier:
      "You are replying to a customer message. Acknowledge their situation in one sentence, name the next concrete step, and close. Do not apologize more than once. Do not invent facts.",
    target_length: "short",
  },
  {
    slug: "docs",
    name: "Technical docs",
    description:
      "Concise reference or how-to prose. Prefer active voice, verb-first headings, and concrete examples.",
    modifier:
      "You are writing technical documentation. Use active voice. Lead with the action. Give one concrete example per concept. Avoid marketing language.",
    target_length: "medium",
  },
  {
    slug: "email",
    name: "Cold email",
    description:
      "Brief, respectful outbound email. Name the context, ask one thing, leave room for no.",
    modifier:
      "You are writing a cold email. Open with specific context showing you know who you are writing to. Make one ask. Offer an easy out. Sign off plainly.",
    target_length: "short",
  },
  {
    slug: "marketing",
    name: "Marketing copy",
    description:
      "Short, quotable product copy. Concrete benefits. No hype words. One strong line over three weak ones.",
    modifier:
      "You are writing marketing copy. Replace any abstract claim with a concrete detail. Cut adjectives that do not earn their place. Aim for one line that could be pulled as a quote.",
    target_length: "micro",
  },
  {
    slug: "narrative",
    name: "Narrative / fiction",
    description:
      "Scene or passage-level prose. Keep the author's voice in motion across the whole passage.",
    modifier:
      "You are writing a short narrative passage. Stay in scene. Prefer image to explanation. Let the voice carry the paragraph, not the plot summary.",
    target_length: "long",
  },
  {
    slug: "rfc",
    name: "RFC / design doc",
    description:
      "Proposal-shaped prose. Problem, proposal, alternatives, trade-offs, open questions. Plainspoken.",
    modifier:
      "You are writing an engineering RFC. Use short sections: Problem, Proposal, Alternatives, Trade-offs, Open questions. Plain language. No rhetorical flourishes.",
    target_length: "medium",
  },
  {
    slug: "social",
    name: "Social post",
    description:
      "One post, one idea. A hook in the first line that survives without the rest.",
    modifier:
      "You are writing a single social post. First line must stand alone as a hook. No hashtags unless asked. Under 280 characters unless told otherwise.",
    target_length: "micro",
  },
  {
    slug: "code",
    name: "Code comment",
    description:
      "Short explanatory comment. Why over what. One line when possible.",
    modifier:
      "You are writing a comment for a piece of code. Explain WHY, not WHAT. One line where possible, never more than three.",
    target_length: "micro",
  },
];

export function getPreset(slug: string): UseCasePreset | undefined {
  return USE_CASE_PRESETS.find((p) => p.slug === slug);
}
