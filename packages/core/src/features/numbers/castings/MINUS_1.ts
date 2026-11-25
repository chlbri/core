import { identity } from '#utils/identity';

/**
 * Constant equal to `-1`.
 *
 * Built through {@linkcode identity}, which types the value as `number`.
 * Exposed as `MINUS_1` on the aggregated {@linkcode castings} helper.
 */
const fn = identity(-1);

export default fn;
