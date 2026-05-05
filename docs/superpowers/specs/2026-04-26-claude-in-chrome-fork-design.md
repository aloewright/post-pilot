# Claude-in-Chrome Fork — Agentic Browser Control Extensions

**Date:** 2026-04-26
**Status:** Approved (awaiting user re-review)
**Goal:** Fork `noemica-io/open-claude-in-chrome` and ship five additive feature layers that let Claude Code (a) drive any open tab, (b) save and schedule recipes, (c) subscribe to push events from pages, (d) read multi-tab state in one call, and (e) mutate the DOM through a typed tool instead of raw JS strings.

## Background

The user has Anthropic's `claude-in-chrome` extension installed. It exposes ~25 MCP tools that let Claude Code drive a Chrome browser through `chrome.debugger.attach` (full CDP). The architecture is:

```
Claude Code (CLI)
    └─ stdio MCP
        └─ Local Node MCP server  (port 18765 multiplexer)
            └─ Native messaging host  (Chrome process)
                └─ MV3 service worker
                    ├─ chrome.debugger.attach (CDP 1.3) — mouse/keyboard/screenshot/network
                    ├─ chrome.scripting (content script — a11y tree, element refs)
                    └─ chrome.runtime.connectNative (bridge back to MCP)
```

Anthropic's official binary is closed source. A clean MIT reverse-engineering exists at `noemica-io/open-claude-in-chrome` and is the basis for this fork. (Verify the repo exists and re-check the latest sha at fork time.)

## Five gaps in the current extension

| Gap | What's missing today |
|---|---|
| **A** | `tabId`-taking tools require the tab to be in the "MCP" tab group; tabs the user already has open (logged-in sessions) cannot be targeted |
| **B** | `chrome.alarms` is used only for the service-worker keepalive — no scheduled flows, no recipe save-and-replay |
| **C** | All page state is pull-only — no `MutationObserver` bridge, no streaming network events, no "wait until X appears" |
| **D** | No single-call snapshot of all open tabs and extension runtime state — Claude must poll multiple tools to assemble multi-tab context |
| **E** | DOM mutations require hand-writing JS strings into `javascript_tool`; no typed `manipulate_dom` primitive |

## Locked decisions

### Trust model — all-tabs

Existing code gates every action on `isInGroup(tabId)`. **This guard is removed.** Any `tabId` returned by `chrome.tabs.query` is actionable. Risk surface (banking, email, secrets) is acknowledged and accepted — this is a personal-dev-machine extension under the user's sole control. Document the change prominently in the fork's README.

### Fork strategy — additive layers, upstream-friendly

Fork `noemica-io/open-claude-in-chrome` to a new repo (suggested name: `aloewright/quill-in-chrome`). Land all new behavior under explicit feature directories so the fork stays mergeable with upstream:

```
src/
  ├─ host/                    # existing (MCP server, native host) — minimal edits
  ├─ background.js            # existing — minimal edits, only register new dispatchers
  ├─ content.js               # existing — minimal edits, add MutationObserver hook
  └─ extensions/              # NEW — all fork-specific code lives here
      ├─ tabs/                # gap A
      ├─ recipes/             # gap B (recipes + schedules)
      ├─ watch/               # gap C
      ├─ state/               # gap D
      └─ dom/                 # gap E
```

Each `extensions/<feature>/` module exposes:
- `tools.ts` — the MCP tool definitions for that feature
- `dispatch.ts` — the service-worker handler for those tools
- `storage.ts` — its `chrome.storage` schema/accessors (if any)

## Persistence schema

```ts
// chrome.storage.local — survives browser restarts
type LocalStorage = {
  recipes: Record<RecipeName, RecipeRecord>;
  schedules: Record<ScheduleId, ScheduleRecord>;
  watcher_meta: Record<WatcherId, WatcherMetaRecord>;
};

// chrome.storage.session — ephemeral, per-browser-session
type SessionStorage = {
  watcher_events: Record<WatcherId, WatcherEvent[]>;
};

type RecipeName = string;       // user-chosen unique key
type ScheduleId = string;       // uuid
type WatcherId = string;        // uuid

type RecipeStep = {
  tool: string;                 // MCP tool name, e.g. "navigate", "click", "type"
  args: Record<string, unknown>; // any nested string can use {{var}} placeholders
};

type RecipeRecord = {
  steps: RecipeStep[];
  vars_schema?: Record<string, "string" | "number" | "boolean">;
  created_at: string;           // ISO
  description?: string;
};

type CronSpec =
  | { everyMinutes: number }    // chrome.alarms periodic; min 1.0 for packaged
  | { atISOString: string };    // one-shot schedule

type ScheduleRecord = {
  id: ScheduleId;
  cron: CronSpec;
  recipe: RecipeName;
  vars?: Record<string, unknown>;
  enabled: boolean;
  next_run: string;             // ISO
  last_run?: string;
  last_status?: "ok" | "error";
  last_error?: string;
};

type WatcherType = "element" | "network" | "console";

type WatcherMetaRecord = {
  id: WatcherId;
  type: WatcherType;
  tabId: number;
  params: Record<string, unknown>;
  created_at: string;
};

type WatcherEvent = {
  ts: string;                   // ISO
  payload: unknown;             // shape depends on watcher type (see below)
};
```

