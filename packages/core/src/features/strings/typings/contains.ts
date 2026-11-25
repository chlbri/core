import { _unknown } from '#utils/_unknown';

/**
 * Checks at the type level whether a string contains any of several substrings.
 *
 * Accepts the string `T` and any number of candidate substrings `U`; the
 * result is `true` when `T` matches a template with at least one member of `U`
 * embedded, otherwise `false`. No runtime check is performed. Exposed as
 * `contains` on the aggregated {@linkcode typings} helper.
 *
 * @template T - String literal to inspect.
 * @template U - Tuple of candidate substrings.
 * @param _ - String whose type is inspected; ignored at runtime.
 * @param __ - Candidate substrings; ignored at runtime.
 * @returns The literal `true` or `false`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends string, U extends string[]>(_?: T, ...__: U) =>
  _unknown<T extends `${string}${U[number]}${string}` ? true : false>();

export default fn;
