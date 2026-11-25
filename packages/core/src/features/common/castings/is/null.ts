/**
 * Guard that checks whether a value is `null`.
 *
 * @param value - Value to test.
 * @returns `true` when `value` is `null`.
 */
const fn = (value: unknown): value is null => {
  return value === null;
};

export default fn;
