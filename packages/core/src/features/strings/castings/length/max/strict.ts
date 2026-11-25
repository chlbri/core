import lowMaxLength from './low';
import { MaxLength } from '../../../types';

/**
 * Function type enforcing that a string is shorter than a maximum length.
 *
 * @template Max - Exclusive upper bound of the string length.
 * @template T - Literal type of the string being checked.
 */
type StrictMaxLength_L = <Max extends number, T extends string>(
  max: Max,
  value: MaxLength<Max, T>,
) => MaxLength<Max, T>;

/**
 * Returns the given string when it is shorter than `max`.
 *
 * Delegates the comparison to the low-level helper and returns the value
 * unchanged on success.
 *
 * @throws When the string length is not less than `max`.
 * @see -- type {@linkcode StrictMaxLength_L}
 */
const strictMaxLength: StrictMaxLength_L = (max, _value) => {
  const { bool, value } = lowMaxLength(max, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not less than ${max}`);
  }

  return value as any;
};

export default strictMaxLength;
