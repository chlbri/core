import { _unknown } from '#utils/_unknown';

/**
 * Builds a typing predicate for type {@linkcode Omit}.
 *
 * The returned function accepts a candidate type `U` and resolves to `true`
 * when `U` is assignable to `T` without the keys listed in `K`, and to `false`
 * otherwise. `T` is a `const` type parameter and `K` is constrained to the keys
 * of `T`. Both the helper and the predicate evaluate to `undefined` at runtime.
 *
 * @template T - Object type to remove keys from.
 * @template K - Key names to remove, captured as a tuple constrained to `keyof T`.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @param __ - Keys to remove.
 * @returns A predicate that types the assignability check of a candidate type.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T, K extends (keyof T)[]>(_?: T, ...__: K) => {
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
