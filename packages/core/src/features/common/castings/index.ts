import { castFn } from '#utils/castFn';

/**
 * Base casting helper that treats values as `unknown`.
 *
 * Identity cast produced by the base factory, serving as the foundation that
 * the other casting helpers in this directory extend.
 *
 * @see {@linkcode castFn}
 */
const fn = castFn<unknown>()();

export default fn;
