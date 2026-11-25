import lowMinOrEqualLength from './low';
import { MinOrEqualLength } from '../../../../types';

/**
 * Function type of {@linkcode strictMinOrEqualLength}.
 *
 * Accepts a minimum length and a string already narrowed to type
 * {@linkcode MinOrEqualLength}, and returns that same narrow string type.
 */
type StrictMinOrEqualLength_L = <Min extends number, T extends string>(
  min: Min,
  value: MinOrEqualLength<Min, T>,
) => MinOrEqualLength<Min, T>;

/**
 * Asserts that a string is at least a minimum number of characters long.
 *
 * Validates the value with {@linkcode lowMinOrEqualLength} and throws an `Error`
 * when its length is less than `min`. On success the original string is
 * returned, narrowed to type {@linkcode MinOrEqualLength}.
 *
 * @see -- type {@linkcode StrictMinOrEqualLength_L}
 */
const strictMinOrEqualLength: StrictMinOrEqualLength_L = (min, _value) => {
  const { bool, value } = lowMinOrEqualLength(min, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not greater than or equal to ${min}`);
  }

  return value as any;
};

export default strictMinOrEqualLength;
