import { _unknown } from '#utils/_unknown';

/**
 * Checks at the type level whether a string starts with a given prefix.
 *
 * Captures the literal types of `T` and `U` and resolves to `true` when `T`
 * matches a template starting with `U`, otherwise `false`. No runtime check is
 * performed. Exposed as `startsWith` on the aggregated {@linkcode typings}
 * helper.
 *
 * @template T - String literal to inspect.
 * @template U - Expected prefix.
 * @param _ - String whose type is inspected; ignored at runtime.
 * @param __ - Prefix whose type is compared; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends string, U extends string>(_?: T, __?: U) =>
  _unknown<T extends `${U}${string}` ? true : false>();

export default fn;
