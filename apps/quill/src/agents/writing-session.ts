import { Agent, type Connection, type WSMessage } from "agents";
import { applyPresetToSystemPrompt } from "../lib/export";
import { getGuide } from "../lib/guides";
import { getPreset } from "../lib/presets";
import { analyzeText, scoreDeterministic } from "../lib/rubric";

// Extend the wrangler-generated Env with secrets (which aren't declared in
// wrangler.jsonc and so don't appear in the generated interface). Using
// Cloudflare.Env as the base keeps literal-typed bindings (DO namespace,
// POSTPILOT_ENV: "dev") while letting the agent read AI Gateway secrets.
type AgentEnv = Cloudflare.Env & {
  AI_GATEWAY_ID?: string;
  DEFAULT_MODEL?: string;
};

type Role = "user" | "assistant" | "system";

type Message = {
  id: string;
  role: Role;
  content: string;
  createdAt: string;
};

type WritingSessionState = {
  guideSlug: string | null;
  presetSlug: string | null;
  // null → use DEFAULT_MODEL binding at completion time. Any string accepted
  // by the AI Gateway / Workers AI binding is valid.
  model: string | null;
  temperature: number;
  messages: Message[];
};

type ClientCommand =
  | {
      type: "configure";
      guide?: string;
      preset?: string | null;
      model?: string | null;
      temperature?: number;
    }
  | { type: "user"; content: string }
  | { type: "reset" };

const DEFAULT_STATE: WritingSessionState = {
  guideSlug: null,
  presetSlug: null,
  model: null,
  temperature: 0.7,
  messages: [],
};

// Per-session writing assistant. Each session is its own Durable Object
// instance, identified by URL path (`/agents/WritingSessionAgent/:name`).
// State is persisted automatically via Agent.setState; the embedded SQLite
// database is reserved for future search / large transcripts.
export class WritingSessionAgent extends Agent<AgentEnv, WritingSessionState> {
  initialState: WritingSessionState = DEFAULT_STATE;

  async onConnect(connection: Connection) {
    connection.send(
      JSON.stringify({
        type: "hello",
        state: this.state,
      })
    );
  }

  async onMessage(connection: Connection, raw: WSMessage) {
    if (typeof raw !== "string") {
      this.sendError(connection, "binary frames not supported");
      return;
    }
    let cmd: ClientCommand;
    try {
      cmd = JSON.parse(raw) as ClientCommand;
    } catch {
      this.sendError(connection, "invalid JSON");
      return;
    }

    switch (cmd.type) {
      case "configure":
        await this.configure(cmd);
        return;
      case "reset":
        this.setState({ ...this.state, messages: [] });
        return;
      case "user":
        await this.handleUserTurn(connection, cmd.content);
        return;
      default:
        this.sendError(
          connection,
          `unknown command: ${(cmd as { type: string }).type}`
        );
    }
  }

  private async configure(cmd: Extract<ClientCommand, { type: "configure" }>) {
    const next: WritingSessionState = {
      ...this.state,
      guideSlug: cmd.guide ?? this.state.guideSlug,
      presetSlug: cmd.preset === undefined ? this.state.presetSlug : cmd.preset,
      model: cmd.model ?? this.state.model,
      temperature: cmd.temperature ?? this.state.temperature,
    };
    this.setState(next);
  }

  private async handleUserTurn(connection: Connection, content: string) {
    const guide = this.state.guideSlug ? getGuide(this.state.guideSlug) : null;
    if (!guide) {
      this.sendError(
        connection,
        "no guide configured — send {type:'configure', guide:'…'} first"
      );
      return;
    }
    const preset = this.state.presetSlug
      ? getPreset(this.state.presetSlug)
      : null;
    const systemPrompt = applyPresetToSystemPrompt(guide, preset ?? null);

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      createdAt: new Date().toISOString(),
    };

    const transcript = [...this.state.messages, userMessage];
    this.setState({ ...this.state, messages: transcript });

    const reply = await this.completion({
      systemPrompt,
      transcript,
    });

    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: reply,
      createdAt: new Date().toISOString(),
    };

    const finalMessages = [...transcript, assistantMessage];
    this.setState({ ...this.state, messages: finalMessages });

    const snapshot = analyzeText(reply);
    const score = scoreDeterministic(snapshot, guide.eval_rubric);
    connection.send(
      JSON.stringify({
        type: "assistant",
        message: assistantMessage,
        snapshot,
        deterministic_score: score.score,
        deterministic_details: score.details,
      })
    );
  }

  private async completion(args: {
    systemPrompt: string;
    transcript: Message[];
  }): Promise<string> {
    // Use the Workers AI binding with slug-based gateway routing — same
    // pattern as /v1/apply and /v1/images. Binding handles cf-aig-authorization
    // automatically; no URL+token plumbing needed.
    const gatewayId = this.env.AI_GATEWAY_ID;
    if (!(this.env.AI && gatewayId)) {
      const last = args.transcript.at(-1)?.content ?? "";
      return seededStub(last);
    }
    const model =
      this.state.model ?? this.env.DEFAULT_MODEL ?? "openai/gpt-5.5";
    const result = (await this.env.AI.run(
      model as Parameters<Ai["run"]>[0],
      {
        // OpenAI gpt-5+/o1+ require max_completion_tokens and reject custom
        // temperature; older / non-OpenAI models take the conventional shape.
        ...(/^openai\/(gpt-5|o[1-9])/.test(model)
          ? { max_completion_tokens: 1024 }
          : { max_tokens: 1024, temperature: this.state.temperature }),
        messages: [
          { role: "system", content: args.systemPrompt },
          ...args.transcript.map((m) => ({ role: m.role, content: m.content })),
        ],
      },
      { gateway: { id: gatewayId } }
    )) as { choices?: Array<{ message?: { content?: string } }> };
    return result.choices?.[0]?.message?.content ?? "";
  }

  private sendError(connection: Connection, message: string) {
    connection.send(JSON.stringify({ type: "error", message }));
  }
}

function seededStub(input: string): string {
  const trimmed = input.trim();
  return `Thanks for reaching out about: ${trimmed.slice(0, 80)}${
    trimmed.length > 80 ? "…" : ""
  }\n\nA replacement is on its way. You'll have it by Friday.`;
}
