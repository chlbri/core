import lowExclusiveRangeLength from './low';
import { InRangeExclusive } from '../../../../types';

/**
 * Function type of {@linkcode strictExclusiveRangeLength}.
 *
 * Accepts the exclusive bounds `min` and `max` plus a string already narrowed
 * to type {@linkcode InRangeExclusive}, and returns that same narrow string
 * type.
 */
type StrictExclusiveRangeLength_L = <
  Min extends number,
  Max extends number,
  T extends string,
>(
  min: Min,
  max: Max,
  value: InRangeExclusive<Min, Max, T>,
) => InRangeExclusive<Min, Max, T>;

/**
 * Asserts that a string's length lies in the open interval `(min, max)`.
 *
 * Validates the value with {@linkcode lowExclusiveRangeLength} and throws an
 * `Error` when the length is not strictly between `min` and `max`. On success
 * the original string is returned, narrowed to type
 * {@linkcode InRangeExclusive}.
 *
 * @see -- type {@linkcode StrictExclusiveRangeLength_L}
 */
const strictExclusiveRangeLength: StrictExclusiveRangeLength_L = (
  min,
  max,
  _value,
) => {
  const { bool, value } = lowExclusiveRangeLength(min, max, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not in range (${min}, ${max})`);
  }

  return value as any;
};

export default strictExclusiveRangeLength;
