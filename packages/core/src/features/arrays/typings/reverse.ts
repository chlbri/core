import type { ReverseArray, RuA } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper reversing the order of a tuple.
 *
 * Yields the tuple `T` with its elements in reverse order; types that are not
 * mutable tuples are returned unchanged. Exposed as `reverse` on the
 * aggregated {@linkcode typings} helper.
 *
 * @template T - Tuple type to reverse.
 * @param _ - Elements whose type is reversed; ignored at runtime.
 * @returns The reversed tuple type; the runtime value is `undefined`.
 *
 * @see -- type {@linkcode ReverseArray}
 */
// oxlint-disable-next-line no-unused-vars
const fn = <T extends RuA>(..._: T) => _unknown<ReverseArray<T>>();

export default fn;
