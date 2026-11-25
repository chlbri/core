import { isInstance } from '#utils/is/_default';

/**
 * Guard that checks whether a value is a `Date`.
 *
 * Built with {@linkcode isInstance} using the `Date` constructor.
 */
const fn = isInstance(Date);

export default fn;
