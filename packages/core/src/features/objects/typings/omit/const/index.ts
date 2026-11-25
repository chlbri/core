import { _unknown } from '#utils/_unknown';

/**
 * Removes the keys listed in `K` from `T`, inferring `T` from a literal sample.
 *
 * `T` is a `const` type parameter and `K` is constrained to the keys of `T`,
 * which makes the helper convenient to call with an object literal followed by
 * its keys. The result is the native `Omit<T, K[number]>` type. The helper
 * evaluates to `undefined` at runtime.
 *
 * @template T - Object type to remove keys from.
 * @template K - Key names to remove, captured as a tuple constrained to `keyof T`.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @param __ - Keys to remove.
 * @returns `undefined`, typed as `Omit<T, K[number]>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends object, K extends (keyof T)[]>(_?: T, ...__: K) =>
  _unknown<Omit<T, K[number]>>();

export default fn;
