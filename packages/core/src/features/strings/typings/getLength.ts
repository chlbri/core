import { _unknown } from '#utils/_unknown';

/**
 * Computes the length of a string literal at the type level.
 *
 * Accepts a string so that its literal type `T` can be captured, then yields
 * `T['length']` as a numeric literal without any runtime computation. Exposed
 * as `getLength` on the aggregated {@linkcode typings} helper.
 *
 * @template T - String literal whose length is measured.
 * @param _ - String whose type is measured; ignored at runtime.
 * @returns The numeric length type; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends string>(_?: T) => _unknown<T['length']>();

export default fn;
