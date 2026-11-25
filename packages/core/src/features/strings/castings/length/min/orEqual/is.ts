import compare from '../../compare/number/typed';
import type { MinOrEqualLength } from '#types';

/**
 * Narrows a string to type {@linkcode MinOrEqualLength}.
 *
 * Measures the value against `min` with {@linkcode compare} and returns `true`
 * when its length is greater than or equal to `min`.
 *
 * @template N - Numeric literal type of the minimum length.
 * @template T - Type of the tested string.
 * @param min - Minimum length threshold (inclusive).
 * @param value - String whose length is checked.
 * @returns `true` when the string is at least `min` characters long, otherwise
 * `false`.
 */
const isMaxLength = <N extends number, T extends string>(
  min: N,
  value: T,
): value is MinOrEqualLength<N, T> => {
  const out = compare(min, value);
  return out === 1 || out === 0;
};

export default isMaxLength;
