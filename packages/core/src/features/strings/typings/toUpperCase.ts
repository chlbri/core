import { _unknown } from '#utils/_unknown';

/**
 * Uppercases a string literal at the type level.
 *
 * Accepts a string so that its literal type `T` can be captured, then yields
 * `Uppercase<T>` without any runtime conversion. Exposed as `toUpperCase` on
 * the aggregated {@linkcode typings} helper.
 *
 * @template T - String literal to uppercase.
 * @param _ - String whose type is uppercased; ignored at runtime.
 * @returns The uppercased string literal type; the runtime value is
 * `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends string>(_?: T) => _unknown<Uppercase<T>>();

export default fn;
