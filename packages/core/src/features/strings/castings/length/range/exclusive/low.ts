import isExclusiveRangeLength from './is';

/**
 * Low-level exclusive-range check returning the comparison result.
 *
 * Wraps {@linkcode isExclusiveRangeLength} so callers can inspect both the
 * boolean outcome and the original string.
 *
 * @param min - Exclusive lower bound.
 * @param max - Exclusive upper bound.
 * @param value - String whose length is checked.
 * @returns An object with `bool` (whether the length lies in `(min, max)`) and
 * the unchanged `value`.
 */
const lowExclusiveRangeLength = (min: number, max: number, value: string) => {
  const bool = isExclusiveRangeLength(min, max, value);

  return { bool, value };
};

export default lowExclusiveRangeLength;
