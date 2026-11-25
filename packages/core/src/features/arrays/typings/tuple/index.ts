import type { RuA } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper capturing arguments as a tuple type.
 *
 * Yields the tuple `T` itself instead of widening the arguments to an array,
 * thanks to the `const` type parameter. Main call signature of the `tuple`
 * member of the aggregated {@linkcode typings} helper.
 *
 * @template T - Tuple type captured from the arguments.
 * @param _ - Elements whose type is captured; ignored at runtime.
 * @returns The type `T`; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends RuA>(..._: T) => _unknown<T>();

export default fn;
