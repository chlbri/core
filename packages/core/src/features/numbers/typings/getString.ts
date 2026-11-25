import { _unknown } from '#utils/_unknown';

/**
 * Computes the string form of a numeric type at the type level.
 *
 * Accepts a number so that its literal type `T` can be captured, then returns
 * the string literal type `` `${T}` `` without any runtime conversion. The
 * result mirrors type {@linkcode ToString} and is exposed as `getString` on the
 * aggregated {@linkcode typings} helper.
 *
 * @template T - Numeric literal type to stringify.
 * @param _ - Number whose type is converted.
 * @returns The type `` `${T}` ``; the runtime value is `undefined`.
 */
// oxlint-disable-next-line no-unused-vars
const fn = <const T extends number>(_: T) => _unknown<`${T}`>();

export default fn;
