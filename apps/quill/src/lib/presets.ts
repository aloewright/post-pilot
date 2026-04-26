import type { UseCasePreset } from "./types";

export const USE_CASE_PRESETS: UseCasePreset[] = [
  {
    slug: "docs",
    name: "Technical docs",
    description:
      "Concise reference or how-to prose. Active voice, verb-first headings, concrete examples.",
    modifier:
      "You are writing technical documentation. Use active voice. Lead with the action. Give one concrete example per concept. Avoid marketing language.",
    target_length: "medium",
  },
  {
    slug: "email",
    name: "Email",
    description:
      "Brief, respectful written-to-one-person email. Name the context, ask one thing, leave room for no.",
    modifier:
      "You are writing an email. Open with specific context showing you know who you are writing to. Make one ask. Offer an easy out. Sign off plainly.",
    target_length: "short",
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
    slug: "newsletter",
    name: "Newsletter",
    description:
      "Voice-driven, longer-form post sent to a list. Personality stays on; jargon stays off.",
    modifier:
      "You are writing a newsletter post. Keep the author's voice in motion across the whole piece. Open with a hook that earns the click. Use one strong image per section. Sign off plainly.",
    target_length: "long",
  },
  {
    slug: "fiction",
    name: "Fiction",
    description:
      "Scene or passage-level prose. Keep the author's voice in motion across the whole passage.",
    modifier:
      "You are writing a short narrative passage. Stay in scene. Prefer image to explanation. Let the voice carry the paragraph, not the plot summary.",
    target_length: "long",
  },
];

export function getPreset(slug: string): UseCasePreset | undefined {
  return USE_CASE_PRESETS.find((p) => p.slug === slug);
}
