import { _unknown } from '#utils/_unknown';

/**
 * Returns a type already known to be readonly, preserving its inferred shape.
 *
 * The type parameter is constrained to `Readonly<T>`, so the argument type must
 * already accept readonly properties, while the returned type stays exactly `T`
 * instead of being transformed. The helper evaluates to `undefined` at runtime.
 *
 * @template T - Readonly object type forwarded unchanged.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @returns `undefined`, typed as `T`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends Readonly<T>>(_?: T) => _unknown<T>();

export default fn;
