import { castFn } from '#utils/castFn';

/**
 * Base casting helper for the `number` type.
 *
 * Creates the identity number cast through {@linkcode castFn}, which adds the
 * `forceCast` and `dynamic` utilities. Serves as the main function of the
 * aggregated {@linkcode castings} helper.
 */
const fn = castFn<number>()();

export default fn;
