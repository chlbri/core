import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

/**
 * Casting helper restricted to the literal `true` value.
 *
 * Adds the constant `CONST` (set to `true`) and a strict guard derived from
 * {@linkcode isFn} to the identity cast created by the base factory, and is
 * exposed as `true` on the aggregated `castings` helper.
 *
 * @see {@linkcode castFn}
 */
const fn = castFn<true>()({ CONST: true, is: isFn(true) });

export default fn;
