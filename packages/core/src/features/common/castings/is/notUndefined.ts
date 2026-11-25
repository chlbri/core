/**
 * Predicate that checks whether a value is not `undefined`.
 *
 * @param value - Value to test.
 * @returns `true` when `value` is not `undefined`.
 */
const fn = (value: unknown) => {
  return value !== undefined;
};

export default fn;
