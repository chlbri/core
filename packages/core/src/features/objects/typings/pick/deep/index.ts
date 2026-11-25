import { _unknown } from '#utils/_unknown';

/**
 * Extracts the keys listed in `K` from `T`, under the `deep` namespace.
 *
 * Applies the native `Pick<T, K>` transformation. The helper evaluates to
 * `undefined` at runtime.
 *
 * @template T - Object type to pick from.
 * @template K - Key names to keep, captured as a tuple constrained to `keyof T`.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @param __ - Keys to keep.
 * @returns `undefined`, typed as `Pick<T, K>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, K extends keyof T>(_?: T, ...__: K[]) =>
  _unknown<Pick<T, K>>();

export default fn;
