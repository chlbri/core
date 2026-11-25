import { partialCall } from '#features/functions/functions/partialCall';
import { omit } from '#features/objects/utils/omit';

/**
 * Omits object entries by key with compile-time key checking.
 *
 * Fixes the `by` parameter of {@linkcode omit} to `'key'` and constrains `K` to
 * the keys of `T`, so only existing property names are accepted. Matching entries
 * are removed and a new object typed as `Omit<T, K[number]>` is returned.
 *
 * @template T - Object being filtered.
 * @template K - Tuple of existing keys to remove.
 * @param object - Object to omit entries from.
 * @param keys - Keys whose entries are removed from the result.
 * @returns A shallow copy of `object` without the listed keys.
 */
const fn = partialCall.paramArray(omit, 'key') as <
  T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => Omit<T, K[number]>;

export default fn;
