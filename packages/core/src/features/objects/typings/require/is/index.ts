import { _unknown } from '#utils/_unknown';

/**
 * Type-level check evaluating whether an object type satisfies another.
 *
 * Evaluates the conditional type `T extends T & R ? true : false`, yielding the
 * literal `true` when `T` already includes every property of `R` and the literal
 * `false` otherwise. Main call signature of the `is` member of the `require`
 * typing helper.
 *
 * @template T - Object type to test.
 * @template R - Object type that `T` is expected to satisfy.
 * @param _ - Object type to test; ignored at runtime.
 * @param __ - Expected object type; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends object, R extends object>(_?: T, __?: R) =>
  _unknown<T extends T & R ? true : false>();

export default fn;
