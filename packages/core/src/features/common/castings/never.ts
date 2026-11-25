import { castFn } from '#utils/castFn';
import { isInstance } from '#utils/is/_default';

/**
 * Casting helper restricted to the `never` type.
 *
 * Adds an `is` guard created by {@linkcode isInstance} that tests for `Error`
 * instances to the identity cast produced by the base factory.
 *
 * @see {@linkcode castFn}
 */
const fn = castFn<never>()({ is: isInstance(Error) });

export default fn;
