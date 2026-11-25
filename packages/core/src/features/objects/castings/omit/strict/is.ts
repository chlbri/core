import { partialCall } from '#features/functions/functions/partialCall';
import { omitIs } from '#features/objects/utils/omit.is';

/**
 * Checks that an object contains none of the given keys, with strict key typing.
 *
 * Fixes the `by` parameter of {@linkcode omitIs} to `'key'` and constrains `K` to
 * the keys of `T`. The result is `false` when a listed key is present and `true`
 * otherwise.
 *
 * @template T - Object being inspected.
 * @template K - Tuple of existing keys tested for absence.
 * @param object - Object to inspect.
 * @param keys - Keys that must not be present.
 * @returns `true` when none of `keys` exists on `object`, otherwise `false`.
 */
const fn = partialCall.paramArray(omitIs, 'key') as <
  T extends object,
  K extends (keyof T)[],
>(
  object: T,
  ...keys: K
) => boolean;

export default fn;
