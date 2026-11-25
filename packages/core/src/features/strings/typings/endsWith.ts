import { _unknown } from '#utils/_unknown';

/**
 * Checks at the type level whether a string ends with a given suffix.
 *
 * Captures the literal types of `T` and `U` and resolves to `true` when `T`
 * matches a template ending with `U`, otherwise `false`. No runtime check is
 * performed. Exposed as `endsWith` on the aggregated {@linkcode typings}
 * helper.
 *
 * @template T - String literal to inspect.
 * @template U - Expected suffix.
 * @param _ - String whose type is inspected; ignored at runtime.
 * @param __ - Suffix whose type is compared; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends string, U extends string>(_?: T, __?: U) =>
  _unknown<T extends `${string}${U}` ? true : false>();

export default fn;
