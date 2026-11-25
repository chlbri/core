import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper merging two object types.
 *
 * Accepts an object type `T` and a second object type `R`, and yields their
 * intersection `T & R`. Intersecting `T` with a required shape of some keys is
 * how the `strict` variant makes those keys required. Main call signature of the
 * `require` member of the aggregated {@linkcode typings} helper.
 *
 * @template T - Base object type.
 * @template R - Object type intersected with `T`.
 * @param _ - Base object type carrier; ignored at runtime.
 * @param __ - Extension object type carrier; ignored at runtime.
 * @returns The type `T & R`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, R extends object>(_?: T, __?: R) => _unknown<T & R>();

export default fn;
