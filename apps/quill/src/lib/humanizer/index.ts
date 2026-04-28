// StealthHumanizer v2 - Multi-Pass Humanization Engine
// Public entry point: exports the orchestrator that composes prompts +
// AI Gateway calls + heuristic detection + deterministic post-processing.

import type {
  HumanizationOptions,
  HumanizationResult,
  SentenceResult,
} from './types';
import { getSystemPrompt, getRehumanizePrompt } from './prompts';
import { generateText, type GenerateEnv } from './providers';
import { detectAI } from './detector';
import { postprocess } from './postprocess';

// ==================== LOCAL TEXT UTILITIES ====================
// (These replace the upstream `storage.ts` helpers — no localStorage / no
// browser-specific code; T6 persists results via D1 at the route layer.)

function countWords(s: string): number {
  return s
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
}

const SENTENCE_ABBREVIATIONS = [
  'Mr.',
  'Mrs.',
  'Dr.',
  'Prof.',
  'Inc.',
  'Ltd.',
  'etc.',
  'e.g.',
  'i.e.',
  'vs.',
  'al.',
];

function splitIntoSentences(text: string): string[] {
  const sentences: string[] = [];
  let current = '';
  let i = 0;
  while (i < text.length) {
    const ch = text[i] ?? '';
    current += ch;
    if (ch === '.' || ch === '!' || ch === '?') {
      const beforeMatch = text.slice(Math.max(0, i - 5), i + 1);
      const isAbbrev = SENTENCE_ABBREVIATIONS.some((abbr) =>
        beforeMatch.endsWith(abbr)
      );
      if (!isAbbrev) {
        const next = text[i + 1];
        if (next === '"' || next === "'") {
          current += next;
          i++;
        }
        const trimmed = current.trim();
        if (trimmed.length > 0) sentences.push(trimmed);
        current = '';
      }
    }
    i++;
  }
  const trimmed = current.trim();
  if (trimmed.length > 0) sentences.push(trimmed);
  return sentences;
}

function chunkText(text: string, maxWords: number): string[] {
  const sentences = splitIntoSentences(text);
  if (sentences.length === 0) {
    const trimmed = text.trim();
    return trimmed.length > 0 ? [trimmed] : [];
  }
  const chunks: string[] = [];
  let current = '';
  let currentWords = 0;
  for (const sentence of sentences) {
    const sentenceWords = countWords(sentence);
    if (currentWords + sentenceWords > maxWords && current.length > 0) {
      chunks.push(current.trim());
      current = sentence;
      currentWords = sentenceWords;
    } else {
      current = current.length > 0 ? `${current} ${sentence}` : sentence;
      currentWords += sentenceWords;
    }
  }
  if (current.trim().length > 0) chunks.push(current.trim());
  return chunks;
}

// ==================== INTERNAL PASS HELPERS ====================

async function humanizeChunk(
  env: GenerateEnv,
  text: string,
  options: HumanizationOptions
): Promise<string> {
  const systemPrompt = getSystemPrompt(
    options.level,
    options.style,
    options.tone,
    options.customTone,
    undefined,
    options.language
  );

  const fullPrompt =
    options.language === 'zh-CN' || options.language === 'zh-TW'
      ? `待改写的文本：\n\n${text}`
      : options.language !== 'en'
      ? `IMPORTANT: The text is in a language other than English. Rewrite it in the SAME language. Do not translate.\n\nText to humanize:\n\n${text}`
      : `Text to humanize:\n\n${text}`;

  return generateText(env, systemPrompt, fullPrompt, {
    temperature: 0.85,
    maxTokens: 8000,
  });
}

async function rehumanizeFlaggedSentences(
  env: GenerateEnv,
  flaggedSentences: string[],
  options: HumanizationOptions
): Promise<string[]> {
  const rehumanizePrompt = getRehumanizePrompt(
    flaggedSentences,
    options.level,
    options.style,
    options.tone,
    options.customTone
  );
  const result = await generateText(env, rehumanizePrompt, '', {
    temperature: 0.9,
    maxTokens: 8000,
  });
  return result
    .split('\n')
    .map((line) => line.replace(/^\d+[.)]\s*/, '').trim())
    .filter((line) => line.length > 10);
}

// ==================== PUBLIC ORCHESTRATOR ====================

export async function humanizeText(
  env: GenerateEnv,
  text: string,
  options: HumanizationOptions
): Promise<HumanizationResult> {
  const inputWordCount = countWords(text);
  const targetScore = options.targetScore ?? 80;

  // light/medium = 1 pass, aggressive = 2 passes, ninja = 3 passes
  const maxPasses =
    options.level === 'ninja'
      ? 3
      : options.level === 'aggressive'
      ? 2
      : 1;

  const chunks = chunkText(text, 2500);

  // Pass 1: Full humanization across chunks
  let humanizedText = '';
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i] ?? '';
    if (chunk.length === 0) continue;
    const humanizedChunk = await humanizeChunk(env, chunk, options);
    humanizedText += (i > 0 ? '\n\n' : '') + humanizedChunk;
  }

  let currentText = humanizedText;
  let passes = 1;

  // Multi-pass: re-humanize flagged sentences until target score is reached
  if (maxPasses > 1) {
    for (let pass = 2; pass <= maxPasses; pass++) {
      const detection = detectAI(currentText);
      if (detection.score >= targetScore) break;

      const flagged = detection.sentences
        .filter(
          (s) => s.classification === 'ai' || s.classification === 'maybe'
        )
        .map((s) => s.text);

      if (flagged.length === 0) break;

      try {
        const rehumanized = await rehumanizeFlaggedSentences(
          env,
          flagged,
          options
        );
        const originalSentences = splitIntoSentences(currentText);
        let sentenceIndex = 0;
        const newSentences = originalSentences.map((orig) => {
          if (
            flagged.includes(orig) &&
            sentenceIndex < rehumanized.length
          ) {
            const replacement = rehumanized[sentenceIndex] ?? orig;
            sentenceIndex++;
            return replacement;
          }
          return orig;
        });
        currentText = newSentences.join(' ');
        passes = pass;
      } catch {
        break;
      }
    }
  }

  // Apply deterministic post-processing on top of the LLM output.
  const finalText = postprocess(currentText);
  const finalDetection = detectAI(finalText);
  const outputWordCount = countWords(finalText);

  // Sentence-level diff for the result UI.
  const originalSentences = splitIntoSentences(text);
  const humanizedSentences = splitIntoSentences(finalText);
  const maxLen = Math.max(originalSentences.length, humanizedSentences.length);
  const sentenceResults: SentenceResult[] = [];
  for (let i = 0; i < maxLen; i++) {
    sentenceResults.push({
      original: originalSentences[i] ?? '',
      humanized: humanizedSentences[i] ?? '',
      alternatives: [],
      index: i,
      detectionScore: finalDetection.sentences[i]?.score,
    });
  }

  return {
    sentences: sentenceResults,
    fullText: finalText,
    modelName: 'dynamic/text_gen',
    wordCount: { input: inputWordCount, output: outputWordCount },
    timestamp: Date.now(),
    passes,
    finalScore: finalDetection.score,
    options,
  };
}

export type { GenerateEnv } from './providers';
