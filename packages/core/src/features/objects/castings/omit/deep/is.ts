import { partialCall } from '#features/functions/functions/partialCall';
import { omitDeepIs } from '#features/objects/utils/omit.deep.is';
import type { Keys, PrimitiveObjectMap } from '#types';

/**
 * Recursively checks that an object contains none of the given keys.
 *
 * Fixes the `by` parameter of {@linkcode omitDeepIs} to `'key'`. Nested plain
 * objects are inspected as well; the result is `false` as soon as any level
 * exposes a listed key, and `true` otherwise.
 *
 * @param object - Object to inspect.
 * @param keys - Keys that must not be present at any nesting level.
 * @returns `true` when the object and its nested plain objects avoid `keys`.
 */
const fn = partialCall.paramArray(omitDeepIs, 'key') as (
  object: PrimitiveObjectMap,
  ...keys: Keys[]
) => boolean;

export default fn;
