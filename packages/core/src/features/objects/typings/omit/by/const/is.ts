import type { NotSubType, ValuesOf } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Builds a typing predicate for the key removal performed by type
 * {@linkcode NotSubType}.
 *
 * The returned function accepts a candidate type `U` and resolves to `true`
 * when `U` is assignable to `T` without the properties whose value type is
 * covered by `K[number]`, and to `false` otherwise. Both the helper and the
 * predicate evaluate to `undefined` at runtime.
 *
 * @template T - Object type to filter.
 * @template K - Tuple of candidate value types used as the exclusion condition.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @param __ - Values describing the types to remove.
 * @returns A predicate that types the assignability check of a candidate type.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends object, K extends ValuesOf<T>[]>(_?: T, ...__: K) => {
  /**
   * Evaluates whether `U` extends `NotSubType<T, K[number]>`.
   *
   * @template U - Candidate type compared against the expected result.
   * @param _ - Optional sample of `U`; unused at runtime.
   * @returns `undefined`, typed as the literal `true` or `false`.
   */
  // oxlint-disable-next-line no-unused-vars
  const _out = <U>(_?: U) =>
    _unknown<U extends NotSubType<T, K[number]> ? true : false>();

  return _out;
};

export default fn;
