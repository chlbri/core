import { _unknown } from '#utils/_unknown';

/**
 * Lowercases a string literal at the type level.
 *
 * Accepts a string so that its literal type `T` can be captured, then yields
 * `Lowercase<T>` without any runtime conversion. Exposed as `toLowerCase` on
 * the aggregated {@linkcode typings} helper.
 *
 * @template T - String literal to lowercase.
 * @param _ - String whose type is lowercased; ignored at runtime.
 * @returns The lowercased string literal type; the runtime value is
 * `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends string>(_?: T) => _unknown<Lowercase<T>>();

export default fn;
