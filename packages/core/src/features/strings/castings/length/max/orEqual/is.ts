import compare from '../../compare/number/typed';
import type { MaxOrEqualLength } from '#types';

/**
 * Type guard checking that a string is at most a maximum length.
 *
 * Compares the string length with `max` and narrows `value` to the type
 * {@linkcode MaxOrEqualLength}, which accepts lengths below or equal to `max`.
 *
 * @template N - Inclusive upper bound of the string length.
 * @template T - Literal type of the tested string.
 * @param max - Maximum length `value` may reach.
 * @param value - String whose length is checked.
 * @returns `true` when `value` is shorter than or as long as `max`, otherwise
 * `false`.
 */
const isMaxLength = <N extends number, T extends string>(
  max: N,
  value: T,
): value is MaxOrEqualLength<N, T> => {
  const out = compare(max, value);
  return out === -1 || out === 0;
};

export default isMaxLength;
