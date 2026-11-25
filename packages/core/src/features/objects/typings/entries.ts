import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper describing the entries of an object type.
 *
 * Yields an array of `[key, value]` pairs in which the key type is `keyof T`
 * and the value type is `T[keyof T]`. Exposed as `entries` on the aggregated
 * {@linkcode typings} helper.
 *
 * @template T - Object type whose entries are described.
 * @param _ - Object type carrier; ignored at runtime.
 * @returns The array of entry types; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) => _unknown<[keyof T, T[keyof T]][]>();

export default fn;
