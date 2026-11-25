/**
 * Guard that checks whether a value is `null` or `undefined`.
 *
 * @param value - Value to test.
 * @returns `true` when `value` is `null` or `undefined`.
 */
const fn = (value: unknown): value is null | undefined => {
  return value === null || value === undefined;
};

export default fn;
