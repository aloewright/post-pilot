# Quill-in-Chrome Fork Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fork `noemica-io/open-claude-in-chrome` and add five additive feature layers (`tabs_list_all` + drop tab-group gating, `manipulate_dom`, `browser_state`, `watch_*`, `recipe_*` + `schedule_*`) so Claude Code can drive any open tab, save and schedule recipes, subscribe to push events, snapshot multi-tab state, and mutate the DOM through a typed primitive.

**Architecture:** Single-user MV3 Chrome extension fork. All transport (stdio MCP server → TCP socket multiplexer → native messaging → service worker → CDP via `chrome.debugger`) is preserved. New behavior lives under `src/extensions/<feature>/` so the fork stays mergeable with upstream. `chrome.storage.local` for persistent state (recipes, schedules, watcher metadata); `chrome.storage.session` for ephemeral watcher event queues. A single new `chrome.alarms` slot (`quill:schedules-tick`, 1-min period) drives scheduled recipe runs.

**Tech Stack:** Node 20+, TypeScript, MV3 manifest, Chrome Extensions APIs (`chrome.debugger`, `chrome.scripting`, `chrome.tabs`, `chrome.alarms`, `chrome.storage`, `chrome.runtime.connectNative`), `@modelcontextprotocol/sdk` (stdio transport), Vitest (unit tests for Node-side logic).

**Verification:** Mixed. Pure-Node logic (recipe executor variable interpolation, watcher queue caps, cron resolver) gets Vitest unit tests. Service-worker dispatchers get manual smoke tests by loading the unpacked extension into Chrome and exercising MCP tools — exact tool calls and expected results documented in each task.

**Reference spec:** `docs/superpowers/specs/2026-04-26-claude-in-chrome-fork-design.md`

**Working directory for the fork:** `~/Development/apps/quill-in-chrome` (sibling to `~/Development/apps/botty`). Created in Task 0.

---

## File structure (target state after all tasks)

```
quill-in-chrome/
├─ package.json              (existing — minimal edits, add vitest)
├─ tsconfig.json             (existing)
├─ vitest.config.ts          (NEW)
├─ README.md                 (modified — divergence note, install instructions)
├─ manifest.json             (existing — no permission changes needed)
├─ host/
│  ├─ mcp-server.js          (modified — register new tools)
│  └─ native-host.js         (existing — no changes)
├─ background.js             (modified — drop isInGroup gates, register feature dispatchers)
├─ content.js                (modified — MutationObserver hook for watch_element)
├─ scripts/
│  └─ install-host.sh        (NEW or modified — register native messaging host with collision-safe name)
├─ tests/
│  └─ unit/                  (NEW — vitest specs for pure logic)
│     ├─ recipe-vars.test.ts
│     ├─ watcher-queue.test.ts
│     ├─ schedule-resolver.test.ts
│     └─ dom-ops-validator.test.ts
└─ src/extensions/           (NEW — all fork-specific code)
   ├─ index.ts               (registry — exports all feature modules)
   ├─ types.ts               (shared types: WatcherId, ScheduleId, RecipeStep, etc.)
   ├─ tabs/
   │  ├─ tools.ts            (tabs_list_all schema)
   │  └─ dispatch.ts
   ├─ state/
   │  ├─ tools.ts            (browser_state schema)
   │  └─ dispatch.ts
   ├─ dom/
   │  ├─ tools.ts            (manipulate_dom schema + DomOp)
   │  ├─ dispatch.ts
   │  └─ apply-ops.ts        (function injected via chrome.scripting.executeScript)
   ├─ watch/
   │  ├─ tools.ts            (watch_*)
   │  ├─ dispatch.ts         (watcher registry + CDP listeners)
   │  ├─ storage.ts          (event queue with FIFO cap policy)
   │  └─ content-observer.ts (MutationObserver function injected into content script)
   └─ recipes/
      ├─ tools.ts            (recipe_* + schedule_*)
      ├─ dispatch.ts
      ├─ executor.ts         (sequential step runner with {{var}} interpolation)
      ├─ scheduler.ts        (chrome.alarms tick handler + next_run resolver)
      └─ storage.ts
```

---

## Task 0: Bootstrap fork

**Files:**
- Clone: `~/Development/apps/quill-in-chrome` (from `noemica-io/open-claude-in-chrome`)
- Create: `~/Development/apps/quill-in-chrome/vitest.config.ts`
- Modify: `~/Development/apps/quill-in-chrome/package.json` (add vitest)

- [ ] **Step 0.1 — Verify the upstream repo exists and clone**

```bash
gh repo view noemica-io/open-claude-in-chrome
# Expected: repo exists. If not, escalate.

cd ~/Development/apps
gh repo fork noemica-io/open-claude-in-chrome --clone --remote --fork-name quill-in-chrome
# Or, if you don't want a GitHub fork yet:
# git clone https://github.com/noemica-io/open-claude-in-chrome.git quill-in-chrome
cd quill-in-chrome
```

If `gh repo view noemica-io/open-claude-in-chrome` fails, search for the active mirror (`gh search repos open-claude-in-chrome`) and clone the most recent fork with substantive commits. Report status BLOCKED if no viable upstream exists.

- [ ] **Step 0.2 — Verify baseline runs**

```bash
pnpm install      # or npm install / yarn — match the lockfile present
ls host/mcp-server.js host/native-host.js background.js content.js manifest.json
# All five must exist. If not, the upstream's structure has shifted — escalate.

# Skim package.json scripts. Note the install/build commands.
cat package.json | head -40
```

If the upstream lacks any of those files, BLOCKED. The plan assumes the architecture documented in the spec.

- [ ] **Step 0.3 — Add Vitest**

```bash
pnpm add -D vitest @vitest/coverage-v8
```

- [ ] **Step 0.4 — Create vitest config**

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["tests/unit/**/*.test.ts"],
    environment: "node",
    coverage: { provider: "v8", reporter: ["text", "json"] },
  },
});
```

- [ ] **Step 0.5 — Add test script to package.json**

Edit `package.json` `scripts`:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

(Preserve any existing scripts. Only add the two above if missing.)

- [ ] **Step 0.6 — Verify Vitest works with a smoke test**

Create `tests/unit/smoke.test.ts`:

```ts
import { describe, expect, it } from "vitest";

describe("smoke", () => {
  it("runs", () => {
    expect(1 + 1).toBe(2);
  });
});
```

Run: `pnpm test`
Expected: 1 passed.

- [ ] **Step 0.7 — Commit and push to your fork**

```bash
git checkout -b fork/quill-extensions
git add vitest.config.ts package.json tests/unit/smoke.test.ts pnpm-lock.yaml
git commit -m "chore: bootstrap quill-in-chrome fork — add Vitest"
git push -u origin fork/quill-extensions
```

---

## Task 1: Foundation — feature directory + tool-registry pattern

**Files:**
- Create or modify: `tsconfig.json` (or equivalent TS+bundler config)
- Create: `src/extensions/index.ts`
- Create: `src/extensions/types.ts`
- Modify: `host/mcp-server.js` (~10-line addition to register feature tools)
- Modify: `background.js` (~10-line addition to register feature dispatchers)

**Why:** All five features share a registration pattern. Building the seam first means each subsequent task is a single-feature addition that drops into place.

- [ ] **Step 1.0 — Confirm or add a TypeScript build pipeline**

The plan writes new feature code in `.ts` files. Inspect the upstream:

```bash
ls tsconfig.json
cat package.json | grep -E '"build"|"esbuild"|"vite"|"tsc"'
```

**If a TS+bundler setup already exists** (tsconfig.json + a build script that emits JS to a directory the manifest references): note the build output path and skip ahead to 1.1. Verify `pnpm build` produces working output, and that `manifest.json` `background.service_worker` path matches.

**If upstream is pure JavaScript with no build step:** add esbuild and a tsconfig. Concrete steps:

```bash
pnpm add -D esbuild typescript @types/chrome
```

Create `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "types": ["chrome"]
  },
  "include": ["src/**/*", "tests/**/*"]
}
```

Create `scripts/build.mjs`:

```js
import { build } from "esbuild";
import { mkdirSync } from "node:fs";

mkdirSync("dist", { recursive: true });
mkdirSync("dist/extensions", { recursive: true });

// Bundle the extensions registry — pulled into background.js via dynamic import.
await build({
  entryPoints: ["src/extensions/index.ts"],
  bundle: true,
  format: "esm",
  outfile: "dist/extensions/index.js",
  platform: "browser",
  target: ["chrome120"],
  // Keep function names so chrome.scripting.executeScript({ func }) serializes correctly.
  keepNames: true,
});
```

Add to `package.json` scripts:

```json
{
  "scripts": {
    "build": "node scripts/build.mjs",
    "test": "vitest run"
  }
}
```

The manifest's `background.service_worker` keeps pointing at the existing `background.js`. That file dynamically imports the bundled feature registry from `dist/extensions/index.js`. (Step 1.4 wires this in.)

Verify:
```bash
pnpm build
ls dist/extensions/index.js
```
Output file must exist (it'll be empty for now since the registry has no features yet).

Commit the build setup before continuing:
```bash
git add tsconfig.json scripts/build.mjs package.json pnpm-lock.yaml
git commit -m "chore: add TypeScript + esbuild for src/extensions/"
```

- [ ] **Step 1.1 — Create shared types file**

Create `src/extensions/types.ts`:

```ts
// Shared types for all feature modules. Imported from tools.ts and
// dispatch.ts of every feature directory.

export type WatcherId = string; // uuid v4
export type ScheduleId = string; // uuid v4
export type RecipeName = string; // user-chosen string

export type RecipeStep = {
  tool: string;
  args: Record<string, unknown>;
};

export type CronSpec =
  | { everyMinutes: number }
  | { atISOString: string };

export type RecipeRecord = {
  steps: RecipeStep[];
  vars_schema?: Record<string, "string" | "number" | "boolean">;
  created_at: string;
  description?: string;
};

export type ScheduleRecord = {
  id: ScheduleId;
  cron: CronSpec;
  recipe: RecipeName;
  vars?: Record<string, unknown>;
  enabled: boolean;
  next_run: string;
  last_run?: string;
  last_status?: "ok" | "error";
  last_error?: string;
};

export type WatcherType = "element" | "network" | "console";

export type WatcherMetaRecord = {
  id: WatcherId;
  type: WatcherType;
  tabId: number;
  params: Record<string, unknown>;
  created_at: string;
  dropped_since_last_drain?: number;
};

export type WatcherEvent = {
  ts: string;
  payload: unknown;
};

// MCP tool definition — what each feature's tools.ts exports
export type ToolDef = {
  name: string;
  description: string;
  inputSchema: object; // JSON Schema
};

