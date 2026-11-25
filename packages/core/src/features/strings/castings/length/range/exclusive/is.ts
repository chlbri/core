import isMin from '../../min/is';
import isMax from '../../max/is';

/**
 * Checks that a string's length lies in the open interval `(min, max)`.
 *
 * Combines the min-length guard {@linkcode isMin} with the max-length guard
 * {@linkcode isMax}, so the value must be strictly longer than `min` and
 * strictly shorter than `max`.
 *
 * @template Min - Numeric literal type of the lower bound.
 * @template Max - Numeric literal type of the upper bound.
 * @template T - Type of the tested string.
 * @param min - Exclusive lower bound.
 * @param max - Exclusive upper bound.
 * @param value - String whose length is checked.
 * @returns `true` when `min < value.length < max`, otherwise `false`.
 */
const isExclusiveRangeLength = <
  Min extends number,
  Max extends number,
  T extends string,
>(
  min: Min,
  max: Max,
  value: T,
) => {
  return isMin(min, value) && isMax(max, value);
};

export default isExclusiveRangeLength;
