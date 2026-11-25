import { partialCall } from '#features/functions/functions/partialCall';
import { pickDeep } from '#features/objects/utils/pick.deep';

/**
 * Recursively picks object entries by key.
 *
 * Fixes the `by` parameter of {@linkcode pickDeep} to `'key'` and walks into
 * nested plain objects. At every level, entries whose key is listed are kept, and
 * a nested object is included only when it still holds at least one match.
 *
 * @param object - Object to pick entries from.
 * @param valuesOrKeys - Keys kept in the object and all nested plain objects.
 * @returns A deep copy of `object` restricted to the listed keys.
 */
const fn = partialCall.paramArray(pickDeep, 'key');

export default fn;
