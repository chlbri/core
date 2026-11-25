import { _unknown } from '#utils/_unknown';
import { StringCompare, StringLength } from '../../../../types';
import stringCompareLengthNumberLow from './low';

/**
 * Function type comparing the length of a string with a number.
 *
 * The result is the literal type {@linkcode StringCompare} of the string length,
 * computed with {@linkcode StringLength}, and the given number.
 *
 * @template N - Literal number the string length is compared against.
 * @template T - Literal type of the string being measured.
 */
type Fn1 = <N extends number, T extends string>(
  length: N,
  value: T,
) => StringCompare<StringLength<T>, N>;

/**
 * Typed variant of the string-length-to-number comparison.
 *
 * Casts the runtime comparator through {@linkcode _unknown} so the literal
 * comparison result is reflected in the type.
 *
 * @see -- type {@linkcode Fn1}
 */
const compareLengthNumberTyped: Fn1 = _unknown(stringCompareLengthNumberLow);

export default compareLengthNumberTyped;
