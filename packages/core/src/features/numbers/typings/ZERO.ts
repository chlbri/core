import { _unknown } from '#utils/_unknown';

/**
 * Type-level constant for the literal `0`.
 *
 * Returns no runtime value; {@linkcode _unknown} only communicates the literal
 * type `0`. Exposed as `ZERO` on the aggregated {@linkcode typings} helper.
 */
const fn = () => _unknown<0>();

export default fn;
