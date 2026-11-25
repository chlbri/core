import type { PrimitiveObject } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Typing helper describing the nested primitive-object union.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type` helpers whose target is type {@linkcode PrimitiveObject}: a primitive,
 * or a plain object whose values are recursively primitives or arrays of them.
 * Exposed as `object` on the `primitive` member of the aggregated common
 * {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<PrimitiveObject>()();

export default fn;