// Service-worker dispatcher signature — what each feature's dispatch.ts exports
export type DispatchHandler = (
  args: Record<string, unknown>
) => Promise<unknown>;

export type FeatureModule = {
  tools: ToolDef[];
  handlers: Record<string, DispatchHandler>;
};
```

- [ ] **Step 1.2 — Create feature registry**

Create `src/extensions/index.ts`:

```ts
import type { FeatureModule } from "./types";

// Each task adds one import here. v1 ships all five.
// (Imports added incrementally as features land.)

export const FEATURES: FeatureModule[] = [
  // Task 2: tabs
  // Task 3: dom
  // Task 4: state
  // Tasks 5-9: watch
  // Tasks 10-13: recipes
];

export function getAllTools(): FeatureModule["tools"] {
  return FEATURES.flatMap((f) => f.tools);
}

export function getHandler(toolName: string): FeatureModule["handlers"][string] | undefined {
  for (const feature of FEATURES) {
    if (feature.handlers[toolName]) {
      return feature.handlers[toolName];
    }
  }
  return undefined;
}
```

- [ ] **Step 1.3 — Wire registry into MCP server**

The MCP server runs in Node, not in Chrome. Build a separate bundle for it (or import the source directly if the project already supports `.ts` in Node via tsx/ts-node — check `package.json`).

Easiest path: **the MCP server reads tool definitions from a JSON manifest that the build step also emits.** Add to `scripts/build.mjs`:

```js
// Also emit a tools manifest the MCP server can consume.
import { getAllTools } from "../src/extensions/index.ts" assert { type: "json" };
// (If runtime TS in Node isn't available, run via esbuild bundle to a CommonJS file
// the MCP server requires.)
```

If pure-runtime importing of TS in Node is awkward, build a separate Node bundle:

```js
// In scripts/build.mjs, add a second build target:
await build({
  entryPoints: ["src/extensions/index.ts"],
  bundle: true,
  format: "cjs",
  outfile: "dist/extensions-node/index.cjs",
  platform: "node",
  target: ["node20"],
});
```

Then read `host/mcp-server.js` and find the section where MCP tools are registered (`server.tool(...)` calls or equivalent — exact location varies by upstream sha).

Add import + registration loop:

```js
// At the top of mcp-server.js, after existing imports:
const { getAllTools } = require("../dist/extensions-node/index.cjs");

// Just after existing tool registrations:
for (const tool of getAllTools()) {
  server.tool(tool.name, tool.description, tool.inputSchema, async (args) => {
    // Forward to the service worker via existing TCP socket dispatcher.
    // The handler name == tool name. Use the existing send() helper.
    return await sendToServiceWorker({ tool: tool.name, args });
  });
}
```

If `mcp-server.js` is ESM, use `import` instead of `require` and adjust the bundle format accordingly.

If you cannot find the existing `sendToServiceWorker` helper (or its equivalent), report DONE_WITH_CONCERNS and describe what you found.

- [ ] **Step 1.4 — Wire registry into service worker**

In `background.js`, find the dispatcher (likely a `switch` on `request.tool` or a handler map). Add a fallback that consults the feature registry:

```js
// Near the existing dispatcher:
import { getHandler } from "./src/extensions/index.js";
// (or require — match upstream module style)

// At the end of the existing switch / map, add a fallback:
const featureHandler = getHandler(request.tool);
if (featureHandler) {
  return await featureHandler(request.args);
}
// Existing not-found path...
```

- [ ] **Step 1.5 — Verify the registry is invoked but empty**

Reload the extension. Make any MCP call (e.g. `tabs_context_mcp` — an existing tool). It should still work. If the registry breaks existing tools, the registration order is wrong — registry must be a fallback, not an override.

- [ ] **Step 1.6 — Commit**

```bash
git add src/extensions/index.ts src/extensions/types.ts host/mcp-server.js background.js
git commit -m "feat(foundation): add extensions registry — tools.ts and dispatch.ts pattern"
```

---

## Task 2: Gap A — drop tab-group gating + `tabs_list_all`

**Files:**
- Create: `src/extensions/tabs/tools.ts`
- Create: `src/extensions/tabs/dispatch.ts`
- Modify: `background.js` (remove `isInGroup` guards on existing handlers)
- Modify: `src/extensions/index.ts` (register tabs feature)

- [ ] **Step 2.1 — Create the `tabs_list_all` tool definition**

Create `src/extensions/tabs/tools.ts`:

```ts
import type { ToolDef } from "../types";

export const tabsTools: ToolDef[] = [
  {
    name: "tabs_list_all",
    description:
      "List all open tabs across all windows. Returns every tab the browser knows about — no group filter, no active-tab filter. Each entry includes the data needed to call other MCP tools that take a tabId.",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false,
    },
  },
];
```

- [ ] **Step 2.2 — Create the dispatcher**

Create `src/extensions/tabs/dispatch.ts`:

```ts
import type { DispatchHandler } from "../types";

const listAll: DispatchHandler = async () => {
  // Service worker context — chrome.tabs is available.
  const tabs = await chrome.tabs.query({});
  return {
    tabs: tabs.map((t) => ({
      id: t.id,
      url: t.url,
      title: t.title,
      active: t.active,
      windowId: t.windowId,
      index: t.index,
      pinned: t.pinned,
      audible: t.audible ?? false,
    })),
  };
};

export const tabsHandlers: Record<string, DispatchHandler> = {
  tabs_list_all: listAll,
};
```

- [ ] **Step 2.3 — Register the feature**

Edit `src/extensions/index.ts` — add the import and entry:

```ts
import { tabsHandlers } from "./tabs/dispatch";
import { tabsTools } from "./tabs/tools";
// ...

export const FEATURES: FeatureModule[] = [
  { tools: tabsTools, handlers: tabsHandlers },
  // (other features added in later tasks)
];
```

- [ ] **Step 2.4 — Drop `isInGroup` guards**

In `background.js`, search for `isInGroup`. Remove every `if (!isInGroup(tabId)) { throw ... }` guard from existing handlers. Leave the `isInGroup` helper itself intact (in case it's used elsewhere or upstream wants it back via flag).

Add a comment noting the divergence:

```js
// FORK DIVERGENCE: tab-group restriction removed. Tools accept any tabId
// returned by chrome.tabs.query. See README "Trust model" section.
```

- [ ] **Step 2.5 — Manual smoke test**

Reload the unpacked extension in `chrome://extensions`. Open Claude Code, then:

1. Open three regular tabs in Chrome (any URLs).
2. Make MCP call: `tabs_list_all`. Expected: array of all tabs including the three you just opened.
3. Pick one tab from the list (any `id`). Call `get-text` (or whatever existing read tool is exposed) with that `tabId`. Expected: returns the page text. Previously this would have failed with "tab not in MCP group".

Document the actual MCP tool names you used in the commit message if they differ from `get-text`.

- [ ] **Step 2.6 — Commit**

```bash
git add src/extensions/tabs/ src/extensions/index.ts background.js
git commit -m "feat(tabs): tabs_list_all + drop isInGroup gating (gap A)"
```

---

## Task 3: Gap E — `manipulate_dom` typed DOM-mutation tool

**Files:**
- Create: `src/extensions/dom/tools.ts`
- Create: `src/extensions/dom/dispatch.ts`
- Create: `src/extensions/dom/apply-ops.ts`
- Create: `tests/unit/dom-ops-validator.test.ts`
- Modify: `src/extensions/index.ts`

- [ ] **Step 3.1 — Define the DomOp schema**

Create `src/extensions/dom/tools.ts`:

```ts
import type { ToolDef } from "../types";

export type DomOp =
  | { kind: "set_attribute"; selector: string; attr: string; value: string | null }
  | { kind: "set_text"; selector: string; text: string }
  | { kind: "add_class"; selector: string; className: string }
  | { kind: "remove_class"; selector: string; className: string }
  | {
      kind: "insert_html";
      selector: string;
      position: "beforebegin" | "afterbegin" | "beforeend" | "afterend";
      html: string;
    }
  | { kind: "remove"; selector: string };

export const domTools: ToolDef[] = [
  {
    name: "manipulate_dom",
    description:
      "Apply one or more typed DOM mutations to a tab. Each op targets elements by CSS selector; ops run sequentially. Returns per-op results: { ok, error?, matched }.",
    inputSchema: {
      type: "object",
      required: ["tabId", "ops"],
      properties: {
        tabId: { type: "number" },
        ops: {
          type: "array",
          minItems: 1,
          items: {
            type: "object",
            required: ["kind", "selector"],
            properties: {
              kind: {
                type: "string",
                enum: [
                  "set_attribute",
                  "set_text",
                  "add_class",
                  "remove_class",
                  "insert_html",
                  "remove",
                ],
              },
              selector: { type: "string", minLength: 1 },
              attr: { type: "string" },
              value: { type: ["string", "null"] },
              text: { type: "string" },
              className: { type: "string" },
              position: {
                type: "string",
                enum: ["beforebegin", "afterbegin", "beforeend", "afterend"],
              },
              html: { type: "string" },
            },
          },
        },
      },
    },
  },
];
```

- [ ] **Step 3.2 — Write a failing test for the validator**

Create `tests/unit/dom-ops-validator.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { validateDomOps } from "../../src/extensions/dom/dispatch";

describe("validateDomOps", () => {
  it("accepts a valid set_attribute op", () => {
    expect(() =>
      validateDomOps([
        { kind: "set_attribute", selector: "#x", attr: "data-y", value: "1" },
      ])
    ).not.toThrow();
  });

  it("rejects an empty ops array", () => {
    expect(() => validateDomOps([])).toThrow(/at least one op/);
  });

  it("rejects an unknown kind", () => {
    expect(() =>
      validateDomOps([{ kind: "wat" as never, selector: "#x" }])
    ).toThrow(/unknown op kind/);
  });

  it("rejects insert_html without position", () => {
    expect(() =>
      validateDomOps([
        { kind: "insert_html", selector: "#x", html: "<b>x</b>" } as never,
      ])
    ).toThrow(/position required/);
  });

  it("rejects empty selector", () => {
    expect(() =>
      validateDomOps([{ kind: "remove", selector: "" }])
    ).toThrow(/selector/);
  });
});
```

Run: `pnpm test tests/unit/dom-ops-validator.test.ts`
Expected: FAIL — `validateDomOps` not exported yet.

- [ ] **Step 3.3 — Implement the validator + dispatcher**

Create `src/extensions/dom/dispatch.ts`:

