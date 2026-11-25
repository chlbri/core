import isMinLength from './is';

/**
 * Low-level min-length check returning the comparison result.
 *
 * Wraps {@linkcode isMinLength} so callers can inspect both the boolean outcome
 * and the original string without repeating the length comparison.
 *
 * @param min - Minimum length threshold (exclusive).
 * @param value - String whose length is checked.
 * @returns An object with `bool` (whether the length is strictly greater than
 * `min`) and the unchanged `value`.
 */
const lowMinLength = (min: number, value: string) => {
  const bool = isMinLength(min, value);

  return { bool, value };
};

export default lowMinLength;