### Watcher queue cap policy

Each watcher's event queue is capped at **500 events**. When the cap is exceeded, oldest events drop FIFO and a `dropped_since_last_drain` counter is maintained on the watcher's meta record. `watch_events(id, max?)` drains and returns events plus the dropped counter, then resets the counter.

### Schedule cadence note

`chrome.alarms.create` minimum `periodInMinutes` is **1.0 in packaged extensions** (0.5 in unpacked dev mode). Schedules with `everyMinutes < 1` are rejected at `schedule_create` time with an explicit error.

## New MCP tool surface (~18 tools)

All inputs and outputs are JSON-serializable. All tools that take `tabId: number` accept any tab from `chrome.tabs.query` (gap A — no group filter).

### Tabs (gap A)
| Tool | In | Out |
|---|---|---|
| `tabs_list_all` | — | `Array<{id, url, title, active, windowId, index, pinned, audible}>` |

### State (gap D)
| Tool | In | Out |
|---|---|---|
| `browser_state` | `include?: { a11y?: bool; cookies?: bool }` | `{ tabs: TabSummary[]; activeWindowId; schedules_running: ScheduleId[]; watchers_active: WatcherId[] }` |

`TabSummary` extends `tabs_list_all`'s shape and optionally embeds an a11y snapshot per tab when `include.a11y === true`.

### DOM (gap E)
| Tool | In | Out |
|---|---|---|
| `manipulate_dom` | `{ tabId; ops: DomOp[] }` | `{ results: Array<{ ok: bool; error?: string; matched: number }> }` |

`DomOp` is a discriminated union:
```ts
type DomOp =
  | { kind: "set_attribute"; selector: string; attr: string; value: string | null }
  | { kind: "set_text"; selector: string; text: string }
  | { kind: "add_class"; selector: string; className: string }
  | { kind: "remove_class"; selector: string; className: string }
  | { kind: "insert_html"; selector: string; position: "beforebegin"|"afterbegin"|"beforeend"|"afterend"; html: string }
  | { kind: "remove"; selector: string };
```

Implementation: `chrome.scripting.executeScript` invokes a fixed interpreter `function applyOps(ops)` injected into the page, never raw user JS strings.

### Watch (gap C)
| Tool | In | Out |
|---|---|---|
| `watch_element` | `{ tabId; selector; on?: ("appear"\|"disappear"\|"mutate")[]; subtree?: bool }` | `{ watcher_id }` |
| `watch_network` | `{ tabId; urlPattern?; methodPattern?; phase?: ("request"\|"response")[] }` | `{ watcher_id }` |
| `watch_console` | `{ tabId; levels?: ("log"\|"warn"\|"error"\|"info"\|"debug")[] }` | `{ watcher_id }` |
| `watch_events` | `{ watcher_id; max?: number }` | `{ events: WatcherEvent[]; dropped_since_last_drain: number }` |
| `watch_list` | — | `WatcherMetaRecord[]` |
| `watch_stop` | `{ watcher_id }` | `{ stopped: bool }` |

Event payload shapes:
- **element**: `{ kind: "appear"|"disappear"|"mutate"; selector; matchedCount; sample?: { html: string } }`
- **network**: `{ phase: "request"|"response"; method; url; status?; headers; durationMs? }`
- **console**: `{ level; args: string[]; stack?: string }`

### Recipes + schedules (gap B)
| Tool | In | Out |
|---|---|---|
| `recipe_save` | `{ name; steps: RecipeStep[]; vars_schema?; description? }` | `{ saved: bool }` |
| `recipe_list` | — | `RecipeRecord[]` (with names) |
| `recipe_run` | `{ name; vars?: Record<string, unknown>; tabId? }` | `{ ok: bool; results: ToolResult[]; failed_at?: number }` |
| `recipe_delete` | `{ name }` | `{ deleted: bool }` |
| `schedule_create` | `{ recipe; cron: CronSpec; vars?; name? }` | `{ id: ScheduleId; next_run }` |
| `schedule_list` | — | `ScheduleRecord[]` |
| `schedule_delete` | `{ id }` | `{ deleted: bool }` |
| `schedule_pause` | `{ id }` | `{ enabled: false }` |
| `schedule_resume` | `{ id }` | `{ enabled: true; next_run }` |

### Recipe execution semantics