```ts
import type { DispatchHandler } from "../types";
import type { DomOp } from "./tools";
import { applyOps } from "./apply-ops";

export function validateDomOps(ops: DomOp[]): void {
  if (!Array.isArray(ops) || ops.length === 0) {
    throw new Error("manipulate_dom: ops must contain at least one op");
  }
  for (const op of ops) {
    if (!op.selector || typeof op.selector !== "string") {
      throw new Error("manipulate_dom: each op needs a non-empty selector");
    }
    switch (op.kind) {
      case "set_attribute":
        if (typeof op.attr !== "string") {
          throw new Error("manipulate_dom: set_attribute needs attr");
        }
        break;
      case "set_text":
        if (typeof op.text !== "string") {
          throw new Error("manipulate_dom: set_text needs text");
        }
        break;
      case "add_class":
      case "remove_class":
        if (typeof op.className !== "string" || op.className.length === 0) {
          throw new Error(
            "manipulate_dom: add_class/remove_class needs className"
          );
        }
        break;
      case "insert_html":
        if (typeof op.html !== "string") {
          throw new Error("manipulate_dom: insert_html needs html");
        }
        if (
          !["beforebegin", "afterbegin", "beforeend", "afterend"].includes(
            op.position
          )
        ) {
          throw new Error("manipulate_dom: insert_html position required");
        }
        break;
      case "remove":
        // Only selector needed; already validated above.
        break;
      default:
        throw new Error(`manipulate_dom: unknown op kind: ${(op as { kind: string }).kind}`);
    }
  }
}

const manipulateDom: DispatchHandler = async (args) => {
  const tabId = args.tabId as number;
  const ops = args.ops as DomOp[];
  validateDomOps(ops);

  // Inject the apply-ops interpreter into the page. chrome.scripting will
  // serialize `ops` and pass it to applyOps as args.
  try {
    const [result] = await chrome.scripting.executeScript({
      target: { tabId, allFrames: false },
      func: applyOps,
      args: [ops],
    });
    return { results: result?.result ?? [] };
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    // CSP restrictions on the target page can reject script injection.
    return {
      results: ops.map(() => ({
        ok: false,
        error: `injection failed: ${msg}`,
        matched: 0,
      })),
    };
  }
};

export const domHandlers: Record<string, DispatchHandler> = {
  manipulate_dom: manipulateDom,
};
```

- [ ] **Step 3.4 — Implement the page-side interpreter**

Create `src/extensions/dom/apply-ops.ts`:

```ts
import type { DomOp } from "./tools";

// This function is serialized by chrome.scripting.executeScript and runs
// in the target tab's page context. It must be pure — no closure state,
// no top-level side effects. Reference only `args` and DOM globals.

export function applyOps(ops: DomOp[]): Array<{
  ok: boolean;
  error?: string;
  matched: number;
}> {
  const results: Array<{ ok: boolean; error?: string; matched: number }> = [];
  for (const op of ops) {
    try {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(op.selector)
      );
      if (els.length === 0) {
        results.push({ ok: true, matched: 0 });
        continue;
      }
      switch (op.kind) {
        case "set_attribute":
          for (const el of els) {
            if (op.value === null) {
              el.removeAttribute(op.attr);
            } else {
              el.setAttribute(op.attr, op.value);
            }
          }
          break;
        case "set_text":
          for (const el of els) {
            el.textContent = op.text;
          }
          break;
        case "add_class":
          for (const el of els) {
            el.classList.add(op.className);
          }
          break;
        case "remove_class":
          for (const el of els) {
            el.classList.remove(op.className);
          }
          break;
        case "insert_html":
          for (const el of els) {
            el.insertAdjacentHTML(op.position, op.html);
          }
          break;
        case "remove":
          for (const el of els) {
            el.remove();
          }
          break;
      }
      results.push({ ok: true, matched: els.length });
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      results.push({ ok: false, error: msg, matched: 0 });
    }
  }
  return results;
}
```

- [ ] **Step 3.5 — Run unit tests**

Run: `pnpm test tests/unit/dom-ops-validator.test.ts`
Expected: 5 passed.

- [ ] **Step 3.6 — Register the feature**

Edit `src/extensions/index.ts`:

```ts
import { domHandlers } from "./dom/dispatch";
import { domTools } from "./dom/tools";

export const FEATURES: FeatureModule[] = [
  { tools: tabsTools, handlers: tabsHandlers },
  { tools: domTools, handlers: domHandlers },
];
```

- [ ] **Step 3.7 — Manual smoke test**

Reload extension. Navigate any tab to `https://example.com`. Get the tabId via `tabs_list_all`. Make MCP call:

```json
{
  "tool": "manipulate_dom",
  "args": {
    "tabId": <id>,
    "ops": [
      { "kind": "set_text", "selector": "h1", "text": "Hello from Quill" },
      { "kind": "add_class", "selector": "p", "className": "edited" }
    ]
  }
}
```

Expected response: `{ "results": [{ "ok": true, "matched": 1 }, { "ok": true, "matched": 1 }] }`. Visually, the page's `<h1>` says "Hello from Quill" and any `<p>` has class `edited`.

- [ ] **Step 3.8 — Commit**

```bash
git add src/extensions/dom/ src/extensions/index.ts tests/unit/dom-ops-validator.test.ts
git commit -m "feat(dom): manipulate_dom typed mutation tool (gap E)"
```

---

## Task 4: Gap D — `browser_state` multi-tab snapshot

**Files:**
- Create: `src/extensions/state/tools.ts`
- Create: `src/extensions/state/dispatch.ts`
- Modify: `src/extensions/index.ts`

- [ ] **Step 4.1 — Define the tool**

Create `src/extensions/state/tools.ts`:

```ts
import type { ToolDef } from "../types";

export const stateTools: ToolDef[] = [
  {
    name: "browser_state",
    description:
      "Single snapshot of all open tabs and extension runtime state. Use for multi-tab planning. include.a11y=true embeds an accessibility-tree snapshot per tab (heavier payload).",
    inputSchema: {
      type: "object",
      properties: {
        include: {
          type: "object",
          properties: {
            a11y: { type: "boolean", default: false },
            cookies: { type: "boolean", default: false },
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
  },
];
```

- [ ] **Step 4.2 — Implement the dispatcher**

Create `src/extensions/state/dispatch.ts`:

```ts
import type { DispatchHandler } from "../types";

// Hook into the existing a11y-snapshot helper from content.js.
// The exact import varies by upstream; in v1 we call it via
// chrome.scripting.executeScript with a function that reads
// the page's accessibility tree (or use whatever the upstream
// already exposes — check content.js for the existing function).

async function a11ySnapshotForTab(tabId: number): Promise<unknown> {
  try {
    const [r] = await chrome.scripting.executeScript({
      target: { tabId, allFrames: false },
      // Minimal a11y proxy: read landmark roles + headings + form controls.
      // Keeps payload small; user can request fuller via existing snapshot tool.
      func: () => {
        const pick = (el: Element) => ({
          tag: el.tagName.toLowerCase(),
          role: el.getAttribute("role"),
          text: (el.textContent ?? "").trim().slice(0, 80),
        });
        const sel = "h1, h2, h3, [role=main], [role=navigation], button, a, input, label";
        return Array.from(document.querySelectorAll(sel)).slice(0, 50).map(pick);
      },
    });
    return r?.result ?? null;
  } catch {
    return null;
  }
}

const browserState: DispatchHandler = async (args) => {
  const include = (args.include as { a11y?: boolean; cookies?: boolean } | undefined) ?? {};

  const allTabs = await chrome.tabs.query({});
  const tabs = await Promise.all(
    allTabs.map(async (t) => {
      const base = {
        id: t.id,
        url: t.url,
        title: t.title,
        active: t.active,
        windowId: t.windowId,
        index: t.index,
        pinned: t.pinned,
        audible: t.audible ?? false,
      };
      if (include.a11y && t.id !== undefined) {
        return { ...base, a11y: await a11ySnapshotForTab(t.id) };
      }
      return base;
    })
  );

  // Active window
  const win = await chrome.windows.getCurrent();

  // Schedules + watchers — read from chrome.storage.local.
  // These keys are written by Tasks 5+ and 10+. Until then the reads
  // resolve to {} and we report empty arrays.
  const local = await chrome.storage.local.get(["schedules", "watcher_meta"]);
  const schedules = (local.schedules ?? {}) as Record<string, { id: string; enabled: boolean }>;
  const watcher_meta = (local.watcher_meta ?? {}) as Record<string, { id: string }>;

  return {
    tabs,
    activeWindowId: win.id,
    schedules_running: Object.values(schedules)
      .filter((s) => s.enabled)
      .map((s) => s.id),
    watchers_active: Object.values(watcher_meta).map((w) => w.id),
  };
};

export const stateHandlers: Record<string, DispatchHandler> = {
  browser_state: browserState,
};
```

- [ ] **Step 4.3 — Register the feature**

Edit `src/extensions/index.ts`:

```ts
import { stateHandlers } from "./state/dispatch";
import { stateTools } from "./state/tools";

export const FEATURES: FeatureModule[] = [
  { tools: tabsTools, handlers: tabsHandlers },
  { tools: domTools, handlers: domHandlers },
  { tools: stateTools, handlers: stateHandlers },
];
```

- [ ] **Step 4.4 — Manual smoke test**

Reload extension. With ≥3 tabs open:

1. Call `browser_state`. Expected: `tabs` array length matches open count; `activeWindowId` is a number; `schedules_running` and `watchers_active` are empty arrays.
2. Call `browser_state` with `{ include: { a11y: true } }`. Expected: each tab includes an `a11y` field with up to 50 element summaries.

- [ ] **Step 4.5 — Commit**

```bash
git add src/extensions/state/ src/extensions/index.ts
git commit -m "feat(state): browser_state multi-tab snapshot (gap D)"
```

---

## Task 5: Gap C foundation — watcher storage layer + queue cap

**Files:**
- Create: `src/extensions/watch/storage.ts`
- Create: `tests/unit/watcher-queue.test.ts`

**Why:** All three watcher kinds (element, network, console) write to the same event queue. Build the storage layer once with a real test for the cap policy.

- [ ] **Step 5.1 — Write failing tests for the queue**

Create `tests/unit/watcher-queue.test.ts`:

