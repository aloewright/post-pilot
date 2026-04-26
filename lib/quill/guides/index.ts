import type { Guide } from "../types";
import { asimov } from "./asimov";
import { austen } from "./austen";
import { baldwin } from "./baldwin";
import { borges } from "./borges";
import { carver } from "./carver";
import { didion } from "./didion";
import { hemingway } from "./hemingway";
import { leguin } from "./leguin";
import { orwell } from "./orwell";
import { poe } from "./poe";
import { vonnegut } from "./vonnegut";
import { wilde } from "./wilde";
import { woolf } from "./woolf";

export const GUIDES: Guide[] = [
  hemingway,
  austen,
  orwell,
  didion,
  baldwin,
  leguin,
  borges,
  woolf,
  vonnegut,
  wilde,
  poe,
  carver,
  asimov,
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

export function listGuides(): Guide[] {
  return GUIDES.slice().sort((a, b) => a.author.localeCompare(b.author));
}

export function allSlugs(): string[] {
  return GUIDES.map((g) => g.slug);
}
