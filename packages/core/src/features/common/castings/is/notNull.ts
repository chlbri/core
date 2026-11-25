/**
 * Predicate that checks whether a value is not `null`.
 *
 * @param value - Value to test.
 * @returns `true` when `value` is not `null`.
 */
const fn = (value: unknown) => {
  return value !== null;
};

export default fn;
