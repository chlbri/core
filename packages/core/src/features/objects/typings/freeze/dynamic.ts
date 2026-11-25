import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper exposing a readonly subtype of a value.
 *
 * Accepts a value whose type `T` is already assignable to `Readonly<T>` and
 * yields `T` unchanged, which lets a caller name a readonly subtype instead of
 * the default readonly type. Exposed as `dynamic` on the `freeze` member of the
 * aggregated {@linkcode typings} helper.
 *
 * @template T - Readonly type exposed as the result.
 * @param _ - Value whose type is exposed; ignored at runtime.
 * @returns The type `T`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends Readonly<T>>(_?: T) => _unknown<T>();

export default fn;
