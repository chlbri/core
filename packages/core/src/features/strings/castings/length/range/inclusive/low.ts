import isInclusiveRangeLength from './is';

/**
 * Low-level inclusive-range check returning the comparison result.
 *
 * Wraps {@linkcode isInclusiveRangeLength} so callers can inspect both the
 * boolean outcome and the original string.
 *
 * @param min - Inclusive lower bound.
 * @param max - Inclusive upper bound.
 * @param value - String whose length is checked.
 * @returns An object with `bool` (whether the length lies in `[min, max]`) and
 * the unchanged `value`.
 */
const lowInclusiveRangeLength = (min: number, max: number, value: string) => {
  const bool = isInclusiveRangeLength(min, max, value);

  return { bool, value };
};

export default lowInclusiveRangeLength;
