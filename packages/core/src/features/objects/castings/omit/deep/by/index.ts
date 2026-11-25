import { partialCall } from '#features/functions/functions/partialCall';
import type { Keys, NotSubType, PrimitiveObjectMap } from '#types';
import { omitDeep } from '../../../../utils/omit.deep';

/**
 * Recursively omits object entries by value.
 *
 * Fixes the `by` parameter of {@linkcode omitDeep} to `'element'` and walks into
 * nested plain objects. At every level, entries whose value is listed are
 * dropped, and the result is typed with type {@linkcode NotSubType}.
 *
 * @template T - Object being filtered.
 * @template K - Tuple of values to remove at every nesting level.
 * @param object - Object to omit entries from.
 * @param values - Values removed from the object and all nested plain objects.
 * @returns A deep copy of `object` without the entries matching `values`.
 */
const fn = partialCall.paramArray(omitDeep, 'element') as <
  T extends PrimitiveObjectMap,
  K extends Keys[],
>(
  object: T,
  ...values: K
) => NotSubType<T, K[number]>;

export default fn;
