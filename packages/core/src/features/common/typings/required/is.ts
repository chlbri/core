import { _unknown } from '#utils/_unknown';

/**
 * Type-level check evaluating whether a type is non-nullable.
 *
 * Yields the literal `true` when `T` is neither `null` nor `undefined`, and the
 * literal `false` otherwise. Exposed as `is` on the `required` member of the
 * aggregated common {@linkcode typings} helper.
 *
 * @template T - Type to test.
 * @param _ - Value whose type is tested; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T>(_: T) => _unknown<T extends null | undefined ? false : true>();

export default fn;
