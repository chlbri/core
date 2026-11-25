import { ArrayS, PossibleString, JoinString } from '../../../types';
import stringConcatWithSeparatorTyped from '../utils';

/**
 * Typed signature of concatenation with an explicit separator.
 *
 * @template T - Type of the separator.
 * @template A - Tuple of values to concatenate.
 * @see -- type {@linkcode JoinString}
 */
type StringConcatWithSeparatorTyped_F = <
  T extends PossibleString,
  const A extends ArrayS,
>(
  sep: T,
  ...array: A
) => JoinString<A, T>;

/**
 * Concatenates its arguments, inserting `sep` between consecutive values.
 *
 * @see -- type {@linkcode StringConcatWithSeparatorTyped_F}
 */
export default stringConcatWithSeparatorTyped as StringConcatWithSeparatorTyped_F;
