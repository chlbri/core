import compare from '../compare/number/typed';
import type { MaxLength } from '../../../types';

/**
 * Type guard checking that a string is shorter than a maximum length.
 *
 * Compares the string length with `max` and narrows `value` to the type
 * {@linkcode MaxLength}, which only accepts lengths strictly below `max`.
 *
 * @template N - Exclusive upper bound of the string length.
 * @template T - Literal type of the tested string.
 * @param max - Maximum length `value` must stay below.
 * @param value - String whose length is checked.
 * @returns `true` when `value` is shorter than `max`, otherwise `false`.
 */
const isMaxLength = <N extends number, T extends string>(
  max: N,
  value: T,
): value is MaxLength<N, T> => {
  const out = compare(max, value);
  return out === -1;
};

export default isMaxLength;
