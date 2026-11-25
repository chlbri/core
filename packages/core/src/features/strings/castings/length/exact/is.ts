import { ExactLength } from '../../../types';
import compare from '../compare//number/typed';

/**
 * Type guard checking that a string has an exact length.
 *
 * Compares the string length with `exact` and narrows `value` to the type
 * {@linkcode ExactLength} `<N, T>`.
 *
 * @template N - Literal length the string must have.
 * @template T - Literal type of the tested string.
 * @param exact - Required length of `value`.
 * @param value - String whose length is checked.
 * @returns `true` when `value` has exactly `exact` characters, otherwise
 * `false`.
 */
const isExactLength = <N extends number, T extends string>(
  exact: N,
  value: T,
): value is ExactLength<N, T> => {
  const out = compare(exact, value);
  return out === 0;
};

export default isExactLength;
