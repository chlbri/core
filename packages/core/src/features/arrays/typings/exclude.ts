import type { AnyArray, ExcludeArray } from '#types';
import { _unknown } from '#utils/_unknown';

/**
 * Type-level helper removing elements from an array type.
 *
 * Accepts the array type `T` followed by the candidate values `U`, and yields
 * the tuple of elements of `T` that are assignable to none of the candidate
 * types, as computed by type {@linkcode ExcludeArray}. Exposed as `exclude`
 * on the aggregated {@linkcode typings} helper.
 *
 * @template T - Array or tuple type to filter.
 * @template U - Tuple of the types to remove.
 * @param _ - Array type carrier; ignored at runtime.
 * @param __ - Candidate values whose types select the removed elements;
 * ignored at runtime.
 * @returns The filtered tuple type; the runtime value is `undefined`.
 */
const fn = <const T extends AnyArray, const U extends T[number][]>(
  // oxlint-disable-next-line no-unused-vars
  _?: T,
  ...__: U
) => _unknown<ExcludeArray<T, U[number]>>();

export default fn;
