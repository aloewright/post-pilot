// StealthHumanizer v2 - Multi-Pass Humanization Engine
// Public entry point: exports the orchestrator that composes prompts +
// AI Gateway calls + heuristic detection + deterministic post-processing.

import { detectAI } from "./detector";
import { postprocess } from "./postprocess";
import {
  getLevelParams,
  getRehumanizePrompt,
  getSystemPrompt,
} from "./prompts";
import { type GenerateEnv, generateText } from "./providers";
import type {
  HumanizationOptions,
  HumanizationResult,
  SentenceResult,
} from "./types";

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
  "Mr.",
  "Mrs.",
  "Dr.",
  "Prof.",
  "Inc.",
  "Ltd.",
  "etc.",
  "e.g.",
  "i.e.",
  "vs.",
  "al.",
];

function splitIntoSentences(text: string): string[] {
  const sentences: string[] = [];
  let current = "";
  let i = 0;
  while (i < text.length) {
    const ch = text[i] ?? "";
    current += ch;
    if (ch === "." || ch === "!" || ch === "?") {
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
        if (trimmed.length > 0) {
          sentences.push(trimmed);
        }
        current = "";
      }
    }
    i++;
  }
  const trimmed = current.trim();
  if (trimmed.length > 0) {
    sentences.push(trimmed);
  }
  return sentences;
}

function chunkText(text: string, maxWords: number): string[] {
  const sentences = splitIntoSentences(text);
  if (sentences.length === 0) {
    const trimmed = text.trim();
    return trimmed.length > 0 ? [trimmed] : [];
  }
  const chunks: string[] = [];
  let current = "";
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
  if (current.trim().length > 0) {
    chunks.push(current.trim());
  }
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
    options.language,
    options.additionalAvoidPhrases
  );

  const fullPrompt =
    options.language === "zh-CN" || options.language === "zh-TW"
      ? `待改写的文本：\n\n${text}`
      : options.language === "en"
        ? `Text to humanize:\n\n${text}`
        : `IMPORTANT: The text is in a language other than English. Rewrite it in the SAME language. Do not translate.\n\nText to humanize:\n\n${text}`;

  const params = getLevelParams(options.level);
  return generateText(env, systemPrompt, fullPrompt, {
    temperature: params.temperature,
    topP: params.topP,
    maxTokens: 8000,
  });
}

async function rehumanizeFlaggedSentences(
  env: GenerateEnv,
  flaggedSentences: string[],
  options: HumanizationOptions
): Promise<string[]> {
  const rehumanizePrompt = getRehumanizePrompt(flaggedSentences);
  const params = getLevelParams(options.level);
  const result = await generateText(env, rehumanizePrompt, "", {
    temperature: params.temperature,
    topP: params.topP,
    maxTokens: 8000,
  });
  return result
    .split("\n")
    .map((line) => line.replace(/^\d+[.)]\s*/, "").trim())
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
  // Wall-clock budget so the multi-pass loop bails before the Worker's 30s
  // CPU limit cuts us off mid-write. 5s headroom for postprocess + Copyleaks.
  const startMs = Date.now();
  const WALL_CLOCK_BUDGET_MS = 25_000;

  // light/medium = 1 pass, aggressive = 2 passes, ninja = 3 passes
  const maxPasses =
    options.level === "ninja" ? 3 : options.level === "aggressive" ? 2 : 1;

  const chunks = chunkText(text, 2500);

  // Pass 1: Full humanization across chunks
  const parts: string[] = [];
  for (const chunk of chunks) {
    if (!chunk) {
      continue;
    }
    parts.push(await humanizeChunk(env, chunk, options));
  }
  const humanizedText = parts.join("\n\n");

  let currentText = humanizedText;
  let passes = 1;

  // Multi-pass: re-humanize flagged sentences until target score is reached
  if (maxPasses > 1) {
    for (let pass = 2; pass <= maxPasses; pass++) {
      if (Date.now() - startMs > WALL_CLOCK_BUDGET_MS) {
        console.warn(
          JSON.stringify({
            msg: "humanize_budget_exhausted",
            elapsedMs: Date.now() - startMs,
            completedPasses: passes,
          })
        );
        break;
      }
      const detection = detectAI(currentText);
      if (detection.score >= targetScore) {
        break;
      }

      const flagged = detection.sentences
        .filter(
          (s) => s.classification === "ai" || s.classification === "maybe"
        )
        .map((s) => s.text);

      if (flagged.length === 0) {
        break;
      }

      try {
        const rehumanized = await rehumanizeFlaggedSentences(
          env,
          flagged,
          options
        );
        const originalSentences = splitIntoSentences(currentText);
        // Build a queue of replacements per unique original. We pop one per
        // match so duplicate sentences in the input each get a fresh
        // replacement (or fall back to the original if we run out). This
        // pairs flagged[i] ↔ rehumanized[i] exactly even with duplicates.
        const replacementsByOriginal = new Map<string, string[]>();
        flagged.forEach((orig, i) => {
          const r = rehumanized[i];
          if (!r) {
            return;
          }
          const list = replacementsByOriginal.get(orig);
          if (list) {
            list.push(r);
          } else {
            replacementsByOriginal.set(orig, [r]);
          }
        });
        const newSentences = originalSentences.map((orig) => {
          const queue = replacementsByOriginal.get(orig);
          if (queue && queue.length > 0) {
            return queue.shift()!;
          }
          return orig;
        });
        currentText = newSentences.join(" ");
        passes = pass;
      } catch (e) {
        console.error(
          JSON.stringify({
            msg: "rehumanize_pass_failed",
            pass,
            error: (e as Error).message?.slice(0, 400),
          })
        );
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
      original: originalSentences[i] ?? "",
      humanized: humanizedSentences[i] ?? "",
      alternatives: [],
      index: i,
      detectionScore: finalDetection.sentences[i]?.score,
    });
  }

  return {
    sentences: sentenceResults,
    fullText: finalText,
    modelName: "dynamic/text_gen",
    wordCount: { input: inputWordCount, output: outputWordCount },
    timestamp: Date.now(),
    passes,
    finalScore: finalDetection.score,
    options,
  };
}

export type { GenerateEnv } from "./providers";