```ts
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

// Mock chrome.storage.session for the test environment.
const mockSession = {
  data: {} as Record<string, unknown>,
  async get(keys: string[] | string) {
    const arr = Array.isArray(keys) ? keys : [keys];
    const out: Record<string, unknown> = {};
    for (const k of arr) out[k] = this.data[k];
    return out;
  },
  async set(obj: Record<string, unknown>) {
    Object.assign(this.data, obj);
  },
};

beforeEach(() => {
  mockSession.data = {};
  // @ts-expect-error injecting test global
  globalThis.chrome = {
    storage: { session: mockSession, local: { get: async () => ({}), set: async () => {} } },
  };
});

afterEach(() => {
  // @ts-expect-error
  delete globalThis.chrome;
});

describe("watcher event queue", () => {
  it("appends events", async () => {
    const { appendEvent, drainEvents } = await import("../../src/extensions/watch/storage");
    await appendEvent("w1", { ts: "t1", payload: { hello: 1 } });
    await appendEvent("w1", { ts: "t2", payload: { hello: 2 } });
    const drained = await drainEvents("w1");
    expect(drained.events).toHaveLength(2);
    expect(drained.dropped_since_last_drain).toBe(0);
  });

  it("caps at 500 events with FIFO drop", async () => {
    const { appendEvent, drainEvents, QUEUE_CAP } = await import(
      "../../src/extensions/watch/storage"
    );
    expect(QUEUE_CAP).toBe(500);
    for (let i = 0; i < 510; i++) {
      await appendEvent("w1", { ts: `t${i}`, payload: { i } });
    }
    const drained = await drainEvents("w1");
    expect(drained.events).toHaveLength(500);
    expect(drained.dropped_since_last_drain).toBe(10);
    // Oldest 10 dropped; first remaining has i=10
    expect((drained.events[0].payload as { i: number }).i).toBe(10);
  });

  it("resets dropped counter after drain", async () => {
    const { appendEvent, drainEvents } = await import("../../src/extensions/watch/storage");
    for (let i = 0; i < 510; i++) {
      await appendEvent("w1", { ts: `t${i}`, payload: { i } });
    }
    await drainEvents("w1");
    const second = await drainEvents("w1");
    expect(second.dropped_since_last_drain).toBe(0);
  });

  it("returns max events on drain", async () => {
    const { appendEvent, drainEvents } = await import("../../src/extensions/watch/storage");
    for (let i = 0; i < 100; i++) {
      await appendEvent("w1", { ts: `t${i}`, payload: { i } });
    }
    const drained = await drainEvents("w1", 30);
    expect(drained.events).toHaveLength(30);
  });
});
```

Run: `pnpm test tests/unit/watcher-queue.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 5.2 — Implement the storage layer**

Create `src/extensions/watch/storage.ts`:

```ts
import type { WatcherEvent, WatcherId, WatcherMetaRecord } from "../types";

export const QUEUE_CAP = 500;

type EventsBlob = Record<WatcherId, WatcherEvent[]>;
type MetaBlob = Record<WatcherId, WatcherMetaRecord>;

async function getEventsBlob(): Promise<EventsBlob> {
  const r = await chrome.storage.session.get(["watcher_events"]);
  return (r.watcher_events as EventsBlob) ?? {};
}

async function setEventsBlob(blob: EventsBlob): Promise<void> {
  await chrome.storage.session.set({ watcher_events: blob });
}

async function getMetaBlob(): Promise<MetaBlob> {
  const r = await chrome.storage.local.get(["watcher_meta"]);
  return (r.watcher_meta as MetaBlob) ?? {};
}

async function setMetaBlob(blob: MetaBlob): Promise<void> {
  await chrome.storage.local.set({ watcher_meta: blob });
}

export async function appendEvent(
  id: WatcherId,
  event: WatcherEvent
): Promise<void> {
  const blob = await getEventsBlob();
  const queue = blob[id] ?? [];
  queue.push(event);

  let dropped = 0;
  if (queue.length > QUEUE_CAP) {
    dropped = queue.length - QUEUE_CAP;
    queue.splice(0, dropped); // FIFO drop
  }
  blob[id] = queue;
  await setEventsBlob(blob);

  if (dropped > 0) {
    const meta = await getMetaBlob();
    if (meta[id]) {
      meta[id].dropped_since_last_drain =
        (meta[id].dropped_since_last_drain ?? 0) + dropped;
      await setMetaBlob(meta);
    }
  }
}

export async function drainEvents(
  id: WatcherId,
  max?: number
): Promise<{ events: WatcherEvent[]; dropped_since_last_drain: number }> {
  const blob = await getEventsBlob();
  const queue = blob[id] ?? [];
  const take = max !== undefined ? Math.min(max, queue.length) : queue.length;
  const events = queue.splice(0, take);
  blob[id] = queue;
  await setEventsBlob(blob);

  const meta = await getMetaBlob();
  const dropped = meta[id]?.dropped_since_last_drain ?? 0;
  if (meta[id]) {
    meta[id].dropped_since_last_drain = 0;
    await setMetaBlob(meta);
  }
  return { events, dropped_since_last_drain: dropped };
}

export async function registerMeta(record: WatcherMetaRecord): Promise<void> {
  const meta = await getMetaBlob();
  meta[record.id] = record;
  await setMetaBlob(meta);
}

export async function unregisterMeta(id: WatcherId): Promise<void> {
  const meta = await getMetaBlob();
  delete meta[id];
  await setMetaBlob(meta);
  const blob = await getEventsBlob();
  delete blob[id];
  await setEventsBlob(blob);
}

export async function listMeta(): Promise<WatcherMetaRecord[]> {
  const meta = await getMetaBlob();
  return Object.values(meta);
}
```

- [ ] **Step 5.3 — Run tests**

Run: `pnpm test tests/unit/watcher-queue.test.ts`
Expected: 4 passed.

- [ ] **Step 5.4 — Commit**

```bash
git add src/extensions/watch/storage.ts tests/unit/watcher-queue.test.ts
git commit -m "feat(watch): event queue storage with 500-cap FIFO drop (gap C foundation)"
```

---

## Task 6: Gap C — `watch_element` (MutationObserver via content script)

**Files:**
- Create: `src/extensions/watch/content-observer.ts` (function injected into the page)
- Create: `src/extensions/watch/tools.ts` (initial — covers all watch_* schemas)
- Create: `src/extensions/watch/dispatch.ts` (initial — covers watch_element + the boilerplate `watch_events`/`watch_list`/`watch_stop`)
- Modify: `src/extensions/index.ts`

- [ ] **Step 6.1 — Define all watch_* tool schemas in one shot**

Create `src/extensions/watch/tools.ts`:

```ts
import type { ToolDef } from "../types";

export const watchTools: ToolDef[] = [
  {
    name: "watch_element",
    description:
      "Subscribe to DOM changes for a CSS selector in a tab. Events are queued until you drain via watch_events.",
    inputSchema: {
      type: "object",
      required: ["tabId", "selector"],
      properties: {
        tabId: { type: "number" },
        selector: { type: "string", minLength: 1 },
        on: {
          type: "array",
          items: { type: "string", enum: ["appear", "disappear", "mutate"] },
          default: ["appear"],
        },
        subtree: { type: "boolean", default: true },
      },
    },
  },
  {
    name: "watch_network",
    description:
      "Subscribe to network requests in a tab. Filter by URL regex and method.",
    inputSchema: {
      type: "object",
      required: ["tabId"],
      properties: {
        tabId: { type: "number" },
        urlPattern: { type: "string", description: "regex string" },
        methodPattern: { type: "string", description: "regex string" },
        phase: {
          type: "array",
          items: { type: "string", enum: ["request", "response"] },
          default: ["response"],
        },
      },
    },
  },
  {
    name: "watch_console",
    description: "Subscribe to console messages in a tab.",
    inputSchema: {
      type: "object",
      required: ["tabId"],
      properties: {
        tabId: { type: "number" },
        levels: {
          type: "array",
          items: {
            type: "string",
            enum: ["log", "warn", "error", "info", "debug"],
          },
          default: ["error", "warn"],
        },
      },
    },
  },
  {
    name: "watch_events",
    description:
      "Drain queued events for a watcher. Returns up to `max` events and a `dropped_since_last_drain` counter that resets on each drain.",
    inputSchema: {
      type: "object",
      required: ["watcher_id"],
      properties: {
        watcher_id: { type: "string" },
        max: { type: "number", minimum: 1, default: 100 },
      },
    },
  },
  {
    name: "watch_list",
    description: "List all active watchers across all tabs.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "watch_stop",
    description: "Stop a watcher by id and clear its queued events.",
    inputSchema: {
      type: "object",
      required: ["watcher_id"],
      properties: { watcher_id: { type: "string" } },
    },
  },
];
```

- [ ] **Step 6.2 — Page-side observer function**

Create `src/extensions/watch/content-observer.ts`:

```ts
// Function injected into the page via chrome.scripting.executeScript.
// It installs a MutationObserver and posts events back to the extension
// via window.postMessage, which content.js relays to the service worker.
//
// Caller passes a unique observerKey so the page can host multiple watchers.

export function installElementObserver(
  observerKey: string,
  selector: string,
  on: ("appear" | "disappear" | "mutate")[],
  subtree: boolean
): { ok: boolean } {
  // De-dupe on re-injection.
  const W = window as unknown as { __quillObservers?: Map<string, MutationObserver> };
  W.__quillObservers ??= new Map();
  W.__quillObservers.get(observerKey)?.disconnect();

  let lastCount = document.querySelectorAll(selector).length;
  const observer = new MutationObserver(() => {
    const els = document.querySelectorAll(selector);
    const count = els.length;
    const events: Array<{ kind: string; matchedCount: number; sample?: { html: string } }> = [];
    if (count > lastCount && on.includes("appear")) {
      events.push({
        kind: "appear",
        matchedCount: count,
        sample: { html: els[count - 1]?.outerHTML.slice(0, 500) ?? "" },
      });
    }
    if (count < lastCount && on.includes("disappear")) {
      events.push({ kind: "disappear", matchedCount: count });
    }
    if (count === lastCount && on.includes("mutate")) {
      events.push({
        kind: "mutate",
        matchedCount: count,
        sample: { html: els[0]?.outerHTML.slice(0, 500) ?? "" },
      });
    }
    lastCount = count;
    for (const ev of events) {
      window.postMessage(
        { __quillWatchEvent: true, observerKey, kind: "element", payload: { selector, ...ev } },
        "*"
      );
    }
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree,
    attributes: true,
    characterData: false,
  });
  W.__quillObservers.set(observerKey, observer);
  return { ok: true };
}

export function uninstallElementObserver(observerKey: string): { ok: boolean } {
  const W = window as unknown as { __quillObservers?: Map<string, MutationObserver> };
  const ob = W.__quillObservers?.get(observerKey);
  ob?.disconnect();
  W.__quillObservers?.delete(observerKey);
  return { ok: true };
}
```

- [ ] **Step 6.3 — Add bridge in content.js**

Modify `content.js` — add at the top-level (only once per content script lifetime):

```js
// Quill watcher bridge: relay window.postMessage from page to service worker.
window.addEventListener("message", (e) => {
  if (e.source !== window) return;
  const data = e.data;
  if (!data || data.__quillWatchEvent !== true) return;
  chrome.runtime.sendMessage({
    __quillWatchEvent: true,
    observerKey: data.observerKey,
    kind: data.kind,
    payload: data.payload,
  });
});
```

- [ ] **Step 6.4 — Service-worker dispatcher**

Create `src/extensions/watch/dispatch.ts`:

```ts
import type { DispatchHandler, WatcherMetaRecord } from "../types";
import {
  appendEvent,
  drainEvents,
  listMeta,
  registerMeta,
  unregisterMeta,
} from "./storage";
import {
  installElementObserver,
  uninstallElementObserver,
} from "./content-observer";

