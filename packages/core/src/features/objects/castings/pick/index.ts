import { partialCall } from '#features/functions/functions/partialCall';
import { pick } from '../../utils/pick';

/**
 * Picks object entries by key.
 *
 * Fixes the `by` parameter of {@linkcode pick} to `'key'`, so entries are matched
 * on their keys. Only entries whose key is listed are kept, and the result is
 * typed as `Pick<T, K[number]>`.
 *
 * @template T - Object being filtered.
 * @template K - Tuple of keys to keep.
 * @param object - Object to pick entries from.
 * @param keys - Keys whose entries are kept in the result.
 * @returns A shallow copy of `object` restricted to the listed keys.
 */
const fn = partialCall.paramArray(pick, 'key') as <
  T extends object,
  K extends any[],
>(
  object: T,
  ...keys: K
) => Pick<T, K[number]>;

export default fn;
