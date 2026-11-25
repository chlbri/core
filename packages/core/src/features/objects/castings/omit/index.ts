import { partialCall } from '#features/functions/functions/partialCall';
import type { PrimitiveObjectMap } from '#types';
import { omit } from '../../utils/omit';

/**
 * Omits object entries by key.
 *
 * Fixes the `by` parameter of {@linkcode omit} to `'key'` and wraps it with
 * {@linkcode partialCall}, so the resulting function receives the object first
 * and the keys to remove afterwards. Entries whose key is listed are dropped,
 * and the remaining entries are copied into a new object.
 *
 * @template T - Object being filtered.
 * @template K - Tuple of keys to remove.
 * @param object - Object to omit entries from.
 * @param keys - Keys whose entries are removed from the result.
 * @returns A shallow copy of `object` without the listed keys.
 */
const fn = partialCall.paramArray(omit, 'key') as <
  T extends PrimitiveObjectMap,
  K extends any[],
>(
  object: T,
  ...keys: K
) => Omit<T, K[number]>;

export default fn;
