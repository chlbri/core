import lowMinLength from './low';
import { MinLength } from '../../../types';

/**
 * Function type of {@linkcode strictMinLength}.
 *
 * Accepts a minimum length and a string already narrowed to type
 * {@linkcode MinLength}, and returns that same narrow string type.
 */
type StrictMinLength_L = <Min extends number, T extends string>(
  min: Min,
  value: MinLength<Min, T>,
) => MinLength<Min, T>;

/**
 * Asserts that a string is strictly longer than a minimum length.
 *
 * Validates the value with {@linkcode lowMinLength} and throws an `Error` when
 * its length is not greater than `min`. On success the original string is
 * returned, narrowed to type {@linkcode MinLength}.
 *
 * @see -- type {@linkcode StrictMinLength_L}
 */
const strictMinLength: StrictMinLength_L = (min, _value) => {
  const { bool, value } = lowMinLength(min, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not greater than ${min}`);
  }

  return value as any;
};

export default strictMinLength;
