import type { IndexesOfArray, RuA } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper describing the valid indexes of a tuple as a union.
 *
 * Yields type {@linkcode IndexesOfArray} of `T`, for example `0 | 1 | 2` for
 * a three-element tuple, and `never` for an empty tuple. Exposed as `union` on
 * the `indexes` member of the aggregated {@linkcode typings} helper.
 *
 * @template T - Tuple type whose indexes are computed.
 * @param _ - Tuple type carrier; ignored at runtime.
 * @returns The union of the literal indexes of `T`; the runtime value is
 * `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends RuA>(..._: T) => _unknown<IndexesOfArray<T>>();

export default fn;
