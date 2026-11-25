import { partialCall } from '#features/functions/functions/partialCall';
import type { SubType } from '#types';
import { pick } from '../../utils/pick';

/**
 * Picks object entries by value.
 *
 * Fixes the `by` parameter of {@linkcode pick} to `'element'`, so entries are
 * matched on their values instead of their keys. Only entries whose value is
 * listed are kept, and the result is typed with type {@linkcode SubType}.
 *
 * @template T - Object being filtered.
 * @template K - Tuple of values to keep.
 * @param object - Object to pick entries from.
 * @param keys - Values whose matching entries are kept in the result.
 * @returns A shallow copy of `object` restricted to the entries matching `keys`.
 */
const fn = partialCall.paramArray(pick, 'element') as <
  T extends object,
  K extends any[],
>(
  object: T,
  ...keys: K
) => SubType<T, K[number]>;

export default fn;
