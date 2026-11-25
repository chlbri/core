import { _unknown } from '#utils/_unknown';

/**
 * Turns the types of the supplied values into their union.
 *
 * The `const` type parameter keeps each element's literal type narrow.
 *
 * @template T - Tuple type of the supplied values.
 * @param _ - Values whose element types are unioned; ignored at runtime.
 * @returns An `undefined` value typed as the union of the tuple members.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends any[]>(..._: T) => _unknown<T[number]>();

export default fn;
