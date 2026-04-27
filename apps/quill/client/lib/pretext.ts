// Wrapper around @chenglou/pretext for measuring the height of multi-line
// text without forcing browser layout. Use this when you need to know how
// tall a paragraph will render *before* it's in the DOM — e.g. to size
// virtualized list items, lay out a masonry grid, or pre-compute card
// heights so the first paint doesn't shift.
//
// Pretext caches by `prepare()` id, so calling `measure` repeatedly with
// the same text + font + options is cheap. We add a slug-scoped cache on
// top so React render loops don't re-prepare the same string.

import { layout, prepare, type PreparedText } from "@chenglou/pretext";

const cache = new Map<string, PreparedText>();

/**
 * Returns the rendered height in pixels of `text` at the given font,
 * line height, and maximum width. Uses a memoized `prepare()` keyed by
 * `cacheKey` so subsequent calls with the same text are O(1).
 *
 * `font` is a CSS-style font shorthand, e.g. `"15px Inter, system-ui, sans-serif"`.
 */
export function measureTextHeight(
  cacheKey: string,
  text: string,
  font: string,
  maxWidth: number,
  lineHeight: number
): number {
  let prepared = cache.get(cacheKey);
  if (!prepared) {
    prepared = prepare(text, font);
    cache.set(cacheKey, prepared);
  }
  return layout(prepared, maxWidth, lineHeight).height;
}

/**
 * Same shape as `measureTextHeight` but returns the rendered line count
 * instead. Useful for clamping decisions ("does this fit in 3 lines?").
 */
export function measureLineCount(
  cacheKey: string,
  text: string,
  font: string,
  maxWidth: number,
  lineHeight: number
): number {
  let prepared = cache.get(cacheKey);
  if (!prepared) {
    prepared = prepare(text, font);
    cache.set(cacheKey, prepared);
  }
  return layout(prepared, maxWidth, lineHeight).lineCount;
}
