/**
 * Guard that checks whether a value is `undefined`.
 *
 * @param value - Value to test.
 * @returns `true` when `value` is `undefined`.
 */
const fn = (value: unknown): value is undefined => {
  return value === undefined;
};

export default fn;
