import type { Primitive } from '#types';
import { typeFn } from '#utils/typeFn';

/**
 * Typing helper describing the primitive union.
 *
 * Built with {@linkcode typeFn}, which adds `forceCast`, `dynamic`, `is` and
 * `type` helpers whose target is type {@linkcode Primitive}
 * (`string | number | boolean | undefined | null`). Main call signature of the
 * `primitive` member of the aggregated common {@linkcode typings} helper.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = typeFn<Primitive>()();

export default fn;
