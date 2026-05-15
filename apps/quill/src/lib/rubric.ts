import type { EvalRubric, RubricDeterministic } from "./types";

const SENTENCE_SPLIT = /(?<=[.!?])\s+(?=[A-Z"'])/;
const WORD_SPLIT = /\s+/;
// Adverbs are approximated by words ending in "ly" and longer than 3 chars,
// dropping a few common false positives (only, apply, etc.).
const ADVERB_EXCEPTIONS = new Set([
  "only",
  "apply",
  "reply",
  "supply",
  "imply",
  "rely",
  "comply",
  "family",
  "july",
  "lily",
  "holy",
  "ally",
  "belly",
  "billy",
  "jelly",
  "ugly",
  "fly",
  "sly",
  "ply",
  "truly",
  "duly",
]);
// A short allowlist of common abstract nouns used as a rough heuristic.
const ABSTRACT_NOUNS = new Set([
  "freedom",
  "justice",
  "truth",
  "love",
  "hate",
  "hope",
  "fear",
  "joy",
  "sorrow",
  "grief",
  "happiness",
  "sadness",
  "faith",
  "doubt",
  "belief",
  "reality",
  "existence",
  "importance",
  "beauty",
  "power",
  "wisdom",
  "courage",
  "honor",
  "virtue",
  "evil",
  "goodness",
  "pain",
  "pleasure",
  "suffering",
  "loneliness",
  "anxiety",
  "stress",
  "pride",
  "shame",
  "guilt",
  "innocence",
  "peace",
  "chaos",
  "order",
  "success",
  "failure",
  "identity",
  "meaning",
  "purpose",
  "destiny",
  "fate",
  "memory",
  "nostalgia",
  "longing",
  "desire",
  "ambition",
  "passion",
  "despair",
]);

const VOWEL_GROUP = /[aeiouy]+/g;

export type DeterministicSnapshot = {
  avg_sentence_length: number;
  max_sentence_length: number;
  adverbs_per_200w: number;
  abstract_per_para: number;
  mono_syllable_ratio: number;
  type_token_ratio: number;
  flesch_kincaid_grade: number;
  word_count: number;
};

export function analyzeText(text: string): DeterministicSnapshot {
  const trimmed = text.trim();
  if (!trimmed) {
    return {
      avg_sentence_length: 0,
      max_sentence_length: 0,
      adverbs_per_200w: 0,
      abstract_per_para: 0,
      mono_syllable_ratio: 0,
      type_token_ratio: 0,
      flesch_kincaid_grade: 0,
      word_count: 0,
    };
  }

  const sentences = trimmed
    .split(SENTENCE_SPLIT)
    .map((s) => s.trim())
    .filter(Boolean);
  const paragraphs = trimmed.split(/\n\s*\n+/).filter(Boolean);
  const words = trimmed
    .split(WORD_SPLIT)
    .map((w) => w.replace(/[^A-Za-z'-]/g, "").toLowerCase())
    .filter(Boolean);

  const sentenceLengths = sentences.map(
    (s) => s.split(WORD_SPLIT).filter((w) => /[A-Za-z]/.test(w)).length
  );

  const wordCount = words.length;

  const adverbs = words.filter(
    (w) => w.length > 3 && w.endsWith("ly") && !ADVERB_EXCEPTIONS.has(w)
  );

  const abstractHits = words.filter((w) => ABSTRACT_NOUNS.has(w)).length;
  const abstractPerPara =
    paragraphs.length === 0 ? 0 : abstractHits / paragraphs.length;

  // ⚡ Bolt: Iterate over words once to count syllables instead of twice
  let monoWords = 0;
  let totalSyllables = 0;
  for (const w of words) {
    const syllables = countSyllables(w);
    if (syllables <= 1) {
      monoWords++;
    }
    totalSyllables += syllables;
  }

  const monoRatio = wordCount === 0 ? 0 : monoWords / wordCount;

  const unique = new Set(words).size;
  const ttr = wordCount === 0 ? 0 : unique / wordCount;

  const fk =
    sentences.length === 0 || wordCount === 0
      ? 0
      : 0.39 * (wordCount / sentences.length) +
        11.8 * (totalSyllables / wordCount) -
        15.59;

  const avg =
    sentenceLengths.length === 0
      ? 0
      : sentenceLengths.reduce((a, b) => a + b, 0) / sentenceLengths.length;
  const max = sentenceLengths.reduce((a, b) => Math.max(a, b), 0);

  return {
    avg_sentence_length: round(avg, 1),
    max_sentence_length: max,
    adverbs_per_200w:
      wordCount === 0 ? 0 : round((adverbs.length / wordCount) * 200, 2),
    abstract_per_para: round(abstractPerPara, 2),
    mono_syllable_ratio: round(monoRatio, 2),
    type_token_ratio: round(ttr, 2),
    flesch_kincaid_grade: round(fk, 1),
    word_count: wordCount,
  };
}

export function scoreDeterministic(
  snapshot: DeterministicSnapshot,
  rubric: EvalRubric
): {
  score: number;
  details: Array<{
    metric: RubricDeterministic["metric"];
    op: RubricDeterministic["op"];
    target: number;
    actual: number;
    pass: boolean;
    weight: number;
  }>;
} {
  const details = rubric.deterministic.map((r) => {
    const actual = (snapshot as Record<string, number>)[r.metric] ?? 0;
    let pass = false;
    if (r.op === "<=") {
      pass = actual <= r.value;
    } else if (r.op === ">=") {
      pass = actual >= r.value;
    } else {
      pass = Math.abs(actual - r.value) < 0.001;
    }
    return {
      metric: r.metric,
      op: r.op,
      target: r.value,
      actual,
      pass,
      weight: r.weight,
    };
  });
  const totalWeight = details.reduce((a, b) => a + b.weight, 0) || 1;
  const passWeight = details
    .filter((d) => d.pass)
    .reduce((a, b) => a + b.weight, 0);
  return { score: passWeight / totalWeight, details };
}

const syllableCache = new Map<string, number>();

// ⚡ Bolt: Cache syllable counts to avoid expensive regex operations
// in the hot path of the text analyzer.
function countSyllables(word: string): number {
  if (!word) {
    return 0;
  }
  const cached = syllableCache.get(word);
  if (cached !== undefined) {
    return cached;
  }

  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  let result;
  if (w.length <= 3) {
    result = 1;
  } else {
    const stripped = w
      .replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "")
      .replace(/^y/, "");
    const matches = stripped.match(VOWEL_GROUP);
    result = Math.max(1, matches ? matches.length : 1);
  }

  syllableCache.set(word, result);
  return result;
}

function round(n: number, places: number): number {
  const m = 10 ** places;
  return Math.round(n * m) / m;
}
