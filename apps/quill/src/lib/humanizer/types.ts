// Type definitions for StealthHumanizer

// ==================== HUMANIZATION TYPES ====================

export type RewriteLevel = "light" | "medium" | "aggressive" | "ninja";
export type StylePreset =
  | "humanize"
  | "academic"
  | "casual"
  | "professional"
  | "creative"
  | "technical";

export type TonePreset =
  | "academic-formal"
  | "academic-casual"
  | "journalistic"
  | "creative-writing"
  | "conversational"
  | "professional"
  | "technical"
  | "persuasive"
  | "storytelling"
  | "humorous"
  | "emotional"
  | "analytical"
  | "custom";

export interface ToneConfig {
  id: TonePreset;
  name: string;
  description: string;
  icon: string;
  personalityTraits: string[];
  vocabularyPreferences: string[];
  writingPatterns: string[];
}

export interface HumanizationOptions {
  level: RewriteLevel;
  style: StylePreset;
  tone: TonePreset;
  customTone?: string;
  targetScore?: number;
  language: string;
  /** Academic domain for corpus-calibrated style matching */
  domain?: string;
  /**
   * Frequency-ranked phrases that prior Copyleaks scans flagged. Injected
   * into the system prompt as an explicit avoid-list so the rewrite pass
   * doesn't repeat the same AI tells. Optional — best-effort only.
   */
  additionalAvoidPhrases?: string[];
}

export interface SentenceResult {
  original: string;
  humanized: string;
  alternatives?: string[];
  index: number;
  detectionScore?: number;
}

export interface HumanizationResult {
  sentences: SentenceResult[];
  fullText: string;
  modelName: string;
  wordCount: { input: number; output: number };
  timestamp: number;
  passes: number;
  finalScore: number;
  options: HumanizationOptions;
  confidenceReport?: {
    humanLikenessScore: number;
    confidence: number;
    calibrationBand: "high" | "medium" | "low";
  };
  runtimeModelScore?: {
    modelSource: string;
    probabilityHuman: number;
    score: number;
  };
  fallbackBehavior?: {
    used: boolean;
    reason: string;
  };
  provenanceDisclosure?: {
    source: string;
    policyVersion: string;
    modelSelection: string;
  };
}

// ==================== DETECTION TYPES ====================

export interface DetectionResult {
  score: number;
  sentences: SentenceDetectionResult[];
  overallVerdict: "human" | "ai" | "mixed";
  analysis: {
    perplexity: number;
    burstiness: number;
    vocabularyDiversity: number;
    sentenceLengthVariation: number;
    transitionFrequency: number;
    passiveVoiceRatio: number;
    aiPhraseDensity: number;
    sentenceStartDiversity: number;
    pronounUsage: number;
    hedgingFrequency: number;
    quantifierOveruse: number;
  };
  readability: ReadabilityScores;
}

export interface SentenceDetectionResult {
  text: string;
  score: number;
  classification: "human" | "maybe" | "ai";
  issues: string[];
}

export interface ReadabilityScores {
  fleschReadingEase: number;
  fleschKincaidGrade: number;
  colemanLiauIndex: number;
  avgWordsPerSentence: number;
  avgSyllablesPerWord: number;
  readingTimeMinutes: number;
  totalSentences: number;
  totalWords: number;
  totalSyllables: number;
}

// ==================== HISTORY TYPES ====================

export interface HistoryEntry {
  id: string;
  originalText: string;
  humanizedText: string;
  options: HumanizationOptions;
  wordCount?: { input: number; output: number };
  timestamp: number;
  modelName?: string;
  finalScore?: number;
  passes?: number;
  detection?: DetectionResult;
}