- Steps run sequentially in the same tab unless a step explicitly switches with a `tabs_create_mcp` or sets a different `tabId` arg.
- `{{var}}` substitution in any string-valued arg, applied before each step.
- A step that throws halts execution. The recipe's record is updated with `last_status: "error"`, `last_error: <message>`, `failed_at: <step index>`. Schedules still run on the next tick — there's no automatic backoff in v1.
- No conditional branching, no loops, no nested recipes in v1. (Future: a `recipe_run` step type that calls a sub-recipe.)

### Schedule dispatch

A single global `chrome.alarms` slot named `quill:schedules-tick` fires every minute. This is **a second alarm** alongside the existing service-worker `keepalive` alarm (0.4 min) — total alarms: 2, well under Chrome's 500-per-extension quota. The `onAlarm` handler:
1. Reads all `enabled` schedules from `chrome.storage.local`.
2. For each whose `next_run <= now`, executes the recipe via the in-process dispatcher (same path as live `recipe_run` tool calls).
3. Updates `last_run`, `last_status`, and `next_run` (re-derived from `cron`).
4. For one-shot `atISOString` schedules, sets `enabled: false` after running.

The single-tick approach keeps the alarm count low (Chrome's quota: 500 alarms per extension) regardless of schedule count.

## File structure

```
quill-in-chrome/
├─ README.md                 (document fork divergence — all-tabs trust, new tools)
├─ manifest.json             (existing perms, no new ones — alarms/scripting/debugger/tabs/storage already declared)
├─ host/                     (existing MCP server, native host — minimal edits)
│  ├─ mcp-server.js          (register new tools from extensions/<feat>/tools.ts via dynamic import)
│  └─ native-host.js         (no changes)
├─ background.js             (existing dispatcher; +50 lines to register new feature dispatchers)
├─ content.js                (existing; +30 lines for MutationObserver hook used by watch_element)
└─ src/extensions/
   ├─ tabs/
   │  ├─ tools.ts            (tabs_list_all)
   │  └─ dispatch.ts         (chrome.tabs.query wrapper; remove isInGroup gates from existing tools — done in background.js, not here)
   ├─ state/
   │  ├─ tools.ts            (browser_state)
   │  └─ dispatch.ts
   ├─ dom/
   │  ├─ tools.ts            (manipulate_dom + DomOp schema)
   │  ├─ dispatch.ts
   │  └─ apply-ops.ts        (the function injected via chrome.scripting.executeScript)
   ├─ watch/
   │  ├─ tools.ts            (watch_*)
   │  ├─ dispatch.ts         (watcher registry + chrome.debugger event listeners)
   │  ├─ storage.ts          (event queue with cap policy)
   │  └─ content-observer.ts (MutationObserver code injected into the content script)
   └─ recipes/
      ├─ tools.ts            (recipe_*, schedule_*)
      ├─ dispatch.ts
      ├─ executor.ts         (sequential step runner with {{var}} interpolation)
      ├─ scheduler.ts        (chrome.alarms tick handler)
      └─ storage.ts
```

## Out of scope for v1

- Conditional branching / loops in recipes (only linear sequences ship).
- Sub-recipe composition (recipes calling recipes).
- Domain allowlists / per-domain rate limits (all-tabs is the trust model; refine in v2 if pain shows up).
- Cron expressions richer than `{ everyMinutes }` / `{ atISOString }`. (Chrome alarms can't natively express full cron; would require a custom scheduler tick. Defer.)
- A side-panel UI for browsing recipes / watching tasks. (Add later as a pure-UI layer reading from `chrome.storage`.)
- Backoff / retry on failed schedule runs.
- Sub-watcher composition (watcher that watches another watcher's queue).
- Submit to Chrome Web Store. v1 ships as a sideloaded unpacked extension (Developer Mode).
- Encryption of `chrome.storage.local` recipe contents. Recipes can contain credentials in vars — assume the disk where Chrome stores data is trusted.

## Open questions / verification before implementation

1. **OSS mirror exists at the assumed location.** Verify `noemica-io/open-claude-in-chrome` is reachable and the latest sha is checked at fork time. If the upstream has moved, find the replacement before cloning.
2. **CDP attachment exclusivity** with Anthropic's official extension still installed. The plan assumes the user uninstalls the official Anthropic extension and uses our fork. If they want both running, `chrome.debugger.attach` on a tab is exclusive — concurrent operation isn't possible. The README must call this out.
3. **Native messaging host registration**. The fork must register a different native messaging host name from Anthropic's (e.g., `com.aloewright.quill_in_chrome`) so the two binaries don't collide. The MCP server install script needs to update the host manifest path.
4. **MCP client config**. Claude Code's `~/.claude/mcp.json` (or equivalent) needs to point at the new MCP server binary, not Anthropic's. Document the swap.
5. **`chrome.scripting.executeScript` and CSP-restricted pages.** Pages with strict Content Security Policy can block injected scripts. `manipulate_dom` should detect CSP rejections and return a structured error rather than crashing.
