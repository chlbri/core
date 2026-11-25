/**
 * Runtime type guard that detects `boolean` values.
 *
 * Exposed as `is` on the aggregated {@linkcode castings} helper.
 *
 * @param data - Value to test.
 * @returns `true` when `data` is of type `boolean`, otherwise `false`.
 */
const fn = (data: unknown) => typeof data === 'boolean';

export default fn;
