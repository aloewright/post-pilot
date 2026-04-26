export type Era =
  | "Pre-1900"
  | "Modernist"
  | "Mid-20th"
  | "Late-20th"
  | "Contemporary";

export type VoiceAxis = "terse" | "lyrical" | "ornate" | "plain" | "wry";

// Active set — what the UI surfaces.
export type ActiveUseCase =
  | "docs"
  | "email"
  | "social"
  | "newsletter"
  | "fiction";

// Legacy values retained until guide retagging is complete.
// Kept in the union so existing src/lib/guides/*.ts files type-check.
// Will be narrowed to ActiveUseCase once retagging is done.
export type UseCase =
  | ActiveUseCase
  | "support"
  | "marketing"
  | "narrative"
  | "rfc"
  | "code";

export type CopyrightPosture = "public-domain" | "voice-inspired" | "licensed";

export type VoiceSpec = {
  sentence_length: { mean: number; max: number };
  vocabulary_register: string;
  syntax: string;
  figurative_language: string;
  pacing: string;
};

export type RubricDeterministic = {
  metric:
    | "avg_sentence_length"
    | "max_sentence_length"
    | "adverbs_per_200w"
    | "abstract_per_para"
    | "mono_syllable_ratio"
    | "type_token_ratio"
    | "flesch_kincaid_grade";
  op: "<=" | ">=" | "==";
  value: number;
  weight: number;
};

export type JudgeCriterion = {
  id: string;
  prompt: string;
  weight: number;
};

export type EvalRubric = {
  deterministic: RubricDeterministic[];
  judge_criteria: JudgeCriterion[];
  pass_threshold: number;
};

export type Exemplar = {
  label: string;
  content: string;
  source: string;
  is_generated: boolean;
};

export type FidelityScore = {
  provider: "openai" | "anthropic" | "workers-ai";
  model: string;
  match: number; // 0..1
  updated_at: string; // ISO
};

export type Guide = {
  slug: string;
  author: string;
  era: Era;
  eras: Era[];
  kicker: string; // small-caps label
  standfirst: string; // subhead under lede
  description: string;
  voice_axes: VoiceAxis[];
  use_cases: UseCase[];
  copyright_posture: CopyrightPosture;
  voice_spec: VoiceSpec;
  do: string[];
  dont: string[];
  exemplars: Exemplar[];
  system_prompt: string;
  eval_rubric: EvalRubric;
  fidelity?: FidelityScore[];
  is_official: boolean;
  curator: string;
  updated_at: string;
};

export type UseCasePreset = {
  slug: UseCase;
  name: string;
  description: string;
  modifier: string; // appended to system prompt
  target_length: "micro" | "short" | "medium" | "long";
};
