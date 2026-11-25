import low from './low';
import { StringCompareWith } from '../../../types';
import { _unknown } from '#utils/_unknown';

/**
 * Function type comparing two strings by length.
 *
 * The result is the literal type {@linkcode StringCompareWith} of the two
 * string literal types.
 *
 * @template T - Literal type of the first string.
 * @template U - Literal type of the second string.
 */
type Fn1 = <T extends string, U extends string>(
  a: T,
  b: U,
) => StringCompareWith<T, U>;

/**
 * Typed variant of the string length comparison.
 *
 * Casts the runtime comparator through {@linkcode _unknown} so the literal
 * comparison result is reflected in the type.
 *
 * @see -- type {@linkcode Fn1}
 */
const stringLengthCompareTyped: Fn1 = _unknown(low);
export default stringLengthCompareTyped;
