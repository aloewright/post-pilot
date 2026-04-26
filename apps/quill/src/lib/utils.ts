import type { ActiveUseCase, Era, Guide, UseCase, VoiceAxis } from "./types";

export type GuideFilter = {
  eras?: Era[];
  useCases?: UseCase[];
  voiceAxes?: VoiceAxis[];
  query?: string;
};

export type SortBy = "author" | "era" | "recent" | "fidelity";

export function filterGuides(guides: Guide[], f: GuideFilter): Guide[] {
  const q = f.query?.trim().toLowerCase() ?? "";
  return guides.filter((g) => {
    if (f.eras?.length && !f.eras.some((e) => g.eras.includes(e))) {
      return false;
    }
    if (
      f.useCases?.length &&
      !f.useCases.some((u) => g.use_cases.includes(u))
    ) {
      return false;
    }
    if (
      f.voiceAxes?.length &&
      !f.voiceAxes.some((v) => g.voice_axes.includes(v))
    ) {
      return false;
    }
    if (q) {
      const haystack =
        `${g.author} ${g.slug} ${g.kicker} ${g.standfirst} ${g.description}`.toLowerCase();
      if (!haystack.includes(q)) {
        return false;
      }
    }
    return true;
  });
}

const ERA_ORDER: Record<Era, number> = {
  "Pre-1900": 0,
  Modernist: 1,
  "Mid-20th": 2,
  "Late-20th": 3,
  Contemporary: 4,
};

export function sortGuides(guides: Guide[], by: SortBy): Guide[] {
  const copy = guides.slice();
  switch (by) {
    case "author":
      return copy.sort((a, b) => a.author.localeCompare(b.author));
    case "era":
      return copy.sort((a, b) => ERA_ORDER[a.era] - ERA_ORDER[b.era]);
    case "recent":
      return copy.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
    case "fidelity":
      return copy.sort((a, b) => topFidelity(b) - topFidelity(a));
    default:
      return copy;
  }
}

export function topFidelity(g: Guide): number {
  if (!g.fidelity || g.fidelity.length === 0) {
    return 0;
  }
  return Math.max(...g.fidelity.map((f) => f.match));
}

export function formatFidelity(match: number): string {
  return `${Math.round(match * 100)}%`;
}

export const ERAS: Era[] = [
  "Pre-1900",
  "Modernist",
  "Mid-20th",
  "Late-20th",
  "Contemporary",
];

export const USE_CASES: ActiveUseCase[] = [
  "docs",
  "email",
  "social",
  "newsletter",
  "fiction",
];

// Wide so any UseCase value (including legacy tags on existing guides)
// can be rendered without a missing-key error. Narrow to ActiveUseCase
// after guide retagging is complete.
export const USE_CASE_LABELS: Record<UseCase, string> = {
  // Active set
  docs: "Docs",
  email: "Email",
  social: "Social",
  newsletter: "Newsletter",
  fiction: "Fiction",
  // Legacy — kept so guide-card / slug route don't blow up on old tags
  support: "Support",
  marketing: "Marketing",
  narrative: "Narrative",
  rfc: "RFC",
  code: "Code",
};

export const VOICE_AXES: VoiceAxis[] = [
  "terse",
  "lyrical",
  "ornate",
  "plain",
  "wry",
];

export const VOICE_LABELS: Record<VoiceAxis, string> = {
  terse: "Terse",
  lyrical: "Lyrical",
  ornate: "Ornate",
  plain: "Plain",
  wry: "Wry",
};
