import { castFn } from '#utils/castFn';
import { DIGITS } from '../constants';

/**
 * Casting helper restricted to the single decimal digits `0` through `9`.
 *
 * Built with the `withValues` variant of {@linkcode castFn}, which adds an `is`
 * guard that checks membership in the {@linkcode DIGITS} tuple. Exposed as
 * `digit` on the aggregated {@linkcode castings} helper.
 */
const fn = castFn.withValues(...DIGITS);

export default fn;
