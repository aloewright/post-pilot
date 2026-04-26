import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "postpilot.bookmarks";
const EMPTY: Set<string> = new Set();

function read(): Set<string> {
  if (typeof window === "undefined") {
    return EMPTY;
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return EMPTY;
    }
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return new Set(parsed.filter((s): s is string => typeof s === "string"));
    }
    return EMPTY;
  } catch {
    return EMPTY;
  }
}

// Singleton store: one set of listeners for the whole app, one cached snapshot.
// React's useSyncExternalStore requires getSnapshot to return a stable
// reference when nothing changed, so we cache the Set and only replace it on
// genuine mutations (toggle in this tab, 'storage' event from another tab).
let snapshot = read();
const subscribers = new Set<() => void>();

function notify() {
  for (const cb of subscribers) {
    cb();
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key !== null && e.key !== STORAGE_KEY) {
      return;
    }
    snapshot = read();
    notify();
  });
}

function subscribe(cb: () => void) {
  subscribers.add(cb);
  return () => {
    subscribers.delete(cb);
  };
}

function getSnapshot() {
  return snapshot;
}

export function useBookmarks() {
  const bookmarks = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);

  const toggle = useCallback((slug: string) => {
    const next = new Set(snapshot);
    if (next.has(slug)) {
      next.delete(slug);
    } else {
      next.add(slug);
    }
    snapshot = next;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...next]));
    }
    notify();
  }, []);

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.has(slug),
    [bookmarks]
  );

  return { bookmarks, isBookmarked, toggle };
}
