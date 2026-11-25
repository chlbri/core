import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper reading the type of a value by key.
 *
 * Accepts an object type `T` and one of its keys `K`, and yields `T[K]`, the
 * type of the property stored under that key. Exposed as `byKey` on the
 * aggregated {@linkcode typings} helper.
 *
 * @template T - Object type whose property is read.
 * @template K - Key of `T` whose value type is yielded.
 * @param _ - Object type carrier; ignored at runtime.
 * @param __ - Key carrier; ignored at runtime.
 * @returns The type `T[K]`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, K extends keyof T>(_?: T, __?: K) => _unknown<T[K]>();

export default fn;
