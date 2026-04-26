import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "postpilot.bookmarks";
const EVENT = "postpilot:bookmarks-changed";

function read(): Set<string> {
  if (typeof window === "undefined") {
    return new Set();
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return new Set();
    }
    const parsed = JSON.parse(raw) as unknown;
    if (Array.isArray(parsed)) {
      return new Set(parsed.filter((s): s is string => typeof s === "string"));
    }
    return new Set();
  } catch {
    return new Set();
  }
}

function write(set: Set<string>) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]));
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Set<string>>(() => read());

  useEffect(() => {
    const sync = () => setBookmarks(read());
    window.addEventListener(EVENT, sync);
    // 'storage' fires in *other* tabs when one tab updates localStorage —
    // gives us cross-tab sync without a server round-trip.
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((slug: string) => {
    const next = new Set(read());
    if (next.has(slug)) {
      next.delete(slug);
    } else {
      next.add(slug);
    }
    write(next);
    setBookmarks(next);
  }, []);

  const isBookmarked = useCallback(
    (slug: string) => bookmarks.has(slug),
    [bookmarks]
  );

  return { bookmarks, isBookmarked, toggle };
}
