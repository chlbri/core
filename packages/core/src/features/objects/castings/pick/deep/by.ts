import { partialCall } from '#features/functions/functions/partialCall';
import { pickDeep } from '#features/objects/utils/pick.deep';

/**
 * Recursively picks object entries by value.
 *
 * Fixes the `by` parameter of {@linkcode pickDeep} to `'element'` and walks into
 * nested plain objects. At every level, entries whose value is listed are kept,
 * and a nested object is included only when it still holds at least one match.
 *
 * @param object - Object to pick entries from.
 * @param valuesOrKeys - Values whose matching entries are kept at every level.
 * @returns A deep copy of `object` restricted to the entries matching the values.
 */
const fn = partialCall.paramArray(pickDeep, 'element');

export default fn;
