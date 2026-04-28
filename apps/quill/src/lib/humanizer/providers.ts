// Thin Cloudflare AI Gateway adapter for the humanizer engine.
// All LLM traffic is routed through the gateway dynamic route per project policy.

export interface GenerateEnv {
  AI: Ai;
  AI_GATEWAY_ID?: string;
}

export async function generateText(
  env: GenerateEnv,
  systemPrompt: string,
  userPrompt: string,
  opts?: { temperature?: number; maxTokens?: number }
): Promise<string> {
  const gatewayId = env.AI_GATEWAY_ID;
  if (!(env.AI && gatewayId)) {
    // Local-dev fallback: echo the user prompt back unchanged.
    return userPrompt;
  }
  const result = (await env.AI.run(
    "dynamic/text_gen" as Parameters<Ai["run"]>[0],
    {
      max_tokens: opts?.maxTokens ?? 8000,
      temperature: opts?.temperature ?? 0.85,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    },
    { gateway: { id: gatewayId } }
  )) as { choices?: Array<{ message?: { content?: string } }> };
  const output = result.choices?.[0]?.message?.content?.trim() ?? "";
  if (!output) throw new Error("AI Gateway returned empty response");
  return output;
}
