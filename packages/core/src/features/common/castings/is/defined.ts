/**
 * Guard that checks whether a value is defined.
 *
 * Returns `true` when the value is neither `null` nor `undefined`, narrowing it
 * to `NonNullable<T>`.
 *
 * @template T - Type of the checked value.
 * @param value - Value to test.
 * @returns `true` when `value` is not `null` or `undefined`.
 */
const fn = <T>(value?: T): value is NonNullable<T> => {
  return value !== undefined && value !== null;
};

export default fn;
