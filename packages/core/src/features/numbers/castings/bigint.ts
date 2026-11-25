import { castFn } from '#utils/castFn';
import { isTypeFn } from '#utils/is/_default';

/**
 * Casting helper for the `bigint` type.
 *
 * Creates the identity bigint cast through {@linkcode castFn} and adds an `is`
 * guard derived from {@linkcode isTypeFn}. Exposed as `bigint` on the
 * aggregated {@linkcode castings} helper.
 */
const fn = castFn<bigint>()({ is: isTypeFn('bigint') });

export default fn;
