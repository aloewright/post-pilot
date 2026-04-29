// Canonical permission scopes for Quill API keys. Keep the action surface
// small: resource → granted actions. The plugin's `permissions` field is a
// Record<string, string[]> shaped like { humanize: ["write"], apply: ["write"] }.

export type Resource = "humanize" | "apply" | "guides" | "keys" | "billing";
export type Action = "read" | "write";

export type ScopeId = `${Resource}:${Action}`;

export const ALL_SCOPES: readonly ScopeId[] = [
  "humanize:write",
  "apply:write",
  "guides:read",
  "keys:read",
  "billing:read",
] as const;

// Used by the UI as a default for "Read-only key" preset.
export const READ_ONLY_SCOPES: readonly ScopeId[] = [
  "guides:read",
  "keys:read",
  "billing:read",
] as const;

// Default scopes for a fresh key when the user makes no selection: full
// access to humanize + apply (the metered surface). Intentionally narrow:
// callers who need read-only or admin scopes opt in.
export const DEFAULT_SCOPES: readonly ScopeId[] = [
  "humanize:write",
  "apply:write",
] as const;

export function isScopeId(value: unknown): value is ScopeId {
  return (
    typeof value === "string" &&
    (ALL_SCOPES as readonly string[]).includes(value)
  );
}

// Convert flat scope list ("humanize:write", "apply:write") into the shape
// the better-auth plugin expects: Record<resource, action[]>.
export function toPluginPermissions(
  scopes: readonly ScopeId[]
): Record<Resource, Action[]> {
  const map: Partial<Record<Resource, Set<Action>>> = {};
  for (const scope of scopes) {
    const [resource, action] = scope.split(":") as [Resource, Action];
    const set = map[resource] ?? new Set<Action>();
    set.add(action);
    map[resource] = set;
  }
  const out: Partial<Record<Resource, Action[]>> = {};
  for (const [k, v] of Object.entries(map) as Array<[Resource, Set<Action>]>) {
    out[k] = Array.from(v);
  }
  return out as Record<Resource, Action[]>;
}

// Inverse: parse better-auth's stored permissions JSON back into a flat
// scope list. Tolerant of malformed input — returns [] on parse failure.
export function fromPluginPermissions(raw: unknown): ScopeId[] {
  let value: unknown = raw;
  // better-auth persists `permissions` as a JSON string in some adapters.
  if (typeof value === "string") {
    try {
      value = JSON.parse(value);
    } catch {
      return [];
    }
  }
  if (!value || typeof value !== "object") return [];
  const out: ScopeId[] = [];
  for (const [resource, actions] of Object.entries(value)) {
    if (!Array.isArray(actions)) continue;
    for (const action of actions) {
      const id = `${resource}:${action}` as ScopeId;
      if (isScopeId(id)) out.push(id);
    }
  }
  return out;
}