function uuid(): string {
  return crypto.randomUUID();
}

// Listen once for messages from content scripts and route to storage.
// (The runtime.onMessage listener is registered at module load — make sure
// this module is imported by background.js exactly once.)
let listenerRegistered = false;
function ensureBridgeListener() {
  if (listenerRegistered) return;
  listenerRegistered = true;
  chrome.runtime.onMessage.addListener((msg, _sender, _send) => {
    if (!msg?.__quillWatchEvent) return;
    void appendEvent(msg.observerKey, {
      ts: new Date().toISOString(),
      payload: msg.payload,
    });
  });
}

// Per-watcher cleanup actions, keyed by watcher_id, executed on stop.
const stopActions = new Map<string, () => Promise<void>>();

const watchElement: DispatchHandler = async (args) => {
  ensureBridgeListener();
  const tabId = args.tabId as number;
  const selector = args.selector as string;
  const on = (args.on as ("appear" | "disappear" | "mutate")[] | undefined) ?? ["appear"];
  const subtree = (args.subtree as boolean | undefined) ?? true;

  const id = uuid();
  await chrome.scripting.executeScript({
    target: { tabId, allFrames: false },
    func: installElementObserver,
    args: [id, selector, on, subtree],
  });

  const record: WatcherMetaRecord = {
    id,
    type: "element",
    tabId,
    params: { selector, on, subtree },
    created_at: new Date().toISOString(),
    dropped_since_last_drain: 0,
  };
  await registerMeta(record);

  stopActions.set(id, async () => {
    await chrome.scripting.executeScript({
      target: { tabId, allFrames: false },
      func: uninstallElementObserver,
      args: [id],
    }).catch(() => {});
    await unregisterMeta(id);
  });

  return { watcher_id: id };
};

const watchEvents: DispatchHandler = async (args) => {
  const id = args.watcher_id as string;
  const max = args.max as number | undefined;
  return await drainEvents(id, max);
};

const watchList: DispatchHandler = async () => {
  return await listMeta();
};

const watchStop: DispatchHandler = async (args) => {
  const id = args.watcher_id as string;
  const action = stopActions.get(id);
  if (!action) return { stopped: false };
  await action();
  stopActions.delete(id);
  return { stopped: true };
};

export const watchHandlers: Record<string, DispatchHandler> = {
  watch_element: watchElement,
  watch_events: watchEvents,
  watch_list: watchList,
  watch_stop: watchStop,
  // watch_network and watch_console added in Tasks 7 and 8
};
```

- [ ] **Step 6.5 — Register the feature**

Edit `src/extensions/index.ts`:

```ts
import { watchHandlers } from "./watch/dispatch";
import { watchTools } from "./watch/tools";

export const FEATURES: FeatureModule[] = [
  { tools: tabsTools, handlers: tabsHandlers },
  { tools: domTools, handlers: domHandlers },
  { tools: stateTools, handlers: stateHandlers },
  { tools: watchTools, handlers: watchHandlers },
];
```

Note: this registers all 6 watch tool definitions but only 4 of the 6 handlers exist now (`watch_element`, `watch_events`, `watch_list`, `watch_stop`). Calling `watch_network` or `watch_console` returns "tool not implemented" — that's OK, Tasks 7 and 8 fill them in.

- [ ] **Step 6.6 — Manual smoke test**

Reload extension. Open a tab to `data:text/html,<button id="b">click</button><div id="c"></div>`.

1. `watch_element({ tabId, selector: "#c > .item", on: ["appear"] })` → returns `{ watcher_id: "..." }`
2. In the page DevTools console, run: `document.getElementById('c').innerHTML = '<div class="item">x</div>';`
3. `watch_events({ watcher_id })` → expect 1 event with `kind: "appear", matchedCount: 1`.
4. `watch_stop({ watcher_id })` → `{ stopped: true }`. Repeat step 2; `watch_events` returns no new events.

- [ ] **Step 6.7 — Commit**

```bash
git add src/extensions/watch/ src/extensions/index.ts content.js
git commit -m "feat(watch): watch_element + queue drain plumbing (gap C, part 1)"
```

---

## Task 7: Gap C — `watch_network` via CDP

**Files:**
- Modify: `src/extensions/watch/dispatch.ts`

- [ ] **Step 7.1 — Add the network handler**

Append to `src/extensions/watch/dispatch.ts`:

```ts
const watchNetwork: DispatchHandler = async (args) => {
  ensureBridgeListener();
  const tabId = args.tabId as number;
  const urlPattern = args.urlPattern as string | undefined;
  const methodPattern = args.methodPattern as string | undefined;
  const phase = (args.phase as ("request" | "response")[] | undefined) ?? ["response"];

  const urlRe = urlPattern ? new RegExp(urlPattern) : null;
  const methodRe = methodPattern ? new RegExp(methodPattern, "i") : null;

  const id = crypto.randomUUID();

  // Attach the debugger if it's not already attached.
  await chrome.debugger.attach({ tabId }, "1.3").catch(() => {});
  await chrome.debugger.sendCommand({ tabId }, "Network.enable");

  // Track in-flight requests so we can correlate responses.
  const inFlight = new Map<string, { method: string; url: string; ts: string }>();

  const onEvent = (
    source: chrome.debugger.Debuggee,
    method: string,
    params: unknown
  ) => {
    if (source.tabId !== tabId) return;

    if (method === "Network.requestWillBeSent" && phase.includes("request")) {
      const p = params as {
        requestId: string;
        request: { url: string; method: string; headers: Record<string, string> };
      };
      if (urlRe && !urlRe.test(p.request.url)) return;
      if (methodRe && !methodRe.test(p.request.method)) return;
      const ts = new Date().toISOString();
      inFlight.set(p.requestId, { method: p.request.method, url: p.request.url, ts });
      void appendEvent(id, {
        ts,
        payload: {
          phase: "request",
          method: p.request.method,
          url: p.request.url,
          headers: p.request.headers,
        },
      });
    }

    if (method === "Network.responseReceived" && phase.includes("response")) {
      const p = params as {
        requestId: string;
        response: { url: string; status: number; headers: Record<string, string> };
      };
      const initial = inFlight.get(p.requestId);
      const url = p.response.url;
      const reqMethod = initial?.method ?? "GET";
      if (urlRe && !urlRe.test(url)) return;
      if (methodRe && !methodRe.test(reqMethod)) return;
      const ts = new Date().toISOString();
      const durationMs = initial
        ? new Date(ts).getTime() - new Date(initial.ts).getTime()
        : undefined;
      inFlight.delete(p.requestId);
      void appendEvent(id, {
        ts,
        payload: {
          phase: "response",
          method: reqMethod,
          url,
          status: p.response.status,
          headers: p.response.headers,
          durationMs,
        },
      });
    }
  };

  chrome.debugger.onEvent.addListener(onEvent);

  await registerMeta({
    id,
    type: "network",
    tabId,
    params: { urlPattern, methodPattern, phase },
    created_at: new Date().toISOString(),
    dropped_since_last_drain: 0,
  });

  stopActions.set(id, async () => {
    chrome.debugger.onEvent.removeListener(onEvent);
    await unregisterMeta(id);
    // Don't detach the debugger — other watchers or tools may still use it.
  });

  return { watcher_id: id };
};

// Append to the exported handlers map:
watchHandlers.watch_network = watchNetwork;
```

(In TypeScript that doesn't allow late mutation of an exported `const`, refactor by moving the export to the bottom of the file and including `watch_network` in the literal.)

- [ ] **Step 7.2 — Manual smoke test**

Reload extension. Open `https://example.com` in a tab.

1. `watch_network({ tabId, urlPattern: "example.com" })` → `{ watcher_id }`.
2. In the tab, navigate to `https://example.com/?reload=1`.
3. `watch_events({ watcher_id })` → expect at least one `phase: "response"` event.
4. `watch_stop({ watcher_id })`.

- [ ] **Step 7.3 — Commit**

```bash
git add src/extensions/watch/dispatch.ts
git commit -m "feat(watch): watch_network via CDP Network.enable (gap C, part 2)"
```

---

## Task 8: Gap C — `watch_console` via CDP

**Files:**
- Modify: `src/extensions/watch/dispatch.ts`

- [ ] **Step 8.1 — Add the console handler**

Append to `src/extensions/watch/dispatch.ts`:

```ts
const watchConsole: DispatchHandler = async (args) => {
  ensureBridgeListener();
  const tabId = args.tabId as number;
  const levels = (args.levels as string[] | undefined) ?? ["error", "warn"];
  const levelSet = new Set(levels);

  const id = crypto.randomUUID();

  await chrome.debugger.attach({ tabId }, "1.3").catch(() => {});
  await chrome.debugger.sendCommand({ tabId }, "Runtime.enable");

  const onEvent = (
    source: chrome.debugger.Debuggee,
    method: string,
    params: unknown
  ) => {
    if (source.tabId !== tabId) return;
    if (method !== "Runtime.consoleAPICalled") return;
    const p = params as {
      type: string;
      args: Array<{ value?: unknown; description?: string }>;
      stackTrace?: { callFrames: Array<{ url: string; lineNumber: number }> };
    };
    if (!levelSet.has(p.type)) return;
    void appendEvent(id, {
      ts: new Date().toISOString(),
      payload: {
        level: p.type,
        args: p.args.map((a) => String(a.value ?? a.description ?? "")),
        stack: p.stackTrace?.callFrames
          .map((f) => `${f.url}:${f.lineNumber}`)
          .join("\n"),
      },
    });
  };

  chrome.debugger.onEvent.addListener(onEvent);
  await registerMeta({
    id,
    type: "console",
    tabId,
    params: { levels },
    created_at: new Date().toISOString(),
    dropped_since_last_drain: 0,
  });

  stopActions.set(id, async () => {
    chrome.debugger.onEvent.removeListener(onEvent);
    await unregisterMeta(id);
  });

  return { watcher_id: id };
};

watchHandlers.watch_console = watchConsole;
```

- [ ] **Step 8.2 — Manual smoke test**

Reload extension. Open `data:text/html,<script>console.warn('hi');</script>`.

1. `watch_console({ tabId, levels: ["warn"] })` → `{ watcher_id }`.
2. In the page, run `console.warn("again")` from DevTools.
3. `watch_events({ watcher_id })` → expect 1+ events with `level: "warn"`, `args: ["again"]`.
4. `watch_stop({ watcher_id })`.

