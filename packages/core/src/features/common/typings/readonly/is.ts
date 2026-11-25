import { _unknown } from '#utils/_unknown';

/**
 * Type-level check evaluating whether an object type is readonly.
 *
 * Evaluates the conditional type `T extends Readonly<T> ? true : false`,
 * yielding the literal `true` when `T` is assignable to its readonly form and
 * `false` otherwise. Exposed as `is` on the `readonly` member of the aggregated
 * common {@linkcode typings} helper.
 *
 * @template T - Object type to test.
 * @param _ - Value whose type is tested; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object>(_?: T) =>
  _unknown<T extends Readonly<T> ? true : false>();

export default fn;
