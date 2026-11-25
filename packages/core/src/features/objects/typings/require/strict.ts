import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper making selected optional keys required.
 *
 * Accepts an object type `T` and a partial shape `R` whose keys must belong to
 * `T`, and yields `T & Required<R>`, so only the keys present in `R` become
 * required. Exposed as `strict` on the `require` member of the aggregated
 * {@linkcode typings} helper.
 *
 * @template T - Base object type.
 * @template R - Partial shape of the keys to make required.
 * @param _ - Base object type carrier; ignored at runtime.
 * @param __ - Required keys shape carrier; ignored at runtime.
 * @returns The type `T & Required<R>`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, R extends Partial<T>>(_?: T, __?: R) =>
  _unknown<T & Required<R>>();

export default fn;
