import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper narrowing an array type to a subtype.
 *
 * Yields the mutable array type `T` itself, which lets a caller expose a
 * narrower element type than the default one instead of widening it.
 *
 * @template T - Mutable array type exposed as the result.
 * @param _ - Array whose type is exposed; ignored at runtime.
 * @returns The type `T`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends unknown[]>(_?: T) => _unknown<T>();

export default fn;
