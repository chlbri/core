import type { RuA } from '#types';
import { _unknown } from './_unknown';
import { expandFn } from './expandFn';
import { mergeIs } from './is/merge';

/**
 * Creates a runtime cast helper for `T`.
 *
 * The returned builder produces an identity function typed `(arg: T) => T`,
 * augmented through {@linkcode expandFn} with the supplied extensions plus:
 * - `forceCast`: returns any value typed as `T` without validation;
 * - `dynamic`: returns a value of subtype `U` of `T` unchanged.
 *
 * @template T - Type produced by the cast.
 * @returns Builder accepting optional extensions and returning the augmented
 * cast function.
 * @see -- type {@linkcode FnBasic}
 */
export const castFn = <T>() => {
  /**
   * Builds the cast function for `T` with the supplied extension members.
   *
   * @template Tr - Type of the extension members.
   * @param extensions - Members to attach to the cast function.
   * @returns The cast function augmented with the extension members.
   */
  const _out = <const Tr extends object = object>(extensions?: Tr) => {
    const out = expandFn((arg: T) => arg, {
      ...(extensions as Tr),
      forceCast: (arg: unknown) => {
        return _unknown<T>(arg);
      },
      dynamic: <U extends T>(arg: U) => {
        return arg;
      },
    });
    return out;
  };
  return _out;
};

/**
 * Creates a cast helper restricted to a set of literal values.
 *
 * The produced cast is typed as the union of the element types of `values` and
 * carries an `is` guard, built with {@linkcode mergeIs}, that checks strict
 * equality against any of the provided values. Any `is` passed through
 * extensions is overridden.
 *
 * @template T - Tuple of the accepted values.
 * @param values - Values accepted by the generated guard.
 * @returns Builder accepting optional extensions and returning the cast
 * function.
 */
castFn.withValues = <T extends RuA>(...values: T) => {
  const out = <const Tr extends object = object>(extensions?: Tr) =>
    castFn<T[number]>()({ ...extensions, is: mergeIs(...values) });
  return out;
};
