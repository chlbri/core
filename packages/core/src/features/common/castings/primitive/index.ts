import type { Primitive } from '#types';
import { castFn } from '#utils/castFn';

/**
 * Identity cast for type {@linkcode Primitive}, the union of `string`, `number`,
 * `boolean`, `null` and `undefined`.
 *
 * Built with {@linkcode castFn}, which returns the value unchanged and adds the
 * `forceCast` and `dynamic` helpers. No runtime validation is performed.
 *
 * @see -- type {@linkcode FnBasic}
 */
const fn = castFn<Primitive>()();

export default fn;
