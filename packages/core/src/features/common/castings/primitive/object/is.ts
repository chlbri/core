import { isPrimitiveObject } from '#utils/is/primitive.object';

/**
 * Recursive guard checking whether a value is a primitive object.
 *
 * Alias of {@linkcode isPrimitiveObject}, it narrows the value to type
 * {@linkcode PrimitiveObject} and returns `false` as soon as a nested value is
 * not a primitive. Exposed as `is` on the aggregated `object` helper.
 */
const fn = isPrimitiveObject;

export default fn;
