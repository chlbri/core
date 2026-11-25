import lowMaxOrEqualLength from './low';
import { MaxOrEqualLength } from '../../../../types';

/**
 * Function type enforcing that a string is at most a maximum length.
 *
 * @template Max - Inclusive upper bound of the string length.
 * @template T - Literal type of the string being checked.
 */
type StrictMaxOrEqualLength_L = <Max extends number, T extends string>(
  max: Max,
  value: MaxOrEqualLength<Max, T>,
) => MaxOrEqualLength<Max, T>;

/**
 * Returns the given string when it is at most `max` long.
 *
 * Delegates the comparison to the low-level helper and returns the value
 * unchanged on success.
 *
 * @throws When the string length is greater than `max`.
 * @see -- type {@linkcode StrictMaxOrEqualLength_L}
 */
const strictMaxOrEqualLength: StrictMaxOrEqualLength_L = (max, _value) => {
  const { bool, value } = lowMaxOrEqualLength(max, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not less than or equal to ${max}`);
  }

  return value as any;
};

export default strictMaxOrEqualLength;
