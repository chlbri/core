import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper turning a variadic argument list into an array type.
 *
 * Accepts any number of values of type `T` and yields `T[]`, the plain mutable
 * array type of their common element type. Exposed as `low` on the aggregated
 * {@linkcode typings} helper.
 *
 * @template T - Element type of the resulting array.
 * @param _ - Values whose type is collected; ignored at runtime.
 * @returns The type `T[]`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(..._: T[]) => _unknown<T[]>();

export default fn;
