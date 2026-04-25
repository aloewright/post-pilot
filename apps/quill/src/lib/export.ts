import type { Guide, UseCasePreset } from "./types";

export function guideToJSON(g: Guide): string {
  return JSON.stringify(
    {
      slug: g.slug,
      author: g.author,
      era: g.era,
      voice_spec: g.voice_spec,
      do: g.do,
      dont: g.dont,
      system_prompt: g.system_prompt,
      eval_rubric: g.eval_rubric,
    },
    null,
    2,
  );
}

export function guideToYAML(g: Guide): string {
  const lines: string[] = [];
  lines.push(`slug: ${g.slug}`);
  lines.push(`author: ${quoteIfNeeded(g.author)}`);
  lines.push(`era: ${g.era}`);
  lines.push("voice_spec:");
  lines.push(
    `  sentence_length: { mean: ${g.voice_spec.sentence_length.mean}, max: ${g.voice_spec.sentence_length.max} }`,
  );
  lines.push(
    `  vocabulary_register: ${quoteIfNeeded(g.voice_spec.vocabulary_register)}`,
  );
  lines.push(`  syntax: ${quoteIfNeeded(g.voice_spec.syntax)}`);
  lines.push(
    `  figurative_language: ${quoteIfNeeded(g.voice_spec.figurative_language)}`,
  );
  lines.push(`  pacing: ${quoteIfNeeded(g.voice_spec.pacing)}`);
  lines.push("do:");
  for (const d of g.do) lines.push(`  - ${quoteIfNeeded(d)}`);
  lines.push("dont:");
  for (const d of g.dont) lines.push(`  - ${quoteIfNeeded(d)}`);
  lines.push(`system_prompt: |-`);
  for (const s of g.system_prompt.split("\n")) lines.push(`  ${s}`);
  return lines.join("\n");
}

export function applyPresetToSystemPrompt(
  g: Guide,
  preset: UseCasePreset | null,
): string {
  if (!preset) return g.system_prompt;
  return `${g.system_prompt}\n\n---\n\n${preset.modifier}`;
}

function quoteIfNeeded(s: string): string {
  if (/^[\w\-. ]+$/.test(s) && !s.includes(":")) return s;
  return JSON.stringify(s);
}