- [ ] **Step 8.3 — Commit**

```bash
git add src/extensions/watch/dispatch.ts
git commit -m "feat(watch): watch_console via CDP Runtime.enable (gap C, part 3)"
```

---

## Task 9: Gap B foundation — recipe storage + variable interpolation

**Files:**
- Create: `src/extensions/recipes/storage.ts`
- Create: `src/extensions/recipes/executor.ts`
- Create: `tests/unit/recipe-vars.test.ts`

- [ ] **Step 9.1 — Write failing tests for variable interpolation**

Create `tests/unit/recipe-vars.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { interpolateArgs } from "../../src/extensions/recipes/executor";

describe("interpolateArgs", () => {
  it("substitutes a single string var", () => {
    expect(interpolateArgs({ url: "https://{{host}}/x" }, { host: "example.com" }))
      .toEqual({ url: "https://example.com/x" });
  });

  it("recurses into nested objects", () => {
    expect(
      interpolateArgs(
        { tabId: 1, ops: [{ kind: "set_text", selector: "h1", text: "Hi {{name}}" }] },
        { name: "Aloe" }
      )
    ).toEqual({
      tabId: 1,
      ops: [{ kind: "set_text", selector: "h1", text: "Hi Aloe" }],
    });
  });

  it("leaves non-string values untouched", () => {
    expect(interpolateArgs({ n: 5, b: true, s: "x={{v}}" }, { v: "1" }))
      .toEqual({ n: 5, b: true, s: "x=1" });
  });

  it("substitutes numbers and booleans by string-coercing", () => {
    expect(interpolateArgs({ s: "n={{n}} b={{b}}" }, { n: 5, b: true }))
      .toEqual({ s: "n=5 b=true" });
  });

  it("leaves unmatched placeholders as-is", () => {
    expect(interpolateArgs({ s: "{{nope}}" }, {})).toEqual({ s: "{{nope}}" });
  });

  it("does not interpolate twice (no recursive expansion)", () => {
    expect(interpolateArgs({ s: "{{a}}" }, { a: "{{b}}", b: "x" }))
      .toEqual({ s: "{{b}}" });
  });
});
```

Run: `pnpm test tests/unit/recipe-vars.test.ts`
Expected: FAIL — `interpolateArgs` not exported yet.

- [ ] **Step 9.2 — Implement the executor**

Create `src/extensions/recipes/executor.ts`:

```ts
import type { RecipeStep } from "../types";

export function interpolateArgs<T>(value: T, vars: Record<string, unknown>): T {
  if (typeof value === "string") {
    return value.replace(/\{\{(\w+)\}\}/g, (whole, name) =>
      name in vars ? String(vars[name as keyof typeof vars]) : whole
    ) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => interpolateArgs(item, vars)) as unknown as T;
  }
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) {
      out[k] = interpolateArgs(v, vars);
    }
    return out as unknown as T;
  }
  return value;
}

export type ExecutorContext = {
  // The dispatcher used to invoke each step. Same path as live MCP tools.
  dispatch: (toolName: string, args: Record<string, unknown>) => Promise<unknown>;
};

export type ExecutionResult = {
  ok: boolean;
  results: unknown[];
  failed_at?: number;
  error?: string;
};

export async function executeSteps(
  steps: RecipeStep[],
  vars: Record<string, unknown>,
  ctx: ExecutorContext
): Promise<ExecutionResult> {
  const results: unknown[] = [];
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];
    const args = interpolateArgs(step.args, vars);
    try {
      const r = await ctx.dispatch(step.tool, args);
      results.push(r);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      return { ok: false, results, failed_at: i, error: msg };
    }
  }
  return { ok: true, results };
}
```

- [ ] **Step 9.3 — Implement storage**

Create `src/extensions/recipes/storage.ts`:

```ts
import type { RecipeName, RecipeRecord, ScheduleId, ScheduleRecord } from "../types";

type RecipesBlob = Record<RecipeName, RecipeRecord>;
type SchedulesBlob = Record<ScheduleId, ScheduleRecord>;

async function getRecipesBlob(): Promise<RecipesBlob> {
  const r = await chrome.storage.local.get(["recipes"]);
  return (r.recipes as RecipesBlob) ?? {};
}

async function setRecipesBlob(blob: RecipesBlob): Promise<void> {
  await chrome.storage.local.set({ recipes: blob });
}

export async function saveRecipe(
  name: RecipeName,
  record: RecipeRecord
): Promise<void> {
  const blob = await getRecipesBlob();
  blob[name] = record;
  await setRecipesBlob(blob);
}

export async function getRecipe(
  name: RecipeName
): Promise<RecipeRecord | undefined> {
  const blob = await getRecipesBlob();
  return blob[name];
}

export async function listRecipes(): Promise<
  Array<RecipeRecord & { name: RecipeName }>
> {
  const blob = await getRecipesBlob();
  return Object.entries(blob).map(([name, rec]) => ({ name, ...rec }));
}

export async function deleteRecipe(name: RecipeName): Promise<boolean> {
  const blob = await getRecipesBlob();
  if (!(name in blob)) return false;
  delete blob[name];
  await setRecipesBlob(blob);
  return true;
}

async function getSchedulesBlob(): Promise<SchedulesBlob> {
  const r = await chrome.storage.local.get(["schedules"]);
  return (r.schedules as SchedulesBlob) ?? {};
}

async function setSchedulesBlob(blob: SchedulesBlob): Promise<void> {
  await chrome.storage.local.set({ schedules: blob });
}

export async function saveSchedule(record: ScheduleRecord): Promise<void> {
  const blob = await getSchedulesBlob();
  blob[record.id] = record;
  await setSchedulesBlob(blob);
}

export async function getSchedule(
  id: ScheduleId
): Promise<ScheduleRecord | undefined> {
  const blob = await getSchedulesBlob();
  return blob[id];
}

export async function listSchedules(): Promise<ScheduleRecord[]> {
  const blob = await getSchedulesBlob();
  return Object.values(blob);
}

export async function deleteSchedule(id: ScheduleId): Promise<boolean> {
  const blob = await getSchedulesBlob();
  if (!(id in blob)) return false;
  delete blob[id];
  await setSchedulesBlob(blob);
  return true;
}
```

- [ ] **Step 9.4 — Run tests**

Run: `pnpm test tests/unit/recipe-vars.test.ts`
Expected: 6 passed.

- [ ] **Step 9.5 — Commit**

```bash
git add src/extensions/recipes/storage.ts src/extensions/recipes/executor.ts tests/unit/recipe-vars.test.ts
git commit -m "feat(recipes): executor with var interpolation + storage layer (gap B foundation)"
```

---

## Task 10: Gap B — `recipe_*` MCP tools

**Files:**
- Create: `src/extensions/recipes/tools.ts`
- Create: `src/extensions/recipes/dispatch.ts`
- Modify: `src/extensions/index.ts`

- [ ] **Step 10.1 — Define schemas**

Create `src/extensions/recipes/tools.ts`:

```ts
import type { ToolDef } from "../types";

export const recipesTools: ToolDef[] = [
  {
    name: "recipe_save",
    description:
      "Persist a named sequence of MCP tool calls. Steps are { tool, args }; any string arg can use {{name}} placeholders bound at run time.",
    inputSchema: {
      type: "object",
      required: ["name", "steps"],
      properties: {
        name: { type: "string", minLength: 1 },
        steps: {
          type: "array",
          minItems: 1,
          items: {
            type: "object",
            required: ["tool", "args"],
            properties: {
              tool: { type: "string" },
              args: { type: "object" },
            },
          },
        },
        vars_schema: {
          type: "object",
          additionalProperties: { type: "string", enum: ["string", "number", "boolean"] },
        },
        description: { type: "string" },
      },
    },
  },
  {
    name: "recipe_list",
    description: "List all saved recipes.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "recipe_run",
    description:
      "Run a saved recipe immediately. Pass `vars` to bind any {{name}} placeholders in the recipe's steps.",
    inputSchema: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" },
        vars: { type: "object" },
      },
    },
  },
  {
    name: "recipe_delete",
    description: "Delete a saved recipe by name.",
    inputSchema: {
      type: "object",
      required: ["name"],
      properties: { name: { type: "string" } },
    },
  },
];
```

- [ ] **Step 10.2 — Implement the dispatcher**

Create `src/extensions/recipes/dispatch.ts`:

```ts
import { getHandler } from "../index";
import type { DispatchHandler, RecipeStep } from "../types";
import { executeSteps, type ExecutorContext } from "./executor";
import {
  deleteRecipe,
  getRecipe,
  listRecipes,
  saveRecipe,
} from "./storage";

const ctx: ExecutorContext = {
  dispatch: async (toolName, args) => {
    const handler = getHandler(toolName);
    if (!handler) {
      throw new Error(`unknown tool: ${toolName}`);
    }
    return await handler(args);
  },
};

const recipeSave: DispatchHandler = async (args) => {
  const name = args.name as string;
  const steps = args.steps as RecipeStep[];
  const vars_schema = args.vars_schema as
    | Record<string, "string" | "number" | "boolean">
    | undefined;
  const description = args.description as string | undefined;
  await saveRecipe(name, {
    steps,
    vars_schema,
    description,
    created_at: new Date().toISOString(),
  });
  return { saved: true };
};

const recipeList: DispatchHandler = async () => {
  return await listRecipes();
};

const recipeRun: DispatchHandler = async (args) => {
  const name = args.name as string;
  const vars = (args.vars as Record<string, unknown> | undefined) ?? {};
  const rec = await getRecipe(name);
  if (!rec) {
    return { ok: false, results: [], error: `recipe not found: ${name}` };
  }
  return await executeSteps(rec.steps, vars, ctx);
};

const recipeDeleteH: DispatchHandler = async (args) => {
  const name = args.name as string;
  return { deleted: await deleteRecipe(name) };
};

export const recipesHandlers: Record<string, DispatchHandler> = {
  recipe_save: recipeSave,
  recipe_list: recipeList,
  recipe_run: recipeRun,
  recipe_delete: recipeDeleteH,
};
```

- [ ] **Step 10.3 — Register the feature**

Edit `src/extensions/index.ts`:

```ts
import { recipesHandlers } from "./recipes/dispatch";
import { recipesTools } from "./recipes/tools";

export const FEATURES: FeatureModule[] = [
  { tools: tabsTools, handlers: tabsHandlers },
  { tools: domTools, handlers: domHandlers },
  { tools: stateTools, handlers: stateHandlers },
  { tools: watchTools, handlers: watchHandlers },
  { tools: recipesTools, handlers: recipesHandlers },
];
```

- [ ] **Step 10.4 — Manual smoke test**

