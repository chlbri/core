import { TupleOf } from '#types';
import { ExactLength, JoinString } from '../../../types';
import stringConcatChar from './low';

/**
 * Typed signature for repeating a single-character string.
 *
 * @template T - Character type; constrained to strings of exactly one
 * character.
 * @template N - Number of repetitions.
 * @template S - Separator inserted between repetitions.
 * @see -- type {@linkcode JoinString}
 */
type MultiChar_F = <T extends string, N extends number, S extends string = ''>(
  char: ExactLength<1, T>,
  count: N,
  separator?: S,
) => JoinString<TupleOf<T, N>, S>;

/**
 * Repeats a single-character string `count` times, optionally separated by
 * `separator`.
 *
 * @see -- type {@linkcode MultiChar_F}
 */
export default stringConcatChar as MultiChar_F;
