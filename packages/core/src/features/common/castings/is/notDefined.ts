/**
 * Predicate that checks whether a value is defined.
 *
 * The non-narrowing counterpart of {@linkcode defined}; it returns `true` when
 * the value is neither `undefined` nor `null`.
 *
 * @param value - Value to test.
 * @returns `true` when `value` is not `undefined` or `null`.
 */
const fn = (value: unknown) => {
  return value !== undefined && value !== null;
};

export default fn;
