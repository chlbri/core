import { castFn } from '#utils/castFn';

/**
 * Casting helper restricted to the `Date` type.
 *
 * Identity cast produced by the base factory, returning its argument unchanged.
 *
 * @see {@linkcode castFn}
 */
const fn = castFn<Date>()();

export default fn;
