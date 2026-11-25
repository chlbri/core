import { identity } from '#utils/identity';

/**
 * Constant equal to `0`.
 *
 * Built through {@linkcode identity}, which types the value as `number`.
 * Exposed as `ZERO` on the aggregated {@linkcode castings} helper.
 */
const fn = identity(0);

export default fn;
