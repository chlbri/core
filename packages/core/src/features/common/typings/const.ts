import { _unknown } from '#utils/_unknown';

/**
 * Captures the literal type of the supplied value.
 *
 * The `const` type parameter keeps string, number and object literals narrow
 * instead of widening them.
 *
 * @template T - Inferred type of the value, preserved literally.
 * @param _ - Value whose type is captured; ignored at runtime.
 * @returns An `undefined` value typed as `T`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T>(_?: T) => _unknown<T>();

export default fn;
