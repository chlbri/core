import type { PrimitiveObject } from '#types';
import { castFn } from '#utils/castFn';

/**
 * Identity cast for type {@linkcode PrimitiveObject}.
 *
 * Built with {@linkcode castFn}, which returns the value unchanged and adds the
 * `forceCast` and `dynamic` helpers. The type covers primitives, arrays and
 * objects whose nested values are primitives. No runtime validation is
 * performed.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = castFn<PrimitiveObject>()();

export default fn;