Reload extension. Open `https://example.com` in a tab; capture its tabId.

1. `recipe_save({ name: "demo", steps: [{ tool: "manipulate_dom", args: { tabId: <id>, ops: [{ kind: "set_text", selector: "h1", text: "{{title}}" }] } }] })` → `{ saved: true }`
2. `recipe_list()` → array containing `demo`
3. `recipe_run({ name: "demo", vars: { title: "Recipes work" } })` → `{ ok: true, results: [{ results: [{ ok: true, matched: 1 }] }] }`. The `<h1>` on the page now reads "Recipes work".
4. `recipe_delete({ name: "demo" })` → `{ deleted: true }`

- [ ] **Step 10.5 — Commit**

```bash
git add src/extensions/recipes/tools.ts src/extensions/recipes/dispatch.ts src/extensions/index.ts
git commit -m "feat(recipes): recipe_save / list / run / delete (gap B, part 1)"
```

---

## Task 11: Gap B — schedule resolver + `chrome.alarms` tick

**Files:**
- Create: `src/extensions/recipes/scheduler.ts`
- Create: `tests/unit/schedule-resolver.test.ts`
- Modify: `background.js` (~5-line addition: register the alarms tick listener at boot)

- [ ] **Step 11.1 — Write failing tests for next-run resolver**

Create `tests/unit/schedule-resolver.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { computeNextRun } from "../../src/extensions/recipes/scheduler";

describe("computeNextRun", () => {
  it("everyMinutes adds N minutes from now", () => {
    const now = new Date("2026-04-26T10:00:00Z");
    expect(computeNextRun({ everyMinutes: 15 }, now)).toEqual(
      new Date("2026-04-26T10:15:00Z")
    );
  });

  it("everyMinutes minimum is 1", () => {
    expect(() => computeNextRun({ everyMinutes: 0 }, new Date())).toThrow(
      /minimum/
    );
    expect(() => computeNextRun({ everyMinutes: 0.5 }, new Date())).toThrow(
      /minimum/
    );
  });

  it("atISOString returns the parsed date if in the future", () => {
    const now = new Date("2026-04-26T10:00:00Z");
    expect(
      computeNextRun({ atISOString: "2026-04-26T11:00:00Z" }, now)
    ).toEqual(new Date("2026-04-26T11:00:00Z"));
  });

  it("atISOString returns null for past dates", () => {
    const now = new Date("2026-04-26T10:00:00Z");
    expect(
      computeNextRun({ atISOString: "2026-04-26T09:00:00Z" }, now)
    ).toBeNull();
  });

  it("atISOString rejects unparseable strings", () => {
    expect(() => computeNextRun({ atISOString: "nope" }, new Date())).toThrow(
      /ISO/
    );
  });
});
```

Run: `pnpm test tests/unit/schedule-resolver.test.ts`
Expected: FAIL — `computeNextRun` not defined yet.

- [ ] **Step 11.2 — Implement scheduler**

Create `src/extensions/recipes/scheduler.ts`:

```ts
import type { CronSpec, ScheduleRecord } from "../types";
import { getRecipe, listSchedules, saveSchedule } from "./storage";
import { executeSteps, type ExecutorContext } from "./executor";
import { getHandler } from "../index";

export const TICK_ALARM = "quill:schedules-tick";
export const TICK_PERIOD_MIN = 1.0; // chrome.alarms minimum for packaged

export function computeNextRun(cron: CronSpec, now: Date): Date | null {
  if ("everyMinutes" in cron) {
    if (cron.everyMinutes < 1) {
      throw new Error("schedule: everyMinutes minimum is 1.0 in packaged extensions");
    }
    return new Date(now.getTime() + cron.everyMinutes * 60_000);
  }
  if ("atISOString" in cron) {
    const t = new Date(cron.atISOString);
    if (Number.isNaN(t.getTime())) {
      throw new Error("schedule: atISOString must be a valid ISO timestamp");
    }
    if (t.getTime() <= now.getTime()) return null;
    return t;
  }
  throw new Error("schedule: cron must be { everyMinutes } or { atISOString }");
}

const ctx: ExecutorContext = {
  dispatch: async (toolName, args) => {
    const h = getHandler(toolName);
    if (!h) throw new Error(`unknown tool: ${toolName}`);
    return await h(args);
  },
};

export async function ensureTickAlarm(): Promise<void> {
  const existing = await chrome.alarms.get(TICK_ALARM);
  if (!existing) {
    await chrome.alarms.create(TICK_ALARM, { periodInMinutes: TICK_PERIOD_MIN });
  }
}

export async function runDueSchedules(now = new Date()): Promise<void> {
  const all = await listSchedules();
  for (const s of all) {
    if (!s.enabled) continue;
    if (new Date(s.next_run).getTime() > now.getTime()) continue;
    await runSchedule(s, now);
  }
}

async function runSchedule(s: ScheduleRecord, now: Date): Promise<void> {
  const recipe = await getRecipe(s.recipe);
  if (!recipe) {
    await saveSchedule({
      ...s,
      last_run: now.toISOString(),
      last_status: "error",
      last_error: `recipe not found: ${s.recipe}`,
      next_run: nextOrDisabled(s, now),
      enabled: shouldStayEnabled(s),
    });
    return;
  }
  const result = await executeSteps(recipe.steps, s.vars ?? {}, ctx);
  await saveSchedule({
    ...s,
    last_run: now.toISOString(),
    last_status: result.ok ? "ok" : "error",
    last_error: result.ok ? undefined : result.error,
    next_run: nextOrDisabled(s, now),
    enabled: shouldStayEnabled(s),
  });
}

function shouldStayEnabled(s: ScheduleRecord): boolean {
  if ("atISOString" in s.cron) return false; // one-shot
  return true;
}

function nextOrDisabled(s: ScheduleRecord, now: Date): string {
  try {
    const next = computeNextRun(s.cron, now);
    return next ? next.toISOString() : new Date(0).toISOString();
  } catch {
    return new Date(0).toISOString();
  }
}

// Register the tick listener once at module load.
chrome.alarms.onAlarm.addListener((a) => {
  if (a.name === TICK_ALARM) {
    void runDueSchedules();
  }
});
```

- [ ] **Step 11.3 — Wire alarm bootstrap into background.js**

In `background.js`, in the service-worker-startup section (or `chrome.runtime.onInstalled` handler), add:

```js
import { ensureTickAlarm } from "./src/extensions/recipes/scheduler.js";
// or `require` to match upstream module style

chrome.runtime.onInstalled.addListener(() => {
  void ensureTickAlarm();
});
chrome.runtime.onStartup.addListener(() => {
  void ensureTickAlarm();
});
```

- [ ] **Step 11.4 — Run tests**

Run: `pnpm test tests/unit/schedule-resolver.test.ts`
Expected: 5 passed.

- [ ] **Step 11.5 — Commit**

```bash
git add src/extensions/recipes/scheduler.ts background.js tests/unit/schedule-resolver.test.ts
git commit -m "feat(schedules): tick alarm + next-run resolver (gap B, part 2)"
```

---

## Task 12: Gap B — `schedule_*` MCP tools

**Files:**
- Modify: `src/extensions/recipes/tools.ts` (append schedule schemas)
- Modify: `src/extensions/recipes/dispatch.ts` (append schedule handlers)

- [ ] **Step 12.1 — Append schedule tool schemas**

Append to `src/extensions/recipes/tools.ts`:

```ts
recipesTools.push(
  {
    name: "schedule_create",
    description:
      "Schedule a saved recipe to run on a cron-like cadence. cron is { everyMinutes: N } (N >= 1) or { atISOString: 'YYYY-MM-DDTHH:mm:ssZ' } for one-shot.",
    inputSchema: {
      type: "object",
      required: ["recipe", "cron"],
      properties: {
        recipe: { type: "string" },
        cron: {
          oneOf: [
            {
              type: "object",
              required: ["everyMinutes"],
              properties: { everyMinutes: { type: "number", minimum: 1 } },
            },
            {
              type: "object",
              required: ["atISOString"],
              properties: { atISOString: { type: "string" } },
            },
          ],
        },
        vars: { type: "object" },
        name: { type: "string" },
      },
    },
  },
  {
    name: "schedule_list",
    description: "List all schedules.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "schedule_delete",
    description: "Delete a schedule by id.",
    inputSchema: {
      type: "object",
      required: ["id"],
      properties: { id: { type: "string" } },
    },
  },
  {
    name: "schedule_pause",
    description: "Pause a schedule (sets enabled=false).",
    inputSchema: {
      type: "object",
      required: ["id"],
      properties: { id: { type: "string" } },
    },
  },
  {
    name: "schedule_resume",
    description: "Resume a paused schedule (sets enabled=true; recomputes next_run).",
    inputSchema: {
      type: "object",
      required: ["id"],
      properties: { id: { type: "string" } },
    },
  }
);
```

