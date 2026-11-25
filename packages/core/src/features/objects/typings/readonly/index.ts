import { _unknown } from '#utils/_unknown';

/**
 * Adds the `readonly` modifier to every property of `T`.
 *
 * Applies the native `Readonly<T>` transformation, which is shallow: nested
 * objects are left untouched. The helper evaluates to `undefined` at runtime.
 *
 * @template T - Object type to make readonly.
 * @param _ - Optional sample of `T`; unused at runtime.
 * @returns `undefined`, typed as `Readonly<T>`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<Readonly<T>>();

export default fn;
