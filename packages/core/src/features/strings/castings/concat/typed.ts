import { ArrayS, JoinString } from '../../types';
import stringConcatTyped from './low';

/**
 * Typed signature of the separator-less string concatenation helper.
 *
 * @template T - Tuple of values to concatenate.
 * @see -- type {@linkcode JoinString}
 */
type StringConcatTyped_F = <T extends ArrayS>(...array: T) => JoinString<T>;

/**
 * Concatenates its arguments without a separator.
 *
 * @see -- type {@linkcode StringConcatTyped_F}
 */
export default stringConcatTyped as StringConcatTyped_F;
