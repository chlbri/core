import { partialCall } from '#features/functions/functions/partialCall';
import { omitDeepIs } from '#features/objects/utils/omit.deep.is';

/**
 * Recursively checks that an object contains none of the given values.
 *
 * Fixes the `by` parameter of {@linkcode omitDeepIs} to `'element'` and inspects
 * nested plain objects. The result is `false` as soon as any level holds a listed
 * value, and `true` otherwise.
 *
 * @param object - Object to inspect.
 * @param valuesOrKeys - Values that must not appear at any nesting level.
 * @returns `true` when the object and its nested plain objects avoid the values.
 */
const fn = partialCall.paramArray(omitDeepIs, 'element');

export default fn;
