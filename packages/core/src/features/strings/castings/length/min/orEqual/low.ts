import isMinOrEqualLength from './is';

/**
 * Low-level inclusive min-length check returning the comparison result.
 *
 * Wraps {@linkcode isMinOrEqualLength} so callers can inspect both the boolean
 * outcome and the original string.
 *
 * @param min - Minimum length threshold (inclusive).
 * @param value - String whose length is checked.
 * @returns An object with `bool` (whether the length is greater than or equal
 * to `min`) and the unchanged `value`.
 */
const lowMinOrEqualLength = (min: number, value: string) => {
  const bool = isMinOrEqualLength(min, value);

  return { bool, value };
};

export default lowMinOrEqualLength;
