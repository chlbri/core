/**
 * Predicate that checks whether a value is neither `null` nor `undefined`.
 *
 * Equivalent to {@linkcode defined} without type narrowing.
 *
 * @param value - Value to test.
 * @returns `true` when `value` is neither `null` nor `undefined`.
 */
const fn = (value: unknown) => {
  return value !== null && value !== undefined;
};

export default fn;
