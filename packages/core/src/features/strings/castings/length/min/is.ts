import compare from '../compare/number/typed';
import type { MinLength } from '#types';

/**
 * Narrows a string to type {@linkcode MinLength}.
 *
 * Measures the value against `min` with {@linkcode compare} and returns `true`
 * only when its length is strictly greater than `min`.
 *
 * @template N - Numeric literal type of the minimum length.
 * @template T - Type of the tested string.
 * @param min - Minimum length threshold (exclusive).
 * @param value - String whose length is checked.
 * @returns `true` when the string is longer than `min`, otherwise `false`.
 */
const isMaxLength = <N extends number, T extends string>(
  min: N,
  value: T,
): value is MinLength<N, T> => {
  const out = compare(min, value);
  return out === 1;
};

export default isMaxLength;
