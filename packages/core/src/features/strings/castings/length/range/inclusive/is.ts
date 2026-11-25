import isMinOrEqual from '../../min/orEqual/is';
import isMaxOrEqual from '../../max/orEqual/is';

/**
 * Checks that a string's length lies in the closed interval `[min, max]`.
 *
 * Combines the inclusive min-length guard {@linkcode isMinOrEqual} with the
 * inclusive max-length guard {@linkcode isMaxOrEqual}, so the value may be
 * exactly as long as either bound.
 *
 * @template Min - Numeric literal type of the lower bound.
 * @template Max - Numeric literal type of the upper bound.
 * @template T - Type of the tested string.
 * @param min - Inclusive lower bound.
 * @param max - Inclusive upper bound.
 * @param value - String whose length is checked.
 * @returns `true` when `min <= value.length <= max`, otherwise `false`.
 */
const isInclusiveRangeLength = <
  Min extends number,
  Max extends number,
  T extends string,
>(
  min: Min,
  max: Max,
  value: T,
) => {
  return isMinOrEqual(min, value) && isMaxOrEqual(max, value);
};

export default isInclusiveRangeLength;
