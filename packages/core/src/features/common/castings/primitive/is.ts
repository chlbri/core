import { isPrimitive } from '#utils/is/primitive';

/**
 * Guard checking whether a value is a primitive.
 *
 * Alias of {@linkcode isPrimitive}, it accepts `string`, `number`, `boolean`,
 * `null` and `undefined`, narrowing the value to type {@linkcode Primitive}.
 * Exposed as `is` on the aggregated `primitive` helper.
 */
const fn = isPrimitive;

export default fn;
