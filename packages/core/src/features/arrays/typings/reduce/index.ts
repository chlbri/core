import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper extracting the element type of an array.
 *
 * Accepts either a value of type `T` or an array of `T`, and yields `T`, the
 * element type. Main call signature of the `reduce` member of the aggregated
 * {@linkcode typings} helper.
 *
 * @template T - Element type extracted from the array.
 * @param _ - Value, or array of values, of type `T`; ignored at runtime.
 * @returns The type `T`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(_: T | readonly T[] | T[]) => _unknown<T>();

export default fn;
