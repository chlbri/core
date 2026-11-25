import { _unknown } from '#utils/_unknown';

/**
 * Type-level constant for the literal `1`.
 *
 * Returns no runtime value; {@linkcode _unknown} only communicates the literal
 * type `1`. Exposed as `ONE` on the aggregated {@linkcode typings} helper.
 */
const fn = () => _unknown<1>();

export default fn;