(If your TypeScript config rejects `.push` on a `const` array, refactor `recipesTools` to be a `let` or build it as `[...recipesTools, ...]`. Keep style consistent with the file's existing pattern.)

- [ ] **Step 12.2 — Append schedule handlers**

Append to `src/extensions/recipes/dispatch.ts`:

```ts
import type { CronSpec, ScheduleRecord } from "../types";
import {
  deleteSchedule as deleteSchedRec,
  getSchedule,
  listSchedules,
  saveSchedule,
} from "./storage";
import { computeNextRun } from "./scheduler";

const scheduleCreate: DispatchHandler = async (args) => {
  const recipe = args.recipe as string;
  const cron = args.cron as CronSpec;
  const vars = args.vars as Record<string, unknown> | undefined;
  const id = crypto.randomUUID();
  const now = new Date();
  const nextRun = computeNextRun(cron, now);
  if (nextRun === null) {
    return { ok: false, error: "schedule: atISOString is in the past" };
  }
  const record: ScheduleRecord = {
    id,
    cron,
    recipe,
    vars,
    enabled: true,
    next_run: nextRun.toISOString(),
  };
  await saveSchedule(record);
  return { id, next_run: record.next_run };
};

const scheduleList: DispatchHandler = async () => {
  return await listSchedules();
};

const scheduleDelete: DispatchHandler = async (args) => {
  const id = args.id as string;
  return { deleted: await deleteSchedRec(id) };
};

const schedulePause: DispatchHandler = async (args) => {
  const id = args.id as string;
  const rec = await getSchedule(id);
  if (!rec) return { ok: false, error: "schedule not found" };
  await saveSchedule({ ...rec, enabled: false });
  return { enabled: false };
};

const scheduleResume: DispatchHandler = async (args) => {
  const id = args.id as string;
  const rec = await getSchedule(id);
  if (!rec) return { ok: false, error: "schedule not found" };
  const now = new Date();
  const next = computeNextRun(rec.cron, now);
  if (next === null) {
    return { ok: false, error: "schedule: cannot resume — atISOString is in the past" };
  }
  await saveSchedule({ ...rec, enabled: true, next_run: next.toISOString() });
  return { enabled: true, next_run: next.toISOString() };
};

Object.assign(recipesHandlers, {
  schedule_create: scheduleCreate,
  schedule_list: scheduleList,
  schedule_delete: scheduleDelete,
  schedule_pause: schedulePause,
  schedule_resume: scheduleResume,
});
```

- [ ] **Step 12.3 — Manual smoke test**

Reload extension. Save a trivial recipe first:

1. `recipe_save({ name: "ping", steps: [{ tool: "tabs_list_all", args: {} }] })`
2. `schedule_create({ recipe: "ping", cron: { everyMinutes: 1 } })` → `{ id: "...", next_run: "..." }`
3. Wait ~75 seconds.
4. `schedule_list()` → entry now has `last_run` populated, `last_status: "ok"`, `next_run` advanced ~1 min into the future.
5. `schedule_pause({ id })` → `{ enabled: false }`. After another minute, `last_run` should not advance.
6. `schedule_resume({ id })`. After another minute, `last_run` advances.
7. `schedule_delete({ id })` → `{ deleted: true }`.

- [ ] **Step 12.4 — Commit**

```bash
git add src/extensions/recipes/tools.ts src/extensions/recipes/dispatch.ts
git commit -m "feat(schedules): schedule_create / list / delete / pause / resume (gap B, part 3)"
```

---

## Task 13: README divergence note + native-host registration

**Files:**
- Modify: `README.md`
- Modify (or create): `scripts/install-host.sh`
- Modify: native messaging host manifest path inside `host/native-host.js` if the upstream has the host name baked in

- [ ] **Step 13.1 — Rename native messaging host**

Find every reference to the upstream's native messaging host name (likely `com.anthropic.claude_in_chrome` or similar). Rename to `com.aloewright.quill_in_chrome`. Files to grep:

```bash
grep -rln "claude_in_chrome\|claude-in-chrome\|com\.anthropic" --include="*.js" --include="*.json" --include="*.sh"
```

Update every match to use the new name. The native host manifest installed under `~/Library/Application Support/Google/Chrome/NativeMessagingHosts/` (macOS) / `~/.config/google-chrome/NativeMessagingHosts/` (Linux) must use the new name too.

- [ ] **Step 13.2 — Update install script**

Read the upstream's install script (`scripts/install-host.sh` or `install.sh` — exact location varies). Update to:
- Use the new host name `com.aloewright.quill_in_chrome`
- Print clear instructions about uninstalling Anthropic's official extension first (CDP attach is exclusive)

If the upstream doesn't have an install script, create one based on Chrome's [native messaging docs](https://developer.chrome.com/docs/apps/nativeMessaging). (Reference only — don't fetch at install time; embed the manifest content in the script.)

- [ ] **Step 13.3 — README divergence section**

Add to `README.md`:

```markdown
## Fork divergence from `noemica-io/open-claude-in-chrome`

This fork extends the upstream with five additive feature layers under `src/extensions/`:

1. **Drop tab-group gating** — tools now accept any `tabId` from `chrome.tabs.query`. **Trust model: all tabs.** This means Claude Code can drive any tab including authenticated banking, email, etc. Acceptable on a personal dev machine; do not deploy to less-trusted contexts.
2. **`tabs_list_all`** — list every open tab.
3. **`browser_state`** — multi-tab snapshot in one call.
4. **`manipulate_dom`** — typed DOM mutation (vs. raw JS strings).
5. **`watch_*` family** — push subscriptions to DOM mutations, network events, console messages.
6. **`recipe_*` and `schedule_*`** — save/replay tool sequences; cron-like scheduling via `chrome.alarms`.

### Installation

1. **Uninstall Anthropic's official `claude-in-chrome` first.** Both extensions cannot coexist — `chrome.debugger.attach` is exclusive per-tab.
2. Run `./scripts/install-host.sh` to register the native messaging host (`com.aloewright.quill_in_chrome`).
3. Update Claude Code's MCP client config (`~/.claude/mcp.json` or equivalent) to point at this fork's MCP server binary instead of Anthropic's.
4. Load `chrome://extensions` → Developer mode → Load unpacked → select this directory.

### Upstream sync

This fork is designed to merge upstream cleanly. All fork-specific code lives under `src/extensions/`. To pull upstream:

\`\`\`bash
git remote add upstream https://github.com/noemica-io/open-claude-in-chrome.git
git fetch upstream
git merge upstream/main
\`\`\`

Conflicts should be limited to `background.js` (registration hook) and `host/mcp-server.js` (tool registration). All other changes are additive new files.
```

- [ ] **Step 13.4 — Verify install end-to-end**

```bash
# 1. Rebuild
pnpm build  # or whatever the upstream uses

# 2. Run install script
./scripts/install-host.sh

# 3. Reload extension, then in Claude Code:
#    - Verify mcp.json points at this fork's server
#    - Run `tabs_list_all` — should succeed
```

- [ ] **Step 13.5 — Commit**

```bash
git add README.md scripts/install-host.sh host/native-host.js
# (and any other files that had the host name renamed)
git commit -m "docs: divergence note + native messaging host rename to com.aloewright.quill_in_chrome"
```

---

## Task 14: End-to-end smoke recipe

**Files:**
- Create: `tests/manual/end-to-end.md` (a markdown checklist for the human running the smoke test)

- [ ] **Step 14.1 — Build a one-page smoke document**

Create `tests/manual/end-to-end.md`:

```markdown
# End-to-end smoke test

Reload the extension, then run these MCP calls in order. Each step's expected result is the only thing that should appear; if anything else happens, capture the response and stop.

## 1. Setup
- Open three regular tabs in Chrome (any URLs — at least one to https://example.com).

## 2. browser_state — confirm all-tabs visibility
- Call `browser_state`
- Expect: `tabs` array with ≥ 3 entries, `schedules_running: []`, `watchers_active: []`

## 3. tabs_list_all
- Call `tabs_list_all`
- Expect: same set of tabs as `browser_state.tabs`

## 4. manipulate_dom — typed mutation on example.com
- Get the example.com tab id from the `browser_state` response above.
- Call `manipulate_dom({ tabId: <id>, ops: [{ kind: "set_text", selector: "h1", text: "Quill works" }, { kind: "add_class", selector: "p", className: "quill-edited" }] })`
- Expect: `{ results: [{ ok: true, matched: 1 }, { ok: true, matched: 1 }] }`
- Visually confirm the page's `<h1>` reads "Quill works".

## 5. watch_element — DOM observer
- Call `watch_element({ tabId: <id>, selector: ".quill-marker", on: ["appear"] })`
- Save the `watcher_id`.
- In the page (DevTools console): `document.body.insertAdjacentHTML('beforeend', '<div class="quill-marker">x</div>')`
- Call `watch_events({ watcher_id })`
- Expect: ≥ 1 event with `kind: "appear", matchedCount: 1`

## 6. recipe_save + recipe_run
- Call `recipe_save({ name: "smoke", steps: [{ tool: "manipulate_dom", args: { tabId: <id>, ops: [{ kind: "set_text", selector: "h1", text: "{{label}}" }] } }] })`
- Call `recipe_run({ name: "smoke", vars: { label: "Recipe ran" } })`
- Expect: `{ ok: true, results: [...] }`. Page `<h1>` now reads "Recipe ran".

## 7. schedule_create — periodic
- Call `schedule_create({ recipe: "smoke", cron: { everyMinutes: 1 }, vars: { label: "Scheduled" } })`
- Save the `id`.
- Wait 70 seconds.
- Call `schedule_list`. Expect: the schedule has `last_run` set, `last_status: "ok"`. Page `<h1>` reads "Scheduled".

## 8. Cleanup
- `watch_stop({ watcher_id })`
- `schedule_delete({ id })`
- `recipe_delete({ name: "smoke" })`

If all 8 steps succeed, v1 ships.
```

- [ ] **Step 14.2 — Walk the smoke test**

Open Claude Code with the new MCP config. Walk through `tests/manual/end-to-end.md` step-by-step. Record any unexpected results.

- [ ] **Step 14.3 — Commit + push final**

```bash
git add tests/manual/end-to-end.md
git commit -m "docs: end-to-end smoke checklist"
git push
```

---

## Self-review notes

**Spec coverage:**
- Trust model (all-tabs) ✓ Task 2
- Fork strategy (additive layers) ✓ Tasks 0, 1, 13
- `tabs_list_all` ✓ Task 2
- `browser_state` ✓ Task 4
- `manipulate_dom` ✓ Task 3
- `watch_element/network/console/events/list/stop` ✓ Tasks 5–8
- Watcher queue cap (500 FIFO) ✓ Task 5
- `recipe_save/list/run/delete` ✓ Tasks 9–10
- `{{var}}` interpolation ✓ Task 9
- `schedule_create/list/delete/pause/resume` ✓ Tasks 11–12
- `chrome.alarms` tick at 1 min ✓ Task 11
- Native messaging host rename ✓ Task 13
- Out-of-scope items (branching, retries, side panel) — correctly absent

**Type consistency check:**
- `WatcherId`, `ScheduleId`, `RecipeName` defined once in Task 1's `types.ts`, used consistently across Tasks 5–12 ✓
- `RecipeStep`, `CronSpec`, `RecipeRecord`, `ScheduleRecord` defined once, used consistently ✓
- `DomOp` defined in Task 3's `dom/tools.ts`, used in Task 3's dispatcher and apply-ops ✓
- `WatcherEvent`, `WatcherType`, `WatcherMetaRecord` defined in Task 1 types, used in Tasks 5–8 ✓

**Placeholder scan:** No "TBD", "TODO", or "implement later" markers found. The "match upstream module style" notes in Tasks 1.3 and 1.4 are runtime adaptation cues, not placeholders — they tell the engineer what to inspect, not what to deferred.

**Implementation order:** Each task ships independently. Dependency chain: 0 → 1 → 2 (drops gating, gives all-tab access early so subsequent watchers/recipes can target any tab) → 3 → 4 → 5 (storage layer for watchers) → 6 → 7 → 8 → 9 (storage + executor for recipes) → 10 → 11 → 12 → 13 (install + README) → 14 (smoke).

**Out of scope (deferred):**
- Cron richer than `everyMinutes` / `atISOString`
- Sub-recipes / branching / loops
- Side-panel UI
- Encryption of `chrome.storage.local`
- Retry/backoff on failed schedules
- Chrome Web Store submission

These are documented in the spec's "Out of scope for v1" section and should not be attempted by an implementer following this plan.
