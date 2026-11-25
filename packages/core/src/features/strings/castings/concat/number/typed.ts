import { TupleOf } from '#types';
import { JoinString } from '../../../types';
import stringConcatTyped from './low';

/**
 * Typed signature for repeating a string value.
 *
 * @template T - String type to repeat.
 * @template N - Number of repetitions.
 * @template S - Separator inserted between repetitions.
 * @see -- type {@linkcode JoinString}
 */
type MultiString_F = <T extends string, N extends number, S extends string = ''>(
  value: T,
  count: N,
  separator?: S,
) => JoinString<TupleOf<T, N>, S>;

/**
 * Repeats a string `count` times, optionally separated by `separator`.
 *
 * @see -- type {@linkcode MultiString_F}
 */
export default stringConcatTyped as MultiString_F;
