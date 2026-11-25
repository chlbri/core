import { isTypeFn } from '#utils/is/_default';

/**
 * Runtime type guard that detects `number` values.
 *
 * Built from {@linkcode isTypeFn} with the `number` primitive. Exposed as `is`
 * on the aggregated {@linkcode castings} helper.
 *
 * @param value - Value to test.
 * @returns `true` when `value` is of type `number`, otherwise `false`.
 */
const fn = isTypeFn('number');

export default fn;
