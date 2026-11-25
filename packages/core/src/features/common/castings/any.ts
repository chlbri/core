import { castFn } from '#utils/castFn';

/**
 * Casting helper that treats values as `any`.
 *
 * Identity cast produced by the base factory, so it also exposes `forceCast`
 * and `dynamic` helpers.
 *
 * @see {@linkcode castFn}
 */
const fn = castFn<any>()();

export default fn;
