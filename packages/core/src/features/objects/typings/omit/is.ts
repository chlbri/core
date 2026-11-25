import type { Keys } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Builds a typing predicate for type {@linkcode Omit}.
 *
 * The returned function accepts a candidate type `U` and resolves to `true`
 * when `U` is assignable to `T` without the keys listed in `K`, and to `false`
 * otherwise. `K` accepts any key type permitted by type {@linkcode Keys}. Both
 * the helper and the predicate evaluate to `undefined` at runtime.
 *
 * @template T - Type to remove keys from.
 * @template K - Key names to remove, captured as a tuple.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @param __ - Keys to remove.
 * @returns A predicate that types the assignability check of a candidate type.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T, K extends Keys[]>(_?: T, ...__: K) => {
  /**
   * Evaluates whether `U` extends `Omit<T, K[number]>`.
   *
   * @template U - Candidate type compared against the expected result.
   * @param _ - Optional sample of `U`; unused at runtime.
   * @returns `undefined`, typed as the literal `true` or `false`.
   */
  // oxlint-disable-next-line no-unused-vars
  const _out = <U>(_?: U) => _unknown<U extends Omit<T, K[number]> ? true : false>();

  return _out;
};

export default fn;
