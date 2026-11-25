import lowExactLength from './low';
import { ExactLength } from '../../../types';

/**
 * Function type enforcing that a string has an exact length.
 *
 * @template Exact - Literal length the string must have.
 * @template T - Literal type of the string being checked.
 */
type StrictExactLength_L = <Exact extends number, T extends string>(
  exact: Exact,
  value: ExactLength<Exact, T>,
) => ExactLength<Exact, T>;

/**
 * Returns the given string when its length matches `exact`.
 *
 * Delegates the comparison to the low-level helper and returns the value
 * unchanged on success.
 *
 * @throws When the string length is not equal to `exact`.
 * @see -- type {@linkcode StrictExactLength_L}
 */
const strictExactLength: StrictExactLength_L = (exact, _value) => {
  const { bool, value } = lowExactLength(exact, _value);

  if (!bool) {
    throw new Error(`"${value}".length is not equal to ${exact}`);
  }

  return value as any;
};

export default strictExactLength;
