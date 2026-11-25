import type { Fn } from '#types';
import { _unknown } from '#utils/_unknown';
import { castFn } from '#utils/castFn';
import { expandFn } from '#utils/expandFn';
import { identity } from '#utils/identity';

/**
 * Base runtime casting helpers for functions.
 *
 * Creates an identity cast for `Fn` through {@linkcode castFn} and attaches:
 * - `is`: function type guard, extended with a `strict` variant;
 * - `forceCast`: casts any value to `Fn<T, R>`;
 * - `dynamic`: exposes a function subtype unchanged.
 *
 * @see -- type {@linkcode FnBasic}
 */
const castings = castFn()({
  /**
   * Function type guard.
   *
   * Extends the basic `typeof value === 'function'` check with a `strict`
   * variant.
   */
  is: expandFn(
    (value: unknown): value is Fn => {
      return typeof value === 'function';
    },
    {
      /**
       * Builds a guard that combines the function check with a predicate.
       *
       * @template T - Tuple of the function parameters.
       * @template R - Return type of the function.
       * @param fn - Predicate applied to the function value.
       * @returns A guard narrowing to `Fn<T, R>`.
       */
      strict: <T extends any[] = any[], R = any>(
        fn: (value: Fn<T, R>) => boolean,
      ) => {
        return (value: unknown): value is Fn<T, R> =>
          typeof value === 'function' && fn(value as Fn<T, R>);
      },
    },
  ),

  /**
   * Casts any value to a function type without validation.
   *
   * @template T - Tuple of the function parameters.
   * @template R - Return type of the function.
   * @param value - Value to cast.
   * @returns `value` typed as `Fn<T, R>`.
   */
  forceCast: <T extends any[], R = any>(value: unknown) => {
    return _unknown<Fn<T, R>>(value);
  },

  /**
   * Exposes a function subtype unchanged.
   *
   * @template T - Tuple of the function parameters.
   * @template R - Return type of the function.
   * @returns An identity function typed as `Fn<T, R>`.
   */
  // oxlint-disable-next-line no-unused-vars
  dynamic: <T extends any[], R = any>(..._: [...T, R]) => identity<Fn<T, R>>,
});

export default castings;
