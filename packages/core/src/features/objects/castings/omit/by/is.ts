import { partialCall } from '#features/functions/functions/partialCall';
import { omitIs } from '#features/objects/utils/omit.is';

/**
 * Checks that an object contains none of the given values.
 *
 * Fixes the `by` parameter of {@linkcode omitIs} to `'element'`, so entries are
 * tested by value. The result is `false` as soon as an entry holds one of the
 * listed values, and `true` when no entry does.
 *
 * @param object - Object to inspect.
 * @param valuesOrKeys - Values that must not be used by any entry.
 * @returns `true` when none of the values is used by `object`, otherwise `false`.
 */
const fn = partialCall.paramArray(omitIs, 'element');

export default fn;
