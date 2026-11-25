import { partialCall } from '#features/functions/functions/partialCall';
import type { DeepOmit, Keys, PrimitiveObjectMap } from '#types';
import { omitDeep } from '../../../utils/omit.deep';

/**
 * Recursively omits object entries by key.
 *
 * Fixes the `by` parameter of {@linkcode omitDeep} to `'key'` and filters nested
 * plain objects as well as the root. At every level, entries whose key is listed
 * are dropped, and the result is typed with type {@linkcode DeepOmit}.
 *
 * @template T - Object being filtered.
 * @template K - Tuple of keys to remove at every nesting level.
 * @param object - Object to omit entries from.
 * @param keys - Keys removed from the object and all nested plain objects.
 * @returns A deep copy of `object` without the listed keys.
 */
const fn = partialCall.paramArray(omitDeep, 'key') as <
  T extends PrimitiveObjectMap,
  K extends Keys[],
>(
  object: T,
  ...keys: K
) => DeepOmit<T, K[number]>;

export default fn;
