// Thin Cloudflare AI Gateway adapter for the humanizer engine.
// All LLM traffic is routed through the gateway dynamic route per project policy.

export interface GenerateEnv {
  AI: Ai;
  AI_GATEWAY_ID?: string;
}

// The env.AI binding doesn't accept an AbortSignal, so we race the call
// against a timer. The original promise will keep running in the background
// until it resolves/rejects on its own — that's fine; we just stop waiting.
async function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      p,
      new Promise<T>((_, reject) => {
        timer = setTimeout(
          () => reject(new Error(`LLM call timed out after ${ms}ms`)),
          ms
        );
      }),
    ]);
  } finally {
    if (timer) {
      clearTimeout(timer);
    }
  }
}

export async function generateText(
  env: GenerateEnv,
  systemPrompt: string,
  userPrompt: string,
  opts?: {
    temperature?: number;
    topP?: number;
    maxTokens?: number;
    timeoutMs?: number;
  }
): Promise<string> {
  const gatewayId = env.AI_GATEWAY_ID;
  if (!(env.AI && gatewayId)) {
    throw new Error(
      "AI Gateway not configured (AI binding or AI_GATEWAY_ID missing)"
    );
  }
  const result = (await withTimeout(
    env.AI.run(
      "dynamic/text_gen" as Parameters<Ai["run"]>[0],
      {
        max_tokens: opts?.maxTokens ?? 8000,
        temperature: opts?.temperature ?? 0.85,
        top_p: opts?.topP ?? 0.95,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
      },
      { gateway: { id: gatewayId } }
    ),
    opts?.timeoutMs ?? 20_000
  )) as { choices?: Array<{ message?: { content?: string } }> };
  const output = result.choices?.[0]?.message?.content?.trim() ?? "";
  if (!output) {
    throw new Error("AI Gateway returned empty response");
  }
  return output;
}
