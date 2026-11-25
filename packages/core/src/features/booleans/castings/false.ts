import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

/**
 * Casting helper restricted to the literal `false` value.
 *
 * Adds the constant `CONST` (set to `false`) and a strict guard derived from
 * {@linkcode isFn} to the identity cast created by the base factory, and is
 * exposed as `false` on the aggregated `castings` helper.
 *
 * @see {@linkcode castFn}
 */
const fn = castFn<false>()({ CONST: false, is: isFn(false) });

export default fn;
