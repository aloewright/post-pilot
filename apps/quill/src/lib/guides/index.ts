import type { Guide } from "../types";
import { anderson } from "./anderson";
import { asimov } from "./asimov";
import { austen } from "./austen";
import { balzac } from "./balzac";
import { baudelaire } from "./baudelaire";
import { bradbury } from "./bradbury";
import { carroll } from "./carroll";
import { cather } from "./cather";
import { charlotteBronte } from "./charlotte-bronte";
import { chekhov } from "./chekhov";
import { conrad } from "./conrad";
import { defoe } from "./defoe";
import { dickens } from "./dickens";
import { dickinson } from "./dickinson";
import { douglass } from "./douglass";
import { doyle } from "./doyle";
import { emerson } from "./emerson";
import { emilyBronte } from "./emily-bronte";
import { faulkner } from "./faulkner";
import { fitzgerald } from "./fitzgerald";
import { flaubert } from "./flaubert";
import { georgeEliot } from "./george-eliot";
import { hammett } from "./hammett";
import { hardy } from "./hardy";
import { hawthorne } from "./hawthorne";
import { hemingway } from "./hemingway";
import { henryJames } from "./henry-james";
import { hesse } from "./hesse";
import { hugo } from "./hugo";
import { huxley } from "./huxley";
import { ibsen } from "./ibsen";
import { joyce } from "./joyce";
import { kafka } from "./kafka";
import { mann } from "./mann";
import { melville } from "./melville";
import { nietzsche } from "./nietzsche";
import { philipKDick } from "./philip-k-dick";
import { poe } from "./poe";
import { pound } from "./pound";
import { proust } from "./proust";
import { shelley } from "./shelley";
import { stein } from "./stein";
import { stevenson } from "./stevenson";
import { swift } from "./swift";
import { thoreau } from "./thoreau";
import { tolstoy } from "./tolstoy";
import { twain } from "./twain";
import { vonnegut } from "./vonnegut";
import { wharton } from "./wharton";
import { whitman } from "./whitman";
import { wilde } from "./wilde";
import { woolf } from "./woolf";
import { zola } from "./zola";

export const GUIDES: Guide[] = [
  anderson,
  asimov,
  austen,
  balzac,
  baudelaire,
  bradbury,
  carroll,
  cather,
  charlotteBronte,
  chekhov,
  conrad,
  defoe,
  dickens,
  dickinson,
  douglass,
  doyle,
  emerson,
  emilyBronte,
  faulkner,
  fitzgerald,
  flaubert,
  georgeEliot,
  hammett,
  hardy,
  hawthorne,
  hemingway,
  henryJames,
  hesse,
  hugo,
  huxley,
  ibsen,
  joyce,
  kafka,
  mann,
  melville,
  nietzsche,
  philipKDick,
  poe,
  pound,
  proust,
  shelley,
  stein,
  stevenson,
  swift,
  thoreau,
  tolstoy,
  twain,
  vonnegut,
  wharton,
  whitman,
  wilde,
  woolf,
  zola,
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
