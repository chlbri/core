import { partialCall } from '#features/functions/functions/partialCall';
import { omit } from '../../../utils/omit';

/**
 * Omits object entries by key while preserving literal inference.
 *
 * Fixes the `by` parameter of {@linkcode omit} to `'key'` and constrains `T` with
 * the `const` modifier, so literal types are not widened. Keys must belong to
 * `T`, and the matching entries are removed into a new object typed as
 * `Omit<T, K[number]>`.
 *
 * @template T - Object being filtered, inferred as a literal type.
 * @template K - Tuple of existing keys to remove.
 * @param object - Object to omit entries from.
 * @param keys - Keys whose entries are removed from the result.
 * @returns A shallow copy of `object` without the listed keys.
 */
const fn = partialCall.paramArray(omit, 'key') as <
  const T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => Omit<T, K[number]>;

export default fn;
