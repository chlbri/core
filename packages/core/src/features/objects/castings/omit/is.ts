import { partialCall } from '#features/functions/functions/partialCall';
import { omitIs } from '#features/objects/utils/omit.is';
import type { Keys, PrimitiveObjectMap } from '#types';

/**
 * Checks that an object contains none of the given keys.
 *
 * Fixes the `by` parameter of {@linkcode omitIs} to `'key'` and returns a
 * predicate that inspects the own enumerable entries of the object. The result
 * is `false` as soon as one entry uses a listed key, and `true` otherwise.
 *
 * @template K - Tuple of keys tested for absence.
 * @param object - Object to inspect.
 * @param keys - Keys that must not be present.
 * @returns `true` when none of `keys` exists on `object`, otherwise `false`.
 */
const fn = partialCall.paramArray(omitIs, 'key') as <K extends Keys[]>(
  object: PrimitiveObjectMap,
  ...keys: K
) => boolean;

export default fn;
