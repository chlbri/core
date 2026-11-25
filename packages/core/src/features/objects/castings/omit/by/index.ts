import { partialCall } from '#features/functions/functions/partialCall';
import type { SubType } from '#types';
import { omit } from '../../../utils/omit';

/**
 * Omits object entries by value.
 *
 * Fixes the `by` parameter of {@linkcode omit} to `'element'`, so entries are
 * matched on their values instead of their keys. Every entry whose value is
 * included in `values` is dropped, and the remaining entries are copied into a
 * new object typed as type {@linkcode SubType} of `T` filtered by `K[number]`.
 *
 * @template T - Object being filtered.
 * @template K - Tuple of candidate values to remove.
 * @param object - Object to omit entries from.
 * @param values - Values whose matching entries are removed.
 * @returns A shallow copy of `object` without the entries matching `values`.
 */
const fn = partialCall.paramArray(omit, 'element') as <
  T extends object,
  K extends any[],
>(
  object: T,
  ...values: K
) => SubType<T, K[number]>;

export default fn;
