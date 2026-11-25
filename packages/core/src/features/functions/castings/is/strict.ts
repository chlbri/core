import type { Fn } from '#types';

/**
 * Builds a function guard combined with a predicate.
 *
 * @template T - Tuple of the function parameters.
 * @template R - Return type of the function.
 * @param fn - Predicate applied to the function value.
 * @returns A guard narrowing to `Fn<T, R>` when both checks pass.
 */
const strict = <T extends any[] = any[], R = any>(
  fn: (value: Fn<T, R>) => boolean,
) => {
  return (value: unknown): value is Fn<T, R> =>
    typeof value === 'function' && fn(value as Fn<T, R>);
};

export default strict;
