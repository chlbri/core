import { _unknown } from '#utils/_unknown';

/**
 * Type-level constant holding the `boolean` type.
 *
 * Produced by {@linkcode _unknown}, so it has no runtime value; it only names
 * the `boolean` type in type-level expressions. Exposed as `type` on the
 * aggregated {@linkcode typings} helper.
 */
const fn = _unknown<boolean>();

export default fn;
