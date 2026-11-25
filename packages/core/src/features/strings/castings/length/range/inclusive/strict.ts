import lowInclusiveRangeLength from './low';
import { InRangeInclusive } from '../../../../types';

/**
 * Function type of {@linkcode strictInclusiveRangeLength}.
 *
 * Accepts the inclusive bounds `min` and `max` plus a string already narrowed
 * to type {@linkcode InRangeInclusive}, and returns that same narrow string
 * type.
 */
type StrictInclusiveRangeLength_L = <
  Min extends number,
  Max extends number,
  T extends string,
>(
  min: Min,
  max: Max,
  value: InRangeInclusive<Min, Max, T>,
) => InRangeInclusive<Min, Max, T>;

/**
 * Asserts that a string's length lies in the closed interval `[min, max]`.
 *
 * Validates the value with {@linkcode lowInclusiveRangeLength} and throws an
 * `Error` when the length is outside `min` to `max`. On success the original
 * string is returned, narrowed to type {@linkcode InRangeInclusive}.
 *
 * @see -- type {@linkcode StrictInclusiveRangeLength_L}
 */
const strictInclusiveRangeLength: StrictInclusiveRangeLength_L = (
  min,
  max,
  _value,
) => {
  const { bool, value } = lowInclusiveRangeLength(min, max, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not in range [${min}, ${max}]`);
  }

  return value as any;
};

export default strictInclusiveRangeLength;
