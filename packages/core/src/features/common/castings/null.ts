import { castFn } from '#utils/castFn';
import { isFn } from '#utils/is/_default';

/**
 * Casting helper restricted to the `null` value.
 *
 * Adds a strict guard built from {@linkcode isFn} to the identity cast created
 * by the base factory.
 *
 * @see {@linkcode castFn}
 */
const fn = castFn<null>()({ is: isFn(null) });

export default fn;
